/**
 * Base card component.
 * Source: §5.4
 */

import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[32px] border border-[#121418] bg-[#121418]',
        hover && 'transition-transform duration-300 hover:scale-[0.99]',
        className
      )}
    >
      {children}
    </div>
  );
}
