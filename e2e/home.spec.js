import { test, expect } from '@playwright/test'

// US-2 Home Page Overview — Epic PLAI-138, Story PLAI-140
// E2E: the hero renders, both CTAs route correctly, and the home page shows the
// services preview, the impact stats, and the five brand departments.

test.describe('US-2 Home Page Overview [PLAI-140]', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders the hero headline and eyebrow', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /helping our customers deliver/i }),
    ).toBeVisible()
    await expect(page.getByText(/software quality engineering/i)).toBeVisible()
  })

  test('primary CTA goes to Services', async ({ page }) => {
    await page.getByRole('link', { name: /explore our services/i }).click()
    await expect(page).toHaveURL('/services')
  })

  test('secondary CTA goes to Contact', async ({ page }) => {
    // "Get in touch" appears in the hero and again in the closing CTA band;
    // scope to the hero so the selector is unambiguous.
    await page.locator('.hero').getByRole('link', { name: /get in touch/i }).click()
    await expect(page).toHaveURL('/contact')
  })

  test('shows services preview, stats and departments', async ({ page }) => {
    await expect(page.locator('.service-card')).toHaveCount(6)
    await expect(page.locator('.stat-card')).toHaveCount(4)
    await expect(page.locator('.department-card')).toHaveCount(5)
  })

  test('"view all services" link routes to the Services page', async ({ page }) => {
    await page.getByRole('link', { name: /view all services/i }).click()
    await expect(page).toHaveURL('/services')
  })
})
