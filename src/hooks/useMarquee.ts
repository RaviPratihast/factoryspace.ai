'use client';

import { useEffect, useRef } from 'react';
import { gsap, Observer, registerGsapPlugins } from '@/lib/animations/gsap';

/**
 * Infinite horizontal marquee (GSAP).
 * Source: DESIGN_SPEC §7.4 / Webflow home ticker
 *
 * @param direction  1 = scroll left (default), -1 = scroll right
 * @param speed      Seconds for one full loop (default 50)
 * @param copies     Number of duplicate strips in the track (default 4)
 */
export function useMarquee<T extends HTMLElement>(
  direction: 1 | -1 = 1,
  speed = 50,
  copies = 4,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!ref.current) return;
    const el = ref.current;

    // Move one strip width per loop (e.g. 25% when copies = 4)
    const loopPercent = 100 / copies;
    const from = direction === 1 ? 0 : -loopPercent;
    const to = direction === 1 ? -loopPercent : 0;

    const tl = gsap.fromTo(
      el,
      { xPercent: from },
      { xPercent: to, duration: speed, ease: 'none', repeat: -1 },
    );

    let velocityObserver: ReturnType<typeof Observer.create> | null = null;

    if (typeof window !== 'undefined' && Observer) {
      velocityObserver = Observer.create({
        type: 'wheel,touch,scroll',
        onChangeY(self) {
          const clamped = Math.max(-40, Math.min(40, self.velocityY * 0.01));
          gsap.to(tl, { timeScale: direction * (1 + clamped), duration: 0.5 });
          gsap.to(tl, {
            timeScale: direction,
            duration: 1,
            delay: 0.5,
            ease: 'power1.inOut',
          });
        },
      });
    }

    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) tl.pause();
    const handleChange = (e: MediaQueryListEvent) => (e.matches ? tl.pause() : tl.resume());
    mql.addEventListener('change', handleChange);

    return () => {
      tl.kill();
      velocityObserver?.kill();
      mql.removeEventListener('change', handleChange);
    };
  }, [direction, speed, copies]);

  return ref;
}
