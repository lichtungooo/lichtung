import { Nav } from './components/Nav'
import { HeroSection } from './components/HeroSection'
import { WoLichtIst } from './components/WoLichtIst'
import { DerKreis } from './components/DerKreis'
import { DasLeuchten } from './components/DasLeuchten'
import { DasNetz } from './components/DasNetz'
import { Spende } from './components/Spende'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="relative">
      <Nav />
      <main>
        {/* Hero — dark, blazing O */}
        <HeroSection />

        {/* Das Licht — white, watermark, lyrical */}
        <WoLichtIst />

        {/* Der Kreis — the practice, circle visualization */}
        <DerKreis />

        {/* Das Leuchten — vision, poetic */}
        <DasLeuchten />

        {/* Das Netz — infrastructure, open source */}
        <DasNetz />

        {/* Spende — support the project */}
        <Spende />
      </main>

      <Footer />
    </div>
  )
}
