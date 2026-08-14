import Link from 'next/link'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid container">
        <div className="footer-brand">
          <strong>Fanmei Textile</strong>
          <p>Factory-direct PVC synthetic leather for furniture and upholstery production.</p>
        </div>
        <div>
          <h2>Products</h2>
          <Link href="/products/pvc-sofa-leather">PVC Sofa Leather</Link>
          <Link href="/products/pvc-upholstery-leather">PVC Upholstery Leather</Link>
          <Link href="/products/custom-pvc-leather">Custom PVC Leather</Link>
        </div>
        <div>
          <h2>Company</h2>
          <Link href="/about">About Fanmei</Link>
          <Link href="/factory">Manufacturing</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h2>Contact</h2>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noreferrer">
            WhatsApp {site.whatsappDisplay}
          </a>
          <span>{site.location}</span>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© 2026 {site.legalName} All rights reserved.</span>
        <Link href="/rfq">Request a specification match</Link>
      </div>
    </footer>
  )
}
