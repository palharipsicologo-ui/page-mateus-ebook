import Reveal from './Reveal.jsx'
import { PAIN } from '../data/content.js'

const THOUGHTS = [
  'E se eu terminar antes de começar de verdade?',
  'Será que ela percebeu que estou nervoso?',
  'E se a ereção falhar bem agora?',
  'Será que vou decepcionar de novo?',
]

export default function Pain() {
  return (
    <section className="section pain-section" id="problema">
      <div className="container">
        <div className="pain__layout">
          <div className="pain__main">
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

          <Reveal className="pain__thoughts">
            <span className="pain__thoughts-eyebrow">A VERDADE QUE POUCOS FALAM</span>
            <h3>Na hora H, a cabeça não desliga.</h3>
            <div className="pain__thoughts-list">
              {THOUGHTS.map((thought) => (
                <p className="pain__thought" key={thought}>
                  <span aria-hidden="true">“</span>{thought}<span aria-hidden="true">”</span>
                </p>
              ))}
            </div>
            <p className="pain__thoughts-end">
              Quando você entra preocupado em falhar, até o prazer parece uma prova.
              É hora de mudar esse roteiro.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
