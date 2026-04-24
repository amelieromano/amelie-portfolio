'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import FadeIn from './FadeIn'
import { image } from 'framer-motion/client'

const projects = [
  {
    name: 'Pons',
    category: 'femtech · founder',
    description:
      'AI companion for heavy menstrual flow. Phased roadmap from app to NFC stickers to hardware sensors. Built with Claude Code + n8n.',
    color: '#B8456B',
    shadowColor: 'rgba(184, 69, 107, 0.25)',
    links: [],
  },
  {
    name: 'HPE Study Agent',
    category: 'RAG · AI',
    description:
      'RAG pipeline on personal UCL course materials. Custom chunking, embeddings, prompt engineering. Built to understand every decision.',
    color: '#4A5E3A',
    shadowColor: 'rgba(74, 94, 58, 0.25)',
    image: '/projects/hpe-agent-preview.png',
    links: [
      { label: 'view on github →', href: 'https://github.com/amelieromano/study-agent-hpe' },
    ],
  },
  {
    name: 'Papillon Classifier',
    category: 'ML · computer vision',
    description:
      'ResNet18 image classifier, 91.7% accuracy. PyTorch + Gradio. First ML project, built from zero.',
    color: '#E8907A',
    shadowColor: 'rgba(232, 144, 122, 0.25)',
    image: '/projects/papillon-preview.png',
    links: [
      { label: 'view on github →', href: 'https://github.com/amelieromano/papillon-classifier' },
      { label: 'live demo ↗', href: 'https://huggingface.co/spaces/amelieromano/papillon-classifier' },
    ],
  },
  {
    name: 'E-commerce Automation',
    category: 'n8n · Make · Zapier',
    description:
      'Workflow automation for small business clients — intake flows, CRM sync, order notifications.',
    color: '#D4607A',
    shadowColor: 'rgba(212, 96, 122, 0.25)',
    links: [],
  },
  {
    name: 'LAWRS Research',
    category: 'policy · research',
    description:
      "Co-authored published report on online abuse and fetishisation of young Latinas. Peer researcher, Young Women's Advisory Board.",
    color: '#3D1028',
    shadowColor: 'rgba(61, 16, 40, 0.3)',
    image: '/projects/YWAB-report-preview.jpg',
    links: [
      { label: 'read the report ↓', href: '/projects/YWAB-Peer-research-report-2025.pdf' },
    ],
  },
]

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.05 }}
      className={`project-row${isEven ? '' : ' reverse'}`}
    >
      {/* Thumbnail or colour placeholder */}
      <motion.div
        className="project-placeholder"
        whileHover={{
          y: -10,
          boxShadow: `0 28px 70px ${project.shadowColor}`,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          backgroundColor: project.color,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {'image' in project && project.image && (
          <Image
            src={project.image}
            alt={project.name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        )}
      </motion.div>

      {/* Text */}
      <div className="project-text">
        <span
          style={{
            fontFamily: 'var(--font-homemade-apple)',
            fontSize: '0.95rem',
            color: 'var(--rust)',
            display: 'inline-block',
            transform: 'rotate(-1.5deg)',
            marginBottom: '0.85rem',
          }}
        >
          {project.category}
        </span>

        <h3
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3.75rem)',
            color: 'var(--dark-brown)',
            lineHeight: 1.05,
            marginBottom: '1rem',
          }}
        >
          {project.name}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-jost)',
            fontWeight: 300,
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--dark-brown)',
            opacity: 0.75,
            maxWidth: '38ch',
          }}
        >
          {project.description}
        </p>

        {project.links.length > 0 && (
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.4rem', flexWrap: 'wrap' }}>
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-homemade-apple)',
                  fontSize: '0.9rem',
                  color: 'var(--rust)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--dusty-rose)',
                  paddingBottom: '0.15rem',
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Work() {
  return (
    <section
      id="work"
      style={{
        padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 8vw, 8rem)',
        backgroundColor: 'var(--off-white)',
      }}
    >
      {/* Section header */}
      <FadeIn>
        <div style={{ marginBottom: 'clamp(3.5rem, 7vw, 7rem)' }}>
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
            Work
          </h2>
          {/* Organic wave */}
          <svg
            width="140"
            height="18"
            viewBox="0 0 140 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 9 Q17.5 1 35 9 Q52.5 17 70 9 Q87.5 1 105 9 Q122.5 17 140 9"
              stroke="#B8456B"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <p
            style={{
              fontFamily: 'var(--font-homemade-apple)',
              fontSize: '0.85rem',
              color: 'var(--dusty-rose)',
              marginTop: '0.85rem',
              transform: 'rotate(-0.6deg)',
              transformOrigin: 'left center',
              opacity: 0.75,
            }}
          >
            selected projects, 2024–present
          </p>
        </div>
      </FadeIn>

      {projects.map((project, i) => (
        <ProjectRow key={project.name} project={project} index={i} />
      ))}
    </section>
  )
}
