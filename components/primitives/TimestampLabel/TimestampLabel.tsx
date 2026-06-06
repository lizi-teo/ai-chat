'use client'

import { useMemo } from 'react'
import { cn } from '@/lib/utils'

export interface TimestampLabelProps {
  datetime: string
  className?: string
}

function formatRelative(datetime: string): string {
  const date = new Date(datetime)
  const now = Date.now()
  const diffMs = now - date.getTime()
  const diffSec = Math.floor(diffMs / 1000)

  if (diffSec < 60) return 'just now'
  if (diffSec < 3600) {
    const mins = Math.floor(diffSec / 60)
    return `${mins} min ago`
  }
  if (diffSec < 86400) {
    const hrs = Math.floor(diffSec / 3600)
    return `${hrs} hr ago`
  }
  return new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric' }).format(date)
}

export function TimestampLabel({ datetime, className }: TimestampLabelProps) {
  const label = useMemo(() => formatRelative(datetime), [datetime])

  return (
    <time
      dateTime={datetime}
      className={cn('text-muted-foreground text-xs md:text-sm', className)}
    >
      {label}
    </time>
  )
}
