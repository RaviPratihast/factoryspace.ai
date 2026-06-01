/**
 * Reusable GSAP animation parameter sets.
 * Source: §7.2 / §7.11
 */

export const fadeUpFrom: gsap.TweenVars = {
  opacity: 0,
  y: 50,
};

export const fadeUpTo: gsap.TweenVars = {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: 'power3.out',
};

export const staggerChildren = 0.1;

export const scrollRevealDefaults: gsap.TweenVars = {
  opacity: 1,
  y: 0,
  stagger: staggerChildren,
  duration: 0.8,
  ease: 'power3.out',
};
