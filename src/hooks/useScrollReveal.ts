'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/animations/gsap';

/**
 * Attach scroll-reveal animation to children matching `selector` inside `containerRef`.
 * Source: §7.6
 */
export function useScrollReveal<T extends HTMLElement>(selector = '.animate-on-scroll') {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(selector, {
        onEnter: (els) =>
          gsap.to(els, { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' }),
        onLeave: (els) => gsap.set(els, { opacity: 0, y: 100 }),
        onEnterBack: (els) =>
          gsap.to(els, { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' }),
        onLeaveBack: (els) => gsap.set(els, { opacity: 0, y: -100 }),
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, [selector]);

  return containerRef;
}
