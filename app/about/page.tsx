import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Users, Ear, Award, CheckCircle2, MapPin, HeartHandshake } from 'lucide-react';
import { CAMPAIGN_POSTS } from '@/lib/campaignData';

export default function AboutPage() {
  const bioPhoto = CAMPAIGN_POSTS[0]?.assets[0]?.paths.web || 'assets/web/images/2026-08-19_1563591385781111_01.webp';
  const secondaryPhoto = CAMPAIGN_POSTS[1]?.assets[0]?.paths.web || 'assets/web/images/2026-08-14_1558895482917368_01.webp';

  return (
    <div className="space-y-16 pb-20 bg-[#F8FAFC]">
      
      {/* PAGE HERO BANNER */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          
          <div className="dcp-badge mx-auto">
            <span className="h-2 w-2 rounded-full bg-[#00C853]" />
            <span>SKIZA GROUND • LEADERSHIP PROFILE</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            About <span className="text-[#00C853]">J.M. Gitau</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            A record of community engagement, servant leadership, and dedicated representation for the people of Naivasha Constituency under the Democracy for the Citizens Party (DCP).
          </p>
        </div>
      </section>

      {/* BIOGRAPHY & STORY SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Portrait Display */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={`/${bioPhoto}`}
                  alt="J.M. Gitau - Naivasha MP Candidate 2027"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-base font-extrabold text-slate-900">J.M. Gitau</span>
                  </div>
                  <p className="text-xs text-[#8B4513] font-bold mt-0.5">Naivasha MP Candidate 2027 (DCP)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8B4513] uppercase tracking-wider">
              <Ear className="h-4 w-4 text-[#00C853]" />
              <span>SKIZA WAKENYA PHILOSOPHY</span>
            </div>
            
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 leading-tight sm:text-4xl">
              Rooted In Community, Driven By Ground Truth.
            </h2>
            
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                J.M. Gitau has dedicated years to active community service across Naivasha Constituency. From listening to agricultural families in Maiela and Sero Moi Ndabi, to engaging small market traders in Biashara Ward and youth groups along the Mai Mahiu transit corridor, his approach to public leadership is defined by direct accessibility and ground-level presence.
              </p>
              <p>
                Naivasha is one of Kenya&apos;s most dynamic economic constituencies — housing flower farm workers, fishermen along Lake Naivasha, geothermal energy pioneers in Olkaria, logistics enterprises in Mai Mahiu, and vibrant trading communities. J.M. Gitau&apos;s 2027 vision unites all 7 Wards under an equitable developmental agenda centered on youth TVET scholarships, water infrastructure, accessible bursaries, and rural feeder roads.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-[#00C853] font-bold">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-slate-900">Transparent Governance</h3>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Fair and equitable bursary distribution for all students without bias or nepotism.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-[#8B4513] font-bold">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-slate-900">Inclusive Empowerment</h3>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Direct support for youth TVET skills, women chamas, and local business startups.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/agenda"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00C853] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#00E676] transition-all"
              >
                Read Manifesto Pillars <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* FIELD ENGAGEMENT RECORD HIGHLIGHT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-12 space-y-8 shadow-xs">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-[#00C853] uppercase">FIELD ARCHIVE</span>
              <h2 className="font-heading text-2xl font-extrabold text-slate-900 mt-1 sm:text-3xl">
                Constituency Presence & Service
              </h2>
            </div>
            <Link
              href="/media"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#00C853] hover:text-[#00E676]"
            >
              Explore 58 Photo Records <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Listening Across All 7 Naivasha Wards
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Whether attending church services in Sero Moi Ndabi, meeting local clergy, engaging boda boda operators in Naivasha town, or inspecting water borehole progress in Mai Mahiu, J.M. Gitau believes that constituency leadership requires constant, unvarnished ground feedback.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-[#00C853]" />
                  <span>Biashara Ward</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-[#00C853]" />
                  <span>Hell&apos;s Gate Ward</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-[#00C853]" />
                  <span>Lakeview Ward</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-[#00C853]" />
                  <span>Mai Mahiu Ward</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-[#00C853]" />
                  <span>Maiela Ward</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-[#00C853]" />
                  <span>Olkaria Ward</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 border border-slate-200">
                <Image
                  src={`/${secondaryPhoto}`}
                  alt="J.M. Gitau Field Engagement"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
