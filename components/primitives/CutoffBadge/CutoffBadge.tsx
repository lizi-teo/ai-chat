import { Clock } from 'lucide-react'
import { cn } from '../../../lib/utils'

export interface CutoffBadgeProps {
  cutoffAt: string
  missed?: boolean
  className?: string
}

function formatTime(isoString: string): string {
  return new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(new Date(isoString))
}

export function CutoffBadge({ cutoffAt, missed = false, className }: CutoffBadgeProps) {
  const timeStr = formatTime(cutoffAt)

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 text-xs leading-none',
        missed ? 'text-muted-foreground line-through' : 'text-warning',
        className
      )}
    >
      <Clock className="size-3 shrink-0" />
      <span>Order by {timeStr}</span>
    </span>
  )
}
