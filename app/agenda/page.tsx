import type { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, Droplets, Users, HeartPulse, CheckCircle2, ArrowRight, Ear, Send, Compass } from 'lucide-react';
import { AGENDA_PILLARS } from '@/lib/campaignData';

export const metadata: Metadata = {
  title: 'Manifesto & 5 Pillars of Action — Water, TVET, Youth & Infrastructure',
  description: 'Explore J.M. Gitau\'s action agenda for Naivasha Constituency: TVET technical bursaries, clean water access, youth empowerment, healthcare, and fair ward bursary distribution.',
  alternates: {
    canonical: 'https://jmgitau2027.co.ke/agenda',
  },
  openGraph: {
    title: 'Manifesto & 5 Pillars of Action — J.M. Gitau 2027',
    description: 'Actionable policy commitments for Naivasha Constituency built around TVET bursaries, water access, and youth opportunities.',
    url: 'https://jmgitau2027.co.ke/agenda',
    siteName: 'J.M. Gitau Naivasha 2027',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: 'https://jmgitau2027.co.ke/jm-gitau-hero-banner.jpg',
        width: 1024,
        height: 682,
        alt: 'J.M. Gitau Manifesto & 5 Pillars',
        type: 'image/jpeg',
      },
      {
        url: 'https://jmgitau2027.co.ke/api/og?title=Manifesto+%26+5+Pillars+of+Action&subtitle=TVET+Bursaries%2C+Water+Access+%26+Youth+Empowerment+for+Naivasha',
        width: 1200,
        height: 630,
        alt: 'J.M. Gitau Manifesto Banner',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manifesto & 5 Pillars of Action — J.M. Gitau 2027',
    description: 'Actionable policy commitments for Naivasha Constituency.',
    images: [{
      url: 'https://jmgitau2027.co.ke/jm-gitau-hero-banner.jpg',
      alt: 'J.M. Gitau Manifesto',
    }],
  },
};

const agendaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'J.M. Gitau 5 Pillars of Action for Naivasha Constituency',
  description: 'Key manifesto pillars and action agenda for J.M. Gitau 2027 parliamentary campaign.',
  itemListElement: AGENDA_PILLARS.map((pillar, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: pillar.title,
    description: pillar.description
  }))
};

const PILLAR_ICONS: Record<string, any> = {
  GraduationCap,
  Droplets,
  Users,
  HeartPulse
};

export default function AgendaPage() {
  return (
    <div className="space-y-16 pb-20 bg-[#F8FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agendaJsonLd) }}
      />
      
      {/* PAGE HERO BANNER */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-xs font-extrabold text-[#00C853] uppercase tracking-wider mx-auto">
            <Compass className="h-3.5 w-3.5" />
            <span>THE AGENDA</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            What should come next for Naivasha?
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            The ideas, priorities and commitments set out by J.M. Gitau.
          </p>
        </div>
      </section>

      {/* PILLARS BREAKDOWN */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {AGENDA_PILLARS.map((pillar, idx) => {
          const IconComp = PILLAR_ICONS[pillar.icon] || GraduationCap;
          return (
            <div
              id={pillar.slug}
              key={pillar.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 space-y-6 scroll-mt-24 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00C853] text-white shadow-md shadow-[#00C853]/25 shrink-0">
                    <IconComp className="h-7 w-7 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#8B4513] uppercase tracking-wider">PRIORITY 0{idx + 1}</span>
                    <h2 className="font-heading text-2xl font-extrabold text-slate-900 sm:text-3xl">{pillar.title}</h2>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-[#008E3A] bg-emerald-100 px-3.5 py-1.5 rounded-full self-start sm:self-center">
                  {pillar.tagline}
                </span>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                {pillar.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Key Priorities:</h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {pillar.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs font-semibold text-slate-700">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00C853] text-white shrink-0 mt-0.5 shadow-2xs">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CITIZEN FEEDBACK CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-12 text-slate-900 space-y-6 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#00C853]">
                <Ear className="h-4 w-4" />
                <span>GET INVOLVED</span>
              </div>
              <h3 className="font-heading text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Have something to say?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                Naivasha is a conversation, and every community has something worth hearing.
              </p>
            </div>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00C853] px-6 py-3.5 text-xs font-bold text-white shadow-md hover:bg-[#00E676] hover:text-slate-950 transition-all whitespace-nowrap"
              >
                Share a concern <Send className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
