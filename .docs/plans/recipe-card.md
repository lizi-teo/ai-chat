# RecipeCard — Implementation History
**Date:** 2026-06-08  
**Component tier:** Core  
**Location:** `components/core/RecipeCard/`

---

## What was built

A compound component that represents a recipe in an AI chat flow. Designed for grocery/recipe assistant contexts — the AI recommends a recipe and the user selects which ingredients they need to buy.

---

## Key design decisions

**Ingredient chips are toggleable (not product pickers)**  
Each chip defaults to "selected" (user needs this). Clicking toggles to deselected = "I have this at home". The `onIngredientClick` callback fires on every click as an escape hatch for consumers who want to open a product picker. This keeps the RecipeCard simple while remaining extensible.

**Inline `QuantityStepper` for servings (always visible)**  
"Adjust servings" was considered as a separate CTA that reveals a stepper. Rejected in favour of an always-visible stepper — the immediate feedback of quantities scaling as you change servings is the whole value of the feature. An extra tap to reveal the stepper breaks that cause-and-effect loop.

**Quantities scale live**  
Ingredient quantities are stored as a base value per 1 serving. The display value is `quantity × servings` recalculated on every render. No memo needed at this scale.

**"Add to cart" CTA counts selected only**  
Label reads `"Add {n} ingredients to cart"`, disabled when `n === 0`. `onAddToCart` receives the full selected list with `scaledQuantity` added to each ingredient.

---

## Data model

```typescript
type Difficulty = 'easy' | 'medium' | 'hard'

interface Ingredient {
  id: string
  name: string
  quantity: number  // base quantity per 1 serving
  unit: string      // "g", "ml", "cup", "tbsp", "whole", etc.
  selected?: boolean
}

interface ScaledIngredient extends Ingredient {
  scaledQuantity: number
}

interface RecipeCardProps {
  title: string
  prepTime: string       // display string e.g. "30 min"
  difficulty: Difficulty
  defaultServings?: number
  ingredients: Ingredient[]
  onIngredientClick?: (ingredient: Ingredient) => void
  onAddToCart?: (ingredients: ScaledIngredient[], servings: number) => void
  className?: string
}
```

---

## Compound API

```tsx
// Default usage — renders everything internally
<RecipeCard
  title="Pasta Carbonara"
  prepTime="30 min"
  difficulty="easy"
  defaultServings={2}
  ingredients={ingredients}
  onIngredientClick={handleIngredientClick}
  onAddToCart={handleAddToCart}
/>

// Sub-components exposed for custom composition
RecipeCard.Header       // title + StatusBadge meta row
RecipeCard.IngredientList  // toggleable chip list (reads servings from context)
RecipeCard.Actions      // servings stepper + CTA
```

---

## Primitives reused

| Primitive | Use |
|-----------|-----|
| `StatusBadge` | Prep time (`info` variant) + difficulty (`success`/`warning`/`error`) |
| `QuantityStepper` | Servings control (`min=1`, `max=20`) |
| `Button` (ui/button) | Add to cart CTA |

---

## Animation

- Card mounts: `opacity: 0→1, y: 10→0`, 200ms, `ease.out`
- Ingredient chips stagger in: `staggerChildren: 0.04`
- Chip toggle: CSS `active:scale-[0.97]` + opacity/border crossfade 150ms
- All motion guarded by `useReducedMotion()` — y/scale removed, opacity kept

---

## Files created/modified

| File | Action |
|------|--------|
| `components/core/RecipeCard/RecipeCard.tsx` | Created |
| `components/core/RecipeCard/RecipeCard.stories.tsx` | Created |
| `components/core/index.ts` | Added exports |
| `.storybook/preview.tsx` | Fixed pre-existing bug: `defaultTheme: 'Default (light)'` → `'Light'` |

---

## Stories

| Story | Description |
|-------|-------------|
| Default | All 5 ingredients selected |
| Some ingredients excluded | 2 of 5 pre-deselected |
| Hard recipe — long list | Tonkotsu Ramen, 10 ingredients, hard badge |
| Medium difficulty | Shakshuka |
| Interactive — live cart preview | Shows `onAddToCart` payload + last clicked ingredient |

---

## Flow context

This is **step 1** of a two-step AI chat flow.  
Step 2: [`IngredientShopList`](ingredient-shop-list.md) — AI follows up with brand/product options for selected ingredients.
