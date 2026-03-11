import { BlazingO } from './BlazingO'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* Subtle warm radiance */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 55% 55% at 50% 48%, rgba(212, 168, 67, 0.09) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className="hero-subtitle mb-8">
          <BlazingO size={260} />
        </div>

        <h1
          className="hero-tagline"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(3rem, 9vw, 6.5rem)',
            fontWeight: 300,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#0A0A0A',
            lineHeight: 1,
            marginBottom: '1.2rem',
          }}
        >
          Lichtung
        </h1>

        <p
          className="hero-text"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1rem, 2.5vw, 1.45rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'rgba(10, 10, 10, 0.45)',
            marginBottom: '3.5rem',
            letterSpacing: '0.04em',
          }}
        >
          Die Welt leuchtet.
        </p>

        <div className="hero-ctas">
          <button
            onClick={() => document.getElementById('das-licht')?.scrollIntoView({ behavior: 'smooth' })}
            className="transition-all duration-300"
            style={{
              border: '1px solid rgba(10, 10, 10, 0.22)',
              color: 'rgba(10, 10, 10, 0.55)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 300,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              background: 'transparent',
              cursor: 'pointer',
              padding: '13px 44px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#0A0A0A'
              e.currentTarget.style.color = '#0A0A0A'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(10, 10, 10, 0.22)'
              e.currentTarget.style.color = 'rgba(10, 10, 10, 0.55)'
            }}
          >
            Erkunden
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-hint flex flex-col items-center"
        aria-hidden="true"
      >
        <svg width="1" height="44" viewBox="0 0 1 44">
          <line x1="0.5" y1="0" x2="0.5" y2="44" stroke="rgba(10, 10, 10, 0.12)" strokeWidth="1" />
        </svg>
      </div>
    </section>
  )
}
