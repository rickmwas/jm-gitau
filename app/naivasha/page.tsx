import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Users, CheckCircle2, ArrowRight, Compass } from 'lucide-react';
import { NAIVASHA_WARDS, CAMPAIGN_POSTS } from '@/lib/campaignData';

export default function NaivashaPage() {
  return (
    <div className="space-y-16 pb-20 bg-[#F8FAFC]">
      
      {/* HERO BANNER */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="dcp-badge mx-auto">
            <span className="h-2 w-2 rounded-full bg-[#00C853]" />
            <span>NAIVASHA CONSTITUENCY • 7 WARDS</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Our Wards, <span className="text-[#00C853]">Our Priority</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Naivasha Constituency comprises 7 electoral wards with diverse economic drivers: from geothermal energy and horticulture to lakeside fisheries, transit logistics, and agricultural farming.
          </p>
        </div>
      </section>

      {/* WARDS DIRECTORY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {NAIVASHA_WARDS.map((ward, idx) => {
          // Match relevant campaign post by ward keyword or fallback
          const wardPost = CAMPAIGN_POSTS.find(p => p.message.toLowerCase().includes(ward.slug.replace('-', ' '))) || CAMPAIGN_POSTS[idx % CAMPAIGN_POSTS.length];
          const wardImage = wardPost?.assets[0]?.paths.web;

          return (
            <div
              id={ward.slug}
              key={ward.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Photo Column */}
                <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto bg-slate-100">
                  {wardImage && (
                    <Image
                      src={`/${wardImage}`}
                      alt={ward.name}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute top-4 left-4 rounded-md bg-[#00C853] px-3 py-1 text-xs font-bold text-white shadow-md">
                    Ward 0{idx + 1}
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                      <div>
                        <span className="text-xs font-bold text-[#8B4513] uppercase tracking-wider">{ward.representative}</span>
                        <h2 className="font-heading text-2xl font-bold text-slate-900">{ward.name}</h2>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                        <Users className="h-3.5 w-3.5 text-[#00C853]" />
                        <span>Pop. {ward.population}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {ward.description}
                    </p>

                    <div className="space-y-2">
                      <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Priority Development Projects:</h3>
                      <div className="flex flex-wrap gap-2">
                        {ward.keyProjects.map((proj, pIdx) => (
                          <span key={pIdx} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#00C853]" />
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/updates?query=${ward.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00C853] hover:text-[#00E676]"
                    >
                      View Ward Ground Reports <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
}
