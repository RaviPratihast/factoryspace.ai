/**
 * Primary button — slide-reveal dark layer on hover.
 * Source: §5.1
 *
 * The inner `.bg` div translates from translateY(100%) → 0 on hover,
 * giving the "dark ink rising" effect from the Webflow template.
 */

import { cn } from '@/lib/utils';
import Link from 'next/link';

interface PrimaryButtonProps {
  label: string;
  href?: string;
  /** DevTools hook, e.g. `hero-cta-button` */
  identity?: string;
  className?: string;
  onClick?: () => void;
}

export function PrimaryButton({
  label,
  href,
  identity,
  className,
  onClick,
}: PrimaryButtonProps) {
  const classes = cn(
    'ui-primary-button',
    identity,
    'group relative inline-flex items-center justify-center overflow-hidden',
    'rounded-[200px] border border-white bg-white px-6 py-2',
    'text-[18px] font-medium leading-[1.5em] text-black',
    'cursor-pointer transition-transform duration-300 hover:scale-[0.97]',
    className
  );

  const inner = (
    <>
      <span className="ui-primary-button-label relative z-10 text-black transition-colors duration-300 group-hover:text-white">
        {label}
      </span>
      <span
        aria-hidden
        className="ui-primary-button-hover-layer absolute inset-0 z-0 translate-y-full rounded-[200px] bg-[#050607] transition-transform duration-300 group-hover:translate-y-0"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}
