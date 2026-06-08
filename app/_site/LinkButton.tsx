'use client'

import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & VariantProps<typeof buttonVariants>

export function LinkButton({ variant, size, className, ...props }: LinkButtonProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

type AnchorButtonProps = ComponentPropsWithoutRef<'a'> & VariantProps<typeof buttonVariants>

export function AnchorButton({ variant, size, className, ...props }: AnchorButtonProps) {
  return (
    <a
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
