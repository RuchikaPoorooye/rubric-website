import { useEffect, useRef } from 'react'

/**
 * Animated "constellation" network rendered on a canvas.
 * Particles drift and link to nearby neighbours — a tech-forward backdrop.
 * Theme-aware (reads brand colours from CSS variables) and respects
 * prefers-reduced-motion (renders a single static frame instead of animating).
 */
export default function ParticleField({ density = 0.00008 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles = []
    let raf = 0
    let inkRGB = '30, 33, 38'
    let accentRGB = '229, 57, 53'

    const readColors = () => {
      const styles = getComputedStyle(document.documentElement)
      const ink = styles.getPropertyValue('--logo-ink').trim()
      // Dark theme uses white ink; on dark bg we want light dots.
      inkRGB = ink.startsWith('#fff') || ink === '#ffffff' ? '255, 255, 255' : '120, 130, 145'
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(120, Math.max(28, Math.floor(width * height * density)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        accent: Math.random() < 0.12,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const linkDist = 130

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        if (!reduceMotion) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > width) p.vx *= -1
          if (p.y < 0 || p.y > height) p.vy *= -1
        }

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.hypot(dx, dy)
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.35
            ctx.strokeStyle = `rgba(${inkRGB}, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.accent ? 2.4 : 1.6, 0, Math.PI * 2)
        ctx.fillStyle = p.accent
          ? `rgba(${accentRGB}, 0.9)`
          : `rgba(${inkRGB}, 0.7)`
        ctx.fill()
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw)
    }

    readColors()
    resize()
    draw()

    const onResize = () => {
      readColors()
      resize()
      if (reduceMotion) draw()
    }
    window.addEventListener('resize', onResize)

    // Re-read colours when the theme attribute flips.
    const observer = new MutationObserver(() => {
      readColors()
      if (reduceMotion) draw()
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      observer.disconnect()
    }
  }, [density])

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />
}
