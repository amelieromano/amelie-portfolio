'use client'

import FadeIn from './FadeIn'

const roles = [
  { text: '— Vice-President, UCL AI Society (2025–present)', rotation: -1 },
  { text: '— President, UCL Mexican Society (2025–present)', rotation: 1.5 },
  { text: '— Peer Researcher, LAWRS YWAB (2025–present)', rotation: -0.8 },
  { text: '— Incoming Intern, Mindverse Berlin (June 2026)', rotation: 1.2 },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--cream)',
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: '780px',
          padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 8vw, 8rem)',
        }}
      >
        {/* Header */}
        <FadeIn>
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                color: 'var(--dark-brown)',
                marginBottom: '0.75rem',
              }}
            >
              About
            </h2>
            <svg
              width="100"
              height="18"
              viewBox="0 0 100 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 9 Q12.5 1 25 9 Q37.5 17 50 9 Q62.5 1 75 9 Q87.5 17 100 9"
                stroke="#E8907A"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </FadeIn>

        {/* Body copy */}
        <FadeIn delay={0.1}>
          <div
            style={{
              fontFamily: 'var(--font-jost)',
              fontWeight: 300,
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: 'var(--dark-brown)',
              marginBottom: '3rem',
            }}
          >
            <p style={{ marginBottom: '1.5rem' }}>
              I'm a first-year History, Politics & Economics student at UCL,
              building things in AI while studying the systems that shape the
              world.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Founder of Pons — a femtech app for people with heavy menstrual
              flow. VP of UCL AI Society, where I run hackathons and events for
              700+ members alongside partners like Anthropic, AWS, and
              Entrepreneurs First.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Peer researcher at LAWRS, co-authoring published work on online
              violence against young Latinas. Incoming intern at Mindverse
              (Berlin) from June — an LLM-powered workflow tools startup.
            </p>
            <p>
              Every project here taught me something I now use everywhere else.
            </p>
          </div>
        </FadeIn>

        {/* Handwritten callout */}
        <FadeIn delay={0.2}>
          <p
            style={{
              fontFamily: 'var(--font-homemade-apple)',
              fontSize: '1.35rem',
              color: 'var(--rust)',
              marginBottom: '2.5rem',
              transform: 'rotate(-1.2deg)',
              transformOrigin: 'left center',
              lineHeight: 1.5,
            }}
          >
            I learn by doing.
          </p>
        </FadeIn>

        {/* Role annotations */}
        <FadeIn delay={0.25}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              paddingTop: '0.5rem',
            }}
          >
            {roles.map((role, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'var(--font-homemade-apple)',
                  fontSize: '0.9rem',
                  color: 'var(--rust)',
                  display: 'inline-block',
                  transform: `rotate(${role.rotation}deg)`,
                  transformOrigin: 'left center',
                  lineHeight: 1.6,
                }}
              >
                {role.text}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
