import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="main-content" className="not-found container">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The requested page is unavailable. Continue to the PVC leather product range or contact the factory.</p>
      <div className="hero-actions dark-actions">
        <Link className="button button-dark" href="/products">View products</Link>
        <Link className="button button-outline" href="/contact">Contact Fanmei</Link>
      </div>
    </main>
  )
}
