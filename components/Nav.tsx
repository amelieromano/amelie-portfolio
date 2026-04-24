'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1.25rem clamp(1.5rem, 8vw, 4rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'background 0.35s ease, backdrop-filter 0.35s ease',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        backgroundColor: scrolled ? 'rgba(250, 246, 240, 0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(44, 26, 14, 0.06)' : '1px solid transparent',
      }}
    >
      {/* Wordmark */}
      <span
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontStyle: 'italic',
          fontWeight: 700,
          fontSize: '1.15rem',
          color: 'var(--dark-brown)',
          letterSpacing: '0.02em',
        }}
      >
        ARG
      </span>

      {/* Links */}
      <div
        className="nav-links"
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        {['work', 'creative', 'about', 'contact'].map((id) => (
          <a key={id} href={`#${id}`} className="nav-link">
            {id}
          </a>
        ))}
        <Link href="/cv" className="cv-pill" style={cvPillStyle}>
          cv ↓
        </Link>
      </div>
    </nav>
  )
}

const cvPillStyle: React.CSSProperties = {
  backgroundColor: 'var(--rust)',
  color: 'var(--cream)',
  padding: '0.4rem 1.1rem',
  borderRadius: '100px',
  textDecoration: 'none',
  fontFamily: 'var(--font-homemade-apple)',
  fontSize: '0.875rem',
}
