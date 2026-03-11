import { BlazingO } from './BlazingO'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#07060F' }}
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
          Ein Kunstprojekt von O
        </div>

        {/* The blazing O */}
        <div className="hero-subtitle my-6 md:my-8">
          <BlazingO size={280} />
        </div>

        {/* Title */}
        <h1
          className="hero-tagline"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            fontWeight: 300,
            letterSpacing: '0.12em',
            color: 'rgba(255, 250, 220, 0.95)',
            lineHeight: 1,
            marginBottom: '0.5em',
            textShadow: '0 0 60px rgba(212, 168, 67, 0.25)',
          }}
        >
          Lichtung
        </h1>

        {/* Tagline */}
        <p
          className="hero-text"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1rem, 2.8vw, 1.5rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'rgba(245, 235, 195, 0.85)',
            marginBottom: '3rem',
            letterSpacing: '0.03em',
          }}
        >
          Wir bringen die Welt zum Leuchten.
        </p>

        {/* Single CTA */}
        <div className="hero-ctas">
          <button
            onClick={() => document.getElementById('das-licht')?.scrollIntoView({ behavior: 'smooth' })}
            className="transition-all duration-300"
            style={{
              border: '1px solid rgba(212, 168, 67, 0.45)',
              color: 'rgba(245, 230, 180, 0.9)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 300,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              background: 'transparent',
              cursor: 'pointer',
              padding: '14px 40px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(212, 168, 67, 0.1)'
              e.currentTarget.style.borderColor = 'rgba(212, 168, 67, 0.7)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(212, 168, 67, 0.45)'
            }}
          >
            Erkunden
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-hint flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <svg width="1" height="40" viewBox="0 0 1 40">
          <line x1="0.5" y1="0" x2="0.5" y2="40" stroke="rgba(212, 168, 67, 0.3)" strokeWidth="1" />
        </svg>
      </div>
    </section>
  )
}

function StarField() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.2 + 0.3,
    opacity: Math.random() * 0.3 + 0.05,
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
