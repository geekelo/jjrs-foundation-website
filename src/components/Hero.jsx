import { useEffect, useState } from 'react'
import { IconUsers, IconHeart } from './Icons'
import slide1 from '../assets/hero/slide-1.jpg'
import slide2 from '../assets/hero/slide-2.jpg'
import slide3 from '../assets/hero/slide-3.jpg'
import slide4 from '../assets/hero/slide-4.jpg'
import slide5 from '../assets/hero/slide-5.jpg'
import './Hero.css'

const slides = [
  {
    src: slide1,
    alt: 'Young worshippers lifting their hands in praise',
  },
  {
    src: slide2,
    alt: 'Women listening attentively during a foundation gathering',
  },
  {
    src: slide3,
    alt: 'Speaker sharing from the stage at a JJRS event',
  },
  {
    src: slide4,
    alt: 'Graduates and partners gathered on stage for a group photo',
  },
  {
    src: slide5,
    alt: 'Congregation seated attentively during a JJRS Foundation gathering',
  },
]

const INTERVAL_MS = 5000

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, INTERVAL_MS)

    return () => window.clearInterval(id)
  }, [active])

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow reveal">Welcome to JJRS Foundation</p>
          <h1 id="hero-heading" className="hero__title reveal reveal-delay-1">
            We are driven to ensure that people fulfill their God-given purpose
            by pulling unbelievers out of the pit of sin which is unbelief in
            Jesus.
          </h1>
          <p className="hero__lead reveal reveal-delay-2">
            We aim at lifting believers out of the pit of religion and self
            effort in order for all to be saved and come to the knowledge of the
            truth.
          </p>
          <div className="hero__actions reveal reveal-delay-3">
            <a href="#involved" className="btn btn-primary">
              <IconUsers size={16} />
              Get Involved
            </a>
            <a href="#donate" className="btn btn-outline">
              <IconHeart size={15} />
              Give / Donate
            </a>
          </div>
          <blockquote className="hero__quote reveal reveal-delay-4">
            <p>
              “Rescue those being led away to death; hold back those staggering
              toward slaughter.”
            </p>
            <cite>— Proverbs 24:11</cite>
          </blockquote>
        </div>

        <div className="hero__media reveal reveal-delay-2">
          <div
            className="hero__slider"
            aria-roledescription="carousel"
            aria-label="JJRS Foundation moments"
          >
            {slides.map((slide, index) => (
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
              {slides.map((slide, index) => (
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
