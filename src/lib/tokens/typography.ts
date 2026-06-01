/**
 * Design token: Typography system
 * Source: §3 of DESIGN_SPEC.md
 */

// ─── Display scale (px) ───────────────────────────────────────────────────────
// Webflow uses .display-1 … .display-10 instead of raw h1-h6
export const displayScale = {
  10: { size: 72, lineHeight: 1.25, weight: 500, role: 'Hero H1' },
  9:  { size: 60, lineHeight: 1.25, weight: 500, role: 'Large stats / marquee' },
  8:  { size: 48, lineHeight: 1.25, weight: 500, role: 'Section H2' },
  7:  { size: 36, lineHeight: 1.25, weight: 500, role: 'Product titles, footer email' },
  6:  { size: 30, lineHeight: 1.25, weight: 500, role: 'Feature subheads, blog featured' },
  5:  { size: 24, lineHeight: 1.25, weight: 500, role: 'Card titles, FAQ questions' },
  4:  { size: 20, lineHeight: 1.25, weight: 500, role: 'Price strikethrough, meta' },
  3:  { size: 18, lineHeight: 1.25, weight: 400, role: 'Financing line' },
  2:  { size: 16, lineHeight: 1.25, weight: 400, role: 'Badge text' },
  1:  { size: 14, lineHeight: 1.25, weight: 700, role: 'Uppercase labels (footer columns)' },
} as const;

// ─── Body / paragraph scale ───────────────────────────────────────────────────
export const paragraphScale = {
  lg: { size: 20, lineHeight: 1.5, weight: 400 },
  rg: { size: 18, lineHeight: 1.5, weight: 400 }, // default body
  sm: { size: 16, lineHeight: 1.5, weight: 400 },
} as const;

// ─── Responsive overrides (px) ────────────────────────────────────────────────
// Source: §13.2 — token overrides per breakpoint
export const responsiveDisplayScale = {
  10: { desktop: 72, tablet: 64, mobile: 44, mobileSm: 44 },
  9:  { desktop: 60, tablet: 48, mobile: 36 },
  8:  { desktop: 48, tablet: 36, mobile: 32 },
  7:  { desktop: 36, tablet: 30, mobile: 28 },
  6:  { desktop: 30, tablet: 28, mobile: 24 },
  5:  { desktop: 24, tablet: 24, mobile: 22 },
  4:  { desktop: 20, tablet: 20, mobile: 20 },
} as const;
