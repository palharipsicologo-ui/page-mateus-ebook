import Reveal from './Reveal.jsx'
import { TESTIMONIALS } from '../data/content.js'

export default function Testimonials() {
  return (
    <>
      <hr className="section-divider" />
      <section className="section testimonials-section">
        <div className="container">
          <Reveal className="center-head">
            <span className="kicker">{TESTIMONIALS.kicker}</span>
            <h2 className="section-title">{TESTIMONIALS.headline}</h2>
          </Reveal>

          <div className="testi__grid testi__grid--messages">
            {TESTIMONIALS.items.map((t, i) => (
              <Reveal className="testi__message" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="testi__message-head">
                  <div className="testi__avatar">♚</div>
                  <div>
                    <div className="testi__name">{t.name}</div>
                    <div className="testi__city">{t.city}</div>
                  </div>
                </div>
                <div className="testi__bubble">“{t.text}”</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
