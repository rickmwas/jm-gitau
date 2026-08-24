import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
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
  title: 'J.M. Gitau — Naivasha Constituency MP Candidate 2027 (DCP)',
  description: 'Official digital platform for J.M. Gitau, candidate for Naivasha Constituency MP 2027 under the Democracy for the Citizens Party (DCP - Skiza Wakenya). Discover our manifesto, ward profiles, water & TVET agenda, and ground campaign records.',
  keywords: [
    'J.M. Gitau',
    'JM Gitau',
    'JM Gitau Naivasha',
    'JM Gitau 2027',
    'Naivasha MP 2027',
    'Naivasha Constituency',
    'DCP Kenya',
    'Skiza Wakenya',
    'Skiza Ground',
    'Naivasha Wards',
    'Biashara Ward',
    'Mai Mahiu',
    'Maiela Ward',
    'Lakeview Ward',
    'Olkaria Ward'
  ],
  metadataBase: new URL('https://jmgitau2027.co.ke'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'J.M. Gitau — Naivasha Constituency MP Candidate 2027 (DCP)',
    description: 'Action-Driven Leadership Built On The Ground. Discover J.M. Gitau\'s vision and manifesto for Naivasha Constituency.',
    url: 'https://jmgitau2027.co.ke',
    siteName: 'J.M. Gitau Naivasha 2027',
    images: [
      {
        url: '/assets/web/images/2026-08-19_1563591385781111_01.webp',
        width: 1200,
        height: 630,
        alt: 'J.M. Gitau Community Engagement in Naivasha'
      }
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J.M. Gitau — Naivasha Constituency MP Candidate 2027',
    description: 'Skiza Wakenya • Action-Driven Leadership for Naivasha Constituency.',
    images: ['/assets/web/images/2026-08-19_1563591385781111_01.webp'],
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://jmgitau2027.co.ke/#candidate',
      name: 'J.M. Gitau',
      alternateName: ['John Maina Gitau', 'JM Gitau'],
      description: 'Candidate for Naivasha Constituency Member of Parliament 2027 (Democracy for the Citizens Party - DCP)',
      affiliation: {
        '@type': 'PoliticalParty',
        name: 'Democracy for the Citizens Party',
        alternateName: 'DCP',
        slogan: 'Skiza Wakenya'
      },
      jobTitle: 'Parliamentary Candidate',
      workLocation: {
        '@type': 'Place',
        name: 'Naivasha Constituency',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Naivasha',
          addressRegion: 'Nakuru County',
          addressCountry: 'KE'
        }
      },
      url: 'https://jmgitau2027.co.ke',
      sameAs: [
        'https://www.facebook.com/JMGitauNaivashaMP/'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': 'https://jmgitau2027.co.ke/#website',
      url: 'https://jmgitau2027.co.ke',
      name: 'J.M. Gitau — Naivasha 2027 Platform',
      description: 'Official digital platform for J.M. Gitau, candidate for Naivasha Constituency MP 2027.',
      publisher: {
        '@id': 'https://jmgitau2027.co.ke/#candidate'
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A] antialiased relative">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
