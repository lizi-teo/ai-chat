import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import {
  StatusBadge,
  PriceDisplay,
  EntityAvatar,
  TimestampLabel,
  Tag,
  ProgressStep,
} from '@/components/primitives'

const ago = (ms: number) => new Date(Date.now() - ms).toISOString()

export function App() {
  const [tags, setTags] = useState(['Economy', 'Direct', 'Morning'])

  return (
    <div className="min-h-screen bg-background p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          ai-chat-ui · primitives
        </h1>

        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-semibold text-foreground">StatusBadge</h2>
          <div className="flex flex-wrap gap-2">
            <StatusBadge label="Default" variant="default" />
            <StatusBadge label="Confirmed" variant="success" />
            <StatusBadge label="2 seats left" variant="warning" />
            <StatusBadge label="Sold out" variant="error" />
            <StatusBadge label="New" variant="info" />
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-semibold text-foreground">PriceDisplay</h2>
          <div className="flex flex-wrap items-baseline gap-6">
            <PriceDisplay amount={299} currency="AUD" />
            <PriceDisplay amount={199} currency="AUD" strikethrough={299} />
            <PriceDisplay amount={89.5} currency="GBP" strikethrough={120} />
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-semibold text-foreground">EntityAvatar</h2>
          <div className="flex items-center gap-4">
            <EntityAvatar fallback="Qantas Airways" size="sm" />
            <EntityAvatar fallback="Qantas Airways" size="md" />
            <EntityAvatar fallback="Qantas Airways" size="lg" />
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-semibold text-foreground">TimestampLabel</h2>
          <div className="flex flex-wrap gap-6">
            <TimestampLabel datetime={ago(20_000)} />
            <TimestampLabel datetime={ago(8 * 60_000)} />
            <TimestampLabel datetime={ago(3 * 3_600_000)} />
            <TimestampLabel datetime={ago(4 * 86_400_000)} />
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-semibold text-foreground">Tag</h2>
          <AnimatePresence mode="popLayout">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag
                  key={tag}
                  label={tag}
                  onRemove={() => setTags((prev) => prev.filter((t) => t !== tag))}
                />
              ))}
            </div>
          </AnimatePresence>
          {tags.length === 0 && (
            <button
              className="text-xs md:text-sm text-muted-foreground underline"
              onClick={() => setTags(['Economy', 'Direct', 'Morning'])}
            >
              Reset
            </button>
          )}
        </section>

        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-semibold text-foreground">ProgressStep</h2>
          <div className="flex items-start gap-8">
            <ProgressStep status="complete" label="Search" />
            <ProgressStep status="active" label="Book" />
            <ProgressStep status="pending" label="Confirm" />
          </div>
        </section>
      </div>
    </div>
  )
}
