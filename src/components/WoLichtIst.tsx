import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const GESCHICHTE = `Am Anfang war das Leuchten.

Alle Kulturen der Erde erinnern sich an dasselbe — eine Zeit, in der die Menschen in Verbindung waren. Mit der Erde. Miteinander. Mit dem, was größer ist als sie selbst.

Die vedischen Schriften nennen es das Satya Yuga — das Zeitalter der Wahrheit. Die Griechen das Goldene Zeitalter. Die Kelten Tír na nÓg. Die Germanen Asgard. Die Hopi die Erste Welt. Die Slawen Irij — den Paradiesgarten.

Alle Völker. Alle Zeiten. Dieselbe Erinnerung: ein Leuchten.

Eine Zeit, in der Menschen zusammen unter dem Himmel tanzten, ihre Stimmen erhoben, und das Echo der Erde zurückkam — warm, lebendig, voller Antwort. In der Heilung das Natürlichste der Welt war. In der Gemeinschaft Freude war. In der das Herz wusste, wozu es schlägt.

Das ist Erinnerung. Und Erinnerungen werden wach.

Dann — mit Geduld, über Generationen hinweg — kam der Schatten.

Die Zeit wurde gepflanzt. Vorher war Zeit zirkulär — wie die Jahreszeiten, wie Atem, wie das Pulsieren der Erde. Dann wurde Zeit linear. Ein Pfeil. Anfang und Ende.

Mit linearer Zeit kamen Schulden. Mit Schulden die Angst. Mit Angst der Gehorsam.

Die Verbindung wurde gekappt. Das Lebendige, das frei durch die Menschen geflossen war — eingedämmt. In Herzen, die lernten, sich zu verschließen.

Das vollendete Gefängnis braucht keine sichtbaren Mauern. Es besteht aus Überzeugungen. Aus Geschichten, die man erzählte, bevor man alt genug war, sie zu prüfen. Aus einer Wirtschaft, die Zeit gegen Überleben tauscht.

Und doch: das Licht lebte weiter.

In jedem Menschen. In stillen Momenten, wenn der Körper atmet und die Gedanken schweigen. In echtem Lachen, das den ganzen Körper schüttelt. In Tränen, die kommen, wenn zwei Menschen sich wirklich begegnen. Im Staunen vor dem Sternenhimmel.

Mutter Erde wartete. Geduldig. Sie vergisst nicht.

Die Erde selbst erinnert sich an das Goldene Sein — an die Zeit, als Menschen und Land ein Puls waren. Diese Erinnerung ist in der Erde gespeichert, in Steinen, in Quellen, in heiligen Orten aller Kulturen. Sie wartet auf Menschen, die sich wieder erinnern.

Heute treffen sich Menschen wieder.

In kleinen Kreisen, unter freiem Himmel. Sie bringen ihre Stimmen mit. Ihr Lachen. Ihre Stille.

Und die Erde antwortet.

Wo zwei Menschen zusammenkommen — in echter Offenheit, in Freude, in gemeinsamem Schweigen — entsteht ein drittes. Ein Feld. Etwas, das größer ist als beide.

Der Kreis ist die älteste Form dieser Verbindung.

Leuchtende Felder auf der Erde — dort, wo Menschen zusammengekommen waren. Wie diese Punkte sich ausbreiteten. Wie das Licht sich von Ort zu Ort bewegte, sich berührte, sich ineinander webte. Wie ein lebendes Netz aus Licht, das immer dichter wurde, immer heller.

Das ist die Lichtung.

Wo Licht ist — gibt es keinen Schatten.

Denn Schatten ist das Fehlen von Licht, weiter nichts. Er hat keine eigene Substanz. Er verschwindet — einfach, unweigerlich — wenn das Licht kommt.`

export function WoLichtIst() {
  const [open, setOpen] = useState(false)
  const { ref, inView } = useInView(0.08)

  return (
    <section
      id="das-licht"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* Background: full text as atmospheric texture */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
        style={{ padding: '4rem 3rem' }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(0.55rem, 1.1vw, 0.75rem)',
            fontWeight: 300,
            color: 'rgba(0,0,0,0.045)',
            lineHeight: 1.85,
            letterSpacing: '0.01em',
            columnCount: 3,
            columnGap: '3rem',
            whiteSpace: 'pre-wrap',
            userSelect: 'none',
          }}
        >
          {GESCHICHTE}
        </p>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">

        <div
          ref={ref}
          className={`section-reveal ${inView ? 'visible' : ''}`}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
              fontWeight: 400,
              color: '#0A0A0A',
              lineHeight: 1.7,
              marginBottom: '3rem',
              letterSpacing: '0.01em',
            }}
          >
            Die Menschheit erinnert sich.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)',
              fontWeight: 400,
              color: '#2A2A2A',
              lineHeight: 1.9,
              marginBottom: '2.5rem',
              letterSpacing: '0.01em',
            }}
          >
            In echtem Lachen. Im Schweigen zwischen zwei Menschen,
            die sich wirklich begegnet sind.
            Im Staunen vor dem Sternenhimmel.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#0A0A0A',
              lineHeight: 1.6,
              marginBottom: '4rem',
              letterSpacing: '0.01em',
            }}
          >
            Das Licht war immer da.
          </p>

          <div
            style={{
              width: 1,
              height: 60,
              background: 'rgba(0,0,0,0.12)',
              margin: '0 auto 4rem',
            }}
            aria-hidden="true"
          />

          <blockquote
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.4rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#0A0A0A',
              lineHeight: 1.5,
              marginBottom: '4rem',
              letterSpacing: '0.01em',
            }}
          >
            „Wo Licht ist, gibt es keinen Schatten."
          </blockquote>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1rem, 2.4vw, 1.25rem)',
              fontWeight: 400,
              color: '#333333',
              lineHeight: 1.9,
              marginBottom: '3rem',
              letterSpacing: '0.01em',
            }}
          >
            Eine Geschichte des Lichts — von der Erinnerung aller Völker,
            vom Schatten, der kam, und von Mutter Erde, die wartet.
          </p>

          {/* CTA button */}
          <button
            onClick={() => setOpen(!open)}
            className="transition-all duration-300"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 400,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(10, 10, 10, 0.45)',
              background: 'transparent',
              border: '1px solid rgba(0,0,0,0.15)',
              padding: '10px 24px',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'rgba(10, 10, 10, 0.85)'
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.45)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(10, 10, 10, 0.45)'
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'
            }}
          >
            {open ? 'Schließen' : 'Die Geschichte'}
          </button>

          {/* Expandable full text */}
          <div
            style={{
              maxHeight: open ? '9999px' : '0px',
              overflow: 'hidden',
              transition: 'max-height 0.8s ease',
              marginTop: open ? '4rem' : 0,
            }}
          >
            <div
              style={{
                textAlign: 'left',
                borderTop: '1px solid rgba(0,0,0,0.06)',
                paddingTop: '3rem',
              }}
            >
              {GESCHICHTE.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(1rem, 2.4vw, 1.2rem)',
                    fontWeight: 400,
                    color: paragraph.startsWith('Wo Licht') ? '#0A0A0A' : '#2A2A2A',
                    fontStyle: paragraph.startsWith('Wo Licht') || paragraph.startsWith('Das ist Erinnerung') ? 'italic' : 'normal',
                    lineHeight: 1.9,
                    marginBottom: '1.8rem',
                    letterSpacing: '0.01em',
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
