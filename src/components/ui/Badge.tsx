/**
 * Badge component.
 * Source: §5.5
 */

import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'dark' | 'pricing';
  uppercase?: boolean;
  className?: string;
}

export function Badge({ children, variant = 'default', uppercase = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium',
        variant === 'default' && 'bg-[#121418] text-[#b6bcc9]',
        variant === 'dark'    && 'bg-white text-[#050607]',
        variant === 'pricing' && 'bg-[#121418] text-base',
        uppercase && 'tracking-[0.08em] uppercase',
        className
      )}
    >
      {children}
    </span>
  );
}
