'use client'

import FadeIn from './FadeIn'

const panels = [
  { label: 'Photography', color: '#B8456B', rotate: 1.2 },
  { label: 'Mixed Media', color: '#E8907A', rotate: -1.0 },
  { label: 'Writing', color: '#D4607A', rotate: 1.5 },
]

export default function Creative() {
  return (
    <section
      id="creative"
      style={{
        padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 8vw, 8rem)',
        backgroundColor: 'var(--burgundy)',
        color: 'var(--cream)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Organic blob accent top-right */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-60px',
          opacity: 0.06,
          pointerEvents: 'none',
        }}
        width="400"
        height="400"
        viewBox="0 0 400 400"
      >
        <ellipse cx="200" cy="200" rx="180" ry="160" fill="#B8456B" />
      </svg>

      {/* Heading */}
      <FadeIn>
        <div style={{ marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              color: 'var(--cream)',
              marginBottom: '0.75rem',
            }}
          >
            Creative
          </h2>
          <svg
            width="140"
            height="18"
            viewBox="0 0 140 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 9 Q17.5 1 35 9 Q52.5 17 70 9 Q87.5 1 105 9 Q122.5 17 140 9"
              stroke="#E8907A"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </FadeIn>

      {/* Subheading */}
      <FadeIn delay={0.1}>
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
            color: 'var(--cream)',
            maxWidth: '34ch',
            marginBottom: '0.75rem',
            opacity: 0.85,
            lineHeight: 1.4,
          }}
        >
          The rest of the work — images, objects, words.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-homemade-apple)',
            fontSize: '0.9rem',
            color: 'var(--dusty-rose)',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
            transform: 'rotate(-1deg)',
            transformOrigin: 'left center',
            opacity: 0.75,
          }}
        >
          coming soon — film, collage, words
        </p>
      </FadeIn>

      {/* Three panels */}
      <FadeIn delay={0.2}>
        <div className="creative-grid" style={{ marginBottom: '3rem' }}>
          {panels.map((panel) => (
            <div key={panel.label}>
              <div
                style={{
                  backgroundColor: panel.color,
                  aspectRatio: '2 / 3',
                  borderRadius: '3px',
                  marginBottom: '1rem',
                  transform: `rotate(${panel.rotate}deg)`,
                  transformOrigin: 'center bottom',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-homemade-apple)',
                  fontSize: '1rem',
                  color: 'var(--cream)',
                  display: 'block',
                  textAlign: 'center',
                  transform: `rotate(${panel.rotate * 0.6}deg)`,
                  opacity: 0.9,
                }}
              >
                {panel.label}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.35}>
        <p
          style={{
            fontFamily: 'var(--font-homemade-apple)',
            fontSize: '0.95rem',
            color: 'var(--dusty-rose)',
            opacity: 0.8,
          }}
        >
          more soon ↗
        </p>
      </FadeIn>
    </section>
  )
}
