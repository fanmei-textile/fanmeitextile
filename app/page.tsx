import Image from 'next/image'
import Link from 'next/link'
import { ProductCard } from '@/components/product-card'
import { RealSeriesCard } from '@/components/real-series-card'
import { products } from '@/lib/products'
import { realProductSeries } from '@/lib/real-series'
import { defaultWhatsAppMessage, whatsappUrl } from '@/lib/site'

const facts = [
  ['≈2,000,000 m', 'Monthly production capacity'],
  ['140–142 cm', 'Standard width range'],
  ['0.6–2.0 mm', 'Available thickness range'],
  ['7–10 days', 'Typical FCL production after confirmation'],
]

const customOptions = [
  ['Thickness', '0.6–2.0 mm, selected for the target construction'],
  ['Color', 'Sample matching and production color development'],
  ['Surface', 'Texture selection and custom embossing support'],
  ['Backing', 'Knitted, woven or non-woven options for the finished application'],
  ['Performance', 'FR, stain-resistant, easy-clean, anti-mildew and solvent-free options developed by requirement'],
  ['Development', 'OEM and physical sample matching for repeat programs'],
]

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <Image
          src="/images/pvc-leather-color-rolls-01.webp"
          alt="PVC synthetic leather rolls in multiple upholstery colors"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="home-hero-image"
        />
        <div className="home-hero-overlay" />
        <div className="container home-hero-content">
          <p className="eyebrow light">Factory direct · Haining, China</p>
          <h1>PVC Synthetic Leather Manufacturer for Furniture & Upholstery</h1>
          <p className="hero-lead">
            Factory-direct PVC leather for sofas, chairs, hotel furniture and commercial upholstery, with custom color, texture, thickness and backing.
          </p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/rfq">Get Factory FOB Quote</Link>
            <a className="button button-ghost" href={whatsappUrl(defaultWhatsAppMessage)} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </div>
          <ul className="hero-proof" aria-label="Production capabilities">
            <li>MOQ usually 800–1,000 m / color</li>
            <li>OEM / sample matching</li>
            <li>Furniture-focused production</li>
          </ul>
        </div>
      </section>

      <section className="fact-bar" aria-label="Factory facts">
        <div className="container fact-grid">
          {facts.map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </section>

      <section className="section container intro-grid">
        <div className="section-copy">
          <p className="eyebrow">Made for furniture production</p>
          <h2>A direct material partner for upholstery buyers</h2>
          <p className="lead">
            Fanmei Textile manufactures PVC synthetic leather for furniture factories, upholstery producers, wholesalers and distributors.
          </p>
          <p>
            Buyers can start from an existing color card, a target specification or a physical sample. We align the surface, thickness, backing and construction before production.
          </p>
          <div className="inline-actions">
            <Link className="text-link" href="/about">About the manufacturer <span>→</span></Link>
            <Link className="text-link" href="/factory">See manufacturing <span>→</span></Link>
          </div>
        </div>
        <div className="intro-media">
          <Image
            src="/images/fanmei-company-building-sign-02.webp"
            alt="Haining Fanmei Textile company building and sign"
            width={920}
            height={700}
            sizes="(max-width: 800px) 100vw, 50vw"
          />
          <div className="media-note"><strong>Factory direct</strong><span>Haining, Zhejiang, China</span></div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Factory product range</p><h2>Real PVC leather color series</h2></div>
            <p>Browse original Fanmei color cards with confirmed series references and verified specifications. Request a physical sample before bulk confirmation.</p>
          </div>
          <div className="product-grid">{realProductSeries.slice(0, 6).map((series) => <RealSeriesCard series={series} key={series.slug} />)}</div>
          <div className="section-cta"><Link className="button button-dark" href="/products">View all real color series</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Product series</p>
              <h2>Organized around your application</h2>
            </div>
            <p>Compare core use cases first, then confirm the exact construction through samples and specifications.</p>
          </div>
          <div className="product-grid">
            {products.slice(0, 6).map((product) => <ProductCard product={product} key={product.slug} />)}
          </div>
          <div className="section-cta"><Link className="button button-dark" href="/products">Compare all product series</Link></div>
        </div>
      </section>

      <section className="section container customization-section">
        <div className="section-heading centered">
          <p className="eyebrow">Customization capability</p>
          <h2>Build the material around the finished product</h2>
          <p>Share the target use, sample and order plan. The specification is confirmed before quotation and bulk production.</p>
        </div>
        <div className="capability-grid">
          {customOptions.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="factory-band">
        <div className="container factory-band-grid">
          <div className="factory-band-copy">
            <p className="eyebrow light">Production visibility</p>
            <h2>Real production and material images</h2>
            <p>
              Review coating equipment, roll production, color cards and sample collections before moving to specification matching.
            </p>
            <ul className="check-list">
              <li>Production capability for container orders</li>
              <li>Color cards and physical samples</li>
              <li>Custom construction for repeat purchasing</li>
            </ul>
            <Link className="button button-light" href="/factory">View factory & process</Link>
          </div>
          <div className="factory-collage">
            <Image src="/images/factory-production-line-01.webp" alt="Fanmei PVC leather production line" width={900} height={620} sizes="(max-width: 900px) 100vw, 42vw" />
            <Image src="/images/factory-roll-production-05.webp" alt="PVC leather roll production at Fanmei" width={520} height={420} sizes="(max-width: 900px) 48vw, 22vw" />
            <Image src="/images/fanmei-sample-exhibition-hall-01.webp" alt="Fanmei material sample exhibition hall" width={520} height={420} sizes="(max-width: 900px) 48vw, 22vw" />
          </div>
        </div>
      </section>

      <section className="section container detail-grid">
        <article>
          <p className="eyebrow">Sample-based development</p>
          <h2>Start from the material already approved by your market</h2>
          <p>Send front, back and side photos for initial review, then provide a physical sample when the surface, embossing, color, thickness, weight and backing need closer evaluation.</p>
          <Link className="button button-dark" href="/sample-based-customization">View sample matching process</Link>
        </article>
        <div className="intro-media">
          <Image src="/images/pvc-leather-sample-books-01.webp" alt="PVC leather sample books for buyer sample matching" width={920} height={700} sizes="(max-width: 800px) 100vw, 50vw" />
        </div>
      </section>

      <section className="section container applications-section">
        <div className="section-heading centered">
          <p className="eyebrow">Applications</p>
          <h2>Material supply for everyday and contract furniture</h2>
        </div>
        <div className="application-grid">
          {['Sofas & recliners', 'Office & dining chairs', 'Hotel furniture', 'Commercial seating', 'Interior upholstery', 'Wall panels & soft decoration'].map((item) => (
            <div key={item}><span aria-hidden="true">◆</span>{item}</div>
          ))}
        </div>
      </section>

      <section className="quote-band">
        <div className="container quote-band-inner">
          <div>
            <p className="eyebrow light">Start with your requirement</p>
            <h2>Send a sample or specification for matching</h2>
            <p>Include application, target thickness, color, quantity and expected order timing.</p>
          </div>
          <div className="quote-band-actions">
            <Link className="button button-gold" href="/rfq">Get Factory FOB Quote</Link>
            <Link className="button button-ghost" href="/sample-based-customization">Request Sample Matching</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
