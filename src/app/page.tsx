/**
 * Home V1 — section composition
 * Source: §6 (Landing page architecture)
 *
 * Section order:
 *   0. SiteHeader
 *   1. Hero
 *   2. FeaturesGrid
 *   3. ProductSpotlight
 *   4. CtaBanner
 *   5. PricingModels
 *   6. NewsPreview
 *   7. Faq
 *   9. SiteFooter
 */

import { SiteHeader } from '@/components/layout/Header';
import { SiteFooter } from '@/components/layout/Footer';
import {
  Hero,
  MarqueeStrip,
  WhyChooseUs,
  HowItWorks,
  WhyNow,
  AboutUs,
  TestimonialMarquee,
  FeaturesGrid,
  ProductSpotlight,
  CtaBanner,
  PricingModels,
  NewsPreview,
  Faq,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="home-page-main">
        <Hero />
        <MarqueeStrip />
        <WhyChooseUs />
        <HowItWorks />
        <WhyNow />
        <AboutUs />
        <TestimonialMarquee />
        <Faq />
        <FeaturesGrid />
        <ProductSpotlight />
        <CtaBanner />
        <PricingModels />
        <NewsPreview />
      </main>

      <SiteFooter />
    </>
  );
}
