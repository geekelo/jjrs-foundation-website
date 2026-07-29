import { Link } from 'react-router-dom'
import {
  IconArrow,
  IconBriefcase,
  IconDiamond,
  IconEye,
  IconHeartOutline,
  IconLightbulb,
  IconTarget,
  IconUsers,
} from '../components/Icons'
import GetInvolvedIcon from '../components/GetInvolvedIcon'
import {
  supportAims,
  socialOutlets,
  departmentNames,
  aboutCopy,
  aboutPillars,
  briefHistory,
} from '../data/getInvolved'
import { initiatives } from '../data/initiatives'
import { aboutPhotos, historyBackground, pillarsBackground } from '../data/media'
import { icons } from '../data/icons'
import './GetInvolvedPage.css'

const pillarIcons = {
  eye: IconEye,
  target: IconTarget,
  heart: IconHeartOutline,
  users: IconUsers,
  diamond: IconDiamond,
}

export default function GetInvolvedPage() {
  return (
    <div className="involved">
      <section className="involved__hero">
        <div className="container involved__hero-inner">
          <div className="involved__hero-icon" aria-hidden="true">
            <GetInvolvedIcon />
          </div>
          <div className="involved__hero-copy">
            <p className="involved__eyebrow">Join the mission</p>
            <h1>Get Involved</h1>
            <p className="involved__lead">
              You can be part of us through ministry, education, healing,
              business support, and service in our departments.
            </p>
          </div>
        </div>
      </section>

      <section className="involved__section" aria-labelledby="about-jjrsf">
        <div className="container involved__about">
          <div className="involved__copy">
            <h2 id="about-jjrsf" className="involved__heading">
              <span className="involved__heading-icon" aria-hidden="true">
                <IconLightbulb size={22} />
              </span>
              About JJRSF
            </h2>
            <p>{aboutCopy.intro}</p>
            <ul className="involved__aims">
              {supportAims.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{aboutCopy.purposeUnbelievers}</p>
            <p>{aboutCopy.purposeBelievers}</p>

            <ul
              className="involved__pillars"
              style={{ '--pillars-bg': `url(${pillarsBackground})` }}
            >
              {aboutPillars.map((pillar) => {
                const Icon = pillarIcons[pillar.icon]
                return (
                  <li key={pillar.id} className="involved__pillar">
                    <h3 className="involved__pillar-title">
                      <span className="involved__pillar-icon" aria-hidden="true">
                        <Icon size={18} />
                      </span>
                      {pillar.title}
                    </h3>
                    <p className="involved__pillar-body">{pillar.body}</p>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="involved__photos" aria-label="JJRS Foundation moments">
            {aboutPhotos.map((photo) => (
              <figure
                key={photo.src}
                className={`involved__photo ${photo.className ?? ''}`.trim()}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        className="involved__section involved__history"
        aria-labelledby="brief-history"
        style={{ '--history-bg': `url(${historyBackground})` }}
      >
        <div className="involved__history-overlay">
          <div className="container involved__copy involved__history-copy">
            <h2 id="brief-history">Brief History</h2>
            {briefHistory.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="involved__section" aria-labelledby="initiatives-heading">
        <div className="container">
          <div className="involved__section-head">
            <h2 id="initiatives-heading">You Can Be Part of Us Through</h2>
            <p>Choose an initiative and walk with us in purpose and impact.</p>
          </div>
          <div className="involved__cards">
            {initiatives.map(({ slug, title, shortDescription, icon }) => {
              const Icon = icons[icon]
              return (
                <article key={slug} className="involved-card">
                  <div className="involved-card__icon" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <h3>{title}</h3>
                  <p>{shortDescription}</p>
                  <Link to={`/initiatives/${slug}`} className="involved-card__link">
                    Get Started
                    <IconArrow />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className="involved__section involved__section--soft"
        id="connect"
        aria-labelledby="socials-heading"
      >
        <div className="container">
          <div className="involved__section-head">
            <h2 id="socials-heading">Social Outlets</h2>
            <p>Stay connected and join the conversation across our channels.</p>
          </div>
          <div className="involved__socials">
            {socialOutlets.map(({ label, href, icon }) => {
              const Icon = icons[icon]
              return (
                <a key={label} href={href} className="involved-social">
                  <span className="involved-social__icon" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <span>{label}</span>
                  <IconArrow size={14} />
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="involved__section" aria-labelledby="departments-heading">
        <div className="container">
          <div className="involved__section-head">
            <h2 id="departments-heading">Departments / Career</h2>
            <p>
              Serve with your gifts across these departments as we advance the
              mission together.
            </p>
          </div>
          <div className="involved__departments">
            {departmentNames.map((dept) => (
              <div key={dept} className="involved-dept">
                <span className="involved-dept__icon" aria-hidden="true">
                  <IconBriefcase size={18} />
                </span>
                <span className="involved-dept__text">
                  <strong>{dept}</strong>
                </span>
              </div>
            ))}
          </div>
          <div className="involved__career-cta">
            <Link to="/careers" className="btn btn-primary">
              Explore Careers
              <IconArrow />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
