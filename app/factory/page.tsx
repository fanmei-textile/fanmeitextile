import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'PVC Leather Manufacturing & Custom Production',
  description:
    'See Fanmei PVC leather production equipment, roll processing, sample matching and custom manufacturing capability for furniture upholstery orders.',
  alternates: { canonical: '/factory' },
}

const steps = [
  ['Requirement review', 'Confirm application, thickness, surface, backing, quantity and target performance.'],
  ['Sample matching', 'Compare a buyer sample or select from available color and texture references.'],
  ['Construction confirmation', 'Align the target specification and quotation before placing the order.'],
  ['Production', 'Schedule coating, embossing and roll production for the confirmed item.'],
  ['Order preparation', 'Prepare the finished rolls for the agreed inspection and shipment process.'],
]

export default function FactoryPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Manufacturing capability"
        title="PVC Leather Production for Repeat Supply"
        description="From sample matching to roll production, the process is organized around an agreed upholstery construction."
        image="/images/factory-production-line-01.webp"
        imageAlt="Fanmei PVC synthetic leather manufacturing line"
      >
        <Link className="button button-gold" href="/rfq">Discuss your specification</Link>
      </PageHero>
      <div className="container"><Breadcrumbs items={[{ label: 'Manufacturing' }]} /></div>

      <section className="section container specs-layout">
        <div className="section-copy">
          <p className="eyebrow">Production overview</p>
          <h2>Capacity for furniture and upholstery orders</h2>
          <p className="lead">Approximately 2,000,000 meters of monthly production capacity supports container orders and repeat purchasing programs.</p>
          <p>Available thickness ranges from 0.6 to 2.0 mm. Reference constructions include approximately 250–260 gsm at 0.6 mm and approximately 340 gsm ±5% at 0.9 mm; other weights are confirmed against the selected construction.</p>
          <p>Typical FCL production is approximately 7–10 days after order and specification confirmation. Standard commercial discussion is based on FOB terms.</p>
        </div>
        <div className="factory-feature-image"><Image src="/images/factory-coating-line-02.webp" alt="PVC leather coating line at Fanmei" width={960} height={720} sizes="(max-width: 900px) 100vw, 50vw" /></div>
      </section>

      <section className="section factory-process">
        <div className="container">
          <div className="section-heading centered"><p className="eyebrow light">Production workflow</p><h2>Five steps from requirement to order</h2></div>
          <ol className="timeline">
            {steps.map(([title, text], index) => <li key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading split-heading"><div><p className="eyebrow">Factory photos</p><h2>Production equipment and roll handling</h2></div><p>Images in this section come from the existing Fanmei project material library.</p></div>
        <div className="factory-photo-grid">
          <figure><Image src="/images/factory-equipment-03.webp" alt="PVC leather manufacturing equipment" width={900} height={650} sizes="(max-width: 750px) 100vw, 50vw" /><figcaption>Production equipment</figcaption></figure>
          <figure><Image src="/images/factory-control-panel-04.webp" alt="Production line control panel" width={900} height={650} sizes="(max-width: 750px) 100vw, 50vw" /><figcaption>Process control</figcaption></figure>
          <figure className="wide"><Image src="/images/factory-roll-production-05.webp" alt="Finished PVC leather roll processing" width={1400} height={780} sizes="100vw" /><figcaption>Roll production and handling</figcaption></figure>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container detail-grid">
          <article><p className="eyebrow">Customization</p><h2>Variables we can discuss</h2><ul className="check-list dark-checks"><li>Thickness and hand feel</li><li>Color matching</li><li>Texture and embossing</li><li>Backing construction</li><li>Flame-retardant construction</li><li>Stain-resistant and easy-clean options</li><li>Solvent-free options</li></ul></article>
          <article><p className="eyebrow">What to send</p><h2>Prepare a faster evaluation</h2><ul className="check-list dark-checks"><li>Finished application</li><li>Front, back and side/profile photos</li><li>Target thickness and gsm if available</li><li>Physical sample when possible</li><li>Required backing</li><li>Estimated quantity per color</li><li>Performance requirement and order timing</li></ul><Link className="text-link" href="/sample-based-customization">See sample-based development <span>→</span></Link></article>
        </div>
      </section>
    </main>
  )
}
