import { IconHeart, IconGlobe, IconBook, IconCalendar } from './Icons'
import './StatsBar.css'

const stats = [
  { value: '10K+', label: 'Lives Impacted', Icon: IconHeart },
  { value: '50+', label: 'Countries Reached', Icon: IconGlobe },
  { value: '2,500+', label: 'Resources Available', Icon: IconBook },
  { value: '200+', label: 'Events Held', Icon: IconCalendar },
]

export default function StatsBar() {
  return (
    <section className="stats" aria-label="Impact statistics">
      <div className="container stats__grid">
        {stats.map(({ value, label, Icon }) => (
          <div key={label} className="stats__item">
            <span className="stats__icon" aria-hidden="true">
              <Icon size={22} />
            </span>
            <div>
              <p className="stats__value">{value}</p>
              <p className="stats__label">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
