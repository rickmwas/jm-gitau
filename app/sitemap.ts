import { MetadataRoute } from 'next';
import { NAIVASHA_WARDS } from '@/lib/campaignData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jmgitau2027.co.ke';

  const routes = [
    '',
    '/about',
    '/agenda',
    '/naivasha',
    '/updates',
    '/media',
    '/events',
    '/get-involved',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const wardRoutes = NAIVASHA_WARDS.map((ward) => ({
    url: `${baseUrl}/naivasha#${ward.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...wardRoutes];
}
