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
  title: 'factoryspace.ai — Robot labor as a service',
  description: 'FactorySpace ships robots to your facility, sets them up, and manages them. Pay only for the work completed.',
  openGraph: {
    title: 'factoryspace.ai — Robot labor as a service',
    description: 'FactorySpace ships robots to your facility, sets them up, and manages them. Pay only for the work completed.',
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
