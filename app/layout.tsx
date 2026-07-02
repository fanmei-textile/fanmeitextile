import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fanmei Textile | PVC Synthetic Leather Manufacturer',
  description: 'Haining Fanmei Textile Technology Co., Ltd. manufactures PVC sofa leather, upholstery leather, cat scratch leather, eco leather and vintage leather for furniture, hotels and interior decoration.',
  keywords: ['PVC synthetic leather', 'PVC sofa leather', 'upholstery leather manufacturer', 'cat scratch leather', 'eco leather', 'Haining Fanmei Textile'],
  openGraph: {
    title: 'Fanmei Textile | PVC Synthetic Leather Manufacturer',
    description: 'Factory direct PVC leather solutions for sofas, furniture, hotels, office chairs and decoration.',
    url: 'https://fanmeitextile.com',
    siteName: 'Fanmei Textile',
    locale: 'en_US',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
