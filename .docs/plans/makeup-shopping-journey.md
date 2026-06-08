# Makeup Shopping — AI Chat User Journey
**Date:** 2026-06-08
**Status:** Draft — for component planning

---

## The concept

The AI recommends a **recipe** — a curated set of 2–3 products (or one palette) where the colours are balanced and work together. The recipe has a story: *why these colours go together* and *why they work for this person's skin*. Not a shopping list — a considered suggestion from someone who understands colour harmony.

**The focal point rule** governs every recipe:
- Strong eye → soft/nude lip → optional blush as third element
- Strong lip → minimal eye (mascara only) → no blush needed
- Both soft → blush or bronzer is the hero third element
- Monochrome → same colour family on eye + lip + cheek — always safe, always cohesive

---

## The conversation — 3 questions

### Q1 — Occasion (sets the intensity ceiling)

> "Is this for everyday — work, errands — or something more like a night out?"

This one answer tells the AI how much colour payoff is appropriate and how bold the recipe can go.

| Answer | Recipe direction |
|---|---|
| Day / work / everyday | Neutral-adjacent, soft colour, natural finish, wearable all day |
| Night / party / occasion | One statement feature, bolder payoff, can carry more contrast |

A palette answer here can go either way: some people want one palette that works for both. If they say that — the recipe becomes "buy this palette, use it two ways" with a day and night version of the story.

---

### Q2 — Undertone (the colour matching axis)

> "Do you know if you have warm, cool, or neutral undertones?"

Most people say no. That's fine — it's why Q3 exists.

If they do know → go straight to the recipe.

**Accept natural language without making people feel ignorant:**
- "I'm South Asian / Indian" → assume olive-warm, confirm warm vs neutral
- "I'm Chinese / Korean / Japanese" → assume cool-pink until told otherwise
- "I'm Filipino / Thai / Malay / Indonesian" → assume warm-golden
- "I go orange in most foundations" → neutral or cool undertone
- "I look ashy / grey" → warm undertone — cool shades sit flat on them
- "I look chalky / washed out" → warm or olive undertone
- "wheatish" / "dusky" / "golden-brown" → South Asian warm-neutral, likely olive

**Do not use "yellow-toned" as a default for Asian skin.** It is inaccurate for a large portion of Asian consumers and leads to wrong recommendations.

---

### Q3 — Foundation fallback (only if Q2 is "I don't know")

> "What foundation do you normally use? Even just the brand is helpful."

The shade code decodes undertone without requiring the user to know the terminology:

| What they say | What the AI infers |
|---|---|
| MAC NC20 / NC35 / NC45 | Warm undertone (NC = warm despite the name) |
| MAC NW15 / NW30 | Cool undertone (NW = cool) |
| Fenty 110N / 235W / 310C | N = neutral, W = warm, C = cool |
| L'Oréal True Match W / N / C | Warm / neutral / cool directly |
| SUGAR Cosmetics Cappuccino / M2 | Olive-warm — South Asian formulation |
| "Nothing ever matches me" | Ask: *"What usually goes wrong — too orange, too pink, too ashy?"* — the failure mode is the undertone signal |
| "I don't wear foundation" | Fall back to the vein test: *"Look at the veins on your inner wrist — more blue-purple, green, or a mix?"* |

If they know the brand but not the shade → ask "do you remember the shade number?" Most makeup users have it saved or remember roughly.

---

## The recipe output

Two shapes depending on Q1.

### Day recipe

Neutral base, soft eye, barely-there lip. Nothing competes. Colours stay in a narrow family close to the skin tone. Easy to apply, wears without touching up.

**Story template:**
> "[Colour] eye, [colour] lip — everything in the same [warm/cool] family as your skin. It looks intentional without looking like effort."

| Undertone | Eye | Lip | Third (optional) |
|---|---|---|---|
| Warm / South Asian olive | Warm taupe, soft bronze | Nude-peach, warm nude | Bronzer or skip |
| East Asian cool-pink | Champagne, soft rose | Nude-pink, soft mauve | Light rosy blush |
| East Asian warm-golden | Peachy champagne, copper | Peach nude, warm coral | Soft bronzy blush |
| Deep warm | Warm brown, terracotta | Warm nude, brown-nude | Warm blush or skip |
| Deep cool-neutral | Cool taupe, soft plum | Berry-nude, cool nude | Skip — skin does it |
| Fair cool | Soft grey-taupe, mauve | Dusty rose, nude-pink | Cool-pink blush |
| Fair warm | Warm beige, soft bronze | Peachy nude, coral nude | Soft warm blush |

---

### Night recipe

One statement feature — either a strong eye or a strong lip, never both. The supporting products hold space without competing. More colour payoff, more contrast allowed.

**Story template:**
> "[Strong feature] does the work, everything else goes quiet. The [colour] reads [quality] against your [undertone description] — it doesn't fight your skin, it sits on top of it."

| Undertone | Statement option A (eye-led) | Statement option B (lip-led) |
|---|---|---|
| Warm / South Asian olive | Bronze/copper smoky eye + bare nude lip | Deep terracotta or brick lip + minimal eye |
| East Asian cool-pink | Rosy smoky eye + barely-there lip | Deep berry or plum lip + mascara only |
| East Asian warm-golden | Burnished gold/copper eye + soft nude | Warm berry or dark coral lip + minimal eye |
| Deep warm | Rich terracotta or burnt orange eye + nude | Deep warm berry or brick lip + no eye shadow |
| Deep cool-neutral | Deep plum or charcoal eye + nude | Oxblood or cool dark berry lip + liner + mascara |
| Fair cool | Soft plum or navy liner + nude | Raspberry or deep rose lip + mascara only |
| Fair warm | Warm bronze eye + glossy nude | Coral or warm red lip + concealer + mascara |

---

## Recipe card structure

```
[Look name — outcome language, not editorial]
[1 sentence: why these colours go together]
[1 sentence: why they work for this person's skin]

Product 1 — [type]  [swatch]  [shade name]  ← focal point
Product 2 — [type]  [swatch]  [shade name]  ← supporting
Product 3 — [type]  [swatch]  [shade name]  ← optional third / blush / setting

[CTA: Add to cart  |  Save this look]
```

Look name examples — outcome language only:

| Avoid | Use instead |
|---|---|
| Fresh look | Rested and together |
| Natural glam | Looks like your skin but better |
| Smoky eye | One strong thing, everything else quiet |
| Dewy finish | Glowy, like you've slept |
| Summer glow | Warm and even |

---

## Data model

```typescript
type Occasion = 'day' | 'night'
type Undertone = 'warm' | 'cool' | 'neutral' | 'olive-warm'
type Depth = 'fair' | 'light' | 'medium' | 'deep'
type ProductType = 'eye' | 'lip' | 'cheek' | 'base' | 'palette'
type RecipeFormat = 'individual' | 'palette'

interface MakeupSwatch {
  hex: string        // used for colour preview
  name: string       // e.g. "warm bronze", "dusty rose"
}

interface MakeupProduct {
  id: string
  type: ProductType
  label: string          // e.g. "Eyeshadow", "Lipstick", "Blush"
  shade: string          // shade name e.g. "Toasted Almond"
  swatch: MakeupSwatch
  isFocalPoint?: boolean // the hero product — eye or lip that leads the look
  undertoneNote?: string // e.g. "good olive coverage", "runs warm — size up if cool-toned"
}

interface MakeupRecipeStory {
  harmony: string   // why these products go together
  skinTone: string  // why they work for this person's undertone specifically
}

interface MakeupRecipe {
  id: string
  occasion: Occasion
  format: RecipeFormat
  lookName: string         // outcome language
  story: MakeupRecipeStory
  products: MakeupProduct[] // 2–3 items, or 1 palette + 1 supporting product
  undertone: Undertone
  depth?: Depth
}

interface MakeupRecipeCardProps {
  recipe: MakeupRecipe
  onProductClick?: (product: MakeupProduct) => void
  onAddToCart?: (products: MakeupProduct[]) => void
  onSave?: (recipe: MakeupRecipe) => void
  className?: string
}
```

---

## Component map

| Journey step | Component |
|---|---|
| Q1–Q3 conversation | `MessageBubble` — no new component needed |
| Recipe output | `MakeupRecipeCard` — new core component |
| Product drill-down | `ChipToCard` or `SelectionGroup` per product |
| Add to cart | `CartSummary` |

`MakeupRecipeCard` sub-components:

```
MakeupRecipeCard.Story       // look name + 2-sentence narrative
MakeupRecipeCard.ProductList // swatch row with focal point callout
MakeupRecipeCard.Actions     // add to cart + save CTA
```

See [`recipe-card.md`](recipe-card.md) for the base `RecipeCard` pattern this extends.

---

## Key rules (non-negotiable)

1. **Never ask "what skin tone are you?" cold.** Anchor the question to occasion or foundation first.
2. **Undertone before depth.** "Warm, cool, or neutral?" is more useful than "light, medium, or dark?"
3. **Never use "yellow" as a default for Asian skin.** Cool-pink is common in Northeast Asia; warm-golden in Southeast Asia.
4. **The foundation shade code is the best undertone proxy** when the user doesn't know the terminology.
5. **The failure mode is the signal.** "Goes orange on me" → they have cool/neutral undertones. "Looks ashy" → they have warm undertones.
6. **One strong feature per recipe.** Eye-led or lip-led — not both.
7. **The story is not optional.** Two sentences that explain the logic make the difference between a list of products and a recommendation worth trusting.

---

## Open questions

- Does the format need to handle palettes explicitly (one product, used two ways) or is individual-product always the default?
- Should the card show a day and night version side by side for versatile palettes?
- What is the actual self-description language for deep/dark-skinned Black consumers — needs primary user research, the published statistics did not survive adversarial fact-checking.
