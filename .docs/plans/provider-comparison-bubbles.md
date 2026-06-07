# Provider Comparison — Bubble Cluster Visualisation

> Companion to `provider-comparison-bloom.md`. Both plans answer the same question
> (which insurer is best overall?) with the same data model but different visual
> metaphors and interaction personalities. Build one, learn, then decide whether
> to ship both as variants or pick the stronger one.

---

## The metaphor

Bloom says: *look at the shape of each provider — a full shape is a balanced provider.*

Bubbles say: *look at the size and position of each provider — bigger and closer to centre means better.*

The bubble metaphor borrows from physics and nature. Larger = more worth. Gravitating toward centre = belonging there. Two bubbles touching = comparison. These are things humans understand without being told. The interaction feels exploratory and tactile rather than analytical and structured.

Where bloom is a visualisation you read, bubbles are an environment you move through.

---

## The cluster — default state

Providers float as circles in a contained space. Size is proportional to their overall balanced score across all five attributes. The winner — NRMA in this context — is the largest bubble, positioned at top-centre by gravity. Competitors cluster below and around it, sized honestly relative to each other.

```
┌─────────────────────────────────────────────────────┐
│  How NRMA compares                                  │
│  Comprehensive · NSW · 1–2 claims                   │
│                                                     │
│          ┌──────────────┐                           │
│          │              │  ← NRMA (largest,         │
│          │     NRMA     │    primary colour)         │
│          │              │                           │
│          └──────────────┘                           │
│   ┌──────┐        ┌─────────┐                       │
│   │ Youi │        │ Budget  │  ← competitors,        │
│   └──────┘        │ Direct  │    sized by score      │
│        ┌──────┐   └─────────┘                       │
│        │ AAMI │     ┌────┐                           │
│        └──────┘     │GIO │                           │
│                     └────┘                           │
│                                    See all  →        │
└─────────────────────────────────────────────────────┘
```

Each bubble shows:
- Provider name (or initials if too small to fit full name)
- A thin concentric ring around the inner edge — segmented by attribute, filled proportionally to score. The ring is the miniature version of the attribute breakdown; you can't read individual values at this size, but the evenness of the ring signals balance.

The winner bubble is primary-coloured with a subtle glow (`box-shadow: 0 0 0 3px var(--primary)/20`). Competitors are neutral with muted rings.

---

## Idle state — bubbles breathe

When nothing is selected, bubbles have a slow, staggered scale oscillation: `1.0 → 1.03 → 1.0` on a ~3.5 second sine curve. Each bubble is offset by a different phase so they don't pulse together. The winner breathes slightly more noticeably (`1.0 → 1.05`).

This is subtle — barely perceptible — but it makes the cluster feel alive rather than static. A screenshot of this component looks ordinary. The live version feels like organisms.

Disabled entirely when `useReducedMotion()` is true.

---

## Tap a bubble — single selection

Tapping any bubble does three things simultaneously:
1. The tapped bubble scales up (`1.0 → 1.15`) with a spring bounce and a stronger primary ring appears around it.
2. The other bubbles dim slightly (opacity `1.0 → 0.5`) and nudge outward away from the selected bubble, as if making room.
3. A detail panel expands below the cluster (not overlaying it — the cluster stays visible above).

The detail panel shows the attribute breakdown for the selected provider. The concentric ring that was miniaturised inside the bubble reappears at full size in the panel, with petal-like arcs fanning outward to labelled values. This is where the bloom concept lives — not as the primary view, but as the expanded detail for any bubble you tap.

```
  ┌──────── detail panel ──────────────────────────────┐
  │                                                    │
  │   ●  NRMA — Most balanced                          │
  │                                                    │
  │       Rating ████████████████████  4.8★            │
  │       Price  ██████████████        $1,890/yr        │
  │       Excess ████████████████      $650             │
  │       Hire   ████████████████████  ✓ included       │
  │       Cover  ████████████████      4/5 attrs        │
  │                                                    │
  │   Leads on: Rating · Hire car · Coverage           │
  │   Loses on: Price  (–$270/yr vs. Budget Direct)    │
  │                                                    │
  │   [Get a quote with NRMA →]                        │
  └────────────────────────────────────────────────────┘
```

The attribute bars are horizontal here (unlike the bloom's radial petals) — horizontal is more legible at the width of a mobile card and easier to read actual values from. The bars animate from 0 when the panel opens, with a 50ms stagger between rows.

---

## The collision — comparing two bubbles

This is the interaction that makes the bubble component memorable.

**Step 1:** User taps the first bubble (say, NRMA). It scales up, a ring appears, detail panel opens below.

**Step 2:** User taps a second bubble (say, Budget Direct). Instead of replacing the first selection:
- Both bubbles animate toward each other in the cluster view, moving to sit side by side near the centre.
- At the moment they make contact: a brief elastic squish — both bubbles deform slightly inward on the axis of contact, then spring back. The squish lasts ~180ms, spring `{ stiffness: 400, damping: 20 }`. Like two soap bubbles touching.
- They settle side by side, touching but not overlapping.
- The detail panel splits: left side shows NRMA, right side shows Budget Direct, attribute bars visible on both simultaneously. The panel is now a head-to-head.

```
  ┌── NRMA ──────────────┬── Budget Direct ────────────┐
  │                      │                             │
  │  Rating  ████████  4.8★  ████      3.9★            │
  │  Price   ██████  $1,890  ████████  $1,620           │
  │  Excess  ████    $650    ███       $700             │
  │  Hire    ████████  ✓     ░░░░░░░░  ✗               │
  │  Cover   ████████  4/5   ██████    3/5             │
  │                      │                             │
  │  [Quote →]           │  [Quote →]                  │
  └──────────────────────┴─────────────────────────────┘
```

On the Hire car row, the `✗` for Budget Direct is shown as an empty / ghost bar — the full bar length is drawn in muted colour as a ghost, and the actual fill is absent. This makes missing coverage more visually striking than just an "×" would be.

Tapping a third provider replaces the right-side comparison partner (sliding out the old one, sliding in the new one with `AnimatePresence`). The winner (NRMA in left position) stays anchored.

---

## Attribute lens mode — resize by dimension

An optional row of attribute pills sits below the cluster. Tapping a pill resizes all bubbles to reflect their score on *that specific attribute*. The animation — bubbles expanding and contracting to their new sizes — makes the relative performance on each dimension viscerally clear.

```
  [Overall ●] [Price] [Rating] [Hire car] [Excess] [Coverage]
```

- **Tap "Price":** Budget Direct's bubble grows — it's cheapest. NRMA shrinks to show it's not the price leader. The `Most balanced` label disappears; the largest bubble now gets a `Cheapest` label.
- **Tap "Hire car":** This is a boolean. Bubbles that include hire car stay at current size and glow green. Bubbles that exclude it shrink to 60% and a red ring appears. The size change + colour change together communicate the binary clearly.
- **Tap "Rating":** NRMA grows back to largest. The bubble size re-earns NRMA's position.
- **Tap "Overall":** Returns to the balanced score view. NRMA is largest again.

The transition between lens modes: bubble sizes animate with spring physics to their new sizes simultaneously. Bubbles that grow displace bubbles that shrink — they nudge apart to avoid overlap. This is not real physics simulation; it is pre-calculated layout positions per lens mode, with spring animation to transition between them.

```tsx
const LENS_POSITIONS: Record<LensId, Record<ProviderId, { x: number; y: number; size: number }>> = {
  overall:  { nrma: { x: 50, y: 30, size: 88 }, budget: { x: 25, y: 65, size: 72 }, ... },
  price:    { nrma: { x: 40, y: 45, size: 66 }, budget: { x: 55, y: 30, size: 88 }, ... },
  rating:   { nrma: { x: 50, y: 28, size: 90 }, budget: { x: 70, y: 60, size: 58 }, ... },
  ...
}
```

Pre-calculating positions avoids a physics engine dependency (no new deps rule). Five lens modes × five providers = 25 position records. Manageable to define for a fixed provider count; needs a generation algorithm if providers are dynamic.

---

## Entrance animation

1. All bubbles start at `scale: 0, opacity: 0`.
2. They scale up to full size with a 60ms stagger between each, spring `{ stiffness: 240, damping: 22 }` — slower and bouncier than the standard spring to reinforce the "physical object settling" feel.
3. The winner bubble enters last and with the most overshoot — it bounces once visibly. This is intentional: it draws the eye to the most important bubble at the end of the entrance sequence.
4. After all bubbles settle, the breathing oscillation begins (1s delay after last bubble lands).

Total entrance: ~900ms for five providers.

---

## NRMA in context

The same competitive data as the bloom plan. NRMA wins on Overall, Rating, and Hire car lens modes. Budget Direct wins on Price and Excess lens modes. The lens switching is where NRMA's honest competitive position becomes clear — you can literally watch NRMA's bubble shrink on Price and grow back on Rating.

This matters for trust. An interface that only ever shows NRMA on top feels promotional. One that shows NRMA shrink when you switch to Price — then explains why it's still recommended overall — feels like a trusted advisor.

---

## Motion design summary

| Moment | Animation | Spring / Duration |
|---|---|---|
| Card entrance | `opacity`, `y`, `scale` | 220ms ease-out |
| Bubble entrance | `scale` stagger, winner last | `{ stiffness: 240, damping: 22 }` |
| Bubble breathing | `scale` sine oscillation | 3.5s period, stagger by index |
| Tap to select | Bubble scale-up, others dim + nudge | `{ stiffness: 280, damping: 28 }` |
| Detail panel open | Height expand, bars animate from 0 | `{ stiffness: 280, damping: 28 }`, 50ms bar stagger |
| Collision approach | Bubbles translate toward each other | `{ stiffness: 200, damping: 26 }` |
| Collision squish | Scale deform on contact axis | `{ stiffness: 400, damping: 20 }` |
| Lens switch | All bubbles resize + reposition | `{ stiffness: 260, damping: 28 }` |
| Comparison partner swap | `AnimatePresence` slide | 200ms ease-out |

`useReducedMotion()`: breathing disabled, all springs replaced with 150ms `ease-out`, stagger delays zeroed, collision squish removed.

---

## Component API

```tsx
// Reuses the same data types as the bloom component — same props, different renderer

export interface BubbleComparisonProps {
  title: string
  subtitle?: string
  providers: ComparisonProvider[]     // same type as bloom plan
  defaultLens?: LensId                // 'overall' | 'price' | 'rating' | 'excess' | 'hirecar' | 'coverage'
  showLensPills?: boolean             // default true
  maxBubbles?: number                 // default 5, more become "+N more" overflow
  onViewAll?: () => void
  className?: string
}

export type LensId = 'overall' | 'price' | 'rating' | 'excess' | 'hirecar' | 'coverage'
```

The `ComparisonProvider` and `ProviderAttribute` types are shared with the bloom plan and should live in a shared types file: `components/core/ProviderComparison/types.ts`. Both `ProviderComparison` (bloom) and `BubbleComparison` (this) import from it.

---

## Storybook stories

| Story | What it shows |
|---|---|
| `NRMAWins` | Default — NRMA largest bubble, Overall lens active |
| `LensSwitching` | Interactive — all lens pills enabled, switch between them to watch bubbles resize |
| `CollisionDemo` | Pre-expanded with NRMA + Budget Direct already collided/compared |
| `HireCarLens` | Hire car lens active — Budget Direct and GIO visibly shrunk with missing-coverage rings |
| `BudgetDirectWins` | No-claims scenario where Budget Direct is genuinely largest on Overall |
| `ManyProviders` | 9 providers, only 5 shown as bubbles, +4 overflow below |

---

## File locations

```
components/core/
  BubbleComparison/
    BubbleComparison.tsx
    BubbleComparison.stories.tsx
    BubbleCluster.tsx          ← the SVG/div bubble layout + lens switching
    BubbleNode.tsx             ← single bubble (breathing, select ring, collision)
    ComparisonPanel.tsx        ← the detail panel below cluster (single + split view)
    lensPositions.ts           ← pre-calculated x/y/size per lens mode per provider count
  ProviderComparison/
    types.ts                   ← ComparisonProvider, ProviderAttribute, LensId (shared)
    normalise.ts               ← score normalisation (shared)
    ProviderComparison.tsx     ← bloom variant
    ...
```

---

## Bloom vs. Bubbles — when to use which

| | Bloom | Bubbles |
|---|---|---|
| **Personality** | Structured, analytical | Playful, exploratory |
| **Best for** | AI verdict with clear winner, user wants the "why" | User wants to explore the market themselves |
| **Primary motion** | Petals blooming outward | Bubbles colliding, resizing |
| **Attribute exploration** | Tab-switch transforms bars | Lens pills resize bubbles |
| **Comparison** | Expanded rows side by side | Bubble collision head-to-head |
| **Trust signal** | Bloom asymmetry shows gaps explicitly | Size delta and lens switching shows gaps |
| **Mobile readability** | Very good — list + expand is familiar | Good — bubbles are large and tappable |
| **Complexity to build** | Medium | Higher (position pre-calculation, collision) |
| **Wow factor** | Strong on first expand | Strongest on collision moment |

Both could ship. A `variant` prop on a shared `ProviderComparison` wrapper is premature — the internal structure is different enough that separate components are cleaner. The shared types and normalisation utilities keep them consistent.

---

## Open questions

- **Bubble positioning for dynamic provider counts:** the pre-calculated `lensPositions` approach works for exactly N providers. If providers are dynamic (3, 4, 5, 6…), need a position generator per count. Worth building a generator that outputs sensible clusters for 3–8 bubbles, rather than hand-crafting each.
- **Collision deformation:** true bubble squish (SVG path morphing) is achievable but complex. A simpler approximation — `scaleX: 1.12, scaleY: 0.9` on the axis of contact — gives enough of the squish feel without SVG path manipulation. Start with the scale approximation.
- **Provider logos inside bubbles:** at 88px diameter, a logo fits. At 58px (smaller competitors) it becomes too small. Default to coloured initials with an optional `logoUrl` — consumer can supply brand assets. Same decision as bloom plan.
- **What if NRMA isn't the winner on Overall?** The component must handle this gracefully. When using `BubbleComparison` in an NRMA context, the data passed by the AI layer will naturally surface NRMA as the recommended provider — but if it genuinely isn't the most balanced, the data will show that. The component doesn't know or care about brand preference; that's the AI layer's job to be honest about.
