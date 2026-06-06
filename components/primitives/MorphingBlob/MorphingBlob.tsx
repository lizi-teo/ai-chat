'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface MorphingBlobProps {
  size?: 'sm' | 'md'
  className?: string
}

const sizeClasses: Record<NonNullable<MorphingBlobProps['size']>, string> = {
  sm: 'size-8',
  md: 'size-12',
}

// Keyframe border-radius values that trace a smooth organic loop
const BLOB_RADII = [
  '60% 40% 55% 45% / 45% 55% 45% 55%',
  '40% 60% 45% 55% / 55% 45% 55% 45%',
  '55% 45% 65% 35% / 40% 60% 50% 50%',
  '45% 55% 40% 60% / 50% 50% 60% 40%',
  '60% 40% 55% 45% / 45% 55% 45% 55%',
]

export function MorphingBlob({ size = 'md', className }: MorphingBlobProps) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className={cn('bg-muted-foreground/20', sizeClasses[size], className)}
      animate={{ borderRadius: shouldReduce ? '50%' : BLOB_RADII }}
      transition={
        shouldReduce
          ? {}
          : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
      }
    />
  )
}
