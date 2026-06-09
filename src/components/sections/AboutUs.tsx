'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Building2, User } from 'lucide-react';
import { gsap, registerGsapPlugins } from '@/lib/animations/gsap';
import { useCountUp } from '@/hooks/useCountUp';

const IMAGE_BASE = '/images/Base%20with%20Atattchment%20(1).png';
const IMAGE_ARM = '/images/Arm%20(1).png';

function AboutStat({
  icon: Icon,
  label,
  count,
  delay,
}: {
  icon: typeof User;
  label: string;
  count: number;
  delay: number;
}) {
  const countRef = useCountUp<HTMLSpanElement>(delay);

  return (
    <div className="about-us-stat flex flex-col gap-2">
      <div className="about-us-stat-label flex items-center gap-1.5 text-[18px] font-medium leading-tight text-white">
        <Icon className="about-us-stat-icon h-6 w-6 shrink-0" aria-hidden />
        <span>{label}</span>
      </div>
      <p className="about-us-stat-value m-0 text-[72px] font-medium leading-[1.115] text-white max-[991px]:text-[64px] max-[767px]:text-[44px] max-[479px]:text-[18px]">
        <span ref={countRef} className="about-us-stat-number" data-count={count}>
          0
        </span>
        <span className="about-us-stat-suffix">+</span>
      </p>
    </div>
  );
}

export function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const title = section.querySelector('.about-us-title');
      const stats = section.querySelector('.about-us-stats');
      const gallery = section.querySelector('.about-us-gallery');
      const body = section.querySelector('.about-us-body');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
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
      if (stats) {
        tl.fromTo(
          stats,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: 'power2.out' },
          0.6,
        );
      }
      if (gallery) {
        tl.fromTo(
          gallery,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: 'power2.out' },
          0.45,
        );
      }
      if (body) {
        tl.fromTo(
          body,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: 'power2.out' },
          0.4,
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="about-us-section section-pad-y bg-[#050607]"
      aria-labelledby="about-us-title"
    >
      <div className="about-us-container container-default mx-auto px-6">
        {/* Tier 1 — header */}
        <div className="about-us-header flex flex-col items-start justify-between gap-8 max-[767px]:items-center max-[767px]:text-center lg:flex-row">
          <div className="about-us-title-wrap max-w-[594px]">
            <h2
              id="about-us-title"
              className="about-us-title m-0 text-[72px] font-medium leading-tight text-white opacity-0 max-[991px]:text-[64px] max-[767px]:text-[44px] max-[479px]:text-[40px]"
            >
              About us
            </h2>
          </div>

          <div className="about-us-stats about-us-stats-animate flex items-stretch gap-12 opacity-0 max-[767px]:justify-center">
            <AboutStat icon={User} label="Facilities Served" count={50} delay={0} />
            <div
              className="about-us-stat-divider w-px min-h-[56px] shrink-0 self-stretch bg-[#121418]"
              aria-hidden
            />
            <AboutStat icon={Building2} label="Task Types" count={500} delay={0.1} />
          </div>
        </div>

        {/* Tier 2 + 3 — images + body */}
        <div className="about-us-gallery about-us-gallery-animate mt-8 grid grid-cols-1 gap-x-6 gap-y-10 opacity-0 max-[479px]:grid-cols-1 min-[480px]:grid-cols-[1.5fr_1fr] min-[480px]:max-[767px]:gap-4 lg:grid-cols-[1.42fr_1fr]">
          <div className="about-us-image-base relative aspect-[5/4] min-h-[280px] w-full overflow-hidden rounded-[32px] max-[991px]:rounded-[24px] max-[479px]:rounded-2xl lg:col-start-1 lg:row-start-1">
            <div className="absolute inset-4 md:inset-6">
              <Image
                src={IMAGE_BASE}
                alt="Autonomous robot base with mounting port"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="about-us-image about-us-image-base-inner object-contain"
              />
            </div>
          </div>

          <div className="about-us-image-arm relative aspect-[4/5] min-h-[280px] w-full overflow-hidden rounded-[32px] max-[991px]:rounded-[24px] max-[479px]:rounded-2xl lg:col-start-2 lg:row-start-1">
            <Image
              src={IMAGE_ARM}
              alt="Industrial robotic arm with gripper and vision module"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="about-us-image about-us-image-arm-inner object-cover"
            />
          </div>

          <p className="about-us-body about-us-body-animate m-0 max-w-[584px] text-[18px] leading-normal text-[#b6bcc9] opacity-0 max-[479px]:max-w-full max-[767px]:text-base lg:col-start-1 lg:row-start-2">
            FactorySpace ships fully-equipped robots to your facility, executes
            your tasks, and returns them when done. From inspection to
            welding—our robots handle the floor so you can run the business.
          </p>
        </div>
      </div>
    </section>
  );
}
