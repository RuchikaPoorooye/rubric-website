# Rubric Website — E2E Automation

End-to-end tests built with **Playwright**, covering all user-facing flows of the
generated Rubric website and mapped to the functional requirements (FR) in the
**Rubric BRD v2**.

## Running

```bash
npm install
npx playwright install chromium   # one-time browser download
npm run test:e2e                  # run all flows (headless)
npm run test:e2e:ui               # interactive UI mode
npm run test:e2e:report           # open the last HTML report
```

The config starts (or reuses) the Vite dev server at `http://localhost:5173`.

## Coverage map (BRD → spec)

| BRD ref | Flow | Spec file | Status |
| --- | --- | --- | --- |
| FR-01 / FR-02 | Information architecture & navigation | `navigation.spec.js` | ✅ automated |
| FR-04 | Home page, hero, CTAs, tiles | `home.spec.js` | ✅ automated |
| FR-05 | About — vision/mission/values | `content-pages.spec.js` | ✅ automated |
| FR-06 | Services — nine services | `content-pages.spec.js` | ✅ automated |
| FR-08 | Partners — Atlassian suite | `content-pages.spec.js` | ✅ automated |
| FR-09 | Contact form (required, email, success) | `contact-form.spec.js` | ✅ automated |
| FR-10 | Careers application form | `careers-form.spec.js` | ✅ automated (CV upload `fixme`) |
| — | Dark/light theme toggle + persistence | `theme.spec.js` | ✅ automated |
| — | Mobile burger navigation | `responsive.spec.js` | ✅ automated |
| FR-03 | Site search | `search.spec.js` | ⚠️ documented gap (`fixme`) |

## Known divergences from the BRD

The BRD describes the **live WordPress site** (rubric.co.za). The generated React
site is a streamlined marketing build, so two BRD flows are intentionally marked
as `fixme` (visible in the report, not silently skipped):

1. **FR-03 Site search** — no search exists in the generated site.
2. **FR-10 CV upload** — the careers form has no file-upload field; the rest of
   the application flow is fully automated.

These become active tests as soon as the corresponding features are built.
