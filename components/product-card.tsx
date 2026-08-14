import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link className="product-image" href={`/products/${product.slug}`}>
        <Image
          src={product.image}
          alt={`${product.name} color and texture samples`}
          width={720}
          height={520}
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
      </Link>
      <div className="product-card-copy">
        <p className="card-kicker">Factory-direct series</p>
        <h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3>
        <p>{product.summary}</p>
        <ul className="inline-list" aria-label="Applications">
          {product.applications.slice(0, 3).map((application) => <li key={application}>{application}</li>)}
        </ul>
        <Link className="text-link" href={`/products/${product.slug}`}>Specifications & options <span>→</span></Link>
      </div>
    </article>
  )
}
