import Reveal from './Reveal.jsx'
import { Shield } from './icons.jsx'
import { PAYMENT } from '../data/content.js'

function PixIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2.5 9.5h19" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 14.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

const METHOD_ICONS = { Pix: PixIcon, 'Cartão de crédito': CardIcon }

export default function PaymentTrust() {
  return (
    <section className="payment payment--compact" aria-label="Segurança do checkout">
      <div className="container">
        <Reveal className="payment__compact">
          <div className="payment__compact-label">
            <span className="payment__shield"><Shield size={23} /></span>
            <strong>{PAYMENT.title}</strong>
          </div>
          <div className="payment__compact-methods">
            {PAYMENT.methods.map((method) => {
              const Icon = METHOD_ICONS[method] || CardIcon
              return <span className="payment__method" key={method}><Icon />{method}</span>
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
