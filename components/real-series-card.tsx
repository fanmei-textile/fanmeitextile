import Image from 'next/image'
import Link from 'next/link'
import type { RealProductSeries } from '@/lib/real-series'

export function RealSeriesCard({ series }: { series: RealProductSeries }) {
  return <article className="product-card real-series-card">
    <Link className="product-image" href={`/products/series/${series.slug}`}><Image src={series.image} alt={series.imageAlt} width={720} height={780} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /></Link>
    <div className="product-card-copy"><p className="card-kicker">Real Fanmei color card</p><h3><Link href={`/products/series/${series.slug}`}>{series.name}</Link></h3><p>{series.summary}</p><Link className="text-link" href={`/products/series/${series.slug}`}>View colors & verified specs <span>→</span></Link></div>
  </article>
}
