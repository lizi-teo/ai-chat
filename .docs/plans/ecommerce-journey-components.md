# E-Commerce Journey — Component Implementation Plan

Covers every component needed to support a full agent-assisted commerce flow: discovery → cart → order review → passkey auth → payment → fulfilment. All components follow the atomic tier rules in `CLAUDE.md`.

> **Status (2026-06-08):** Phases 1–7 complete. All 17 components built, storied, and exported.

---

## Journey Map

```
Discovery          Cart           Order Review     Auth (Passkey)
──────────         ────           ────────────     ──────────────
MediaCard     →    CartItem   →   OrderReview  →   AuthPrompt
CardStrip          CartSummary    AddressTile       BiometricIndicator
QuickReplies       QuantityStepper                  AuthStatus
CompareTable  (new)
                                 Payment           Fulfilment
                                 ───────           ──────────
                                 PaymentMethodTile  OrderStatusCard
                                 PaymentConfirmSheet ReceiptSummary
                                                    DeliveryTracker

Cross-journey (used everywhere)
────────────────────────────────
ToastBanner   EmptyState   ModalSheet
```

---

## What Is Already Built

| Component | What exists | Journey step |
|---|---|---|
| `MediaCard` | Image, title, price, CTA | Discovery |
| `CardStrip` | Horizontal scroll strip | Discovery |
| `CardStack` | Fan/expand pattern | Discovery |
| `ChipToCard` | Chip → expanded card morph | Discovery |
| `QuickReplies` | Pill suggestion row | Discovery / everywhere |
| `SelectionGroup` | Single/multi option picker | Variant selection |
| `PriceDisplay` | Formatted price with currency | Discovery / cart / payment |
| `StatusBadge` | State label | Fulfilment |
| `ProgressStep` | Step rail | Fulfilment |
| `SummaryPanel` | Generic key/value summary | Partial order review |
| `DetailList` | Label-value list | Partial order review |
| `MessageBubble` | Chat bubble | Everywhere |
| `ChatInput` | Message composer | Everywhere |
| `TypingIndicator` | Agent thinking state | Everywhere |
| `EntityAvatar` | Avatar with fallback | Everywhere |

---

## Dependency Map

```
Primitives (Tier 1)
  QuantityStepper
  AddressTile
  BiometricIndicator
  PaymentMethodTile
  ToastBanner
  EmptyState

Core (Tier 2)
  CartItem              ← uses QuantityStepper + PriceDisplay + MediaCard thumbnail
  CartSummary           ← uses PriceDisplay + Tag
  OrderReview           ← uses AddressTile + DetailList + PriceDisplay + CartItem (read-only)
  AuthPrompt            ← uses BiometricIndicator + MessageBubble surface
  AuthStatus            ← uses StatusBadge + BiometricIndicator
  PaymentConfirmSheet   ← uses PaymentMethodTile + PriceDisplay + Button
  CompareTable          ← uses PriceDisplay + StatusBadge + Tag
  OrderStatusCard       ← uses ProgressStep + StatusBadge + TimestampLabel
  ReceiptSummary        ← uses DetailList + PriceDisplay + StatusBadge

Layouts (Tier 3)
  ModalSheet            ← wraps Core content for cart / auth / payment surfaces
  DeliveryTracker       ← uses OrderStatusCard + map placeholder slot
```

---

## Phase 1 — Cart (build first — nothing converts without it)

### 1.1 `QuantityStepper`
**Tier**: primitives
**File**: `components/primitives/QuantityStepper/QuantityStepper.tsx`

```tsx
interface QuantityStepperProps {
  value: number
  min?: number          // default 1
  max?: number          // default 99
  onChange: (value: number) => void
  disabled?: boolean
  className?: string
}
```

- `−` and `+` buttons flank a numeric display
- Decrement disabled at `min`, increment disabled at `max`
- Uses shadcn `Button` for both controls (never raw `<button>`)
- `aria-label="Decrease quantity"` / `aria-label="Increase quantity"` on each button
- `role="group"` `aria-label="Quantity"` on wrapper
- Stories: default, at min, at max, disabled

---

### 1.2 `CartItem`
**Tier**: core
**File**: `components/core/CartItem/CartItem.tsx`

```tsx
interface CartItemProps {
  image: string
  name: string
  variant?: string       // e.g. "Size M / Blue"
  price: number
  currency?: string      // default "USD"
  quantity: number
  onQuantityChange: (quantity: number) => void
  onRemove: () => void
  className?: string
}
```

- Thumbnail (square, token-sized) + name + variant + `QuantityStepper` + `PriceDisplay` in a single row
- Remove button (`×`) — uses shadcn `Button` variant ghost, `aria-label="Remove {name}"`
- Price reflects `price × quantity` live
- Read-only mode: pass `onQuantityChange` and `onRemove` as undefined → hides stepper and remove button (used inside `OrderReview`)
- Stories: default, with variant, at max qty, read-only

---

### 1.3 `CartSummary`
**Tier**: core
**File**: `components/core/CartSummary/CartSummary.tsx`

```tsx
interface CartSummaryProps {
  items: { name: string; price: number; quantity: number }[]
  currency?: string
  promoCode?: string
  discount?: number
  onPromoApply?: (code: string) => void
  onCheckout: () => void
  className?: string
}
```

Sub-components: `CartSummary.LineItem`, `CartSummary.PromoField`, `CartSummary.Total`

- Subtotal, discount line (hidden when no discount), total — all using `PriceDisplay`
- Promo field: text input + "Apply" button — only rendered when `onPromoApply` is provided
- "Proceed to review" CTA — shadcn `Button` full-width
- Stories: no promo, with promo code applied, zero items (shows `EmptyState` — forward ref, build after Phase 6)

---

## Phase 2 — ModalSheet (unblocks all overlay flows)

### 2.1 `ModalSheet`
**Tier**: layouts
**File**: `components/layouts/ModalSheet/ModalSheet.tsx`

```tsx
interface ModalSheetProps {
  open: boolean
  onClose: () => void
  title?: string
  description?: string   // for aria-describedby
  size?: 'sm' | 'md' | 'lg'   // sm=360, md=480, lg=600 max-width
  children: React.ReactNode
  className?: string
}
```

Sub-components: `ModalSheet.Header`, `ModalSheet.Body`, `ModalSheet.Footer`

- Slides up from bottom on mobile, appears as centered modal on `md:` and above
- Backdrop: semi-transparent overlay, click closes
- Close button (`×`) top-right, `aria-label="Close"`
- Focus trap inside when open
- `role="dialog"` `aria-modal="true"` `aria-labelledby` wired to `title`
- Scroll lock on `<body>` while open
- Stories: sm/md/lg sizes, with footer, without title, long-content scroll

---

## Phase 3 — Order Review

### 3.1 `AddressTile`
**Tier**: primitives
**File**: `components/primitives/AddressTile/AddressTile.tsx`

```tsx
interface AddressTileProps {
  name: string
  line1: string
  line2?: string
  city: string
  state?: string
  postcode: string
  country: string
  className?: string
}
```

- Compact stacked address block — no interaction, purely presentational
- Stories: with/without line2, with/without state

---

### 3.2 `OrderReview`
**Tier**: core
**File**: `components/core/OrderReview/OrderReview.tsx`

```tsx
interface OrderReviewProps {
  items: CartItemProps[]       // same shape as CartItem, rendered read-only
  shippingAddress: AddressTileProps
  subtotal: number
  shipping: number
  total: number
  currency?: string
  onConfirm: () => void        // triggers auth flow
  className?: string
}
```

Sub-components: `OrderReview.Section`, `OrderReview.Totals`

- Read-only `CartItem` list, then `AddressTile`, then totals (`DetailList`)
- "Confirm & authenticate" CTA — full-width, triggers `onConfirm`
- Stories: single item, multiple items, free shipping (shipping=0)

---

## Phase 4 — Authentication

### 4.1 `BiometricIndicator`
**Tier**: primitives
**File**: `components/primitives/BiometricIndicator/BiometricIndicator.tsx`

```tsx
interface BiometricIndicatorProps {
  state: 'idle' | 'pending' | 'success' | 'error'
  className?: string
}
```

- Fingerprint SVG icon (inline, token-colored via `currentColor`)
- `idle`: static
- `pending`: slow pulse ring around icon (CSS animation on `::before` pseudo)
- `success`: icon switches to checkmark, ring turns success-color
- `error`: icon switches to `×`, shake, ring turns error-color
- `useReducedMotion()` → no pulse, no shake — state color only
- `aria-label` reflects state: "Waiting for biometric", "Verified", "Authentication failed"
- Stories: all four states, reduced-motion

---

### 4.2 `AuthPrompt`
**Tier**: core
**File**: `components/core/AuthPrompt/AuthPrompt.tsx`

```tsx
interface AuthPromptProps {
  state: 'idle' | 'pending' | 'success' | 'error'
  onAuthenticate: () => void
  onRetry?: () => void         // shown only on error
  errorMessage?: string
  className?: string
}
```

- `BiometricIndicator` centered above a short message and CTA
- `idle`: "Use your passkey to confirm" + "Authenticate" button
- `pending`: indicator animating, button disabled with spinner text
- `success`: indicator shows success, message updates — no button
- `error`: indicator shows error, `errorMessage` shown, "Try again" button (`onRetry`)
- Uses shadcn `Button`
- Stories: all four states

---

### 4.3 `AuthStatus`
**Tier**: core
**File**: `components/core/AuthStatus/AuthStatus.tsx`

```tsx
interface AuthStatusProps {
  state: 'success' | 'error'
  message?: string
  className?: string
}
```

- Inline confirmation card — `StatusBadge` + message text
- Success: check icon, success-tinted surface
- Error: `×` icon, error-tinted surface — not alarming, calm tone
- Appears in the chat thread as a message-like card after auth attempt
- Stories: success, error, custom message

---

## Phase 5 — Payment

### 5.1 `PaymentMethodTile`
**Tier**: primitives
**File**: `components/primitives/PaymentMethodTile/PaymentMethodTile.tsx`

```tsx
interface PaymentMethodTileProps {
  type: 'card' | 'apple-pay' | 'google-pay' | 'bank'
  label: string          // e.g. "•••• 4242" or "Apple Pay"
  selected?: boolean
  onClick?: () => void
  className?: string
}
```

- Brand logo slot (SVG inline, `aria-hidden`) + label + optional selection indicator
- `selected`: ring using `--color-primary` token
- `aria-pressed` when `onClick` provided
- Stories: card, apple-pay, google-pay, selected, interactive

---

### 5.2 `PaymentConfirmSheet`
**Tier**: core
**File**: `components/core/PaymentConfirmSheet/PaymentConfirmSheet.tsx`

```tsx
interface PaymentConfirmSheetProps {
  total: number
  currency?: string
  paymentMethod: PaymentMethodTileProps
  onConfirm: () => void        // fires passkey → payment
  onChangeMethod?: () => void
  loading?: boolean
  className?: string
}
```

- `PaymentMethodTile` (selected, read-only) + total (`PriceDisplay` large) + "Pay now" button
- `loading`: button shows spinner, all inputs disabled
- "Change" link next to tile calls `onChangeMethod`
- Stories: default, loading, without change option

---

## Phase 6 — Fulfilment

### 6.1 `OrderStatusCard`
**Tier**: core
**File**: `components/core/OrderStatusCard/OrderStatusCard.tsx`

```tsx
interface OrderStatusStep {
  label: string
  timestamp?: string
  status: 'complete' | 'active' | 'pending'
}

interface OrderStatusCardProps {
  orderId: string
  steps: OrderStatusStep[]      // 3–5 steps
  eta?: string                  // e.g. "Arrives Thu, 11 Jun"
  className?: string
}
```

- `ProgressStep` rail (vertical) + `StatusBadge` on active step + `TimestampLabel` per completed step
- ETA displayed prominently above the rail when provided
- Stories: placed, in transit, out for delivery, delivered

---

### 6.2 `ReceiptSummary`
**Tier**: core
**File**: `components/core/ReceiptSummary/ReceiptSummary.tsx`

```tsx
interface ReceiptSummaryProps {
  orderId: string
  items: { name: string; quantity: number; price: number }[]
  subtotal: number
  shipping: number
  total: number
  currency?: string
  paidAt?: string
  className?: string
}
```

- Order ID + paid timestamp at top
- Items as compact `DetailList` rows
- Totals section at bottom
- `StatusBadge` showing "Payment confirmed" in success state
- Stories: single item, multiple items, free shipping

---

### 6.3 `DeliveryTracker`
**Tier**: layouts
**File**: `components/layouts/DeliveryTracker/DeliveryTracker.tsx`

```tsx
interface DeliveryTrackerProps {
  orderId: string
  steps: OrderStatusStep[]
  eta?: string
  mapSlot?: React.ReactNode    // consumer provides map embed — library stays map-agnostic
  className?: string
}
```

Sub-components: `DeliveryTracker.Map`, `DeliveryTracker.Steps`

- `DeliveryTracker.Map`: fixed-height slot (`h-40 md:h-56`) — renders `mapSlot` if provided, else a neutral placeholder tile
- `DeliveryTracker.Steps`: `OrderStatusCard` below the map
- Stories: with placeholder map, with mock map node, all step states

---

## Phase 7 — Cross-Journey Utilities (build any time, unblock others)

### 7.1 `ToastBanner`
**Tier**: primitives
**File**: `components/primitives/ToastBanner/ToastBanner.tsx`

```tsx
interface ToastBannerProps {
  message: string
  variant?: 'info' | 'success' | 'warning' | 'error'   // default 'info'
  duration?: number       // ms before auto-dismiss, 0 = no auto-dismiss
  onDismiss?: () => void
  className?: string
}
```

- Appears inside the chat viewport (not a page-level toast) — position relative to chat container
- Icon + message + optional dismiss `×`
- Auto-dismisses after `duration` ms; progress bar sweeps underneath
- `role="status"` for info/success, `role="alert"` for warning/error
- `useReducedMotion()` → no slide-in, no progress bar animation
- Stories: all variants, persistent (no auto-dismiss), reduced-motion

---

### 7.2 `EmptyState`
**Tier**: primitives
**File**: `components/primitives/EmptyState/EmptyState.tsx`

```tsx
interface EmptyStateProps {
  icon?: React.ReactNode    // defaults to a neutral box SVG
  heading: string
  body?: string
  action?: { label: string; onClick: () => void }
  className?: string
}
```

- Vertically centered: icon → heading → body → optional CTA button
- Used in: empty cart, zero search results, no saved payment methods, failed load
- CTA uses shadcn `Button` variant outline
- Stories: with/without body, with/without action, custom icon

---

### 7.3 `CompareTable`
**Tier**: core
**File**: `components/core/CompareTable/CompareTable.tsx`

```tsx
interface CompareColumn {
  id: string
  label: string
  image?: string
  price: number
  currency?: string
  attributes: Record<string, string | boolean>  // key → value or checkmark
}

interface CompareTableProps {
  columns: CompareColumn[]     // 2–4 products
  attributeLabels: Record<string, string>  // key → display label
  onSelect?: (id: string) => void
  className?: string
}
```

- Fixed left attribute column, scrollable product columns
- `PriceDisplay` per product, `Tag` or checkmark for boolean attributes
- Highlight column on hover/focus
- "Add to cart" CTA per column when `onSelect` provided
- Stories: 2 products, 4 products, no CTA

---

## Build Order Summary

| Priority | Component | Tier | Phase | Effort |
|---|---|---|---|---|
| 1 | `QuantityStepper` | primitive | Cart | low |
| 2 | `CartItem` | core | Cart | medium |
| 3 | `CartSummary` | core | Cart | medium |
| 4 | `ModalSheet` | layout | Modal | medium |
| 5 | `AddressTile` | primitive | Order Review | low |
| 6 | `OrderReview` | core | Order Review | medium |
| 7 | `BiometricIndicator` | primitive | Auth | medium |
| 8 | `AuthPrompt` | core | Auth | medium |
| 9 | `AuthStatus` | core | Auth | low |
| 10 | `PaymentMethodTile` | primitive | Payment | low |
| 11 | `PaymentConfirmSheet` | core | Payment | medium |
| 12 | `OrderStatusCard` | core | Fulfilment | medium |
| 13 | `ReceiptSummary` | core | Fulfilment | medium |
| 14 | `DeliveryTracker` | layout | Fulfilment | medium |
| 15 | `ToastBanner` | primitive | Cross-journey | medium |
| 16 | `EmptyState` | primitive | Cross-journey | low |
| 17 | `CompareTable` | core | Cross-journey | high |

---

## Definition of Done (per component)

- [ ] No hardcoded colors, spacing, or values — all through CSS custom properties
- [ ] `md:` responsive variants on every size and spacing class
- [ ] shadcn `Button` used for all interactive controls — no raw `<button>`
- [ ] Sub-components exposed as static properties where compound API applies
- [ ] a11y: `aria-label`, `role`, `aria-disabled`, focus management as applicable
- [ ] `.stories.tsx` covers: default, all variants, edge cases (empty, error, disabled)
- [ ] Tested at 375px, 768px, 1280px
- [ ] No new npm dependencies introduced without prior approval
