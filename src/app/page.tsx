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
  Faq,
  CtaBanner,
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
        <CtaBanner />
      </main>

      <SiteFooter />
    </>
  );
}
