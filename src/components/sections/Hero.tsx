'use client';

import Image from 'next/image';
import { PrimaryButton } from '@/components/ui';

/**
 * Header height is fixed at 88px (py-8 top+bottom + ~24px content).
 * Hero section sits directly below it and fills the remaining viewport.
 */
const HEADER_H = '5.5rem'; // 88px — keep in sync with SiteHeader py-8

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-section bg-black overflow-hidden"
      style={{
        marginTop: HEADER_H,
        height: `calc(100dvh - ${HEADER_H})`,
      }}
    >
      <div className="hero-inner flex h-full">
        <div
          className="hero-content flex w-full shrink-0 flex-col justify-center px-6 lg:w-[55%] lg:px-12 xl:px-20"
          style={{
            paddingLeft: 'max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem))',
          }}
        >
          <h1 className="hero-title text-white font-medium leading-[1.12em] text-[clamp(2.75rem,5.5vw,4.5rem)]">
            Robot Labor<br />
            Delivered As<br />
            a Service
          </h1>

          <p className="hero-description mt-6 max-w-[520px] text-[18px] leading-[1.6em] text-[#b6bcc9] max-md:text-[16px]">
            A blue-collar AI workforce you can summon on-demand. We ship robots
            with vision, 3D sensing, and modular tools to your facility. They
            perform the job and are returned once it&apos;s done.
          </p>

          <div className="hero-cta mt-10">
            <PrimaryButton
              identity="hero-cta-button"
              label="Schedule a Demo"
              href="#contact"
            />
          </div>
        </div>

        <div className="hero-image-col relative hidden h-full w-[45%] shrink-0 lg:flex lg:items-end lg:justify-start lg:pl-4">
          <div className="hero-image-wrap relative h-[92%] w-full max-w-[520px]">
            <Image
              src="/images/fullbody.png"
              alt="Industrial robot on mobile base"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="hero-image object-contain object-bottom-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
