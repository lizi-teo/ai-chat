import _mastercard from './cards/mastercard.svg'
import _apple_pay from './wallets/apple-pay.svg'
import _google_pay from './wallets/google-pay.svg'
import _paypal from './apm/paypal.svg'
import _alipay from './apm/alipay.svg'

function u(mod: unknown): string {
  if (typeof mod === 'string') return mod
  const m = mod as Record<string, unknown>
  if (typeof m.src === 'string') return m.src
  const d = m.default as Record<string, unknown> | string | undefined
  if (typeof d === 'string') return d
  if (d && typeof (d as Record<string, unknown>).src === 'string') return (d as Record<string, unknown>).src as string
  return ''
}

export const PAYMENT_LOGOS = {
  'cards/mastercard.svg': u(_mastercard),
  'wallets/apple-pay.svg': u(_apple_pay),
  'wallets/google-pay.svg': u(_google_pay),
  'apm/paypal.svg': u(_paypal),
  'apm/alipay.svg': u(_alipay),
} satisfies Record<string, string>
