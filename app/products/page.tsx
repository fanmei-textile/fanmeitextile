import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { PageHero } from '@/components/page-hero'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'PVC Leather Products for Furniture & Upholstery',
  description:
    'Compare Fanmei PVC sofa leather, upholstery leather, chair leather, furniture leather and custom PVC leather series for manufacturing and distribution.',
  alternates: { canonical: '/products' },
}

const constructionRows = [
  ['Width', '140–142 cm'],
  ['Available thickness', '0.6 / 0.9 / 1.1 / 1.4 / 1.5 / 1.8 mm'],
  ['Custom MOQ', 'Generally 800–1,000 meters per color'],
  ['Container production', 'Approximately 10–15 days'],
  ['Color & texture', 'Existing selections or sample matching'],
  ['Backing', 'Selected according to application and target construction'],
]

export default function ProductsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="PVC leather product range"
        title="PVC Leather for Furniture Production"
        description="Choose by application, then confirm thickness, texture, color, backing and performance through sample matching."
        image="/images/showroom-color-collection-wide-01.webp"
        imageAlt="Fanmei PVC leather color collection for furniture upholstery"
      >
        <Link className="button button-gold" href="/rfq">Request specification matching</Link>
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
        <div className="container specs-layout">
          <div className="section-copy">
            <p className="eyebrow">Specification guide</p>
            <h2>Common production parameters</h2>
            <p>Final values are confirmed against your target sample, application and required order quantity.</p>
            <Link className="button button-dark" href="/rfq">Send your requirement</Link>
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
