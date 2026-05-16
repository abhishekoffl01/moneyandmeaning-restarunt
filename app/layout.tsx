import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Money & Meaning | Authentic Karnataka Non-Veg Restaurant, Bengaluru',
  description: 'Premium Karnataka-style non-veg restaurant serving authentic coastal Karnataka, Malnad & traditional South Indian cuisine. Book a table today.',
  keywords: 'Karnataka restaurant, non-veg Bengaluru, Donne Biryani, Kundapura chicken, authentic South Indian food',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
