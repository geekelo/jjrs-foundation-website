import { Link } from 'react-router-dom'
import { IconUsers, IconArrow } from './Icons'
import { suiteCards, suiteImages, suiteJoinCta } from '../data/suite'
import { icons } from '../data/icons'
import './FeatureGrid.css'

export default function FeatureGrid() {
  return (
    <section className="features" id="suite" aria-labelledby="features-heading">
      <div className="container">
        <h2 id="features-heading" className="features__title">
          The JJRSF Suite
        </h2>
        <div className="features__grid">
          {suiteCards.map((card) => {
            const Icon = icons[card.icon]
            return (
              <article
                key={card.id}
                className={`feature-card ${card.featured ? 'feature-card--featured' : ''}`}
                id={card.id}
              >
                <div className="feature-card__icon" aria-hidden="true">
                  <Icon size={18} />
                </div>
                <h2 className="feature-card__title">{card.title}</h2>

                {card.collageKeys ? (
                  <div className="feature-card__collage">
                    {card.collageKeys.map((key) => (
                      <img key={key} src={suiteImages[key]} alt="" loading="lazy" />
                    ))}
                  </div>
                ) : (
                  <div className="feature-card__image">
                    <img src={suiteImages[card.imageKey]} alt="" loading="lazy" />
                  </div>
                )}

                <p className="feature-card__desc">{card.description}</p>
                <a href={card.href} className="feature-card__link">
                  {card.cta}
                  <IconArrow />
                </a>
              </article>
            )
          })}

          <aside className="feature-cta" id="involved">
            <div className="feature-cta__icon" aria-hidden="true">
              <IconUsers size={22} />
            </div>
            <h2>{suiteJoinCta.title}</h2>
            <p>{suiteJoinCta.description}</p>
            <Link to={suiteJoinCta.to} className="feature-card__link">
              {suiteJoinCta.cta}
              <IconArrow />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  )
}
