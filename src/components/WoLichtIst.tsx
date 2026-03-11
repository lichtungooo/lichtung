import { useState } from 'react'
import { useInView } from '../hooks/useInView'

export function WoLichtIst() {
  const [expanded, setExpanded] = useState(false)
  const { ref, inView } = useInView(0.1)
  const { ref: ref2, inView: inView2 } = useInView(0.1)

  return (
    <section
      id="wo-licht-ist"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FDFAF2 0%, #F5EDD4 60%, #EDE0B8 100%)',
      }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(212, 168, 67, 0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Small glowing O */}
        <div ref={ref} className={`section-reveal ${inView ? 'visible' : ''} flex justify-center mb-10`}>
          <SmallGlowingO />
        </div>

        {/* Main quote */}
        <div className={`section-reveal section-reveal-delay-1 ${inView ? 'visible' : ''}`}>
          <h2
            className="font-display"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.7rem, 4.5vw, 2.8rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#3D2008',
              lineHeight: 1.25,
              marginBottom: '2.5rem',
              letterSpacing: '0.01em',
            }}
          >
            "Wo Licht ist,
            <br />
            gibt es keinen Schatten."
          </h2>
        </div>

        {/* Short text */}
        <div
          ref={ref2}
          className={`section-reveal section-reveal-delay-2 ${inView2 ? 'visible' : ''}`}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              fontWeight: 300,
              color: '#4A2E12',
              lineHeight: 1.85,
              marginBottom: '2rem',
            }}
          >
            Du hast es immer gewusst. In stillen Momenten — wenn das Denken aufhört und etwas Tieferes spricht — ist da ein Leuchten. Das ist nicht Metapher. Das ist das Ursprünglichste, was du bist.
          </p>

          {/* Expandable section */}
          <div
            className="overflow-hidden transition-all duration-700 ease-in-out"
            style={{
              maxHeight: expanded ? '1000px' : '0px',
              opacity: expanded ? 1 : 0,
            }}
          >
            <div
              className="text-left space-y-5 pt-6 pb-4"
              style={{
                borderTop: '1px solid rgba(139, 90, 43, 0.2)',
              }}
            >
              {[
                'Die Geschichte der Menschheit ist eine Geschichte der Verbindung — und ihrer schrittweisen Unterbrechung. Jede Gemeinschaft, die jemals gelebt hat, kannte den Kreis. Den gemeinsamen Tanz, das gemeinsame Singen, das Feuer in der Mitte. Das ist kein Mythos. Das ist die Erinnerung aller Kulturen der Welt.',
                'Im Laufe der Zeit entstanden Strukturen, die entschieden: Die Energie des Kreises — die Kraft, die entsteht, wenn Menschen zusammenkommen — sollte nicht mehr den Menschen gehören. Sie sollte gebündelt, verwaltet, kontrolliert werden.',
                'Und so lernten Menschen, die Kraft nach innen zu richten — statt füreinander. Angst wurde das dominante Betriebssystem.',
                'Aber Licht lässt sich nicht dauerhaft löschen.',
                'Er lebt in jedem Menschen weiter — in echtem Lachen, in Berührung, in dem Moment wenn zwei Augen sich treffen und beide wissen: Wir sind dasselbe.',
                'Schatten ist das Fehlen von Licht, weiter nichts. Er hat keine eigene Substanz. Er verschwindet — einfach, unweigerlich — wenn das Licht kommt.',
                'Die Lichtung ist die Antwort. Nicht durch Widerstand. Nicht durch Kampf. Sondern dadurch, dass der Kreis wieder entsteht. Dass die Energie wieder den Menschen gehört.',
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)',
                    fontWeight: para === 'Aber Licht lässt sich nicht dauerhaft löschen.' ? 500 : 300,
                    color: para === 'Aber Licht lässt sich nicht dauerhaft löschen.' ? '#3D1C08' : '#5C3A1A',
                    lineHeight: 1.8,
                    fontStyle: para === 'Aber Licht lässt sich nicht dauerhaft löschen.' ? 'italic' : 'normal',
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Toggle button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 transition-all duration-300"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(139, 90, 43, 0.7)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 0',
              borderBottom: '1px solid rgba(139, 90, 43, 0.3)',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(139, 90, 43, 1)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(139, 90, 43, 0.7)' }}
          >
            {expanded ? 'Weniger lesen' : 'Mehr lesen'}
          </button>
        </div>
      </div>
    </section>
  )
}

function SmallGlowingO() {
  return (
    <div className="relative" style={{ width: 56, height: 56 }} aria-hidden="true">
      <div
        className="absolute inset-0 rounded-full animate-breathe"
        style={{
          background: 'radial-gradient(circle, rgba(212, 168, 67, 0.25) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />
      <svg width="56" height="56" viewBox="0 0 56 56" className="relative z-10">
        <defs>
          <radialGradient id="smallCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFF0" stopOpacity="1" />
            <stop offset="50%" stopColor="#F5D878" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D4A843" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle
          cx="28"
          cy="28"
          r="20"
          fill="none"
          stroke="rgba(212, 168, 67, 0.7)"
          strokeWidth="1.5"
          className="animate-breathe-slow"
        />
        <circle
          cx="28"
          cy="28"
          r="6"
          fill="url(#smallCore)"
          className="animate-breathe"
        />
      </svg>
    </div>
  )
}
