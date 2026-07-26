import { Link } from 'react-router-dom'
import {
  IconArrow,
  IconCross,
  IconSchool,
  IconHeart,
  IconHandshake,
  IconWhatsapp,
  IconInstagram,
  IconFacebook,
  IconTiktok,
  IconTelegram,
  IconMail,
  IconBriefcase,
} from '../components/Icons'
import GetInvolvedIcon from '../components/GetInvolvedIcon'
import aboutImg1 from '../assets/hero/slide-2.jpg'
import aboutImg2 from '../assets/hero/slide-5.jpg'
import aboutImg3 from '../assets/hero/slide-1.jpg'
import aboutImg4 from '../assets/hero/slide-3.jpg'
import './GetInvolvedPage.css'

const supportAims = [
  'Grace Ministers and Ministries',
  'Widows and Orphans who we regard as ‘Most Privileged’.',
  'Those in need of educational or medical financing while they build up their faith and await the manifestation of their desires.',
  'Everyone we meet to attain their full potential as ordained by God.',
]

const initiatives = [
  {
    title: 'Ministry Support Initiative',
    description:
      'Stand with Grace Ministers and Ministries as they preach Christ and strengthen the body of believers.',
    Icon: IconCross,
  },
  {
    title: 'Education Support Initiative',
    description:
      'Help students and families access learning opportunities while they grow in faith and purpose.',
    Icon: IconSchool,
  },
  {
    title: 'Healing Support Initiative',
    description:
      'Partner with us to support medical needs and care for those awaiting God’s provision and healing.',
    Icon: IconHeart,
  },
  {
    title: 'Business Support Initiative',
    description:
      'Empower people to build sustainable livelihoods and walk in their God-given calling with dignity.',
    Icon: IconHandshake,
  },
]

const socialOutlets = [
  { label: 'WhatsApp', href: '#', Icon: IconWhatsapp },
  { label: 'Instagram', href: '#', Icon: IconInstagram },
  { label: 'Facebook', href: '#', Icon: IconFacebook },
  { label: 'TikTok', href: '#', Icon: IconTiktok },
  { label: 'Telegram', href: '#', Icon: IconTelegram },
  { label: 'Email List', href: 'mailto:info@jjrsfoundation.org', Icon: IconMail },
]

const departments = [
  'IT / Tech',
  'Media',
  'Publication',
  'Social Media',
  'Transportation / Logistics',
]

export default function GetInvolvedPage() {
  return (
    <div className="involved">
      <section className="involved__hero">
        <div className="container involved__hero-inner">
          <div className="involved__hero-icon" aria-hidden="true">
            <GetInvolvedIcon />
          </div>
          <div className="involved__hero-copy">
            <p className="involved__eyebrow">Join the mission</p>
            <h1>Get Involved</h1>
            <p className="involved__lead">
              You can be part of us through ministry, education, healing,
              business support, and service in our departments.
            </p>
          </div>
        </div>
      </section>

      <section className="involved__section" aria-labelledby="about-jjrsf">
        <div className="container involved__about">
          <div className="involved__copy">
            <h2 id="about-jjrsf">About JJRSF</h2>
            <p>
              The Jesus Jireh Rapha Support (JJRS) Foundation is a Christian
              Non-Governmental Organization established in January 2004 and
              incorporated with the Corporate Affairs Commission (CAC) of Nigeria
              on the 5th of July 2011, and with the aim of supporting:
            </p>
            <ul className="involved__aims">
              {supportAims.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              We are driven to ensure that people fulfill their God-given purpose
              by pulling unbelievers out of the pit of sin which is unbelief in
              Jesus.
            </p>
            <p>
              We aim at lifting believers out of the pit of religion and self
              effort in order for all to be saved and come to the knowledge of the
              truth.
            </p>

            <div className="involved__mission-block">
              <h3>Our Mission</h3>
              <p>
                Our mission drivers are to Pray the all power and help of God,
                Love by engaging in all forms of giving and Partner with people of
                like faith by providing support systems necessary for the
                advancement of the Kingdom of God.
              </p>
            </div>

            <div className="involved__mission-block">
              <h3>Our Vision</h3>
              <p>We aim at supporting Ministers, Ministries and the NEEDY.</p>
            </div>
          </div>

          <div className="involved__photos" aria-label="JJRS Foundation moments">
            <figure className="involved__photo involved__photo--main">
              <img
                src={aboutImg1}
                alt="Women listening attentively during a JJRS gathering"
                loading="lazy"
              />
            </figure>
            <figure className="involved__photo">
              <img
                src={aboutImg2}
                alt="Congregation seated during a foundation meeting"
                loading="lazy"
              />
            </figure>
            <figure className="involved__photo">
              <img
                src={aboutImg3}
                alt="Young people worshipping with hands raised"
                loading="lazy"
              />
            </figure>
            <figure className="involved__photo involved__photo--wide">
              <img
                src={aboutImg4}
                alt="Speaker sharing from the stage at a JJRS event"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="involved__section involved__section--soft" aria-labelledby="brief-history">
        <div className="container involved__copy">
          <h2 id="brief-history">Brief History</h2>
          <p>
            JJRS Foundation was inspired in 2001 by Romans 12:8 (NLT); if your
            gift is to encourage others, be encouraging. If it is giving, give
            generously. If God has given you leadership ability, take the
            responsibility seriously. And if you have a gift for showing kindness
            to others, do it gladly. It started in 2004 at Kano as a platform to
            assist people with meeting their basic needs.
          </p>
          <p>
            This however continued till 2007 when it began to sponsor some
            financially challenged youth to school in Makurdi, Benue State of
            Nigeria, five (5) of whom have graduated with BSc degrees and by
            God’s divine provision, others are still studying in various primary,
            secondary and tertiary institutions across the country.
          </p>
        </div>
      </section>

      <section className="involved__section" aria-labelledby="initiatives-heading">
        <div className="container">
          <div className="involved__section-head">
            <h2 id="initiatives-heading">You Can Be Part of Us Through</h2>
            <p>Choose an initiative and walk with us in purpose and impact.</p>
          </div>
          <div className="involved__cards">
            {initiatives.map(({ title, description, Icon }) => (
              <article key={title} className="involved-card">
                <div className="involved-card__icon" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#connect" className="involved-card__link">
                  Get Started
                  <IconArrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="involved__section involved__section--soft"
        id="connect"
        aria-labelledby="socials-heading"
      >
        <div className="container">
          <div className="involved__section-head">
            <h2 id="socials-heading">Social Outlets</h2>
            <p>Stay connected and join the conversation across our channels.</p>
          </div>
          <div className="involved__socials">
            {socialOutlets.map(({ label, href, Icon }) => (
              <a key={label} href={href} className="involved-social">
                <span className="involved-social__icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <span>{label}</span>
                <IconArrow size={14} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="involved__section" aria-labelledby="departments-heading">
        <div className="container">
          <div className="involved__section-head">
            <h2 id="departments-heading">Departments / Career</h2>
            <p>
              Serve with your gifts across these departments as we advance the
              mission together.
            </p>
          </div>
          <div className="involved__departments">
            {departments.map((dept) => (
              <div key={dept} className="involved-dept">
                <span className="involved-dept__icon" aria-hidden="true">
                  <IconBriefcase size={18} />
                </span>
                <span className="involved-dept__text">
                  <strong>{dept}</strong>
                </span>
              </div>
            ))}
          </div>
          <div className="involved__career-cta">
            <Link to="/careers" className="btn btn-primary">
              Explore Careers
              <IconArrow />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
