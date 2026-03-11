import { useState, useEffect } from 'react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const linkColor = 'rgba(10, 10, 10, 0.38)'
  const linkHover = 'rgba(10, 10, 10, 0.8)'

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
      }}
      aria-label="Hauptnavigation"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 bg-transparent border-none cursor-pointer"
          aria-label="Nach oben"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true">
            <circle cx="7.5" cy="7.5" r="6" fill="none" stroke="rgba(10,10,10,0.35)" strokeWidth="1" />
          </svg>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '0.92rem',
              fontWeight: 400,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(10, 10, 10, 0.65)',
            }}
          >
            Lichtung
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Licht', id: 'das-licht' },
            { label: 'Kreis', id: 'der-kreis' },
          ].map(link => (
            <button
              key={link.id}
              onClick={() => navTo(link.id)}
              className="bg-transparent border-none cursor-pointer transition-all duration-200"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.67rem',
                fontWeight: 300,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: linkColor,
              }}
              onMouseEnter={e => { e.currentTarget.style.color = linkHover }}
              onMouseLeave={e => { e.currentTarget.style.color = linkColor }}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => navTo('entzuenden')}
            className="transition-all duration-200"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 400,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              background: '#0A0A0A',
              border: 'none',
              padding: '7px 18px',
              cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#2A2A2A' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#0A0A0A' }}
          >
            Leuchten
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Schließen' : 'Menü'}
          aria-expanded={menuOpen}
        >
          <div className="space-y-1.5">
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block transition-all duration-300"
                style={{
                  width: 20,
                  height: 1,
                  background: 'rgba(10, 10, 10, 0.45)',
                  transformOrigin: 'center',
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translateY(5px)' : i === 2 ? 'rotate(-45deg) translateY(-5px)' : 'scaleX(0)'
                    : 'none',
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: menuOpen ? '260px' : '0px',
          background: 'rgba(255, 255, 255, 0.97)',
          borderBottom: menuOpen ? '1px solid rgba(0,0,0,0.05)' : 'none',
        }}
      >
        <div className="px-6 py-5 space-y-4">
          {[
            { label: 'Licht', id: 'das-licht' },
            { label: 'Kreis', id: 'der-kreis' },
            { label: 'Leuchten', id: 'entzuenden' },
          ].map(link => (
            <button
              key={link.id}
              onClick={() => navTo(link.id)}
              className="block w-full text-left bg-transparent border-none cursor-pointer"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 300,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(10, 10, 10, 0.45)',
                padding: '4px 0',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
