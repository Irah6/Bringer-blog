import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
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
      <meta name="google-site-verification" content="xbO83D4f_8OXMLQ1RpQ8YO4JFqr-TfU1gnXkGoFWZnA" />
      <body className={` ${inter.className} bg-white text-black  h-full selection:bg-gray-50`}>
        <Navbar/>
        <Image className="m-auto object-contain" loading="lazy" src={frame3} alt="cover-image"  />
        <main>{children}</main>
        <Analytics />
        <Footer/>
      </body>
    </html>
  )
}