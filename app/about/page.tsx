import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'About Our PVC Leather Factory',
  description:
    'Learn how Haining Fanmei Textile Technology Co., Ltd. supports furniture manufacturers and upholstery buyers with factory-direct PVC synthetic leather.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About Fanmei Textile"
        title="A Furniture-focused PVC Leather Manufacturer"
        description="Fanmei supplies PVC sofa and upholstery leather from Haining, China. We help furniture manufacturers, importers and distributors compare swatches and develop materials from a reference sample."
        image="/images/fanmei-office-reception-02.webp"
        imageAlt="Fanmei Textile office reception in Haining"
      >
        <Link className="button button-gold" href="/contact">Contact the factory</Link>
      </PageHero>
      <div className="container"><Breadcrumbs items={[{ label: 'About' }]} /></div>

      <section className="section container intro-grid">
        <div className="section-copy">
          <p className="eyebrow">Company profile</p>
          <h2>HAINING FANMEI TEXTILE TECHNOLOGY CO., LTD.</h2>
          <p className="lead">Fanmei Textile manufactures PVC synthetic leather for furniture and upholstery applications in Haining, Zhejiang, China.</p>
          <p>
            Our core supply covers PVC sofa leather, upholstery leather, furniture leather and chair leather. Development work can also include cat scratch fabric, eco leather and solvent-free leather options when they match the buyer’s requirement.
          </p>
          <p>
            We work from application details, reference samples and target specifications. This keeps product discussions focused on what the buyer needs to manufacture, distribute or reorder.
          </p>
        </div>
        <div className="intro-media">
          <Image src="/images/fanmei-company-sign-exterior-01.webp" alt="Haining Fanmei Textile company exterior sign" width={920} height={700} sizes="(max-width: 800px) 100vw, 50vw" />
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-heading centered"><p className="eyebrow">What buyers can verify</p><h2>Specific operating facts</h2></div>
          <div className="fact-card-grid">
            <article><strong>≈2,000,000 m</strong><h3>Monthly capacity</h3><p>Production capacity for ongoing furniture and distribution programs.</p></article>
            <article><strong>140–142 cm</strong><h3>Width range</h3><p>Standard width range for the supplied PVC leather constructions.</p></article>
            <article><strong>800–1,000 m</strong><h3>Custom MOQ / color</h3><p>Typical minimum for customized production, subject to the confirmed item.</p></article>
            <article><strong>7–10 days</strong><h3>FCL production</h3><p>Approximate production time after order and specification confirmation.</p></article>
          </div>
        </div>
      </section>

      <section className="section container values-layout">
        <div className="section-copy"><p className="eyebrow">How we work</p><h2>Clear specifications before production</h2><p>Reliable purchasing starts with a shared understanding of the construction, not generic claims.</p></div>
        <div className="simple-card-grid two">
          <article><h3>Application first</h3><p>We start with the furniture type, upholstery process and performance requirement.</p></article>
          <article><h3>Sample confirmation</h3><p>Color, texture, hand feel and backing can be compared through physical samples.</p></article>
          <article><h3>Production matching</h3><p>Thickness and construction are aligned with the approved requirement.</p></article>
          <article><h3>Repeat supply</h3><p>Confirmed specifications support clearer reordering for manufacturers and distributors.</p></article>
        </div>
      </section>

      <section className="quote-band"><div className="container quote-band-inner"><div><p className="eyebrow light">Work from your reference</p><h2>Develop PVC leather according to your sample</h2><p>Share photos first, then send a physical sample when construction matching is required.</p></div><div className="quote-band-actions"><Link className="button button-gold" href="/sample-based-customization">Send Your Sample</Link><Link className="button button-ghost" href="/rfq">Get FOB Quote</Link></div></div></section>

      <section className="image-strip" aria-label="Fanmei company and product samples">
        <Image src="/images/fanmei-building-exterior-01.webp" alt="Fanmei Textile building exterior" width={700} height={520} sizes="33vw" />
        <Image src="/images/fanmei-sample-exhibition-hall-01.webp" alt="Fanmei Textile sample exhibition hall" width={700} height={520} sizes="33vw" />
        <Image src="/images/pvc-leather-sample-books-01.webp" alt="PVC leather sample books" width={700} height={520} sizes="33vw" />
      </section>
    </main>
  )
}
