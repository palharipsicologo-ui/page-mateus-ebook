import Reveal from './Reveal.jsx'
import { X } from './icons.jsx'
import { ENEMY } from '../data/content.js'

export default function Enemy() {
  return (
    <>
      <hr className="section-divider" />
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="kicker">{ENEMY.kicker}</span>
            <h2 className="section-title">{ENEMY.headline}</h2>
          </Reveal>

          <div className="enemy__grid">
            {ENEMY.items.map((item, i) => (
              <Reveal className="enemy__card" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="enemy__x">
                  <X size={22} />
                </span>
                <h3 className="enemy__wrong">{item.wrong}</h3>
                <p className="enemy__why">{item.why}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="enemy__conclusion">{ENEMY.conclusion}</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
