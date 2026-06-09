/**
 * Site footer — Cohere-inspired landing page layout.
 */

import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  {
    id: 'x',
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.975 20.452H3.555V9h3.42v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-[#121418] bg-black">
      <div className="site-footer-upper container-default mx-auto px-6 pt-16 pb-12 lg:pt-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[480px]">
            <p className="text-[16px] leading-[1.6em] text-[#b6bcc9]">
              Robot labor delivered as a service. We ship robots with vision,
              3D sensing, and modular tools to your facility — you pay only for
              the work completed.
            </p>
          </div>

          <div className="site-footer-contact shrink-0">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#7c818d]">
              Contact
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#3b3e45] bg-[#121418] text-[#b6bcc9] transition-colors duration-300 hover:border-[#7c818d] hover:text-white"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <Link
              href="mailto:contact@factoryspace.ai"
              className="mt-4 inline-block text-[16px] text-[#b6bcc9] transition-colors duration-300 hover:text-white"
            >
              contact@factoryspace.ai
            </Link>
          </div>
        </div>
      </div>

      <div className="site-footer-wordmark-wrap container-default mx-auto px-6 pb-4">
        <p
          aria-hidden
          className="site-footer-wordmark m-0 w-full max-w-full select-none whitespace-nowrap bg-gradient-to-r from-[#4a4d55] via-[#35373d] to-[#1f2128] bg-clip-text font-normal leading-[0.9] tracking-[-0.03em] text-transparent text-[clamp(2.75rem,11.5vw,8.5rem)]"
        >
          factoryspace.ai
        </p>
      </div>

      <div className="site-footer-bottom border-t border-[#121418]">
        <div className="container-default mx-auto flex flex-col gap-3 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] text-[#7c818d]">
            © {new Date().getFullYear()} factoryspace.ai
          </p>
          <p className="flex flex-wrap items-center gap-2 text-[14px] text-[#7c818d]">
            Designed and developed by
            <Link
              href="https://www.404linq.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="404 Linq"
              className="inline-flex cursor-pointer items-center opacity-90 transition-opacity duration-300 hover:opacity-100"
            >
              <Image
                src="/images/logo-light.svg"
                alt="404 Linq"
                width={101}
                height={42}
                className="h-[18px] w-auto"
              />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
