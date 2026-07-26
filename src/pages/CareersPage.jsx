import { Link } from 'react-router-dom'
import { IconArrow, IconBriefcase } from '../components/Icons'
import './CareersPage.css'

const departments = [
  {
    name: 'IT / Tech',
    summary: 'Build and maintain digital tools that support the foundation’s mission.',
  },
  {
    name: 'Media',
    summary: 'Capture and produce stories, teachings, and event coverage.',
  },
  {
    name: 'Publication',
    summary: 'Help create devotionals, resources, and faith-building materials.',
  },
  {
    name: 'Social Media',
    summary: 'Grow community engagement and share the message across platforms.',
  },
  {
    name: 'Transportation / Logistics',
    summary: 'Support outreach, events, and operational movement with excellence.',
  },
]

export default function CareersPage() {
  return (
    <div className="careers">
      <section className="careers__hero">
        <div className="container careers__hero-inner">
          <p className="careers__eyebrow">Serve with us</p>
          <h1>Careers</h1>
          <p>
            Explore department pathways and opportunities to use your gifts in
            service of the gospel and people.
          </p>
        </div>
      </section>

      <section className="careers__section">
        <div className="container">
          <div className="careers__grid">
            {departments.map((dept) => (
              <article key={dept.name} className="careers-card">
                <div className="careers-card__icon" aria-hidden="true">
                  <IconBriefcase size={20} />
                </div>
                <h2>{dept.name}</h2>
                <p>{dept.summary}</p>
                <a href="mailto:info@jjrsfoundation.org" className="careers-card__link">
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
