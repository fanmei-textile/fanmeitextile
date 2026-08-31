import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ProductCard } from '@/components/product-card'
import { getProduct, products } from '@/lib/products'
import { site, whatsappUrl } from '@/lib/site'
import { factorySpecifications } from '@/lib/specifications'

type ProductPageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return {}
  return {
    title: product.seoTitle,
    description: product.metaDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} Manufacturer | Fanmei Textile`,
      description: product.summary,
      images: [{ url: product.image }],
    },
  }
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3)
  const productMessage = `Hello Fanmei Textile, I am interested in ${product.name}. Please help match a suitable specification and sample.`
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${site.url}/products` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `${site.url}/products/${product.slug}` },
    ],
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <main id="main-content">
      <div className="container"><Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: product.name }]} /></div>
      <section className="section product-detail-hero container">
        <div className="product-detail-media">
          <Image src={product.image} alt={`${product.name} samples and surface options`} width={960} height={720} loading="eager" sizes="(max-width: 900px) 100vw, 52vw" />
        </div>
        <div className="product-detail-copy">
          <p className="eyebrow">Factory-direct PVC leather</p>
          <h1>{product.name}</h1>
          <p className="lead">{product.summary}</p>
          <dl className="quick-specs">
            <div><dt>Width</dt><dd>{factorySpecifications.width}</dd></div>
            <div><dt>Thickness</dt><dd>{factorySpecifications.thickness}</dd></div>
            <div><dt>Custom MOQ</dt><dd>Usually 800–1,000 m / color</dd></div>
            <div><dt>FCL lead time</dt><dd>Approx. 7–10 days after confirmation</dd></div>
          </dl>
          <div className="hero-actions dark-actions">
            <Link className="button button-dark" href={`/rfq?product=${encodeURIComponent(product.name)}`}>Ask for an FOB Quote</Link>
            <a className="button button-outline" href={whatsappUrl(productMessage)} target="_blank" rel="noreferrer">Ask on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container detail-grid">
          <article>
            <p className="eyebrow">Buyer fit</p>
            <h2>Who this series is for</h2>
            <p>{product.buyerFit}.</p>
            <p>{product.purchaseFocus}</p>
            <h3>Typical applications</h3>
            <ul className="check-list dark-checks">{product.applications.map((application) => <li key={application}>{application}</li>)}</ul>
          </article>
          <article>
            <p className="eyebrow">Construction</p>
            <h2>Options to confirm</h2>
            <dl className="detail-list">
              <div><dt>Texture</dt><dd>{product.texture}</dd></div>
              <div><dt>Color</dt><dd>Existing color cards or buyer sample matching</dd></div>
              <div><dt>Backing</dt><dd>{product.backing}</dd></div>
              <div><dt>Weight</dt><dd>Confirmed with the selected construction and physical sample</dd></div>
              <div><dt>Performance</dt><dd>Options developed according to the customer’s stated requirement</dd></div>
            </dl>
          </article>
        </div>
      </section>

      <section className="section container detail-grid">
        <article>
          <p className="eyebrow">Quotation checklist</p>
          <h2>What to send for an accurate FOB quote</h2>
          <ul className="check-list dark-checks">{product.quoteChecks.map((item) => <li key={item}>{item}</li>)}</ul>
          <p>Reference photos help with initial review. A physical sample is recommended when surface, backing and construction must be matched.</p>
          <Link className="text-link" href="/sample-based-customization">See the sample matching process <span>→</span></Link>
        </article>
        <article>
          <p className="eyebrow">Commercial reference</p>
          <h2>Factory supply parameters</h2>
          <dl className="detail-list">
            <div><dt>Trade term</dt><dd>{factorySpecifications.tradeTerm}</dd></div>
            <div><dt>Monthly capacity</dt><dd>{factorySpecifications.capacity}</dd></div>
            <div><dt>Reference weights</dt><dd>{factorySpecifications.referenceConstructions.join('; ')}</dd></div>
            <div><dt>Backing options</dt><dd>{factorySpecifications.backings.join(', ')}</dd></div>
          </dl>
        </article>
      </section>

      <section className="section container">
        <div className="section-heading centered"><p className="eyebrow">Buyer questions</p><h2>Frequently asked questions</h2></div>
        <div className="faq-list">
          {product.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
        </div>
      </section>

      <section className="section container">
        <div className="section-heading centered"><p className="eyebrow">Surface & color references</p><h2>Review the material direction</h2></div>
        <div className="detail-gallery">
          {product.gallery.map((image, index) => (
            <Image key={image} src={image} alt={`${product.name} reference ${index + 1}`} width={760} height={560} sizes="(max-width: 700px) 100vw, 33vw" />
          ))}
        </div>
      </section>

      <section className="section buying-process">
        <div className="container">
          <div className="section-heading centered"><p className="eyebrow light">From requirement to production</p><h2>Confirm before bulk ordering</h2></div>
          <ol className="process-steps">
            {['Share application, target specification and quantity', 'Check available samples or send your reference sample', 'Confirm quality, color, texture, backing and quotation', 'Approve order details for production', 'Production, inspection and shipment preparation'].map((step, index) => (
              <li key={step}><span>{index + 1}</span><p>{step}</p></li>
            ))}
          </ol>
          <div className="section-cta"><Link className="button button-gold" href={`/rfq?product=${encodeURIComponent(product.name)}`}>Start specification matching</Link></div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading split-heading"><div><p className="eyebrow">Related series</p><h2>Compare other applications</h2></div><Link className="text-link" href="/products">All products <span>→</span></Link></div>
        <div className="product-grid three-col">{related.map((item) => <ProductCard product={item} key={item.slug} />)}</div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  )
}
