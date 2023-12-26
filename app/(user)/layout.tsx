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
  metadataBase:new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title:
  {default: 'Bringer-blog | Powered by Bringer',
  template:"%s-by Bringer-blog"
},
  description: 'Ai photography blog using face recognition to make photo distribution easier reverse face search',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  twitter:{
    card:"summary_large_image"
  },
  verification:
  {
    google:"google-site-verification=xbO83D4f_8OXMLQ1RpQ8YO4JFqr-TfU1gnXkGoFWZnA"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
 {

  return (
    <html lang="en">
      <body className={` ${inter.className} bg-white text-black  h-full selection:bg-gray-50`}>
        <Navbar/>
        <Image className="m-auto object-contain"  src={frame3} alt="cover-image"  />
        <main>{children}</main>
        <Analytics />
        <Footer/>
      </body>
    </html>
  )
}