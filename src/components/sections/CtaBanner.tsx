import { PrimaryButton } from '@/components/ui';

export function CtaBanner() {
  return (
    <section
      id="cta"
      className="cta-banner-section section-pad-y bg-[#050607]"
    >
      <div className="cta-banner-container container-default mx-auto px-6 text-center">
        <h2 className="cta-banner-title mx-auto max-w-[720px] text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.15em] text-white">
          Take your operations to the next level
        </h2>
        <p className="cta-banner-description mx-auto mt-5 max-w-[560px] text-[16px] leading-[1.6em] text-[#b6bcc9] md:text-[18px]">
          Deploy robot labor on demand — no CapEx, no maintenance, and no
          in-house robotics team required.
        </p>
        <div className="cta-banner-actions mt-10 flex justify-center">
          <PrimaryButton
            identity="cta-banner-primary-button"
            label="Schedule a Demo"
            href="mailto:contact@factoryspace.ai"
          />
        </div>
      </div>
    </section>
  );
}
