import Link from 'next/link';
import { MapPin, CheckCircle2, Ear, ArrowRight } from 'lucide-react';
import { NAIVASHA_WARDS } from '@/lib/campaignData';

export default function NaivashaPage() {
  return (
    <div className="space-y-16 pb-20 bg-[#F8FAFC]">
      
      {/* DCP STANDARDIZED HERO BANNER */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl mx-auto">
          <div className="dcp-badge mx-auto">
            <span className="h-2 w-2 rounded-full bg-[#00C853]" />
            <span>SKIZA GROUND • CONSTITUENCY COVERAGE</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Serving All <span className="dcp-gradient-heading">7 Naivasha Wards</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Delivering development, bursary equality, and infrastructure upgrades across every Ward of Naivasha Constituency under the Democracy for the Citizens Party (DCP).
          </p>
        </div>
      </section>

      {/* WARDS GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {NAIVASHA_WARDS.map((ward) => (
            <div
              id={ward.slug}
              key={ward.id}
              className="dcp-card p-6 space-y-4 scroll-mt-24 shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-200 text-[#00C853]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-extrabold text-slate-900">{ward.name} Ward</h2>
                    <span className="text-xs text-[#8B4513] font-bold">{ward.representative}</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#00C853] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  {ward.population}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {ward.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider">Key Ward Flagship Projects:</span>
                <div className="space-y-2">
                  {ward.keyProjects.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-[#00C853] shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WARD MOBILIZATION CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-r from-[#00C853] via-emerald-700 to-[#8B4513] p-8 text-center text-white space-y-4 shadow-xl">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-emerald-100">
            <Ear className="h-4 w-4" />
            <span>LOCAL WARD TEAM MOBILIZATION</span>
          </div>
          <h3 className="font-heading text-2xl font-extrabold sm:text-3xl">Want to Volunteer in Your Specific Ward?</h3>
          <p className="text-emerald-50 text-xs sm:text-sm max-w-xl mx-auto font-medium">
            Join Team J.M. Gitau in Biashara, Hell&apos;s Gate, Lakeview, Mai Mahiu, Maiela, Olkaria, or Naivasha East.
          </p>
          <div className="pt-2">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 rounded-xl bg-[#8B4513] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#653816] transition-all"
            >
              Register Ward Volunteer <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
