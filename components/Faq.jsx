'use client'

import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { Plus } from './icons.jsx'
import { FAQ } from '../data/content.js'

export default function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <>
      <hr className="section-divider" />
      <section className="section" id="faq">
        <div className="container">
          <Reveal className="center-head">
            <span className="kicker">{FAQ.kicker}</span>
            <h2 className="section-title">{FAQ.headline}</h2>
          </Reveal>

          <div className="faq__list">
            {FAQ.items.map((item, i) => {
              const isOpen = open === i
              return (
                <div className="faq__item" data-open={isOpen} key={i}>
                  <button
                    className="faq__q"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq__icon">
                      <Plus size={22} />
                    </span>
                  </button>
                  <div className="faq__a">
                    <div className="faq__a-inner">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
