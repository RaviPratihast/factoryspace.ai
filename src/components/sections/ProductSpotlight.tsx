/**
 * Section 4 — Product Spotlight / Introducing OmniBot Gen 2
 * Source: §6 row 4, §13.5 spotlight responsive
 *
 * 4 spec rows with pointer-line decoration, robot BG image.
 * Slots: spotlight.title, spotlight.specs[]
 */

import Image from 'next/image';

const specs = [
  { label: 'Degrees of freedom', value: '28 DOF' },
  { label: 'Battery life',        value: '8–12 hrs' },
  { label: 'Payload capacity',    value: '20 kg' },
  { label: 'AI processing',       value: 'On-device NPU' },
];

export function ProductSpotlight() {
  return (
    <section
      id="specs"
      className="relative overflow-hidden py-[200px] max-[991px]:py-[160px] max-[767px]:py-[80px]"
    >
      {/* Background robot image */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="https://cdn.prod.website-files.com/697240ea3992ad9c5a02a0d9/6973c5da5b88d7c5e94e7bb3_introducing-omnibot-gen-2-robotflow-webflow-ecommerce-template.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-[#050607]/60 to-transparent" />
      </div>

      <div className="container-default mx-auto px-6">

        {/* SLOT: spotlight.title — display-8 */}
        <h2 className="mb-16 text-[48px] max-[991px]:text-[36px] max-[767px]:text-[32px] font-medium leading-[1.25em] text-white animate-on-scroll opacity-0 translate-y-[50px]">
          Introducing OmniBot Gen 2
        </h2>

        {/* Spec rows with pointer-line */}
        <div className="flex flex-col gap-0">
          {specs.map((spec, i) => (
            <div
              key={i}
              className="pointer-line-wrapper relative flex items-center justify-between gap-4 border-t border-[#3b3e45] py-6 animate-on-scroll opacity-0 translate-y-[50px]"
            >
              {/* SLOT: spotlight.specs[].label — display-6 */}
              <span className="text-[30px] max-[767px]:text-[20px] font-medium leading-[1.25em] text-white">
                {spec.label}
              </span>

              {/* Pointer line decoration */}
              <div className="pointer-line-inner mx-4 hidden flex-1 md:flex items-center">
                <div className="h-px w-full bg-[#3b3e45]" />
                <div className="pointer-line-dot h-2 w-2 flex-shrink-0 rounded-full bg-[#3b3e45] ml-1" />
              </div>

              {/* Value */}
              <span className="text-[30px] max-[767px]:text-[20px] font-medium leading-[1.25em] text-[#b6bcc9] text-right">
                {spec.value}
              </span>
            </div>
          ))}
          {/* Close last row border */}
          <div className="border-t border-[#3b3e45]" />
        </div>
      </div>
    </section>
  );
}
