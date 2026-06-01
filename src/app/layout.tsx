import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';
import { GsapProvider } from '@/components/providers/GsapProvider';

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-primary',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Robotflow — The next generation of humanoid robotics',
  description: 'OmniBot combines advanced AI, unmatched mobility, and human-like precision. Reserve your unit today.',
  openGraph: {
    title: 'Robotflow — The next generation of humanoid robotics',
    description: 'OmniBot combines advanced AI, unmatched mobility, and human-like precision.',
    images: [{ url: '/og.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${interTight.variable} h-full`}>
      <body className="min-h-full antialiased">
        <GsapProvider>
          {children}
        </GsapProvider>
      </body>
    </html>
  );
}
