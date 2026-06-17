# Rubric logo

This folder holds the brand mark so it can be updated in one place.

| File | Purpose |
| --- | --- |
| `RubricLogo.jsx` | Inline-SVG React component used across the site. Recolours with the theme (graphite on light, white on dark); the impact vector stays Signal Red `#E53935`. |
| `rubric-logo.svg` | Static fixed-colour version (also copied to `/public` for the browser favicon). |

## How to swap in the OFFICIAL logo

You pasted the logo as an image in chat — that can't be saved automatically, so
drop the real file in here yourself.

1. Save the official artwork into this folder, e.g. `rubric-logo.png`
   (or, ideally, a vector `rubric-logo-official.svg`).
2. Open `RubricLogo.jsx` and replace the inline `<svg>…</svg>` with an image:

   ```jsx
   import logoUrl from './rubric-logo.png'

   export default function RubricLogo({ size = 40, withWordmark = true }) {
     return (
       <span className="rubric-logo" aria-label="Rubric">
         <img src={logoUrl} alt="Rubric" height={size} />
         {withWordmark && <span className="rubric-wordmark">rubric</span>}
       </span>
     )
   }
   ```

3. To also update the browser tab icon, replace `/public/rubric-logo.svg`
   (keep the same filename, or update the `<link rel="icon">` in `index.html`).

Because every part of the site imports the logo from this one component,
updating it here updates it everywhere — navbar, footer and hero.
