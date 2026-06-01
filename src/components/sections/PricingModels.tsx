/**
 * Section 6 — Pricing Models
 * Source: §6 row 6, §5.4 pricing card, §13.5 pricing responsive
 *
 * 2-column grid (image + card) → stacked on tablet/mobile.
 * Slots: pricing.title, pricing.models[]
 */

import Image from 'next/image';
import { PrimaryButton, Badge } from '@/components/ui';

const models = [
  {
    name:       'OmniBot Gen 2',
    price:      '$45,000',
    compareAt:  '$52,000',
    badge:      'Save $7,000',
    financing:  'From $1,250/mo with financing',
    image:      'https://cdn.prod.website-files.com/697240ea3992ad9c5a02a0d9/698f4d66bc32d34ff44a63e9_omnibot-gen-2-robotflow-webflow-ecommerce-template.jpg',
    highlight:  true,
  },
  {
    name:       'OmniBot Prime',
    price:      '$68,000',
    compareAt:  null,
    badge:      null,
    financing:  'From $1,890/mo with financing',
    image:      'https://cdn.prod.website-files.com/697240ea3992ad9c5a02a0d9/698f4d666eacb48f9a6c6a0f_omnibot-prime-robotflow-webflow-ecommerce-template.jpg',
    highlight:  false,
  },
];

export function PricingModels() {
  return (
    <section
      id="pricing"
      className="py-[200px] max-[991px]:py-[160px] max-[767px]:py-[80px]"
    >
      <div className="container-default mx-auto px-6">

        {/* Section header */}
        <div className="mb-16 animate-on-scroll opacity-0 translate-y-[50px]">
          {/* SLOT: pricing.title — display-8 */}
          <h2 className="text-[48px] max-[991px]:text-[36px] max-[767px]:text-[32px] font-medium leading-[1.25em] text-white">
            Models available
          </h2>
        </div>

        {/* 2-col grid → stacked on tablet */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {models.map((model) => (
            <div
              key={model.name}
              className="grid grid-cols-1 gap-7 lg:grid-cols-2 animate-on-scroll opacity-0 translate-y-[50px]"
            >
              {/* Product image */}
              <div className="relative overflow-hidden rounded-[32px] bg-[#121418] max-h-[500px] max-[767px]:max-h-[500px]">
                <Image
                  src={model.image}
                  alt={model.name}
                  width={560}
                  height={560}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Pricing card */}
              <div className="flex flex-col justify-between rounded-[32px] border border-[#121418] bg-[#121418] p-8 shadow-[0_6px_20px_#4a3aff14]">
                <div>
                  {/* SLOT: pricing.models[].name — display-7 */}
                  <h3 className="text-[36px] max-[767px]:text-[28px] font-medium leading-[1.25em] text-white">
                    {model.name}
                  </h3>

                  <div className="mt-4 flex items-center gap-3 flex-wrap">
                    {/* SLOT: price */}
                    <span className="text-[48px] max-[767px]:text-[32px] font-medium leading-[1.25em] text-white">
                      {model.price}
                    </span>
                    {/* Compare-at / strikethrough */}
                    {model.compareAt && (
                      <span className="text-[20px] text-[#7c818d] line-through">
                        {model.compareAt}
                      </span>
                    )}
                    {/* Save badge */}
                    {model.badge && (
                      <Badge variant="pricing">{model.badge}</Badge>
                    )}
                  </div>

                  {/* Financing line — display-3 */}
                  <p className="mt-3 text-[18px] leading-[1.25em] text-[#b6bcc9]">
                    {model.financing}
                  </p>
                </div>

                <div className="mt-8">
                  <PrimaryButton label="Reserve now" href="#" className="w-full justify-center" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
