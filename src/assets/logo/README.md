# Rubric logo

This folder holds the brand mark so it can be updated in one place.

| File | Purpose |
| --- | --- |
| `rubric-logo.png` | **The official logo** — used across the whole site via `RubricLogo.jsx`. The artwork already includes the "rubric" wordmark. |
| `RubricLogo.jsx` | React component that renders the logo at a given `size` (height in px). |
| `rubric-logo.svg` | Earlier placeholder vector (no longer used by the site; kept for reference). |

There's also a copy at `/public/rubric-logo.png`, used for the **browser tab icon** (favicon) — see `index.html`.

## How to update the logo

1. Replace **`rubric-logo.png`** in this folder with your new artwork (keep the same filename).
2. Replace **`/public/rubric-logo.png`** too, if you want the browser tab icon updated.
3. That's it — the navbar, hero and footer all import from `RubricLogo.jsx`, so they update automatically.

> **Tip:** the current PNG has a white background, so on the dark theme it sits on
> a white "chip". If you export a **transparent-background** PNG (or an SVG), it
> will blend seamlessly into both themes — then you can remove the white
> background rule for `.rubric-logo` in `src/index.css`.
