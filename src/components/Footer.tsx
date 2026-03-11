export function Footer() {
  const navLinks = [
    { label: 'Konzept', href: '#wo-licht-ist' },
    { label: 'Zimbeln', href: '#zimbeln' },
    { label: 'Gemeinschaft', href: '#gemeinschaft' },
    { label: 'Spende', href: '#spende' },
    { label: 'Kontakt', href: 'mailto:o@dielichtung.de' },
  ]

  const handleNav = (href: string) => {
    if (href.startsWith('#')) {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = href
    }
  }

  return (
    <footer
      id="footer"
      className="relative py-16 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #3D1C08 0%, #1C0A04 60%, #0D0508 100%)',
      }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(212, 168, 67, 0.3), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* O symbol */}
        <div className="flex justify-center mb-8">
          <div className="relative" style={{ width: 52, height: 52 }} aria-hidden="true">
            <div
              className="absolute inset-0 rounded-full animate-breathe-slow"
              style={{
                background: 'radial-gradient(circle, rgba(212, 168, 67, 0.15) 0%, transparent 70%)',
                filter: 'blur(6px)',
              }}
            />
            <svg width="52" height="52" viewBox="0 0 52 52">
              <circle
                cx="26" cy="26" r="18"
                fill="none"
                stroke="rgba(212, 168, 67, 0.5)"
                strokeWidth="1.5"
                className="animate-breathe"
              />
              <circle cx="26" cy="26" r="4" fill="rgba(212, 168, 67, 0.4)" />
            </svg>
          </div>
        </div>

        {/* Brand */}
        <div className="text-center mb-8">
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.1rem',
              fontWeight: 300,
              letterSpacing: '0.15em',
              color: 'rgba(212, 168, 67, 0.65)',
              marginBottom: '0.3rem',
            }}
          >
            O — Die Lichtung — Verbindungskunst
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 300,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(139, 90, 43, 0.5)',
            }}
          >
            Kassel · 2026 · Open Source
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer-Navigation">
          <ul
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8"
            style={{ listStyle: 'none', padding: 0, margin: 0 }}
          >
            {navLinks.map(link => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="transition-all duration-200 bg-transparent border-none cursor-pointer"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(180, 135, 75, 0.55)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'rgba(212, 168, 67, 0.85)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(180, 135, 75, 0.55)' }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tagline */}
        <div className="text-center">
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: 'rgba(139, 90, 43, 0.4)',
              letterSpacing: '0.03em',
            }}
          >
            "Wo Licht ist, gibt es keinen Schatten."
          </p>
        </div>
      </div>
    </footer>
  )
}
