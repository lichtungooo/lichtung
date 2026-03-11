import { useInView } from '../hooks/useInView'

const features = [
  {
    title: 'Die Karte',
    icon: MapIcon,
    text: 'Eine lebende Weltkarte aller aktiven Lichtungen. Finde Menschen in deiner Nähe. Sieh, wie das Netz wächst.',
    status: 'In Entwicklung',
  },
  {
    title: 'Der Kalender',
    icon: CalendarIcon,
    text: 'Synchronisierte Termine weltweit. Melde dich verbindlich an. Sei Teil von etwas Größerem.',
    status: 'In Entwicklung',
  },
  {
    title: 'Das Profil',
    icon: CircleIcon,
    text: 'Verbinde dich mit Menschen, denen du noch nicht begegnet bist — aber begegnen solltest. Im echten Leben.',
    status: 'In Entwicklung',
  },
]

export function Gemeinschaft() {
  const { ref, inView } = useInView(0.08)
  const { ref: refCards, inView: inViewCards } = useInView(0.06)
  const { ref: refNote, inView: inViewNote } = useInView(0.1)

  return (
    <section
      id="gemeinschaft"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F5EDD4 0%, #FDFAF2 20%, #F8F4E8 100%)',
      }}
    >
      {/* Subtle warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212, 168, 67, 0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        <div ref={ref} className={`section-reveal ${inView ? 'visible' : ''} text-center mb-14`}>
          <div
            className="inline-block mb-6 px-4 py-1.5 text-xs uppercase tracking-widest"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(139, 90, 43, 0.65)',
              border: '1px solid rgba(139, 90, 43, 0.2)',
              fontWeight: 300,
            }}
          >
            Die Gemeinschaft
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 300,
              color: '#1C0C04',
              marginBottom: '1.5rem',
              letterSpacing: '0.02em',
            }}
          >
            Finde deine Lichtung.
          </h2>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)',
              fontWeight: 300,
              color: '#4A2E12',
              lineHeight: 1.85,
              maxWidth: 600,
              margin: '0 auto',
            }}
          >
            Die Werkzeuge, die entstehen, machen das Unsichtbare sichtbar: wo auf der Erde gerade Lichtungen entstehen. Wann die nächste in deiner Nähe ist. Wer die Menschen sind, die du noch nicht kennst — aber schon trägst.
          </p>
        </div>

        {/* Feature cards */}
        <div
          ref={refCards}
          className={`section-reveal section-reveal-delay-1 ${inViewCards ? 'visible' : ''} grid grid-cols-1 md:grid-cols-3 gap-6 mb-12`}
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} delay={i * 0.1} />
          ))}
        </div>

        {/* Open source note */}
        <div
          ref={refNote}
          className={`section-reveal section-reveal-delay-2 ${inViewNote ? 'visible' : ''} text-center`}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1rem, 2.8vw, 1.3rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#3D1C08',
              maxWidth: 500,
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            "Diese Werkzeuge entstehen als Open Source — frei für alle, für immer. Sie gehören der Gemeinschaft."
          </p>

          {/* Network dots decoration */}
          <div className="flex justify-center mt-10" aria-hidden="true">
            <NetworkDecoration />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  title,
  icon: Icon,
  text,
  status,
  delay,
}: {
  title: string
  icon: () => React.ReactElement
  text: string
  status: string
  delay: number
}) {
  return (
    <div
      className="relative transition-all duration-400 cursor-default"
      style={{
        background: 'rgba(255, 252, 240, 0.8)',
        border: '1px solid rgba(212, 168, 67, 0.2)',
        padding: '2rem 1.5rem',
        transitionDelay: `${delay}s`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(212, 168, 67, 0.18)'
        e.currentTarget.style.borderColor = 'rgba(212, 168, 67, 0.45)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = 'rgba(212, 168, 67, 0.2)'
      }}
    >
      {/* Icon */}
      <div className="mb-4">
        <Icon />
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '1.5rem',
          fontWeight: 500,
          color: '#2C1608',
          marginBottom: '0.6rem',
          letterSpacing: '0.02em',
        }}
      >
        {title}
      </h3>

      {/* Text */}
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.875rem',
          fontWeight: 300,
          color: '#5C3A1A',
          lineHeight: 1.75,
          marginBottom: '1.2rem',
        }}
      >
        {text}
      </p>

      {/* Status badge */}
      <span
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.68rem',
          fontWeight: 400,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(139, 90, 43, 0.55)',
          borderBottom: '1px solid rgba(139, 90, 43, 0.2)',
          paddingBottom: '2px',
        }}
      >
        {status}
      </span>
    </div>
  )
}

function MapIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(212, 168, 67, 0.5)" strokeWidth="1.2" />
      <ellipse cx="18" cy="18" rx="7" ry="14" fill="none" stroke="rgba(212, 168, 67, 0.35)" strokeWidth="0.8" />
      <line x1="4" y1="18" x2="32" y2="18" stroke="rgba(212, 168, 67, 0.3)" strokeWidth="0.8" />
      <circle cx="18" cy="18" r="2" fill="rgba(212, 168, 67, 0.7)" />
      <circle cx="11" cy="12" r="1.5" fill="rgba(212, 168, 67, 0.4)" />
      <circle cx="24" cy="22" r="1.5" fill="rgba(212, 168, 67, 0.4)" />
      <circle cx="22" cy="10" r="1.5" fill="rgba(212, 168, 67, 0.4)" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="4" y="7" width="28" height="24" rx="2" fill="none" stroke="rgba(212, 168, 67, 0.5)" strokeWidth="1.2" />
      <line x1="4" y1="13" x2="32" y2="13" stroke="rgba(212, 168, 67, 0.35)" strokeWidth="0.8" />
      <line x1="12" y1="4" x2="12" y2="10" stroke="rgba(212, 168, 67, 0.5)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="4" x2="24" y2="10" stroke="rgba(212, 168, 67, 0.5)" strokeWidth="1.5" strokeLinecap="round" />
      {[18, 24, 30].map(y =>
        [9, 18, 27].map(x => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="rgba(212, 168, 67, 0.4)" />
        ))
      )}
      <circle cx="18" cy="22" r="3" fill="rgba(212, 168, 67, 0.2)" stroke="rgba(212, 168, 67, 0.5)" strokeWidth="0.8" />
    </svg>
  )
}

function CircleIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="8" fill="none" stroke="rgba(212, 168, 67, 0.5)" strokeWidth="1.2" />
      <circle cx="18" cy="18" r="2.5" fill="rgba(212, 168, 67, 0.6)" />
      {/* Surrounding people dots */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i * 45 - 90) * (Math.PI / 180)
        return (
          <g key={i}>
            <circle
              cx={18 + Math.cos(angle) * 14}
              cy={18 + Math.sin(angle) * 14}
              r="2"
              fill="rgba(212, 168, 67, 0.35)"
            />
            <line
              x1={18 + Math.cos(angle) * 10}
              y1={18 + Math.sin(angle) * 10}
              x2={18 + Math.cos(angle) * 12}
              y2={18 + Math.sin(angle) * 12}
              stroke="rgba(212, 168, 67, 0.2)"
              strokeWidth="0.6"
            />
          </g>
        )
      })}
    </svg>
  )
}

function NetworkDecoration() {
  const nodes = [
    { x: 100, y: 30 }, { x: 160, y: 10 }, { x: 220, y: 35 }, { x: 270, y: 20 },
    { x: 40, y: 60 }, { x: 130, y: 70 }, { x: 200, y: 65 }, { x: 260, y: 55 },
    { x: 70, y: 90 }, { x: 170, y: 95 }, { x: 230, y: 85 },
  ]

  const connections = [
    [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 6], [3, 7],
    [4, 8], [5, 8], [5, 9], [6, 9], [6, 10], [7, 10],
  ]

  return (
    <svg width="310" height="110" viewBox="0 0 310 110" aria-hidden="true">
      {connections.map(([a, b], i) => {
        const na = nodes[a]!
        const nb = nodes[b]!
        return (
          <line
            key={i}
            x1={na.x} y1={na.y}
            x2={nb.x} y2={nb.y}
            stroke="rgba(212, 168, 67, 0.2)"
            strokeWidth="0.8"
          />
        )
      })}
      {nodes.map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r="3"
          fill="rgba(212, 168, 67, 0.5)"
          style={{
            animation: `light-point-pulse ${2 + i * 0.3}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </svg>
  )
}
