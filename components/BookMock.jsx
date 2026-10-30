import { BRAND } from '../data/content.js'

export default function BookMock({ size = 'md' }) {
  return (
    <div className={`book3d book3d--${size}`} role="img" aria-label={`Capa do e-book ${BRAND.product}`}>
      <div className="book3d__inner book3d__inner--image">
        <div className="book3d__pages" />
        <div className="book3d__cover book3d__cover--image">
          <img src="/controle-absoluto-cover.svg" alt={`Capa do ${BRAND.product}`} />
        </div>
      </div>
    </div>
  )
}
