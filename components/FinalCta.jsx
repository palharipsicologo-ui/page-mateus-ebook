import Reveal from './Reveal.jsx'
import CTAButton from './CTAButton.jsx'
import { FINAL_CTA } from '../data/content.js'

export default function FinalCta() {
  return (
    <section className="section final">
      <div className="container">
        <Reveal>
          <h2 className="final__title">{FINAL_CTA.headline}</h2>
          <p className="final__sub">{FINAL_CTA.subtitle}</p>
          <div className="final__cta">
            <CTAButton size="lg">{FINAL_CTA.ctaPrimary}</CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
