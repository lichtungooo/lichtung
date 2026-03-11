import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const amounts = [5, 15, 30, 60]

export function Spende() {
  const [selected, setSelected] = useState<number | null>(15)
  const [custom, setCustom] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const { ref, inView } = useInView(0.08)
  const { ref: refForm, inView: inViewForm } = useInView(0.06)

  const effectiveAmount = custom ? parseFloat(custom) : selected

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !effectiveAmount) return
    // Placeholder — in production this would connect to payment
    setSubmitted(true)
  }

  return (
    <section
      id="spende"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F8F4E8 0%, #E8D8B0 20%, #C8966A 50%, #8B4A20 80%, #4A2210 100%)',
      }}
    >
      {/* Warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(212, 168, 67, 0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6">

        <div ref={ref} className={`section-reveal ${inView ? 'visible' : ''} text-center mb-12`}>
          <div
            className="inline-block mb-6 px-4 py-1.5 text-xs uppercase tracking-widest"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(245, 230, 180, 0.6)',
              border: '1px solid rgba(245, 230, 180, 0.2)',
              fontWeight: 300,
            }}
          >
            Unterstützung
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 300,
              color: 'rgba(255, 245, 210, 0.95)',
              marginBottom: '2rem',
              letterSpacing: '0.02em',
            }}
          >
            Baue das Netz mit.
          </h2>

          <div className="space-y-4">
            {[
              'Wir sind ein Künstler, eine Vision und ein Entwicklerteam. Die Karte, der Kalender, das Profil — sie entstehen. Noch nicht fertig. Aber auf dem Weg.',
              'Was fehlt: die Mittel, schneller zu gehen.',
              'Jede Spende fließt direkt in Entwicklungszeit. In Code, der später Open Source gehört — dir, allen, der Gemeinschaft.',
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(0.88rem, 2.2vw, 1rem)',
                  fontWeight: i === 1 ? 400 : 300,
                  fontStyle: i === 1 ? 'italic' : 'normal',
                  color: i === 1 ? 'rgba(255, 240, 170, 0.9)' : 'rgba(230, 205, 160, 0.85)',
                  lineHeight: 1.8,
                }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Donation form */}
        <div
          ref={refForm}
          className={`section-reveal section-reveal-delay-1 ${inViewForm ? 'visible' : ''}`}
        >
          {submitted ? (
            <div
              className="text-center py-12"
              style={{
                background: 'rgba(212, 168, 67, 0.1)',
                border: '1px solid rgba(212, 168, 67, 0.3)',
              }}
            >
              <div className="mb-4 flex justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
                  <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(212, 168, 67, 0.7)" strokeWidth="1.5" className="animate-breathe" />
                  <circle cx="24" cy="24" r="6" fill="rgba(212, 168, 67, 0.5)" />
                </svg>
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.4rem',
                  fontStyle: 'italic',
                  color: 'rgba(255, 245, 200, 0.95)',
                  marginBottom: '0.5rem',
                }}
              >
                Danke. Du bist Teil des Netzes.
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 300,
                  color: 'rgba(200, 175, 130, 0.8)',
                }}
              >
                Wir melden uns bei {email}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Amount selection */}
              <div className="mb-6">
                <div className="grid grid-cols-4 gap-3 mb-3">
                  {amounts.map(amount => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => { setSelected(amount); setCustom('') }}
                      className="py-3 transition-all duration-200"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.9rem',
                        fontWeight: selected === amount && !custom ? 500 : 300,
                        background: selected === amount && !custom
                          ? 'rgba(212, 168, 67, 0.3)'
                          : 'rgba(212, 168, 67, 0.06)',
                        border: selected === amount && !custom
                          ? '1px solid rgba(212, 168, 67, 0.7)'
                          : '1px solid rgba(212, 168, 67, 0.25)',
                        color: selected === amount && !custom
                          ? 'rgba(255, 245, 190, 0.95)'
                          : 'rgba(220, 190, 130, 0.8)',
                        cursor: 'pointer',
                      }}
                    >
                      {amount} €
                    </button>
                  ))}
                </div>

                {/* Custom amount */}
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    placeholder="Eigener Betrag"
                    value={custom}
                    onChange={e => { setCustom(e.target.value); setSelected(null) }}
                    className="w-full pr-8"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: 300,
                      background: 'rgba(212, 168, 67, 0.06)',
                      border: custom ? '1px solid rgba(212, 168, 67, 0.7)' : '1px solid rgba(212, 168, 67, 0.25)',
                      color: 'rgba(240, 215, 150, 0.9)',
                      padding: '12px 16px',
                      outline: 'none',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = 'rgba(212, 168, 67, 0.6)' }}
                    onBlur={e => { if (!custom) e.currentTarget.style.borderColor = 'rgba(212, 168, 67, 0.25)' }}
                  />
                  <span
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    style={{ color: 'rgba(212, 168, 67, 0.5)', fontSize: '0.9rem' }}
                    aria-hidden="true"
                  >
                    €
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem',
                    fontWeight: 300,
                    background: 'rgba(212, 168, 67, 0.06)',
                    border: '1px solid rgba(212, 168, 67, 0.25)',
                    color: 'rgba(240, 215, 150, 0.9)',
                    padding: '14px 16px',
                    outline: 'none',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = 'rgba(212, 168, 67, 0.6)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(212, 168, 67, 0.25)' }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 transition-all duration-200"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: effectiveAmount && email ? 'rgba(212, 168, 67, 0.9)' : 'rgba(212, 168, 67, 0.3)',
                  color: effectiveAmount && email ? '#1a0f00' : 'rgba(212, 168, 67, 0.5)',
                  border: 'none',
                  cursor: effectiveAmount && email ? 'pointer' : 'default',
                }}
                onMouseEnter={e => {
                  if (effectiveAmount && email) {
                    e.currentTarget.style.background = 'rgba(212, 168, 67, 1)'
                  }
                }}
                onMouseLeave={e => {
                  if (effectiveAmount && email) {
                    e.currentTarget.style.background = 'rgba(212, 168, 67, 0.9)'
                  }
                }}
              >
                {effectiveAmount ? `${effectiveAmount} € spenden` : 'Betrag auswählen'}
              </button>
            </form>
          )}

          {/* Dev team note */}
          <p
            className="mt-6 text-center"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 300,
              color: 'rgba(190, 155, 100, 0.6)',
              lineHeight: 1.6,
            }}
          >
            Wir haben ein Entwicklerteam, das an dieser Infrastruktur arbeitet. Mit deiner Unterstützung machen wir die weltweite Lichtungs-Community sichtbar.
          </p>

          {/* Documenta badge */}
          <div
            className="documenta-badge mt-8 mx-auto text-center px-5 py-3"
            style={{ maxWidth: 360 }}
          >
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 300,
                color: 'rgba(212, 168, 67, 0.7)',
                letterSpacing: '0.05em',
                lineHeight: 1.6,
              }}
            >
              Die Lichtung bewirbt sich für die{' '}
              <span style={{ fontWeight: 500 }}>documenta 16</span>
              {' '}in Kassel 2027.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
