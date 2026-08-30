import type { Metadata } from 'next';
import ContactFormClient from '@/components/ContactFormClient';

export const metadata: Metadata = {
  title: 'Contact Campaign Secretariat & Ward Offices',
  description: 'Connect with J.M. Gitau\'s campaign office in Naivasha Constituency. Submit ward priorities, schedule community meetings, or write to our team directly.',
  alternates: {
    canonical: 'https://jmgitau2027.co.ke/contact',
  },
  openGraph: {
    title: 'Contact Campaign Secretariat & Ward Offices — J.M. Gitau 2027',
    description: 'We are listening. Get in touch with Team J.M. Gitau across Naivasha Town and all constituent wards.',
    url: 'https://jmgitau2027.co.ke/contact',
    images: [
      {
        url: '/api/og?title=Contact+Campaign+Secretariat&subtitle=We+Are+Listening.+Get+in+Touch+With+Team+J.M.+Gitau',
        width: 1200,
        height: 630,
        alt: 'Contact J.M. Gitau Campaign Secretariat',
      },
    ],
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact J.M. Gitau Naivasha 2027 Campaign Secretariat',
  description: 'Official contact details for J.M. Gitau campaign office in Naivasha Constituency.',
  mainEntity: {
    '@type': 'ContactPoint',
    contactType: 'Campaign Secretariat',
    telephone: '+254-700-000-000',
    email: 'contact@jmgitau2027.co.ke',
    areaServed: 'Naivasha Constituency, Nakuru County, Kenya',
    availableLanguage: ['en', 'sw']
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactFormClient />
    </>
  );
}
