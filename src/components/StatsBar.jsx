import { icons } from '../data/icons'
import { stats } from '../data/stats'
import './StatsBar.css'

export default function StatsBar() {
  return (
    <section className="stats" aria-label="Impact statistics">
      <div className="container stats__grid">
        {stats.map(({ value, label, icon }) => {
          const Icon = icons[icon]
          return (
            <div key={label} className="stats__item">
              <span className="stats__icon" aria-hidden="true">
                <Icon size={22} />
              </span>
              <div>
                <p className="stats__value">{value}</p>
                <p className="stats__label">{label}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
