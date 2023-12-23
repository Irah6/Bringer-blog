import type { Metadata } from 'next'
import { useRouter } from 'next/router';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
})
 {

  return (
    <html lang="en">
      <head><link rel="shortcut icon" href="/bringer.svg"  /></head>
      <body className={` ${inter.className} bg-white text-black  h-full selection:bg-gray-50`}>
        <Navbar/>
        <img className="m-auto" src="./frame_3.png" alt="cover-image" />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}