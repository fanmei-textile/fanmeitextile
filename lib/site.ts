export const site = {
  name: 'Fanmei Textile',
  legalName: 'HAINING FANMEI TEXTILE TECHNOLOGY CO., LTD.',
  url: 'https://www.fanmeitextile.com',
  email: 'wt657200@gmail.com',
  whatsappDisplay: '+86 176 0870 2004',
  whatsappNumber: '8617608702004',
  location: 'Haining, Zhejiang, China',
  description:
    'Factory-direct PVC synthetic leather for sofas, chairs, hotel furniture and commercial upholstery.',
} as const

export const whatsappUrl = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`

export const defaultWhatsAppMessage =
  'Hello Fanmei Textile, I am interested in PVC synthetic leather for furniture upholstery. Please share suitable specifications and samples.'
