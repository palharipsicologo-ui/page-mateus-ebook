'use client'

import { useEffect, useState } from 'react'
import CTAButton from './CTAButton.jsx'
import { PRICE } from '../data/content.js'

export default function StickyCTA() {
  const [scrolled, setScrolled] = useState(false)
  const [offerInView, setOfferInView] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const offer = document.getElementById('oferta')
    let obs
    if (offer) {
      obs = new IntersectionObserver((entries) => setOfferInView(entries[0].isIntersecting), {
        threshold: 0.15,
      })
      obs.observe(offer)
    }
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (obs) obs.disconnect()
    }
  }, [])

  const visible = scrolled && !offerInView

  return (
    <div className={`sticky-cta ${visible ? 'is-visible' : ''}`} aria-hidden={!visible}>
      <div className="sticky-cta__info">
        <span className="sticky-cta__price">{PRICE.current}</span>
        <span className="sticky-cta__note">{PRICE.cash}</span>
      </div>
      <CTAButton size="sm">Garantir agora</CTAButton>
    </div>
  )
}
