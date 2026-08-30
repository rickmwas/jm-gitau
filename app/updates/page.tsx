import type { Metadata } from 'next';
import UpdatesFeedClient from '@/components/UpdatesFeedClient';
import { CAMPAIGN_POSTS } from '@/lib/campaignData';

export const metadata: Metadata = {
  title: 'Ground Campaign Updates & Field Activity Log',
  description: 'Follow real-time campaign updates, ground listening tours, ward community forums, and field records for J.M. Gitau across Naivasha Constituency.',
  alternates: {
    canonical: 'https://jmgitau2027.co.ke/updates',
  },
  openGraph: {
    title: 'Ground Campaign Updates & Field Activity Log — J.M. Gitau 2027',
    description: 'Direct field records, church visits, rallies, and townhall discussions with Naivasha Constituency residents.',
    url: 'https://jmgitau2027.co.ke/updates',
    siteName: 'J.M. Gitau Naivasha 2027',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: 'https://jmgitau2027.co.ke/jm-gitau-hero-banner.jpg',
        width: 1024,
        height: 682,
        alt: 'J.M. Gitau Ground Campaign Updates',
        type: 'image/jpeg',
      },
      {
        url: 'https://jmgitau2027.co.ke/api/og?title=Ground+Campaign+Updates&subtitle=Community+Forums%2C+Townhalls+%26+Field+Records+in+Naivasha',
        width: 1200,
        height: 630,
        alt: 'J.M. Gitau Ground Campaign Banner',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ground Campaign Updates & Field Activity Log — J.M. Gitau 2027',
    description: 'Direct field records, church visits, rallies, and townhall discussions.',
    images: [{
      url: 'https://jmgitau2027.co.ke/jm-gitau-hero-banner.jpg',
      alt: 'J.M. Gitau Field Updates',
    }],
  },
};

const updatesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'J.M. Gitau Naivasha Campaign Field Updates',
  description: 'Official ground updates and news log from J.M. Gitau\'s parliamentary campaign.',
  blogPost: CAMPAIGN_POSTS.slice(0, 10).map((post) => ({
    '@type': 'BlogPosting',
    headline: post.category,
    articleBody: post.message,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'J.M. Gitau Secretariat'
    },
    publisher: {
      '@type': 'Organization',
      name: 'J.M. Gitau Naivasha 2027 Campaign'
    }
  }))
};

export default function UpdatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(updatesJsonLd) }}
      />
      <UpdatesFeedClient />
    </>
  );
}
