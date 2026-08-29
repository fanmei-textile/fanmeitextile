import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { site, whatsappUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'PVC Leather Thickness Guide for Sofa Upholstery',
  description: 'Compare practical PVC leather thickness ranges for sofa and furniture upholstery, then confirm weight, backing and construction with a factory sample.',
  alternates: { canonical: '/guides/pvc-leather-thickness-guide' },
}

const ranges = [
  ['0.6 mm', 'A lighter, economical direction for suitable furniture and upholstery applications. Known reference: approximately 250–260 gsm.'],
  ['0.9–1.0 mm', 'A commonly discussed range for sofa and general furniture upholstery. Known 0.9 mm reference: approximately 340 gsm ±5%.'],
  ['1.4–1.5 mm', 'A thicker direction considered when the finished application requires more material body. Exact weight and construction must be confirmed.'],
  ['1.8–2.0 mm', 'A heavy or custom development range. Suitability depends on the application, backing, hand feel and processing method.'],
]

export default function ThicknessGuidePage() {
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, { '@type': 'ListItem', position: 2, name: 'Products', item: `${site.url}/products` }, { '@type': 'ListItem', position: 3, name: 'PVC Leather Thickness Guide', item: `${site.url}/guides/pvc-leather-thickness-guide` }] }
  const message = 'Hello Fanmei Textile, I need help selecting PVC leather thickness for sofa or furniture upholstery. Please recommend a suitable construction.'
  return <main id="main-content">
    <section className="contact-hero"><div className="container"><p className="eyebrow light">Buyer specification guide</p><h1>PVC Leather Thickness Guide for Sofa Upholstery</h1><p>Thickness is only one part of a PVC upholstery construction. Confirm it together with weight, backing, surface, hand feel and the furniture production process.</p><div className="hero-actions"><Link className="button button-gold" href="/products/pvc-sofa-leather">View PVC Sofa Leather</Link><a className="button button-ghost" href={whatsappUrl(message)} target="_blank" rel="noreferrer">Ask on WhatsApp</a></div></div></section>
    <div className="container"><Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Thickness Guide' }]} /></div>
    <section className="section container"><div className="section-heading split-heading"><div><p className="eyebrow">Thickness selection</p><h2>Use ranges as a starting point</h2></div><p>These ranges help buyers structure a discussion. Final suitability is confirmed through the target application and physical sample.</p></div><div className="simple-card-grid two">{ranges.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="section section-tint"><div className="container detail-grid"><article><p className="eyebrow">Confirm together</p><h2>Do not specify thickness alone</h2><ul className="check-list dark-checks"><li>Finished sofa, chair or furniture application</li><li>Knitted, woven or non-woven backing</li><li>Target gsm where available</li><li>Surface grain, hand feel and color</li><li>Cutting, sewing, wrapping or gluing process</li></ul></article><article><p className="eyebrow">Commercial reference</p><h2>Factory supply information</h2><dl className="detail-list"><div><dt>Width</dt><dd>140–142 cm</dd></div><div><dt>Thickness</dt><dd>0.6–2.0 mm</dd></div><div><dt>MOQ</dt><dd>Usually 800–1,000 meters per color, depending on specification</dd></div><div><dt>FCL lead</dt><dd>Approx. 7–10 days after confirmation</dd></div><div><dt>Trade term</dt><dd>FOB</dd></div></dl></article></div></section>
    <section className="section container"><div className="section-heading centered"><p className="eyebrow">Next step</p><h2>Compare the target construction with a sample</h2><p>Photos can support an initial review, while a physical sample gives the factory a better basis for evaluating thickness, weight, backing and surface.</p></div><div className="section-cta"><Link className="button button-dark" href="/sample-based-customization">Send Your Sample</Link></div></section>
    <section className="quote-band"><div className="container quote-band-inner"><div><p className="eyebrow light">Need a specification recommendation?</p><h2>Share the application and expected order volume</h2></div><div className="quote-band-actions"><Link className="button button-gold" href="/rfq">Get Factory FOB Quote</Link><Link className="button button-ghost" href="/products">Compare Products</Link></div></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
  </main>
}
