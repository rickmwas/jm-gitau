import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Users, Ear, CheckCircle2, MapPin, HeartHandshake, UserCheck } from 'lucide-react';
import { CAMPAIGN_POSTS } from '@/lib/campaignData';

export default function AboutPage() {
  const bioPhoto = CAMPAIGN_POSTS[0]?.assets[0]?.paths.web || 'assets/web/images/2026-08-19_1563591385781111_01.webp';
  const secondaryPhoto = CAMPAIGN_POSTS[1]?.assets[0]?.paths.web || 'assets/web/images/2026-08-14_1558895482917368_01.webp';

  return (
    <div className="space-y-16 pb-20 bg-[#F8FAFC]">
      
      {/* PAGE HERO BANNER */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-xs font-extrabold text-[#00C853] uppercase tracking-wider mx-auto">
            <UserCheck className="h-3.5 w-3.5" />
            <span>THE STORY</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Before the politics, there is the person.
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            J.M. Gitau&apos;s story is connected to the people and places that make Naivasha home — rooted in community work, local conversations, and everyday realities.
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
                  alt="J.M. Gitau - Naivasha 2027"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-base font-extrabold text-slate-900">J.M. Gitau</span>
                  </div>
                  <p className="text-xs text-[#00C853] font-bold mt-0.5">Naivasha · 2027 (DCP)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8B4513] uppercase tracking-wider">
              <Ear className="h-4 w-4 text-[#00C853]" />
              <span>THE JOURNEY</span>
            </div>
            
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 leading-tight sm:text-4xl">
              Every place has a story. So does every person.
            </h2>
            
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                J.M. Gitau has spent years working alongside communities across Naivasha Constituency. From agricultural families in Maiela and Sero Moi Ndabi to market traders in Biashara Ward and youth along the Mai Mahiu transit corridor, his connection to Naivasha comes from being present on the ground.
              </p>
              <p>
                Naivasha is a diverse constituency — home to flower farm workers, fishermen along Lake Naivasha, geothermal energy communities in Olkaria, logistics hubs in Mai Mahiu, and growing trading centers. J.M. Gitau&apos;s commitment is simple: listening first, focusing on the basics, and ensuring every ward is represented fairly.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-[#00C853] font-bold">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-slate-900">Fair Representation</h3>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Transparent bursary distribution and fair resource allocation for all students across all wards.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-[#8B4513] font-bold">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-slate-900">Community Focus</h3>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Direct support for youth skills, local trader groups, water points, and rural access roads.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/agenda"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00C853] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#00C853]/20 hover:bg-[#00E676] hover:text-slate-950 transition-all"
              >
                Read the agenda <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/updates"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:border-[#00C853] hover:text-[#00C853] shadow-xs transition-all"
              >
                See ground record
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
