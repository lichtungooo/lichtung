import { useInView } from '../hooks/useInView'

export function Vision() {
  const { ref, inView } = useInView(0.08)
  const { ref: refGlobe, inView: inViewGlobe } = useInView(0.1)

  return (
    <section
      id="vision"
      className="relative py-24 md:py-40 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFEF5 0%, #FDFAF2 30%, #FAF5E4 60%, #F5EDD4 100%)',
      }}
    >
      {/* Upward light wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 70% at 50% 100%, rgba(212, 168, 67, 0.1) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 50% 20%, rgba(255, 250, 220, 0.5) 0%, transparent 70%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Upward arrows */}
        <div className="flex justify-center mb-8" aria-hidden="true">
          <div className="flex flex-col items-center gap-1">
            {[1, 0.8, 0.6].map((opacity, i) => (
              <svg key={i} width="16" height="10" viewBox="0 0 16 10" fill="none">
                <polyline points="1,9 8,1 15,9" stroke={`rgba(212, 168, 67, ${opacity})`} strokeWidth="1.5" fill="none" />
              </svg>
            ))}
          </div>
        </div>

        <div ref={ref} className={`section-reveal ${inView ? 'visible' : ''} text-center mb-16`}>
          {/* Section label */}
          <div
            className="inline-block mb-6 px-4 py-1.5 text-xs uppercase tracking-widest"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(139, 90, 43, 0.65)',
              border: '1px solid rgba(139, 90, 43, 0.2)',
              fontWeight: 300,
            }}
          >
            Die Zukunft ↑
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 5.5vw, 3.8rem)',
              fontWeight: 300,
              color: '#1C0C04',
              letterSpacing: '0.02em',
              marginBottom: '3rem',
              lineHeight: 1.2,
            }}
          >
            Die Welt zum Leuchten bringen.
          </h2>

          <div className="max-w-2xl mx-auto space-y-5">
            {[
              {
                text: 'Stell dir vor: An einem Tag versammeln sich Menschen an Hunderttausenden von Orten weltweit.',
                style: 'italic',
              },
              {
                text: 'Kleine Orte. Zwanzig, dreißig, vierzig Menschen. Unter Bäumen, in Hallen, auf Wiesen, auf Dächern.',
                style: 'normal',
              },
              {
                text: 'Die Musik beginnt. Das Lachen entsteht. Die Energie steigt.',
                style: 'normal',
              },
              {
                text: 'Und gleichzeitig — an Hunderttausenden von Orten — entsteht dasselbe.',
                style: 'normal',
                emphasis: true,
              },
              {
                text: 'Die Felder verbinden sich. Die Energie potenziert sich. Und eine Erde, die Angst als Betriebssystem hatte, bekommt etwas anderes zu spüren: kollektive Freude. Kollektive Verbindung. Kollektives Licht.',
                style: 'normal',
              },
              {
                text: 'Das ist keine Utopie. Das ist Physik des Herzens.',
                style: 'italic',
                emphasis: true,
              },
              {
                text: 'Ein Mensch legt seinen Hammer hin — nicht weil er streikt, nicht weil er kämpft — sondern weil er jetzt einfach klar fühlt, wozu er wirklich hier ist.',
                style: 'normal',
              },
              {
                text: 'Das ist die Lichtung.',
                style: 'italic',
                emphasis: true,
              },
            ].map((item, i) => (
              <p
                key={i}
                style={{
                  fontFamily: item.style === 'italic'
                    ? "'Cormorant Garamond', Georgia, serif"
                    : 'Inter, sans-serif',
                  fontSize: item.emphasis
                    ? 'clamp(1rem, 2.8vw, 1.2rem)'
                    : 'clamp(0.9rem, 2.2vw, 1.05rem)',
                  fontWeight: item.emphasis ? 500 : 300,
                  fontStyle: item.style,
                  color: item.emphasis ? '#2C1608' : '#4A2E12',
                  lineHeight: 1.85,
                  letterSpacing: item.emphasis ? '0.01em' : '0',
                }}
              >
                {item.text}
              </p>
            ))}
          </div>
        </div>

        {/* Globe visualization */}
        <div
          ref={refGlobe}
          className={`section-reveal section-reveal-delay-2 ${inViewGlobe ? 'visible' : ''} flex justify-center`}
        >
          <GlobeVisualization />
        </div>
      </div>
    </section>
  )
}

function GlobeVisualization() {
  const cx = 200
  const cy = 200
  const r = 130

  // Generate light points around the globe
  const lightPoints = Array.from({ length: 60 }, (_) => {
    const lat = (Math.random() - 0.5) * 160 * (Math.PI / 180)
    const lon = Math.random() * 360 * (Math.PI / 180)
    // Project to 2D (simple orthographic)
    const x = cx + r * Math.cos(lat) * Math.sin(lon)
    const y = cy - r * Math.sin(lat)
    const z = Math.cos(lat) * Math.cos(lon)
    const visible = z > -0.2
    const size = z > 0.4 ? 3.5 : z > 0 ? 2.5 : 1.8
    const opacity = visible ? 0.3 + z * 0.7 : 0
    const delay = Math.random() * 3
    return { x, y, visible, size, opacity, delay, z }
  }).filter(p => p.visible)

  // Latitude lines
  const latLines = [-60, -30, 0, 30, 60].map(lat => {
    const latRad = lat * (Math.PI / 180)
    const ry = r * Math.cos(latRad) * 0.5
    const cy2 = cy - r * Math.sin(latRad)
    const rx = r * Math.cos(latRad)
    return { ry, cy2, rx, opacity: lat === 0 ? 0.25 : 0.12 }
  })

  // Longitude lines (visible half only)
  const lonLines = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(lon => {
    const lonRad = lon * (Math.PI / 180)
    const visible = Math.cos(lonRad) > 0
    return { lonRad, visible, opacity: visible ? 0.12 : 0.04 }
  })

  return (
    <div
      className="relative"
      style={{
        filter: 'drop-shadow(0 0 40px rgba(212, 168, 67, 0.2))',
      }}
    >
      <svg width="400" height="400" viewBox="0 0 400 400" aria-label="Weltkugel mit Lichtungspunkten">
        <defs>
          <radialGradient id="globeGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="rgba(245, 230, 170, 0.12)" />
            <stop offset="60%" stopColor="rgba(212, 168, 67, 0.04)" />
            <stop offset="100%" stopColor="rgba(139, 90, 43, 0.08)" />
          </radialGradient>
          <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(212, 168, 67, 0.15)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <clipPath id="globeClip">
            <circle cx={cx} cy={cy} r={r + 5} />
          </clipPath>
        </defs>

        {/* Outer atmospheric glow */}
        <circle cx={cx} cy={cy} r={r + 30} fill="url(#globeGlow)" />

        {/* Globe body */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="url(#globeGrad)"
          stroke="rgba(212, 168, 67, 0.25)"
          strokeWidth="1"
          className="animate-breathe-slow"
        />

        {/* Latitude lines */}
        <g clipPath="url(#globeClip)">
          {latLines.map((line, i) => (
            <ellipse
              key={i}
              cx={cx}
              cy={line.cy2}
              rx={line.rx}
              ry={line.ry}
              fill="none"
              stroke={`rgba(212, 168, 67, ${line.opacity})`}
              strokeWidth="0.8"
            />
          ))}

          {/* Longitude arcs */}
          {lonLines.map((line, i) => (
            <path
              key={i}
              d={`M ${cx + Math.sin(line.lonRad) * r} ${cy - 0}
                  A ${r} ${r} 0 0 ${Math.sin(line.lonRad) > 0 ? 1 : 0}
                  ${cx + Math.sin(line.lonRad + Math.PI) * r} ${cy}`}
              fill="none"
              stroke={`rgba(212, 168, 67, ${line.opacity})`}
              strokeWidth="0.8"
            />
          ))}
        </g>

        {/* Light points (Lichtungen) */}
        {lightPoints.map((point, i) => (
          <g key={i}>
            {/* Glow ring */}
            <circle
              cx={point.x}
              cy={point.y}
              r={point.size * 2}
              fill="rgba(255, 240, 150, 0.08)"
            />
            {/* Center point */}
            <circle
              cx={point.x}
              cy={point.y}
              r={point.size * 0.6}
              fill="rgba(255, 245, 180, 0.9)"
              opacity={point.opacity}
              style={{
                animation: `light-point-pulse ${1.5 + point.delay}s ease-in-out infinite`,
                animationDelay: `${point.delay}s`,
              }}
            />
          </g>
        ))}

        {/* Connection lines between some points */}
        {lightPoints.slice(0, 15).map((p1, idx) => {
          const p2 = lightPoints[(idx + 7) % lightPoints.length]
          if (!p2) return null
          const dist = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
          if (dist > 120) return null
          return (
            <line
              key={`conn-${idx}`}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke="rgba(212, 168, 67, 0.12)"
              strokeWidth="0.5"
            />
          )
        })}

        {/* Globe ring highlight */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="rgba(245, 220, 140, 0.15)"
          strokeWidth="1.5"
        />
      </svg>

      {/* Caption */}
      <p
        className="text-center mt-4"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.72rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'rgba(139, 90, 43, 0.45)',
          fontWeight: 300,
        }}
      >
        Hunderttausende Lichtungen · Ein Tag · Eine Erde
      </p>
    </div>
  )
}
