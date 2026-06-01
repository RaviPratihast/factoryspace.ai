'use client';

/**
 * GSAP plugin registration — import once from the root client layout.
 * Source: §7 of DESIGN_SPEC.md
 *
 * All animation components must be 'use client' and import helpers from here.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';

let registered = false;

export function registerGsapPlugins() {
  if (registered || typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger, Observer);
  registered = true;
}

// Register as soon as this module loads in the browser (before child useEffects run).
registerGsapPlugins();

// ─── Scroll batch reveal (§7.6) ───────────────────────────────────────────────
// Usage: setupScrollReveal('.animate-on-scroll')
export function setupScrollReveal(selector: string) {
  ScrollTrigger.batch(selector, {
    onEnter: (els) =>
      gsap.to(els, { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' }),
    onLeave: (els) =>
      gsap.set(els, { opacity: 0, y: 100 }),
    onEnterBack: (els) =>
      gsap.to(els, { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' }),
    onLeaveBack: (els) =>
      gsap.set(els, { opacity: 0, y: -100 }),
  });
}

// ─── Hero parallax (§7.3) ─────────────────────────────────────────────────────
// Usage: setupHeroParallax('.background-image-home-v1-hero')
export function setupHeroParallax(selector: string) {
  gsap.to(selector, {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: {
      trigger: selector,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
}

// ─── Number counter (§7.5) ────────────────────────────────────────────────────
export function setupCountUp(selector: string) {
  const elements = document.querySelectorAll<HTMLElement>(selector);
  elements.forEach((el, i) => {
    const target = parseFloat(el.dataset.count ?? '0');
    gsap.fromTo(
      el,
      { textContent: 0 },
      {
        textContent: target,
        duration: 2,
        ease: 'power1.out',
        snap: { textContent: 1 },
        delay: i * 0.1,
        scrollTrigger: { trigger: el, start: 'top 80%', once: true },
        onUpdate() {
          el.textContent = Math.round(parseFloat(el.textContent ?? '0')).toLocaleString();
        },
      }
    );
  });
}

// ─── Pointer line reveal (§7.7) ───────────────────────────────────────────────
export function setupPointerLine(wrapperSelector: string) {
  const wrappers = document.querySelectorAll<HTMLElement>(wrapperSelector);
  wrappers.forEach((wrapper) => {
    const inner = wrapper.querySelector<HTMLElement>('.pointer-line-inner');
    const dot   = wrapper.querySelector<HTMLElement>('.pointer-line-dot');
    if (!inner || !dot) return;

    gsap.fromTo(
      inner,
      { width: '0%' },
      {
        width: '100%',
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: wrapper, start: 'top 80%', once: true },
      }
    );
    gsap.fromTo(
      dot,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.4,
        delay: 0.6,
        scrollTrigger: { trigger: wrapper, start: 'top 80%', once: true },
      }
    );
  });
}

export { gsap, ScrollTrigger, Observer };
