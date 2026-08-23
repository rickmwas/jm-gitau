import Link from 'next/link';
import { MapPin, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { NAIVASHA_WARDS } from '@/lib/campaignData';

export default function NaivashaPage() {
  return (
    <div className="space-y-16 py-12">
      
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">CONSTITUENCY COVERAGE</span>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Naivasha Wards</h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Delivering development, bursary equality, and infrastructure upgrades across all 7 Wards of Naivasha Constituency.
          </p>
        </div>
      </section>

      {/* Wards Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {NAIVASHA_WARDS.map((ward) => (
            <div
              id={ward.slug}
              key={ward.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4 scroll-mt-24"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">{ward.name}</h2>
                    <span className="text-xs text-slate-400">{ward.representative}</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                  {ward.population}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {ward.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Ward Projects:</span>
                <div className="space-y-1.5">
                  {ward.keyProjects.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
