import { MetadataRoute } from 'next';
import { getAbsoluteUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/admin', '/api/auth'],
      },
    ],
    sitemap: getAbsoluteUrl('/sitemap.xml'),
  };
}
