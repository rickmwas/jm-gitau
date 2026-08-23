import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Users, Ear, Award, CheckCircle2 } from 'lucide-react';
import { CAMPAIGN_POSTS } from '@/lib/campaignData';

export default function AboutPage() {
  const bioPhoto = CAMPAIGN_POSTS[0]?.assets[0]?.paths.web || 'assets/web/images/2026-08-19_1563591385781111_01.webp';

  return (
    <div className="space-y-16 pb-20 bg-[#F8FAFC]">
      
      {/* DCP STANDARDIZED PAGE HERO BANNER */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl mx-auto">
          
          {/* DCP Signature Pill Badge */}
          <div className="dcp-badge mx-auto">
            <span className="h-2 w-2 rounded-full bg-[#00C853]" />
            <span>SKIZA GROUND • LEADERSHIP PROFILE</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            About <span className="dcp-gradient-heading">J.M. Gitau</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            A proven record of constituency service, community empowerment, and transparent representation for the people of Naivasha under the Democracy for the Citizens Party (DCP).
          </p>
        </div>
      </section>

      {/* MAIN BIOGRAPHY SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Candidate Portrait Card */}
          <div className="lg:col-span-5">
            <div className="dcp-card relative aspect-[4/5] overflow-hidden p-2 shadow-xl">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-900">
                <Image
                  src={`/${bioPhoto}`}
                  alt="Hon. Jane Kihara / J.M. Gitau"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-sm font-extrabold text-[#00C853]">Hon. Jane Kihara / J.M. Gitau</span>
                  </div>
                  <p className="text-xs text-[#8B4513] font-bold mt-0.5">Naivasha MP Candidate 2027 (DCP)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Biography Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8B4513] uppercase tracking-wider">
              <Ear className="h-4 w-4 text-[#00C853]" />
              <span>SKIZA WAKENYA PHILOSOPHY</span>
            </div>
            
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 leading-tight sm:text-4xl">
              Dedicated To Service, Driven By Ground Truth.
            </h2>
            
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                J.M. Gitau has spent years serving the communities of Naivasha Constituency. From advocating for equitable NG-CDF bursary disbursements to inspecting water infrastructure project sites in Maiela, Mai Mahiu, and Olkaria, leadership has always meant being on the ground alongside constituents.
              </p>
              <p>
                Naivasha is a vibrant economic engine — home to flower farm workers, lakeside fishermen, geothermal power pioneers, market traders in Biashara Ward, and agricultural families across Sero Moi Ndabi and Karati. J.M. Gitau&apos;s 2027 vision unites all 7 Wards under one equitable developmental roadmap.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
              <div className="dcp-card p-5 space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-[#00C853] font-bold">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-slate-900">Transparent CDF Governance</h3>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  100% audited bursary distribution for every qualified student without bias.
                </p>
              </div>

              <div className="dcp-card p-5 space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-[#8B4513] font-bold">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-slate-900">Inclusive Empowerment</h3>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Direct support for youth TVET startups, women chamas, and PWD groups.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/agenda"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00C853] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#00C853]/25 hover:bg-[#00E676] hover:text-slate-950 transition-all"
              >
                Read Manifesto Pillars <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
