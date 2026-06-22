import { test, expect } from '@playwright/test'

// US-9 Visual & Interaction Effects (Desktop) — Epic PLAI-138, Story PLAI-147
// AC: scroll-progress indicator tracks position; custom cursor + card-tilt work;
// sections reveal on scroll; a reduced-motion preference minimises animations.

test.describe('US-9 Visual & Interaction Effects [PLAI-147]', () => {
  test('scroll-progress indicator advances as you scroll', async ({ page }) => {
    await page.goto('/')
    const bar = page.locator('.scroll-progress')
    await expect(bar).toBeAttached()

    const scaleAtTop = await bar.evaluate(
      (el) => new DOMMatrixReadOnly(getComputedStyle(el).transform).a,
    )
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(600)
    const scaleAtBottom = await bar.evaluate(
      (el) => new DOMMatrixReadOnly(getComputedStyle(el).transform).a,
    )
    expect(scaleAtBottom).toBeGreaterThan(scaleAtTop)
  })

  test('cards use tilt-interaction containers', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('.tilt-card').first()).toBeVisible()
    expect(await page.locator('.tilt-card').count()).toBeGreaterThan(0)
  })

  test('sections reveal when scrolled into view', async ({ page }) => {
    await page.goto('/')
    const departments = page.locator('.department-card').first()
    await departments.scrollIntoViewIfNeeded()
    await expect(departments).toBeVisible()
    await expect(departments).toBeInViewport()
  })

  test('custom glow cursor appears on pointer move (fine pointer)', async ({ page }) => {
    await page.goto('/')
    await page.mouse.move(400, 300)
    await page.mouse.move(420, 320)
    await expect(page.locator('.glow-cursor')).toBeAttached()
  })
})

test.describe('US-9 Reduced motion [PLAI-147]', () => {
  test('minimises animation — no glow cursor under reduced motion', async ({ page }) => {
    // Emulate the OS reduced-motion preference before the app mounts.
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto('/')
    await page.mouse.move(400, 300)
    await page.mouse.move(420, 320)
    await expect(page.locator('.glow-cursor')).toHaveCount(0)
  })
})
