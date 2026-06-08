'use client'

import { cn } from '../../../lib/utils'
import { OrderStatusCard } from '../../core/OrderStatusCard/OrderStatusCard'
import type { OrderStatusStep } from '../../core/OrderStatusCard/OrderStatusCard'

// ── Sub-component interfaces ──────────────────────────────────────────────────

interface MapSlotProps {
  children?: React.ReactNode
  className?: string
}

interface StepsSlotProps {
  orderId: string
  steps: OrderStatusStep[]
  eta?: string
  className?: string
}

// ── Sub-components ────────────────────────────────────────────────────────────

function MapSlot({ children, className }: MapSlotProps) {
  return (
    <div
      className={cn(
        'h-40 md:h-56 w-full overflow-hidden rounded-t-xl',
        className
      )}
    >
      {children ?? (
        <div className="h-full w-full bg-muted flex items-center justify-center">
          <span className="text-xs md:text-sm text-muted-foreground select-none">
            Map unavailable
          </span>
        </div>
      )}
    </div>
  )
}

function StepsSlot({ orderId, steps, eta, className }: StepsSlotProps) {
  return (
    <OrderStatusCard
      orderId={orderId}
      steps={steps}
      eta={eta}
      className={cn('rounded-t-none border-t-0', className)}
    />
  )
}

// ── Main component ─────────────────────────────────────────────────────────────

export interface DeliveryTrackerProps {
  orderId: string
  steps: OrderStatusStep[]
  eta?: string
  mapSlot?: React.ReactNode
  className?: string
}

export function DeliveryTracker({
  orderId,
  steps,
  eta,
  mapSlot,
  className,
}: DeliveryTrackerProps) {
  return (
    <div
      className={cn(
        'border border-border rounded-xl shadow-[var(--shadow-card)] overflow-hidden',
        className
      )}
    >
      <DeliveryTracker.Map>{mapSlot}</DeliveryTracker.Map>
      <DeliveryTracker.Steps orderId={orderId} steps={steps} eta={eta} />
    </div>
  )
}

DeliveryTracker.Map = MapSlot
DeliveryTracker.Steps = StepsSlot
