import logoUrl from './rubric-logo.png'

/**
 * Rubric brand mark.
 *
 * Uses the official logo image (rubric-logo.png in this folder). The artwork
 * already includes the "rubric" wordmark, so no separate text is rendered.
 *
 * To update the logo, just replace rubric-logo.png in this folder (and the
 * copy in /public used for the browser favicon). See README.md here.
 *
 * `size` sets the rendered height in px. `withWordmark` is kept for backwards
 * compatibility but the wordmark is part of the image itself.
 */
export default function RubricLogo({ size = 40 }) {
  return (
    <span className="rubric-logo" aria-label="Rubric">
      <img src={logoUrl} alt="Rubric" height={size} />
    </span>
  )
}
