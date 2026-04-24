import type { Metadata } from 'next'
import { Cormorant_Garamond, Homemade_Apple, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const homemadeApple = Homemade_Apple({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-homemade-apple',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Amélie Romano',
  description: 'AI builder, researcher, maker. Based in London.',
  openGraph: {
    title: 'Amélie Romano',
    description: 'AI builder, researcher, maker. Based in London.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${homemadeApple.variable} ${jost.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
