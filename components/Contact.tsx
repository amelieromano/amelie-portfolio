'use client'

import Link from 'next/link'
import FadeIn from './FadeIn'
import ConcentricCircles from './ConcentricCircles'

const links = [
  {
    label: 'amelieromanogzz05@gmail.com',
    href: 'mailto:amelieromanogzz05@gmail.com',
    external: false,
  },
  {
    label: 'github.com/amelieromano',
    href: 'https://github.com/amelieromano',
    external: true,
  },
  {
    label: 'linkedin.com/in/amelieromanogonzalez',
    href: 'https://linkedin.com/in/amelieromanogonzalez',
    external: true,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 8vw, 8rem)',
        backgroundColor: 'var(--off-white)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background concentric circles — muted */}
      <div
        style={{
          position: 'absolute',
          left: '-12%',
          bottom: '-15%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <ConcentricCircles size={560} opacity={0.07} />
      </div>

      {/* Heading */}
      <FadeIn>
        <div style={{ position: 'relative', zIndex: 1, marginBottom: '1rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(3rem, 7vw, 7rem)',
              color: 'var(--dark-brown)',
              lineHeight: 1.0,
              marginBottom: '1.25rem',
            }}
          >
            Say hello.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-homemade-apple)',
              fontSize: '0.95rem',
              color: 'var(--rust)',
              marginBottom: '3.5rem',
            }}
          >
            open to part-time roles from september ↗
          </p>
        </div>
      </FadeIn>

      {/* Contact links */}
      <FadeIn delay={0.15}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="contact-link"
              style={{
                fontFamily: 'var(--font-jost)',
                fontWeight: 300,
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Footer bar */}
      <FadeIn delay={0.3}>
        <div
          style={{
            marginTop: '5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(44, 26, 14, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-jost)',
                fontWeight: 300,
                fontSize: '0.85rem',
                color: 'var(--dark-brown)',
                opacity: 0.45,
              }}
            >
              © 2025 Amélie Romano · London, UK
            </span>
            <span
              style={{
                fontFamily: 'var(--font-homemade-apple)',
                fontSize: '0.8rem',
                color: 'var(--dusty-rose)',
                opacity: 0.65,
                transform: 'rotate(-0.5deg)',
                transformOrigin: 'left center',
                display: 'inline-block',
              }}
            >
              London, 2025
            </span>
          </div>
          <Link
            href="/cv"
            className="cv-pill"
            style={{
              backgroundColor: 'var(--rust)',
              color: 'var(--cream)',
              padding: '0.5rem 1.25rem',
              borderRadius: '100px',
              textDecoration: 'none',
              fontFamily: 'var(--font-homemade-apple)',
              fontSize: '0.9rem',
            }}
          >
            download cv ↓
          </Link>
        </div>
      </FadeIn>
    </section>
  )
}
