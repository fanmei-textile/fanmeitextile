import Image from 'next/image'

const products = [
  {
    name: 'PVC Sofa Leather',
    image: '/images/pvc-leather-color-rolls-01.webp',
    text: 'Durable PVC leather for sofas, recliners and furniture upholstery with stable color and soft hand feel.'
  },
  {
    name: 'PVC Upholstery Leather',
    image: '/images/showroom-pvc-leather-hanging-samples-02.webp',
    text: 'Wide color and grain options for office chairs, hotel furniture, wall panels and interior decoration.'
  },
  {
    name: 'Cat Scratch Leather',
    image: '/images/pvc-leather-closeup-premium-texture-01.webp',
    text: 'Textured synthetic leather designed for furniture applications requiring better surface resistance.'
  },
  {
    name: 'Eco Leather',
    image: '/images/pvc-leather-color-card-y007.webp',
    text: 'Practical synthetic leather material for modern furniture, decoration and commercial interiors.'
  },
  {
    name: 'Vintage Leather',
    image: '/images/vintage-pvc-leather-samples-01.webp',
    text: 'Classic vintage surface effect for sofas, chairs, cafes, restaurants and decorative furniture.'
  }
]

const factoryImages = [
  '/images/factory-production-line-01.webp',
  '/images/factory-coating-line-02.webp',
  '/images/factory-equipment-03.webp',
  '/images/factory-roll-production-05.webp'
]

const gallery = [
  '/images/showroom-color-collection-wide-01.webp',
  '/images/showroom-color-collection-wide-02.webp',
  '/images/pvc-leather-color-card-display-01.webp',
  '/images/pvc-leather-color-card-2211.webp',
  '/images/pvc-leather-color-card-288.webp',
  '/images/pvc-leather-color-card-815.webp'
]

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="brand">Fanmei Textile</div>
        <nav>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#factory">Factory</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <Image src="/images/fanmei-office-reception-02.webp" alt="Fanmei Textile showroom and office" fill priority className="heroImg" />
        <div className="overlay" />
        <div className="heroContent">
          <p className="eyebrow">Haining, Zhejiang, China</p>
          <h1>PVC Synthetic Leather Manufacturer</h1>
          <p className="sub">Factory direct PVC leather solutions for sofas, furniture, hotels, office chairs and interior decoration.</p>
          <div className="buttons">
            <a className="btn primary" href="#products">View Products</a>
            <a className="btn secondary" href="#contact">Contact Us</a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div><strong>2,000,000m</strong><span>Monthly Capacity</span></div>
        <div><strong>OEM/ODM</strong><span>Custom Support</span></div>
        <div><strong>300+</strong><span>Color Options</span></div>
        <div><strong>Factory</strong><span>Direct Supply</span></div>
      </section>

      <section id="about" className="section twoCol">
        <div>
          <p className="eyebrow dark">Company Introduction</p>
          <h2>Haining Fanmei Textile Technology Co., Ltd.</h2>
          <p>
            Fanmei Textile is a PVC synthetic leather manufacturer located in Haining, Zhejiang, China. We supply PVC sofa leather, upholstery leather, cat scratch leather, eco leather and vintage leather for furniture manufacturers, hotel projects, office chair factories and interior decoration companies.
          </p>
          <p>
            With stable production capacity and rich color selections, we support OEM/ODM requirements, sample development and factory direct supply for overseas customers.
          </p>
        </div>
        <div className="imageCard">
          <Image src="/images/fanmei-company-building-sign-02.webp" alt="Haining Fanmei Textile company building" width={900} height={650} />
        </div>
      </section>

      <section id="products" className="section gray">
        <div className="centerTitle">
          <p className="eyebrow dark">Product Details</p>
          <h2>Main Product Series</h2>
          <p>Simple, practical and reliable PVC leather materials for furniture and decoration applications.</p>
        </div>
        <div className="productGrid">
          {products.map((p) => (
            <article className="product" key={p.name}>
              <Image src={p.image} alt={p.name} width={700} height={520} />
              <div>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <span>Applications: sofa, furniture, office chair, hotel, decoration</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="centerTitle">
          <p className="eyebrow dark">Color Collection</p>
          <h2>Rich Colors & Surface Textures</h2>
          <p>Color matching and sample development are available according to customer requirements.</p>
        </div>
        <div className="gallery">
          {gallery.map((src, i) => <Image key={src} src={src} alt={`PVC leather color collection ${i + 1}`} width={700} height={520} />)}
        </div>
      </section>

      <section id="factory" className="section darkSection">
        <div className="centerTitle light">
          <p className="eyebrow">Factory Strength</p>
          <h2>Production Lines & Stable Supply</h2>
          <p>Real factory photos showing production equipment, coating lines and roll material processing.</p>
        </div>
        <div className="factoryGrid">
          {factoryImages.map((src, i) => <Image key={src} src={src} alt={`Fanmei factory production line ${i + 1}`} width={800} height={560} />)}
        </div>
      </section>

      <section id="contact" className="section contact">
        <div>
          <p className="eyebrow dark">Contact Us</p>
          <h2>Request Samples or Product Details</h2>
          <p>Tell us your required application, color, thickness, backing and quantity. Our team will reply with suitable product options.</p>
          <ul className="contactList">
            <li><strong>Email:</strong> wt657200@gmail.com</li>
            <li><strong>WhatsApp:</strong> +86 176 0870 2004</li>
            <li><strong>Location:</strong> Haining, Zhejiang, China</li>
          </ul>
        </div>
        <form className="form" action="mailto:wt657200@gmail.com" method="post" encType="text/plain">
          <input name="name" placeholder="Your Name" />
          <input name="company" placeholder="Company" />
          <input name="email" placeholder="Email" />
          <input name="whatsapp" placeholder="WhatsApp" />
          <textarea name="message" placeholder="Product, color, quantity and application" />
          <button type="submit">Send Inquiry</button>
        </form>
      </section>

      <a
  className="whatsapp"
  href="https://wa.me/8617608702004?text=Hello%20Fanmei%20Textile,%20I%20am%20interested%20in%20your%20PVC%20synthetic%20leather."
  target="_blank"
  rel="noreferrer"
>
  WhatsApp
</a>

      <footer>
        <strong>Fanmei Textile</strong>
        <span>© 2026 Haining Fanmei Textile Technology Co., Ltd. All rights reserved.</span>
      </footer>
    </main>
  )
}
