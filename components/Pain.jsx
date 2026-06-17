import Reveal from './Reveal.jsx'
import { PAIN } from '../data/content.js'

export default function Pain() {
  return (
    <section className="section" id="problema">
      <div className="container">
        <Reveal>
          <span className="kicker">{PAIN.kicker}</span>
          <h2 className="pain__headline">{PAIN.headline}</h2>
          <div className="pain__body">
            {PAIN.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="relief">
          <h3 className="relief__title gold-text">{PAIN.reliefTitle}</h3>
          <p className="relief__text">{PAIN.reliefText}</p>
        </Reveal>
      </div>
    </section>
  )
}
