# IGA Supermarket — Indian Butter Chicken Recipe-to-Checkout Journey

## Context

IGA wants to offer a conversational grocery shopping experience where a customer can ask the AI chatbot to help them cook a meal, receive a recipe with scalable ingredients, shop for all the ingredients in one session, then complete delivery booking, payment, and order fulfillment — without ever leaving the chat interface.

This plan documents the full end-to-end journey for a reference scenario: **a woman asks the IGA chatbot to help her make Indian butter chicken curry.** It maps every conversational turn to existing components, identifies missing edge-case steps, and establishes the user stories, acceptance criteria, and guardrails for implementation.

All components referenced below already exist in the library. No new components need to be built for the happy path — this plan is about **wiring them together** in a ChatWidget conversation flow.

---

## Full Journey Map

```
1.  Entry / Greeting
2.  Recipe Request
3.  Recipe Display (RecipeCard)
4.  Serving Adjustment (QuantityStepper inside RecipeCard)
5.  Ingredient-to-Product Mapping (IngredientShopList)
6.  Substitution Handling (out-of-stock items)
7.  Cart Build (CardStack → CartItem)
8.  Cart Review + Promo Code (CartSummary)
9.  Rewards Opt-In (RewardsStep)
10. Delivery Method Selection (DeliveryMethodStep)
11a.[Delivery] Address Confirmation (AddressTile)
11b.[Click & Collect] Branch Selection (BranchSelectStep)
12. Postcode / Delivery Zone Validation
13. Date Selection (DateSelectStep)
14. Time Slot Selection (TimeSlotStep)
15. Delivery Summary Confirmation (DeliveryConfirmation)
16. Order Review (OrderReview + DetailList)
17. Authentication / Identity Check (AuthPrompt → BiometricIndicator → AuthStatus)
18. Payment Method Selection (PaymentConfirmSheet + PaymentMethodTile)
19. Payment Confirmation (DoubleClickToPay / ApplePaySheet / card confirm)
20. Order Confirmation (PaymentSuccess)
21. Fulfillment Tracking (OrderStatusCard → ReceiptSummary → DeliveryTracker)
```

---

## Step-by-Step Detail

### Step 1 — Entry / Greeting
**Trigger:** User opens ChatWidget.
**Components:** `ChatWidget`, greeting `MessageBubble` (bot), `QuickReplies`
**Quick replies:** "Help me cook something", "Weekly specials", "Browse recipes", "Track my order"

---

### Step 2 — Recipe Request
**Trigger:** User types "I want to make Indian butter chicken curry" (or taps a recipe quick reply).
**Components:** `MessageBubble` (user), `TypingIndicator` while bot fetches recipe

---

### Step 3 — Recipe Display
**Trigger:** Bot responds with recipe.
**Components:** `MessageBubble` (bot intro text), `RecipeCard` as `richContent`
**RecipeCard shows:** recipe name, description, prep/cook time, default serving count (4), ingredient list with quantities and units, step-by-step method.
**Quick replies:** "Add ingredients to cart", "Change servings", "Make it vegetarian", "Try another dish"

---

### Step 4 — Serving Adjustment
**Trigger:** User taps "Change servings" or adjusts `QuantityStepper` inside RecipeCard directly.
**Components:** `QuantityStepper` (within RecipeCard) — ingredient quantities re-render proportionally
**Bot message:** "Updated for [N] servings. Ready to add ingredients?"
**Quick replies:** "Add all ingredients to cart", "See ingredient details"

---

### Step 5 — Ingredient-to-Product Mapping
**Trigger:** User taps "Add ingredients to cart" or requests to see products.
**Components:** `MessageBubble` (bot), `IngredientShopList` as `richContent`
**IngredientShopList shows:** each ingredient mapped to the closest IGA product, price per unit, availability (`AvailabilityDot`), substitution button for flagged items.
**Quick replies:** "Add all to cart", "Review substitutions first", "Change quantities"

---

### Step 6 — Substitution Handling (Out-of-Stock / No Match)
**Trigger:** One or more ingredients have no match or are out of stock.
**Components:** `IngredientShopList` (substitution option rendered inline), `ToastBanner` ("2 items need your attention"), `SkeletonBlock` while alternatives load
**Bot message:** "A few items aren't available today. I've suggested alternatives — tap to swap."
**Resolution options:** Accept suggested substitution, choose a different product, or remove the ingredient.

---

### Step 7 — Cart Build
**Trigger:** User confirms "Add all to cart".
**Components:** `CardStack` (fan animation of added products), `ToastBanner` ("12 items added to cart"), `CartItem` for each product
**Bot message:** "Done! Here's what I've added. You can adjust quantities before checkout."

---

### Step 8 — Cart Review + Promo Code
**Trigger:** Bot presents cart summary after adding items.
**Components:** `CartSummary` as `richContent` (items list, `CartSummary.Total`, `CartSummary.PromoField`)
**User can:** adjust quantities, remove items, enter promo code.
**Quick replies:** "Continue to delivery", "Apply promo code", "Keep shopping"

---

### Step 9 — Rewards / Loyalty Opt-In
**Trigger:** After cart confirmed, before delivery — bot offers IGA Rewards.
**Components:** `RewardsStep` as `richContent`
**Bot message:** "You have [X] IGA Rewards points. Apply them to save $Y on this order?"
**Quick replies:** "Use my rewards", "Skip for now"
**Note:** Only shown if user has an active loyalty account.

---

### Step 10 — Delivery Method Selection
**Trigger:** User proceeds past cart review.
**Components:** `DeliveryMethodStep` as `richContent` (standard delivery / express / click & collect)
Each option shows: estimated time range, cost, `CutoffBadge` for same-day cutoff, `DeliveryMethodIcon`.
**Quick replies:** "Deliver to my address", "Click & Collect"

---

### Step 11a — Address Confirmation (Delivery path)
**Trigger:** User selects any delivery method.
**Components:** `AddressTile` (saved address preview), `SelectionGroup` if multiple addresses are saved
**Bot message:** "Deliver to [address]? Or would you like to use a different address?"
**Quick replies:** "Yes, deliver here", "Use a different address"

### Step 11b — Branch Selection (Click & Collect path)
**Trigger:** User selects Click & Collect.
**Components:** `BranchSelectStep` as `richContent` (store list with distance, stock indicator)
**Bot message:** "Choose your pickup store."

---

### Step 12 — Postcode / Delivery Zone Validation
**Trigger:** After address confirmed (delivery path only).
**Happy path:** Silent pass-through — no UI shown if address is valid.
**Out-of-zone:** `ToastBanner` (error: "Sorry, we don't deliver to that postcode yet"), `EmptyState` ("Try Click & Collect instead")

---

### Step 13 — Delivery Date Selection
**Components:** `DateSelectStep` as `richContent`
**Shows:** Available dates (greyed when unavailable), today marked, `CutoffBadge` if same-day cutoff is approaching.

---

### Step 14 — Time Slot Selection
**Components:** `TimeSlotStep` as `richContent`
**Shows:** Available time windows (e.g., 9am–11am, 11am–1pm), price differential for express slots.
Unavailable slots are greyed. `EditWindowNotice` appears if selected slot has a short edit window.

---

### Step 15 — Delivery Summary Confirmation
**Components:** `DeliveryConfirmation` as `richContent`
**Shows:** Method, date, time slot, address or branch, delivery fee.
**Quick replies:** "Confirm delivery details", "Change time slot"

---

### Step 16 — Order Review
**Trigger:** User confirms delivery details.
**Components:** `OrderReview` as `richContent` (read-only items + `AddressTile` + `DetailList` totals)
**DetailList rows:** Subtotal, delivery fee, rewards discount, promo discount, **Total**
**Bot message:** "Here's your order summary. Ready to pay?"
**Quick replies:** "Place order", "Edit cart", "Cancel"

---

### Step 17 — Authentication
**Trigger:** User taps "Place order".
**Components:** `AuthPrompt` (biometric icon + message + CTA), `BiometricIndicator` (animates on prompt), `AuthStatus` (success / error result)
**Bot message:** "Confirm your identity to place this order."
**On success:** advance to payment immediately.
**On failure:** retry prompt; fallback to PIN/password after 3 attempts.

---

### Step 18 — Payment Method Selection
**Trigger:** Auth confirmed.
**Components:** `PaymentConfirmSheet` as `richContent`, `PaymentMethodTile` for each method, `PaymentLogo` / `BankLogo` primitives
**Available methods:** Saved card, Apple Pay, PayPal, Add new card.

---

### Step 19 — Payment Confirmation
**Trigger:** User selects payment method and taps "Pay".
**Apple Pay path:** `ApplePaySheet` → `DoubleClickToPay`
**Card/other path:** `PaymentConfirmSheet` confirm screen (total + masked card)
**Bot message:** "Authorising payment…" + `TypingIndicator`

---

### Step 20 — Order Confirmation
**Trigger:** Payment authorised.
**Components:** `PaymentSuccess` as `richContent`
**DetailList rows:** Order number, items count, delivery address, estimated delivery time, payment method.
**Bot message:** "Your order is confirmed! We'll start picking your ingredients right away."
**Quick replies:** "Track my order", "View receipt", "Continue shopping"

---

### Step 21 — Fulfillment Tracking
**Trigger:** User taps "Track my order" or re-opens chat after placing the order.
**Components:** `OrderStatusCard` (progress rail), `ReceiptSummary`, `DeliveryTracker` layout
**Order status steps:**
- Confirmed — "We've received your order"
- Picking — "Your items are being picked"
- Out for delivery — "On the way — [ETA]"
- Delivered — "Your order has arrived. Enjoy your butter chicken!"

---

## User Stories

### US-1 — Recipe Discovery
**As a** shopper who doesn't know what to cook tonight,
**I want to** ask the IGA chatbot for a recipe idea,
**So that** I can get personalised meal inspiration with everything I need to make it.

**Acceptance criteria:**
- [ ] User can request a recipe by name, cuisine, or ingredient ("butter chicken", "Indian dinner", "chicken curry")
- [ ] Bot responds with a named RecipeCard within 2 conversational turns
- [ ] RecipeCard shows: recipe name, description, prep + cook time, default servings (4), full ingredients list with quantities and units, step-by-step method
- [ ] Recipe is displayed as `richContent` inside the ChatWidget flow — no page navigation
- [ ] Quick replies offer: add to cart, adjust servings, vegetarian/dietary variant, try another dish

---

### US-2 — Serving Scalability
**As a** shopper cooking for a variable number of people,
**I want to** adjust the serving count on the recipe,
**So that** the ingredient quantities update automatically and I buy the right amounts.

**Acceptance criteria:**
- [ ] QuantityStepper inside RecipeCard allows increment/decrement between 1–12 servings
- [ ] All ingredient quantities re-calculate proportionally (e.g., 400g chicken → 600g at 6 servings)
- [ ] Quantities round sensibly (2.5 tsp → 3 tsp, not 2.4999 tsp)
- [ ] Bot acknowledges the change: "Updated for [N] servings."
- [ ] Serving count is carried through to IngredientShopList quantities and CartItem quantities

---

### US-3 — Ingredient Shopping
**As a** shopper who has chosen a recipe,
**I want to** see the recipe ingredients mapped to real IGA products,
**So that** I can add exactly what I need to my cart in one step.

**Acceptance criteria:**
- [ ] Every recipe ingredient maps to at least one IGA product
- [ ] IngredientShopList shows: ingredient name, matched product, pack size, price, availability status
- [ ] Out-of-stock items are visually flagged (AvailabilityDot, red state)
- [ ] A suggested substitution is shown inline for unavailable items
- [ ] User can accept substitution, pick an alternative, or remove the ingredient
- [ ] "Add all to cart" adds all available/accepted items in one tap
- [ ] ToastBanner confirms how many items were added

---

### US-4 — Cart Management
**As a** shopper who has added ingredients,
**I want to** review and adjust my cart before checking out,
**So that** I only pay for what I actually need.

**Acceptance criteria:**
- [ ] CartSummary shows all items with names, quantities, unit prices, and line totals
- [ ] QuantityStepper on each CartItem allows quantity change (min 0 removes the item)
- [ ] Removing an item updates the subtotal in real time
- [ ] Promo code field accepts a code and shows the discount as a green line item
- [ ] Minimum order value is enforced — error shown if cart total is below threshold
- [ ] "Continue to delivery" is disabled until cart has at least one item

---

### US-5 — Delivery Booking
**As a** shopper ready to check out,
**I want to** choose how and when my groceries are delivered,
**So that** they arrive at a time that works for me.

**Acceptance criteria:**
- [ ] User can choose Standard Delivery, Express Delivery, or Click & Collect
- [ ] Each option shows estimated time range and cost
- [ ] Same-day cutoff time is shown via CutoffBadge where relevant
- [ ] Delivery: user confirms saved address or selects/adds a new one
- [ ] Click & Collect: user selects a branch from BranchSelectStep (showing distance + availability)
- [ ] Date picker only shows dates with available slots
- [ ] Time slot grid only shows available windows; sold-out slots are greyed with "Unavailable" label
- [ ] If postcode is outside service zone, a clear error is shown with "Try Click & Collect" fallback
- [ ] Delivery confirmation screen summarises all choices before proceeding to order review

---

### US-6 — Loyalty / Rewards
**As a** registered IGA Rewards member,
**I want to** apply my points at checkout,
**So that** I get a discount on my grocery order.

**Acceptance criteria:**
- [ ] RewardsStep is only shown when the user has an active loyalty account
- [ ] Available points balance and equivalent dollar discount are displayed
- [ ] User can apply points, skip, or save points for later
- [ ] Applied discount appears as a line item in the order total
- [ ] Points earned from this order are shown on the PaymentSuccess screen

---

### US-7 — Authentication
**As a** shopper about to place an order,
**I want to** verify my identity quickly using biometrics,
**So that** my payment is secure without typing a password.

**Acceptance criteria:**
- [ ] AuthPrompt appears only when user taps "Place order" — not at login or cart stage
- [ ] BiometricIndicator animates to signal an active scan
- [ ] Successful auth advances immediately to payment with no extra confirmation step
- [ ] Failed auth shows AuthStatus (error) and offers retry
- [ ] After 3 failed attempts, a fallback option (PIN / password) is offered
- [ ] Auth state is not persisted in the chat — each order placement re-triggers the prompt

---

### US-8 — Payment
**As a** shopper who has reviewed their order,
**I want to** pay using my preferred payment method,
**So that** my order is placed with minimal friction.

**Acceptance criteria:**
- [ ] PaymentConfirmSheet shows saved methods as PaymentMethodTile options
- [ ] Apple Pay flow launches ApplePaySheet → DoubleClickToPay (hardware gesture required)
- [ ] Card payment shows order total and masked card number before confirm
- [ ] "Pay [total]" is the single CTA — no ambiguous secondary actions
- [ ] Payment processing shows TypingIndicator while awaiting response
- [ ] On success: PaymentSuccess renders immediately
- [ ] On failure: clear error + retry; cart and delivery details are preserved

---

### US-9 — Order Confirmation & Receipt
**As a** shopper who has paid,
**I want to** see confirmation that my order is placed,
**So that** I know my groceries are on their way.

**Acceptance criteria:**
- [ ] PaymentSuccess card animates with check icon, order number, and key summary details
- [ ] DetailList shows: order number, item count, delivery address/branch, estimated delivery, payment method
- [ ] Order confirmation event fires for email/push notification (UI scope only — event must be emitted)
- [ ] "Track my order" quick reply is offered immediately after confirmation

---

### US-10 — Order Tracking
**As a** shopper who has placed an order,
**I want to** see the status of my delivery in real time,
**So that** I know when my groceries will arrive.

**Acceptance criteria:**
- [ ] OrderStatusCard shows progress rail with 4 states: Confirmed, Picking, Out for delivery, Delivered
- [ ] Each completed step shows a timestamp
- [ ] Active step animates to indicate current activity
- [ ] Driver ETA is shown once order is "Out for delivery"
- [ ] ReceiptSummary shows full itemised receipt with totals and payment method
- [ ] DeliveryTracker renders consumer-supplied map slot + OrderStatusCard

---

## Edge Case Stories

### US-EC-1 — Item Goes Out of Stock Mid-Journey
**Trigger:** An item added to cart becomes out of stock before payment.
**Response:** ToastBanner warns user. Affected CartItem is flagged. User must resolve (substitute or remove) before proceeding to payment.

### US-EC-2 — Delivery Slot Taken Mid-Booking
**Trigger:** Selected time slot is claimed by another user between selection and order review.
**Response:** TimeSlotStep refreshes; slot shown as unavailable. Bot: "That slot was just taken — please choose another time."

### US-EC-3 — Payment Failure
**Trigger:** Card declined or Apple Pay fails.
**Response:** AuthStatus (error) shown. Cart and delivery details preserved. Retry or change payment method offered.

### US-EC-4 — Session Timeout / Re-entry
**Trigger:** User leaves chat mid-journey and returns later.
**Response:** Bot greets returning user and offers to resume: "You have items in your cart for a butter chicken curry. Continue?"

### US-EC-5 — Minimum Order Not Met
**Trigger:** Cart total falls below store minimum (e.g., $30).
**Response:** CartSummary shows inline warning. Checkout CTA is disabled. Bot: "Add [amount] more to reach the minimum order."

### US-EC-6 — Postcode Outside Delivery Zone
**Trigger:** Address postcode is not in any IGA delivery zone.
**Response:** ToastBanner error shown. "Try Click & Collect" offered as fallback. DeliveryMethodStep re-opens with Delivery option greyed.

---

## Dos and Don'ts

### Do
- **Use ChatWidget's `richContent` slot** for all interactive cards — never navigate away from chat for any step
- **Preserve conversation context** — every step must feel like a continuous thread; `MessageBubble` messages frame each component
- **Use `QuickReplies` after every rich card** — give the user an obvious next action so they never feel stuck
- **Carry state forward** — serving count from Step 4 must drive IngredientShopList quantities in Step 5 and CartItem quantities in Step 8
- **Show cutoff times early** — surface `CutoffBadge` during delivery method selection (Step 10), not only in the time slot picker
- **Animate key moments** — `CardStack` fan animation when items are added; `PaymentSuccess` entry animation for order confirm
- **Respect reduced-motion preferences** — all animations must honour `prefers-reduced-motion`
- **Token-drive all colours** — apply IGA theme via `.theme-iga` class; retail/grocery starting point: `--primary: oklch(0.55 0.22 27)`, `--radius: 0.375rem`
- **Always show a "back" path** — every QuickReplies set must include an escape hatch ("Edit cart", "Change time", "Cancel")
- **Keep auth as late as possible** — prompt for biometric only when user taps "Place order" (Step 17)

### Don't
- **Don't hardcode prices, product names, or recipe data** — all data comes from API/mock; components are purely presentational
- **Don't show all 21 steps at once** — each step appears after the prior one resolves; use `TypingIndicator` to simulate bot processing
- **Don't skip the order review step** — consumer trust and regulatory requirements demand a full itemised total before charging
- **Don't use raw `<button>` elements** — always use the shadcn `<Button>` from `@/components/ui/button`
- **Don't hardcode hex/rgb values** — no `#2563eb`, `bg-red-500`; all values go through CSS custom properties
- **Don't skip `md:` responsive variants** — every size, padding, and spacing must have both mobile and desktop values
- **Don't show delivery options before cart is finalised** — user must confirm cart and promo before the delivery booking flow begins
- **Don't auto-apply loyalty points** — `RewardsStep` is an explicit opt-in; auto-applying causes unexpected order totals
- **Don't expose full payment details** — show only masked card numbers and brand logos; never full card numbers
- **Don't silently drop unavailable items** — always surface substitution/removal choices; never quietly change what the user is buying

---

## Component Map Summary

| Journey Step | Component(s) | Tier |
|---|---|---|
| Chat shell | `ChatWidget` | Layout |
| Recipe display | `RecipeCard` | Core |
| Serving adjust | `QuantityStepper` | Primitive |
| Ingredient mapping | `IngredientShopList` | Core |
| Availability indicator | `AvailabilityDot` | Primitive |
| Cart items | `CardStack`, `CartItem` | Core |
| Cart summary | `CartSummary` | Core |
| Loyalty/rewards | `RewardsStep` | Core |
| Delivery method | `DeliveryMethodStep`, `DeliveryMethodIcon` | Core + Primitive |
| Address confirm | `AddressTile`, `SelectionGroup` | Primitive + Core |
| Branch select | `BranchSelectStep` | Core |
| Date pick | `DateSelectStep` | Core |
| Time slot | `TimeSlotStep`, `CutoffBadge`, `EditWindowNotice` | Core + Primitive |
| Delivery confirm | `DeliveryConfirmation` | Core |
| Order review | `OrderReview`, `DetailList`, `SummaryPanel` | Core |
| Auth | `AuthPrompt`, `BiometricIndicator`, `AuthStatus` | Core + Primitive |
| Payment select | `PaymentConfirmSheet`, `PaymentMethodTile`, `PaymentLogo` | Core + Primitive |
| Apple Pay | `ApplePaySheet`, `DoubleClickToPay` | Core |
| Order confirm | `PaymentSuccess`, `DetailList` | Core |
| Tracking | `OrderStatusCard`, `ReceiptSummary`, `DeliveryTracker` | Core + Layout |
| Toasts / fallbacks | `ToastBanner`, `EmptyState`, `SkeletonBlock` | Primitive |

---

## Verification

Verify end-to-end by running `npm run storybook` and checking:

1. A `ChatWidget` story (`vertical="grocery"`) walks through all 21 steps via mock data
2. Each `richContent` component renders without horizontal overflow on mobile (375px viewport)
3. `QuickReplies` appear after every bot-delivered rich card
4. Serving count → IngredientShopList quantity propagation is correct for 2, 4, 6, and 8 servings
5. Substitution, out-of-stock, postcode-error, and payment-failure states are covered in story variants
6. `PaymentSuccess` animation plays and respects `prefers-reduced-motion: reduce`
7. `DeliveryTracker` renders correctly on mobile (full-width) and desktop (split view)
8. The `.theme-iga` class applies the warm-red primary token consistently throughout the flow
