import type { Metadata, Viewport } from 'next'
import { Orbitron, Rajdhani } from 'next/font/google'
import { CookieBanner } from '@/components/cookie-banner'

import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BLACKSTAR | Flight Simulations',
  description: 'The future of flight simulation. Immersive, precision-engineered cockpit experiences.',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
