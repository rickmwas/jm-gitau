import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Heart, Award, Users } from 'lucide-react';
import { CAMPAIGN_POSTS } from '@/lib/campaignData';

export default function AboutPage() {
  const bioPhoto = CAMPAIGN_POSTS[0]?.assets[0]?.paths.web || '/assets/web/images/2026-08-19_1563591385781111_01.webp';

  return (
    <div className="space-y-16 py-12">
      
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">LEADERSHIP PROFILE</span>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">About J.M. Gitau</h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A proven record of constituency service, community empowerment, and transparent representation for the people of Naivasha.
          </p>
        </div>
      </section>

      {/* Main Bio Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Bio Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
              <Image
                src={`/${bioPhoto}`}
                alt="Hon. Jane Kihara / J.M. Gitau"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800">
                <p className="text-sm font-bold text-white">Hon. Jane Kihara / J.M. Gitau</p>
                <p className="text-xs text-blue-400 font-semibold">Naivasha Constituency MP Candidate 2027</p>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Dedicated To Service, Committed To Results.
            </h2>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                J.M. Gitau has spent years serving the communities of Naivasha Constituency. From advocating for equitable CDF bursary disbursements to inspecting water infrastructure project sites in Maiela and Mai Mahiu, leadership has always meant being on the ground alongside constituents.
              </p>
              <p>
                Naivasha is a diverse economic engine — home to flower farm workers, lakeside fishermen, geothermal power pioneers in Olkaria, market traders in Biashara Ward, and agricultural families across Sero Moi Ndabi and Karati. J.M. Gitau&apos;s 2027 vision unites all 7 Wards under one equitable developmental roadmap.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-4">
              <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <ShieldCheck className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">Transparent CDF Governance</h3>
                  <p className="text-xs text-slate-400 mt-1">100% audited bursary distribution for every qualified student.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <Users className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">Inclusive Empowerment</h3>
                  <p className="text-xs text-slate-400 mt-1">Direct support for youth startups, women chamas, and PWDs.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/agenda"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-500 transition-all"
              >
                Read Full Manifesto <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
