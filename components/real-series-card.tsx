import Image from 'next/image'
import Link from 'next/link'
import type { RealProductSeries } from '@/lib/real-series'

export function RealSeriesCard({ series }: { series: RealProductSeries }) {
  const confirmedSpecs = series.specifications.length
    ? series.specifications.slice(0, 3)
    : series.variants?.[0]?.specifications.slice(0, 3) || []
  return <article className="product-card real-series-card">
    <Link className="product-image" href={`/products/series/${series.slug}`}><Image src={series.image} alt={series.imageAlt} width={720} height={780} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /></Link>
    <div className="product-card-copy"><p className="card-kicker">Real Fanmei color card</p><h3><Link href={`/products/series/${series.slug}`}>{series.name}</Link></h3><p>{series.summary}</p>
      <ul className="series-card-specs" aria-label={`${series.name} specification summary`}>
        {confirmedSpecs.length ? confirmedSpecs.map((item) => <li key={item.label}><strong>{item.label}</strong><span>{item.value}</span></li>) : <li><strong>Specification</strong><span>Custom specifications available</span></li>}
        <li><strong>Application</strong><span>Sofa, furniture and upholstery</span></li>
      </ul>
      <div className="series-card-actions"><Link className="text-link" href={`/products/series/${series.slug}`}>View Series <span>→</span></Link><Link className="text-link" href={`/rfq?product=${encodeURIComponent(series.name)}`}>Request Quote <span>→</span></Link></div>
    </div>
  </article>
}
