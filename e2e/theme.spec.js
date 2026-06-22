import { test, expect } from '@playwright/test'

// Theme toggle (generated-site feature, beyond the BRD)
// E2E: the site defaults to dark, toggles to light, and the choice persists
// across a reload via localStorage.

test.describe('US-8 Theme Toggle (Dark / Light) [PLAI-146]', () => {
  test('defaults to dark theme', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  })

  test('toggles to light and persists after reload', async ({ page }) => {
    await page.goto('/')
    await page.locator('.theme-toggle').click()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')

    await page.reload()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')

    const stored = await page.evaluate(() => localStorage.getItem('rubric-theme'))
    expect(stored).toBe('light')
  })

  test('toggles back to dark', async ({ page }) => {
    await page.goto('/')
    await page.locator('.theme-toggle').click() // -> light
    await page.locator('.theme-toggle').click() // -> dark
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  })
})
