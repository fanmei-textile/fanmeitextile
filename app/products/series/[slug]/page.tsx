import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { getRealProductSeries, realProductSeries } from '@/lib/real-series'
import { site, whatsappUrl } from '@/lib/site'

type SeriesPageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() { return realProductSeries.map(({ slug }) => ({ slug })) }

export async function generateMetadata({ params }: SeriesPageProps): Promise<Metadata> {
  const series = getRealProductSeries((await params).slug)
  if (!series) return {}
  return {
    title: `${series.name} Color Card & Specifications`,
    description: `${series.summary} View the real color card, confirmed color references and verified specifications, then request a sample or FOB quote.`,
    alternates: { canonical: `/products/series/${series.slug}` },
    openGraph: { title: `${series.name} | Fanmei Textile`, description: series.summary, images: [{ url: series.image }] },
  }
}

export default async function RealSeriesPage({ params }: SeriesPageProps) {
  const series = getRealProductSeries((await params).slug)
  if (!series) notFound()
  const message = `Hello Fanmei Textile, I am interested in ${series.name}. Please share samples and an FOB quotation for my application.`
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, { '@type': 'ListItem', position: 2, name: 'Products', item: `${site.url}/products` },
    { '@type': 'ListItem', position: 3, name: series.name, item: `${site.url}/products/series/${series.slug}` },
  ] }

  return <main id="main-content">
    <div className="container"><Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: series.name }]} /></div>
    <section className="section product-detail-hero container">
      <div className="product-detail-media real-card-media"><Image src={series.image} alt={series.imageAlt} width={1200} height={1500} priority sizes="(max-width: 900px) 100vw, 52vw" /></div>
      <div className="product-detail-copy"><p className="eyebrow">Real Fanmei product series</p><h1>{series.name}</h1><p className="lead">{series.summary}</p><p>{series.surface}</p>
        <div className="hero-actions dark-actions"><Link className="button button-dark" href={`/rfq?product=${encodeURIComponent(series.name)}`}>Get Factory FOB Quote</Link><a className="button button-outline" href={whatsappUrl(message)} target="_blank" rel="noreferrer">Ask on WhatsApp</a></div>
      </div>
    </section>

    <section className="section section-tint"><div className="container detail-grid">
      <article><p className="eyebrow">Verified product data</p><h2>Specifications confirmed for this series</h2>
        {series.specifications.length ? <dl className="detail-list">{series.specifications.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl> : null}
        {series.variants?.map((variant) => <div className="series-variant" key={variant.name}><h3>{variant.name}</h3><dl className="detail-list">{variant.specifications.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl></div>)}
        {!series.specifications.length && !series.variants?.length ? <div className="response-note"><strong>Custom specification available</strong><p>Contact us for exact thickness / GSM / backing.</p></div> : null}
        {series.specificationNote ? <p className="series-note">{series.specificationNote}</p> : null}
      </article>
      <article><p className="eyebrow">Buyer use</p><h2>Confirm against your application</h2><ul className="check-list dark-checks"><li>Sofa and recliner upholstery</li><li>Chair and furniture upholstery</li><li>Furniture material distribution</li><li>Sample-based specification matching</li></ul><p>Application suitability, optional functions and final construction are confirmed through samples and the buyer’s stated requirement.</p><Link className="text-link" href="/sample-based-customization">See sample-based development <span>→</span></Link></article>
    </div></section>

    {series.colorCodes.length ? <section className="section container"><div className="section-heading centered"><p className="eyebrow">Confirmed references</p><h2>{series.colorCodes.length} color codes shown in the real card</h2><p>Use the series code when requesting a physical swatch. Screen color can differ from the actual material.</p></div><ul className="color-code-grid" aria-label={`${series.name} color references`}>{series.colorCodes.map((code) => <li key={code}>{code}</li>)}</ul></section> : null}

    <section className="quote-band"><div className="container quote-band-inner"><div><p className="eyebrow light">Request this real series</p><h2>Confirm a color, sample and FOB quotation</h2><p>Include the series name, application, color reference, specification and estimated quantity.</p></div><div className="quote-band-actions"><a className="button button-gold" href={whatsappUrl(message)} target="_blank" rel="noreferrer">Request Free Swatches</a><Link className="button button-ghost" href={`/rfq?product=${encodeURIComponent(series.name)}`}>Get FOB Quote</Link></div></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
  </main>
}
