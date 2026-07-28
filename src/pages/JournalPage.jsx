import { useMemo, useState } from 'react'
import { IconArrow } from '../components/Icons'
import JournalIcon from '../components/JournalIcon'
import {
  journalCategories,
  journalItems,
  journalIntro,
} from '../data/journal'
import './JournalPage.css'

const typeLabels = {
  blog: 'Blog',
  news: 'News',
  article: 'Article',
  project: 'Project',
  achievement: 'Achievement',
}

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return journalItems
    return journalItems.filter((item) => item.type === activeCategory)
  }, [activeCategory])

  return (
    <div className="journal">
      <section className="journal__hero">
        <div className="container journal__hero-inner">
          <div className="journal__hero-icon" aria-hidden="true">
            <JournalIcon />
          </div>
          <div className="journal__hero-copy">
            <p className="journal__eyebrow">{journalIntro.eyebrow}</p>
            <h1>{journalIntro.title}</h1>
            <p>{journalIntro.lead}</p>
          </div>
        </div>
      </section>

      <section className="journal__section" aria-label="Journal content">
        <div className="container">
          <div className="journal__filters" role="tablist" aria-label="Content filters">
            {journalCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === category.id}
                className={`journal__filter ${
                  activeCategory === category.id ? 'journal__filter--active' : ''
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {filteredItems.length === 0 ? (
            <p className="journal__empty">No items in this category yet.</p>
          ) : (
            <div className="journal__grid">
              {filteredItems.map((item) => (
                <article key={item.id} className="journal-card">
                  <div className="journal-card__image">
                    <img src={item.image} alt="" loading="lazy" />
                    <span className="journal-card__type">{typeLabels[item.type]}</span>
                  </div>
                  <div className="journal-card__body">
                    <time className="journal-card__date" dateTime={item.date}>
                      {item.date}
                    </time>
                    <h2>{item.title}</h2>
                    <p>{item.excerpt}</p>
                    <a href={item.href} className="journal-card__link">
                      Read more
                      <IconArrow />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
