import CTAButton from './CTAButton.jsx'
import BookMock from './BookMock.jsx'
import { Check } from './icons.jsx'
import { HERO } from '../data/content.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <span className="hero__eyebrow">{HERO.eyebrow}</span>

        <h1 className="hero__title">
          <span>{HERO.title}</span>
          <span className="gold-text">{HERO.titleHighlight}</span>
        </h1>

        <p className="hero__subtitle">{HERO.subtitle}</p>

        <div className="hero__cta">
          <CTAButton size="lg" subtitle={HERO.reassurance}>
            {HERO.ctaPrimary}
          </CTAButton>
        </div>

        <ul className="hero__badges">
          {HERO.badges.map((b) => (
            <li className="hero__badge" key={b}>
              <Check size={18} />
              {b}
            </li>
          ))}
        </ul>

        <BookMock size="md" />
      </div>
    </section>
  )
}
