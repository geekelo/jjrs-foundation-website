import {
  IconFacebook,
  IconYoutube,
  IconInstagram,
  IconMail,
  IconPray,
} from './Icons'
import './TopBar.css'

const socials = [
  { label: 'Facebook', href: '#', Icon: IconFacebook },
  { label: 'YouTube', href: '#', Icon: IconYoutube },
  { label: 'Instagram', href: '#', Icon: IconInstagram },
  { label: 'Email', href: 'mailto:info@jjrsfoundation.org', Icon: IconMail },
]

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <p className="topbar__prayer">
          <span>Prayer Time: 2:30 – 3:00 pm GMT+1</span>
          <a href="#pray" className="topbar__join">
            <IconPray size={14} />
            Join Us to Pray
          </a>
        </p>
        <ul className="topbar__socials" aria-label="Social media">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} aria-label={label}>
                <Icon size={15} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
