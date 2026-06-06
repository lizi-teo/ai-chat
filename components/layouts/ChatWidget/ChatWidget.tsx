'use client'

import { useRef, useEffect } from 'react'
import { cn } from '../../../lib/utils'
import { MessageBubble } from '../../core/MessageBubble/MessageBubble'
import { ChatInput } from '../../core/ChatInput/ChatInput'
import { QuickReplies } from '../../core/QuickReplies/QuickReplies'
import { MediaCard } from '../../core/MediaCard/MediaCard'
import { ActionStrip } from '../../core/ActionStrip/ActionStrip'
import { EntityAvatar } from '../../primitives/EntityAvatar/EntityAvatar'
import { StatusBadge } from '../../primitives/StatusBadge/StatusBadge'
import { PriceDisplay } from '../../primitives/PriceDisplay/PriceDisplay'
import { type MockData, type MockProduct, type MockMessage, VERTICAL_MOCK } from './mockData'

export type { MockData, MockProduct, MockMessage }

export interface ChatWidgetProps {
  vertical?: 'grocery' | 'pharmacy'
  mockData?: MockData
  onAddToCart?: (product: MockProduct) => void
  onSuggestSubstitution?: (product: MockProduct) => void
  onEscalateToHuman?: (context: { messages: MockMessage[] }) => void
  className?: string
}

export function ChatWidget({
  vertical = 'grocery',
  mockData,
  onAddToCart,
  onSuggestSubstitution,
  onEscalateToHuman,
  className,
}: ChatWidgetProps) {
  const data = mockData ?? VERTICAL_MOCK[vertical]
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'instant' })
  }, [])

  return (
    <div className={cn('flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-card)]', className)}>
      <div className="flex items-center gap-3 px-4 md:px-5 py-3 md:py-4 border-b border-border bg-card shrink-0">
        <EntityAvatar fallback={data.botName ?? 'Assistant'} src={data.avatar} size="sm" />
        <span className="text-sm md:text-base font-medium text-foreground">
          {data.botName ?? 'Assistant'}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto min-h-0 px-4 md:px-5 py-4 md:py-5 flex flex-col gap-3 md:gap-4">
        {data.messages.map((msg, i) => (
          <div key={i} className="flex flex-col gap-2">
            <MessageBubble role={msg.role === 'bot' ? 'assistant' : 'user'}>
              {msg.text && <MessageBubble.Content>{msg.text}</MessageBubble.Content>}
            </MessageBubble>

            {msg.products && (
              <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-none">
                {msg.products.map((product, pi) => (
                  <div key={pi} className="w-52 md:w-60 shrink-0">
                    <MediaCard>
                      {product.image && (
                        <MediaCard.Media src={product.image} alt={product.name} />
                      )}
                      <MediaCard.Body>
                        <div className="flex items-start justify-between gap-2">
                          <MediaCard.Title>{product.name}</MediaCard.Title>
                          {product.badge && (
                            <MediaCard.Badge>
                              <StatusBadge label={product.badge} variant={product.badgeVariant ?? 'default'} />
                            </MediaCard.Badge>
                          )}
                        </div>
                        {product.subtitle && (
                          <MediaCard.Subtitle>{product.subtitle}</MediaCard.Subtitle>
                        )}
                        <MediaCard.Meta>
                          <PriceDisplay amount={product.price} currency="AUD" />
                        </MediaCard.Meta>
                      </MediaCard.Body>
                      {(product.primaryAction || product.secondaryAction) && (
                        <ActionStrip>
                          {product.primaryAction && (
                            <ActionStrip.Primary onClick={() => onAddToCart?.(product)}>
                              {product.primaryAction}
                            </ActionStrip.Primary>
                          )}
                          {product.secondaryAction && (
                            <ActionStrip.Secondary onClick={() => onSuggestSubstitution?.(product)}>
                              {product.secondaryAction}
                            </ActionStrip.Secondary>
                          )}
                        </ActionStrip>
                      )}
                    </MediaCard>
                  </div>
                ))}
              </div>
            )}

            {msg.quickReplies && msg.role === 'bot' && (
              <div>
                <QuickReplies
                  options={msg.quickReplies}
                  onSelect={(option) => {
                    if (/pharmacist/i.test(option)) {
                      onEscalateToHuman?.({ messages: data.messages })
                    }
                  }}
                />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-border px-4 md:px-5 py-3 md:py-4 shrink-0">
        <ChatInput onSend={() => {}}>
          <ChatInput.Field />
          <ChatInput.Send />
        </ChatInput>
      </div>
    </div>
  )
}
