import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  GraduationCap, 
  Droplets, 
  Users, 
  HeartPulse, 
  ChevronRight,
  MapPin,
  Calendar,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { CAMPAIGN_POSTS, AGENDA_PILLARS, SITE } from '@/lib/campaignData';
import JourneyScroll from '@/components/JourneyScroll';

const PILLAR_ICONS: Record<string, any> = {
  GraduationCap,
  Droplets,
  Users,
  HeartPulse
};

export default function Home() {
  const featuredPosts = CAMPAIGN_POSTS.slice(0, 6);

  return (
    <div className="space-y-0 bg-[#F8FAFC]">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white text-slate-900 min-h-[500px] lg:min-h-[560px] flex items-center border-b border-slate-200">
        
        {/* Full Wide Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/jm-gitau-hero-banner.jpg"
            alt="J.M. Gitau - Naivasha 2027"
            fill
            priority
            className="object-contain object-right"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
          <div className="max-w-xl lg:max-w-2xl space-y-6">
            
            {/* Candidate & Campaign Eyebrow */}
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/95 backdrop-blur-xs px-4 py-2 text-xs font-bold text-slate-800 shadow-xs">
              <div className="relative h-5 w-20 sm:w-24">
                <Image
                  src="/dcp-official-party-logo.png"
                  alt="DCP Logo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
              <span className="h-3 w-px bg-slate-300" />
              <span className="tracking-wider uppercase text-[11px] font-extrabold text-[#00C853]">
                J.M. GITAU · NAIVASHA · 2027
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.12]">
              Built on the ground.
            </h1>

            {/* Subtitle & Body */}
            <div className="space-y-2 max-w-xl">
              <p className="text-lg sm:text-xl font-bold text-[#00C853] tracking-tight">
                Listening to Naivasha. Thinking beyond today.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                A record of the people, places, conversations and ideas shaping J.M. Gitau&apos;s journey in Naivasha.
              </p>
            </div>

            {/* Primary Call to Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#journey"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00C853] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#00C853]/20 hover:bg-[#00E676] hover:text-slate-950 transition-all hover:scale-[1.02]"
              >
                Explore the journey <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/agenda"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 hover:border-[#00C853] hover:text-[#00C853] shadow-xs transition-all"
              >
                Read the agenda
              </Link>
            </div>

            {/* Key Constituency Microcopy */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/80 max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#00C853]">7 Wards</div>
                <div className="text-xs font-semibold text-slate-500">Naivasha Constituency</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">DCP Ticket</div>
                <div className="text-xs font-semibold text-slate-500">Skiza Wakenya</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#8B4513]">58+ Media</div>
                <div className="text-xs font-semibold text-slate-500">Ground Engagements</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SIGNATURE HOMEPAGE EXPERIENCE: NAIVASHA THROUGH THE JOURNEY */}
      <div id="journey">
        <JourneyScroll />
      </div>

      {/* 3. THE STORY / ABOUT INTRO */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-4 py-1.5 text-xs font-extrabold text-[#00C853] uppercase tracking-wider">
              <UserCheck className="h-4 w-4 text-[#00C853]" />
              <span>THE STORY</span>
            </div>
            
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl leading-tight">
              Before the politics, there is the person.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              J.M. Gitau&apos;s story is connected to the people and places that make Naivasha home — rooted in community work, local conversations, and everyday realities.
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#00C853] hover:text-[#00E676] transition-colors"
              >
                Read his story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE AGENDA */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-[#00C853] uppercase">THE AGENDA</span>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl mt-1">
                The work ahead.
              </h2>
              <p className="text-sm text-slate-500 font-medium mt-1">
                The priorities and ideas set out by J.M. Gitau for Naivasha.
              </p>
            </div>
            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#00C853] hover:text-[#00E676]"
            >
              Explore the agenda <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {AGENDA_PILLARS.map((pillar, idx) => {
              const IconComp = PILLAR_ICONS[pillar.icon] || GraduationCap;
              return (
                <div
                  key={pillar.id}
                  className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6 shadow-xs hover:border-[#00C853]/60 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-200 text-[#00C853]">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">0{idx + 1}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-bold text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="text-sm font-bold text-[#8B4513]">
                      {pillar.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">Focus Areas:</h4>
                    <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                      {pillar.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#00C853] mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/agenda#${pillar.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00C853] hover:text-[#00E676]"
                    >
                      Read policy details <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. FROM THE GROUND */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-10 border-b border-slate-200">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-[#00C853] uppercase">FROM THE GROUND</span>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900 mt-1">
                Where the conversation is happening.
              </h2>
              <p className="text-sm text-slate-500 font-medium mt-1">
                Moments from across Naivasha — meetings, visits, conversations and community life.
              </p>
            </div>
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#00C853] hover:text-[#00E676]"
            >
              See the full record <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredPosts.map((post) => {
              const asset = post.assets?.[0]?.paths.web;
              return (
                <article
                  key={post.post_id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    {asset ? (
                      <Image
                        src={`/${asset}`}
                        alt={post.category}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-slate-400 text-xs">
                        Field Update
                      </div>
                    )}
                    <span className="absolute top-3 left-3 rounded-md bg-[#00C853] px-2.5 py-1 text-[11px] font-bold text-white shadow-xs">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <Calendar className="h-3.5 w-3.5 text-[#00C853]" />
                        <span>{post.date}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed line-clamp-3">
                        {post.message}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00C853]">
                      <span>Read the story</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
