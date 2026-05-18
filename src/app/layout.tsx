import type { Metadata } from 'next'
import { Montserrat, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800', '900'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Unifac VZW – Overkoepelende studentenvereniging UAntwerpen Stadscampus',
  description:
    'Unifac VZW is de overkoepelende studentenvereniging aan de Stadscampus van de Universiteit Antwerpen. Ontdek onze activiteiten, clubs en meer.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`h-full ${montserrat.variable} ${dmSans.variable}`}>
      <body className="min-h-full flex flex-col bg-deep text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
