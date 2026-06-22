import { test, expect } from '@playwright/test'

// Content pages — Epic PLAI-138
//   US-3 Services Listing (PLAI-141), US-4 About the Company (PLAI-142),
//   US-5 Partner (Atlassian) Information (PLAI-143)
// E2E: the key content pages render their expected sections and counts.

test.describe('US-4 About the Company [PLAI-142]', () => {
  test('shows vision, mission and the six values', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: /our vision/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /our mission/i })).toBeVisible()
    await expect(page.locator('.value-card')).toHaveCount(6)
    await expect(page.getByText(/rubric’s business is people/i)).toBeVisible()
  })
})

test.describe('US-3 Services Listing [PLAI-141]', () => {
  test('lists all nine services and routes to Contact via CTA', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('.service-card')).toHaveCount(9)
    await page.getByRole('link', { name: /discuss your project/i }).click()
    await expect(page).toHaveURL('/contact')
  })
})

test.describe('US-5 Partner (Atlassian) Information [PLAI-143]', () => {
  test('shows the Atlassian partnership and product suite', async ({ page }) => {
    await page.goto('/partners')
    await expect(page.getByRole('heading', { name: /atlassian expert partner/i })).toBeVisible()
    await expect(page.locator('.product-card')).toHaveCount(8)
    await expect(page.getByRole('heading', { name: /^Jira$/ })).toBeVisible()
  })
})
