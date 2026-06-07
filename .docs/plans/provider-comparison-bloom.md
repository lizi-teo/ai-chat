# Provider Comparison — Bloom Visualisation

## What this is and what it isn't

`ComparisonCard` (existing) answers: *which plan within one insurer costs less given my situation?*

`ProviderComparison` (this component) answers: *which insurer is the best overall choice across all the things that matter?*

That's a fundamentally different question. Price alone doesn't answer it. A provider can be the cheapest and still be the wrong choice if their at-fault hire car cover is excluded, their excess is punishing, or their claims handling rating is poor. The user needs to see the full picture — not a table of numbers, but a gestalt sense of which provider is most *complete*.

The bloom visualisation is designed to communicate that completeness at a glance, before a single number is read.

---

## The core insight: balance, not dominance

A table rewards whoever wins on the most-scrutinised column (usually price). But insurance decisions aren't one-dimensional. A balanced provider that scores well across price, rating, coverage breadth, excess, and hire car inclusion is genuinely better than a provider that dominates on price alone and sacrifices everything else.

The bloom makes balance visible. A full, even bloom = a balanced provider. A spiky, lopsided bloom = strong in one area, weak in others. The user's eye reads this before their brain does.

NRMA's positioning is exactly this: not always the absolute cheapest, but consistently strong across all dimensions — rating, coverage depth, hire car inclusion, excess, and trust. The bloom is designed to show that.

---

## The five attributes

Each bloom has five petals. These were chosen because they're the attributes that most commonly flip a decision:

| Attribute | Type | Direction | Why it matters |
|---|---|---|---|
| **Price** | Number ($/yr) | Lower = better | The headline — always scrutinised |
| **Rating** | Score (1–5★) | Higher = better | Claims handling, customer service |
| **Excess** | Number ($) | Lower = better | The hidden cost on every claim |
| **At-fault hire car** | Boolean | Included = better | Often excluded on budget policies |
| **Coverage breadth** | Score (0–5) | Higher = better | Hail, storm, theft, windscreen, new car replacement |

Each petal's length is normalised against the best and worst in the current result set so comparisons are relative, not absolute. If all providers have hire car included, that petal is full for everyone and doesn't differentiate — which is correct.

---

## NRMA in context

This component was initially designed for deployment in an NRMA AI assistant. NRMA's typical competitive position:

```
Provider        Price       Rating    Excess    Hire car    Coverage
─────────────────────────────────────────────────────────────────────
NRMA            $1,890/yr   4.8★      $650      ✓           ████░ 4/5
Budget Direct   $1,620/yr   3.9★      $700      ✗           ███░░ 3/5
Youi            $2,140/yr   4.2★      $500      ✓           ████░ 4/5
AAMI            $2,380/yr   4.0★      $600      ✓           ███░░ 3/5
GIO             $1,980/yr   3.7★      $750      ✗           ██░░░ 2/5
```

NRMA is not cheapest. Budget Direct is $270/yr cheaper. The bloom makes the trade-off legible: Budget Direct's bloom has a long price petal and a stub hire car petal (missing). NRMA's bloom is rounder — you pay a bit more, you get a lot more coverage and a much higher claims rating.

The AI verdict framing: *"NRMA isn't the cheapest, but it's the most balanced — it leads on rating and coverage, includes hire car, and the $270 difference works out to $5.20/week."*

---

## Collapsed state — the provider list

```
┌─────────────────────────────────────────────────────┐
│  How NRMA compares                                   │
│  Comprehensive car insurance · NSW · 1–2 claims      │
│                                                      │
│  ┌───────────────────────────────────── ❀ ─────────┐ │
│  │  ★ NRMA              Most balanced  [bloom]     │ │
│  │    $1,890/yr · $650 excess                      │ │
│  └─────────────────────────────────────────────────┘ │
│                                                      │
│    Budget Direct         $1,620/yr     [bloom]       │
│    Youi                  $2,140/yr     [bloom]       │
│    AAMI                  $2,380/yr     [bloom]       │
│    GIO                   $1,980/yr     [bloom]       │
│                                                      │
│    + 6 more providers                                │
│                               See full comparison →  │
└─────────────────────────────────────────────────────┘
```

Each row shows:
- Provider name (winner gets a star prefix and "Most balanced" label)
- Annual price
- Excess
- A small bloom icon (24px) on the right — the shape communicates the balance story at list scale

The winner row is visually elevated: primary border, bg-primary/5, slightly more padding. The bloom icon is primary-colored. Competitor rows are flat with muted blooms.

---

## Expanded state — tap to unpack

Tapping any row expands it inline. The row grows taller with a spring animation, and the small bloom icon "blooms" outward — petals animate from their collapsed positions to their full lengths, each labelling itself as it extends.

```
  ┌─────────────────────────────────────────────────────────┐
  │  ★ NRMA                           Most balanced         │
  │                                                         │
  │              ╱ Rating ╲                                 │
  │         4.8★ │    │    │ Hire car                      │
  │              │    ●    │ ✓ included                    │
  │  Price  ─────┤         ├───── Coverage                 │
  │  $1,890/yr   │         │ 4/5 attrs                     │
  │              │         │                               │
  │         $650 │    │    │                               │
  │         Excess╲   │   ╱                                │
  │                ╲──│──╱                                 │
  │                                                         │
  │  Leads on: Rating · Hire car · Coverage breadth         │
  │  Loses on: Price (–$270/yr vs. Budget Direct)           │
  │                                                         │
  │  [Get a quote →]                               [Close ╳]│
  └─────────────────────────────────────────────────────────┘
```

Each petal tip shows the actual value. The verdict line at the bottom spells out where NRMA leads and where it doesn't — honest, not promotional.

For the boolean attribute (hire car): if included, petal extends to full length with a ✓ tip. If not included, petal is a stub (30% length) with a ✗ tip and muted colour. The truncated petal is visually jarring — intentionally so.

---

## Motion design

### Entrance sequence

1. **Card enters:** `opacity: 0 → 1`, `y: 10 → 0`, `scale: 0.98 → 1` over 220ms ease-out. Same as ComparisonCard.
2. **Winner row highlights:** primary border fades in 100ms after card settles.
3. **Competitor rows stagger in:** 40ms between each row, `opacity: 0 → 1`, `x: -6 → 0`.
4. **Bloom icons grow:** after rows settle, each bloom icon's petals extend from 0 with a 60ms stagger between petals, spring physics `{ stiffness: 260, damping: 24 }`. Winner bloom grows first, then competitors in order.

The sequence reads as: card arrives → winner highlighted → competitors appear → shapes reveal. Roughly 800ms total from card entry to fully settled.

### Tap to expand

1. **Row expands:** height animates with spring `{ stiffness: 280, damping: 28 }`. Content inside fades in as the row opens.
2. **Small bloom → large bloom:** the 24px bloom icon scales up and repositions to the center of the expanded area using `layoutId="bloom-{providerId}"`. The petals remain at their normalised lengths — they don't re-animate, just reposition at larger scale.
3. **Petal labels fade in:** each petal label fades in with a 40ms stagger as the bloom reaches final size.
4. **Verdict line fades in:** `opacity: 0 → 1` after petal labels settle, 150ms delay.

### Tap to compare (secondary interaction)

When a competitor row is expanded while the winner is already expanded: the competitor bloom animates in beside the winner bloom (they shift to split the available width). Petals on the same axis are now visually comparable side-by-side. This is the most powerful moment — you see both shapes simultaneously.

Spring: `{ type: 'spring', stiffness: 300, damping: 30 }` throughout.
`useReducedMotion()`: all spring animations replaced with `duration: 0` cuts. Stagger delays set to 0.

---

## Component API

```tsx
export interface ProviderAttribute {
  id: 'price' | 'rating' | 'excess' | 'hirecar' | 'coverage'
  label: string
  value: number        // raw value for display
  score: number        // 0–1 normalised, used for petal length
  unit?: string        // '$', '★', '$', undefined (boolean), '/5'
  included?: boolean   // for boolean attrs like hirecar
  higherIsBetter: boolean
}

export interface ComparisonProvider {
  id: string
  name: string
  attributes: ProviderAttribute[]
  isRecommended?: boolean
  ctaLabel?: string
  onCtaClick?: () => void
}

export interface ProviderComparisonProps {
  title: string
  subtitle?: string
  providers: ComparisonProvider[]      // first recommended item shown as winner
  maxVisible?: number                  // default 5 (winner + 4)
  onViewAll?: () => void
  className?: string
}
```

The parent (e.g., the AI chat layer) is responsible for normalising scores — the component just renders what it receives. Normalisation logic should live in a `normaliseProviders()` utility exported alongside the component.

---

## Storybook stories

| Story | What it shows |
|---|---|
| `NRMAWins` | NRMA recommended, Budget Direct cheapest, NRMA leads on rating + hire car + coverage |
| `BudgetDirectWins` | No-claims scenario, Budget Direct is genuinely the best balanced option — NRMA honest enough to show this |
| `CloseCall` | Two providers nearly identical blooms — AI expresses "genuinely close" uncertainty |
| `HireCarMissing` | Multiple providers missing hire car — stub petals visible on most competitors |
| `ExpandedComparison` | Story starts with NRMA and Budget Direct both expanded side-by-side |

The `BudgetDirectWins` story is important. If NRMA's assistant only ever recommends NRMA, users will distrust it. The component should be honest when a competitor is the right choice — this builds the long-term trust that makes the assistant valuable.

---

## File locations

```
components/core/
  ProviderComparison/
    ProviderComparison.tsx
    ProviderComparison.stories.tsx
    BloomIcon.tsx          ← extracted, reused at both 24px and expanded sizes
    normalise.ts           ← score normalisation utility
```

`BloomIcon` is extracted because it renders at two sizes (list row and expanded) and transitions between them via `layoutId`. Keeping it separate makes the `layoutId` transition cleaner.

---

## Open questions

- **Score normalisation:** normalise within the current result set (relative) or against fixed benchmarks (absolute)? Relative makes every comparison look meaningful even if all providers are similar. Absolute is more honest but requires maintaining benchmark values. Start with relative.
- **More than 5 attributes?** The bloom breaks down visually past 7 petals. If more attributes are needed, consider grouping (e.g., "coverage breadth" already aggregates multiple boolean inclusions into a single score).
- **Hire car petal rendering:** a boolean rendered as a continuous petal length feels slightly dishonest — a 50% petal doesn't mean "half included." Alternative: show binary attributes as a ring segment that's either fully filled or has a visible gap, separate from the graduated petals. Worth prototyping both.
- **Provider logos:** real brand logos increase trust but create maintenance overhead and licensing questions for a white-label library. Default to coloured initials (NRMA → navy circle with "N"), with an optional `logoUrl` prop.
