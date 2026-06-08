# IngredientShopList — Implementation History
**Date:** 2026-06-08  
**Component tier:** Core  
**Location:** `components/core/IngredientShopList/`

---

## What was built

The second card in the recipe-to-cart AI chat flow. After the user selects ingredients in `RecipeCard` and taps "Add to cart", the AI fetches live catalog data and responds with this component — surfacing the best product match per ingredient (cheapest, on sale, best seller) with inline brand-swap capability and a running total CTA.

---

## Key design decisions

**AI picks one product per ingredient; user can swap**  
Considered showing 2–3 options per ingredient side by side. Rejected — too much cognitive load in a chat context. Instead: AI surfaces the top pick, user sees a "Swap ↓" affordance to browse alternatives inline. Feels AI-native, low friction.

**Swap panel expands inline (AnimatePresence height animation)**  
Alternatives animate in with `height: 0→auto` + `opacity: 0→1` using Framer Motion. Selecting an alternative closes the panel and replaces the displayed product immediately. "Swap ↓" label flips to "Close ↑" when open.

**Recommended product included as first alternative**  
The AI data includes the recommended product in the `alternatives` array so users can always switch back to it after swapping. The currently selected option shows a checkmark.

**Running total in CTA**  
Button label: `"Add all to cart — $16.48"`. Total recalculates live as users swap products. No "confirm" step needed — the total is always visible.

**Sale badge follows selection**  
The "On sale" `StatusBadge` appears only on the currently selected product. If a user swaps from a sale item to a regular-priced one, the badge disappears automatically.

---

## Data model

```typescript
interface ProductOption {
  id: string
  name: string
  brand: string
  imageUrl?: string
  price: number
  originalPrice?: number  // populated when onSale: true
  currency: string
  onSale?: boolean
}

interface IngredientProduct {
  ingredientId: string
  ingredientName: string  // forwarded from RecipeCard ("Spaghetti")
  recommendedProduct: ProductOption
  alternatives?: ProductOption[]
}

interface ResolvedItem extends IngredientProduct {
  selectedProduct: ProductOption  // what the user actually chose
}

interface IngredientShopListProps {
  items: IngredientProduct[]
  onAddToCart?: (resolved: ResolvedItem[]) => void
  className?: string
}
```

---

## Compound API

```tsx
// Default usage
<IngredientShopList
  items={aiResolvedItems}
  onAddToCart={handleAddToCart}
/>

// Sub-components
IngredientShopList.Row      // single ingredient row + swap panel (reads state from context)
IngredientShopList.Actions  // running total + CTA
```

---

## Internal state

```typescript
// Map of ingredientId → currently selected product
const [selections, setSelections] = useState<Record<string, ProductOption>>(...)

// Map of ingredientId → swap panel open
const [openSwap, setOpenSwap] = useState<Record<string, boolean>>({})
```

Both are in context so `Row` and `Actions` sub-components can read/update them without prop drilling.

---

## Primitives reused

| Primitive | Use |
|-----------|-----|
| `PriceDisplay` | Current price + strikethrough `originalPrice` when on sale |
| `StatusBadge` variant `success` | "On sale" label |
| `Button` (ui/button) | Swap toggle (`ghost`), alternatives (`outline` + active tint), CTA (`default`) |

---

## Animation

- Card mounts: `opacity: 0→1, y: 10→0`, 200ms, `ease.out`
- Rows stagger in: `staggerChildren: 0.04`
- Swap panel expand/collapse: `height + opacity`, 200ms, `ease.out`
- Alternative selection: CSS `active:scale-[0.97]`
- All motion guarded by `useReducedMotion()` — height animation replaced with opacity only

---

## Files created/modified

| File | Action |
|------|--------|
| `components/core/IngredientShopList/IngredientShopList.tsx` | Created |
| `components/core/IngredientShopList/IngredientShopList.stories.tsx` | Created |
| `components/core/index.ts` | Added exports |

---

## Stories

| Story | Description |
|-------|-------------|
| Default | 4 ingredients, 2 on sale with strikethrough pricing |
| No sale items | 3 ingredients, all regular price, no badges |
| Interactive — live cart preview | Shows resolved selections + total on `onAddToCart` |

---

## Flow context

This is **step 2** of a two-step AI chat flow.  
Step 1: [`RecipeCard`](recipe-card.md) — user selects a recipe and picks which ingredients they need.

**Full flow:**
1. AI sends `RecipeCard` with recipe + ingredient list
2. User toggles ingredients, adjusts servings, taps "Add X ingredients to cart"
3. `onAddToCart(selectedIngredients, servings)` fires → AI fetches catalog data
4. AI sends `IngredientShopList` with best product per ingredient + alternatives
5. User reviews picks, swaps any brands they want, taps "Add all to cart — $X"
6. `onAddToCart(resolved)` fires with final product selections
