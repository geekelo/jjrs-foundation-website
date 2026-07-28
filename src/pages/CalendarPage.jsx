import CalendarIcon from '../components/CalendarIcon'
import { IconClick } from '../components/Icons'
import {
  calendarIntro,
  calendarEmbedSrc,
  calendarOpenUrl,
  calendarAddUrl,
} from '../data/calendar'
import './CalendarPage.css'

export default function CalendarPage() {
  return (
    <div className="calendar-page">
      <section className="calendar-page__hero">
        <div className="container calendar-page__hero-inner">
          <div className="calendar-page__hero-icon" aria-hidden="true">
            <CalendarIcon />
          </div>
          <div className="calendar-page__hero-copy">
            <p className="calendar-page__eyebrow">{calendarIntro.eyebrow}</p>
            <h1>{calendarIntro.title}</h1>
            <p>{calendarIntro.lead}</p>
            <div className="calendar-page__cta">
              <a
                href={calendarAddUrl}
                className="btn btn-primary calendar-page__add"
                target="_blank"
                rel="noreferrer"
              >
                <IconClick size={18} />
                Add to Google Calendar
              </a>
              <p className="calendar-page__cta-hint">
                Subscribe once — prayer times and other schedules appear in your
                own calendar app.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="calendar-page__section" aria-label="JJRSF Calendar">
        <div className="container">
          <div className="calendar-page__frame-wrap">
            <iframe
              title="JJRSF Calendar"
              src={calendarEmbedSrc}
              className="calendar-page__frame"
              loading="lazy"
            />
          </div>
          <p className="calendar-page__open">
            Prefer the full Google Calendar view?{' '}
            <a href={calendarOpenUrl} target="_blank" rel="noreferrer">
              Open calendar
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
