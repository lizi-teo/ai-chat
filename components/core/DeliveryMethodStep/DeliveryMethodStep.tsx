'use client'

import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { Pencil } from 'lucide-react'
import { SelectionGroup } from '../SelectionGroup/SelectionGroup'
import { DeliveryMethodIcon } from '../../primitives/DeliveryMethodIcon/DeliveryMethodIcon'
import { AddressTile } from '../../primitives/AddressTile/AddressTile'
import { Button } from '../../ui/button'
import { cn } from '../../../lib/utils'
import type { AddressTileProps } from '../../primitives/AddressTile/AddressTile'

export type DeliveryMethod = 'home-delivery' | 'click-collect'

export interface DeliveryMethodStepProps {
  value?: DeliveryMethod
  defaultValue?: DeliveryMethod
  homeAddress?: AddressTileProps
  onMethodChange?: (method: DeliveryMethod) => void
  onAddressEdit?: () => void
  className?: string
}

const addressVariants = {
  hidden: { opacity: 0, height: 0, overflow: 'hidden' },
  show: {
    opacity: 1,
    height: 'auto',
    overflow: 'visible',
    transition: { duration: 0.25, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    height: 0,
    overflow: 'hidden',
    transition: { duration: 0.2 },
  },
}

function AddressPreview({
  address,
  onEdit,
}: {
  address: AddressTileProps
  onEdit?: () => void
}) {
  return (
    <motion.div
      variants={addressVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="mt-3 flex items-start justify-between gap-3 rounded-xl border border-border bg-muted/30 px-4 py-3 md:px-5 md:py-4">
        <AddressTile {...address} />
        {onEdit && (
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={onEdit}
            aria-label="Change delivery address"
            className="shrink-0 mt-0.5"
          >
            <Pencil className="size-3.5" />
          </Button>
        )}
      </div>
    </motion.div>
  )
}

export function DeliveryMethodStep({
  value,
  defaultValue,
  homeAddress,
  onMethodChange,
  onAddressEdit,
  className,
}: DeliveryMethodStepProps) {
  const shouldReduce = useReducedMotion()
  const isHomeSelected = (value ?? defaultValue) === 'home-delivery'

  return (
    <div className={cn('space-y-1', className)}>
      <SelectionGroup
        type="radio"
        value={value}
        defaultValue={defaultValue}
        onChange={(v) => onMethodChange?.(v as DeliveryMethod)}
      >
        <SelectionGroup.Option
          value="home-delivery"
          icon={<DeliveryMethodIcon type="home-delivery" size={18} />}
          description="Delivered straight to your door"
        >
          Home delivery
        </SelectionGroup.Option>
        <SelectionGroup.Option
          value="click-collect"
          icon={<DeliveryMethodIcon type="click-collect" size={18} />}
          description="Drive up and we'll load your order into your car"
        >
          Click & Collect — car boot
        </SelectionGroup.Option>
      </SelectionGroup>

      <AnimatePresence initial={false}>
        {isHomeSelected && homeAddress && (
          <AddressPreview
            key="address-preview"
            address={homeAddress}
            onEdit={onAddressEdit}
          />
        )}
        {isHomeSelected && !homeAddress && (
          <motion.div
            key="add-address"
            variants={shouldReduce ? undefined : addressVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="mt-3"
          >
            <Button
              variant="outline"
              onClick={onAddressEdit}
              className="w-full h-12 md:h-10 border-dashed"
            >
              + Add delivery address
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

DeliveryMethodStep.AddressPreview = AddressPreview
