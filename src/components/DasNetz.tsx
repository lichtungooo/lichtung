import { useInView } from '../hooks/useInView'

export function DasNetz() {
  const { ref, inView } = useInView(0.08)

  return (
    <section
      id="das-netz"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: '#F7F5F0' }}
    >
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">

        <div
          ref={ref}
          className={`section-reveal ${inView ? 'visible' : ''}`}
        >
          {/* Section label */}
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 400,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.35)',
              marginBottom: '3rem',
            }}
          >
            Die Infrastruktur
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 300,
              color: '#0A0A0A',
              letterSpacing: '0.08em',
              marginBottom: '2rem',
              lineHeight: 1,
            }}
          >
            Das Netz
          </h2>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#1A1A1A',
              lineHeight: 1.7,
              marginBottom: '4rem',
              letterSpacing: '0.01em',
            }}
          >
            Damit Lichtungen sich finden.
          </p>

          {/* Three tools — minimal, prominent */}
          <div
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
              fontWeight: 300,
              color: '#0A0A0A',
              letterSpacing: '0.1em',
              marginBottom: '4rem',
              lineHeight: 1.4,
            }}
          >
            Karte. Kalender. Vertrauensnetzwerk.
          </div>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1rem, 2.4vw, 1.25rem)',
              fontWeight: 400,
              color: '#333333',
              lineHeight: 1.95,
              marginBottom: '3.5rem',
              letterSpacing: '0.01em',
            }}
          >
            Drei Werkzeuge, damit der Kreis<br />
            nicht endet, wenn die Musik schweigt —<br />
            damit Menschen sich wiederfinden,<br />
            in ihrer Stadt, auf ihrem Kontinent, auf der Erde.
          </p>

          {/* Divider */}
          <div
            style={{
              width: 1,
              height: 50,
              background: 'rgba(0,0,0,0.1)',
              margin: '0 auto 3.5rem',
            }}
            aria-hidden="true"
          />

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)',
              fontWeight: 400,
              color: '#2A2A2A',
              lineHeight: 1.9,
              marginBottom: '2.5rem',
              letterSpacing: '0.01em',
            }}
          >
            Ein Open-Source-Projekt.<br />
            Entwickelt von einem Team, das glaubt:<br />
            Verbindung ist die Grundinfrastruktur der Zukunft.
          </p>

          {/* GitHub link */}
          <a
            href="https://github.com/antontranelis/real-life-stack"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 300,
              letterSpacing: '0.15em',
              color: 'rgba(0,0,0,0.4)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(0,0,0,0.15)',
              paddingBottom: '2px',
              display: 'inline-block',
              marginBottom: '2.5rem',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'rgba(0,0,0,0.75)'
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(0,0,0,0.4)'
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'
            }}
          >
            GitHub: antontranelis/real-life-stack
          </a>

          {/* Sub-labels */}
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 300,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.25)',
            }}
          >
            Web of Trust · Karte · Kalender
          </div>
        </div>
      </div>
    </section>
  )
}
