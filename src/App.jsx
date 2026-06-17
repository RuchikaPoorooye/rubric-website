import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Departments from './components/Departments.jsx'
import BrandStatement from './components/BrandStatement.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Departments />
        <BrandStatement />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
