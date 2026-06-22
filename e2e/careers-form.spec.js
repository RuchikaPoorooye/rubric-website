import { test, expect } from '@playwright/test'

// FR-10 Careers application form (now including the required CV upload)
// E2E: required-field validation, file-type validation, and a successful
// application submission with a valid CV attached.

const validCv = {
  name: 'cv.pdf',
  mimeType: 'application/pdf',
  buffer: Buffer.from('%PDF-1.4 fake cv for testing'),
}

async function fillBasics(page) {
  await page.getByLabel('Position of interest').fill('Automation Engineer')
  await page.getByLabel('First name').fill('Ada')
  await page.getByLabel('Surname').fill('Lovelace')
  await page.getByLabel('Email').fill('ada@example.com')
}

test.describe('US-6 Careers Application [PLAI-144]', () => {
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

  test('requires a CV file (FR-10)', async ({ page }) => {
    const fileInput = page.locator('input[type="file"]')
    await expect(fileInput).toBeVisible()
    const required = await fileInput.evaluate((el) => el.required)
    expect(required).toBe(true)
  })

  test('rejects a disallowed file type', async ({ page }) => {
    await fillBasics(page)
    await page.locator('input[type="file"]').setInputFiles({
      name: 'cv.txt',
      mimeType: 'text/plain',
      buffer: Buffer.from('not a real cv'),
    })
    await expect(page.getByText(/please upload a pdf, doc or docx/i)).toBeVisible()
    await expect(page.getByText(/thanks for your interest/i)).toHaveCount(0)
  })

  test('submits successfully with a valid CV attached', async ({ page }) => {
    await fillBasics(page)
    await page.getByLabel('Qualifications / message').fill('10 years in test automation.')
    await page.locator('input[type="file"]').setInputFiles(validCv)
    await expect(page.getByText(/attached: cv\.pdf/i)).toBeVisible()
    await page.getByRole('button', { name: /submit application/i }).click()
    await expect(page.getByText(/thanks for your interest/i)).toBeVisible()
  })
})
