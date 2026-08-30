import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Permanent_Marker, Caveat } from 'next/font/google';
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

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  variable: '--font-marker',
  weight: ['400'],
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['700'],
});

import { getBaseUrl, getAbsoluteUrl } from '@/lib/seo';

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'J.M. Gitau — Naivasha Constituency MP Candidate 2027 (DCP)',
    template: '%s | J.M. Gitau Naivasha 2027',
  },
  description: 'Official digital platform for J.M. Gitau, candidate for Naivasha Constituency MP 2027 under the Democracy for the Citizens Party (DCP - Skiza Wakenya). Discover our manifesto, ward profiles, water & TVET agenda, and ground campaign records.',
  keywords: [
    'J.M. Gitau',
    'JM Gitau',
    'JM Gitau Naivasha',
    'JM Gitau 2027',
    'Naivasha MP 2027',
    'Naivasha Constituency MP',
    'DCP Kenya',
    'Democracy for the Citizens Party',
    'Skiza Wakenya',
    'Skiza Ground',
    'Naivasha Wards',
    'Biashara Ward',
    'Mai Mahiu',
    'Maiela Ward',
    'Lakeview Ward',
    'Olkaria Ward',
    'Hell\'s Gate Ward',
    'Naivasha East'
  ],
  authors: [
    { name: 'Team J.M. Gitau Campaign' },
    { name: 'TerraSept Solutions', url: 'https://terraseptsolutions.com' }
  ],
  creator: 'TerraSept Solutions (https://terraseptsolutions.com)',
  publisher: 'Democracy for the Citizens Party (DCP)',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'J.M. Gitau — Naivasha Constituency MP Candidate 2027 (DCP)',
    description: 'Action-Driven Leadership Built On The Ground. Discover J.M. Gitau\'s vision, manifesto, and ward development pillars for Naivasha Constituency.',
    url: baseUrl,
    siteName: 'J.M. Gitau Naivasha 2027',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: getAbsoluteUrl('/jm-gitau-hero-banner.jpg'),
        width: 1024,
        height: 682,
        alt: 'J.M. Gitau - Naivasha Constituency MP Candidate 2027',
        type: 'image/jpeg',
      },
      {
        url: getAbsoluteUrl('/assets/web/images/2026-08-19_1563591385781111_01.webp'),
        width: 590,
        height: 393,
        alt: 'J.M. Gitau Community Engagement in Naivasha',
        type: 'image/webp',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J.M. Gitau — Naivasha Constituency MP Candidate 2027',
    description: 'Skiza Wakenya • Action-Driven Leadership for Naivasha Constituency.',
    images: [{
      url: getAbsoluteUrl('/jm-gitau-hero-banner.jpg'),
      alt: 'J.M. Gitau - Naivasha Constituency MP Candidate 2027',
    }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        '@type': 'AdministrativeArea',
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
      '@type': 'PoliticalParty',
      '@id': 'https://jmgitau2027.co.ke/#party',
      name: 'Democracy for the Citizens Party',
      alternateName: 'DCP',
      slogan: 'Skiza Wakenya',
      url: 'https://jmgitau2027.co.ke'
    },
    {
      '@type': 'WebSite',
      '@id': 'https://jmgitau2027.co.ke/#website',
      url: 'https://jmgitau2027.co.ke',
      name: 'J.M. Gitau — Naivasha 2027 Platform',
      description: 'Official digital platform for J.M. Gitau, candidate for Naivasha Constituency MP 2027.',
      publisher: {
        '@id': 'https://jmgitau2027.co.ke/#candidate'
      },
      inLanguage: 'en-KE'
    }
  ]
};

import PublicLayoutWrapper from '@/components/PublicLayoutWrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${permanentMarker.variable} ${caveat.variable} h-full scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#00C853" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A] antialiased relative">
        <PublicLayoutWrapper>{children}</PublicLayoutWrapper>
      </body>
    </html>
  );
}
