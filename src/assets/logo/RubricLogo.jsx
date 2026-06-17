/**
 * Rubric brand mark.
 *
 * This is an inline-SVG recreation of the Rubric symbol so that the three
 * structural elements automatically recolour with the active theme (graphite
 * on light, white on dark) while the impact vector stays Signal Red.
 *
 * To use the OFFICIAL logo instead, see the README in this folder:
 * drop your file in here and swap this component for an <img> import.
 */
export default function RubricLogo({ size = 40, withWordmark = true }) {
  return (
    <span className="rubric-logo" aria-label="Rubric">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden={withWordmark ? 'true' : 'false'}
      >
        {/* Structural connector — transformation / movement */}
        <polygon points="21,5 26,6 17,40 12,38" fill="var(--logo-ink)" />
        {/* Upper structure — governance / frameworks */}
        <polygon
          points="29,7 53,7 53,31 44,31 44,17 29,17"
          fill="var(--logo-ink)"
        />
        {/* Lower anchor — execution / delivery */}
        <polygon points="18,33 31,33 26,59 13,59" fill="var(--logo-ink)" />
        {/* Impact vector — measurable outcomes */}
        <polygon points="32,30 43,30 52,59 47,59" fill="var(--logo-impact)" />
      </svg>
      {withWordmark && <span className="rubric-wordmark">rubric</span>}
    </span>
  )
}
