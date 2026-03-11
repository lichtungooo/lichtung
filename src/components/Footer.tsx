export function Footer() {
  const navLinks = [
    { label: 'Licht', href: '#das-licht' },
    { label: 'Kreis', href: '#der-kreis' },
    { label: 'Netzwerk', href: '#das-netz' },
    { label: 'Entzünden', href: '#entzuenden' },
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
      style={{ background: '#F8F5EF' }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'rgba(0,0,0,0.06)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* O mark */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '2.2rem',
            fontWeight: 300,
            color: 'rgba(10, 10, 10, 0.25)',
            letterSpacing: '0.05em',
            marginBottom: '0.5rem',
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          O
        </div>

        <div className="mb-10">
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1rem',
              fontWeight: 300,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(10, 10, 10, 0.4)',
              marginBottom: '0.4rem',
            }}
          >
            Lichtung
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.62rem',
              fontWeight: 300,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(10, 10, 10, 0.25)',
            }}
          >
            Verbindungskunst
          </p>
        </div>

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
                    fontSize: '0.65rem',
                    fontWeight: 300,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'rgba(10, 10, 10, 0.3)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'rgba(10, 10, 10, 0.7)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(10, 10, 10, 0.3)' }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.62rem',
            fontWeight: 300,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(10, 10, 10, 0.2)',
          }}
        >
          Kassel · 2026 · Open Source
        </p>
      </div>
    </footer>
  )
}
