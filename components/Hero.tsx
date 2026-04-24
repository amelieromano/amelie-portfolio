'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ConcentricCircles from './ConcentricCircles'

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--off-white)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 'clamp(7rem, 12vw, 12rem) clamp(1.5rem, 8vw, 8rem) clamp(5rem, 8vw, 8rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Concentric circles — layered behind name */}
      <div
        style={{
          position: 'absolute',
          right: '-8%',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <ConcentricCircles size={720} opacity={0.13} />
      </div>

      {/* Small accent circle top-left */}
      <div
        style={{
          position: 'absolute',
          left: '-4%',
          top: '8%',
          pointerEvents: 'none',
          zIndex: 0,
          transform: 'rotate(15deg)',
        }}
      >
        <ConcentricCircles size={200} opacity={0.08} />
      </div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontStyle: 'italic',
          fontWeight: 700,
          fontSize: 'clamp(3.5rem, 9vw, 9rem)',
          lineHeight: 1.0,
          color: 'var(--dark-brown)',
          maxWidth: '14ch',
          marginBottom: '1.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        Amélie Romano
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.42 }}
        style={{
          fontFamily: 'var(--font-homemade-apple)',
          fontSize: '1.05rem',
          color: 'var(--rust)',
          marginBottom: '0.65rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        builder · researcher · maker
      </motion.p>

      {/* Location annotation */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.54 }}
        style={{
          fontFamily: 'var(--font-homemade-apple)',
          fontSize: '0.85rem',
          color: 'var(--dusty-rose)',
          marginBottom: '2.5rem',
          position: 'relative',
          zIndex: 1,
          transform: 'rotate(-0.8deg)',
          transformOrigin: 'left center',
          opacity: 0.8,
        }}
      >
        London, UK ↗
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.62 }}
        className="hero-buttons"
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <a
          href="#work"
          className="hero-btn"
          style={{
            backgroundColor: 'var(--rust)',
            color: 'var(--cream)',
            padding: '0.8rem 2.25rem',
            borderRadius: '100px',
            textDecoration: 'none',
            fontFamily: 'var(--font-jost)',
            fontWeight: 400,
            fontSize: '0.95rem',
            letterSpacing: '0.01em',
          }}
        >
          See my work ↓
        </a>
        <Link
          href="/cv"
          className="hero-btn"
          style={{
            backgroundColor: 'transparent',
            color: 'var(--dark-brown)',
            padding: '0.8rem 2.25rem',
            borderRadius: '100px',
            textDecoration: 'none',
            fontFamily: 'var(--font-jost)',
            fontWeight: 400,
            fontSize: '0.95rem',
            border: '1.5px solid rgba(44, 26, 14, 0.4)',
            letterSpacing: '0.01em',
          }}
        >
          Download CV ↓
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.3 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-jost)',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--dark-brown)',
            opacity: 0.4,
          }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 1,
            height: 44,
            background: 'linear-gradient(to bottom, var(--rust), transparent)',
            opacity: 0.5,
          }}
        />
      </motion.div>
    </section>
  )
}
