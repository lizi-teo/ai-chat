'use client'

import { Package } from 'lucide-react'
import { cn } from '../../../lib/utils'
import { Button } from '../../ui/button'

export interface EmptyStateProps {
  icon?: React.ReactNode
  heading: string
  body?: string
  action?: { label: string; onClick: () => void }
  className?: string
}

export function EmptyState({ icon, heading, body, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-3 md:gap-4',
        'px-4 py-8 md:py-12 text-center',
        className
      )}
    >
      <div className="text-muted-foreground/50 [&_svg]:size-10 [&_svg]:md:size-12">
        {icon ?? <Package aria-hidden />}
      </div>
      <div className="flex flex-col gap-1 md:gap-1.5 max-w-xs">
        <p className="text-sm md:text-base font-semibold text-foreground">{heading}</p>
        {body && (
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{body}</p>
        )}
      </div>
      {action && (
        <Button
          variant="outline"
          onClick={action.onClick}
          className="h-9 md:h-10 mt-1"
        >
          {action.label}
        </Button>
      )}
    </div>
  )
}
