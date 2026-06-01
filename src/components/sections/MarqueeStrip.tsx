'use client';

import { Fragment, useEffect, useRef } from 'react';
import { gsap, registerGsapPlugins } from '@/lib/animations/gsap';
import { useMarquee } from '@/hooks/useMarquee';

const INDUSTRIES = [
  'Cleanroom',
  'Assembly',
  'Manufacturing',
  'Automotive',
  'Aerospace',
  'Semiconductor',
] as const;

const COPIES = 4;

function MarqueeStripRow() {
  return (
    <>
      {INDUSTRIES.map((label) => (
        <Fragment key={label}>
          <div className="marquee-item marquee-item-label shrink-0 font-medium leading-tight text-[#7c818d] text-[24px] max-[479px]:text-[24px] md:text-[36px] lg:text-[48px]">
            {label}
          </div>
          <span
            className="marquee-dot marquee-item-separator h-2 w-2 shrink-0 rounded-full bg-[#3b3e45]"
            aria-hidden
          />
        </Fragment>
      ))}
    </>
  );
}

export function MarqueeStrip() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useMarquee<HTMLDivElement>(1, 50, COPIES);

  useEffect(() => {
    registerGsapPlugins();
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapper,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top 90%',
            once: true,
          },
        },
      );
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="marquee-section overflow-hidden bg-black py-8 md:py-10"
      aria-label="Industries we serve"
    >
      <div
        ref={wrapperRef}
        className="marquee-wrapper infinite-marquee-wrapper opacity-0"
      >
        <div
          ref={trackRef}
          className="marquee-track infinite-marquee flex w-max will-change-transform"
        >
          {Array.from({ length: COPIES }, (_, copy) => (
            <div
              key={copy}
              className="marquee-strip marquee-scroll-item flex shrink-0 items-center gap-8 pr-8 max-md:gap-6"
              aria-hidden={copy > 0}
            >
              <MarqueeStripRow />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
