# Rubric Website — E2E Automation

End-to-end tests built with **Playwright**, mapped to the user stories under
**Epic [PLAI-138](https://rubricmu.atlassian.net/browse/PLAI-138)** —
*"Rubric Website (futuristic-ui) – User Stories & Tests"*.

## Running

```bash
npm install
npx playwright install chromium   # one-time browser download
npm run test:e2e                  # headed (visible browser) + reports
npm run test:e2e:headless         # headless / CI run
npm run test:e2e:ui               # interactive UI mode
npm run test:e2e:report           # open the last HTML report
```

The config starts (or reuses) the Vite dev server at `http://localhost:5173`.

## Traceability — User Story (PLAI-138) → spec

| Story | Title | Spec file | Status |
| --- | --- | --- | --- |
| **US-1** · PLAI-139 | Global Navigation | `navigation.spec.js` | ✅ automated |
| **US-2** · PLAI-140 | Home Page Overview | `home.spec.js` | ✅ automated |
| **US-3** · PLAI-141 | Services Listing | `content-pages.spec.js` | ✅ automated |
| **US-4** · PLAI-142 | About the Company | `content-pages.spec.js` | ✅ automated |
| **US-5** · PLAI-143 | Partner (Atlassian) Information | `content-pages.spec.js` | ✅ automated |
| **US-6** · PLAI-144 | Careers Application (incl. CV upload) | `careers-form.spec.js` | ✅ automated |
| **US-7** · PLAI-145 | Contact Enquiry | `contact-form.spec.js` | ✅ automated |
| **US-8** · PLAI-146 | Theme Toggle (Dark / Light) | `theme.spec.js` | ✅ automated |
| **US-9** · PLAI-147 | Visual & Interaction Effects | `effects.spec.js` | ✅ automated |

Each test's `describe` block is named with its **US-x [PLAI-xxx]** key so a run
report can be traced straight back to the story.

## Supplementary specs (beyond the epic)

| Spec | Purpose |
| --- | --- |
| `responsive.spec.js` | Mobile burger navigation (the epic notes mobile as a gap; this verifies the menu that exists). |
| `search.spec.js` | Site search — not part of the futuristic-ui scope; kept as a documented `fixme` placeholder. |

## Result

**38 passing · 4 skipped** (the search `fixme` placeholders). Mapped to Xray
tests PLAI-148–180 under Epic PLAI-138 (only the theme-contrast check, PLAI-177,
is left as a manual/visual verification). Reports:
`playwright-report/index.html` (HTML) and `playwright-report/results.xml`
(JUnit — importable into Xray).
