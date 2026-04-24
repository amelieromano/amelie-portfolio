import Link from 'next/link'
import type { Metadata } from 'next'
import PrintButton from '@/components/PrintButton'

export const metadata: Metadata = {
  title: 'CV — Amélie Romano González',
  description: 'Curriculum Vitae',
}

export default function CVPage() {
  return (
    <>
      {/* Print/back controls — hidden on print */}
      <div className="cv-controls no-print">
        <Link href="/" className="cv-back">
          ← back to portfolio
        </Link>
        <PrintButton />
      </div>

      <main className="cv-page">
        {/* Header */}
        <header className="cv-header">
          <h1 className="cv-name">AMÉLIE ROMANO GONZÁLEZ</h1>
          <div className="cv-contact-line">
            <span>amelieromanogzz05@gmail.com</span>
            <span className="cv-dot">·</span>
            <span>London, UK</span>
            <span className="cv-dot">·</span>
            <span>+44 7385 862302</span>
            <span className="cv-dot">·</span>
            <a href="https://linkedin.com/in/amelieromanogonzalez" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/amelieromanogonzalez
            </a>
            <span className="cv-dot">·</span>
            <a href="https://github.com/amelieromano" target="_blank" rel="noopener noreferrer">
              github.com/amelieromano
            </a>
          </div>
        </header>

        <hr className="cv-rule" />

        {/* Education */}
        <section className="cv-section">
          <h2 className="cv-section-title">EDUCATION</h2>
          <div className="cv-entries">
            <div className="cv-entry">
              <div className="cv-entry-meta">
                <span className="cv-dates">2025–2028</span>
                <div>
                  <p className="cv-entry-title">BA History, Politics & Economics — UCL, London</p>
                </div>
              </div>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-meta">
                <span className="cv-dates">2024–2025</span>
                <div>
                  <p className="cv-entry-title">Foundation: Mathematics & Economics — KCL, London</p>
                  <p className="cv-entry-sub">78.5% overall (A equivalent)</p>
                </div>
              </div>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-meta">
                <span className="cv-dates">2021–2024</span>
                <div>
                  <p className="cv-entry-title">
                    Multicultural High School Diploma (Bilingual) — Prepa Tec Santa Catarina, Mexico
                  </p>
                  <p className="cv-entry-sub">97.2/100 · High Honors</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="cv-rule" />

        {/* Projects & Certifications */}
        <section className="cv-section">
          <h2 className="cv-section-title">PROJECTS & CERTIFICATIONS</h2>
          <div className="cv-entries">
            <div className="cv-entry">
              <p className="cv-entry-title">Pons — Founder (2026–present)</p>
              <p className="cv-body">
                Femtech AI companion for menstrual health. Phased product roadmap (app → NFC stickers
                → hardware sensors). Built with Claude Code, n8n automation, AI-assisted development.
              </p>
            </div>
            <div className="cv-entry">
              <p className="cv-entry-title">
                GitHub Portfolio —{' '}
                <a href="https://github.com/amelieromano" target="_blank" rel="noopener noreferrer">
                  github.com/amelieromano
                </a>
              </p>
              <p className="cv-body">
                Papillon image classifier (PyTorch/ResNet18, 91.7% accuracy); HPE RAG study agent;
                further projects in progress.
              </p>
            </div>
            <div className="cv-entry">
              <p className="cv-entry-title">Certifications</p>
              <p className="cv-body">
                Anthropic Academy: AI Fluency, Building with Claude API, Claude Code in Action; AWS
                AI & ML Scholars (in progress)
              </p>
            </div>
          </div>
        </section>

        <hr className="cv-rule" />

        {/* Leadership */}
        <section className="cv-section">
          <h2 className="cv-section-title">LEADERSHIP & EXTRACURRICULAR</h2>
          <div className="cv-entries">
            <div className="cv-entry">
              <p className="cv-entry-title">Vice-President — UCL AI Society (2025–present)</p>
              <p className="cv-body">
                Co-lead AI hackathons and agentic AI competitions; coordinate speaker events with
                Anthropic, AWS, Entrepreneurs First; oversee ML tutorial series for 700+ community
                members.
              </p>
            </div>
            <div className="cv-entry">
              <p className="cv-entry-title">President — UCL Mexican Society (2025–present)</p>
            </div>
          </div>
        </section>

        <hr className="cv-rule" />

        {/* Professional Experience */}
        <section className="cv-section">
          <h2 className="cv-section-title">PROFESSIONAL EXPERIENCE</h2>
          <div className="cv-entries">
            <div className="cv-entry">
              <p className="cv-entry-title">
                Young Women's Advisory Board Member — LAWRS, London (May 2025–present)
              </p>
              <p className="cv-body">
                Mixed-methods research on online harassment and gender-based violence; data analysis
                (Excel, Stata); policy recommendations presented at University of London policymaking
                sessions.
              </p>
            </div>
            <div className="cv-entry">
              <p className="cv-entry-title">
                Pilates Instructor & Operations Assistant — Zen Soul Studio, Monterrey (Apr 2024–Sep
                2025)
              </p>
              <p className="cv-body">
                Client records, payment systems, revenue tracking (Excel); day-to-day studio
                operations.
              </p>
            </div>
            <div className="cv-entry">
              <p className="cv-entry-title">
                Public Speech Instructor — +Comunicación, Monterrey (Apr–Aug 2022)
              </p>
              <p className="cv-body">
                Certified coach; students won regional debate competitions.
              </p>
            </div>
          </div>
        </section>

        <hr className="cv-rule" />

        {/* Skills */}
        <section className="cv-section">
          <h2 className="cv-section-title">SKILLS</h2>
          <div className="cv-skills">
            <div className="cv-skill-row">
              <span className="cv-skill-label">Languages</span>
              <span className="cv-body">English (fluent), Spanish (fluent), French (conversational)</span>
            </div>
            <div className="cv-skill-row">
              <span className="cv-skill-label">Technical</span>
              <span className="cv-body">Python (intermediate), JavaScript (learning), Excel, Stata</span>
            </div>
            <div className="cv-skill-row">
              <span className="cv-skill-label">AI & Automation</span>
              <span className="cv-body">Claude Code, n8n, Make, Zapier, prompt engineering</span>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .cv-controls {
          position: sticky;
          top: 0;
          background: #fff;
          border-bottom: 1px solid #e5e5e5;
          padding: 0.75rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
        }

        .cv-back {
          font-family: var(--font-jost), sans-serif;
          font-weight: 400;
          font-size: 0.875rem;
          color: #888;
          text-decoration: none;
          transition: color 0.2s;
        }

        .cv-back:hover { color: #333; }

        .cv-print-btn {
          font-family: var(--font-jost), sans-serif;
          font-weight: 400;
          font-size: 0.875rem;
          background: #333;
          color: #fff;
          border: none;
          padding: 0.4rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .cv-print-btn:hover { background: #000; }

        .cv-page {
          max-width: 780px;
          margin: 0 auto;
          padding: 3rem 2rem 4rem;
          font-family: var(--font-jost), sans-serif;
          font-weight: 300;
          color: #111;
          background: #fff;
        }

        .cv-name {
          font-family: var(--font-jost), sans-serif;
          font-weight: 500;
          font-size: 1.5rem;
          letter-spacing: 0.08em;
          color: #111;
          margin-bottom: 0.6rem;
        }

        .cv-contact-line {
          font-size: 0.82rem;
          font-weight: 300;
          color: #444;
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          align-items: center;
          line-height: 1.6;
        }

        .cv-contact-line a {
          color: #444;
          text-decoration: none;
        }

        .cv-contact-line a:hover { text-decoration: underline; }

        .cv-dot { opacity: 0.4; }

        .cv-rule {
          border: none;
          border-top: 1px solid #ddd;
          margin: 1.75rem 0;
        }

        .cv-section { margin-bottom: 0.25rem; }

        .cv-section-title {
          font-family: var(--font-jost), sans-serif;
          font-weight: 500;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: #888;
          margin-bottom: 1rem;
        }

        .cv-entries { display: flex; flex-direction: column; gap: 1rem; }

        .cv-entry-meta {
          display: grid;
          grid-template-columns: 90px 1fr;
          gap: 1rem;
          align-items: baseline;
        }

        .cv-dates {
          font-size: 0.82rem;
          color: #888;
          font-weight: 300;
          white-space: nowrap;
          padding-top: 0.1rem;
        }

        .cv-entry-title {
          font-weight: 400;
          font-size: 0.95rem;
          color: #111;
          margin-bottom: 0.2rem;
        }

        .cv-entry-title a { color: #111; text-decoration: none; }
        .cv-entry-title a:hover { text-decoration: underline; }

        .cv-entry-sub {
          font-size: 0.85rem;
          color: #666;
          font-weight: 300;
        }

        .cv-body {
          font-size: 0.9rem;
          color: #444;
          font-weight: 300;
          line-height: 1.7;
          margin-top: 0.2rem;
        }

        .cv-skills { display: flex; flex-direction: column; gap: 0.6rem; }

        .cv-skill-row {
          display: grid;
          grid-template-columns: 130px 1fr;
          gap: 1rem;
          align-items: baseline;
        }

        .cv-skill-label {
          font-weight: 400;
          font-size: 0.9rem;
          color: #111;
        }

        @media print {
          .no-print { display: none !important; }
          .cv-controls { display: none !important; }
          .cv-page {
            max-width: 100%;
            padding: 1.5cm 2cm;
            font-size: 10pt;
          }
          body { background: white; }
          a { color: inherit; }
        }

        @media (max-width: 600px) {
          .cv-contact-line { font-size: 0.78rem; }
          .cv-entry-meta { grid-template-columns: 1fr; gap: 0.2rem; }
          .cv-dates { font-size: 0.78rem; }
          .cv-skill-row { grid-template-columns: 1fr; gap: 0.15rem; }
        }
      `}</style>
    </>
  )
}
