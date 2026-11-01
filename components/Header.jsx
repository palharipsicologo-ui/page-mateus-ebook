import CTAButton from './CTAButton.jsx'
import { BRAND } from '../data/content.js'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#top" aria-label={BRAND.product}>
          <span className="brand__mark brand__mark--king brand__mark--exact">
            <img src="/maestro-king-exact.jpg?v=20261101-5" alt="Símbolo do Maestro" />
          </span>
          <span className="brand__name">
            Controle Absoluto
            <small>O Maestro</small>
          </span>
        </a>
        <CTAButton size="sm">Garantir agora</CTAButton>
      </div>
    </header>
  )
}
