import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'J.M. Gitau — Naivasha Constituency MP Candidate 2027',
    short_name: 'J.M. Gitau 2027',
    description: 'Official digital platform for J.M. Gitau, candidate for Naivasha Constituency MP 2027 under Democracy for the Citizens Party (DCP - Skiza Wakenya).',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFC',
    theme_color: '#00C853',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
