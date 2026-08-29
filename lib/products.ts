export type ProductFaq = { question: string; answer: string }

export type Product = {
  slug: string
  name: string
  shortName: string
  image: string
  gallery: string[]
  summary: string
  applications: string[]
  buyerFit: string
  purchaseFocus: string
  texture: string
  backing: string
  seoTitle: string
  metaDescription: string
  quoteChecks: string[]
  faqs: ProductFaq[]
}

export const products: Product[] = [
  {
    slug: 'pvc-sofa-leather',
    name: 'PVC Sofa Leather',
    shortName: 'Sofa Leather',
    image: '/images/pvc-leather-color-rolls-01.webp',
    gallery: ['/images/pvc-leather-color-rolls-01.webp', '/images/pvc-leather-color-card-2211.webp', '/images/showroom-color-collection-wide-01.webp'],
    summary: 'PVC leather developed for sofa and recliner production, with selectable grains, colors, thicknesses and backing constructions.',
    applications: ['Sofas', 'Recliners', 'Sectional seating', 'Upholstered furniture'],
    buyerFit: 'Sofa factories, furniture wholesalers and upholstery material distributors',
    purchaseFocus: 'For sofa manufacturing, buyers normally confirm hand feel, grain, color continuity, backing, thickness and sewing or wrapping behavior before bulk ordering.',
    texture: 'Fine grain, medium grain, vintage and customer-sample embossing',
    backing: 'Knitted, woven or non-woven options selected for the target sofa construction',
    seoTitle: 'PVC Sofa Leather Manufacturer',
    metaDescription: 'PVC sofa leather manufacturer in China for sofas and recliners. Custom color, embossing, backing and 0.6–2.0 mm thickness. Request an FOB quote.',
    quoteChecks: ['Sofa or recliner application', 'Target thickness and weight', 'Front, back and side photos or physical sample', 'Color, grain and backing', 'Quantity per color'],
    faqs: [
      { question: 'What thickness is available for PVC sofa leather?', answer: 'Fanmei can discuss PVC sofa leather from 0.6 to 2.0 mm. The suitable construction depends on the sofa application, backing, hand feel and target weight.' },
      { question: 'Can Fanmei develop sofa leather from my sample?', answer: 'Yes. A physical sample can be evaluated for surface, embossing, thickness, weight, backing, color and construction before sample development and quotation.' },
    ],
  },
  {
    slug: 'pvc-upholstery-leather',
    name: 'PVC Upholstery Leather',
    shortName: 'Upholstery Leather',
    image: '/images/showroom-pvc-leather-hanging-samples-02.webp',
    gallery: ['/images/showroom-pvc-leather-hanging-samples-02.webp', '/images/pvc-leather-color-card-display-01.webp', '/images/pvc-leather-color-card-815.webp'],
    summary: 'PVC synthetic upholstery leather for furniture and interior applications where repeatable color and construction matter.',
    applications: ['Furniture upholstery', 'Hotel furniture', 'Wall panels', 'Soft interior decoration'],
    buyerFit: 'Upholstery manufacturers, contract furniture suppliers and importers',
    purchaseFocus: 'Upholstery programs often need one construction across several furniture shapes. Confirm the application, wrapping method, surface, backing and performance target before sampling.',
    texture: 'Multiple furniture grains with customer color and embossing development',
    backing: 'Knitted, woven and non-woven options according to the finished application',
    seoTitle: 'PVC Upholstery Leather Manufacturer',
    metaDescription: 'Factory-direct PVC upholstery leather for furniture, hotel seating and interior upholstery. Custom thickness, grain, color and backing from China.',
    quoteChecks: ['Finished furniture application', 'Required surface and hand feel', 'Thickness or target gsm', 'Backing construction', 'Order quantity and timing'],
    faqs: [
      { question: 'Which applications use PVC upholstery leather?', answer: 'Typical uses include sofa and chair upholstery, hotel furniture, wall panels and other interior upholstery. The construction is selected for the finished application.' },
      { question: 'Can color and embossing be customized?', answer: 'Yes. Color and embossing can be developed from a customer sample or confirmed requirement. Final appearance should be approved through a physical sample.' },
    ],
  },
  {
    slug: 'pvc-furniture-leather',
    name: 'PVC Furniture Leather',
    shortName: 'Furniture Leather',
    image: '/images/pvc-leather-color-card-y007.webp',
    gallery: ['/images/pvc-leather-color-card-y007.webp', '/images/pvc-leather-color-card-1015.webp', '/images/pvc-leather-sample-books-01.webp'],
    summary: 'PVC leather supplied in practical constructions for seating, furniture panels and coordinated furniture programs.',
    applications: ['Residential furniture', 'Hotel furniture', 'Office furniture', 'Decorative panels'],
    buyerFit: 'Furniture factories, project suppliers and regional distributors',
    purchaseFocus: 'Furniture manufacturers should align the material with cutting, sewing, wrapping, gluing and finished-product appearance. A target sample helps shorten evaluation.',
    texture: 'Modern, classic and application-specific grain options',
    backing: 'Matched to the furniture process and requested finished construction',
    seoTitle: 'PVC Leather for Furniture Upholstery',
    metaDescription: 'PVC leather for furniture upholstery, seating and panels. Factory supply with custom color, grain, thickness and backing for OEM furniture programs.',
    quoteChecks: ['Furniture type and upholstery process', 'Target width, thickness and weight', 'Surface grain and color', 'Backing requirement', 'Estimated repeat volume'],
    faqs: [
      { question: 'Is this PVC leather suitable for furniture factories?', answer: 'It is developed for furniture applications, but the exact surface, thickness, backing and construction should be confirmed against the factory process and finished product.' },
      { question: 'What information is needed for a furniture leather quote?', answer: 'Share the furniture application, thickness or weight, color and grain, backing, quantity and a reference sample when available.' },
    ],
  },
  {
    slug: 'pvc-chair-leather',
    name: 'PVC Chair Leather',
    shortName: 'Chair Leather',
    image: '/images/pvc-leather-texture-neutral-01.webp',
    gallery: ['/images/pvc-leather-texture-neutral-01.webp', '/images/pvc-leather-color-card-288.webp', '/images/showroom-pvc-leather-hanging-samples-01.webp'],
    summary: 'PVC chair upholstery material for office, hospitality and general seating programs, available in matched colors and grains.',
    applications: ['Office chairs', 'Dining chairs', 'Hotel seating', 'Commercial seating'],
    buyerFit: 'Chair manufacturers, seating contractors and upholstery distributors',
    purchaseFocus: 'Chair programs may involve tight curves, sewing and repeated color production. Buyers should confirm flexibility, backing, surface and target performance through samples.',
    texture: 'Fine and medium upholstery grains with custom embossing support',
    backing: 'Configured for the required sewing, wrapping and upholstery process',
    seoTitle: 'PVC Chair Leather Manufacturer',
    metaDescription: 'PVC chair leather for office, dining, hotel and commercial seating. Custom color, grain, backing and thickness from a China manufacturer.',
    quoteChecks: ['Chair type and upholstery method', 'Required flexibility and hand feel', 'Color and surface grain', 'Backing and thickness', 'Quantity per color'],
    faqs: [
      { question: 'Can PVC chair leather be supplied in custom colors?', answer: 'Yes. Color can be selected from available references or developed from a customer sample, subject to physical sample approval.' },
      { question: 'Which backing should I choose for chair upholstery?', answer: 'The backing depends on sewing, wrapping, strength and hand-feel requirements. Knitted, woven and non-woven options can be discussed during specification matching.' },
    ],
  },
  {
    slug: 'contract-upholstery-leather',
    name: 'Contract Upholstery Leather',
    shortName: 'Contract Upholstery',
    image: '/images/pvc-leather-closeup-premium-texture-01.webp',
    gallery: ['/images/pvc-leather-closeup-premium-texture-01.webp', '/images/vintage-pvc-leather-samples-01.webp', '/images/showroom-color-collection-wide-02.webp'],
    summary: 'Project-oriented upholstery constructions for hotels, offices and commercial interiors, developed from the buyer’s specification.',
    applications: ['Hotel seating', 'Office furniture', 'Commercial interiors', 'Interior upholstery'],
    buyerFit: 'Contract furniture manufacturers, project suppliers and hospitality buyers',
    purchaseFocus: 'Contract projects should state the application and any required performance standard or test method before development. Availability is confirmed by specification, not assumed from appearance.',
    texture: 'Project-selected grain, color and surface character',
    backing: 'Application-based knitted, woven or non-woven construction',
    seoTitle: 'Contract PVC Upholstery Leather',
    metaDescription: 'Contract PVC upholstery leather for hotel, office and commercial furniture projects. Requirement-based color, backing, embossing and performance options.',
    quoteChecks: ['Project and furniture application', 'Required standard or test method', 'Target construction and backing', 'Color and embossing reference', 'Project quantity and schedule'],
    faqs: [
      { question: 'Can performance functions be added for contract projects?', answer: 'Flame-retardant, stain-resistant, easy-clean and anti-mildew options can be discussed. The required standard, test method and target result must be stated and confirmed for the selected construction.' },
      { question: 'Does this page claim a certification?', answer: 'No. Certifications and test compliance are only confirmed when supported by the selected product specification and relevant documentation.' },
    ],
  },
  {
    slug: 'custom-pvc-leather',
    name: 'Custom PVC Leather',
    shortName: 'Custom PVC',
    image: '/images/pvc-leather-color-card-2211-2.webp',
    gallery: ['/images/pvc-leather-color-card-2211-2.webp', '/images/pvc-leather-color-card-display-01.webp', '/images/pvc-leather-sample-books-01.webp'],
    summary: 'Sample-based PVC leather development with adjustable thickness, color, embossing, backing and construction for repeat orders.',
    applications: ['OEM furniture programs', 'Color-matched collections', 'Special upholstery', 'Distributor ranges'],
    buyerFit: 'Importers and manufacturers with a target sample or written specification',
    purchaseFocus: 'The most useful starting point is a physical target sample plus application, thickness, weight and quantity. Fanmei evaluates the sample before proposing a construction and FOB quotation.',
    texture: 'Developed from customer sample evaluation or selected embossing',
    backing: 'Knitted, woven or non-woven backing selected for the target construction',
    seoTitle: 'Custom PVC Leather Manufacturer',
    metaDescription: 'Custom PVC leather developed from buyer samples and requirements. Match color, embossing, thickness, gsm and backing for OEM furniture production.',
    quoteChecks: ['Front, back and side sample photos', 'Physical sample when available', 'Thickness and gsm or weight', 'Application and backing', 'Quantity and target timing'],
    faqs: [
      { question: 'Can Fanmei copy my existing PVC leather?', answer: 'Fanmei can evaluate and develop according to a customer sample. Exact feasibility is confirmed after reviewing the physical sample and required specification; a 100% identical result is not promised.' },
      { question: 'What sample information gives the fastest quotation?', answer: 'Provide front, back and side photos, thickness, gsm or weight, backing, application, color and estimated quantity. A physical sample allows a more complete evaluation.' },
    ],
  },
  {
    slug: 'heavy-duty-pvc-leather',
    name: 'Heavy Duty PVC Leather',
    shortName: 'Heavy Duty PVC',
    image: '/images/pvc-leather-closeup-premium-texture-01.webp',
    gallery: ['/images/pvc-leather-closeup-premium-texture-01.webp', '/images/pvc-leather-color-rolls-01.webp', '/images/factory-roll-production-05.webp'],
    summary: 'Requirement-based PVC upholstery leather for buyers seeking a heavier or more robust construction for furniture and commercial seating.',
    applications: ['Commercial seating', 'Recliners', 'Hotel furniture', 'High-use furniture'],
    buyerFit: 'Manufacturers and distributors with a defined thickness, weight, backing or target sample',
    purchaseFocus: '“Heavy duty” must be translated into measurable requirements. Share the target thickness, gsm, backing, application and any test method instead of relying on the label alone.',
    texture: 'Furniture grains selected or developed from a physical sample',
    backing: 'Backing and total construction selected around the target weight and use',
    seoTitle: 'Heavy Duty PVC Upholstery Leather',
    metaDescription: 'Heavy duty PVC upholstery leather developed to buyer thickness, gsm, backing and application requirements. Factory-direct sample matching and FOB quotation.',
    quoteChecks: ['Target thickness and gsm', 'Furniture use and expected handling', 'Backing type', 'Physical reference sample', 'Required test method, if any'],
    faqs: [
      { question: 'What makes PVC leather heavy duty?', answer: 'There is no single universal construction. Buyers should define thickness, weight, backing, application and any performance test so the factory can evaluate a suitable construction.' },
      { question: 'Can heavy duty PVC leather be made from a sample?', answer: 'Yes. Fanmei can evaluate a physical sample for surface, thickness, weight, backing and construction before development and quotation.' },
    ],
  },
  {
    slug: 'easy-clean-pvc-leather',
    name: 'Easy Clean PVC Leather',
    shortName: 'Easy Clean PVC',
    image: '/images/pvc-leather-color-card-815.webp',
    gallery: ['/images/pvc-leather-color-card-815.webp', '/images/pvc-leather-texture-neutral-01.webp', '/images/showroom-color-collection-wide-02.webp'],
    summary: 'PVC sofa and furniture leather with easy-clean or stain-resistant construction options developed to the buyer’s stated requirement.',
    applications: ['Family sofas', 'Dining chairs', 'Hotel furniture', 'Office seating'],
    buyerFit: 'Furniture buyers who can state the cleaning expectation, application and any required evaluation method',
    purchaseFocus: 'Cleaning performance depends on the selected surface and evaluation method. State the expected contaminant, cleaning method and target standard when these are important.',
    texture: 'Furniture upholstery grains with custom color development',
    backing: 'Knitted, woven or non-woven options according to the furniture application',
    seoTitle: 'Easy Clean PVC Sofa Leather',
    metaDescription: 'Easy-clean PVC sofa leather and stain-resistant upholstery options developed for furniture applications. Confirm cleaning target, color, backing and thickness.',
    quoteChecks: ['Furniture application', 'Expected cleaning or stain requirement', 'Target test method, if applicable', 'Thickness, color and backing', 'Quantity per color'],
    faqs: [
      { question: 'Is every PVC leather automatically easy to clean?', answer: 'No. Cleaning expectations vary by surface, contaminant and cleaning method. The buyer should state the target requirement so the suitable construction can be discussed.' },
      { question: 'Can easy-clean performance be customized?', answer: 'Easy-clean and stain-resistant options can be developed by requirement. Final performance must be confirmed for the selected sample and agreed evaluation method.' },
    ],
  },
  {
    slug: 'flame-retardant-pvc-leather',
    name: 'Flame Retardant PVC Leather',
    shortName: 'Flame Retardant PVC',
    image: '/images/showroom-color-collection-wide-01.webp',
    gallery: ['/images/showroom-color-collection-wide-01.webp', '/images/pvc-leather-color-card-display-01.webp', '/images/factory-coating-line-02.webp'],
    summary: 'Flame-retardant PVC upholstery construction options for furniture projects with a stated standard, test method and target requirement.',
    applications: ['Hotel furniture', 'Contract seating', 'Office furniture', 'Interior upholstery'],
    buyerFit: 'Project buyers who provide the required flame test method or written performance specification',
    purchaseFocus: 'Flame-retardant requirements are project-specific. The buyer must provide the standard, test method, target result and final application before a construction can be evaluated.',
    texture: 'Surface grain and color developed separately from the confirmed performance construction',
    backing: 'Backing selected together with the complete construction and required test method',
    seoTitle: 'Flame Retardant PVC Upholstery Leather',
    metaDescription: 'Flame-retardant PVC upholstery leather options for furniture projects. Provide the required standard, test method, application, backing and quantity.',
    quoteChecks: ['Required standard and test method', 'Furniture or interior application', 'Complete construction and backing', 'Thickness, color and grain', 'Project quantity and timing'],
    faqs: [
      { question: 'Which flame-retardant standard does this product meet?', answer: 'No standard is claimed by default. The buyer must provide the required standard and test method, and compliance can only be confirmed for the selected construction with appropriate testing or documentation.' },
      { question: 'Can flame-retardant PVC leather be customized?', answer: 'Requirement-based flame-retardant construction, color, embossing, thickness and backing can be discussed. Feasibility is confirmed after the complete project requirement is reviewed.' },
    ],
  },
]

export const getProduct = (slug: string) => products.find((product) => product.slug === slug)
