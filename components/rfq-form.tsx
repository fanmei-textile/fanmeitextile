'use client'

import { FormEvent, useRef, useState } from 'react'
import { products } from '@/lib/products'
import { realProductSeries } from '@/lib/real-series'
import { site, whatsappUrl } from '@/lib/site'

type RfqFormProps = {
  defaultProduct?: string
  compact?: boolean
}

function buildMessage(form: HTMLFormElement) {
  const data = new FormData(form)
  const value = (name: string) => String(data.get(name) || '').trim()

  return [
    'Hello Fanmei Textile, I would like to request a PVC leather quotation.',
    '',
    `Name: ${value('name')}`,
    `Company: ${value('company')}`,
    `Country: ${value('country')}`,
    `Email: ${value('email')}`,
    `WhatsApp: ${value('whatsapp')}`,
    `Product: ${value('product')}`,
    `Application: ${value('application')}`,
    `Thickness: ${value('thickness') || 'To be discussed'}`,
    `Estimated quantity: ${value('quantity')}`,
    `Requirement: ${value('message') || 'Please recommend a suitable construction.'}`,
  ].join('\n')
}

export function RfqForm({ defaultProduct = '', compact = false }: RfqFormProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [notice, setNotice] = useState('')

  const validate = () => {
    if (!formRef.current?.reportValidity()) {
      setNotice('Please complete the required fields before continuing.')
      return false
    }
    const data = new FormData(formRef.current)
    if (!String(data.get('email') || '').trim() && !String(data.get('whatsapp') || '').trim()) {
      setNotice('Please provide either an email address or WhatsApp number.')
      return false
    }
    return true
  }

  const sendWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate() || !formRef.current) return
    setNotice('Your RFQ is ready. Review it in WhatsApp, then press Send.')
    window.open(whatsappUrl(buildMessage(formRef.current)), '_blank', 'noopener,noreferrer')
  }

  const prepareEmail = () => {
    if (!validate() || !formRef.current) return
    const subject = encodeURIComponent('PVC Leather RFQ - Fanmei Textile')
    const body = encodeURIComponent(buildMessage(formRef.current))
    setNotice('Your email app will open with the RFQ prepared for review.')
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <form ref={formRef} className={`rfq-form${compact ? ' compact' : ''}`} onSubmit={sendWhatsApp}>
      <div className="form-intro">
        <p className="eyebrow">Buyer inquiry</p>
        <h2>Tell us what you need</h2>
        <p>Share your target application, construction and order volume. We will match a suitable sample before quoting.</p>
      </div>

      <div className="form-grid">
        <label>
          <span>Name *</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span>Company *</span>
          <input name="company" autoComplete="organization" required />
        </label>
        <label>
          <span>Country *</span>
          <input name="country" autoComplete="country-name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" />
        </label>
        <label>
          <span>WhatsApp</span>
          <input name="whatsapp" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>Product *</span>
          <select name="product" defaultValue={defaultProduct} required>
            <option value="" disabled>Select a product</option>
            {products.map((product) => <option key={product.slug} value={product.name}>{product.name}</option>)}
            <optgroup label="Real Fanmei Series">{realProductSeries.map((series) => <option key={series.slug} value={series.name}>{series.name}</option>)}</optgroup>
            <option value="Cat Scratch Fabric">Cat Scratch Fabric</option>
            <option value="Solvent-free Leather">Solvent-free Leather</option>
          </select>
        </label>
        <label>
          <span>Application *</span>
          <select name="application" defaultValue="" required>
            <option value="" disabled>Select an application</option>
            {['Sofa / recliner', 'Chair / office seating', 'Hotel furniture', 'General furniture upholstery', 'Wall panel / interior upholstery', 'Distribution / wholesale', 'Other'].map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
        </label>
        <label>
          <span>Thickness</span>
          <select name="thickness" defaultValue="">
            <option value="">Select if known</option>
            {['0.6 mm', '0.9–1.0 mm', '1.1 mm', '1.4–1.5 mm', '1.8–2.0 mm', 'Custom / sample match'].map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Estimated quantity *</span>
          <input name="quantity" placeholder="e.g. 15,000 meters" required />
        </label>
        <label className="form-full">
          <span>Application and requirements</span>
          <textarea name="message" rows={5} placeholder="Application, target color/texture, backing, performance requirement or sample reference" />
        </label>
      </div>

      <div className="form-actions">
        <button className="button" type="submit">Get Factory FOB Quote</button>
        <button className="button button-outline" type="button" onClick={prepareEmail}>Prepare Email RFQ</button>
      </div>
      <p className="form-transparency">
        This website does not pretend to store your inquiry. Your message opens in WhatsApp or your email app for your review before sending.
      </p>
      <p className="form-notice" role="status" aria-live="polite">{notice}</p>
    </form>
  )
}
