import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { PageHero } from '@/components/page-hero'
import { ProductCard } from '@/components/product-card'
import { RealSeriesCard } from '@/components/real-series-card'
import { products } from '@/lib/products'
import { realProductSeries } from '@/lib/real-series'
import { factorySpecifications } from '@/lib/specifications'

export const metadata: Metadata = {
  title: 'PVC Upholstery Leather Manufacturer & Product Range',
  description:
    'Compare Fanmei PVC sofa leather, upholstery leather, chair leather, furniture leather and custom PVC leather series for manufacturing and distribution.',
  alternates: { canonical: '/products' },
}

const constructionRows = [
  ['Width', factorySpecifications.width],
  ['Available thickness', factorySpecifications.thickness],
  ['Reference construction', '0.6 mm: approx. 250–260 gsm; 0.9 mm: approx. 340 gsm ±5%'],
  ['Custom MOQ', 'Usually 800–1,000 meters per color, depending on specification'],
  ['FCL production', 'Approx. 7–10 days after order and specification confirmation'],
  ['Trade term', factorySpecifications.tradeTerm],
  ['Color & texture', 'Existing selections or sample matching'],
  ['Backing', 'Selected according to application and target construction'],
]

export default function ProductsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="PVC leather product range"
        title="PVC Upholstery Leather for Sofa & Furniture Production"
        description="Choose by application, then confirm thickness, texture, color, backing and performance through sample matching."
        image="/images/showroom-color-collection-wide-01.webp"
        imageAlt="Fanmei PVC leather color collection for furniture upholstery"
      >
        <div className="hero-actions"><Link className="button button-gold" href="/rfq">Get Factory FOB Quote</Link><Link className="button button-ghost" href="/sample-based-customization">Request Sample Matching</Link></div>
      </PageHero>
      <div className="container"><Breadcrumbs items={[{ label: 'Products' }]} /></div>

      <section className="section container">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Core series</p><h2>Start from the finished application</h2></div>
          <p>These categories reduce duplicate browsing. Each series can be adjusted to the buyer’s confirmed construction.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => <ProductCard product={product} key={product.slug} />)}
        </div>
      </section>

      <section className="section section-tint">
        <div className="container"><div className="section-heading split-heading"><div><p className="eyebrow">Real Fanmei color cards</p><h2>Verified PVC leather series</h2></div><p>Browse original color-card images, confirmed color references and only the specifications supported by the supplied product material.</p></div><div className="product-grid">{realProductSeries.map((series) => <RealSeriesCard series={series} key={series.slug} />)}</div></div>
      </section>

      <section className="section">
        <div className="container specs-layout">
          <div className="section-copy">
            <p className="eyebrow">Specification guide</p>
            <h2>Common production parameters</h2>
            <p>Final values are confirmed against your target sample, application and required order quantity.</p>
            <Link className="button button-dark" href="/rfq">Send your requirement</Link>
            <Link className="text-link" href="/guides/pvc-leather-thickness-guide">Read the thickness guide <span>→</span></Link>
          </div>
          <div className="spec-table-wrap">
            <table className="spec-table">
              <caption className="sr-only">Fanmei PVC leather common production parameters</caption>
              <tbody>
                {constructionRows.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section container extension-section">
        <div className="section-heading centered">
          <p className="eyebrow">Additional development directions</p>
          <h2>Related material options</h2>
          <p>Availability and construction should be confirmed against the project requirement.</p>
        </div>
        <div className="simple-card-grid three">
          <article><h3>Cat Scratch Fabric</h3><p>Furniture surface material options for buyers developing pet-friendly upholstery ranges.</p></article>
          <article><h3>Eco Leather Options</h3><p>Material constructions discussed according to the buyer’s application and specification.</p></article>
          <article><h3>Solvent-free Leather</h3><p>Solvent-free construction options available for requirement-based product development.</p></article>
        </div>
      </section>
    </main>
  )
}
