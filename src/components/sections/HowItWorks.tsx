'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Calendar, Footprints, Zap } from 'lucide-react';
import { PrimaryButton } from '@/components/ui';
import { gsap, registerGsapPlugins } from '@/lib/animations/gsap';
import { useCountUp } from '@/hooks/useCountUp';

const STATS = [
  {
    icon: Calendar,
    label: 'Days to Deploy',
    count: 3,
    suffix: ' Days',
  },
  {
    icon: Footprints,
    label: 'Less Walk Time',
    count: 40,
    suffix: '%',
  },
  {
    icon: Zap,
    label: 'Faster QC',
    count: 2,
    suffix: '×',
  },
] as const;

function StatBlock({
  icon: Icon,
  label,
  count,
  suffix,
  index,
}: {
  icon: typeof Calendar;
  label: string;
  count: number;
  suffix: string;
  index: number;
}) {
  const countRef = useCountUp<HTMLSpanElement>(0.6 + index * 0.1);

  return (
    <div
      className="how-it-works-stat animate-on-scroll opacity-0"
      data-stat-index={index}
    >
      <div className="how-it-works-stat-label flex items-center gap-1.5 text-[18px] font-medium leading-tight text-white max-[767px]:text-[16px]">
        <Icon className="how-it-works-stat-icon h-6 w-6 shrink-0" aria-hidden />
        <span>{label}</span>
      </div>
      <p className="how-it-works-stat-value m-0 mt-2 text-[72px] font-medium leading-[1.115] text-white max-[991px]:text-[64px] max-[767px]:text-[44px] max-[479px]:text-[40px]">
        <span
          ref={countRef}
          className="how-it-works-stat-number"
          data-count={count}
        >
          0
        </span>
        <span className="how-it-works-stat-suffix">{suffix}</span>
      </p>
    </div>
  );
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    const robot = robotRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const title = section.querySelector('.how-it-works-title');
      const description = section.querySelector('.how-it-works-description');
      const cta = section.querySelector('.how-it-works-cta');
      const stats = section.querySelectorAll('.how-it-works-stat');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      });

      if (title) {
        tl.fromTo(
          title,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, delay: 0.3, ease: 'power3.out' },
          0,
        );
      }
      if (description) {
        tl.fromTo(
          description,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
          0.4,
        );
      }
      if (cta) {
        tl.fromTo(cta, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' }, 0.5);
      }
      stats.forEach((stat, i) => {
        tl.fromTo(
          stat,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: 'power2.out' },
          0.6 + i * 0.1,
        );
      });

      if (robot) {
        gsap.fromTo(
          robot,
          { scale: 1.1, opacity: 0.01, y: '20%' },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
              once: true,
            },
          },
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="how-it-works-outer bg-[#050607] px-6">
      <section
        ref={sectionRef}
        id="how-it-works"
        className="how-it-works-section relative overflow-hidden rounded-[64px] bg-[#090a0c] pt-[152px] pb-[312px] max-[991px]:pt-[160px] max-[991px]:rounded-[40px] max-[767px]:rounded-[24px] max-[479px]:pb-20 max-[479px]:rounded-[24px]"
        aria-labelledby="how-it-works-title"
      >
        {/* Background robot — centered between columns */}
        <div
          ref={robotRef}
          className="how-it-works-robot pointer-events-none absolute left-1/2 top-[118px] z-0 h-[70%] w-full max-w-[902px] -translate-x-1/2 max-[767px]:top-auto max-[767px]:bottom-0 max-[767px]:h-[80%] max-[767px]:w-full max-[767px]:max-w-none max-[767px]:translate-x-[20%] max-[767px]:opacity-50"
        >
          <Image
            src="/images/fullbody.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 902px"
            className="how-it-works-robot-image object-contain object-bottom"
            priority={false}
          />
        </div>

        <div className="how-it-works-container container-default relative z-[1] mx-auto px-6">
          <div className="how-it-works-grid grid grid-cols-1 items-start gap-12 max-[991px]:gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-[484px]">
            {/* Left — copy (left-aligned) */}
            <div className="how-it-works-copy text-left">
              <h2
                id="how-it-works-title"
                className="how-it-works-title animate-on-scroll m-0 text-[48px] font-medium leading-tight text-white opacity-0 max-[991px]:text-[36px] max-[767px]:text-[32px] max-[479px]:text-[34px]"
              >
                How It Works
              </h2>
              <p className="how-it-works-description animate-on-scroll mt-6 max-w-[520px] text-[18px] leading-normal text-[#b6bcc9] opacity-0 max-[767px]:text-[16px]">
                Tell us what needs doing—inspection, cleaning, welding.
                FactorySpace converts it into an executable robot plan, runs a
                simulation, and dispatches a robot to your floor. It executes,
                reports, and returns once the job is done.
              </p>
              <div className="how-it-works-cta animate-on-scroll mt-10 opacity-0">
                <PrimaryButton
                  identity="how-it-works-cta-button"
                  label="Schedule a Demo"
                  href="#cta"
                />
              </div>
            </div>

            {/* Right — stats (left-aligned within column) */}
            <div className="how-it-works-stats flex flex-col text-left max-[991px]:flex-row max-[991px]:flex-wrap max-[991px]:gap-10">
              {STATS.map((stat, index) => (
                <div key={stat.label} className="how-it-works-stat-group w-full max-[991px]:w-auto">
                  {index > 0 && (
                    <hr
                      className="how-it-works-stat-divider mb-8 mt-0 h-px w-full border-0 bg-[#3b3e45] max-[991px]:hidden"
                      aria-hidden
                    />
                  )}
                  <StatBlock
                    icon={stat.icon}
                    label={stat.label}
                    count={stat.count}
                    suffix={stat.suffix}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
