export type SeriesSpecification = { label: string; value: string }
export type SeriesVariant = { name: string; specifications: SeriesSpecification[] }

export type RealProductSeries = {
  slug: string
  name: string
  image: string
  imageAlt: string
  summary: string
  surface: string
  colorCodes: string[]
  specifications: SeriesSpecification[]
  variants?: SeriesVariant[]
  specificationNote?: string
}

const numberedCodes = (prefix: string, start: number, end: number, pad = 0) =>
  Array.from({ length: end - start + 1 }, (_, index) => `${prefix}${String(start + index).padStart(pad, '0')}`)

export const realProductSeries: RealProductSeries[] = [
  {
    slug: 'p62', name: 'P62 PVC Upholstery Leather Series', image: '/images/series/p62-pvc-upholstery-leather-color-card.jpg',
    imageAlt: 'P62 PVC upholstery leather real color card with multiple sofa and furniture colors',
    summary: 'A real Fanmei PVC upholstery leather color card supplied for sofa and furniture material selection.',
    surface: 'Textured leather-grain surfaces shown in the supplied color card.', colorCodes: [],
    specifications: [{ label: 'Weight', value: '340 gsm' }, { label: 'Thickness', value: '1.0 mm' }, { label: 'Width', value: '1400 mm' }, { label: 'Backing', value: '160g single-sided fleece' }],
  },
  {
    slug: '9001-4001', name: '9001 / 4001 PVC Leather Series', image: '/images/series/9001-4001-pvc-leather-color-card.jpg',
    imageAlt: '9001 and 4001 PVC upholstery leather shared real color card',
    summary: 'A shared real color-card reference for Fanmei 9001 and 4001 PVC upholstery leather series.',
    surface: 'Fine leather-grain surfaces shown in the supplied color card.', colorCodes: [],
    specifications: [{ label: 'Weight', value: '340 gsm' }, { label: 'Thickness', value: '1.0 mm' }, { label: 'Width', value: '1400 mm' }, { label: 'Backing', value: '160g single-sided fleece' }],
    specificationNote: 'The current reference does not reliably separate individual colors between 9001 and 4001, so the color card remains shared.',
  },
  {
    slug: '1015', name: '1015 PVC Leather Series', image: '/images/series/1015-pvc-leather-color-card.jpg', imageAlt: '1015 PVC upholstery leather real color card numbered 1015-1 to 1015-13',
    summary: 'Fanmei 1015 PVC leather series shown with thirteen confirmed color references.', surface: 'Pebbled leather-grain embossing visible in the supplied color card.',
    colorCodes: numberedCodes('1015-', 1, 13), specifications: [], specificationNote: 'Custom specification available. Contact us for exact thickness / GSM / backing.',
  },
  {
    slug: '2211', name: '2211 PVC Leather Series', image: '/images/series/2211-pvc-leather-color-card.jpg', imageAlt: '2211 PVC upholstery leather real color card numbered 2211-1 to 2211-21',
    summary: 'Fanmei 2211 PVC leather series shown with twenty-one confirmed color references.', surface: 'Leather-grain surface visible in the supplied color card.',
    colorCodes: numberedCodes('2211-', 1, 21), specifications: [], specificationNote: 'Custom specification available. Contact us for exact thickness / GSM / backing.',
  },
  {
    slug: '815', name: '815 PVC Leather Series', image: '/images/series/815-pvc-leather-color-card.jpg', imageAlt: '815 PVC upholstery leather real color card numbered 815-1 to 815-12',
    summary: 'Fanmei 815 PVC leather series shown with twelve confirmed color references.', surface: 'Pebbled leather-grain embossing visible in the supplied color card.',
    colorCodes: numberedCodes('815-', 1, 12), specifications: [], specificationNote: 'Custom specification available. Contact us for exact thickness / GSM / backing.',
  },
  {
    slug: 'y007', name: 'Y007 PVC Leather Series', image: '/images/series/y007-pvc-leather-color-card.jpg', imageAlt: 'Y007 PVC upholstery leather real color card numbered Y007-01 to Y007-38',
    summary: 'Fanmei Y007 PVC leather series shown with thirty-eight confirmed color references.', surface: 'Leather-grain surface visible in the supplied color card.',
    colorCodes: numberedCodes('Y007-', 1, 38, 2), specifications: [], specificationNote: 'Custom specification available. Contact us for exact thickness / GSM / backing.',
  },
  {
    slug: '288', name: '288 PVC Leather Series', image: '/images/series/288-pvc-leather-color-card.jpg', imageAlt: '288 PVC upholstery leather real color card numbered 288-1 to 288-13',
    summary: 'Fanmei 288 PVC leather series shown with thirteen confirmed color references.', surface: 'Pebbled leather-grain embossing visible in the supplied color card.',
    colorCodes: numberedCodes('288-', 1, 13), specifications: [], specificationNote: 'Custom specification available. Contact us for exact thickness / GSM / backing.',
  },
  {
    slug: 'qy2688', name: 'QY2688 PVC Upholstery Leather Series', image: '/images/series/qy2688-pvc-leather-color-card.jpg', imageAlt: 'QY2688 PVC upholstery leather real color card and verified A and C specifications',
    summary: 'Fanmei QY2688 upholstery leather series with fifteen confirmed color references and two verified construction options.', surface: 'Fine pebbled leather-grain embossing visible in the supplied color card.',
    colorCodes: numberedCodes('QY2688-', 1, 15), specifications: [], variants: [
      { name: 'QY2688 A', specifications: [{ label: 'Width', value: '140–142 cm' }, { label: 'Weight', value: '340 gsm ±5%' }, { label: 'Thickness', value: '0.9 mm' }] },
      { name: 'QY2688 C', specifications: [{ label: 'Width', value: '140–142 cm' }, { label: 'Weight', value: '440 gsm ±5%' }, { label: 'Thickness', value: '1.4–1.5 mm' }] },
    ],
  },
  {
    slug: 'sl2788', name: 'SL2788 PVC Upholstery Leather Series', image: '/images/series/sl2788-pvc-leather-color-card.jpg', imageAlt: 'SL2788 PVC upholstery leather real color card with 0.9 to 1.0 mm and 2.0 mm specifications',
    summary: 'Fanmei SL2788 upholstery leather series with fifteen confirmed color references and verified standard and thick constructions.', surface: 'Fine leather-grain embossing visible in the supplied color card.',
    colorCodes: numberedCodes('SL2788-', 1, 15), specifications: [], variants: [
      { name: 'SL2788 B', specifications: [{ label: 'Width', value: '140–142 cm' }, { label: 'Weight', value: '340 gsm ±5%' }, { label: 'Thickness', value: '0.9–1.0 mm' }] },
      { name: 'Verified thick construction', specifications: [{ label: 'Width', value: '140–142 cm' }, { label: 'Weight', value: '540 gsm ±5%' }, { label: 'Thickness', value: '2.0 mm' }] },
    ], specificationNote: 'The thick construction is listed without a sub-model letter because the supplied instruction does not confirm that letter.',
  },
  {
    slug: 'ly2888', name: 'LY2888 PVC Upholstery Leather Series', image: '/images/series/ly2888-pvc-leather-color-card.jpg', imageAlt: 'LY2888 PVC upholstery leather real color card and verified B and C specifications',
    summary: 'Fanmei LY2888 upholstery leather series with fifteen confirmed color references and two verified construction options.', surface: 'Fine leather-grain embossing visible in the supplied color card.',
    colorCodes: numberedCodes('LY2888-', 1, 15), specifications: [], variants: [
      { name: 'LY2888 B', specifications: [{ label: 'Width', value: '140–142 cm' }, { label: 'Weight', value: '340 gsm ±5%' }, { label: 'Thickness', value: '0.9 mm' }] },
      { name: 'LY2888 C', specifications: [{ label: 'Width', value: '140–142 cm' }, { label: 'Weight', value: '540 gsm ±5%' }, { label: 'Thickness', value: '2.0 mm' }] },
    ],
  },
]

export const getRealProductSeries = (slug: string) => realProductSeries.find((series) => series.slug === slug)
