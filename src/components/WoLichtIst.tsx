import { useInView } from '../hooks/useInView'

export function WoLichtIst() {
  const { ref, inView } = useInView(0.1)
  const { ref: ref2, inView: inView2 } = useInView(0.08)

  return (
    <section
      id="das-licht"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* Watermark — atmospheric background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(5vw, 8vw, 10vw)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(0,0,0,0.035)',
            whiteSpace: 'nowrap',
            letterSpacing: '0.02em',
            userSelect: 'none',
            lineHeight: 1,
          }}
        >
          Wo Licht ist, gibt es keinen Schatten.
        </span>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">

        {/* Lyrical opening */}
        <div
          ref={ref}
          className={`section-reveal ${inView ? 'visible' : ''}`}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
              fontWeight: 400,
              color: '#0A0A0A',
              lineHeight: 1.7,
              marginBottom: '3rem',
              letterSpacing: '0.01em',
            }}
          >
            Die Menschheit erinnert sich.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)',
              fontWeight: 400,
              color: '#2A2A2A',
              lineHeight: 1.9,
              marginBottom: '2.5rem',
              letterSpacing: '0.01em',
            }}
          >
            In echtem Lachen. Im Schweigen zwischen zwei Menschen,
            die sich wirklich begegnet sind.
            Im Staunen vor dem Sternenhimmel.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#0A0A0A',
              lineHeight: 1.6,
              marginBottom: '4rem',
              letterSpacing: '0.01em',
            }}
          >
            Das Licht war immer da.
          </p>

          {/* Divider */}
          <div
            style={{
              width: 1,
              height: 60,
              background: 'rgba(0,0,0,0.12)',
              margin: '0 auto 4rem',
            }}
            aria-hidden="true"
          />

          {/* Main quote */}
          <blockquote
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.4rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#0A0A0A',
              lineHeight: 1.5,
              marginBottom: '4rem',
              letterSpacing: '0.01em',
            }}
          >
            „Wo Licht ist, gibt es keinen Schatten."
          </blockquote>
        </div>

        {/* Brief expansion */}
        <div
          ref={ref2}
          className={`section-reveal section-reveal-delay-1 ${inView2 ? 'visible' : ''}`}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1rem, 2.4vw, 1.25rem)',
              fontWeight: 400,
              color: '#333333',
              lineHeight: 1.9,
              marginBottom: '2rem',
              letterSpacing: '0.01em',
            }}
          >
            Alle Kulturen der Erde erinnern sich an dasselbe: eine Zeit,
            in der die Menschen in Verbindung waren.
            Mit der Erde, miteinander, mit dem Größeren.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1rem, 2.4vw, 1.25rem)',
              fontWeight: 400,
              color: '#333333',
              lineHeight: 1.9,
              marginBottom: '2rem',
              letterSpacing: '0.01em',
            }}
          >
            Das ist Erinnerung. Und Erinnerungen werden wach.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#1A1A1A',
              lineHeight: 1.8,
              letterSpacing: '0.01em',
            }}
          >
            Der Kreis ist die älteste Form dieser Verbindung.
          </p>
        </div>
      </div>
    </section>
  )
}
