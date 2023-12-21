import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bringer-blog',
  description: 'Ai photography',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isStudio = typeof window !== 'undefined' && window.location.pathname.includes('/studio')
  const shouldRenderNavbar = typeof window !== 'undefined' && !isStudio
  return (
    <html lang="en">
      <head><link rel="shortcut icon" href="/bringer.svg"  /></head>
      <body className={` ${inter.className} bg-white text-black  h-full selection:bg-gray-50`}>
        {shouldRenderNavbar ? <Navbar/> : null}
        <main>{children}</main>
      </body>
    </html>
  )
}