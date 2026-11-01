import { BRAND } from '../data/content.js'

export default function BookMock({ size = 'md' }) {
  return (
    <div className={`book-real book-real--${size}`} role="img" aria-label={`Capa do e-book ${BRAND.product}`}>
      <div className="book-real__book">
        <div className="book-real__pages" />
        <img
          className="book-real__cover"
          src="/controle-absoluto-final.svg?v=20261101-3"
          width="1080"
          height="1560"
          alt={`Capa do ${BRAND.product}`}
          draggable="false"
          decoding="async"
          loading="eager"
        />
      </div>
    </div>
  )
}
