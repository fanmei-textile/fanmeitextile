import Link from 'next/link'

export type BreadcrumbItem = { label: string; href?: string }

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><Link href="/">Home</Link></li>
        {items.map((item) => (
          <li key={item.label} aria-current={item.href ? undefined : 'page'}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          </li>
        ))}
      </ol>
    </nav>
  )
}
