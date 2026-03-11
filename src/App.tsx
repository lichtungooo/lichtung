import { Nav } from './components/Nav'
import { HeroSection } from './components/HeroSection'
import { WoLichtIst } from './components/WoLichtIst'
import { DerKreis } from './components/DerKreis'


import { Spende } from './components/Spende'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="relative">
      <Nav />
      <main>

        <HeroSection />


        <WoLichtIst />


        <DerKreis />






        <Spende />
      </main>

      <Footer />
    </div>
  )
}
