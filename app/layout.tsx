import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'J.M. Gitau — Naivasha Constituency MP Campaign 2027',
  description: 'Official campaign platform for Hon. Jane Kihara / J.M. Gitau (DCP - Skiza Ground). Discover our manifesto for Naivasha Constituency, bursary transparency, water infrastructure, and verified field updates.',
  keywords: ['JM Gitau', 'Naivasha MP', 'Jane Kihara', 'Naivasha Constituency', 'CDF Bursaries', 'Nakuru County', 'Naivasha Wards', 'Skiza Ground', 'DCP Kenya'],
  openGraph: {
    title: 'J.M. Gitau — Naivasha Constituency MP Campaign 2027',
    description: 'Servant Leadership for Naivasha Constituency. Skiza Ground • Action & Transparency.',
    url: 'https://jmgitau2027.co.ke',
    siteName: 'JM Gitau Naivasha Campaign',
    images: ['/assets/web/images/2026-08-19_1563591385781111_01.webp'],
    locale: 'en_KE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
