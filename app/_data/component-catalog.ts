export type Industry = 'travel' | 'banking' | 'merchants' | 'insurance'
export type Tier = 'primitive' | 'core' | 'layout'

export interface ComponentData {
  name: string
  tier: Tier
  description: string
  industries: Industry[]
}

export const ALL_INDUSTRIES: Industry[] = ['travel', 'banking', 'merchants', 'insurance']

export const components: ComponentData[] = [
  // ── Primitives ────────────────────────────────────────────────────────────
  {
    name: 'StatusBadge',
    tier: 'primitive',
    description: 'Semantic pill badge — pending, confirmed, cancelled, and more',
    industries: ALL_INDUSTRIES,
  },
  {
    name: 'PriceDisplay',
    tier: 'primitive',
    description: 'Currency with optional strikethrough original price',
    industries: ['travel', 'merchants', 'insurance'],
  },
  {
    name: 'EntityAvatar',
    tier: 'primitive',
    description: 'Airline, bank, or merchant logo with initial fallback',
    industries: ALL_INDUSTRIES,
  },
  {
    name: 'TimestampLabel',
    tier: 'primitive',
    description: 'Relative timestamp with optional absolute tooltip',
    industries: ALL_INDUSTRIES,
  },
  {
    name: 'Tag',
    tier: 'primitive',
    description: 'Compact category or filter label chip',
    industries: ALL_INDUSTRIES,
  },
  {
    name: 'ProgressStep',
    tier: 'primitive',
    description: 'Horizontal step indicator for multi-stage flows',
    industries: ALL_INDUSTRIES,
  },
  {
    name: 'AddressTile',
    tier: 'primitive',
    description: 'Origin and destination address pair',
    industries: ['travel', 'merchants'],
  },
  {
    name: 'BankLogo',
    tier: 'primitive',
    description: 'Financial institution mark at standard sizes',
    industries: ['banking'],
  },
  {
    name: 'BiometricIndicator',
    tier: 'primitive',
    description: 'Face ID or Touch ID authentication state indicator',
    industries: ['banking'],
  },
  {
    name: 'MorphingBlob',
    tier: 'primitive',
    description: 'Organic animated shape for ambient backgrounds',
    industries: ALL_INDUSTRIES,
  },
  {
    name: 'PaymentMethodTile',
    tier: 'primitive',
    description: 'Card or wallet with masked number and network logo',
    industries: ['banking', 'merchants'],
  },
  {
    name: 'QuantityStepper',
    tier: 'primitive',
    description: 'Increment/decrement control for item quantities',
    industries: ['merchants'],
  },
  {
    name: 'SkeletonBlock',
    tier: 'primitive',
    description: 'Shimmer placeholder while content loads',
    industries: ALL_INDUSTRIES,
  },
  {
    name: 'WaveformIndicator',
    tier: 'primitive',
    description: 'Animated waveform for voice or audio states',
    industries: ALL_INDUSTRIES,
  },
  {
    name: 'ApplePayButton',
    tier: 'primitive',
    description: "Apple Pay call-to-action at Apple's specified dimensions",
    industries: ['banking', 'merchants'],
  },

  // ── Core ──────────────────────────────────────────────────────────────────
  {
    name: 'MessageBubble',
    tier: 'core',
    description: 'Chat message with avatar, timestamp, and read state',
    industries: ALL_INDUSTRIES,
  },
  {
    name: 'TypingIndicator',
    tier: 'core',
    description: 'Animated three-dot typing state',
    industries: ALL_INDUSTRIES,
  },
  {
    name: 'ChatInput',
    tier: 'core',
    description: 'Multiline composer with attachment and send',
    industries: ALL_INDUSTRIES,
  },
  {
    name: 'QuickReplies',
    tier: 'core',
    description: 'Horizontally scrollable suggested reply chips',
    industries: ALL_INDUSTRIES,
  },
  {
    name: 'MediaCard',
    tier: 'core',
    description: 'Rich card with image, price, and primary action',
    industries: ['travel', 'merchants'],
  },
  {
    name: 'DetailList',
    tier: 'core',
    description: 'Structured key–value information rows',
    industries: ['travel', 'banking', 'insurance'],
  },
  {
    name: 'ActionStrip',
    tier: 'core',
    description: 'Row of contextual action buttons',
    industries: ALL_INDUSTRIES,
  },
  {
    name: 'SummaryPanel',
    tier: 'core',
    description: 'Collapsible total with line items and fees',
    industries: ['banking', 'merchants', 'insurance'],
  },
  {
    name: 'SelectionGroup',
    tier: 'core',
    description: 'Single or multi-select option tiles',
    industries: ['travel', 'insurance', 'merchants'],
  },
  {
    name: 'CartItem',
    tier: 'core',
    description: 'Product row with quantity controls and price',
    industries: ['merchants'],
  },
  {
    name: 'CartSummary',
    tier: 'core',
    description: 'Cart total with subtotal, delivery, and checkout CTA',
    industries: ['merchants'],
  },
  {
    name: 'AuthPrompt',
    tier: 'core',
    description: 'Biometric authentication request with context',
    industries: ['banking'],
  },
  {
    name: 'AuthStatus',
    tier: 'core',
    description: 'Real-time Face ID or Touch ID result feedback',
    industries: ['banking'],
  },
  {
    name: 'CardStack',
    tier: 'core',
    description: 'Fanned display of multiple payment cards',
    industries: ['banking', 'merchants'],
  },
  {
    name: 'CardStrip',
    tier: 'core',
    description: 'Horizontally scrollable card selector',
    industries: ['merchants'],
  },
  {
    name: 'ComparisonCard',
    tier: 'core',
    description: 'Two-column option comparison with highlights',
    industries: ['travel', 'insurance'],
  },
  {
    name: 'OrderReview',
    tier: 'core',
    description: 'Pre-confirmation order summary',
    industries: ['merchants'],
  },
  {
    name: 'ApplePaySheet',
    tier: 'core',
    description: 'Native-style Apple Pay amount and merchant sheet',
    industries: ['banking', 'merchants'],
  },
  {
    name: 'PaymentConfirmSheet',
    tier: 'core',
    description: 'Fee breakdown confirmation before payment',
    industries: ['banking', 'merchants'],
  },
  {
    name: 'PaymentSuccess',
    tier: 'core',
    description: 'Animated payment success state',
    industries: ['banking', 'merchants'],
  },
  {
    name: 'ChipToCard',
    tier: 'core',
    description: 'Tap-to-pay contactless initiation animation',
    industries: ['banking'],
  },
  {
    name: 'DoubleClickToPay',
    tier: 'core',
    description: 'Double-click gesture confirmation for payments',
    industries: ['banking', 'merchants'],
  },

  // ── Layouts ───────────────────────────────────────────────────────────────
  {
    name: 'ChatWidget',
    tier: 'layout',
    description: 'Full conversational UI — message list, input, and header',
    industries: ALL_INDUSTRIES,
  },
  {
    name: 'ModalSheet',
    tier: 'layout',
    description: 'Bottom sheet or centered dialog container',
    industries: ALL_INDUSTRIES,
  },
]

export const TIER_LABELS: Record<Tier, string> = {
  primitive: 'Primitive',
  core: 'Component',
  layout: 'Layout',
}

export const INDUSTRY_LABELS: Record<Industry, string> = {
  travel: 'Travel',
  banking: 'Banking',
  merchants: 'Merchants',
  insurance: 'Insurance',
}
