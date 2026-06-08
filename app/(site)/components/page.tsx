import type { Metadata } from 'next'
import { IndustryBadge } from '@/app/_site/IndustryBadge'
import { components } from '@/app/_data/component-catalog'
import type { Tier } from '@/app/_data/component-catalog'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Components',
  description: 'All 37 AI Chat UI components — tagged by tier and industry.',
}

const STORYBOOK_URL = 'https://6a251cdcacca87566659252b-mxrwfqmaxy.chromatic.com/'

const TIER_GROUPS: { tier: Tier; label: string; description: string }[] = [
  { tier: 'primitive', label: 'Primitives', description: 'Zero-dependency atoms — status, price, avatars, loaders' },
  { tier: 'core',      label: 'Components', description: 'Compound UI — messages, cards, carts, payment flows' },
  { tier: 'layout',    label: 'Layouts',    description: 'Structural shells with named slots' },
]

const TIER_PILL: Record<Tier, string> = {
  primitive: 'bg-muted text-muted-foreground',
  core:      'bg-primary/8 text-primary',
  layout:    'bg-secondary text-secondary-foreground border border-border',
}

export default function ComponentsPage() {
  return (
    <div>
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-10 md:py-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Components</h1>
            <p className="text-muted-foreground">37 components across 3 tiers — all interactive in Storybook.</p>
          </div>
          <a
            href={STORYBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-foreground px-5 py-3 text-sm font-semibold text-background hover:bg-foreground/90 transition-colors shrink-0"
          >
            Browse interactive components ↗
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-8 py-10 md:py-14 space-y-14">
        {TIER_GROUPS.map(({ tier, label, description }) => {
          const group = components.filter((c) => c.tier === tier)
          return (
            <section key={tier}>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-lg font-semibold">{label}</h2>
                  <span className="text-xs text-muted-foreground">{group.length}</span>
                </div>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {group.map((c) => (
                  <div key={c.name} className="flex flex-col gap-2.5 rounded-xl border border-border bg-card p-4 md:p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold">{c.name}</span>
                      <span className={cn('shrink-0 rounded-full px-2 py-0.5 text-xs font-medium', TIER_PILL[tier])}>
                        {label.replace(/s$/, '')}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{c.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {c.industries.map((ind) => (
                        <IndustryBadge key={ind} industry={ind} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
