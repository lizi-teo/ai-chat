'use client'

import { createContext, useContext } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { EntityAvatar, type EntityAvatarProps, TimestampLabel } from '@/components/primitives'

type Role = 'user' | 'assistant'

const BubbleContext = createContext<{ role: Role; grouped: boolean; isGenerating: boolean }>({
  role: 'assistant',
  grouped: false,
  isGenerating: false,
})

export interface MessageBubbleProps {
  role: Role
  /** True for consecutive messages from the same sender — hides the avatar */
  grouped?: boolean
  /** True while the AI is actively generating — triggers avatar breathe and stops on first token */
  isGenerating?: boolean
  className?: string
  children?: React.ReactNode
}

interface ContentProps {
  children?: React.ReactNode
  /**
   * AI messages only: pass an array of word tokens to enable word-by-word
   * materialization. Each word fades in with a tiny upward drift as it arrives.
   * When omitted, children renders normally.
   */
  words?: string[]
  className?: string
}

interface TimestampSubProps {
  datetime: string
  className?: string
}

const EASE_OUT = [0, 0, 0.2, 1] as const

// Container drives the stagger; individual words inherit via variants
const wordContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const wordVariants = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0, transition: { duration: 0.18, ease: EASE_OUT } },
}

function Content({ children, words, className }: ContentProps) {
  const { role } = useContext(BubbleContext)
  const shouldReduce = useReducedMotion()
  const isUser = role === 'user'
  const useWordReveal = !isUser && words && words.length > 0

  return (
    <div
      className={cn(
        'max-w-[75%] md:max-w-sm rounded-2xl px-4 py-3 md:px-5 md:py-3.5 text-sm md:text-base leading-relaxed',
        isUser
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted text-foreground shadow-[var(--shadow-bubble)]',
        className
      )}
    >
      {useWordReveal ? (
        shouldReduce ? (
          // Reduced motion: render words instantly, no movement or stagger
          <span>{words!.map((w, i) => <span key={i} className="inline-block mr-[0.25em]">{w}</span>)}</span>
        ) : (
          <motion.span
            variants={wordContainerVariants}
            initial="hidden"
            animate="show"
            className="inline"
          >
            {words!.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                variants={wordVariants}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
        )
      ) : children}
    </div>
  )
}

function Avatar({ size = 'sm', ...props }: EntityAvatarProps) {
  const { role, grouped, isGenerating } = useContext(BubbleContext)
  const shouldReduce = useReducedMotion()

  // User position already signals sender — no avatar needed
  if (role === 'user') return null

  // Grouped: no avatar — col layout needs neither
  if (grouped) return null

  return (
    <motion.div
      animate={
        !shouldReduce && isGenerating
          ? { scale: [1, 1.025, 1] }
          : { scale: 1 }
      }
      transition={{ duration: 2.4, repeat: isGenerating ? Infinity : 0, ease: 'easeInOut' }}
    >
      <EntityAvatar size={size} {...props} />
    </motion.div>
  )
}

function Timestamp({ datetime, className }: TimestampSubProps) {
  return (
    <TimestampLabel
      datetime={datetime}
      className={cn('text-xs mt-0.5 opacity-60', className)}
    />
  )
}

export function MessageBubble({
  role,
  grouped = false,
  isGenerating = false,
  className,
  children,
}: MessageBubbleProps) {
  const shouldReduce = useReducedMotion()
  const isUser = role === 'user'

  return (
    <BubbleContext.Provider value={{ role, grouped, isGenerating }}>
      <motion.div
        initial={
          isUser
            ? { opacity: 0, x: shouldReduce ? 0 : 20, scaleX: shouldReduce ? 1 : 0.96 }
            : { opacity: 0, y: shouldReduce ? 0 : 8, scale: shouldReduce ? 1 : 0.97 }
        }
        animate={
          isUser
            ? { opacity: 1, x: 0, scaleX: 1 }
            : { opacity: 1, y: 0, scale: 1 }
        }
        transition={
          isUser
            ? {
                opacity: { duration: 0.15, ease: EASE_OUT },
                x: { type: 'spring', stiffness: 380, damping: 26 },
                scaleX: { type: 'spring', stiffness: 280, damping: 22 },
              }
            : { duration: 0.2, ease: EASE_OUT }
        }
        className={cn(
          'flex w-full gap-2 md:gap-3',
          isUser ? 'flex-row-reverse items-end' : 'flex-col items-start',
          className
        )}
      >
        {children}
      </motion.div>
    </BubbleContext.Provider>
  )
}

MessageBubble.Content = Content
MessageBubble.Avatar = Avatar
MessageBubble.Timestamp = Timestamp
