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
    setSubmitted(true)
  }

  return (
    <section
      id="spende"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div className="relative z-10 max-w-xl mx-auto px-6">

        <div
          ref={ref}
          className={`section-reveal ${inView ? 'visible' : ''} text-center mb-14`}
        >
          {/* Section label */}
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 400,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.35)',
              marginBottom: '3rem',
            }}
          >
            Unterstützung
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 5.5vw, 3.5rem)',
              fontWeight: 300,
              color: '#0A0A0A',
              letterSpacing: '0.06em',
              marginBottom: '3.5rem',
              lineHeight: 1.1,
            }}
          >
            Unterstütze das Projekt.
          </h2>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              fontWeight: 400,
              color: '#2A2A2A',
              lineHeight: 1.9,
              marginBottom: '1.5rem',
              letterSpacing: '0.01em',
            }}
          >
            Der Code entsteht.<br />
            Die Karte wächst.<br />
            Das Team arbeitet.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#1A1A1A',
              lineHeight: 1.8,
              letterSpacing: '0.01em',
            }}
          >
            Mit deiner Unterstützung leuchtet<br />
            die Lichtung früher.
          </p>
        </div>

        {/* Donation form */}
        <div
          ref={refForm}
          className={`section-reveal section-reveal-delay-1 ${inViewForm ? 'visible' : ''}`}
        >
          {submitted ? (
            <div
              className="text-center py-16"
              style={{
                border: '1px solid rgba(0,0,0,0.1)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.5rem',
                  fontStyle: 'italic',
                  color: '#0A0A0A',
                  marginBottom: '0.8rem',
                  fontWeight: 400,
                }}
              >
                Danke. Du bist Teil des Netzes.
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: 300,
                  color: 'rgba(0,0,0,0.4)',
                  letterSpacing: '0.05em',
                }}
              >
                Wir melden uns bei {email}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Amount selection */}
              <div className="mb-5">
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {amounts.map(amount => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => { setSelected(amount); setCustom('') }}
                      className="py-3 transition-all duration-200"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.88rem',
                        fontWeight: selected === amount && !custom ? 500 : 300,
                        background: selected === amount && !custom
                          ? '#0A0A0A'
                          : 'transparent',
                        border: selected === amount && !custom
                          ? '1px solid #0A0A0A'
                          : '1px solid rgba(0,0,0,0.18)',
                        color: selected === amount && !custom
                          ? '#FFFFFF'
                          : '#0A0A0A',
                        cursor: 'pointer',
                        letterSpacing: '0.05em',
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
                      fontSize: '0.88rem',
                      fontWeight: 300,
                      background: 'transparent',
                      border: custom ? '1px solid #0A0A0A' : '1px solid rgba(0,0,0,0.18)',
                      color: '#0A0A0A',
                      padding: '12px 16px',
                      outline: 'none',
                      letterSpacing: '0.03em',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0A0A0A' }}
                    onBlur={e => { if (!custom) e.currentTarget.style.borderColor = 'rgba(0,0,0,0.18)' }}
                  />
                  <span
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    style={{ color: 'rgba(0,0,0,0.35)', fontSize: '0.88rem' }}
                    aria-hidden="true"
                  >
                    €
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.88rem',
                    fontWeight: 300,
                    background: 'transparent',
                    border: '1px solid rgba(0,0,0,0.18)',
                    color: '#0A0A0A',
                    padding: '14px 16px',
                    outline: 'none',
                    letterSpacing: '0.03em',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#0A0A0A' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.18)' }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 transition-all duration-200"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  background: effectiveAmount && email ? '#0A0A0A' : 'rgba(0,0,0,0.08)',
                  color: effectiveAmount && email ? '#FFFFFF' : 'rgba(0,0,0,0.3)',
                  border: 'none',
                  cursor: effectiveAmount && email ? 'pointer' : 'default',
                }}
                onMouseEnter={e => {
                  if (effectiveAmount && email) {
                    e.currentTarget.style.background = '#333333'
                  }
                }}
                onMouseLeave={e => {
                  if (effectiveAmount && email) {
                    e.currentTarget.style.background = '#0A0A0A'
                  }
                }}
              >
                {effectiveAmount ? `${effectiveAmount} € Spenden` : 'Betrag auswählen'}
              </button>
            </form>
          )}

          {/* Note */}
          <p
            className="mt-8 text-center"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 300,
              color: 'rgba(0,0,0,0.35)',
              lineHeight: 1.6,
              letterSpacing: '0.04em',
            }}
          >
            Alle Mittel fließen in die Open-Source-Entwicklung.
          </p>

          <p
            className="mt-2 text-center"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 300,
              color: 'rgba(0,0,0,0.2)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            documenta 16 · Kassel · 2027
          </p>
        </div>
      </div>
    </section>
  )
}
