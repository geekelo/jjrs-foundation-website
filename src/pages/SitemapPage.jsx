import { Link } from 'react-router-dom'
import { IconArrow } from '../components/Icons'
import './SitemapPage.css'

const sections = [
  {
    title: 'Main Pages',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About JJRSF', to: '/get-involved#about-jjrsf' },
      { label: 'Get Involved', to: '/get-involved' },
      { label: 'Team / Careers', to: '/careers' },
      { label: 'Sitemap', to: '/sitemap' },
      { label: 'Testimonies', to: '/#testimonies' },
    ],
  },
  {
    title: 'The JJRSF Suite',
    links: [
      { label: 'JJRSF Brochure', to: '/#brochure' },
      { label: 'Events', to: '/#events' },
      { label: 'JJRSF TV & Radio', to: '/#media' },
      { label: 'JJRSF e-Library', to: '/#library' },
      { label: 'CLA (Christian Learning Academy)', to: '/#cla' },
      { label: '360 Devotional', to: '/#devotion' },
      { label: 'Prayer Schedule', to: '/#prayer-schedule' },
      { label: 'JJRS Photo Album', to: '/#album' },
      { label: 'Give / Donate', to: '/#donate' },
      { label: 'Be Part of Something Bigger', to: '/get-involved' },
    ],
  },
  {
    title: 'Get Involved',
    links: [
      { label: 'About JJRSF', to: '/get-involved#about-jjrsf' },
      { label: 'Brief History', to: '/get-involved#brief-history' },
      { label: 'Our Mission', to: '/get-involved#about-jjrsf' },
      { label: 'Our Vision', to: '/get-involved#about-jjrsf' },
      { label: 'Initiatives', to: '/get-involved#initiatives-heading' },
      { label: 'Ministry Support Initiative', to: '/get-involved#initiatives-heading' },
      { label: 'Education Support Initiative', to: '/get-involved#initiatives-heading' },
      { label: 'Healing Support Initiative', to: '/get-involved#initiatives-heading' },
      { label: 'Business Support Initiative', to: '/get-involved#initiatives-heading' },
      { label: 'Social Outlets', to: '/get-involved#connect' },
      { label: 'Departments / Career', to: '/get-involved#departments-heading' },
    ],
  },
  {
    title: 'Departments',
    links: [
      { label: 'IT / Tech', to: '/careers' },
      { label: 'Media', to: '/careers' },
      { label: 'Publication', to: '/careers' },
      { label: 'Social Media', to: '/careers' },
      { label: 'Transportation / Logistics', to: '/careers' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Join Us to Pray', to: '/#pray' },
      { label: 'Newsletter', to: '/#newsletter' },
      { label: 'Give / Donate', to: '/#donate' },
      { label: 'Contact Email', to: 'mailto:info@jjrsfoundation.org', external: true },
    ],
  },
]

export default function SitemapPage() {
  return (
    <div className="sitemap">
      <section className="sitemap__hero">
        <div className="container sitemap__hero-inner">
          <p className="sitemap__eyebrow">Find your way</p>
          <h1>Sitemap</h1>
          <p>
            Explore every page and section of the JJRS Foundation website in one
            place.
          </p>
        </div>
      </section>

      <section className="sitemap__section">
        <div className="container sitemap__grid">
          {sections.map((section) => (
            <article key={section.title} className="sitemap-card">
              <h2>{section.title}</h2>
              <ul>
                {section.links.map((link) => (
                  <li key={`${section.title}-${link.label}`}>
                    {link.external ? (
                      <a href={link.to}>
                        <span>{link.label}</span>
                        <IconArrow size={14} />
                      </a>
                    ) : (
                      <Link to={link.to}>
                        <span>{link.label}</span>
                        <IconArrow size={14} />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
