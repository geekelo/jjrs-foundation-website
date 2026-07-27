import { IconPray } from './Icons'
import { socialLinks, prayerInfo } from '../data/socials'
import { icons } from '../data/icons'
import './TopBar.css'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <p className="topbar__prayer">
          <span>{prayerInfo.timeLabel}</span>
          <a href={prayerInfo.href} className="topbar__join">
            <IconPray size={14} />
            {prayerInfo.joinLabel}
          </a>
        </p>
        <ul className="topbar__socials" aria-label="Social media">
          {socialLinks.map(({ label, href, icon }) => {
            const Icon = icons[icon]
            return (
              <li key={label}>
                <a href={href} aria-label={label}>
                  <Icon size={15} />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
