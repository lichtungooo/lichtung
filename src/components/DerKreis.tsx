import { useInView } from '../hooks/useInView'

export function DerKreis() {
  const { ref, inView } = useInView(0.08)
  const { ref: refCircle, inView: inViewCircle } = useInView(0.1)
  const { ref: refPoles, inView: inViewPoles } = useInView(0.1)

  return (
    <section
      id="der-kreis"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: '#FDFBF7' }}
    >
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">

        {/* Section label */}
        <div
          ref={ref}
          className={`section-reveal ${inView ? 'visible' : ''}`}
        >
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
            Die Praxis
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 300,
              color: '#0A0A0A',
              letterSpacing: '0.08em',
              marginBottom: '3.5rem',
              lineHeight: 1,
            }}
          >
            Der Kreis
          </h2>

          {/* Main description */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.1rem, 2.8vw, 1.45rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              lineHeight: 2,
              marginBottom: '4rem',
              letterSpacing: '0.01em',
            }}
          >
            Ein Kreis von Menschen.<br />
            Unter freiem Himmel oder in einem Raum.<br />
            Musik, die aufbaut. Bewegung, die löst. Stille, die trägt.<br />
            Zwei Stunden. Ein Feld.
          </p>

          {/* Zimbeln — brief */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1rem, 2.4vw, 1.25rem)',
              fontWeight: 400,
              color: '#333333',
              lineHeight: 1.9,
              marginBottom: '4rem',
              letterSpacing: '0.01em',
            }}
          >
            Das Format heißt Zimbeln.<br />
            Elektronische Musik, die aufbaut.<br />
            Körper, die sich erinnern.<br />
            Stille, die am Ende trägt.
          </p>
        </div>

        {/* Circle visualization */}
        <div
          ref={refCircle}
          className={`section-reveal section-reveal-delay-1 ${inViewCircle ? 'visible' : ''} flex justify-center mb-16`}
        >
          <CircleVisualization />
        </div>

        {/* Poles description */}
        <div
          ref={refPoles}
          className={`section-reveal section-reveal-delay-2 ${inViewPoles ? 'visible' : ''}`}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1rem, 2.4vw, 1.25rem)',
              fontWeight: 400,
              color: '#333333',
              lineHeight: 1.9,
              marginBottom: '1.5rem',
              letterSpacing: '0.01em',
            }}
          >
            In der Mitte des Kreises stehen Stäbe.<br />
            Im Boden verankert. In den Himmel gerichtet.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1rem, 2.4vw, 1.25rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#1A1A1A',
              lineHeight: 1.8,
              letterSpacing: '0.01em',
            }}
          >
            Sie stehen zwischen Erde und Himmel.<br />
            Die Menschen stehen um sie herum.
          </p>
        </div>
      </div>
    </section>
  )
}

function CircleVisualization() {
  const cx = 160
  const cy = 160
  const r = 110
  const peopleCount = 10

  const people = Array.from({ length: peopleCount }, (_, i) => {
    const angle = (i * (360 / peopleCount) - 90) * (Math.PI / 180)
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    }
  })

  // Poles in center
  const poles = Array.from({ length: 5 }, (_, i) => {
    const angle = (i * 72) * (Math.PI / 180)
    const pr = 28
    return {
      x: cx + pr * Math.cos(angle),
      y: cy + pr * Math.sin(angle),
    }
  })

  return (
    <svg width="320" height="320" viewBox="0 0 320 320" aria-label="Kreis-Visualisierung">
      {/* Outer circle */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="1"
      />

      {/* Inner subtle circle */}
      <circle
        cx={cx}
        cy={cy}
        r={40}
        fill="none"
        stroke="rgba(0,0,0,0.06)"
        strokeWidth="0.8"
      />

      {/* Connection lines from people to center */}
      {people.map((p, i) => (
        <line
          key={`line-${i}`}
          x1={p.x}
          y1={p.y}
          x2={cx}
          y2={cy}
          stroke="rgba(0,0,0,0.05)"
          strokeWidth="0.6"
        />
      ))}

      {/* People as dots */}
      {people.map((p, i) => (
        <circle
          key={`person-${i}`}
          cx={p.x}
          cy={p.y}
          r="5"
          fill="none"
          stroke="rgba(0,0,0,0.45)"
          strokeWidth="1.2"
        />
      ))}

      {/* Poles in center */}
      {poles.map((p, i) => (
        <line
          key={`pole-${i}`}
          x1={p.x}
          y1={p.y - 16}
          x2={p.x}
          y2={p.y + 4}
          stroke="rgba(0,0,0,0.5)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}

      {/* Center dot */}
      <circle
        cx={cx}
        cy={cy}
        r="3"
        fill="rgba(0,0,0,0.3)"
      />
    </svg>
  )
}
