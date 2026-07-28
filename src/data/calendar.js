export const calendarIntro = {
  eyebrow: 'JJRSF Calendar',
  title: 'Prayer & Event Schedules',
  lead:
    'View prayer schedules and other upcoming schedules across the foundation.',
}

const calendarId =
  '09ebd06a0965cc48a11e8ec62408b1452a2a7912f54d7490ce057954ea05800e@group.calendar.google.com'

export const calendarEmbedSrc = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&ctz=Africa%2FLagos`

export const calendarOpenUrl = 'https://tinyurl.com/jjrsfcalendar'

/** Opens Google Calendar so the user can add/subscribe to the JJRSF calendar. */
export const calendarAddUrl = `https://calendar.google.com/calendar/render?cid=${encodeURIComponent(calendarId)}`
