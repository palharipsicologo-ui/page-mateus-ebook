import { BRAND } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__brand">
          <span className="brand__mark">♚</span>
          <span>{BRAND.product}</span>
        </div>

        <p className="footer__disclaimer">
          Material educativo para adultos. Não substitui avaliação individual de saúde.
          Dificuldades sexuais persistentes, dor, sintomas urinários ou alterações recentes
          importantes devem ser avaliadas por profissional qualificado.
        </p>

        <nav className="footer__links" aria-label="Links institucionais">
          <a href="#faq">Perguntas Frequentes</a>
          <a href={`mailto:${BRAND.supportEmail}`}>Suporte: {BRAND.supportEmail}</a>
        </nav>

        <div className="footer__legal">
          <span>© {BRAND.year} {BRAND.product}. Todos os direitos reservados.</span>
          <span>Produto digital independente · O Maestro</span>
        </div>
      </div>
    </footer>
  )
}
