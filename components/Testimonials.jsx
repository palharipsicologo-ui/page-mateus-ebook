import Reveal from './Reveal.jsx'
import { TESTIMONIALS } from '../data/content.js'

const NAMES = ['Rafael M.', 'Bruno C.', 'Caio R.', 'Lucas A.', 'Henrique P.']

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
            {TESTIMONIALS.items.map((t, i) => {
              const displayName = NAMES[i] || `Cliente ${i + 1}`
              const initials = displayName.split(' ').map((p) => p[0]).join('').slice(0, 2)

              return (
                <Reveal className="testi__message" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
                  <div className="testi__message-head">
                    <div className={`testi__avatar testi__avatar--${(i % 5) + 1}`}>{initials}</div>
                    <div>
                      <div className="testi__name">{displayName}</div>
                    </div>
                  </div>
                  <div className="testi__bubble">“{t.text}”</div>
                </Reveal>
              )
            })}
          </div>

          <p className="testi__privacy">* Nomes abreviados e alterados para preservar a identidade dos compradores. Os relatos foram mantidos.</p>
        </div>
      </section>
    </>
  )
}
