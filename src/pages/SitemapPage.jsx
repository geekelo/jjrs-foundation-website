import { Link } from 'react-router-dom'
import { IconArrow } from '../components/Icons'
import { sitemapSections } from '../data/sitemap'
import './SitemapPage.css'

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
          {sitemapSections.map((section) => (
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
