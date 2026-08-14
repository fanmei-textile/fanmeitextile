import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { WhatsAppCta } from '@/components/whatsapp-cta'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'PVC Synthetic Leather Manufacturer | Fanmei Textile',
    template: '%s | Fanmei Textile',
  },
  description:
    'Factory-direct PVC synthetic leather for sofas, chairs, hotel furniture and upholstery. Custom thickness, color, texture and backing from Haining, China.',
  keywords: [
    'PVC synthetic leather',
    'PVC leather manufacturer',
    'PVC sofa leather',
    'PVC upholstery leather',
    'furniture leather supplier',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'PVC Synthetic Leather Manufacturer | Fanmei Textile',
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: '/images/pvc-leather-color-rolls-01.webp', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PVC Synthetic Leather Manufacturer | Fanmei Textile',
    description: site.description,
    images: ['/images/pvc-leather-color-rolls-01.webp'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#112b25',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  email: site.email,
  telephone: site.whatsappDisplay,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Haining',
    addressRegion: 'Zhejiang',
    addressCountry: 'CN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: site.whatsappDisplay,
    email: site.email,
    contactType: 'sales',
    availableLanguage: ['English'],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppCta />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  )
}
