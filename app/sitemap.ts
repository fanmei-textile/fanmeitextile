import type { MetadataRoute } from 'next'
import { products } from '@/lib/products'
import { realProductSeries } from '@/lib/real-series'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/products', '/sample-based-customization', '/guides/pvc-leather-thickness-guide', '/about', '/factory', '/contact', '/rfq']
  return [
    ...routes.map((route, index) => ({
      url: `${site.url}${route}`,
      lastModified: new Date(),
      changeFrequency: index === 0 ? 'weekly' as const : 'monthly' as const,
      priority: index === 0 ? 1 : route === '/products' ? 0.9 : 0.7,
    })),
    ...products.map((product) => ({
      url: `${site.url}/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...realProductSeries.map((series) => ({
      url: `${site.url}/products/series/${series.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
