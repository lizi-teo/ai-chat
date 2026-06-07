# Insurance & Travel Comparison Chat UI — Design Plan v2

## The real problem with the v1 plan

The first plan was still a comparison table with motion added. Breaking it into three cards doesn't solve the underlying issue: users still have to hold attributes in their head and do the analysis themselves. And for insurance or travel, the attributes interact in non-obvious ways — a low premium with a high deductible can cost more than a higher premium with a lower deductible, depending on how often you use healthcare.

The goal isn't to present information more prettily. It's to make the decision easier and more trustworthy.

---

## What actually makes insurance and travel decisions hard

**Information density:** A health plan has 15+ attributes. A flight has fare class, baggage, seat selection, layovers, arrival time, cancellation policy. Users don't know which ones matter for their situation.

**Attribute interdependence:** Attributes don't mean much in isolation. A $500 deductible is great if you're healthy. It's terrible if you have a chronic condition. The value of an attribute depends on context the user has but rarely states.

**Unknown unknowns:** Users don't ask about out-of-pocket maximums because they don't know the term exists. They don't ask about fare class rules because they've never had a ticket voided. The important details are often the ones they didn't know to look for.

**Fear of regret:** These are significant, often irreversible purchases. The user isn't just deciding — they're also managing their anxiety about making the wrong call.

**Trust gap:** The AI says "Plan B wins." The user thinks: "Based on what? What does it know about me?"

---

## Rethinking the pattern: from comparison to simulation

Instead of comparing attributes, simulate the outcome. Show the user what life actually looks like on each option, in terms they already understand.

### For insurance: "Your year on each plan"

Rather than: `Deductible: Plan A $1,000 | Plan B $500`

Show: A simple visual of estimated costs across the year, based on typical usage for someone like them.

```
Your estimated year — Plan A ($240/mo)

Jan  Feb  Mar  Apr  May  Jun  Jul  Aug  Sep  Oct  Nov  Dec
 ●    ●    ●    ●    ●    ●    ●    ●    ●    ●    ●    ●
$240 $240 $490 $240 $240 $240 $240 $240 $240 $240 $240 $240
               ↑
         Typical GP visit + prescription

Total: ~$3,350/year
```

Then Plan B underneath for comparison. The user instantly sees the difference in context.

### For travel: "Your trip on each option"

Rather than: `Layovers: 1 | Baggage: 1 bag included`

Show a miniature itinerary card:

```
Option A — $380
Departs 6:00am → Arrives Rome 11:30pm (next day)
  ✦ 1 stop · 4hr layover Frankfurt
  ✗ Carry-on only
  ✗ Non-refundable

Option B — $520
Departs 2:00pm → Arrives Rome 2:00pm (next day)
  ✦ Direct
  ✓ 1 checked bag included
  ✓ Free cancellation 48hrs
```

Now the user understands the $140 difference is about arriving exhausted at midnight vs. afternoon, plus flexibility.

---

## Progressive disclosure: four layers, each earned

The key insight: information should only appear when the user has shown they're ready for it. Each layer is triggered by engagement with the previous one.

### Layer 1 — The verdict (always shown)

One sentence from the AI. No hedging, no qualifications. Confident.

> "For most people here, Plan B costs less over the year — unless you have regular prescriptions."

This lands in the chat immediately. It's the answer. Everything else is evidence.

**Motion:** Typewriter effect that slows slightly at the comma — mirrors natural speech rhythm, the pause before the caveat.

---

### Layer 2 — The single deciding factor (shown after verdict)

The ONE thing that explains the recommendation. Not three things. Not a table. One.

For insurance:
```
┌───────────────────────────────────────┐
│  Why Plan B?                          │
│                                       │
│  Annual cost for typical usage        │
│  ─────────────────────────────────    │
│  Plan A   ████████████████  $3,840   │
│  Plan B   ████████████      $2,640   │
│                                       │
│  You'd save $1,200/year               │
└───────────────────────────────────────┘
```

For travel:
```
┌───────────────────────────────────────┐
│  The real difference                  │
│                                       │
│  Option A  Arrives 11:30pm  $380     │
│  Option B  Arrives 2:00pm   $520     │
│                                       │
│  $140 more for an afternoon arrival  │
│  and free cancellation                │
└───────────────────────────────────────┘
```

**Motion:** The bar chart animates from left to right, Plan A first then Plan B. The gap between them is what the eye notices — make it land with a slight pause before the savings label appears.

---

### Layer 3 — The caveat explorer (triggered by tapping the card)

The verdict includes a caveat ("unless you have regular prescriptions"). Tapping the card opens a caveat explorer — a small interactive moment inside the chat, not a new screen.

```
┌───────────────────────────────────────┐
│  Does this apply to you?              │
│                                       │
│  How often do you use prescriptions?  │
│                                       │
│  [Rarely]  [Monthly]  [Weekly]       │
└───────────────────────────────────────┘
```

Selecting an option doesn't open a form — it collapses the pills and the card updates in place:

- "Rarely" → card stays the same, Plan B still wins
- "Monthly" → bar chart animates, gap narrows, label updates: "Still Plan B, but closer"
- "Weekly" → bars swap, Plan A becomes winner, label: "Plan A works better for you"

**Motion:** The bar chart morphs smoothly between states. The winner border slides from one plan to the other. This is the most important motion in the entire experience — it makes the user feel seen, not just informed.

---

### Layer 4 — Full details (triggered by "See everything")

Only users who explicitly want more reach this layer. It's a bottom sheet, but the content is organized differently from a data dump.

#### Not this (a data dump):
```
Monthly premium        $180/mo
Annual deductible      $500
Out-of-pocket max      $4,000
Primary care visit     $20 copay
Specialist visit       $40 copay
...
```

#### This (grouped by life situation):

```
┌───────────────────────────────────────┐
│  Plan B — Full details          ╲     │
│  ─────────────────────────────────    │
│                                       │
│  💰 What you pay monthly             │
│  Premium · $180                       │
│                                       │
│  🏥 If you get sick                  │
│  GP visit · $20 copay                 │
│  Specialist · $40 copay               │
│  Deductible · $500 before coverage    │
│                                       │
│  💊 Prescriptions                    │
│  Tier 1 generics · $10               │
│  Tier 2 brand-name · $35             │
│                                       │
│  🚨 Worst case                       │
│  Out-of-pocket max · $4,000/year      │
│  After that, 100% covered             │
│                                       │
│  [Choose Plan B]  [Compare again]     │
└───────────────────────────────────────┘
```

Grouping by life situation (not attribute type) means the user reads in terms of their own experience, not insurance terminology.

**Motion on the bottom sheet:**
- Sheet opens with spring physics — overshoots 6px, settles. Feels like a physical object being pulled up
- Each section group fades in with a 60ms stagger — creates a reading rhythm, the page doesn't arrive as a wall
- The drag handle indicator pulses once when the sheet opens (draws eye, communicates gesture)
- Scrim behind dims to 50% — chat still visible, user remembers context

---

## The "what if" moment — the most powerful layer

This is the feature that separates informing from deciding.

At the bottom of Layer 2 or Layer 3, a quiet prompt:

> "What if something unexpected happened?"

Tapping it opens a scenario selector:

```
[Surgery · ~$8,000]  [New medication]  [Having a baby]  [Nothing major]
```

The AI recalculates and updates the cost bars instantly:

> "If you needed surgery this year, Plan B's lower out-of-pocket max saves you $1,800 more than Plan A. Plan B is still the better choice."

Or for the "Nothing major" scenario:

> "If you stay healthy this year, the monthly premium difference alone saves you $720. Plan B wins easily."

This makes the abstract concrete. It's the closest thing to a financial advisor conversation in a UI.

---

## Trust mechanics — why the AI's recommendation feels credible

The current plan lacks trust-building. The AI says "Plan B is better" but gives no context for why it would know. These small additions matter enormously:

**Transparency about basis:**
> "I'm comparing based on typical usage for this region: ~4 GP visits/year, 1–2 specialist visits, common generic prescriptions."

**Acknowledge close calls:**
> "This is a closer decision than it looks. If your situation changes — new medication, family addition — revisit this."

**Confidence indicators:**
Rather than always stating certainty, let the AI have a confidence level:
- "Clearly Plan B" (strong verdict)
- "Likely Plan B, but worth checking your prescriptions" (hedged)
- "Genuinely close — your call" (honest uncertainty, here are the tiebreakers)

Paradoxically, showing uncertainty builds more trust than always projecting confidence.

---

## Motion design summary

| Interaction | Motion | Intent |
|---|---|---|
| AI verdict appears | Typewriter with natural pauses | Feels like thinking, not a data dump |
| Bar chart entrance | Left-to-right fill, Plan A then Plan B | Builds anticipation, gap is the insight |
| Savings label | Counts up from $0 over 600ms | Makes the number feel earned, not static |
| Caveat pill selected | Bars morph, winner border slides | Shows the AI reconsidered based on you |
| Bottom sheet open | Spring physics, 6px overshoot | Physical, feels like lifting a layer |
| Detail row entrance | 60ms stagger per group | Reading rhythm, not a wall |
| "What if" result | Bars animate to new values | Simulates a decision being made in real time |
| Scenario pill active | Border + subtle scale-up | Selected state feels chosen, not just highlighted |

---

## Key design principles extracted

**1. Lead with the outcome, not the attributes.**
Users want to know what their life looks like on each option, not a list of specs.

**2. One thing at a time, each earned.**
Each layer requires the user to engage before the next appears. This isn't gating — it's pacing.

**3. The AI should think out loud.**
Showing the reasoning ("based on typical usage in your region") builds trust that a bald conclusion never does.

**4. Uncertainty is honest, not weak.**
"This is a close call" is more credible than "Plan B wins." Real advisors say this. AI should too.

**5. Details should be organized by life, not by database schema.**
"If you get sick" is more useful than "Copay amounts."

**6. Let the user change the inputs, watch the output change.**
The "what if" moment and the caveat pills are both versions of this. It's the most powerful thing a conversational UI can do that a static page cannot.

---

## Screens to design

### Core flow (required)
1. Chat — user question, AI thinking state (typing indicator)
2. Chat — AI verdict bubble (Layer 1)
3. Chat — deciding factor card, Plan B winning (Layer 2)
4. Chat — caveat pills (Layer 3, default state)
5. Chat — caveat pills, "Weekly" selected, Plan A now wins (Layer 3, reweighted)
6. Chat — "what if" scenario selector
7. Chat — "what if" result updated

### Detail view
8. Bottom sheet — full details, closed state (sheet at 10% peek)
9. Bottom sheet — full details, open state

### Edge cases worth designing
10. Genuinely close call state (AI expresses uncertainty)
11. Plan A wins state (don't always default to Plan B winning)

---

## Open questions

- **Auto-advance vs tap-to-advance on the timeline view?**
  Tap feels more considered for a high-stakes purchase.

- **Should scenario pills be pre-selected?**
  If the merchant knows the user profile (e.g. pharmacy customer with prescriptions on file), pre-selecting the right scenario makes the AI feel remarkably personal.

- **Where does the "what if" prompt live?**
  Inline after Layer 2, or as a quick-reply chip below the AI message? Quick-reply chip is lower friction.

- **For travel: does Option A vs Option B framing work, or should real airline names appear?**
  Real names change the tone — it becomes about brand preference, not decision quality.
