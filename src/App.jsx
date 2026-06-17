import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Stats from './components/Stats.jsx'
import Departments from './components/Departments.jsx'
import BrandStatement from './components/BrandStatement.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/effects/ScrollProgress.jsx'
import GlowCursor from './components/effects/GlowCursor.jsx'

function App() {
  return (
    <>
      <ScrollProgress />
      <GlowCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Departments />
        <BrandStatement />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
