import Reveal from './Reveal.jsx'
import CTAButton from './CTAButton.jsx'
import BookMock from './BookMock.jsx'
import { Check } from './icons.jsx'
import { OFFER, PRICE, GUARANTEE } from '../data/content.js'

export default function Offer() {
  return (
    <section className="section offer" id="oferta">
      <div className="container">
        <Reveal className="center-head">
          <span className="kicker">{OFFER.kicker}</span>
          <h2 className="section-title">{OFFER.headline}</h2>
        </Reveal>

        <Reveal className="offer__card">
          <div className="offer__mock">
            <BookMock size="sm" />
          </div>

          <div className="offer__top">
            <p className="offer__includes-title">{OFFER.stackTitle}</p>

            <ul className="offer__stack">
              {OFFER.stack.map((item, i) => (
                <li className="offer__stack-row" key={i}>
                  <span className="offer__stack-label">
                    {item.bonus ? <span className="offer__bonus-pill">Bônus</span> : <Check size={18} />}
                    {item.label}
                  </span>
                  <span className="offer__stack-value">{item.value}</span>
                </li>
              ))}
            </ul>

            <ul className="offer__extras">
              {OFFER.extras.map((e, i) => (
                <li key={i}>
                  <Check size={16} /> {e}
                </li>
              ))}
            </ul>

            <div className="offer__total">
              <span>{OFFER.totalLabel}</span>
              <s>{OFFER.totalValue}</s>
            </div>
          </div>

          <div className="offer__price">
            <div className="offer__today">{OFFER.todayLabel}</div>
            <div className="offer__current gold-text">{PRICE.current}</div>
            <div className="offer__installments">{PRICE.cash}</div>
            <div className="offer__note">{PRICE.note}</div>
          </div>

          <div className="offer__cta-wrap">
            <CTAButton size="lg" block subtitle={OFFER.secureNote}>
              {OFFER.ctaPrimary}
            </CTAButton>
          </div>
        </Reveal>

        <Reveal className="guarantee">
          <div className="guarantee__seal">
            <span className="num">{GUARANTEE.days}</span>
            <span className="unit">dias</span>
          </div>
          <div>
            <h3 className="guarantee__title">{GUARANTEE.title}</h3>
            <p className="guarantee__text">{GUARANTEE.text}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
