'use client'

import { useEffect, useRef, useState } from 'react'

/* Anima a entrada do conteúdo quando ele aparece na tela (scroll reveal). */
export default function Reveal({ children, as: Tag = 'div', className = '', style }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()} style={style}>
      {children}
    </Tag>
  )
}
