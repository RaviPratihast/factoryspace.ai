'use client';

/**
 * GsapProvider — registers GSAP plugins once on the client side.
 * Must wrap all components that use GSAP.
 * Source: §7.1 + §10.1
 */

import { useEffect } from 'react';
import { registerGsapPlugins } from '@/lib/animations/gsap';

export function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGsapPlugins();
  }, []);

  return <>{children}</>;
}
