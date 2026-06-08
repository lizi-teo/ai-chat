import type { Metadata } from 'next'
import './globals.css'
import './site.css'
import { Nav } from './_site/Nav'
import { Footer } from './_site/Footer'

export const metadata: Metadata = {
  title: {
    default: 'AI Chat UI',
    template: '%s — AI Chat UI',
  },
  description: 'White-label AI chat components for travel, banking, merchants, and insurance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Nav />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
