import Reveal from './Reveal.jsx'
import { Shield, Check } from './icons.jsx'
import { PAYMENT } from '../data/content.js'

function PixIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l3.2 3.2a2.5 2.5 0 001.77.73H18L12 13 6 6.93h1.03A2.5 2.5 0 008.8 6.2L12 3zM12 21l-3.2-3.2a2.5 2.5 0 00-1.77-.73H6L12 11l6 6.07h-1.03a2.5 2.5 0 00-1.77.73L12 21z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function CardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2.5 9.5h19" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 14.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
function BarcodeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6v12M7 6v12M10 6v12M13.5 6v12M17 6v12M20 6v12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

const METHOD_ICONS = { Pix: PixIcon, 'Cartão de crédito': CardIcon, Boleto: BarcodeIcon }

export default function PaymentTrust() {
  return (
    <section className="section section--tight payment">
      <div className="container">
        <Reveal className="payment__card">
          <div className="payment__head">
            <span className="payment__shield">
              <Shield size={26} />
            </span>
            <div>
              <span className="kicker" style={{ marginBottom: 6 }}>
                {PAYMENT.kicker}
              </span>
              <h3 className="payment__title">{PAYMENT.title}</h3>
            </div>
          </div>

          <p className="payment__text">{PAYMENT.text}</p>

          <div className="payment__methods">
            {PAYMENT.methods.map((m) => {
              const Icon = METHOD_ICONS[m] || CardIcon
              return (
                <span className="payment__method" key={m}>
                  <Icon />
                  {m}
                </span>
              )
            })}
          </div>

          <ul className="payment__badges">
            {PAYMENT.badges.map((b) => (
              <li key={b}>
                <Check size={16} /> {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
