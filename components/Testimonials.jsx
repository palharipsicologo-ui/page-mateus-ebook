import Reveal from './Reveal.jsx'
import { Star } from './icons.jsx'
import { TESTIMONIALS } from '../data/content.js'

export default function Testimonials() {
  return (
    <>
      <hr className="section-divider" />
      <section className="section">
        <div className="container">
          <Reveal className="center-head">
            <span className="kicker">{TESTIMONIALS.kicker}</span>
            <h2 className="section-title">{TESTIMONIALS.headline}</h2>
            {TESTIMONIALS.illustrative ? (
              <span className="testi__badge">Depoimentos ilustrativos (exemplos)</span>
            ) : null}
          </Reveal>

          <div className="testi__grid">
            {TESTIMONIALS.items.map((t, i) => (
              <Reveal className="testi__card" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="testi__stars" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} />
                  ))}
                </div>
                <p className="testi__text">“{t.text}”</p>
                <div className="testi__who">
                  <div className="testi__name">{t.name}</div>
                  <div className="testi__city">{t.city}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
