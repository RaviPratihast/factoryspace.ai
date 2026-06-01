/**
 * Section 5 — CTA Banner
 * Source: §6 row 5, §13.5 CTA responsive
 *
 * Photo background + dual CTA. Mobile gets full dark overlay.
 * Slots: cta.title
 */

import { PrimaryButton, SecondaryButton } from '@/components/ui';

export function CtaBanner() {
  return (
    <section
      id="cta"
      className={[
        'cta-bg-image-v1 relative overflow-hidden rounded-[64px] mx-4 lg:mx-6',
        'max-[991px]:rounded-[40px] max-[767px]:rounded-[24px]',
        // Photo BG with gradient (desktop); full overlay on mobile (see globals.css)
        'bg-[image:linear-gradient(90deg,#0003_8%,#0009_60%),url(https://cdn.prod.website-files.com/697240ea3992ad9c5a02a0d9/698e649a51642f751f1598bc_cta-v1-bg-image-robotflow-webflow-ecommerce-template.jpg)]',
        'bg-cover bg-center',
        'py-[200px] max-[991px]:py-[100px] max-[767px]:py-[140px_64px]',
        '[--mobile-cta-overlay:linear-gradient(#000000a6,#000000a6)]',
      ].join(' ')}
    >
      <div className="container-default mx-auto px-6">
        <div className="max-w-[342px] lg:ml-auto">

          {/* SLOT: cta.title — display-8 */}
          <h2 className="mb-8 text-[48px] max-[991px]:text-[36px] max-[767px]:text-[32px] font-medium leading-[1.25em] text-white animate-on-scroll opacity-0 translate-y-[50px]">
            Real robotics. Real impact.
          </h2>

          {/* Dual CTAs */}
          <div className="flex flex-wrap gap-4 max-[479px]:w-full animate-on-scroll opacity-0 translate-y-[50px]">
            <PrimaryButton label="Reserve now" href="#pricing" />
            <SecondaryButton label="Learn more"  href="#features" />
          </div>
        </div>
      </div>
    </section>
  );
}
