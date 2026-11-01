import { BRAND } from '../data/content.js'

export default function BookMock({ size = 'md' }) {
  return (
    <div className={`book-real book-real--${size}`} role="img" aria-label={`Capa do e-book ${BRAND.product}`}>
      <div className="book-real__book book-real__book--exact">
        <img
          className="book-real__cover book-real__cover--exact"
          src="/controle-absoluto-exact.jpg?v=20261101-5"
          width="280"
          height="404"
          alt={`Capa do ${BRAND.product}`}
          draggable="false"
          decoding="async"
          loading="eager"
        />
      </div>
    </div>
  )
}
