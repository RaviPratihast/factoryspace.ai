/**
 * Design token: Spacing & layout
 * Source: §4 of DESIGN_SPEC.md
 */

// ─── Main spacer scale (px) ────────────────────────────────────────────────────
export const spacers = {
  none:    0,
  '5xsm':  4,
  '4xsm':  8,
  '3xsm': 12,
  '2xsm': 16,
  xsm:    20,
  sm:     24,
  rg:     32,
  md:     40,
  lg:     48,
  xlg:    56,
  '2xlg': 64,
  '3xlg': 72,
  '4xlg': 80,
  '5xlg': 100,
  '6xlg': 120,
  '7xlg': 160,
  '8xlg': 200,
} as const;

// ─── Section padding scale (px) ───────────────────────────────────────────────
export const sectionPadding = {
  xsm: 64,
  sm:  80,
  rg:  100,
  md:  120,
  lg:  160,
  xlg: 200, // default .section
} as const;

// ─── Border radius (px) ────────────────────────────────────────────────────────
export const radius = {
  card:    32,  // cards, images
  section: 64,  // full-width section blocks
  pill:    200, // buttons (200–300)
  pillLg:  300,
  blogCard: 24,
  hamburger: 4,
} as const;

// ─── Container max-widths ─────────────────────────────────────────────────────
export const containers = {
  default:  1280,
  md:       1108,
  hero:     666,
  subhero:  516,
  ctaRight: 342,
  pricing:  1002,
} as const;
