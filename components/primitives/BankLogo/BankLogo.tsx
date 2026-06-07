'use client'

import { cn } from '../../../lib/utils'

export interface BankLogoProps {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: 'size-6 md:size-5',
  md: 'size-9 md:size-8',
  lg: 'size-12 md:size-11',
}

export function BankLogo({ src, alt, size = 'md', className }: BankLogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn('object-contain', sizes[size], className)}
      draggable={false}
    />
  )
}
