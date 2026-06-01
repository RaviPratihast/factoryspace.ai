/**
 * Design token: Color system
 * Source: §2 of DESIGN_SPEC.md (Robotflow / Home V1)
 * These are the authoritative values — map to CSS vars in globals.css and tailwind.config.ts.
 */

// ─── Neutral scale ───────────────────────────────────────────────────────────
export const neutral = {
  100: '#ffffff',  // headings, primary button fill
  200: '#dde2ef',  // secondary light text on dark CTA
  300: '#b6bcc9',  // default body text
  400: '#7c818d',  // muted text, marquee labels
  500: '#3b3e45',  // borders, pointer dots, dividers
  600: '#121418',  // cards, elevated surfaces
  700: '#090a0c',  // section panels, secondary backgrounds
  800: '#050607',  // page background, button hover layer
} as const;

// ─── System palette ──────────────────────────────────────────────────────────
export const red    = { 100: '#fff5f6', 200: '#fac6d0', 300: '#fb93a3', 400: '#fe566b' } as const;
export const blue   = { 100: '#e3efff', 200: '#c3ddff', 300: '#8dc1ff', 400: '#64a7ff' } as const;
export const yellow = { 100: '#fffae9', 200: '#faedbf', 300: '#fbe080', 400: '#efc42c' } as const;
export const green  = { 100: '#eef9f5', 200: '#e2fbea', 300: '#adecbb', 400: '#74d184' } as const;

// ─── Accent ──────────────────────────────────────────────────────────────────
export const accent = {
  interactive: '#2388ff',  // focus rings, hamburger-open, radio/check
  promo:       '#146ef5',  // promo card backgrounds
} as const;

// ─── Semantic mapping ─────────────────────────────────────────────────────────
export const colors = {
  bg: {
    page:    neutral[800],  // #050607
    section: neutral[700],  // #090a0c
    card:    neutral[600],  // #121418
  },
  text: {
    primary: neutral[100],  // #ffffff
    body:    neutral[300],  // #b6bcc9
    muted:   neutral[400],  // #7c818d
    subtle:  neutral[200],  // #dde2ef
  },
  border: {
    default: neutral[600],  // #121418
    strong:  neutral[500],  // #3b3e45
  },
  accent,
} as const;
