import { BRAND } from '../data/content.js'

export default function BookMock({ size = 'md' }) {
  return (
    <div className={`book3d book3d--${size}`} role="img" aria-label={`Capa do e-book ${BRAND.product}`}>
      <div className="book3d__inner">
        <div className="book3d__pages" />
        <div className="book3d__cover">
          <span className="book3d__emblem">♚</span>
          <span className="book3d__kicker">Um percurso prático de 30 dias</span>
          <h3 className="book3d__title">
            Controle
            <em>Absoluto</em>
          </h3>
          <span className="book3d__rule" />
          <span className="book3d__tagline">Desenvoltura sexual. Percepção, posições e condução em parceria.</span>
          <span className="book3d__author">{BRAND.author}</span>
        </div>
      </div>
    </div>
  )
}
