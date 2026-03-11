export function Footer() {
  const navLinks = [
    { label: 'Das Licht', href: '#das-licht' },
    { label: 'Der Kreis', href: '#der-kreis' },
    { label: 'Das Leuchten', href: '#das-leuchten' },
    { label: 'Das Netz', href: '#das-netz' },
    { label: 'Spenden', href: '#spende' },
    { label: 'Kontakt', href: 'mailto:o@lichtung.art' },
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
      className="relative py-20 overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Top border */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: 'rgba(255,255,255,0.06)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* O mark */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '2.5rem',
            fontWeight: 300,
            color: 'rgba(212, 168, 67, 0.5)',
            letterSpacing: '0.05em',
            marginBottom: '0.5rem',
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          O
        </div>

        {/* Brand */}
        <div className="mb-10">
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.1rem',
              fontWeight: 300,
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.35)',
              marginBottom: '0.4rem',
            }}
          >
            Lichtung
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 300,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.2)',
            }}
          >
            Verbindungskunst
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer-Navigation">
          <ul
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10"
            style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem' }}
          >
            {navLinks.map(link => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="transition-all duration-200 bg-transparent border-none cursor-pointer"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.68rem',
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.25)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.25)' }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tagline */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.65rem',
            fontWeight: 300,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.15)',
          }}
        >
          Kassel · 2026 · Open Source
        </p>
      </div>
    </footer>
  )
}
