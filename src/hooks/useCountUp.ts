'use client';

import { useEffect, useRef } from 'react';
import { gsap, registerGsapPlugins } from '@/lib/animations/gsap';

/**
 * Animate a numeric element from 0 to `data-count` on scroll into view.
 * Source: §7.5
 *
 * Usage:
 *   const ref = useCountUp<HTMLSpanElement>();
 *   <span ref={ref} data-count="1200" />
 */
export function useCountUp<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!ref.current) return;
    const el = ref.current;
    const target = parseFloat(el.dataset.count ?? '0');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { textContent: 0 },
        {
          textContent: target,
          duration: 2,
          ease: 'power1.out',
          snap: { textContent: 1 },
          delay,
          scrollTrigger: { trigger: el, start: 'top 80%', once: true },
          onUpdate() {
            el.textContent = Math.round(parseFloat(el.textContent ?? '0')).toLocaleString();
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay]);

  return ref;
}
