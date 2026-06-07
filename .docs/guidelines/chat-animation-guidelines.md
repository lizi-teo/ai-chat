# Chat Animation Guidelines

Innovative, premium-feeling animation for AI chat interfaces. These patterns extend the base motion system (`.docs/motion-guidelines`) with chat-specific innovations. Read that file first — duration tokens, easing, reduced-motion rules, and `AnimatePresence` conventions all apply here.

---

## Philosophy

Chat is a living medium. Animations should make the AI feel present and intelligent — not just functional. The goal is a sense of *thought* and *materiality*: text that arrives with weight, responses that feel composed, not dumped.

Three principles:
1. **Arrival tells a story** — how content enters signals what it is (streamed thought vs instant reply vs rich result)
2. **The wait has personality** — loading states are the AI's "face" while thinking
3. **Never decorate silence** — only animate on state change, not continuously

---

## Message Appearance

### Word-by-Word Materialization (AI messages only)
Each word fades in with a tiny upward drift. Faster than character streaming, more deliberate than a plain fade. Achieved by splitting the streamed text into word tokens and staggering `AnimatePresence` entries.

```tsx
const wordVariants = {
  hidden: { opacity: 0, y: 4 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.18, ease: [0, 0, 0.2, 1] },
  },
}

// Wrap each word
{words.map((word, i) => (
  <motion.span
    key={`${word}-${i}`}
    variants={wordVariants}
    initial="hidden"
    animate="show"
    style={{ display: 'inline-block', marginRight: '0.25em' }}
  >
    {word}
  </motion.span>
))}
```

**Rule**: Only apply to AI messages. User messages use the standard bubble entrance. Never apply to streamed code blocks — code renders as a whole block.

---

### Magnetic Snap Entrance (user messages)
User bubble slides in from the right with a spring overshoot, settling with a subtle squish. Feels like the message has momentum.

```tsx
<motion.div
  initial={{ opacity: 0, x: 20, scaleX: 0.96 }}
  animate={{ opacity: 1, x: 0, scaleX: 1 }}
  transition={{
    opacity: { duration: 0.15, ease: [0, 0, 0.2, 1] },
    x: { type: 'spring', stiffness: 380, damping: 26 },
    scaleX: { type: 'spring', stiffness: 280, damping: 22 },
  }}
>
```

**Rule**: Spring easing only on the positional axis (x). Opacity always uses `ease.out` — springs on opacity look wrong.

---

### Paragraph-by-Paragraph Reveal (long AI responses)
For responses with multiple paragraphs, stagger each block with `staggerChildren`. The user sees meaning arriving in logical chunks, not a wall of text.

```tsx
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const blockVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0, 0, 0.2, 1] } },
}
```

Threshold: apply when response has ≥ 3 paragraphs or contains a code block. Short replies get the standard bubble entrance.

---

## Thinking / Loading States

### Waveform Pulse (default thinking indicator)
Five bars oscillating as a sine wave — looks like audio activity. More expressive than three dots. Bars animate with staggered `y` translations on a loop.

```tsx
const BAR_COUNT = 5
const barVariants = {
  animate: (i: number) => ({
    scaleY: [0.4, 1, 0.4],
    transition: {
      duration: 1.1,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: i * 0.12,
    },
  }),
}

<div className="flex items-center gap-0.5 h-5" aria-label="AI is thinking" role="status">
  {Array.from({ length: BAR_COUNT }).map((_, i) => (
    <motion.span
      key={i}
      custom={i}
      variants={barVariants}
      animate="animate"
      className="w-0.5 bg-muted-foreground rounded-full origin-bottom"
      style={{ height: '100%' }}
    />
  ))}
</div>
```

**Rule**: Wrap in `AnimatePresence` so it fades in/out cleanly. Never show both waveform and text simultaneously.

---

### Morphing Blob (ambient thinking, heavy-compute states)
A soft rounded shape that continuously morphs `border-radius` values. Use only for operations expected to take > 3 seconds — otherwise it feels like something is wrong.

```tsx
<motion.div
  className="w-8 h-8 bg-primary/20"
  animate={{
    borderRadius: ['50%', '38% 62% 55% 45%', '62% 38% 42% 58%', '50%'],
  }}
  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
/>
```

**Rule**: Use `bg-primary/20` not a solid color — this is ambient, not a CTA.

---

### Structured Skeleton (response-shape preview)
Show the rough shape of the incoming answer before content arrives: heading skeleton + paragraph lines + optional code block outline. Shimmers with a horizontal gradient sweep.

```tsx
// Shimmer sweep keyframe (CSS custom property driven)
const shimmer = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: { duration: 1.8, repeat: Infinity, ease: 'linear' },
  },
}
```

Shapes:
- Short answer: 2 paragraph lines
- List answer: bullet line × 3
- Code answer: code block outline + 3 text lines below

**Rule**: Only display skeleton if first token hasn't arrived within 600ms. Skeleton that flashes in and out before the response feels broken.

---

### "Thinking" Label Cycle
The indicator label crossfades through stages, giving the AI personality during long waits:

```
Thinking… → Reading… → Writing…
```

```tsx
const STAGES = ['Thinking', 'Reading', 'Writing']

// Cycle every 1.8s, crossfade with AnimatePresence mode="wait"
<AnimatePresence mode="wait">
  <motion.span
    key={stage}
    initial={{ opacity: 0, y: 4 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -4 }}
    transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
  >
    {STAGES[stage]}…
  </motion.span>
</AnimatePresence>
```

**Rule**: Only pair with the waveform indicator. Never show the cycling label alone — the visual pulse anchors it.

---

## Micro-Interactions

### Copy Button Transform
The copy icon morphs to a check, then back. Includes a small ink-ring ripple on confirm.

```tsx
// Icon swap via AnimatePresence mode="wait"
// Ripple: scale 1 → 1.8, opacity 1 → 0, duration 0.4s
<motion.div
  key={copied ? 'check' : 'copy'}
  initial={{ scale: 0.7, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.7, opacity: 0 }}
  transition={{ duration: 0.15, ease: [0, 0, 0.2, 1] }}
/>
```

Auto-revert after 2s. Never auto-revert in under 1s — the confirmation needs to register.

---

### Thumbs Up Burst
On positive feedback, a small emoji particle explosion fires from the thumbs-up button. 6–8 particles (emoji or dots) animate outward with spring physics and fade.

```tsx
// Each particle: random angle, random distance (30–60px), opacity 1 → 0
// Duration: 0.6s, spring stiffness: 200, damping: 20
// Do NOT play this on thumbs-down — muted shake instead
```

---

### Error Shake
A failed message or network error shakes the affected element with a short horizontal translate keyframe. Never use red flash alone.

```tsx
<motion.div
  animate={hasError ? { x: [0, -6, 6, -4, 4, 0] } : {}}
  transition={{ duration: 0.35, ease: 'easeInOut' }}
>
```

---

### Avatar Breathe (AI composing)
The AI avatar subtly scales while a response is being generated — like it's breathing. Scale range: `1.0 → 1.025`. Stop immediately when streaming begins.

```tsx
<motion.div
  animate={isGenerating ? { scale: [1, 1.025, 1] } : { scale: 1 }}
  transition={{ duration: 2.4, repeat: isGenerating ? Infinity : 0, ease: 'easeInOut' }}
/>
```

**Rule**: Stop the loop as soon as the first token arrives. Breathing while text is streaming looks uncanny.

---

## Carousels & Rich Content

### Horizontal Scroll Strip (default for cards in chat)
Cards in chat should never use prev/next arrows. Use a momentum-scroll strip with snap-to-card and a peek of the next card to signal scrollability.

```tsx
<div
  className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
  style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
>
  {cards.map((card) => (
    <div key={card.id} className="snap-start shrink-0 w-[280px] md:w-[300px]">
      {/* card content */}
    </div>
  ))}
</div>
```

- Last card should be partially visible (peek) to indicate more content — never clip flush
- Add `aria-label="Scroll for more options"` on the scroll container
- No dots indicator — the peek is the affordance

---

### Card Stack (expandable fan)
Cards stack with slight Y-offset and rotation, like a fanned deck. Tap/click fans them out; tap again collapses.

```tsx
// Collapsed: each card offset by 6px Y and 1.5deg rotation
// Expanded: stagger cards 80px apart, flat (0 rotation)
// Spring transition on both states
const stackedVariants = (i: number) => ({
  collapsed: { y: i * 6, rotate: i * -1.5, zIndex: cards.length - i },
  expanded:  { y: i * 88, rotate: 0, zIndex: cards.length - i },
})
```

Use for: option sets of 3–5 items (e.g. "Here are 3 flight options"), not for long lists.

---

### Chip-to-Card Expansion
Quick reply chips expand in-place into a full card when selected. Unselected chips dissolve away.

```tsx
// Selected chip: layout animation expands width/height to card dimensions
// Unselected chips: AnimatePresence exit (opacity 0, scale 0.9)
// Use motion layout prop on the chip container
<motion.div layout layoutId={`chip-${id}`}>
```

The `layoutId` links the chip and the expanded card so motion morphs between them automatically.

**Rule**: Only use `layoutId` morphing when the chip and card are in the same `AnimatePresence` context. Do not use for navigating to a new route.

---

## Input Area Animations

### Focus Glow
On focus, a soft radial glow expands behind the input bar — not a border ring, but a background effect.

```css
/* Via CSS transition — not framer-motion */
.chat-input:focus-within::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  background: radial-gradient(ellipse at center, var(--ring) / 0.08, transparent 70%);
  opacity: 1;
  transition: opacity 150ms ease-out;
}
```

---

### Send Button Transition
When the input has content, the send button transitions from a mic/attach icon to an arrow icon. Animate via `AnimatePresence mode="wait"` with a scale + rotate entrance.

```tsx
// Empty state: mic icon, scale in
// Has content: arrow icon, rotates in from 45deg to 0deg
initial={{ opacity: 0, scale: 0.7, rotate: 45 }}
animate={{ opacity: 1, scale: 1, rotate: 0 }}
```

---

## Ambient Personality

### Conversation Age Fade
Messages older than 8 in the thread very subtly reduce opacity — newer messages feel crisp, older ones recede. Apply via a CSS custom property driven by message index.

```tsx
// opacity: Math.max(0.6, 1 - (distanceFromBottom * 0.04))
// Never go below 0.6 — content must remain readable
// Do NOT apply to the user's own messages
```

**Rule**: This is a display hint only. Full opacity restores on hover and for screen readers (`aria-hidden="false"` — never hide messages from AT).

---

### Thread Reference Glow
When the AI references an earlier message ("as I mentioned above"), that message briefly glows. Draw a connecting line from reference to source.

```tsx
// Glow: bg-primary/10 flashes on then off — duration 1.2s
// Line: SVG absolute positioned, draws from source to reference with pathLength animation
```

Implementation complexity: high. Build last.

---

## Accessibility Rules

All animations in this file must comply with:

1. **`useReducedMotion()`** — check on every animated component. When true:
   - Remove all positional motion (x, y, scale, rotate)
   - Keep opacity transitions (they aid comprehension)
   - Replace loops (breathe, blob, waveform) with static equivalents

2. **Live regions** — the chat message list must have `role="log" aria-live="polite"`. New messages are announced automatically. Never use `aria-live="assertive"` for normal messages — only for errors.

3. **Focus** — after send: keep focus in the input field. After AI response: do not steal focus.

4. **Particle effects** — the thumbs-up burst must be `aria-hidden="true"`. It is purely decorative.

5. **Waveform indicator** — must have `role="status" aria-label="AI is thinking"`.

---

## What Not to Do

| Pattern | Why |
|---------|-----|
| Parallax on the message list | Breaks reading rhythm mid-scroll |
| Auto-scroll during user read | Disorienting — only auto-scroll when user is at the bottom |
| Animate text color while streaming | Epilepsy risk at scale |
| Loop animations on multiple elements simultaneously | Visual noise — one ambient loop max |
| `animate-spin` on the send button | Implies indeterminate loading — use waveform instead |
| Bounce easing on text | Hurts readability |
| Full-page transition between messages | Kills conversational pace |

---

**Version 1.0** | AI Chat specific · Extends motion-guidelines · Uses `motion` (not framer-motion)
