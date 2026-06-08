#!/usr/bin/env node
/**
 * figma-drift.js
 *
 * Compares the repo's component tree against .docs/figma-catalog.json
 * and reports any components that are missing or out of sync in Figma.
 *
 * Usage:
 *   node scripts/figma-drift.js           — full report
 *   node scripts/figma-drift.js --pending — pending only (for CI / scheduled agents)
 *   node scripts/figma-drift.js --json    — machine-readable JSON output
 */

const fs   = require('fs');
const path = require('path');

const ROOT        = path.join(__dirname, '..');
const CATALOG_PATH = path.join(ROOT, '.docs/figma-catalog.json');
const TIERS       = ['primitives', 'core', 'layouts'];

// ── Load catalog ──────────────────────────────────────────────────────────────

if (!fs.existsSync(CATALOG_PATH)) {
  console.error('❌  .docs/figma-catalog.json not found. Run #figkit to initialise.');
  process.exit(1);
}
const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));

// ── Scan repo ─────────────────────────────────────────────────────────────────

const results = { pending: [], synced: [], skipped: [], unlisted: [] };

for (const tier of TIERS) {
  const dir = path.join(ROOT, 'components', tier);
  if (!fs.existsSync(dir)) continue;

  const entries = fs.readdirSync(dir).filter(f => {
    const full = path.join(dir, f);
    return fs.statSync(full).isDirectory();
  });

  for (const name of entries) {
    const key   = `${tier}/${name}`;
    const entry = catalog[tier]?.[name];

    if (!entry) {
      results.unlisted.push(key);
    } else {
      const bucket = results[entry.status];
      if (bucket) bucket.push({ key, entry });
      else results.unlisted.push(key);
    }
  }
}

// ── Output ────────────────────────────────────────────────────────────────────

const args        = process.argv.slice(2);
const pendingOnly = args.includes('--pending');
const jsonMode    = args.includes('--json');

if (jsonMode) {
  console.log(JSON.stringify(results, null, 2));
  process.exit(0);
}

const total     = Object.values(results).reduce((s, a) => s + a.length, 0);
const needsWork = results.pending.length + results.unlisted.length;

console.log('\n╔══════════════════════════════════════╗');
console.log('║      Figma Drift Report              ║');
console.log('╚══════════════════════════════════════╝\n');
console.log(`  File     : ${catalog.meta.figmaFileName}`);
console.log(`  File key : ${catalog.meta.figmaFileKey}`);
console.log(`  Updated  : ${catalog.meta.lastUpdated}`);
console.log(`  Tokens   : ${catalog.tokens.status}\n`);

if (results.pending.length > 0) {
  console.log(`🔴  PENDING — needs Figma component (${results.pending.length})`);
  results.pending.forEach(({ key }) => console.log(`    ${key}`));
  console.log('');
}

if (results.unlisted.length > 0) {
  console.log(`⚠️   UNLISTED — not in catalog yet (${results.unlisted.length})`);
  results.unlisted.forEach(key => console.log(`    ${key}`));
  console.log('    → Add to .docs/figma-catalog.json then re-run.');
  console.log('');
}

if (!pendingOnly) {
  if (results.synced.length > 0) {
    console.log(`✅  SYNCED (${results.synced.length})`);
    results.synced.forEach(({ key, entry }) => {
      const nodeRef = entry.figmaNodeId ? ` [${entry.figmaNodeId}]` : '';
      console.log(`    ${key}${nodeRef}`);
    });
    console.log('');
  }

  if (results.skipped.length > 0) {
    console.log(`⏭️   SKIPPED (${results.skipped.length})`);
    results.skipped.forEach(({ key, entry }) =>
      console.log(`    ${key}  — ${entry.reason || ''}`)
    );
    console.log('');
  }
}

console.log(`  ${total} components tracked · ${needsWork} need attention\n`);

if (needsWork > 0) {
  console.log('  To build pending components, type #figbuild in Claude Code.\n');
  process.exit(1); // non-zero so CI / scheduled agents can detect drift
}
