import { Nav } from './components/Nav'
import { HeroSection } from './components/HeroSection'
import { WoLichtIst } from './components/WoLichtIst'
import { Vergangenheit } from './components/Vergangenheit'
import { Zimbeln } from './components/Zimbeln'
import { Vision } from './components/Vision'
import { Gemeinschaft } from './components/Gemeinschaft'
import { Spende } from './components/Spende'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="relative">
      <Nav />
      <main>
        {/* JETZT — The blazing present */}
        <HeroSection />

        {/* The Foundation — warm light, cream */}
        <WoLichtIst />

        {/* Vergangenheit — descending into the earth */}
        <Vergangenheit />

        {/* Zimbeln — the practice, energetic gold */}
        <Zimbeln />

        {/* Vision — ascending into the future */}
        <Vision />

        {/* Gemeinschaft — the tools, community */}
        <Gemeinschaft />

        {/* Spende — support the project */}
        <Spende />
      </main>

      <Footer />
    </div>
  )
}
