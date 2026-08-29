import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { RfqForm } from '@/components/rfq-form'
import { defaultWhatsAppMessage, site, whatsappUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Our PVC Leather Factory',
  description:
    'Contact Fanmei Textile in Haining, China for PVC sofa leather, upholstery leather samples, specification matching and container order quotations.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="contact-hero">
        <div className="container">
          <p className="eyebrow light">Contact Fanmei Textile</p>
          <h1>Discuss a PVC Leather Requirement</h1>
          <p>For a useful first reply, include your application, target thickness, quantity, color or sample reference and expected order timing.</p>
        </div>
      </section>
      <div className="container"><Breadcrumbs items={[{ label: 'Contact' }]} /></div>

      <section className="section container contact-layout">
        <div className="contact-details">
          <p className="eyebrow">Factory contact</p>
          <h2>Speak with the sales team</h2>
          <p>Use WhatsApp for fast specification discussion or email for documents and longer requirement lists.</p>
          <div className="contact-methods">
            <article><span>Email</span><a href={`mailto:${site.email}`}>{site.email}</a><p>Catalogs, specifications and sample information.</p></article>
            <article><span>WhatsApp</span><a href={whatsappUrl(defaultWhatsAppMessage)} target="_blank" rel="noreferrer">{site.whatsappDisplay}</a><p>Quick product and requirement discussion.</p></article>
            <article><span>Location</span><strong>{site.location}</strong><p>PVC synthetic leather manufacturing and sample matching.</p></article>
          </div>
          <div className="response-note"><strong>Helpful inquiry details</strong><p>Product application · thickness · color/texture · backing · quantity · required performance · timing</p></div>
        </div>
        <RfqForm compact />
      </section>

      <section className="quote-band">
        <div className="container quote-band-inner">
          <div><p className="eyebrow light">Have a reference sample?</p><h2>Tell us what must be matched</h2><p>We can discuss sample delivery details privately by WhatsApp or email.</p></div>
          <div className="quote-band-actions"><Link className="button button-gold" href="/sample-based-customization">Send Your Sample</Link><Link className="button button-ghost" href="/rfq">Get FOB Quote</Link></div>
        </div>
      </section>
    </main>
  )
}
