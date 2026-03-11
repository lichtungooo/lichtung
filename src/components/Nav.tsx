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

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(8, 6, 16, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212, 168, 67, 0.1)' : '1px solid transparent',
      }}
      aria-label="Hauptnavigation"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer"
          aria-label="Nach oben scrollen"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <circle
              cx="12" cy="12" r="9"
              fill="none"
              stroke="rgba(212, 168, 67, 0.7)"
              strokeWidth="1.2"
              className="animate-breathe"
            />
            <circle cx="12" cy="12" r="2.5" fill="rgba(212, 168, 67, 0.6)" />
          </svg>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1rem',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: 'rgba(212, 168, 67, 0.8)',
            }}
          >
            Die Lichtung
          </span>
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Konzept', id: 'wo-licht-ist' },
            { label: 'Geschichte', id: 'vergangenheit' },
            { label: 'Zimbeln', id: 'zimbeln' },
            { label: 'Vision', id: 'vision' },
            { label: 'Gemeinschaft', id: 'gemeinschaft' },
          ].map(link => (
            <button
              key={link.id}
              onClick={() => navTo(link.id)}
              className="bg-transparent border-none cursor-pointer transition-all duration-200"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 300,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(200, 170, 110, 0.6)',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'rgba(212, 168, 67, 0.9)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(200, 170, 110, 0.6)' }}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => navTo('spende')}
            className="transition-all duration-200"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.68rem',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(30, 15, 0, 0.9)',
              background: 'rgba(212, 168, 67, 0.8)',
              border: 'none',
              padding: '6px 14px',
              cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212, 168, 67, 1)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(212, 168, 67, 0.8)' }}
          >
            Spenden
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
        >
          <div className="space-y-1.5">
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block transition-all duration-300"
                style={{
                  width: 22,
                  height: 1,
                  background: 'rgba(212, 168, 67, 0.7)',
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
          maxHeight: menuOpen ? '300px' : '0px',
          background: 'rgba(8, 6, 16, 0.97)',
          borderBottom: menuOpen ? '1px solid rgba(212, 168, 67, 0.1)' : 'none',
        }}
      >
        <div className="px-6 py-4 space-y-4">
          {[
            { label: 'Konzept', id: 'wo-licht-ist' },
            { label: 'Geschichte', id: 'vergangenheit' },
            { label: 'Zimbeln', id: 'zimbeln' },
            { label: 'Vision', id: 'vision' },
            { label: 'Gemeinschaft', id: 'gemeinschaft' },
            { label: 'Spenden', id: 'spende' },
          ].map(link => (
            <button
              key={link.id}
              onClick={() => navTo(link.id)}
              className="block w-full text-left bg-transparent border-none cursor-pointer"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 300,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(200, 170, 110, 0.7)',
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
