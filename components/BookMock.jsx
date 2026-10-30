import { BRAND } from '../data/content.js'

export default function BookMock({ size = 'md' }) {
  return (
    <div className={`book-real book-real--${size}`} role="img" aria-label={`Capa do e-book ${BRAND.product}`}>
      <div className="book-real__book">
        <div className="book-real__pages" />
        <img
          className="book-real__cover"
          src="/controle-absoluto-cover.svg"
          width="1200"
          height="1733"
          alt={`Capa do ${BRAND.product}`}
          draggable="false"
          decoding="async"
        />
      </div>
    </div>
  )
}
