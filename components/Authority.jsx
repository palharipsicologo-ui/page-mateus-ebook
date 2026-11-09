import Reveal from './Reveal.jsx'
import { AUTHORITY } from '../data/content.js'

export default function Authority() {
  return (
    <section className="section authority">
      <div className="container">
        <div className="authority__inner">
          <Reveal className="authority__seal authority__seal--king authority__seal--exact" aria-label="Símbolo do Maestro: rei de xadrez">
            <img className="authority__king-image authority__king-image--exact" src="/maestro-rei-premium.jpg" width="1536" height="1536" alt="Rei de xadrez preto e dourado, símbolo do Maestro" />
          </Reveal>

          <Reveal>
            <span className="kicker">{AUTHORITY.kicker}</span>
            <h2 className="authority__name">{AUTHORITY.name}</h2>
            <p className="authority__role">{AUTHORITY.role}</p>
            <div className="authority__text">
              {AUTHORITY.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="authority__pillars">
              {AUTHORITY.pillars.map((pl, i) => (
                <div className="pillar" key={i}>
                  <div className="pillar__title">{pl.title}</div>
                  <div className="pillar__text">{pl.text}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
