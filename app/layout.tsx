import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond, Noto_Serif_Kannada } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const notoSerifKannada = Noto_Serif_Kannada({ 
  subsets: ["kannada"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif-kannada',
})

export const metadata: Metadata = {
  title: 'ಚಿತ್ರೂಣ.in | Chitroona - Photography, Events & Design',
  description: 'Premium Kannada creative studio offering Event Management, Photography, and Poster Design services. We capture moments and create memories.',
  keywords: ['photography', 'event management', 'poster design', 'Kannada', 'Karnataka', 'wedding photography', 'graphic design'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${notoSerifKannada.variable} bg-[#0f0c09]`}>
      <body suppressHydrationWarning={true} className="font-sans antialiased bg-[#0f0c09] text-[#f5f0e8]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
