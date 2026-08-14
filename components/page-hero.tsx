import Image from 'next/image'
import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
  children?: ReactNode
}

export function PageHero({ eyebrow, title, description, image, imageAlt, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="page-hero-image" />
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </section>
  )
}
