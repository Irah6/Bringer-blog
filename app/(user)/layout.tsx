import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import frame3 from '../../public/frame_3.png'
import '.././styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bringer-blog',
  description: 'Ai photography',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
 {

  return (
    <html lang="en">
      <head><link rel="shortcut icon" href="/bringer.svg"  /></head>
      <body className={` ${inter.className} bg-white text-black  h-full selection:bg-gray-50`}>
        <Navbar/>
        <Image className="m-auto object-contain" loading="lazy" src={frame3} alt="cover-image"  />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
        <Footer/>
      </body>
    </html>
  )
}