export function Footer() {
  const navLinks = [
    { label: 'Licht', href: '#das-licht' },
    { label: 'Kreis', href: '#der-kreis' },
    { label: 'Leuchten', href: '#entzuenden' },
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
      style={{ background: '#F5F2EC' }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'rgba(0,0,0,0.06)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">

        {/* Brand */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 300,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(10, 10, 10, 0.7)',
            marginBottom: '0.3rem',
            lineHeight: 1,
          }}
        >
          Lichtung
        </p>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.1rem',
            fontWeight: 300,
            letterSpacing: '0.12em',
            color: 'rgba(10, 10, 10, 0.35)',
            marginBottom: '0.6rem',
          }}
        >
          Verbindungskunst
        </p>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.5rem',
            fontWeight: 300,
            color: 'rgba(10, 10, 10, 0.25)',
            letterSpacing: '0.05em',
            marginBottom: '4rem',
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          O
        </p>

        {/* Artist statement */}
        <div
          style={{
            width: 1,
            height: 40,
            background: 'rgba(0,0,0,0.08)',
            margin: '0 auto 3rem',
          }}
          aria-hidden="true"
        />

        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'rgba(10, 10, 10, 0.45)',
            lineHeight: 1.9,
            marginBottom: '3.5rem',
            letterSpacing: '0.01em',
            maxWidth: '480px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          O ist ein Künstler aus Kassel.
          Lichtung ist eine konstruierte Situation —
          ein Kunstprojekt, das die Welt selbst zur Leinwand macht.
          Durch Teilnahme. Durch den Kreis.
          Durch das Leuchten, das entsteht,
          wenn Menschen sich begegnen.
        </p>

        {/* Navigation */}
        <nav aria-label="Footer-Navigation">
          <ul
            className="flex flex-wrap justify-center gap-x-8 gap-y-3"
            style={{ listStyle: 'none', padding: 0, margin: '0 0 3.5rem' }}
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
                    color: 'rgba(10, 10, 10, 0.28)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'rgba(10, 10, 10, 0.65)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(10, 10, 10, 0.28)' }}
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
            fontSize: '0.6rem',
            fontWeight: 300,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(10, 10, 10, 0.18)',
            marginBottom: '4rem',
          }}
        >
          documenta 16 · Kassel · 2027
        </p>

        {/* Impressum */}
        <div
          style={{
            borderTop: '1px solid rgba(0,0,0,0.06)',
            paddingTop: '2.5rem',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.55rem',
              fontWeight: 400,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(10, 10, 10, 0.2)',
              marginBottom: '1rem',
            }}
          >
            Impressum
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.6rem',
              fontWeight: 300,
              color: 'rgba(10, 10, 10, 0.35)',
              letterSpacing: '0.15em',
              marginBottom: '0.8rem',
              lineHeight: 1,
            }}
          >
            O
          </p>

          <a
            href="mailto:o@lichtung.ooo"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 300,
              letterSpacing: '0.1em',
              color: 'rgba(10, 10, 10, 0.28)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(10, 10, 10, 0.65)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(10, 10, 10, 0.28)' }}
          >
            o@lichtung.ooo
          </a>
        </div>

      </div>
    </footer>
  )
}
