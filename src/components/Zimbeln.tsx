import { useInView } from '../hooks/useInView'

const phases = [
  {
    numeral: 'I',
    title: 'Stille',
    text: 'Die Musik beginnt. Tief, kaum spürbar. Der Körper atmet. Die Gedanken verlangsamen sich.',
    color: 'rgba(180, 160, 110, 0.12)',
    borderColor: 'rgba(180, 160, 110, 0.3)',
  },
  {
    numeral: 'II',
    title: 'Absicht',
    text: 'Der Raum öffnet sich. Sanfte Frequenzen. Jeder Mensch trägt seine stille Absicht in den Kreis.',
    color: 'rgba(200, 170, 90, 0.14)',
    borderColor: 'rgba(200, 170, 90, 0.35)',
  },
  {
    numeral: 'III',
    title: 'Energie',
    text: 'Die Bässe steigen. Elektronik, die den Körper trägt. Tanzen, lachen, loslassen. Vollständige Energie.',
    color: 'rgba(212, 168, 67, 0.18)',
    borderColor: 'rgba(212, 168, 67, 0.5)',
  },
  {
    numeral: 'IV',
    title: 'Rückkehr',
    text: 'Die Musik sinkt. Stille. Was entstanden ist, setzt sich.',
    color: 'rgba(180, 150, 90, 0.12)',
    borderColor: 'rgba(180, 150, 90, 0.3)',
  },
]

export function Zimbeln() {
  const { ref, inView } = useInView(0.08)
  const { ref: refPhases, inView: inViewPhases } = useInView(0.06)
  const { ref: refEnd, inView: inViewEnd } = useInView(0.1)

  return (
    <section
      id="zimbeln"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F5E8C0 0%, #EDD87A22 0%, #FDFAF2 10%, #F8F2DE 50%, #F0E5B8 100%)',
      }}
    >
      {/* Golden light wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212, 168, 67, 0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Section label */}
        <div
          ref={ref}
          className={`section-reveal ${inView ? 'visible' : ''} text-center mb-12`}
        >
          <div
            className="inline-block mb-5 px-4 py-1.5 text-xs uppercase tracking-widest"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(139, 90, 43, 0.65)',
              border: '1px solid rgba(139, 90, 43, 0.2)',
              fontWeight: 300,
            }}
          >
            Das Format
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 300,
              color: '#2C1608',
              letterSpacing: '0.06em',
              marginBottom: '0.1em',
            }}
          >
            Zimbeln
          </h2>

          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8rem',
              color: 'rgba(139, 90, 43, 0.6)',
              letterSpacing: '0.2em',
              marginBottom: '2.5rem',
            }}
          >
            (zimb · eln)
          </div>

          {/* Decorative line with O symbol */}
          <div className="flex items-center justify-center gap-4 mb-8" aria-hidden="true">
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(139, 90, 43, 0.25))' }} />
            <svg width="20" height="20" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="7" fill="none" stroke="rgba(212, 168, 67, 0.6)" strokeWidth="1.5" />
              <circle cx="10" cy="10" r="2" fill="rgba(212, 168, 67, 0.5)" />
            </svg>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(139, 90, 43, 0.25), transparent)' }} />
          </div>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.95rem, 2.3vw, 1.1rem)',
              fontWeight: 300,
              color: '#4A2E12',
              lineHeight: 1.85,
              maxWidth: 600,
              margin: '0 auto 1.2rem',
            }}
          >
            Zimbeln ist ein Format der bewussten kollektiven Erfahrung — geboren aus elektronischer Musik und dem Wunsch, beides zu verbinden: den Körper und das Stille, das Tanzen und das Sein.
          </p>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.88rem, 2.1vw, 1rem)',
              fontWeight: 300,
              color: 'rgba(74, 46, 18, 0.7)',
              lineHeight: 1.8,
              maxWidth: 560,
              margin: '0 auto 1rem',
            }}
          >
            Der Name kommt von den Zimbeln — kleinen, klingenden Instrumenten, die in meditativen Ritualen aller Kulturen eingesetzt wurden. Ein Laut, der öffnet.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#3D1C08',
              marginTop: '1.5rem',
            }}
          >
            Zwei Stunden. Eine Welle.
          </p>
        </div>

        {/* Phase cards */}
        <div
          ref={refPhases}
          className={`section-reveal section-reveal-delay-1 ${inViewPhases ? 'visible' : ''} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14`}
        >
          {phases.map((phase, i) => (
            <div
              key={i}
              className="transition-all duration-300"
              style={{
                background: phase.color,
                border: `1px solid ${phase.borderColor}`,
                padding: '1.75rem 1.25rem',
                transitionDelay: `${i * 0.07}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(212, 168, 67, 0.15)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  letterSpacing: '0.3em',
                  color: 'rgba(139, 90, 43, 0.6)',
                  marginBottom: '0.4rem',
                  textTransform: 'uppercase',
                }}
              >
                {phase.numeral}
              </div>

              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.4rem',
                  fontWeight: 500,
                  color: '#2C1608',
                  marginBottom: '0.8rem',
                  letterSpacing: '0.02em',
                }}
              >
                {phase.title}
              </h3>

              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: '#5C3A1A',
                  lineHeight: 1.7,
                }}
              >
                {phase.text}
              </p>
            </div>
          ))}
        </div>

        {/* Closing text */}
        <div
          ref={refEnd}
          className={`section-reveal section-reveal-delay-2 ${inViewEnd ? 'visible' : ''} text-center max-w-2xl mx-auto space-y-5`}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.92rem, 2.2vw, 1.05rem)',
              fontWeight: 300,
              color: '#4A2E12',
              lineHeight: 1.85,
            }}
          >
            Zimbeln ist kein Konzert. Kein Rave. Kein Workshop. Es ist das Natürlichste der Welt: Menschen, die gemeinsam tanzen — und dabei etwas erzeugen, das größer ist als sie selbst.
          </p>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.88rem, 2.1vw, 1rem)',
              fontWeight: 300,
              color: 'rgba(74, 46, 18, 0.75)',
              lineHeight: 1.85,
            }}
          >
            Alle Formate auf einer Lichtung teilen dieselbe Intention: zwei Stunden, ein Kreis, bewusste kollektive Energie. Ob Zimbeln, Meditation, Klangkreis oder Bewegung — der Rahmen hält alles.
          </p>
        </div>
      </div>
    </section>
  )
}
