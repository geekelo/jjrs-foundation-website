import { Link } from 'react-router-dom'
import { IconArrow, IconBriefcase } from '../components/Icons'
import CareersIcon from '../components/CareersIcon'
import { careerDepartments, careersExpressInterestUrl } from '../data/careers'
import './CareersPage.css'

export default function CareersPage() {
  return (
    <div className="careers">
      <section className="careers__hero">
        <div className="container careers__hero-inner">
          <div className="careers__hero-icon" aria-hidden="true">
            <CareersIcon />
          </div>
          <div className="careers__hero-copy">
            <p className="careers__eyebrow">Serve with us</p>
            <h1>Careers</h1>
            <p>
              Explore department pathways and opportunities to use your gifts in
              service of the gospel and people.
            </p>
          </div>
        </div>
      </section>

      <section className="careers__section">
        <div className="container">
          <div className="careers__grid">
            {careerDepartments.map((dept) => (
              <article key={dept.name} className="careers-card">
                <div className="careers-card__icon" aria-hidden="true">
                  <IconBriefcase size={20} />
                </div>
                <h2>{dept.name}</h2>
                <p>{dept.summary}</p>
                <a
                  href={careersExpressInterestUrl}
                  className="careers-card__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Express Interest
                  <IconArrow />
                </a>
              </article>
            ))}
          </div>
          <p className="careers__note">
            Want to partner another way?{' '}
            <Link to="/get-involved">Return to Get Involved</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
