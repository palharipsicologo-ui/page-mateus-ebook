import CTAButton from './CTAButton.jsx'
import KingMark from './KingMark.jsx'
import { BRAND } from '../data/content.js'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#top" aria-label={BRAND.product}>
          <span className="brand__mark brand__mark--king"><KingMark /></span>
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
