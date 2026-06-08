import { Home, Car } from 'lucide-react'
import { cn } from '../../../lib/utils'

export type DeliveryMethodType = 'home-delivery' | 'click-collect'

export interface DeliveryMethodIconProps {
  type: DeliveryMethodType
  size?: number
  className?: string
}

export function DeliveryMethodIcon({ type, size = 24, className }: DeliveryMethodIconProps) {
  const Icon = type === 'home-delivery' ? Home : Car
  return <Icon size={size} className={cn('shrink-0', className)} />
}
