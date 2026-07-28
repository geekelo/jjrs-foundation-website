import journalCardImg from '../assets/journal-card.jpg'
import eventsCardImg from '../assets/events-card.jpg'
import tvCardImg from '../assets/tv-card.jpg'
import libraryCardImg from '../assets/library-card.jpg'
import claCardImg from '../assets/cla-card.jpg'
import devotionCardImg from '../assets/devotion-card.jpg'

export const suiteCards = [
  {
    id: 'journal',
    icon: 'info',
    title: 'JJRSF Journal',
    description:
      'Read blog posts, news, articles, projects, and achievements from across the foundation.',
    cta: 'Read Journal',
    href: '/journal',
    imageKey: 'journal',
  },
  {
    id: 'events',
    icon: 'calendar',
    title: 'Events',
    description:
      'Find and register for upcoming events, conferences, worship gatherings, and community programs.',
    cta: 'View Events',
    href: 'https://programs.jjrsf.org/',
    imageKey: 'events',
  },
  {
    id: 'media',
    icon: 'tv',
    title: 'JJRSF TV & Radio',
    description:
      'Watch and listen to teachings, testimonies, and programs that inspire and equip believers.',
    cta: 'Watch Now',
    href: 'https://tv.jjrsf.org/',
    imageKey: 'tv',
  },
  {
    id: 'library',
    icon: 'book',
    title: 'JJRSF e-Library',
    description:
      'Access devotionals, books, and learning resources curated for spiritual growth.',
    cta: 'Browse Library',
    href: 'https://library.jjrsf.org/',
    imageKey: 'library',
  },
  {
    id: 'cla',
    icon: 'grad',
    title: 'CLA (Christian Learning Academy)',
    description:
      'Equip yourself through structured courses designed to deepen faith and leadership.',
    cta: 'Learn More',
    href: '#cla',
    imageKey: 'cla',
  },
  {
    id: 'devotion',
    icon: 'sun',
    title: '360 Devotional',
    description:
      'Grow daily with year-round devotionals that draw you closer to Christ and His truth.',
    cta: 'Read Today',
    href: 'https://tinyurl.com/360devotional',
    imageKey: 'devotion',
  },
  {
    id: 'prayer-schedule',
    icon: 'pray',
    title: 'Prayer Schedule',
    description:
      'Stay aligned with our daily and special prayer times as we seek God together.',
    cta: 'View Schedule',
    href: '#prayer-schedule',
    imageKey: 'prayer',
  },
  {
    id: 'album',
    icon: 'camera',
    title: 'JJRS Photo Album',
    description:
      'See moments of impact — worship, outreach, and lives transformed across the nations.',
    cta: 'Explore',
    href: '#album',
    collageKeys: ['album1', 'album2', 'album3', 'album4'],
  },
  {
    id: 'donate',
    icon: 'heart',
    title: 'Give / Donate',
    description:
      'Your generosity fuels outreach, education, and hope for families around the world.',
    cta: 'Give Now',
    href: '#donate',
    imageKey: 'donate',
    featured: true,
  },
]

export const suiteImages = {
  journal: journalCardImg,
  about:
    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80',
  events: eventsCardImg,
  tv: tvCardImg,
  album1:
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=300&q=80',
  album2:
    'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=300&q=80',
  album3:
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=300&q=80',
  album4:
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=300&q=80',
  library: libraryCardImg,
  cla: claCardImg,
  devotion: devotionCardImg,
  prayer:
    'https://images.unsplash.com/photo-1438232998663-adf9c73b0b9b?auto=format&fit=crop&w=600&q=80',
  donate:
    'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80',
}

export const suiteJoinCta = {
  title: 'Be Part of Something Bigger',
  description:
    'Volunteer, partner, or pray with us as we grow in grace and impact nations together.',
  cta: 'Join the Family',
  to: '/get-involved',
}
