import { cn } from '@/lib/utils'
import type { Industry } from '@/app/_data/component-catalog'

const styles: Record<Industry, string> = {
  travel:    'bg-[var(--industry-travel-bg)] text-[var(--industry-travel)] border-[var(--industry-travel-border)]',
  banking:   'bg-[var(--industry-banking-bg)] text-[var(--industry-banking)] border-[var(--industry-banking-border)]',
  merchants: 'bg-[var(--industry-merchants-bg)] text-[var(--industry-merchants)] border-[var(--industry-merchants-border)]',
  insurance: 'bg-[var(--industry-insurance-bg)] text-[var(--industry-insurance)] border-[var(--industry-insurance-border)]',
}

const labels: Record<Industry, string> = {
  travel: 'Travel',
  banking: 'Banking',
  merchants: 'Merchants',
  insurance: 'Insurance',
}

export function IndustryBadge({ industry, className }: { industry: Industry; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium',
        styles[industry],
        className,
      )}
    >
      {labels[industry]}
    </span>
  )
}
