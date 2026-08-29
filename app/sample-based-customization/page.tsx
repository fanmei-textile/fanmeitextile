import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { PageHero } from '@/components/page-hero'
import { site, whatsappUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Custom PVC Upholstery Leather Sample Matching',
  description: 'Send a physical sample or front, back and side photos for PVC upholstery leather specification matching, sample development and an FOB factory quote.',
  alternates: { canonical: '/sample-based-customization' },
}

const questions = [
  { question: 'What should I send for an initial sample review?', answer: 'Send clear front, back and side or profile photos, the application, thickness, gsm if known, backing, quantity and any required function. A physical sample is recommended for closer construction matching.' },
  { question: 'Can Fanmei guarantee a 100% identical copy?', answer: 'No absolute identity is promised. Fanmei evaluates the supplied reference and develops a sample for the buyer to review and approve before bulk production.' },
  { question: 'Which details are evaluated from a physical sample?', answer: 'The factory can review the surface, embossing, color, thickness, weight, backing and material construction, then discuss a practical development direction.' },
]

export default function SampleBasedCustomizationPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: questions.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) }
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, { '@type': 'ListItem', position: 2, name: 'Sample-Based Customization', item: `${site.url}/sample-based-customization` }] }
  const message = 'Hello Fanmei Textile, I would like to develop PVC upholstery leather according to my sample. Please tell me how to send photos and a physical sample.'

  return <main id="main-content">
    <PageHero eyebrow="Sample-based development" title="Develop PVC Upholstery Leather from Your Sample" description="Share reference photos for initial review, then send a physical sample when surface, backing and construction need closer specification matching." image="/images/pvc-leather-sample-books-01.webp" imageAlt="PVC upholstery leather sample books for custom specification matching">
      <div className="hero-actions"><Link className="button button-gold" href="/rfq">Request Sample Development</Link><a className="button button-ghost" href={whatsappUrl(message)} target="_blank" rel="noreferrer">Talk on WhatsApp</a></div>
    </PageHero>
    <div className="container"><Breadcrumbs items={[{ label: 'Sample-Based Customization' }]} /></div>

    <section className="section container detail-grid">
      <article><p className="eyebrow">What the buyer sends</p><h2>Give the factory a useful reference</h2><ul className="check-list dark-checks"><li>Front surface photo</li><li>Back and backing photo</li><li>Side or profile photo</li><li>Thickness and gsm, if available</li><li>Finished application and quantity per color</li><li>Physical sample when possible</li></ul></article>
      <article><p className="eyebrow">What Fanmei evaluates</p><h2>Review the material construction</h2><dl className="detail-list"><div><dt>Surface</dt><dd>Grain, gloss, hand feel and visible finish direction</dd></div><div><dt>Embossing</dt><dd>Pattern scale and surface character</dd></div><div><dt>Construction</dt><dd>Thickness, weight, backing and material structure</dd></div><div><dt>Color</dt><dd>Reference color direction for physical sample approval</dd></div></dl></article>
    </section>

    <section className="section section-tint"><div className="container specs-layout"><div className="section-copy"><p className="eyebrow">Real color card structure</p><h2>Ready for verified Fanmei series</h2><p>Future product color cards can be added with series name, real image, embossing, thickness, gsm, width, backing, application and optional functions. Unknown values remain marked as custom specifications instead of being guessed.</p><Link className="button button-dark" href="/products">View PVC leather products</Link></div><div className="factory-feature-image"><Image src="/images/pvc-leather-color-card-display-01.webp" alt="Fanmei PVC upholstery leather real color card display" width={960} height={720} sizes="(max-width: 900px) 100vw, 50vw" /></div></div></section>

    <section className="section container"><div className="section-heading centered"><p className="eyebrow">Development process</p><h2>From reference to confirmed specification</h2></div><ol className="process-steps light-process">{['Send photos and application details', 'Arrange a physical sample when needed', 'Evaluate surface, backing and construction', 'Develop and review the new sample', 'Confirm specification and FOB quotation'].map((step, index) => <li key={step}><span>{index + 1}</span><p>{step}</p></li>)}</ol></section>

    <section className="section container"><div className="section-heading centered"><p className="eyebrow">Sample matching FAQ</p><h2>Before sending your reference</h2></div><div className="faq-list">{questions.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></section>

    <section className="quote-band"><div className="container quote-band-inner"><div><p className="eyebrow light">Ready to compare a material?</p><h2>Send your sample and order requirement</h2><p>Include application, thickness, quantity, color and expected timing for a useful first review.</p></div><div className="quote-band-actions"><a className="button button-gold" href={whatsappUrl(message)} target="_blank" rel="noreferrer">Send Your Sample</a><Link className="button button-ghost" href="/rfq">Get Factory FOB Quote</Link></div></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
  </main>
}
