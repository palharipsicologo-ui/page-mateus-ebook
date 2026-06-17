import Reveal from './Reveal.jsx'
import { Check } from './icons.jsx'
import { BONUS } from '../data/content.js'

export default function Bonus() {
  return (
    <section className="section bonus" id="bonus">
      <div className="container">
        <Reveal className="center-head">
          <span className="kicker">{BONUS.kicker}</span>
          <h2 className="section-title">{BONUS.headline}</h2>
          <p className="section-sub">{BONUS.subhead}</p>
        </Reveal>

        <div className="bonus__grid">
          {BONUS.items.map((b, i) => (
            <Reveal className="bonus__card" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="bonus__tag">
                <Check size={15} /> Bônus {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="bonus__name">{b.name}</h3>
              <p className="bonus__desc">{b.desc}</p>
              <span className="bonus__value">
                Valor <s>{b.value}</s> — <strong>incluso</strong>
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="bonus__foot text-center">
          <p>{BONUS.footnote}</p>
        </Reveal>
      </div>
    </section>
  )
}
