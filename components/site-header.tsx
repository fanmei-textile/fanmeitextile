import Link from 'next/link'

const links = [
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/factory', label: 'Manufacturing' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Fanmei Textile home">
          <span className="brand-mark">FM</span>
          <span>
            <strong>Fanmei Textile</strong>
            <small>PVC Upholstery Materials</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>

        <Link className="button button-small header-quote" href="/rfq">Get a Quote</Link>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {links.map((link) => (
              <Link href={link.href} key={link.href}>{link.label}</Link>
            ))}
            <Link className="mobile-quote" href="/rfq">Get a Quote</Link>
          </nav>
        </details>
      </div>
    </header>
  )
}
