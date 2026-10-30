import Reveal from './Reveal.jsx'
import { Check } from './icons.jsx'
import { BONUS } from '../data/content.js'

export default function Bonus() {
  const item = BONUS.items[0]

  return (
    <section className="section bonus" id="bonus">
      <div className="container">
        <Reveal className="center-head">
          <span className="kicker">{BONUS.kicker}</span>
          <h2 className="section-title">{BONUS.headline}</h2>
          <p className="section-sub">{BONUS.subhead}</p>
        </Reveal>

        <Reveal className="bonus-feature">
          <div className="bonus-feature__visual" aria-label="Capa do bônus Dopamina Reset">
            <div className="bonus-cover-wrap">
              <img src="/dopamina-reset-cover.svg" alt="Capa do Protocolo Dopamina Reset" />
            </div>
          </div>

          <div className="bonus-feature__copy">
            <span className="bonus__tag"><Check size={15} /> INCLUSO HOJE</span>
            <h3 className="bonus__name">{item.name}</h3>
            <p className="bonus__desc">{item.desc}</p>
            <div className="bonus-feature__points">
              <span>Interromper o automático</span>
              <span>Reduzir gatilhos</span>
              <span>Recuperar escolha e presença</span>
            </div>
            <span className="bonus__value">Valor <s>{item.value}</s> — <strong>você leva junto</strong></span>
            <p className="bonus__foot">{BONUS.footnote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
