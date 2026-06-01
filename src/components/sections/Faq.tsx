'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { gsap, registerGsapPlugins } from '@/lib/animations/gsap';

const FAQ_ITEMS = [
  {
    id: '01',
    question: 'What is Robots as a Service (RaaS)?',
    answer:
      'FactorySpace ships robots to your facility, sets them up, and manages them. You pay only for the work completed—and once the job is done, the robots return to us. No ownership, no maintenance, no CapEx.',
  },
  {
    id: '02',
    question: 'Do I need in-house specialists?',
    answer:
      "Not at all. Our team handles monitoring, servicing, and updates. Your staff doesn't need technical expertise to benefit from automation.",
  },
  {
    id: '03',
    question: 'How much does it cost?',
    answer:
      "There's no upfront CapEx. Pricing is outcome-based—you pay for work delivered: units moved, tasks completed, or hours covered. This ensures predictable costs and fast ROI.",
  },
  {
    id: '04',
    question: 'How long does it take to get started?',
    answer:
      'Most customers are up and running in days, not months. We handle setup, integration, and maintenance so you can focus on production.',
  },
] as const;

function OpenCloseLabel({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="faq-item-toggle relative inline-block h-5 w-14 overflow-hidden text-base font-normal text-white">
      <span
        className={cn(
          'faq-item-toggle-inner block transition-transform duration-300 ease-out',
          isOpen && '-translate-y-1/2',
        )}
      >
        <span className="faq-item-toggle-open block h-5 leading-5">Open</span>
        <span className="faq-item-toggle-close block h-5 leading-5">Close</span>
      </span>
    </span>
  );
}

function FaqItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
  isLast,
}: {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <div
      className={cn(
        'faq-item',
        !isLast && 'border-b border-[#3b3e45]',
      )}
    >
      <button
        type="button"
        id={`faq-trigger-${id}`}
        className={cn(
          'faq-item-trigger w-full cursor-pointer px-8 py-10 text-left transition-transform duration-300',
          'hover:translate-x-[3px]',
          'max-[767px]:px-6 max-[767px]:py-8 max-[479px]:px-4',
          'lg:grid lg:grid-cols-[1fr_minmax(min-content,660px)_1fr] lg:items-center lg:gap-12',
          'max-[991px]:lg:grid-cols-[1fr_8fr_1fr] max-[991px]:lg:gap-8',
        )}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
      >
        <div className="faq-item-trigger-inner flex items-start justify-between gap-4 lg:contents">
          <div className="faq-item-copy flex min-w-0 flex-col gap-2 lg:contents">
            <span className="faq-item-number text-2xl font-medium leading-tight text-[#dde2ef]/30 lg:justify-self-start">
              {id}
            </span>
            <span className="faq-item-question text-2xl font-medium leading-tight text-white max-[767px]:text-[22px] lg:max-w-[660px]">
              {question}
            </span>
          </div>
          <span className="faq-item-toggle-wrap shrink-0 lg:justify-self-end">
            <OpenCloseLabel isOpen={isOpen} />
          </span>
        </div>
      </button>

      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-trigger-${id}`}
        aria-hidden={!isOpen}
        className={cn(
          'faq-item-answer-grid grid transition-[grid-template-rows] duration-300 ease-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="faq-item-answer-inner min-h-0 overflow-hidden">
          <div
            className={cn(
              'faq-item-answer px-8 pb-10 max-[767px]:px-6 max-[479px]:px-4',
              'lg:grid lg:grid-cols-[1fr_minmax(min-content,660px)_1fr] lg:gap-12',
              'max-[991px]:lg:grid-cols-[1fr_8fr_1fr] max-[991px]:lg:gap-8',
            )}
          >
            <div className="hidden lg:block" aria-hidden />
            <p className="faq-item-answer-text m-0 max-w-[660px] text-[18px] leading-normal text-[#b6bcc9] max-[767px]:text-base">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    if (!section) return;

    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');

    const ctx = gsap.context(() => {
      const title = section.querySelector('.faq-header-title');
      const subtitle = section.querySelector('.faq-header-subtitle');
      const list = listRef.current;

      if (mql.matches) {
        gsap.set([title, subtitle, list].filter(Boolean), {
          opacity: 1,
          y: 0,
        });
        return;
      }

      if (title) {
        gsap.fromTo(
          title,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 80%', once: true },
          },
        );
      }
      if (subtitle) {
        gsap.fromTo(
          subtitle,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 80%', once: true },
          },
        );
      }
      if (list) {
        gsap.fromTo(
          list,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: section, start: 'top 80%', once: true },
          },
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="faq-outer bg-[#050607] px-6">
      <section
        ref={sectionRef}
        id="faq"
        className="faq-section overflow-hidden rounded-[64px] bg-[#090a0c] py-[160px] max-[991px]:py-[120px] max-[767px]:rounded-[24px] max-[767px]:py-[100px] max-[479px]:rounded-2xl"
        aria-labelledby="faq-section-title"
      >
        <div className="faq-container container-default mx-auto px-6">
          <header className="faq-header mx-auto mb-12 max-w-[422px] text-center">
            <h2
              id="faq-section-title"
              className="faq-header-title faq-title m-0 mb-2 text-[48px] font-medium leading-tight text-white max-[991px]:text-[36px] max-[767px]:text-[32px] max-[479px]:text-[34px]"
            >
              Frequently Asked Questions
            </h2>
            <p className="faq-header-subtitle faq-subdescription m-0 text-[18px] leading-normal text-[#b6bcc9] max-[767px]:text-base">
              Everything you need to know about Robot-labor-as-a-Service.
              Can&apos;t find the answer?{' '}
              <Link
                href="#cta"
                className="faq-subdescription-link font-medium text-white transition-colors hover:text-[#b6bcc9]"
              >
                Schedule a demo.
              </Link>
            </p>
          </header>

          <div
            ref={listRef}
            className="faq-list mx-auto max-w-[976px] opacity-0"
            role="list"
          >
            {FAQ_ITEMS.map((item, index) => (
              <FaqItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                isLast={index === FAQ_ITEMS.length - 1}
                onToggle={() =>
                  setOpenIndex((current) =>
                    current === index ? null : index,
                  )
                }
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
