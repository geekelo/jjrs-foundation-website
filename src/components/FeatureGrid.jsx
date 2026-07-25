import {
  IconInfo,
  IconCalendar,
  IconTv,
  IconCamera,
  IconBook,
  IconGrad,
  IconHeart,
  IconUsers,
  IconArrow,
} from './Icons'
import './FeatureGrid.css'

const images = {
  about:
    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80',
  events:
    'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80',
  tv: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80',
  album1:
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=300&q=80',
  album2:
    'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=300&q=80',
  album3:
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=300&q=80',
  album4:
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=300&q=80',
  library:
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5040?auto=format&fit=crop&w=600&q=80',
  cla: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80',
  donate:
    'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80',
}

const cards = [
  {
    id: 'about',
    icon: IconInfo,
    title: 'About JJRSF',
    description:
      'Discover our mission, vision, and the heart behind a foundation built on grace, faith, and love.',
    cta: 'Learn More',
    href: '#about',
    image: images.about,
  },
  {
    id: 'events',
    icon: IconCalendar,
    title: 'Events',
    description:
      'Join conferences, outreaches, and gatherings that strengthen faith and connect communities.',
    cta: 'View Events',
    href: '#events',
    image: images.events,
  },
  {
    id: 'media',
    icon: IconTv,
    title: 'JJRS TV & Radio',
    description:
      'Watch and listen to teachings, testimonies, and programs that inspire and equip believers.',
    cta: 'Watch Now',
    href: '#media',
    image: images.tv,
  },
  {
    id: 'album',
    icon: IconCamera,
    title: 'JJRS Photo Album',
    description:
      'See moments of impact — worship, outreach, and lives transformed across the nations.',
    cta: 'Explore',
    href: '#media',
    collage: [images.album1, images.album2, images.album3, images.album4],
  },
  {
    id: 'library',
    icon: IconBook,
    title: 'JJRS e-Library',
    description:
      'Access devotionals, books, and learning resources curated for spiritual growth.',
    cta: 'Browse Library',
    href: '#resources',
    image: images.library,
  },
  {
    id: 'cla',
    icon: IconGrad,
    title: 'CLA (Christian Learning Academy)',
    description:
      'Equip yourself through structured courses designed to deepen faith and leadership.',
    cta: 'Learn More',
    href: '#resources',
    image: images.cla,
  },
  {
    id: 'donate',
    icon: IconHeart,
    title: 'Give / Donate',
    description:
      'Your generosity fuels outreach, education, and hope for families around the world.',
    cta: 'Give Now',
    href: '#donate',
    image: images.donate,
    featured: true,
  },
]

export default function FeatureGrid() {
  return (
    <section className="features" id="about" aria-labelledby="features-heading">
      <div className="container">
        <h2 id="features-heading" className="features__title">
          The JJRSF Suite
        </h2>
        <div className="features__grid">
          {cards.map((card) => {
            const Icon = card.icon
            const sectionIds = {
              events: 'events',
              media: 'media',
              library: 'resources',
              donate: 'donate',
            }
            return (
              <article
                key={card.id}
                className={`feature-card ${card.featured ? 'feature-card--featured' : ''}`}
                id={sectionIds[card.id]}
              >
              <div className="feature-card__icon" aria-hidden="true">
                <Icon size={18} />
              </div>
              <h2 className="feature-card__title">{card.title}</h2>

              {card.collage ? (
                <div className="feature-card__collage">
                  {card.collage.map((src) => (
                    <img key={src} src={src} alt="" loading="lazy" />
                  ))}
                </div>
              ) : (
                <div className="feature-card__image">
                  <img src={card.image} alt="" loading="lazy" />
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
          <h2>Be Part of Something Bigger</h2>
          <p>
            Volunteer, partner, or pray with us as we grow in grace and impact
            nations together.
          </p>
          <a href="#involved" className="feature-card__link">
            Join the Family
            <IconArrow />
          </a>
        </aside>
        </div>
      </div>
    </section>
  )
}
