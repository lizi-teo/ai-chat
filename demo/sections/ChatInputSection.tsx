import { useState } from 'react'
import { MessageBubble } from '@/components/core/MessageBubble/MessageBubble'
import { ChatInput } from '@/components/core/ChatInput/ChatInput'
import { QuickReplies } from '@/components/core/QuickReplies/QuickReplies'

const QUICK_REPLY_OPTIONS = ['Book flight', 'Change date', 'Cancel booking', 'Add baggage']

export function ChatInputSection() {
  const [messages, setMessages] = useState<string[]>([])
  const [lastQuickReply, setLastQuickReply] = useState<string | null>(null)

  return (
    <section className="space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold text-foreground">Chat Input</h2>

      <div className="flex flex-col gap-4 max-w-lg">
        <div className="flex flex-col gap-3 min-h-20">
          {messages.length === 0 ? (
            <p className="text-sm text-muted-foreground">Send a message below…</p>
          ) : (
            messages.map((m, i) => (
              <MessageBubble key={i} role="user">
                <div className="flex flex-col items-end">
                  <MessageBubble.Content>{m}</MessageBubble.Content>
                </div>
              </MessageBubble>
            ))
          )}
        </div>

        <QuickReplies
          options={QUICK_REPLY_OPTIONS}
          onSelect={setLastQuickReply}
        />
        {lastQuickReply && (
          <p className="text-xs text-muted-foreground">
            Quick reply: <strong className="text-foreground">{lastQuickReply}</strong>
          </p>
        )}

        <ChatInput onSend={(v) => setMessages((prev) => [...prev, v])}>
          <ChatInput.Field placeholder="Type a message…" />
          <ChatInput.Send />
        </ChatInput>
      </div>
    </section>
  )
}
