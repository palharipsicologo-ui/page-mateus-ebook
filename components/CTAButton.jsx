import { CHECKOUT_URL } from '../data/content.js'

/* Botão de compra reutilizável.
   Todos os botões apontam para CHECKOUT_URL (definido em src/data/content.js).
   Troque lá pelo seu link da Kiwify/Hotmart e TODOS os botões atualizam. */
export default function CTAButton({ children, size, block, subtitle }) {
  const cls = ['cta', size === 'lg' && 'cta--lg', size === 'sm' && 'cta--sm', block && 'cta--block']
    .filter(Boolean)
    .join(' ')

  // Se ainda for o placeholder (#...), apenas rola a página até a oferta.
  const isPlaceholder = CHECKOUT_URL.startsWith('#')

  return (
    <div className={block ? 'cta-block-wrap' : undefined}>
      <a
        className={cls}
        href={isPlaceholder ? '#oferta' : CHECKOUT_URL}
        target={isPlaceholder ? undefined : '_blank'}
        rel={isPlaceholder ? undefined : 'noopener noreferrer'}
      >
        {children}
      </a>
      {subtitle ? <span className="cta-sub">{subtitle}</span> : null}
    </div>
  )
}
