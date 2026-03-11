import { useInView } from '../hooks/useInView'

export function Vergangenheit() {
  const { ref: ref1, inView: inView1 } = useInView(0.08)
  const { ref: ref2, inView: inView2 } = useInView(0.08)
  const { ref: ref3, inView: inView3 } = useInView(0.08)

  return (
    <section
      id="vergangenheit"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #EDE0B8 0%, #C8976A 18%, #8B4A20 40%, #5C2810 65%, #3D1C08 100%)',
      }}
    >
      {/* Earth texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 30% 20% at 20% 30%, rgba(139, 74, 32, 0.3) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 80% 60%, rgba(92, 40, 16, 0.4) 0%, transparent 60%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Downward direction arrows */}
      <div className="flex justify-center pt-16 pb-4" aria-hidden="true">
        <div className="flex flex-col items-center gap-1">
          {[0.6, 0.8, 1].map((opacity, i) => (
            <svg key={i} width="16" height="10" viewBox="0 0 16 10" fill="none">
              <polyline points="1,1 8,9 15,1" stroke={`rgba(212, 168, 67, ${opacity})`} strokeWidth="1.5" fill="none" />
            </svg>
          ))}
        </div>
      </div>

      {/* Section label */}
      <div ref={ref1} className={`section-reveal ${inView1 ? 'visible' : ''} text-center px-6 pt-8 pb-20`}>
        <div
          className="inline-block mb-6 px-4 py-1.5 text-xs uppercase tracking-widest"
          style={{
            fontFamily: 'Inter, sans-serif',
            color: 'rgba(212, 168, 67, 0.65)',
            border: '1px solid rgba(212, 168, 67, 0.2)',
            fontWeight: 300,
          }}
        >
          Die Erinnerung
        </div>

        <h2
          className="font-display"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 300,
            color: 'rgba(255, 245, 210, 0.95)',
            marginBottom: '2.5rem',
            letterSpacing: '0.03em',
          }}
        >
          Am Anfang war das Leuchten
        </h2>

        <div
          className="max-w-2xl mx-auto space-y-5"
          style={{ textAlign: 'left' }}
        >
          {[
            {
              text: 'Alle Kulturen der Menschheit erinnern sich an dasselbe. Die Vedas nennen es das Satya Yuga. Die Griechen das Goldene Zeitalter. Die Kelten Tír na nÓg. Die Germanen Asgard. Alle Völker. Alle Zeiten. Dieselbe Erinnerung: eine Zeit, in der die Menschen in Verbindung waren — miteinander, mit der Erde, mit dem, was größer ist als sie.',
              highlight: false,
            },
            {
              text: 'Dann kam das Trennen. Nicht als einzelner Moment. Als langsamer, geduldiger Prozess.',
              highlight: true,
            },
            {
              text: 'Die Macht der Gemeinschaft — die kollektive Energie, die entsteht, wenn Menschen im Kreis tanzen, singen, meditieren — wurde für andere Zwecke genutzt. Strukturen wurden errichtet, die diese Energie kanalisierten. Weg von den Menschen. Hin zu den Zentren.',
              highlight: false,
            },
            {
              text: 'Diese Strukturen sind nicht böse. Sie sind das Ergebnis einer Welt, die vergessen hat.',
              highlight: false,
            },
            {
              text: 'Die Lichtung erinnert.',
              highlight: true,
            },
          ].map((item, i) => (
            <p
              key={i}
              style={{
                fontFamily: item.highlight ? "'Cormorant Garamond', Georgia, serif" : 'Inter, sans-serif',
                fontSize: item.highlight ? 'clamp(1rem, 2.8vw, 1.25rem)' : 'clamp(0.9rem, 2.2vw, 1rem)',
                fontWeight: item.highlight ? 400 : 300,
                fontStyle: item.highlight ? 'italic' : 'normal',
                color: item.highlight ? 'rgba(255, 240, 180, 0.95)' : 'rgba(220, 195, 155, 0.85)',
                lineHeight: 1.85,
              }}
            >
              {item.text}
            </p>
          ))}
        </div>
      </div>

      {/* Root visual */}
      <div className="flex justify-center py-6" aria-hidden="true">
        <RootsVisual />
      </div>

      {/* Verbindungsstäbe sub-section */}
      <div
        ref={ref2}
        className={`section-reveal ${inView2 ? 'visible' : ''} relative`}
        style={{
          background: 'rgba(0, 0, 0, 0.15)',
          padding: '5rem 1.5rem',
        }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Poles SVG illustration */}
          <div className="flex justify-center mb-12">
            <PolesIllustration />
          </div>

          <div className="text-center mb-8">
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                fontWeight: 400,
                color: 'rgba(255, 240, 180, 0.92)',
                marginBottom: '0.4rem',
              }}
            >
              Die Verbindungsstäbe
            </h3>
          </div>

          <div className="space-y-5 text-center max-w-2xl mx-auto">
            {[
              'In jedem Lichtungskreis stehen Stäbe. Im Boden verankert. In den Himmel gerichtet. Eine Kupferspirale verbindet sie unsichtbar unter der Erde.',
              'Sie sind Kunst. Sie sind Symbol.',
              'Sie stehen für die Verbindungen, die die Menschheit einst hatte — und die sie wiedererlangt. Verbindung zur Erde. Verbindung zueinander. Verbindung zum Universum, das uns trägt.',
              'Ihre Form stammt aus keiner Lehre, keinem System. Sie kommen aus dem Gefühl: So müsste ein Ort aussehen, an dem Energie frei fließt.',
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontFamily: i === 1 ? "'Cormorant Garamond', Georgia, serif" : 'Inter, sans-serif',
                  fontSize: i === 1 ? 'clamp(1.1rem, 3vw, 1.4rem)' : 'clamp(0.88rem, 2.2vw, 1rem)',
                  fontWeight: i === 1 ? 500 : 300,
                  fontStyle: i === 1 ? 'italic' : 'normal',
                  color: i === 1 ? 'rgba(255, 240, 180, 0.95)' : 'rgba(205, 175, 130, 0.85)',
                  lineHeight: 1.85,
                  letterSpacing: i === 1 ? '0.02em' : '0',
                }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Transition upward indicator */}
      <div
        ref={ref3}
        className={`section-reveal ${inView3 ? 'visible' : ''} flex justify-center pb-16 pt-8`}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1">
          {[1, 0.8, 0.6].map((opacity, i) => (
            <svg key={i} width="16" height="10" viewBox="0 0 16 10" fill="none">
              <polyline points="1,9 8,1 15,9" stroke={`rgba(212, 168, 67, ${opacity})`} strokeWidth="1.5" fill="none" />
            </svg>
          ))}
        </div>
      </div>
    </section>
  )
}

function RootsVisual() {
  return (
    <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
      <defs>
        <linearGradient id="rootGrad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(212, 168, 67, 0.6)" />
          <stop offset="100%" stopColor="rgba(92, 40, 16, 0.2)" />
        </linearGradient>
      </defs>
      {/* Center trunk */}
      <line x1="100" y1="0" x2="100" y2="80" stroke="url(#rootGrad1)" strokeWidth="2" />
      {/* Roots branching */}
      <path d="M100 40 C80 55 60 65 40 80" stroke="rgba(212, 168, 67, 0.4)" strokeWidth="1.2" fill="none" />
      <path d="M100 40 C120 55 140 65 160 80" stroke="rgba(212, 168, 67, 0.4)" strokeWidth="1.2" fill="none" />
      <path d="M100 60 C85 72 70 80 55 100" stroke="rgba(212, 168, 67, 0.25)" strokeWidth="0.8" fill="none" />
      <path d="M100 60 C115 72 130 80 145 100" stroke="rgba(212, 168, 67, 0.25)" strokeWidth="0.8" fill="none" />
      <path d="M100 70 C92 82 82 90 72 110" stroke="rgba(212, 168, 67, 0.18)" strokeWidth="0.6" fill="none" />
      <path d="M100 70 C108 82 118 90 128 110" stroke="rgba(212, 168, 67, 0.18)" strokeWidth="0.6" fill="none" />
    </svg>
  )
}

function PolesIllustration() {
  const numPoles = 10
  const cx = 150
  const cy = 115
  const radius = 100

  const poles = Array.from({ length: numPoles }, (_, i) => {
    const angle = (i * 360) / numPoles - 90
    const rad = (angle * Math.PI) / 180
    return {
      x: cx + Math.cos(rad) * radius,
      y: cy + Math.sin(rad) * radius * 0.35, // perspective flattening
      height: 60 + Math.abs(Math.sin(rad)) * 10,
    }
  })

  return (
    <svg width="300" height="200" viewBox="0 0 300 200" fill="none" aria-label="Kreis der Verbindungsstäbe">
      <defs>
        <radialGradient id="groundGlow" cx="50%" cy="70%" r="50%">
          <stop offset="0%" stopColor="rgba(212, 168, 67, 0.15)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="poleGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(245, 220, 140, 0.9)" />
          <stop offset="100%" stopColor="rgba(139, 90, 43, 0.4)" />
        </linearGradient>
      </defs>

      {/* Ground glow */}
      <ellipse cx={cx} cy={cy + 5} rx={radius + 20} ry={50} fill="url(#groundGlow)" />

      {/* Ground circle */}
      <ellipse
        cx={cx}
        cy={cy + 5}
        rx={radius + 5}
        ry={radius * 0.37}
        fill="none"
        stroke="rgba(212, 168, 67, 0.3)"
        strokeWidth="1"
        strokeDasharray="4 3"
      />

      {/* Copper spiral (underground) - symbolic */}
      <ellipse
        cx={cx}
        cy={cy + 5}
        rx={radius - 15}
        ry={(radius - 15) * 0.3}
        fill="none"
        stroke="rgba(180, 120, 60, 0.25)"
        strokeWidth="1.5"
      />

      {/* Poles back-half */}
      {poles.slice(5).map((pole, i) => (
        <g key={i + 5}>
          <line
            x1={pole.x}
            y1={pole.y + 5}
            x2={pole.x}
            y2={pole.y - pole.height}
            stroke="url(#poleGrad)"
            strokeWidth="2.5"
            opacity="0.6"
          />
          <circle cx={pole.x} cy={pole.y - pole.height} r="3" fill="rgba(245, 220, 140, 0.6)" />
        </g>
      ))}

      {/* Center glow */}
      <circle cx={cx} cy={cy - 10} r="15" fill="radial-gradient(circle, rgba(212, 168, 67, 0.3) 0%, transparent 100%)" opacity="0.5" />
      <circle cx={cx} cy={cy - 10} r="4" fill="rgba(255, 250, 200, 0.5)" className="animate-breathe" />

      {/* Poles front-half */}
      {poles.slice(0, 5).map((pole, i) => (
        <g key={i}>
          <line
            x1={pole.x}
            y1={pole.y + 5}
            x2={pole.x}
            y2={pole.y - pole.height}
            stroke="url(#poleGrad)"
            strokeWidth="2.5"
          />
          {/* Spiral coil hint */}
          <ellipse
            cx={pole.x}
            cy={pole.y - pole.height * 0.4}
            rx="4"
            ry="2"
            fill="none"
            stroke="rgba(180, 140, 80, 0.5)"
            strokeWidth="1"
          />
          <circle cx={pole.x} cy={pole.y - pole.height} r="3.5" fill="rgba(255, 248, 190, 0.85)" />
        </g>
      ))}

      {/* Light lines connecting poles */}
      {poles.map((pole, i) => (
        <line
          key={`conn-${i}`}
          x1={pole.x}
          y1={pole.y - pole.height}
          x2={poles[(i + 1) % numPoles]!.x}
          y2={poles[(i + 1) % numPoles]!.y - poles[(i + 1) % numPoles]!.height}
          stroke="rgba(212, 168, 67, 0.1)"
          strokeWidth="0.5"
        />
      ))}
    </svg>
  )
}
