import { BlazingO } from './BlazingO'

export function HeroSection() {
  const scrollToNext = () => {
    const next = document.getElementById('wo-licht-ist')
    next?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#080610' }}
    >
      {/* Deep space background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212, 168, 67, 0.04) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 30% 70%, rgba(80, 40, 10, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 70% 30%, rgba(60, 30, 80, 0.06) 0%, transparent 60%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Subtle star field */}
      <StarField />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Artist mark */}
        <div
          className="hero-title mb-2 tracking-[0.5em] text-xs uppercase"
          style={{ color: 'rgba(212, 168, 67, 0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
        >
          O — der Kreis
        </div>

        {/* The blazing O */}
        <div className="hero-subtitle my-6 md:my-8">
          <BlazingO size={280} />
        </div>

        {/* Title */}
        <h1
          className="hero-tagline font-display text-shadow-glow"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 300,
            letterSpacing: '0.08em',
            color: 'rgba(255, 250, 220, 0.95)',
            lineHeight: 1.05,
            marginBottom: '0.3em',
          }}
        >
          Die Lichtung
        </h1>

        {/* Subtitle */}
        <div
          className="hero-text"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
            fontWeight: 300,
            letterSpacing: '0.4em',
            color: 'rgba(212, 168, 67, 0.75)',
            textTransform: 'uppercase',
            marginBottom: '2rem',
          }}
        >
          Verbindungskunst
        </div>

        {/* Divider */}
        <div
          className="hero-text"
          style={{
            width: 40,
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(212, 168, 67, 0.5), transparent)',
            marginBottom: '2rem',
          }}
          aria-hidden="true"
        />

        {/* Tagline */}
        <p
          className="hero-text font-display"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'rgba(245, 235, 195, 0.9)',
            marginBottom: '1rem',
            letterSpacing: '0.02em',
          }}
        >
          "Wir bringen die Welt zum Leuchten."
        </p>

        {/* Short text */}
        <p
          className="hero-ctas"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.85rem, 2.2vw, 1rem)',
            fontWeight: 300,
            color: 'rgba(200, 185, 155, 0.75)',
            maxWidth: 420,
            lineHeight: 1.7,
            marginBottom: '3rem',
            letterSpacing: '0.02em',
          }}
        >
          Ein Kreis von Menschen. Ein gemeinsamer Impuls.
          <br />
          Ein weltweites Netz aus Licht.
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={() => document.getElementById('vergangenheit')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden px-8 py-3 transition-all duration-300"
            style={{
              border: '1px solid rgba(212, 168, 67, 0.5)',
              color: 'rgba(245, 230, 180, 0.9)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 300,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              background: 'rgba(212, 168, 67, 0.06)',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.background = 'rgba(212, 168, 67, 0.15)'
              el.style.borderColor = 'rgba(212, 168, 67, 0.8)'
              el.style.color = 'rgba(255, 245, 200, 1)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = 'rgba(212, 168, 67, 0.06)'
              el.style.borderColor = 'rgba(212, 168, 67, 0.5)'
              el.style.color = 'rgba(245, 230, 180, 0.9)'
            }}
          >
            Die Geschichte entdecken
          </button>

          <button
            onClick={() => document.getElementById('spende')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 transition-all duration-300"
            style={{
              background: 'rgba(212, 168, 67, 0.88)',
              color: '#1a0f00',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              border: '1px solid transparent',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(212, 168, 67, 1)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(212, 168, 67, 0.88)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Lichtung unterstützen
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-hint flex flex-col items-center gap-2 cursor-pointer bg-transparent border-none"
        aria-label="Nach unten scrollen"
      >
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(212, 168, 67, 0.4)',
          }}
        >
          entdecken
        </span>
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" aria-hidden="true">
          <line x1="10" y1="0" x2="10" y2="20" stroke="rgba(212, 168, 67, 0.4)" strokeWidth="1" />
          <polyline points="4,14 10,22 16,14" fill="none" stroke="rgba(212, 168, 67, 0.4)" strokeWidth="1" />
        </svg>
      </button>
    </section>
  )
}

function StarField() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.3,
    opacity: Math.random() * 0.4 + 0.05,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            background: 'rgba(255, 250, 220, 0.9)',
            opacity: star.opacity,
            animation: `breathe ${4 + star.delay}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
