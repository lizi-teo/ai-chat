# Atomic Architecture Restructure

## Why

The library currently organises components by industry (`components/patterns/{travel|pharmacy|grocery|insurance}/`). This couples component identity to domain — a flight card and a medication card share the same structural needs but can't share code. The goal is a three-tier semantic system where designers compose freely across any industry using lego-like building blocks. Industry logic lives in docs (the playbook), not in code.

---

## Three-tier model

| Tier | Folder | Description |
|---|---|---|
| Primitives | `components/primitives/` | Zero deps, token-styled atoms. The smallest replaceable unit. |
| Components | `components/core/` | Compound components composed from primitives. Slot-based API. |
| Layouts | `components/layouts/` | Structural skeletons with named slots. Composed from Components. |

**Dependency direction is enforced:** Primitives ← Components ← Layouts. Never sideways, never upward.

---

## Target folder structure

```
components/
  primitives/
    StatusBadge/
    PriceDisplay/
    EntityAvatar/
    TimestampLabel/
    Tag/
    ProgressStep/
    index.ts
  core/
    MessageBubble/         ← chat shell
    TypingIndicator/       ← chat shell
    ChatInput/             ← chat shell (extracted from ChatWindow)
    QuickReplies/          ← rich response (NOT shell chrome)
    MediaCard/             ← rich response
    DetailList/            ← rich response
    ActionStrip/           ← rich response
    SummaryPanel/          ← rich response
    SelectionGroup/        ← rich response
    index.ts
  layouts/
    ChatWindow/            ← organism: header slot + MessageFeed + ChatInput
    MessageFeed/           ← scrollable MessageRow list
    ListingLayout/         ← MediaCard + DetailList + ActionStrip
    CompareLayout/         ← SelectionGroup × 2 + ActionStrip
    ConfirmationLayout/    ← SummaryPanel + PriceDisplay + ActionStrip
    index.ts
  ui/                      ← shadcn primitives (Button), unchanged
playbook/
  travel.md
  pharmacy.md
  grocery.md
  insurance.md
```

---

## Compound component API

All Components and Layouts use the compound component pattern — sub-components as static properties. Consumers pick exactly what they need.

```tsx
// Primitive — standalone, no slots
<StatusBadge label="2 seats left" variant="warning" />

// Component — compound, accepts primitives in slots
<MediaCard>
  <MediaCard.Media src="..." alt="..." />
  <MediaCard.Title>Economy to Tokyo</MediaCard.Title>
  <MediaCard.Subtitle>Qantas · QF 1</MediaCard.Subtitle>
  <MediaCard.Badge><StatusBadge label="2 seats left" variant="warning" /></MediaCard.Badge>
</MediaCard>

// Layout — compound, accepts components in slots
<ListingLayout>
  <ListingLayout.Header>
    <MediaCard>...</MediaCard>
  </ListingLayout.Header>
  <ListingLayout.Body>
    <DetailList>
      <DetailList.Row label="Departs" value="06:45" />
      <DetailList.Row label="Duration" value="9h 45m" />
    </DetailList>
  </ListingLayout.Body>
  <ListingLayout.Footer>
    <ActionStrip>
      <ActionStrip.Primary>Book now</ActionStrip.Primary>
      <ActionStrip.Secondary>View details</ActionStrip.Secondary>
    </ActionStrip>
  </ListingLayout.Footer>
</ListingLayout>
```

---

## Primitives inventory

| Component | Props | Purpose |
|---|---|---|
| `StatusBadge` | `label`, `variant: default\|success\|warning\|error\|info` | Any state label |
| `PriceDisplay` | `amount`, `currency`, `strikethrough?` | Price with optional original |
| `EntityAvatar` | `src?`, `fallback`, `size` | Brand logo, airline, store, person |
| `TimestampLabel` | `datetime` (ISO string) | Relative or absolute time |
| `Tag` | `label`, `onRemove?` | Category, filter, or label chip |
| `ProgressStep` | `status: pending\|active\|complete` | Single step, usable standalone |

---

## Components inventory

### Chat shell
| Component | Sub-components | Extracted from |
|---|---|---|
| `MessageBubble` | `Content`, `Avatar`, `Timestamp` | Refactored from `chat/MessageBubble.tsx` |
| `TypingIndicator` | — | Refactored from `chat/TypingIndicator.tsx` |
| `ChatInput` | `Field`, `Send` | Extracted from `ChatWindow.tsx` |
| `QuickReplies` | — | New. Horizontal scrolling Tag buttons |

### Rich response
| Component | Sub-components | Notes |
|---|---|---|
| `MediaCard` | `Media`, `Title`, `Subtitle`, `Badge`, `Meta` | New |
| `DetailList` | `Row` | New. Key-value pairs |
| `ActionStrip` | `Primary`, `Secondary` | New. 1–3 CTAs |
| `SummaryPanel` | `Header`, `Body` | New. Optional collapse toggle |
| `SelectionGroup` | `Option` | New. Radio or checkbox, controlled/uncontrolled |

---

## Layouts inventory

| Layout | Slots | Use for |
|---|---|---|
| `ChatWindow` | `header`, `feed`, `input` | Main chat organism |
| `MessageFeed` | — | Scrollable message list, `role="log"` |
| `ListingLayout` | `Header`, `Body`, `Footer` | Product, flight, hotel, medication |
| `CompareLayout` | `Options`, `Footer` | Fare classes, plan tiers, bundle deals |
| `ConfirmationLayout` | `Summary`, `Pricing`, `Actions` | Booking, checkout, prescription summary |

---

## Industry playbook (docs only, no code)

The playbook maps layouts to industry scenarios. Same layout, different atoms in the slots.

| Layout | Travel | Grocery | Pharmacy | Insurance |
|---|---|---|---|---|
| `ListingLayout` | Flight result | Product card | Medication | Policy option |
| `CompareLayout` | Fare classes | Bundle deals | Generic vs brand | Plan tiers |
| `ConfirmationLayout` | Booking summary | Cart checkout | Prescription | Quote |

---

## What happens to existing pattern components

The 23 existing components in `components/patterns/` are deleted (v0.1.0, no external consumers). The playbook docs show how to compose each industry scenario with the new semantic components.

Migration map:

| Old | New |
|---|---|
| `FlightCard`, `HotelCard`, `MedicationCard`, `InsurancePlanCard`, `SpecialOfferCard` | `ListingLayout` |
| `DosageInfo`, `CoverageDetail`, `ItinerarySummary` | `DetailList` |
| `ComparisonTable` | `CompareLayout` |
| `SummaryCard`, `GlossaryPanel` | `SummaryPanel` |
| `AllergyWarning` | `StatusBadge` + `SummaryPanel` |
| `ClaimStep` | `ProgressStep` + `DetailList` |
| `OnboardingScreen`, `OnboardingStep` | `ConfirmationLayout` |
| `EducationalCard`, `VideoCard` | `MediaCard` + `DetailList` |
| `CategoryBrowser` | `SelectionGroup` |
| `ShoppingListItem` | `DetailList.Row` + `Tag` |
| `CartBadge`, `CartDrawer`, `CartItem` | Keep — commerce utilities, not chat responses |

---

## Implementation phases

### Phase 1 — Primitives
Create `components/primitives/` with 6 primitive components + stories. No existing files touched.

### Phase 2 — Components (core/)
Create `components/core/` with 9 compound components + stories. Refactor `MessageBubble` and `TypingIndicator` from `components/chat/`. Extract `ChatInput` from `ChatWindow.tsx`.

### Phase 3 — Layouts
Create `components/layouts/`. Extract `MessageFeed` from `ChatWindow`. Refactor `ChatWindow` into a proper organism. Add `ListingLayout`, `CompareLayout`, `ConfirmationLayout`.

### Phase 4 — Delete old patterns
Delete `components/patterns/` entirely. Delete `components/chat/ProductCard.tsx` (replaced by `MediaCard`).

### Phase 5 — Docs + playbook
- Update `.docs/ui-guidelines` — add atomic tier rules, dependency direction, compound API conventions
- Update `CLAUDE.md` — reflect new folder structure
- Create `playbook/` directory with per-industry markdown files
- Update `index.ts` barrel export
- Update `.storybook/preview.tsx` categories

---

## Conventions

- Every component gets its own folder: `ComponentName/ComponentName.tsx` + `ComponentName.stories.tsx`
- Sub-components live in the same file as the parent (no separate files for `MediaCard.Media`)
- All animation via `framer-motion`, following `.docs/motion-guidelines`
- `shadcn Button` (`components/ui/button.tsx`) is the only raw button allowed
- No hardcoded colours or spacing — everything through CSS tokens

---

## Verification

1. `npm run storybook` — all new components visible with auto-docs, organised by tier
2. `ListingLayout` story shows same organism with travel vs pharmacy slot content (proves composability)
3. `ChatWindow` story shows no regression on streaming + typing indicator
4. `npm run build` — zero TypeScript errors, no broken imports
