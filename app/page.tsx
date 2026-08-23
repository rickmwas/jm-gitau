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
  Camera,
  Sparkles
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
  const heroPost = CAMPAIGN_POSTS[0];
  const heroImage = heroPost?.assets[0]?.paths.web || 'assets/web/images/2026-08-19_1563591385781111_01.webp';

  return (
    <div className="space-y-0 bg-[#F8FAFC]">
      
      {/* 1. EXECUTIVE EDITORIAL HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-slate-50 text-slate-900 pt-8 pb-20 lg:pt-16 lg:pb-32 border-b border-slate-200">
        
        {/* Subtle Background Gradients */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00C853]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#8B4513]/08 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Column Narrative */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Official Party Badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-50 px-4 py-2 text-xs font-bold text-[#00C853] shadow-xs">
                <div className="relative h-6 w-24 sm:w-28">
                  <Image
                    src="/dcp-official-party-logo.png"
                    alt="Official DCP Logo"
                    fill
                    priority
                    className="object-contain object-left"
                  />
                </div>
                <span className="h-3 w-px bg-emerald-500/40" />
                <span className="tracking-wider uppercase text-[11px] font-black text-[#00C853]">
                  SKIZA WAKENYA • NAIVASHA 2027
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.12]">
                Action-Driven Leadership <br className="hidden sm:inline" />
                <span className="text-[#00C853]">Built On The Ground.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
                J.M. Gitau&apos;s digital platform & public record of community engagement, ideas, and developmental vision for all 7 Wards of Naivasha Constituency under the Democracy for the Citizens Party (DCP).
              </p>

              {/* Primary Call to Actions */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#journey"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#00C853] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#00C853]/20 hover:bg-[#00E676] hover:text-slate-950 transition-all hover:scale-[1.02]"
                >
                  Explore The Journey <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/agenda"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 hover:border-[#00C853] hover:text-[#00C853] shadow-xs transition-all"
                >
                  Read Manifesto
                </Link>
              </div>

              {/* Key Constituency Facts */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#00C853]">7 Wards</div>
                  <div className="text-xs font-medium text-slate-500">Naivasha Constituency</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900">DCP Ticket</div>
                  <div className="text-xs font-medium text-slate-500">Skiza Wakenya</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#8B4513]">58+ Media</div>
                  <div className="text-xs font-medium text-slate-500">Ground Engagements</div>
                </div>
              </div>
            </div>

            {/* Right Column Authentic Photograph Composition */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={`/${heroImage}`}
                    alt="J.M. Gitau Community Engagement in Naivasha"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Photo Overlay Tag */}
                  <span className="absolute top-3 left-3 rounded-md bg-[#00C853] px-2.5 py-1 text-[11px] font-bold text-white shadow-md">
                    Authentic Campaign Record
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md space-y-1">
                    <div className="flex items-center justify-between text-xs text-slate-600 font-semibold">
                      <span className="inline-flex items-center gap-1 text-[#00C853]">
                        <MapPin className="h-3.5 w-3.5" /> Naivasha Constituency
                      </span>
                      <span className="text-slate-500">{heroPost?.date}</span>
                    </div>
                    <p className="text-xs text-slate-800 font-medium line-clamp-2 leading-relaxed">
                      {heroPost?.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SIGNATURE HOMEPAGE EXPERIENCE: NAIVASHA THROUGH THE JOURNEY */}
      <div id="journey">
        <JourneyScroll />
      </div>

      {/* 3. CANDIDATE LEADERSHIP STATEMENT */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-4 py-1.5 text-xs font-bold text-[#8B4513] uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4 text-[#00C853]" />
              <span>THE LEADERSHIP PHILOSOPHY</span>
            </div>
            
            <blockquote className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl leading-tight">
              &ldquo;Public service requires listening first. Leadership is not exercised from distant offices — it is forged on the ground alongside the people of Naivasha.&rdquo;
            </blockquote>

            <div className="flex items-center justify-center gap-3 pt-2">
              <span className="text-sm font-extrabold text-slate-900">J.M. Gitau</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#00C853]" />
              <span className="text-xs text-[#00C853] font-bold">Naivasha MP Candidate 2027 (DCP)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL MANIFESTO PILLARS */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-[#00C853] uppercase">ACTION PLAN</span>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl mt-1">
                Developmental Blueprint for Naivasha
              </h2>
            </div>
            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#00C853] hover:text-[#00E676]"
            >
              Explore Full Manifesto <ArrowRight className="h-4 w-4" />
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
                    <p className="text-xs font-semibold text-[#8B4513]">
                      {pillar.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">Key Objectives:</h4>
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
                      Read Pillar Strategy <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. AUTHENTIC FIELD ENGAGEMENTS ARCHIVE */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-10 border-b border-slate-200">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-[#00C853] uppercase">COMMUNITY ARCHIVE</span>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900 mt-1">
                Latest Ground Engagements
              </h2>
            </div>
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#00C853] hover:text-[#00E676]"
            >
              View All 20 Field Reports <ArrowRight className="h-4 w-4" />
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
                        Official Statement
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
                      <span>View Field Record</span>
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
