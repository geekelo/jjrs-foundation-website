import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IconUsers, IconHeart } from './Icons'
import { heroSlides, HERO_SLIDE_INTERVAL_MS, heroCopy } from '../data/hero'
import './Hero.css'

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length)
    }, HERO_SLIDE_INTERVAL_MS)

    return () => window.clearInterval(id)
  }, [active])

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow reveal">{heroCopy.eyebrow}</p>
          <h1 id="hero-heading" className="hero__title reveal reveal-delay-1">
            {heroCopy.title}
          </h1>
          <p className="hero__lead reveal reveal-delay-2">{heroCopy.lead}</p>
          <div className="hero__actions reveal reveal-delay-3">
            <Link to="/get-involved" className="btn btn-primary">
              <IconUsers size={16} />
              Get Involved
            </Link>
            <Link to="/give" className="btn btn-outline">
              <IconHeart size={15} />
              GIVE/PARTNER
            </Link>
          </div>
          <blockquote className="hero__quote reveal reveal-delay-4">
            <p>{heroCopy.quote}</p>
            <cite>{heroCopy.citation}</cite>
          </blockquote>
        </div>

        <div className="hero__media reveal reveal-delay-2">
          <div
            className="hero__slider"
            aria-roledescription="carousel"
            aria-label="JJRS Foundation moments"
          >
            {heroSlides.map((slide, index) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                width="1024"
                height="682"
                className={`hero__slide ${index === active ? 'hero__slide--active' : ''}`}
                aria-hidden={index !== active}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            ))}

            <div className="hero__dots" role="tablist" aria-label="Slide controls">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  role="tab"
                  className={`hero__dot ${index === active ? 'hero__dot--active' : ''}`}
                  aria-label={`Show slide ${index + 1}`}
                  aria-selected={index === active}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
