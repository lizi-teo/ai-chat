'use client'

import { X } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '../../ui/button'
import { cn } from '../../../lib/utils'

export interface TagProps {
  label: string
  onRemove?: () => void
  className?: string
}

export function Tag({ label, onRemove, className }: TagProps) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.span
      layout
      initial={{ opacity: 0, y: shouldReduce ? 0 : 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: shouldReduce ? 0 : 4 }}
      transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
      className={cn(
        'inline-flex items-center gap-1 rounded-full bg-secondary text-secondary-foreground px-2.5 py-0.5 text-xs md:text-sm',
        className
      )}
    >
      {label}
      {onRemove && (
        <Button
          variant="ghost"
          size="icon-xs"
          aria-label={`Remove ${label}`}
          onClick={onRemove}
          className="size-3.5 md:size-3 rounded-full p-0"
        >
          <X className="size-2.5" />
        </Button>
      )}
    </motion.span>
  )
}
