export type Product = {
  slug: string
  name: string
  shortName: string
  image: string
  gallery: string[]
  summary: string
  applications: string[]
  buyerFit: string
  texture: string
  backing: string
}

export const products: Product[] = [
  {
    slug: 'pvc-sofa-leather',
    name: 'PVC Sofa Leather',
    shortName: 'Sofa Leather',
    image: '/images/pvc-leather-color-rolls-01.webp',
    gallery: [
      '/images/pvc-leather-color-rolls-01.webp',
      '/images/pvc-leather-color-card-2211.webp',
      '/images/showroom-color-collection-wide-01.webp',
    ],
    summary:
      'PVC leather developed for sofa production, with selectable grains, colors, thicknesses and backing constructions.',
    applications: ['Sofas', 'Recliners', 'Sectional seating', 'Upholstered furniture'],
    buyerFit: 'Sofa factories, furniture wholesalers and upholstery material distributors',
    texture: 'Fine grain, medium grain, vintage and customer-matched embossing',
    backing: 'Selected to suit hand feel, strength and production requirements',
  },
  {
    slug: 'pvc-upholstery-leather',
    name: 'PVC Upholstery Leather',
    shortName: 'Upholstery Leather',
    image: '/images/showroom-pvc-leather-hanging-samples-02.webp',
    gallery: [
      '/images/showroom-pvc-leather-hanging-samples-02.webp',
      '/images/pvc-leather-color-card-display-01.webp',
      '/images/pvc-leather-color-card-815.webp',
    ],
    summary:
      'Versatile PVC synthetic leather for furniture and interior upholstery where repeatable color and construction matter.',
    applications: ['Furniture upholstery', 'Hotel furniture', 'Wall panels', 'Soft interior decoration'],
    buyerFit: 'Upholstery manufacturers, contract furniture suppliers and importers',
    texture: 'Multiple surface grains with customer color matching available',
    backing: 'Custom backing options according to the finished application',
  },
  {
    slug: 'pvc-furniture-leather',
    name: 'PVC Furniture Leather',
    shortName: 'Furniture Leather',
    image: '/images/pvc-leather-color-card-y007.webp',
    gallery: [
      '/images/pvc-leather-color-card-y007.webp',
      '/images/pvc-leather-color-card-1015.webp',
      '/images/pvc-leather-sample-books-01.webp',
    ],
    summary:
      'PVC furniture leather supplied in practical constructions for seating, panels and coordinated furniture programs.',
    applications: ['Residential furniture', 'Hotel furniture', 'Office furniture', 'Decorative panels'],
    buyerFit: 'Furniture factories, project suppliers and regional distributors',
    texture: 'Modern, classic and application-specific grain options',
    backing: 'Matched to the furniture process and requested finished performance',
  },
  {
    slug: 'pvc-chair-leather',
    name: 'PVC Chair Leather',
    shortName: 'Chair Leather',
    image: '/images/pvc-leather-texture-neutral-01.webp',
    gallery: [
      '/images/pvc-leather-texture-neutral-01.webp',
      '/images/pvc-leather-color-card-288.webp',
      '/images/showroom-pvc-leather-hanging-samples-01.webp',
    ],
    summary:
      'PVC chair upholstery material for office, hospitality and general seating programs, available in matched colors and grains.',
    applications: ['Office chairs', 'Dining chairs', 'Hotel seating', 'Commercial seating'],
    buyerFit: 'Chair manufacturers, seating contractors and upholstery distributors',
    texture: 'Fine and medium upholstery grains with custom embossing support',
    backing: 'Configured for the required sewing, wrapping and upholstery process',
  },
  {
    slug: 'contract-upholstery-leather',
    name: 'Contract Upholstery Leather',
    shortName: 'Contract Upholstery',
    image: '/images/pvc-leather-closeup-premium-texture-01.webp',
    gallery: [
      '/images/pvc-leather-closeup-premium-texture-01.webp',
      '/images/vintage-pvc-leather-samples-01.webp',
      '/images/showroom-color-collection-wide-02.webp',
    ],
    summary:
      'Project-oriented upholstery constructions for hotels, offices and commercial interiors, developed from the buyer’s specification.',
    applications: ['Hotel seating', 'Office furniture', 'Commercial interiors', 'Interior upholstery'],
    buyerFit: 'Contract furniture manufacturers, project suppliers and hospitality buyers',
    texture: 'Project-selected grain, color and surface character',
    backing: 'Application-based development and sample matching available',
  },
  {
    slug: 'custom-pvc-leather',
    name: 'Custom PVC Leather',
    shortName: 'Custom PVC',
    image: '/images/pvc-leather-color-card-2211-2.webp',
    gallery: [
      '/images/pvc-leather-color-card-2211-2.webp',
      '/images/pvc-leather-color-card-display-01.webp',
      '/images/pvc-leather-sample-books-01.webp',
    ],
    summary:
      'Sample-matched PVC leather with adjustable thickness, color, embossing, backing and construction for repeat orders.',
    applications: ['OEM furniture programs', 'Color-matched collections', 'Special upholstery', 'Distributor ranges'],
    buyerFit: 'Importers and manufacturers with a target sample or written specification',
    texture: 'Customer sample matching or selected embossing',
    backing: 'Chosen according to target construction and application',
  },
]

export const getProduct = (slug: string) => products.find((product) => product.slug === slug)
