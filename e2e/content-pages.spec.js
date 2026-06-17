import { test, expect } from '@playwright/test'

// FR-05 About, FR-06 Service pages, FR-08 Partners
// E2E: the key content pages render their expected sections and counts.

test.describe('FR-05 About page', () => {
  test('shows vision, mission and the six values', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: /our vision/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /our mission/i })).toBeVisible()
    await expect(page.locator('.value-card')).toHaveCount(6)
    await expect(page.getByText(/rubric’s business is people/i)).toBeVisible()
  })
})

test.describe('FR-06 Services page', () => {
  test('lists all nine services and routes to Contact via CTA', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('.service-card')).toHaveCount(9)
    await page.getByRole('link', { name: /discuss your project/i }).click()
    await expect(page).toHaveURL('/contact')
  })
})

test.describe('FR-08 Partners page', () => {
  test('shows the Atlassian partnership and product suite', async ({ page }) => {
    await page.goto('/partners')
    await expect(page.getByRole('heading', { name: /atlassian expert partner/i })).toBeVisible()
    await expect(page.locator('.product-card')).toHaveCount(8)
    await expect(page.getByRole('heading', { name: /^Jira$/ })).toBeVisible()
  })
})
