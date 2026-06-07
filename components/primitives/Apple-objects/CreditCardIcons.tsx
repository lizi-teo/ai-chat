'use client'

import { useId } from 'react'

interface Props {
  className?: string
}

const cardPaths = (
  <>
    <path d="M31 16.7676C31.6127 17.3168 32 18.1124 32 19C32 19.8874 31.6124 20.6822 31 21.2314C30.3876 20.6822 30 19.8874 30 19C30 18.1124 30.3873 17.3168 31 16.7676Z" fill="#FF6002" />
    <path d="M29 16C29.7692 16 30.469 16.2916 31 16.7676C30.3873 17.3168 30 18.1124 30 19C30 19.8874 30.3876 20.6822 31 21.2314C30.469 21.7077 29.7695 22 29 22C27.3431 22 26 20.6569 26 19C26 17.3431 27.3431 16 29 16Z" fill="#EB021E" />
    <path d="M33 16C34.6569 16 36 17.3431 36 19C36 20.6569 34.6569 22 33 22C32.2305 22 31.531 21.7077 31 21.2314C31.6124 20.6822 32 19.8874 32 19C32 18.1124 31.6127 17.3168 31 16.7676C31.531 16.2916 32.2308 16 33 16Z" fill="#F79F1E" />
  </>
)

export function CreditCardGold({ className }: Props) {
  const id = useId()
  return (
    <svg width="40" height="25" viewBox="0 0 40 25" fill="none" aria-hidden className={className}>
      <rect width="40" height="25" rx="4" fill={`url(#${id})`} />
      {cardPaths}
      <defs>
        <linearGradient id={id} x1="11" y1="-1.11461e-07" x2="30.5" y2="26.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B07B11" />
          <stop offset="0.342412" stopColor="#CB9B3B" />
          <stop offset="0.913462" stopColor="#C7A976" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function CreditCardSilver({ className }: Props) {
  const id = useId()
  return (
    <svg width="40" height="25" viewBox="0 0 40 25" fill="none" aria-hidden className={className}>
      <rect width="40" height="25" rx="4" fill={`url(#${id})`} />
      {cardPaths}
      <defs>
        <linearGradient id={id} x1="11" y1="-1.11461e-07" x2="30.5" y2="26.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#484D51" />
          <stop offset="0.342412" stopColor="#60686E" />
          <stop offset="0.913462" stopColor="#C1C6CA" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function CreditCardBronze({ className }: Props) {
  const id = useId()
  return (
    <svg width="40" height="25" viewBox="0 0 40 25" fill="none" aria-hidden className={className}>
      <rect width="40" height="25" rx="4" fill={`url(#${id})`} />
      {cardPaths}
      <defs>
        <linearGradient id={id} x1="11" y1="-1.11461e-07" x2="30.5" y2="26.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#953D20" />
          <stop offset="0.342412" stopColor="#A75834" />
          <stop offset="0.913462" stopColor="#C78D76" />
        </linearGradient>
      </defs>
    </svg>
  )
}
