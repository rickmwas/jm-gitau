import type { Metadata } from 'next';
import MediaGalleryClient from '@/components/MediaGalleryClient';
import { CAMPAIGN_POSTS } from '@/lib/campaignData';

export const metadata: Metadata = {
  title: 'Media Gallery & Photo Record — J.M. Gitau 2027 Campaign',
  description: 'Browse photos and media records from J.M. Gitau\'s campaign trail, ward community visits, youth townhalls, and public meetings across Naivasha Constituency.',
  alternates: {
    canonical: 'https://jmgitau2027.co.ke/media',
  },
  openGraph: {
    title: 'Media Gallery & Photo Record — J.M. Gitau 2027 Campaign',
    description: 'Visual records from townhalls, rallies, and community meetings across Naivasha Constituency.',
    url: 'https://jmgitau2027.co.ke/media',
    images: [
      {
        url: '/api/og?title=Media+Gallery+%26+Photo+Record&subtitle=Captured+on+the+ground+across+Naivasha+Constituency+Wards',
        width: 1200,
        height: 630,
        alt: 'J.M. Gitau Campaign Photo Gallery',
      },
    ],
  },
};

const mediaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'J.M. Gitau Campaign Media Gallery',
  description: 'Photo and visual record of J.M. Gitau campaign activities in Naivasha Constituency.',
  image: CAMPAIGN_POSTS.filter((p) => p.assets && p.assets.length > 0).slice(0, 12).map((post) => ({
    '@type': 'ImageObject',
    contentUrl: `https://jmgitau2027.co.ke/${post.assets[0].paths.web}`,
    name: post.category,
    description: post.message,
  })),
};

export default function MediaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mediaJsonLd) }}
      />
      <MediaGalleryClient />
    </>
  );
}
