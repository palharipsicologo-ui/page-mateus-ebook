import { BRAND } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__brand">
          <span className="brand__mark">M</span>
          <span>{BRAND.product}</span>
        </div>

        <p className="footer__disclaimer">
          Este material tem caráter educativo e informativo. Não substitui avaliação,
          diagnóstico ou tratamento de um médico, urologista ou profissional de saúde
          qualificado. Os resultados variam de pessoa para pessoa e dependem da aplicação
          consistente do método. Se a ejaculação precoce persistir ou vier acompanhada de
          outros sintomas, procure um profissional de saúde.
        </p>

        <nav className="footer__links" aria-label="Links institucionais">
          {/* Substitua os '#' pelos links reais quando tiver as páginas. */}
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#faq">Perguntas Frequentes</a>
          <a href={`mailto:${BRAND.supportEmail}`}>Suporte: {BRAND.supportEmail}</a>
        </nav>

        <div className="footer__legal">
          <span>
            © {BRAND.year} {BRAND.product}. Todos os direitos reservados.
          </span>
          <span>CNPJ: {BRAND.cnpj}</span>
        </div>
      </div>
    </footer>
  )
}
