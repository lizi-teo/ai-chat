'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { PaymentLogo } from './PaymentLogo'
import type { PaymentLogoProps } from './PaymentLogo'

// SVG files are NOT bundled — place official brand assets in your app's public directory.
// See components/primitives/payment-logos/README.md for download links.
const BASE = '/payment-logos'

const LOGOS: { slug: string; label: string; category: string }[] = [
  { slug: 'apple-pay',   label: 'Apple Pay',   category: 'wallets' },
  { slug: 'google-pay',  label: 'Google Pay',  category: 'wallets' },
  { slug: 'mastercard',  label: 'Mastercard',  category: 'cards'   },
  { slug: 'paypal',      label: 'PayPal',      category: 'apm'     },
  { slug: 'alipay',      label: 'Alipay',      category: 'apm'     },
]

function LogoGrid({ size }: { size?: PaymentLogoProps['size'] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {LOGOS.map(({ slug, label, category }) => (
        <div
          key={slug}
          className="flex flex-col items-center gap-1.5 rounded-lg border border-border bg-card p-3 md:p-4"
        >
          <PaymentLogo src={`${BASE}/${category}/${slug}.svg`} alt={label} size={size} />
          <span className="text-xs text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
  )
}

const meta = {
  title: 'Primitives/PaymentLogo',
  component: PaymentLogo,
  tags: ['autodocs'],
  args: {
    src: `${BASE}/cards/mastercard.svg`,
    alt: 'Mastercard',
    size: 'md',
  },
} satisfies Meta<typeof PaymentLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex items-center gap-6">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-1.5">
          <div className="flex items-center justify-center rounded-lg border border-border bg-card p-3">
            <PaymentLogo src={`${BASE}/cards/mastercard.svg`} alt="Mastercard" size={size} />
          </div>
          <span className="text-xs text-muted-foreground">{size}</span>
        </div>
      ))}
    </div>
  ),
}

export const AllLogos: Story = {
  name: 'All Logos',
  render: () => <LogoGrid />,
}
