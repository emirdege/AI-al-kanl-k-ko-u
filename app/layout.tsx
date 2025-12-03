import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'AI Alışkanlık Koçu',
  description: 'Günlük alışkanlıklarını takip et ve AI destekli geri bildirim al',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="bg-gray-50 min-h-screen">
        <Navigation />
        <main className="container mx-auto px-4 py-8 max-w-2xl">
          {children}
        </main>
      </body>
    </html>
  )
}
