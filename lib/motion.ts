'use client'

import { useReducedMotion } from 'motion/react'

/**
 * Returns motion props that shake the element on error.
 * Reduced-motion fallback: opacity pulse instead of positional shake.
 *
 * Usage:
 *   const shakeProps = useErrorShake(hasError)
 *   <motion.div {...shakeProps}>…</motion.div>
 */
export function useErrorShake(hasError: boolean) {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return {
      animate: hasError ? { opacity: [1, 0.4, 1, 0.4, 1] } : {},
      transition: { duration: 0.5, ease: 'easeInOut' as const },
    }
  }

  return {
    animate: hasError ? { x: [0, -6, 6, -4, 4, 0] } : {},
    transition: { duration: 0.35, ease: 'easeInOut' as const },
  }
}
