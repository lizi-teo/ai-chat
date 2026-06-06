'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '../../ui/button'
import { cn } from '../../../lib/utils'

export interface QuickRepliesProps {
  options: string[]
  onSelect: (option: string) => void
  className?: string
}

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: [0, 0, 0.2, 1] } },
}

const itemVariantsReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } },
}

export function QuickReplies({ options, onSelect, className }: QuickRepliesProps) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={cn(
        'flex gap-2 overflow-x-auto pb-1 scrollbar-none',
        className
      )}
      role="group"
      aria-label="Quick reply options"
    >
      {options.map((option) => (
        <motion.div
          key={option}
          variants={shouldReduce ? itemVariantsReduced : itemVariants}
          className="shrink-0"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={() => onSelect(option)}
            className="rounded-full whitespace-nowrap"
          >
            {option}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
}
