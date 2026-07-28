import journalCardImg from '../assets/journal-card.jpg'
import eventsCardImg from '../assets/events-card.jpg'
import tvCardImg from '../assets/tv-card.jpg'
import libraryCardImg from '../assets/library-card.jpg'
import claCardImg from '../assets/cla-card.jpg'
import devotionCardImg from '../assets/devotion-card.jpg'
import calendarCardImg from '../assets/calendar-card.jpg'
import albumCardImg from '../assets/album-card.jpg'
import donateCardImg from '../assets/donate-card.jpg'

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
    title: 'JJRSF CLA (Christian Learning Academy)',
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
    id: 'calendar',
    icon: 'calendar',
    title: 'JJRSF Calendar',
    description:
      'View prayer schedules and other upcoming schedules across the foundation.',
    cta: 'View Calendar',
    href: '/calendar',
    imageKey: 'calendar',
  },
  {
    id: 'album',
    icon: 'camera',
    title: 'JJRSF Photo Album',
    description:
      'See moments of impact — worship, outreach, and lives transformed across the nations.',
    cta: 'Explore',
    href: 'https://photos.app.goo.gl/9ytSdyqgevSSbqD48',
    imageKey: 'album',
  },
  {
    id: 'donate',
    icon: 'heart',
    title: 'JJRSF Lay-Up Treasure',
    description:
      'Your generosity fuels outreach, education, and hope for families around the world.',
    cta: 'Give Now',
    href: 'https://layuptreasure.jjrsf.org/',
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
  album: albumCardImg,
  library: libraryCardImg,
  cla: claCardImg,
  devotion: devotionCardImg,
  calendar: calendarCardImg,
  donate: donateCardImg,
}

export const suiteJoinCta = {
  title: 'Be Part of Something Bigger',
  description:
    'Volunteer, partner, or pray with us as we grow in grace and impact nations together.',
  cta: 'Join the Family',
  to: '/get-involved',
}
