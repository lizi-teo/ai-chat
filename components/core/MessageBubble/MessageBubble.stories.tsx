'use client'

import { useState, useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MessageBubble } from './MessageBubble'

const meta = {
  title: 'Components/MessageBubble',
  component: MessageBubble,
  tags: ['autodocs'],
  args: { role: 'assistant' },
} satisfies Meta<typeof MessageBubble>

export default meta
type Story = StoryObj<typeof meta>

export const AssistantMessage: Story = {
  name: 'Assistant message',
  args: { role: 'assistant' },
  render: (args) => (
    <MessageBubble {...args}>
      <MessageBubble.Avatar fallback="AI" />
      <div className="flex flex-col gap-1">
        <MessageBubble.Content>
          I found 3 direct flights to Tokyo departing next Tuesday. Would you like to see the options?
        </MessageBubble.Content>
        <MessageBubble.Timestamp datetime={new Date(Date.now() - 60000).toISOString()} />
      </div>
    </MessageBubble>
  ),
}

const DEMO_SENTENCE =
  'I found 3 direct flights to Tokyo departing next Tuesday. Would you like to see the options?'
const DEMO_WORDS = DEMO_SENTENCE.split(' ')

export const AssistantWordReveal: Story = {
  name: 'Assistant — word-by-word (all at once, staggered)',
  args: { role: 'assistant' },
  render: (args) => (
    <MessageBubble {...args}>
      <MessageBubble.Avatar fallback="AI" />
      <div className="flex flex-col gap-1">
        <MessageBubble.Content words={DEMO_WORDS} />
        <MessageBubble.Timestamp datetime={new Date(Date.now() - 60000).toISOString()} />
      </div>
    </MessageBubble>
  ),
}

export const AssistantStreaming: Story = {
  name: 'Assistant — streaming simulation',
  render: () => {
    const [words, setWords] = useState<string[]>([])
    const [running, setRunning] = useState(false)

    useEffect(() => {
      if (!running) return
      if (words.length >= DEMO_WORDS.length) { setRunning(false); return }

      const id = setTimeout(() => {
        setWords((prev) => [...prev, DEMO_WORDS[prev.length]])
      }, 80)

      return () => clearTimeout(id)
    }, [running, words.length])

    function restart() {
      setWords([])
      setRunning(true)
    }

    return (
      <div className="flex flex-col gap-4">
        <MessageBubble role="assistant">
          <MessageBubble.Avatar fallback="AI" />
          <div className="flex flex-col gap-1">
            <MessageBubble.Content words={words.length ? words : undefined}>
              {!words.length && (
                <span className="text-muted-foreground text-sm">Press play to stream…</span>
              )}
            </MessageBubble.Content>
          </div>
        </MessageBubble>
        <Button variant="outline" size="sm" className="self-start" onClick={restart}>
          {running ? 'Streaming…' : 'Play again'}
        </Button>
      </div>
    )
  },
}

export const AssistantGenerating: Story = {
  name: 'Assistant — generating (avatar breathe)',
  args: { role: 'assistant', isGenerating: true },
  render: (args) => (
    <MessageBubble {...args}>
      <MessageBubble.Avatar fallback="AI" />
    </MessageBubble>
  ),
}

export const UserMessage: Story = {
  name: 'User message',
  args: { role: 'user' },
  render: (args) => (
    <MessageBubble {...args}>
      <div className="flex flex-col gap-1 items-end">
        <MessageBubble.Content>Show me flights to Tokyo next Tuesday</MessageBubble.Content>
        <MessageBubble.Timestamp datetime={new Date(Date.now() - 90000).toISOString()} />
      </div>
    </MessageBubble>
  ),
}

export const GroupedAssistantMessages: Story = {
  name: 'Grouped assistant messages',
  render: () => (
    <div className="flex flex-col gap-1.5 p-4 max-w-lg">
      <MessageBubble role="assistant">
        <MessageBubble.Avatar fallback="AI" />
        <div className="flex flex-col gap-1">
          <MessageBubble.Content>
            I found 3 direct flights to Tokyo departing Tuesday, 10 June.
          </MessageBubble.Content>
        </div>
      </MessageBubble>

      <MessageBubble role="assistant" grouped>
        <MessageBubble.Avatar fallback="AI" />
        <div className="flex flex-col gap-1">
          <MessageBubble.Content>
            Economy from $899 with Qantas, Japan Airlines, and ANA.
          </MessageBubble.Content>
        </div>
      </MessageBubble>

      <MessageBubble role="assistant" grouped>
        <MessageBubble.Avatar fallback="AI" />
        <div className="flex flex-col gap-1">
          <MessageBubble.Content>Would you like to filter by airline or price?</MessageBubble.Content>
          <MessageBubble.Timestamp datetime={new Date(Date.now() - 60000).toISOString()} />
        </div>
      </MessageBubble>
    </div>
  ),
}

export const Conversation: Story = {
  name: 'Conversation thread',
  render: () => (
    <AnimatePresence>
      <div className="flex flex-col gap-4 p-4 max-w-lg">
        <MessageBubble role="user">
          <div className="flex flex-col gap-1 items-end">
            <MessageBubble.Content>Show me flights to Tokyo next Tuesday</MessageBubble.Content>
            <MessageBubble.Timestamp datetime={new Date(Date.now() - 180000).toISOString()} />
          </div>
        </MessageBubble>

        <MessageBubble role="assistant">
          <MessageBubble.Avatar fallback="AI" />
          <div className="flex flex-col gap-1">
            <MessageBubble.Content>
              I found 3 direct flights to Tokyo departing Tuesday, 10 June.
            </MessageBubble.Content>
          </div>
        </MessageBubble>

        <MessageBubble role="assistant" grouped>
          <MessageBubble.Avatar fallback="AI" />
          <div className="flex flex-col gap-1">
            <MessageBubble.Content>
              Economy from $899 with Qantas, Japan Airlines, and ANA.
            </MessageBubble.Content>
            <MessageBubble.Timestamp datetime={new Date(Date.now() - 120000).toISOString()} />
          </div>
        </MessageBubble>

        <MessageBubble role="user">
          <div className="flex flex-col gap-1 items-end">
            <MessageBubble.Content>What's the cheapest option?</MessageBubble.Content>
            <MessageBubble.Timestamp datetime={new Date(Date.now() - 60000).toISOString()} />
          </div>
        </MessageBubble>

        <MessageBubble role="assistant">
          <MessageBubble.Avatar fallback="AI" />
          <div className="flex flex-col gap-1">
            <MessageBubble.Content>
              The cheapest is ANA at $899 return. Want me to hold that fare?
            </MessageBubble.Content>
            <MessageBubble.Timestamp datetime={new Date(Date.now() - 10000).toISOString()} />
          </div>
        </MessageBubble>
      </div>
    </AnimatePresence>
  ),
}
