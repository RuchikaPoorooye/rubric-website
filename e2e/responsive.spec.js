import { test, expect } from '@playwright/test'

// Responsive navigation (NFR — usability on mobile)
// E2E: on a small viewport the burger menu opens the navigation and a link works.

test.describe('Mobile navigation', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('burger opens the menu and navigates', async ({ page }) => {
    await page.goto('/')
    const burger = page.locator('.navbar-burger')
    await expect(burger).toBeVisible()

    await burger.click()
    await expect(page.locator('.navbar-links.is-open')).toBeVisible()

    await page.getByRole('banner').getByRole('link', { name: 'Services', exact: true }).click()
    await expect(page).toHaveURL('/services')
  })
})
