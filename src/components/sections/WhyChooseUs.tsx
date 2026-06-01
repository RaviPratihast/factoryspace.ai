'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Move } from 'lucide-react';
import { cn } from '@/lib/utils';

const SLIDES = [
  {
    title: 'No Upfront Cost',
    body: 'Deploy robotics without capital expense. Pay for outcomes, not hardware sitting idle on your floor.',
    bullets: [
      'Outcome-based pricing',
      'Zero CapEx required',
      'Fast, predictable ROI',
    ],
  },
  {
    title: 'Fast Setup',
    body: 'Robots are deployed and operational within hours, not weeks. We handle setup, integration, and calibration.',
    bullets: [
      'Deployed within hours',
      'Learns from daily interactions',
      'Adapts to changing environments',
    ],
  },
  {
    title: 'Scalable On Demand',
    body: 'Get a robot delivered with skills preloaded. Pay only for what you use. Scale instantly whenever your business needs.',
    bullets: [
      'Navigates tight indoor spaces',
      'Moves smoothly between rooms',
      'Maintains balance on uneven floors',
    ],
  },
] as const;

const SLIDE_COUNT = SLIDES.length;

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <div className="why-choose-us-bullet-list flex w-full flex-col gap-4">
      <hr className="why-choose-us-bullet-divider m-0 h-px border-0 bg-[#3b3e45]" />
      {items.map((line) => (
        <div key={line} className="why-choose-us-bullet-row flex flex-col gap-4">
          <span className="why-choose-us-bullet-text text-[18px] leading-[1.25] text-white max-[767px]:text-[16px]">
            {line}
          </span>
          <hr className="why-choose-us-bullet-divider m-0 h-px border-0 bg-[#3b3e45]" />
        </div>
      ))}
    </div>
  );
}

export function WhyChooseUs() {
  const [active, setActive] = useState(0);

  const goPrev = useCallback(() => {
    setActive((i) => (i - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);

  const goNext = useCallback(() => {
    setActive((i) => (i + 1) % SLIDE_COUNT);
  }, []);

  return (
    <section
      id="why-choose-us"
      className="why-choose-us-section bg-[#050607] pt-[100px] pb-[200px] max-[479px]:pt-[60px] max-[991px]:pb-[120px]"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="why-choose-us-container container-default mx-auto px-6">
        <header className="why-choose-us-header mx-auto mb-12 max-w-[520px] text-center">
          <h2
            id="why-choose-us-heading"
            className="why-choose-us-title mb-2 text-[48px] font-medium leading-[1.25] text-white max-[991px]:text-[36px] max-[767px]:text-[32px] max-[479px]:text-[34px]"
          >
            Why Choose Us
          </h2>
          <p className="why-choose-us-subdescription m-0 text-[18px] leading-[1.5] text-[#b6bcc9] max-[767px]:text-[16px]">
            Factory-grade automation without the factory-grade overhead. Three
            reasons teams choose robot labor on demand.
          </p>
        </header>

        <div className="why-choose-us-slider relative mx-auto w-full max-w-[840px] max-[991px]:pb-[100px] max-[991px]:pr-0 pr-[136px]">
          <div className="why-choose-us-arrows absolute right-0 top-0 z-20 flex gap-2 max-[991px]:bottom-0 max-[991px]:left-1/2 max-[991px]:top-auto max-[991px]:-translate-x-1/2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className="why-choose-us-arrow why-choose-us-arrow-prev flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white text-[#050607] shadow-[0_1px_4px_#19213d1a] transition-transform duration-300 hover:scale-[0.97]"
            >
              <ChevronLeft className="why-choose-us-arrow-icon h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="why-choose-us-arrow why-choose-us-arrow-next flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white text-[#050607] shadow-[0_1px_4px_#19213d1a] transition-transform duration-300 hover:scale-[0.97]"
            >
              <ChevronRight className="why-choose-us-arrow-icon h-5 w-5" aria-hidden />
            </button>
          </div>

          <div className="why-choose-us-slides relative min-h-[420px] max-[479px]:min-h-[640px]">
            {SLIDES.map((slide, index) => (
              <div
                key={slide.title}
                aria-hidden={index !== active}
                className={cn(
                  'why-choose-us-slide layout-split-tight transition-opacity duration-500 ease-in-out max-[991px]:max-w-none min-[480px]:max-[991px]:grid-cols-[1.2fr_1fr]',
                  index === active
                    ? 'relative z-10 opacity-100'
                    : 'pointer-events-none absolute inset-0 z-0 opacity-0',
                )}
              >
                <div className="why-choose-us-slide-content flex w-full flex-col gap-6">
                  <div className="why-choose-us-slide-copy">
                   
                    <h3 className="why-choose-us-slide-title mt-3 mb-2 text-[36px] font-medium leading-[1.25] text-white max-[991px]:text-[30px] max-[767px]:text-[28px]">
                      {slide.title}
                    </h3>
                    <p className="why-choose-us-slide-description m-0 text-[18px] leading-[1.5] text-[#b6bcc9] max-[767px]:text-[16px]">
                      {slide.body}
                    </p>
                  </div>
                  <BulletList items={slide.bullets} />
                </div>

                <div className="why-choose-us-slide-image-col relative w-full max-w-[400px] justify-self-start max-[479px]:max-w-full">
                  <div className="why-choose-us-slide-image-wrap relative aspect-[4/5] max-h-[480px] w-full overflow-hidden rounded-[32px] max-[991px]:rounded-[24px] max-[479px]:min-h-[280px] max-[479px]:rounded-[16px]">
                    <Image
                      src="/images/robotwitharmprop.png"
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="why-choose-us-slide-image object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
