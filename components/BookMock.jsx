import { BRAND } from '../data/content.js'

/* Mockup 3D do e-book (capa + lombada + miolo), feito em CSS — sem imagem externa.
   size: 'md' (hero) | 'sm' (oferta) */
export default function BookMock({ size = 'md' }) {
  return (
    <div className={`book3d book3d--${size}`} role="img" aria-label={`Capa do e-book ${BRAND.product}`}>
      <div className="book3d__inner">
        <div className="book3d__pages" />
        <div className="book3d__cover">
          <span className="book3d__emblem">M</span>
          <span className="book3d__kicker">Protocolo</span>
          <h3 className="book3d__title">
            Controle
            <em>Absoluto</em>
          </h3>
          <span className="book3d__rule" />
          <span className="book3d__tagline">O método de 30 dias para o controle total</span>
          <span className="book3d__author">por {BRAND.author}</span>
        </div>
      </div>
    </div>
  )
}
