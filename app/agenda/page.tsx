import Link from 'next/link';
import { GraduationCap, Droplets, Users, HeartPulse, CheckCircle2, ArrowRight } from 'lucide-react';
import { AGENDA_PILLARS } from '@/lib/campaignData';

const PILLAR_ICONS: Record<string, any> = {
  GraduationCap,
  Droplets,
  Users,
  HeartPulse
};

export default function AgendaPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">CAMPAIGN MANIFESTO</span>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Pillars of Action</h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Our strategic developmental blueprint for Naivasha Constituency 2027–2032.
          </p>
        </div>
      </section>

      {/* Pillars Breakdown */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {AGENDA_PILLARS.map((pillar, idx) => {
          const IconComp = PILLAR_ICONS[pillar.icon] || GraduationCap;
          return (
            <div
              id={pillar.slug}
              key={pillar.id}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-10 space-y-6 scroll-mt-24"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/15 border border-blue-500/30 text-blue-400 shrink-0">
                    <IconComp className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-400 uppercase">Pillar {idx + 1}</span>
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">{pillar.title}</h2>
                  </div>
                </div>
                <span className="text-xs font-medium text-slate-400 bg-slate-950 px-3 py-1.5 rounded-full border border-slate-800 self-start sm:self-center">
                  {pillar.tagline}
                </span>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {pillar.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Key Commitments:</h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {pillar.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 rounded-xl border border-slate-800/80 bg-slate-950 p-3.5 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Have a Policy Suggestion for Naivasha?</h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            We welcome ideas from all constituents in Biashara, Hell&apos;s Gate, Lakeview, Mai Mahiu, Maiela, Olkaria, and Naivasha East.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-all"
          >
            Submit Feedback <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
