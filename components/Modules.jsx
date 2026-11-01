import Reveal from './Reveal.jsx'
import CTAButton from './CTAButton.jsx'
import { MODULES } from '../data/content.js'

export default function Modules() {
  return (
    <>
      <hr className="section-divider" />
      <section className="section" id="conteudo">
        <div className="container">
          <Reveal className="center-head">
            <span className="kicker">{MODULES.kicker}</span>
            <h2 className="section-title">{MODULES.headline}</h2>
            <p className="section-sub">{MODULES.subhead}</p>
          </Reveal>

          <div className="modules__grid modules__grid--teaser">
            {MODULES.list.map((mod, i) => (
              <Reveal className="module module--teaser" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="module__tag">{mod.tag}</span>
                <h3 className="module__name">{mod.name}</h3>
                <p className="module__subtitle">{mod.subtitle}</p>
                <p className="module__hook">{mod.hook}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center" style={{ marginTop: '44px' }}>
            <CTAButton size="lg">QUERO DOMINAR ESSAS ALAVANCAS</CTAButton>
          </Reveal>
        </div>
      </section>
    </>
  )
}
