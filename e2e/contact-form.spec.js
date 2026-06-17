import { test, expect } from '@playwright/test'

// FR-09 Contact form
// E2E: required-field validation, email-format validation, and a successful
// submission showing the confirmation message.

test.describe('FR-09 Contact form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('blocks submission when required fields are empty', async ({ page }) => {
    await page.getByRole('button', { name: /send message/i }).click()
    // Native required validation keeps the form on screen; no success message.
    await expect(page.getByText(/your message has been captured/i)).toHaveCount(0)
    const nameValid = await page.getByLabel('Name').evaluate((el) => el.checkValidity())
    expect(nameValid).toBe(false)
  })

  test('rejects an invalid email format', async ({ page }) => {
    await page.getByLabel('Name').fill('Test User')
    await page.getByLabel('Email').fill('not-an-email')
    await page.getByLabel('Subject').fill('Enquiry')
    await page.getByLabel('Message').fill('Hello Rubric')
    await page.getByRole('button', { name: /send message/i }).click()
    const emailValid = await page.getByLabel('Email').evaluate((el) => el.checkValidity())
    expect(emailValid).toBe(false)
    await expect(page.getByText(/your message has been captured/i)).toHaveCount(0)
  })

  test('submits successfully with valid input', async ({ page }) => {
    await page.getByLabel('Name').fill('Test User')
    await page.getByLabel('Email').fill('test@example.com')
    await page.getByLabel('Subject').fill('Enquiry')
    await page.getByLabel('Message').fill('Please get in touch about QA services.')
    await page.getByRole('button', { name: /send message/i }).click()
    await expect(page.getByText(/your message has been captured/i)).toBeVisible()
  })
})
