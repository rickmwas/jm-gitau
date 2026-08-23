import Link from 'next/link';
import { Calendar, Clock, MapPin, Tag } from 'lucide-react';
import { CAMPAIGN_EVENTS } from '@/lib/campaignData';

export default function EventsPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">CAMPAIGN SCHEDULE</span>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Events & Town Halls</h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Join J.M. Gitau at upcoming community meetings, ward forums, and public engagements across Naivasha.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
        {CAMPAIGN_EVENTS.map((evt) => (
          <div
            key={evt.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-slate-700"
          >
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-400">
                  {evt.type}
                </span>
                <span className="text-xs font-medium text-slate-400">{evt.ward}</span>
              </div>
              <h2 className="text-lg font-bold text-white sm:text-xl">{evt.title}</h2>
              <p className="text-xs text-slate-300 leading-relaxed">{evt.description}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-blue-400" /> {evt.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-blue-400" /> {evt.time}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-blue-400" /> {evt.location}
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 transition-all shrink-0"
            >
              RSVP / Attend
            </Link>
          </div>
        ))}
      </section>

    </div>
  );
}
