import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zach Miller Tech Consulting',
  description: 'Expert technology and digital footprint management services',
  keywords: 'tech consulting, SaaS configuration, cybersecurity, cloud migration',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zachmiller.tech',
    siteName: 'Zach Miller Tech Consulting',
    images: [
      {
        url: 'https://source.unsplash.com/1200x630/?puppy,8',
        width: 1200,
        height: 630,
        alt: 'Cute puppy representing Zach Miller Tech Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zachmillertech',
    creator: '@zachmillertech',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

