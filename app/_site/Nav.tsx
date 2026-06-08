'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { AnchorButton } from './LinkButton'

const NAV_LINKS = [
  { href: '/figma-make', label: 'Figma Make' },
]

const STORYBOOK_URL = 'https://6a251cdcacca87566659252b-mxrwfqmaxy.chromatic.com/'

export function Nav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 md:h-16 max-w-5xl items-center gap-6 px-4 md:px-8">

        <Link href="/" className="shrink-0 text-sm font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity">
          AI Chat UI
        </Link>

        <nav className="flex flex-1 items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-lg px-3 py-1.5 text-sm transition-colors',
                  active
                    ? 'bg-muted text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <AnchorButton href={STORYBOOK_URL} target="_blank" rel="noopener noreferrer" size="sm">
          Storybook ↗
        </AnchorButton>
      </div>
    </header>
  )
}
