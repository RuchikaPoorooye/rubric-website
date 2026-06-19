import { test, expect } from '@playwright/test'

// FR-03 Site search
// The BRD specifies a header search submitting to /?s={query} with valid,
// empty, no-result and XSS-safe scenarios. The generated marketing site does
// NOT implement search, so this flow is documented as a known divergence:
//  - one passing test asserts the current state (no search control), and
//  - `fixme` tests describe the behaviour to automate once search is built.

test.describe('FR-03 Site search', () => {
  test('search is not present in the generated marketing site (documented BRD gap)', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('searchbox')).toHaveCount(0)
  })

  test.fixme('returns results for a valid query', async () => {})
  test.fixme('shows a "no results" message for an unmatched query', async () => {})
  test.fixme('handles empty query safely', async () => {})
  test.fixme('is XSS-safe for script/HTML in the query', async () => {})
})
