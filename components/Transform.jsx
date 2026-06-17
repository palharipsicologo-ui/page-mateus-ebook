import Reveal from './Reveal.jsx'
import { Check, X } from './icons.jsx'
import { TRANSFORM } from '../data/content.js'

export default function Transform() {
  return (
    <section className="section" id="transformacao">
      <div className="container">
        <Reveal className="center-head">
          <span className="kicker">{TRANSFORM.kicker}</span>
          <h2 className="section-title">{TRANSFORM.headline}</h2>
        </Reveal>

        <div className="compare">
          <Reveal className="compare__col compare__col--before">
            <h3 className="compare__title">
              <X size={18} /> {TRANSFORM.before.title}
            </h3>
            <ul className="compare__list">
              {TRANSFORM.before.items.map((item, i) => (
                <li className="compare__item" key={i}>
                  <X size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="compare__col compare__col--after" style={{ transitionDelay: '90ms' }}>
            <h3 className="compare__title">
              <Check size={18} /> {TRANSFORM.after.title}
            </h3>
            <ul className="compare__list">
              {TRANSFORM.after.items.map((item, i) => (
                <li className="compare__item" key={i}>
                  <Check size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
