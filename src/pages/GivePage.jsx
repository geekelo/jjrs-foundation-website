import { IconHeart } from '../components/Icons'
import GiveIcon from '../components/GiveIcon'
import { giveIntro, layUpTreasure } from '../data/give'
import './GivePage.css'

export default function GivePage() {
  return (
    <div className="give">
      <section className="give__hero">
        <div className="container give__hero-inner">
          <div className="give__hero-icon" aria-hidden="true">
            <GiveIcon />
          </div>
          <div className="give__hero-copy">
            <p className="give__eyebrow">{giveIntro.eyebrow}</p>
            <h1>{giveIntro.title}</h1>
            <p>{giveIntro.lead}</p>
            <a
              href={layUpTreasure.href}
              className="btn btn-primary give__portal-cta"
              target="_blank"
              rel="noreferrer"
            >
              <IconHeart size={15} />
              {layUpTreasure.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="give__about" aria-labelledby="layup-heading">
        <div className="container give__about-inner">
          <h2 id="layup-heading">{layUpTreasure.title}</h2>
          <p>{layUpTreasure.description}</p>
        </div>
      </section>
    </div>
  )
}
