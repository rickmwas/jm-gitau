import Link from 'next/link';
import { GraduationCap, Droplets, Users, HeartPulse, CheckCircle2, ArrowRight, Ear, Send } from 'lucide-react';
import { AGENDA_PILLARS } from '@/lib/campaignData';

const PILLAR_ICONS: Record<string, any> = {
  GraduationCap,
  Droplets,
  Users,
  HeartPulse
};

export default function AgendaPage() {
  return (
    <div className="space-y-16 pb-20 bg-[#F8FAFC]">
      
      {/* PAGE HERO BANNER */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="dcp-badge mx-auto">
            <span className="h-2 w-2 rounded-full bg-[#00C853]" />
            <span>SKIZA GROUND • CAMPAIGN MANIFESTO</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Manifesto & <span className="text-[#00C853]">4 Pillars of Action</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            J.M. Gitau&apos;s developmental roadmap for Naivasha Constituency (2027–2032) under the Democracy for the Citizens Party (DCP).
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
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 text-[#00C853] shrink-0">
                    <IconComp className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#8B4513] uppercase tracking-wider">PILLAR 0{idx + 1}</span>
                    <h2 className="font-heading text-2xl font-extrabold text-slate-900 sm:text-3xl">{pillar.title}</h2>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#00C853] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 self-start sm:self-center">
                  {pillar.tagline}
                </span>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                {pillar.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Action Commitments:</h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {pillar.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-[#00C853] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CITIZEN POLICY SUGGESTION CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-12 text-slate-900 space-y-6 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#00C853]">
                <Ear className="h-4 w-4" />
                <span>SKIZA GROUND CITIZEN FEEDBACK</span>
              </div>
              <h3 className="font-heading text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Have a Specific Policy Suggestion for Your Ward?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                J.M. Gitau welcomes direct community input from constituents across Biashara, Hell&apos;s Gate, Lakeview, Mai Mahiu, Maiela, Olkaria, and Naivasha East.
              </p>
            </div>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00C853] px-6 py-3.5 text-xs font-bold text-white shadow-md hover:bg-[#00E676] hover:text-slate-950 transition-all whitespace-nowrap"
              >
                Submit Feedback <Send className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
