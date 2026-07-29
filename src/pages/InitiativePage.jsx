import { Link, useParams } from 'react-router-dom'
import { IconArrow, IconHeart } from '../components/Icons'
import { getInitiativeBySlug, initiatives } from '../data/initiatives'
import { icons } from '../data/icons'
import './InitiativePage.css'

export default function InitiativePage() {
  const { slug } = useParams()
  const initiative = getInitiativeBySlug(slug)

  if (!initiative) {
    return (
      <div className="initiative initiative--missing">
        <div className="container">
          <h1>Initiative not found</h1>
          <p>The initiative you are looking for is not available.</p>
          <Link to="/get-involved#initiatives-heading" className="btn btn-primary">
            Back to initiatives
          </Link>
        </div>
      </div>
    )
  }

  const Icon = icons[initiative.icon]
  const otherInitiatives = initiatives.filter((item) => item.slug !== initiative.slug)

  return (
    <div className="initiative">
      <section className="initiative__hero">
        <div className="container initiative__hero-inner">
          <div className="initiative__hero-icon" aria-hidden="true">
            <Icon size={28} />
          </div>
          <div className="initiative__hero-copy">
            <p className="initiative__eyebrow">JJRSF Initiative</p>
            <h1>{initiative.title}</h1>
            <p>{initiative.description}</p>
            <div className="initiative__hero-actions">
              <Link to="/give" className="btn btn-primary">
                <IconHeart size={15} />
                GIVE/PARTNER
              </Link>
              <Link to="/get-involved#initiatives-heading" className="btn btn-outline">
                All initiatives
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="initiative__ambassador" aria-labelledby="ambassador-heading">
        <div className="container initiative__ambassador-inner">
          <div className="initiative__ambassador-photo">
            <img
              src={initiative.ambassador.photo}
              alt={initiative.ambassador.name}
              loading="lazy"
            />
          </div>
          <div className="initiative__ambassador-copy">
            <p className="initiative__eyebrow">Current Ambassador</p>
            <h2 id="ambassador-heading">{initiative.ambassador.name}</h2>
            <p className="initiative__ambassador-role">{initiative.ambassador.role}</p>
            <p>{initiative.ambassador.bio}</p>
          </div>
        </div>
      </section>

      <section className="initiative__impacts" aria-labelledby="impacts-heading">
        <div className="container">
          <div className="initiative__section-head">
            <h2 id="impacts-heading">Impacts</h2>
            <p>
              Track goals, timelines, achievements, and giving progress for this
              initiative.
            </p>
          </div>

          <div className="initiative__impact-list">
            {initiative.impacts.map((impact) => (
              <article key={impact.id} className="impact-card">
                <h3>{impact.goal}</h3>

                <dl className="impact-card__meta">
                  <div>
                    <dt>Date</dt>
                    <dd>{impact.date}</dd>
                  </div>
                  <div>
                    <dt>Duration</dt>
                    <dd>{impact.duration}</dd>
                  </div>
                  <div>
                    <dt>Financial budget</dt>
                    <dd>{impact.financialBudget}</dd>
                  </div>
                  <div>
                    <dt>Amount raised</dt>
                    <dd>{impact.amountRaised}</dd>
                  </div>
                  <div>
                    <dt>Ambassador in charge</dt>
                    <dd>{impact.ambassadorInCharge}</dd>
                  </div>
                </dl>

                <div className="impact-card__block">
                  <h4>Description</h4>
                  <p>{impact.description}</p>
                </div>

                <div className="impact-card__block">
                  <h4>Achievements</h4>
                  <ul>
                    {impact.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="impact-card__block">
                  <h4>Credits / Acknowledgement</h4>
                  <p>{impact.credits}</p>
                </div>

                <Link to="/give" className="impact-card__link">
                  Give toward this impact
                  <IconArrow />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {otherInitiatives.length > 0 ? (
        <section className="initiative__more" aria-label="Other initiatives">
          <div className="container">
            <h2>Explore other initiatives</h2>
            <div className="initiative__more-grid">
              {otherInitiatives.map((item) => {
                const OtherIcon = icons[item.icon]
                return (
                  <Link
                    key={item.slug}
                    to={`/initiatives/${item.slug}`}
                    className="initiative-mini"
                  >
                    <span className="initiative-mini__icon" aria-hidden="true">
                      <OtherIcon size={18} />
                    </span>
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.shortDescription}</small>
                    </span>
                    <IconArrow size={14} />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  )
}
