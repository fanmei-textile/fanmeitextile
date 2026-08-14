import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { RfqForm } from '@/components/rfq-form'

export const metadata: Metadata = {
  title: 'Request a PVC Leather Quote',
  description:
    'Prepare an RFQ for PVC sofa leather or upholstery leather. Include thickness, quantity, application, color, texture and backing requirements.',
  alternates: { canonical: '/rfq' },
}

type RfqPageProps = { searchParams: Promise<{ product?: string }> }

export default async function RfqPage({ searchParams }: RfqPageProps) {
  const { product = '' } = await searchParams
  return (
    <main id="main-content">
      <section className="contact-hero rfq-hero">
        <div className="container">
          <p className="eyebrow light">Request for quotation</p>
          <h1>Prepare a Clear PVC Leather RFQ</h1>
          <p>Your details will open in WhatsApp or your email app so you can review them before sending.</p>
        </div>
      </section>
      <div className="container"><Breadcrumbs items={[{ label: 'Request a Quote' }]} /></div>
      <section className="section container rfq-page-layout">
        <aside className="rfq-guide">
          <p className="eyebrow">Before you send</p>
          <h2>Details that speed up matching</h2>
          <ol>
            <li><span>01</span><div><strong>Application</strong><p>Sofa, chair, hotel furniture, wall panel or other use.</p></div></li>
            <li><span>02</span><div><strong>Construction</strong><p>Thickness, backing, texture and any performance requirement.</p></div></li>
            <li><span>03</span><div><strong>Order plan</strong><p>Quantity per color, total quantity and expected timing.</p></div></li>
            <li><span>04</span><div><strong>Reference</strong><p>Mention whether you can provide a color or material sample.</p></div></li>
          </ol>
        </aside>
        <RfqForm defaultProduct={product} />
      </section>
    </main>
  )
}
