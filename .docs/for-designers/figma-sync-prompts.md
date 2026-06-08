# Figma Sync — Claude Code Prompts for Designers

Shortcuts to keep the Figma file and the codebase in sync. Type these directly into Claude Code.

---

## Check what needs to be built

```
#figcheck
```

Runs the drift report. Shows which components exist in code but are missing from Figma, which are already synced, and which are intentionally skipped.

---

## Build a specific component in Figma

```
#figbuild ComponentName
```

Examples:
```
#figbuild MessageBubble
#figbuild ChatInput
#figbuild StatusBadge
```

Reads the component's code, maps all CSS variables to Figma tokens, creates the component set with variants and properties on the correct page, then marks it synced in the catalog.

---

## Build all pending components

```
#figbuild --all
```

Presents the full pending list and asks which ones to build before starting.

---

## Load Figma build rules before any manual work

```
#figkit
```

Use this before asking Claude to make any manual changes to the Figma file. It loads the full guidelines: token bindings, shared atom rules, variant naming, page layout conventions.

---

## Scheduled drift check (one-time setup)

Run `/schedule` in Claude Code and paste this as the agent prompt:

```
Run `node scripts/figma-drift.js --pending` in the ai-chat repo.
If any components are pending or unlisted, summarise what needs to be built
and suggest running #figbuild. Output a brief list.
```

Recommended cadence: daily. The agent posts a summary if anything is out of sync — silent if everything is up to date.

---

## Reference

| File | Purpose |
|------|---------|
| `.docs/figma-catalog.json` | Sync state for every component — edit this to mark things skipped |
| `.docs/guidelines/figma-guidelines.md` | Token map, shared atom rules, variant naming conventions |
| `.docs/guidelines/figma-sync-workflow.md` | Full documentation of how the sync system works |
| `scripts/figma-drift.js` | CLI drift checker — run directly with `node scripts/figma-drift.js` |
