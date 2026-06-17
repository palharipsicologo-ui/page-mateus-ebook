import Reveal from './Reveal.jsx'
import { Check, X } from './icons.jsx'
import { FOR_WHOM } from '../data/content.js'

export default function ForWhom() {
  return (
    <section className="section section--tight">
      <div className="container">
        <Reveal className="center-head">
          <span className="kicker">{FOR_WHOM.kicker}</span>
        </Reveal>

        <div className="forwhom">
          <Reveal className="forwhom__card forwhom__card--yes">
            <h3 className="forwhom__title gold-text">{FOR_WHOM.isFor.title}</h3>
            <ul className="forwhom__list">
              {FOR_WHOM.isFor.items.map((item, i) => (
                <li className="forwhom__item" key={i}>
                  <Check size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="forwhom__card forwhom__card--no" style={{ transitionDelay: '90ms' }}>
            <h3 className="forwhom__title">{FOR_WHOM.isNotFor.title}</h3>
            <ul className="forwhom__list">
              {FOR_WHOM.isNotFor.items.map((item, i) => (
                <li className="forwhom__item" key={i}>
                  <X size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
