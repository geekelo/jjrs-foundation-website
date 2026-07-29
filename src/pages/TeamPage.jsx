import { IconLinkedin, IconMail, IconArrow } from '../components/Icons'
import TeamIcon from '../components/TeamIcon'
import { currentTeamMembers, previousTeamMembers } from '../data/team'
import './TeamPage.css'

function TeamMemberCard({ member, isPrevious = false }) {
  const hasCurrent = member.currentPositions?.length > 0
  const hasPrevious = member.previousPositions?.length > 0
  const hasAchievements = member.achievements?.length > 0

  return (
    <article className={`team-card ${isPrevious ? 'team-card--previous' : ''}`}>
      <div className="team-card__photo">
        <img src={member.photo} alt={member.name} loading="lazy" />
      </div>

      <div className="team-card__body">
        <div className="team-card__header">
          <div>
            <h3>{member.name}</h3>
            {member.claGraduate ? (
              <p className="team-card__badge">CLA Graduate</p>
            ) : null}
          </div>
          <div className="team-card__actions">
            {member.linkedinUrl ? (
              <a
                href={member.linkedinUrl}
                className="team-card__icon-btn"
                aria-label={`${member.name} on LinkedIn`}
                target="_blank"
                rel="noreferrer"
              >
                <IconLinkedin size={16} />
              </a>
            ) : null}
            <a href={member.contactFormUrl} className="team-card__contact">
              <IconMail size={14} />
              Contact
            </a>
          </div>
        </div>

        {hasCurrent ? (
          <div className="team-card__block">
            <h4>Current</h4>
            <ul>
              {member.currentPositions.map((role) => (
                <li key={`${role.title}-${role.startDate}`}>
                  <strong>{role.title}</strong>
                  <span>
                    {role.organization} · Since {role.startDate}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {hasPrevious ? (
          <div
            className={`team-card__block ${hasCurrent ? 'team-card__block--muted' : ''}`}
          >
            <h4>{isPrevious || !hasCurrent ? 'Served as' : 'Previous'}</h4>
            <ul>
              {member.previousPositions.map((role) => (
                <li key={`${role.title}-${role.startDate}`}>
                  <strong>{role.title}</strong>
                  <span>
                    {role.organization} · {role.startDate} – {role.endDate}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {hasAchievements ? (
          <div className="team-card__block">
            <h4>Achievements</h4>
            <ul className="team-card__achievements">
              {member.achievements.map((item) => (
                <li key={item.title}>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.title}
                      <IconArrow size={12} />
                    </a>
                  ) : (
                    <span>{item.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  )
}

export default function TeamPage() {
  return (
    <div className="team">
      <section className="team__hero">
        <div className="container team__hero-inner">
          <div className="team__hero-icon" aria-hidden="true">
            <TeamIcon />
          </div>
          <div className="team__hero-copy">
            <p className="team__eyebrow">Our people</p>
            <h1>Team</h1>
            <p>
              Meet the leaders and stewards serving through Prayer, Love, and
              Partnership across the JJRS Foundation.
            </p>
          </div>
        </div>
      </section>

      <section className="team__section" aria-labelledby="current-team-heading">
        <div className="container">
          <div className="team__section-head">
            <h2 id="current-team-heading">Current Team</h2>
            <p>Those presently serving across the foundation.</p>
          </div>
          <div className="team__grid">
            {currentTeamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="team__section team__section--previous"
        aria-labelledby="previous-team-heading"
      >
        <div className="container">
          <div className="team__section-head">
            <h2 id="previous-team-heading">Previous Team Members</h2>
            <p>Honouring those who previously served with us.</p>
          </div>
          <div className="team__grid">
            {previousTeamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} isPrevious />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
