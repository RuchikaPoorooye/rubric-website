import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollProgress from './effects/ScrollProgress.jsx'
import GlowCursor from './effects/GlowCursor.jsx'

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on every route change.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <ScrollProgress />
      <GlowCursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
