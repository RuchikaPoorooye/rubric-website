import { test, expect } from '@playwright/test'

// US-1 Global Navigation — Epic PLAI-138, Story PLAI-139
// E2E: a user can reach every page from the top navigation, the active link
// is highlighted, the logo returns home, and unknown URLs show a 404.

const pages = [
  { link: 'About', path: '/about', heading: /connection between structure and execution/i },
  { link: 'Services', path: '/services', heading: /what we do/i },
  { link: 'Partners', path: '/partners', heading: /atlassian expert partner/i },
  { link: 'Careers', path: '/careers', heading: /best software quality company/i },
  { link: 'Contact', path: '/contact', heading: /build quality together/i },
]

test.describe('US-1 Global Navigation [PLAI-139]', () => {
  test('navigates to every page from the header menu', async ({ page }) => {
    await page.goto('/')
    const header = page.getByRole('banner')

    for (const p of pages) {
      await header.getByRole('link', { name: p.link, exact: true }).click()
      await expect(page).toHaveURL(p.path)
      await expect(page.getByRole('heading', { name: p.heading })).toBeVisible()
    }
  })

  test('highlights the active navigation link', async ({ page }) => {
    await page.goto('/services')
    const active = page.locator('.navbar-links a.is-active')
    await expect(active).toHaveText('Services')
  })

  test('logo returns to the home page', async ({ page }) => {
    await page.goto('/contact')
    await page.locator('.navbar-brand').click()
    await expect(page).toHaveURL('/')
    await expect(page.getByRole('heading', { name: /helping our customers deliver/i })).toBeVisible()
  })

  test('unknown route shows the 404 page', async ({ page }) => {
    await page.goto('/this-page-does-not-exist')
    await expect(page.getByRole('heading', { name: /page not found/i })).toBeVisible()
    await page.getByRole('link', { name: /back to home/i }).click()
    await expect(page).toHaveURL('/')
  })

  // PLAI-158 — header switches to compact on scroll
  test('header becomes compact on scroll', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.navbar')).not.toHaveClass(/is-scrolled/)
    await page.evaluate(() => window.scrollTo(0, 600))
    await expect(page.locator('.navbar')).toHaveClass(/is-scrolled/)
  })

  // PLAI-160 — menu items are keyboard-operable
  test('navigation works with the keyboard', async ({ page }) => {
    await page.goto('/')
    const about = page.getByRole('banner').getByRole('link', { name: 'About', exact: true })
    await about.focus()
    await expect(about).toBeFocused()
    await page.keyboard.press('Enter')
    await expect(page).toHaveURL('/about')
  })
})
