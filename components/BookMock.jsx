import { BRAND } from '../data/content.js'

export default function BookMock({ size = 'md' }) {
  return (
    <div className={`book-real book-real--${size}`} role="img" aria-label={`Capa do e-book ${BRAND.product}`}>
      <div className="book-real__book">
        <div className="book-real__pages" />
        <img
          className="book-real__cover"
          src="/controle-absoluto-final.webp?v=20261101-1"
          width="320"
          height="462"
          alt={`Capa do ${BRAND.product}`}
          draggable="false"
          decoding="async"
          loading="eager"
        />
      </div>
    </div>
  )
}
