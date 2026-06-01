/**
 * Section 2 — Features Grid
 * Source: §6 row 2 + §13.4 grid behavior
 *
 * 3-column grid on desktop → 1 column on tablet/mobile.
 * Each item: icon glyph + title (display-7) + body paragraph.
 *
 * Slots: features.title, features.items[]
 */

import { Card } from '@/components/ui';

const features = [
  {
    icon: '⚡', // Replace with custom-icon-set glyph
    title: 'Enhanced Mobility',
    body:  'Full-body articulation with 28 degrees of freedom — walk, climb, crouch, and recover across any terrain.',
  },
  {
    icon: '🤖',
    title: 'Advanced AI',
    body:  'On-device neural processing enables real-time environment understanding and adaptive decision-making.',
  },
  {
    icon: '🖐',
    title: 'Human-like Dexterity',
    body:  'Multi-fingered hands with force-sensitive touch deliver sub-millimetre precision for assembly and handling.',
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-[200px] max-[991px]:py-[160px] max-[767px]:py-[80px]">
      <div className="container-default mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16 animate-on-scroll opacity-0 translate-y-[50px]">
          {/* SLOT: features.title */}
          <h2 className="text-[48px] max-[991px]:text-[36px] max-[767px]:text-[32px] font-medium leading-[1.25em] text-white">
            Key features
          </h2>
        </div>

        {/* 3-col → 1-col grid */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-7 lg:grid-cols-3 lg:gap-y-16">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="p-8 flex flex-col gap-6 animate-on-scroll opacity-0 translate-y-[50px]"
            >
              {/* Icon */}
              <div className="text-4xl">{feature.icon}</div>

              {/* SLOT: features.items[].title — display-7 */}
              <h3 className="text-[36px] max-[767px]:text-[28px] font-medium leading-[1.25em] text-white">
                {feature.title}
              </h3>

              {/* SLOT: features.items[].body */}
              <p className="text-[18px] max-[767px]:text-[16px] leading-[1.5em] text-[#b6bcc9]">
                {feature.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
