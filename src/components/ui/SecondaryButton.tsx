/**
 * Secondary / outline button.
 * Source: §5.2
 */

import { cn } from '@/lib/utils';
import Link from 'next/link';

interface SecondaryButtonProps {
  label: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function SecondaryButton({ label, href, className, onClick }: SecondaryButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-[300px]',
    'border border-white bg-transparent px-6 py-2',
    'text-[18px] font-medium leading-[1.5em] text-white',
    'cursor-pointer shadow-[0_1px_4px_#19213d1a]',
    'transition-transform duration-300 hover:scale-[0.97]',
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {label}
    </button>
  );
}
