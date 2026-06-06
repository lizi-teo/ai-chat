'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../../lib/utils'

export interface WaveformIndicatorProps {
  barCount?: number
  className?: string
}

export function WaveformIndicator({ barCount = 5, className }: WaveformIndicatorProps) {
  const shouldReduce = useReducedMotion()

  return (
    <div
      role="status"
      aria-label="AI is thinking"
      className={cn('inline-flex items-end gap-0.5 md:gap-1', className)}
    >
      {Array.from({ length: barCount }).map((_, i) => (
        <motion.span
          key={i}
          className="block w-0.5 md:w-1 h-4 md:h-5 rounded-full bg-muted-foreground origin-bottom"
          animate={
            shouldReduce
              ? { scaleY: 0.6 }
              : { scaleY: [0.3, 1, 0.3] }
          }
          transition={
            shouldReduce
              ? {}
              : {
                  duration: 1.0,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: (i / barCount) * 0.5,
                }
          }
        />
      ))}
    </div>
  )
}
