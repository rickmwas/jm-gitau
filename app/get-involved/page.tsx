import type { Metadata } from 'next';
import GetInvolvedFormClient from '@/components/GetInvolvedFormClient';

export const metadata: Metadata = {
  title: 'Get Involved & Join Team J.M. Gitau 2027',
  description: 'Join J.M. Gitau\'s campaign for Naivasha Constituency MP 2027 as a ward volunteer, youth mobilizer, or estate coordinator under Democracy for the Citizens Party (DCP).',
  alternates: {
    canonical: 'https://jmgitau2027.co.ke/get-involved',
  },
  openGraph: {
    title: 'Get Involved & Join Team J.M. Gitau 2027 — Naivasha Constituency',
    description: 'Stand with Naivasha. Shape 2027. Join our ward volunteer network and community mobilization teams.',
    url: 'https://jmgitau2027.co.ke/get-involved',
    siteName: 'J.M. Gitau Naivasha 2027',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: 'https://jmgitau2027.co.ke/jm-gitau-hero-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Join J.M. Gitau Campaign Team',
        type: 'image/jpeg',
      },
      {
        url: 'https://jmgitau2027.co.ke/api/og?title=Get+Involved+%26+Join+Team+J.M.+Gitau&subtitle=Stand+With+Naivasha.+Join+Our+Ward+Volunteer+Network',
        width: 1200,
        height: 630,
        alt: 'Get Involved Banner',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Involved & Join Team J.M. Gitau 2027',
    description: 'Stand with Naivasha. Shape 2027. Join our ward volunteer network.',
    images: [{
      url: 'https://jmgitau2027.co.ke/jm-gitau-hero-banner.jpg',
      alt: 'Join J.M. Gitau Campaign Team',
    }],
  },
};

const getInvolvedJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VolunteerAction',
  name: 'Join J.M. Gitau Naivasha 2027 Campaign Team',
  description: 'Volunteer sign-up for J.M. Gitau parliamentary campaign in Naivasha Constituency.',
  agent: {
    '@type': 'Organization',
    name: 'Democracy for the Citizens Party (DCP)',
    slogan: 'Skiza Wakenya'
  },
  location: {
    '@type': 'Place',
    name: 'Naivasha Constituency, Nakuru County, Kenya'
  }
};

export default function GetInvolvedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getInvolvedJsonLd) }}
      />
      <GetInvolvedFormClient />
    </>
  );
}
