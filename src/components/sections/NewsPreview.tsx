/**
 * Section 7 — News Preview
 * Source: §6 row 7, §13.5 news responsive
 *
 * 1 featured card (1.66fr) + 2 list cards (1fr) on desktop → stacked on mobile.
 * Slots: news.title, articles[]
 */

import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    tag:     'Product',
    date:    'May 2026',
    title:   'OmniBot Gen 2 sets new benchmark in bipedal locomotion',
    excerpt: 'Our second-generation platform demonstrates sustained operation across real-world outdoor environments.',
    image:   'https://cdn.prod.website-files.com/697240ea3992ad9c5a02a0d9/698e58865e9ceeab63725921_where-technology-meets-design-robotflow-webflow-ecommerce-template.jpg',
    featured: true,
  },
  {
    tag:  'Research',
    date: 'April 2026',
    title: 'On-device neural processing: how we cut latency by 60%',
    excerpt: 'A deep dive into our custom NPU architecture.',
    image: null,
    featured: false,
  },
  {
    tag:  'Company',
    date: 'March 2026',
    title: 'Series B funding: expanding production to meet demand',
    excerpt: 'Robotflow closes $200M to scale manufacturing.',
    image: null,
    featured: false,
  },
];

export function NewsPreview() {
  const featured = articles.find((a) => a.featured)!;
  const list     = articles.filter((a) => !a.featured);

  return (
    <section
      id="news"
      className="py-[200px] max-[991px]:py-[160px] max-[767px]:py-[80px]"
    >
      <div className="container-default mx-auto px-6">

        {/* Section header */}
        <div className="mb-16 animate-on-scroll opacity-0 translate-y-[50px]">
          {/* SLOT: news.title — display-8 */}
          <h2 className="text-[48px] max-[991px]:text-[36px] max-[767px]:text-[32px] font-medium leading-[1.25em] text-white">
            Our latest news
          </h2>
        </div>

        {/* Grid: 1.66fr / 1fr → stacked */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1.66fr_1fr]">

          {/* Featured article */}
          <Link
            href="#"
            className="group relative overflow-hidden rounded-[32px] bg-[#121418] block transition-transform duration-300 hover:scale-[0.99]"
          >
            <div className="relative h-[500px] max-[767px]:h-[350px] max-[479px]:h-[320px]">
              {featured.image && (
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
              )}
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[14px] font-bold uppercase tracking-[0.08em] text-[#b6bcc9]">
                  {featured.tag} · {featured.date}
                </span>
                <h3 className="mt-3 text-[30px] max-[767px]:text-[24px] font-medium leading-[1.25em] text-white">
                  {featured.title}
                </h3>
              </div>
            </div>
          </Link>

          {/* List articles */}
          <div className="flex flex-col gap-7">
            {list.map((article, i) => (
              <Link
                key={i}
                href="#"
                className="group flex flex-col justify-between rounded-[32px] bg-[#121418] border border-[#121418] p-8 transition-transform duration-300 hover:scale-[0.99]"
              >
                <span className="text-[14px] font-bold uppercase tracking-[0.08em] text-[#7c818d]">
                  {article.tag} · {article.date}
                </span>
                <div>
                  <h3 className="mt-4 text-[24px] font-medium leading-[1.25em] text-white group-hover:text-[#b6bcc9] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-[18px] leading-[1.5em] text-[#7c818d]">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
