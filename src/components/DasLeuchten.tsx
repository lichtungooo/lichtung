import { useInView } from '../hooks/useInView'

export function DasLeuchten() {
  const { ref, inView } = useInView(0.08)

  return (
    <section
      id="das-leuchten"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: '#FFFFFF' }}
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
            Die Vision
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 300,
              color: '#0A0A0A',
              letterSpacing: '0.08em',
              marginBottom: '4rem',
              lineHeight: 1,
            }}
          >
            Das Leuchten
          </h2>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#0A0A0A',
              lineHeight: 1.7,
              marginBottom: '3rem',
              letterSpacing: '0.01em',
            }}
          >
            Stell dir vor: Hunderttausende solcher Kreise.<br />
            Gleichzeitig. Überall auf der Erde.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)',
              fontWeight: 400,
              color: '#2A2A2A',
              lineHeight: 1.95,
              marginBottom: '3rem',
              letterSpacing: '0.01em',
            }}
          >
            Menschen, die tanzen und lachen.<br />
            Felder, die sich berühren.<br />
            Eine Erde, die leuchtet.
          </p>

          {/* Divider */}
          <div
            style={{
              width: 1,
              height: 50,
              background: 'rgba(0,0,0,0.1)',
              margin: '0 auto 3rem',
            }}
            aria-hidden="true"
          />

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.3rem, 3.2vw, 1.8rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#0A0A0A',
              lineHeight: 1.6,
              marginBottom: '2rem',
              letterSpacing: '0.01em',
            }}
          >
            Das ist Verbindungskunst.<br />
            Das ist Lichtung.
          </p>

          {/* Documenta label */}
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 400,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.3)',
              marginTop: '4rem',
            }}
          >
            documenta 16 · Kassel · 2027
          </div>
        </div>
      </div>
    </section>
  )
}
