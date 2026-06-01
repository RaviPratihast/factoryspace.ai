'use client';

import { useEffect, useRef } from 'react';
import { gsap, registerGsapPlugins } from '@/lib/animations/gsap';
import { useMarquee } from '@/hooks/useMarquee';

const TESTIMONIALS = [
  {
    quote: 'Efficiency, intelligence, and support packed in one!',
    name: 'John Carter',
    location: 'California',
  },
  {
    quote: 'Makes everyday life easier, faster, and smarter!',
    name: 'Sophie Moore',
    location: 'Chicago',
  },
  {
    quote: 'Incredible helper that never gets tired or distracted!',
    name: 'Matt Cannon',
    location: 'New York',
  },
  {
    quote: 'My smartest, most helpful assistant ever—hands down!',
    name: 'Lilly Woods',
    location: 'Washington',
  },
] as const;

const COPIES = 3;

function TestimonialCard({
  quote,
  name,
  location,
}: {
  quote: string;
  name: string;
  location: string;
}) {
  return (
    <article className="testimonial-marquee-card shrink-0 max-w-[330px] text-center max-[479px]:max-w-[280px]">
      <blockquote className="testimonial-marquee-quote m-0 mb-6 text-[30px] font-medium leading-tight text-white max-[991px]:text-[28px] max-[767px]:text-2xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="testimonial-marquee-meta flex flex-wrap items-center justify-center gap-2.5">
        <span className="testimonial-marquee-name text-sm font-medium uppercase tracking-[0.08em] text-white">
          {name}
        </span>
        <span className="testimonial-marquee-location text-sm font-medium uppercase tracking-[0.08em] text-[#b6bcc9]">
          {location}
        </span>
      </div>
    </article>
  );
}

function TestimonialStrip() {
  return (
    <>
      {TESTIMONIALS.map((item) => (
        <TestimonialCard
          key={item.name}
          quote={item.quote}
          name={item.name}
          location={item.location}
        />
      ))}
    </>
  );
}

export function TestimonialMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useMarquee<HTMLDivElement>(1, 50, COPIES);

  useEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            once: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="testimonial-marquee-section relative overflow-hidden bg-[#050607] pt-[60px] pb-[100px] opacity-0"
      aria-label="Customer testimonials"
    >
      {/* Edge fades */}
      <div
        className="testimonial-marquee-fade testimonial-marquee-fade-left pointer-events-none absolute left-0 top-1/2 z-10 h-[80%] w-full max-w-[318px] -translate-y-1/2 max-[767px]:max-w-[180px]"
        style={{
          background:
            'linear-gradient(270deg, transparent 0%, #050607 73%)',
        }}
        aria-hidden
      />
      <div
        className="testimonial-marquee-fade testimonial-marquee-fade-right pointer-events-none absolute right-0 top-1/2 z-10 h-[80%] w-full max-w-[380px] -translate-y-1/2 max-[767px]:max-w-[180px]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #050607 87%)',
        }}
        aria-hidden
      />

      <div ref={wrapperRef} className="testimonial-marquee-wrapper relative">
        <div
          ref={trackRef}
          className="testimonial-marquee-track flex w-max will-change-transform"
        >
          {Array.from({ length: COPIES }, (_, copy) => (
            <div
              key={copy}
              className="testimonial-marquee-strip testimonial-marquee-scroll-item marquee-scroll-item flex shrink-0 items-start gap-16 pr-16"
              aria-hidden={copy > 0}
            >
              <TestimonialStrip />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
