import { test, expect } from '@playwright/test'

// FR-10 Careers application form
// E2E: required-field validation and a successful application submission.
//
// NOTE — divergence from the BRD: FR-10 specifies a *CV upload* (required) plus
// extra fields (address, telephone, degree, etc.). The generated marketing site
// implements a simplified application form WITHOUT a file upload. The CV-upload
// requirement is therefore covered by a documented `fixme` below so the gap is
// visible in the report rather than silently missing.

test.describe('FR-10 Careers form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/careers')
  })

  test('blocks submission when required fields are empty', async ({ page }) => {
    await page.getByRole('button', { name: /submit application/i }).click()
    await expect(page.getByText(/thanks for your interest/i)).toHaveCount(0)
    const posValid = await page
      .getByLabel('Position of interest')
      .evaluate((el) => el.checkValidity())
    expect(posValid).toBe(false)
  })

  test('submits successfully with valid input', async ({ page }) => {
    await page.getByLabel('Position of interest').fill('Automation Engineer')
    await page.getByLabel('First name').fill('Ada')
    await page.getByLabel('Surname').fill('Lovelace')
    await page.getByLabel('Email').fill('ada@example.com')
    await page.getByLabel('Qualifications / message').fill('10 years in test automation.')
    await page.getByRole('button', { name: /submit application/i }).click()
    await expect(page.getByText(/thanks for your interest/i)).toBeVisible()
  })

  test.fixme('FR-10 requires a CV upload field (not implemented in generated site)', async ({ page }) => {
    // BRD gap: a required CV file upload is expected here.
    await expect(page.locator('input[type="file"]')).toBeVisible()
  })
})
