import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Ear, ArrowRight } from 'lucide-react';
import { CAMPAIGN_EVENTS } from '@/lib/campaignData';

export const metadata: Metadata = {
  title: 'Campaign Trail & Events Calendar — Townhalls & Rallies',
  description: 'Upcoming community visits, rallies, ward listening forums, and townhall meetings with J.M. Gitau across Naivasha Constituency.',
  alternates: {
    canonical: 'https://jmgitau2027.co.ke/events',
  },
  openGraph: {
    title: 'Campaign Trail & Events Calendar — J.M. Gitau 2027',
    description: 'Find upcoming campaign rallies, townhalls, and ward listening sessions across Naivasha Constituency.',
    url: 'https://jmgitau2027.co.ke/events',
    siteName: 'J.M. Gitau Naivasha 2027',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: 'https://jmgitau2027.co.ke/jm-gitau-hero-banner.jpg',
        width: 1024,
        height: 682,
        alt: 'J.M. Gitau Campaign Events Calendar',
        type: 'image/jpeg',
      },
      {
        url: 'https://jmgitau2027.co.ke/api/og?title=Campaign+Trail+%26+Events+Calendar&subtitle=Upcoming+Townhalls%2C+Rallies+%26+Listening+Sessions+in+Naivasha',
        width: 1200,
        height: 630,
        alt: 'J.M. Gitau Events Banner',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Campaign Trail & Events Calendar — J.M. Gitau 2027',
    description: 'Find upcoming campaign rallies, townhalls, and ward listening sessions.',
    images: [{
      url: 'https://jmgitau2027.co.ke/jm-gitau-hero-banner.jpg',
      alt: 'J.M. Gitau Events Calendar',
    }],
  },
};

const eventsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'J.M. Gitau Naivasha 2027 Campaign Events',
  description: 'Upcoming public events, rallies, and townhall forums.',
  itemListElement: CAMPAIGN_EVENTS.map((evt, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    item: {
      '@type': 'Event',
      name: evt.title,
      description: evt.description,
      startDate: `${evt.date} ${evt.time}`,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: evt.location,
        address: {
          '@type': 'PostalAddress',
          addressLocality: evt.ward,
          addressRegion: 'Nakuru County',
          addressCountry: 'KE'
        }
      },
      organizer: {
        '@type': 'Person',
        name: 'J.M. Gitau',
        url: 'https://jmgitau2027.co.ke'
      }
    }
  }))
};

export default function EventsPage() {
  return (
    <div className="space-y-16 pb-20 bg-[#F8FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
      />
      
      {/* HERO BANNER */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-xs font-extrabold text-[#00C853] uppercase tracking-wider mx-auto">
            <Calendar className="h-3.5 w-3.5" />
            <span>ON THE CALENDAR</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Where we&apos;ll be.
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Upcoming community visits, meetings, and public forums across Naivasha.
          </p>
        </div>
      </section>

      {/* EVENTS LIST */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
        {CAMPAIGN_EVENTS.map((evt) => (
          <div
            key={evt.id}
            className="dcp-card flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 shadow-sm hover:shadow-xl"
          >
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-[#00C853]">
                  {evt.type}
                </span>
                <span className="text-xs font-bold text-[#8B4513]">{evt.ward}</span>
              </div>
              <h2 className="font-heading text-lg font-extrabold text-slate-900 sm:text-xl">{evt.title}</h2>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{evt.description}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-1">
                <span className="flex items-center gap-1.5 text-slate-800">
                  <Calendar className="h-4 w-4 text-[#00C853]" /> {evt.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-[#00C853]" /> {evt.time}
                </span>
                <span className="flex items-center gap-1.5 text-slate-800 font-bold">
                  <MapPin className="h-4 w-4 text-[#00C853]" /> {evt.location}
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00C853] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#00C853]/20 hover:bg-[#00E676] hover:text-slate-950 transition-all shrink-0"
            >
              RSVP / Attend <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        ))}
      </section>

    </div>
  );
}
