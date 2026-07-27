export const suiteItems = [
  { label: 'JJRSF Brochure', to: '/#brochure' },
  { label: 'Events', to: '/#events' },
  { label: 'JJRSF TV & Radio', to: '/#media' },
  { label: 'JJRSF e-Library', to: '/#library' },
  { label: 'CLA (Christian Learning Academy)', to: '/#cla' },
  { label: '360 Devotional', to: '/#devotion' },
  { label: 'Prayer Schedule', to: '/#prayer-schedule' },
  { label: 'JJRS Photo Album', to: '/#album' },
]

export const navItems = [
  { label: 'About', to: '/get-involved#about-jjrsf' },
  { label: 'Sitemap', to: '/sitemap' },
  { label: 'Team', to: '/team' },
  {
    label: 'Suite',
    to: '/#suite',
    children: suiteItems,
  },
  { label: 'Initiatives', to: '/get-involved#initiatives-heading' },
  { label: 'Testimonies', to: '/#testimonies' },
]

export const footerQuickLinks = [
  { label: 'About Us', to: '/get-involved#about-jjrsf' },
  { label: 'Events', to: '/#events' },
  { label: 'Get Involved', to: '/get-involved' },
  { label: 'Give / Donate', to: '/#donate' },
  { label: 'Team', to: '/team' },
  { label: 'Careers', to: '/careers' },
  { label: 'Sitemap', to: '/sitemap' },
]

export const footerResources = [
  { label: 'Blog', to: '/#library' },
  { label: '360 Devotional', to: '/#devotion' },
  { label: 'Sermons', to: '/#media' },
  { label: 'JJRSF e-Library', to: '/#library' },
  { label: 'Christian Learning Academy', to: '/#cla' },
]

export const footerBrand = {
  blurb:
    'We are driven to ensure that people fulfill their God-given purpose by pulling unbelievers out of the pit of sin which is unbelief in Jesus.',
  tagline: 'Prayer. Love. Partner.',
  name: 'JJRS Foundation',
}

export const contactInfo = {
  address: 'Lagos, Nigeria',
  phone: '+234 800 000 0000',
  phoneHref: 'tel:+2348000000000',
  email: 'info@jjrsfoundation.org',
  emailHref: 'mailto:info@jjrsfoundation.org',
  website: 'www.jjrsfoundation.org',
}
