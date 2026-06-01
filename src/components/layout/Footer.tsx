/**
 * Site footer.
 * Source: §5.8 + §13.5 (footer responsive)
 */

import Link from 'next/link';

const footerGroups = [
  {
    label: 'Product',
    links: [
      { id: 'product-features', label: 'Features', href: '#features' },
      { id: 'product-specs', label: 'Specs', href: '#specs' },
      { id: 'product-pricing', label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    label: 'Company',
    links: [
      { id: 'company-about', label: 'About', href: '#' },
      { id: 'company-news', label: 'News', href: '#news' },
      { id: 'company-careers', label: 'Careers', href: '#' },
    ],
  },
  {
    label: 'Support',
    links: [
      { id: 'support-faq', label: 'FAQ', href: '#faq' },
      { id: 'support-contact', label: 'Contact', href: '#' },
      { id: 'support-docs', label: 'Docs', href: '#' },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-[#121418]">
      {/* Footer top */}
      <div className="container-default mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">

          {/* Tagline block */}
          <div className="max-w-[370px]">
            {/* Logo */}
            <span className="text-white font-semibold text-xl tracking-tight">Robotflow</span>
            {/* Footer tagline slot */}
            <p className="mt-6 text-[48px] font-medium leading-[1.25em] text-white">
              {/* SLOT: footer.tagline */}
              Discover the new era of robotic technology
            </p>
            {/* Email slot */}
            <Link
              href="mailto:contact@robotflow.com"
              className="mt-6 block text-[36px] font-medium leading-[1.25em] text-white transition-colors duration-300 hover:text-[#b6bcc9]"
            >
              {/* SLOT: footer.email */}
              contact@robotflow.com
            </Link>
            {/* Social icons placeholder */}
            <div className="mt-6 flex gap-4">
              {['Twitter / X', 'LinkedIn', 'YouTube'].map((s) => (
                <Link
                  key={s}
                  href="#"
                  aria-label={s}
                  className="h-10 w-10 rounded-full border border-[#3b3e45] bg-[#121418] flex items-center justify-center text-[#7c818d] text-xs transition-colors duration-300 hover:text-white"
                >
                  {s.charAt(0)}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-10 sm:grid-cols-3 lg:max-w-[670px] lg:w-full">
            {footerGroups.map((group) => (
              <div key={group.label}>
                <p className="text-[14px] font-bold uppercase tracking-[0.08em] text-white mb-4">
                  {group.label}
                </p>
                <ul className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        className="text-[18px] text-[#b6bcc9] transition-colors duration-300 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container-default mx-auto px-6">
        <div className="h-px bg-[#121418]" />
      </div>

      {/* Footer bottom */}
      <div className="container-default mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-6">
        <span className="text-white font-semibold text-xl tracking-tight">Robotflow</span>
        <p className="text-[#7c818d] text-sm">
          © {new Date().getFullYear()} Robotflow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
