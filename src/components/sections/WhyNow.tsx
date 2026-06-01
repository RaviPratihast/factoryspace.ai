'use client';

import { useEffect, useRef } from 'react';
import { BarChart3, Box, Cloud, Zap } from 'lucide-react';
import { PrimaryButton } from '@/components/ui';
import { gsap, registerGsapPlugins } from '@/lib/animations/gsap';
import { cn } from '@/lib/utils';

const FEATURES = [
  {
    icon: Zap,
    title: 'Labor is Scarce',
    description:
      "Manufacturers can't find people for repetitive or overnight shifts. Robots fill the gap instantly.",
  },
  {
    icon: Box,
    title: 'Robots Are Modular',
    description:
      'Standardized vision, tooling, and cobots make rapid deployment to any facility possible.',
  },
  {
    icon: Cloud,
    title: 'Cloud is the Default',
    description:
      'Robot labor can now be rented like compute. No CapEx. No friction. Pay only for outcomes.',
  },
  {
    icon: BarChart3,
    title: 'Accountable Results',
    description:
      'Every task is tracked and reported with full transparency. You see exactly what was done and what was delivered.',
  },
] as const;

export function WhyNow() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const header = section.querySelector('.why-now-header');
      const rows = section.querySelectorAll('.why-now-row');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      });

      if (header) {
        tl.fromTo(
          header,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, delay: 0.4, ease: 'power2.out' },
          0,
        );
      }

      rows.forEach((row, i) => {
        tl.fromTo(
          row,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: 'power2.out' },
          0.5 + i * 0.1,
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-now"
      className="why-now-section bg-[#050607] py-[200px] max-[767px]:py-[120px]"
      aria-labelledby="why-now-title"
    >
      <div className="why-now-container container-default mx-auto px-6">
        {/* Header: title left, CTA right (no media) */}
        <header className="why-now-header why-now-header-animate grid grid-cols-1 items-start gap-8 opacity-0 max-[991px]:justify-items-center max-[991px]:text-center lg:grid-cols-[1fr_auto] lg:justify-between">
          <h2
            id="why-now-title"
            className="why-now-title m-0 max-w-[392px] text-[48px] font-medium leading-tight text-white max-[991px]:max-w-none max-[991px]:text-[36px] max-[767px]:text-[32px] max-[479px]:text-[34px]"
          >
            Robots at Work, 24/7
          </h2>
          <div className="why-now-cta shrink-0 max-[991px]:flex max-[991px]:justify-center lg:justify-self-end lg:pt-1">
            <PrimaryButton
              identity="why-now-cta-button"
              label="Schedule a Demo"
              href="#cta"
            />
          </div>
        </header>

        {/* Feature rows */}
        <div className="why-now-list mt-12">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const isLast = index === FEATURES.length - 1;

            return (
              <article
                key={feature.title}
                className={cn(
                  'why-now-row why-now-row-animate grid grid-cols-1 items-start gap-2 border-b border-[#121418] pb-6 opacity-0 max-[767px]:gap-4 min-[768px]:max-[991px]:grid-cols-[1fr_2fr] min-[768px]:max-[991px]:gap-2 lg:grid-cols-[1fr_minmax(min-content,518px)] lg:gap-12 lg:pb-6 lg:mb-12',
                  isLast ? 'why-now-row-last mb-0 border-b-0 pb-0' : 'mb-12',
                )}
              >
                <div className="why-now-row-left">
                  <Icon
                    className="why-now-row-icon h-6 w-6 text-white"
                    aria-hidden
                  />
                  <h3 className="why-now-row-title mt-3 mb-0 text-[30px] font-medium leading-tight text-white max-[991px]:text-[28px] max-[767px]:text-2xl">
                    {feature.title}
                  </h3>
                </div>
                <p className="why-now-row-description m-0 max-w-[518px] text-[18px] leading-normal text-[#b6bcc9] max-[767px]:text-base">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
