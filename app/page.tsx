import type { Metadata } from 'next';
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
import { BrushUnderline, PaintSplashBackground, EarthPaintStroke, SideBrushLeft, SideBrushRight } from '@/components/BrushAccent';
import { getBaseUrl, getAbsoluteUrl } from '@/lib/seo';

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'J.M. Gitau — Action-Driven Leadership for Naivasha 2027',
  description: 'Official digital platform for J.M. Gitau, candidate for Naivasha Constituency MP 2027 under Democracy for the Citizens Party (DCP - Skiza Wakenya). Explore our manifesto, ward profiles, and ground campaign updates.',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'J.M. Gitau — Action-Driven Leadership for Naivasha 2027',
    description: 'Empowering Naivasha Constituency through community action, water access, TVET bursaries, and youth empowerment under DCP.',
    url: baseUrl,
    siteName: 'J.M. Gitau Naivasha 2027',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: getAbsoluteUrl('/jm-gitau-hero-banner.jpg'),
        width: 1024,
        height: 682,
        alt: 'J.M. Gitau Naivasha MP Candidate 2027',
        type: 'image/jpeg',
      },
      {
        url: getAbsoluteUrl('/api/og?title=J.M.+Gitau+2027&subtitle=Action-Driven+Leadership+for+Naivasha+Constituency'),
        width: 1200,
        height: 630,
        alt: 'J.M. Gitau Campaign Banner',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J.M. Gitau — Action-Driven Leadership for Naivasha 2027',
    description: 'Empowering Naivasha Constituency through community action, water access, TVET bursaries, and youth empowerment.',
    images: [{
      url: getAbsoluteUrl('/jm-gitau-hero-banner.jpg'),
      alt: 'J.M. Gitau Naivasha MP Candidate 2027',
    }],
  },
};

const PILLAR_ICONS: Record<string, any> = {
  GraduationCap,
  Droplets,
  Users,
  HeartPulse
};

export default function Home() {
  const featuredPosts = CAMPAIGN_POSTS.slice(0, 6);

  return (
    <div className="space-y-0 bg-[#F8FAFC] relative overflow-hidden">
      {/* Global Background Splash Watermark */}
      <PaintSplashBackground className="absolute top-20 -left-20 w-[600px] h-[600px] text-[#00C853]/4 pointer-events-none z-0" />
      <PaintSplashBackground className="absolute top-[35%] -right-20 w-[600px] h-[600px] text-[#8B4513]/4 pointer-events-none z-0" />
      <PaintSplashBackground className="absolute bottom-[10%] -left-20 w-[600px] h-[600px] text-[#00C853]/4 pointer-events-none z-0" />
      
      {/* 1. HERO SECTION — DESKTOP CANVAS & BESPOKE MOBILE STACKING BANNER */}
      <section className="relative bg-white text-slate-900 border-b border-slate-200 overflow-hidden">
        
        {/* MOBILE BESPOKE HERO BANNER (Visible on sm:hidden viewports) */}
        <div className="block sm:hidden bg-white text-slate-900 border-b border-slate-200">
          <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
            <Image
              src="/custom-hero-fitted.jpg"
              alt="J.M. Gitau - Naivasha 2027"
              fill
              priority
              className="object-cover object-[85%_10%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            
            {/* Top DCP Party Eyebrow Badge */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-extrabold text-[#00C853] shadow-md">
                <div className="relative h-4 w-16">
                  <Image
                    src="/dcp-official-party-logo.png"
                    alt="DCP Logo"
                    fill
                    priority
                    className="object-contain object-left"
                  />
                </div>
                <span>· NAIVASHA 2027</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block rounded-md bg-[#00C853] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-xs">
                OFFICIAL CAMPAIGN PLATFORM
              </span>
            </div>
          </div>

          <div className="p-6 space-y-5 bg-white">
            <div className="space-y-2">
              <h1 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Built on the ground.
              </h1>
              <p className="text-base font-bold text-[#00C853] tracking-tight">
                Listening to Naivasha. Thinking beyond today.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                A living record of conversations, places, and priorities shaping J.M. Gitau&apos;s journey in Naivasha.
              </p>
            </div>

            {/* 48px Full-Width Stacked Touch CTA Buttons */}
            <div className="space-y-3 pt-1">
              <a
                href="#journey"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#00C853] min-h-[48px] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#00C853]/25 active:scale-[0.98] transition-all"
              >
                <span>Explore the Journey</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              
              <a
                href="https://wa.me/254700000000?text=Hello%20Hon.%20J.M.%20Gitau%2C%20I%20am%20a%20resident%20of%20Naivasha..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 min-h-[48px] px-6 py-3.5 text-sm font-bold text-slate-800 active:scale-[0.98] transition-all"
              >
                <span>Direct WhatsApp J.M. Gitau</span>
              </a>
            </div>

            {/* Mobile 3-Stat Horizontal Swipe Card */}
            <div className="flex gap-3 overflow-x-auto pt-4 pb-2 no-scrollbar border-t border-slate-200">
              <div className="min-w-[130px] rounded-xl bg-slate-50 border border-slate-200 p-3 shrink-0">
                <div className="text-lg font-black text-[#00C853]">8 Wards</div>
                <div className="text-[10px] font-semibold text-slate-500">Naivasha Constituency</div>
              </div>
              <div className="min-w-[130px] rounded-xl bg-slate-50 border border-slate-200 p-3 shrink-0">
                <div className="text-lg font-black text-slate-900">DCP Ticket</div>
                <div className="text-[10px] font-semibold text-slate-500">Skiza Wakenya</div>
              </div>
              <div className="min-w-[130px] rounded-xl bg-slate-50 border border-slate-200 p-3 shrink-0">
                <div className="text-lg font-black text-[#00C853]">58+ Media</div>
                <div className="text-[10px] font-semibold text-slate-500">Ground Engagements</div>
              </div>
            </div>

          </div>
        </div>

        {/* DESKTOP HERO CANVAS (Visible on sm+ viewports) */}
        <div className="hidden sm:flex relative overflow-hidden min-h-[580px] lg:min-h-[660px] items-center">
          <SideBrushRight className="absolute -right-10 top-16 w-44 h-[650px] pointer-events-none z-0 hidden lg:block opacity-85" />
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/custom-hero-fitted.jpg"
              alt="J.M. Gitau - Naivasha 2027"
              fill
              priority
              className="object-cover object-[85%_15%] lg:object-[82%_12%]"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24 w-full">
            <div className="max-w-xl lg:max-w-2xl space-y-7">
              
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

              <div>
                <h1 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.12]">
                  Built on the ground.
                </h1>
                <BrushUnderline className="w-48 h-3 text-[#00C853] mt-1.5" />
              </div>

              <div className="space-y-2 max-w-xl">
                <p className="text-lg sm:text-xl font-bold text-[#00C853] tracking-tight">
                  Listening to Naivasha. Thinking beyond today.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                  A record of the people, places, conversations and ideas shaping J.M. Gitau&apos;s journey in Naivasha.
                </p>
              </div>

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

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/80 max-w-lg">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#00C853]">8 Wards</div>
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
            
            <div className="flex flex-col items-center">
              <h2 className="font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl leading-tight">
                Before the politics, there is the person.
              </h2>
              <BrushUnderline className="w-44 h-3 text-[#00C853] mt-2" />
            </div>

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

      {/* 4. THE AGENDA — THE WORK AHEAD (EDITORIAL HORIZONTAL FEATURE ROWS) */}
      <section className="py-16 lg:py-24 bg-slate-100/70 border-b border-slate-200 relative overflow-hidden">
        <SideBrushLeft className="absolute -left-10 top-24 w-44 h-[650px] pointer-events-none z-0 hidden lg:block opacity-85" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-[#00C853] uppercase">THE MANIFESTO & POLICIES</span>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl mt-1 tracking-tight">
                The work ahead.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium mt-2 max-w-2xl">
                Key priorities and policy frameworks set out by J.M. Gitau — connecting manifesto goals directly to everyday ground realities in Naivasha.
              </p>
            </div>
            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-bold text-white hover:bg-[#00C853] hover:text-slate-950 transition-all shadow-md"
            >
              Explore Full Agenda Document <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Horizontal Feature Rows */}
          <div className="space-y-16">
            {AGENDA_PILLARS.map((pillar, idx) => {
              const isEven = idx % 2 === 0;
              const asset = pillar.image;

              return (
                <div
                  key={pillar.id}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Visual Media Column */}
                    <div className={`lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[320px] bg-slate-900 overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      {asset ? (
                        <Image
                          src={`/${asset}`}
                          alt={pillar.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-slate-400 text-sm font-mono">
                          Ground Field Photo ({pillar.title})
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
                      
                      {/* Floating Pillar Number Badge */}
                      <div className="absolute top-4 left-4 rounded-xl bg-slate-900/90 backdrop-blur-md px-4 py-2 border border-slate-700 text-white font-mono text-sm font-black shadow-md">
                        PILLAR 0{idx + 1}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                        <span className="text-xs font-bold text-[#00E676] bg-black/60 backdrop-blur-xs px-3 py-1 rounded-md">
                          {pillar.tagline}
                        </span>
                      </div>
                    </div>

                    {/* Editorial Content Column */}
                    <div className={`lg:col-span-6 p-8 lg:p-12 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-sm font-black text-[#00C853] bg-[#00C853]/10 px-3 py-1 rounded-lg border border-[#00C853]/20">
                            0{idx + 1}
                          </span>
                          <span className="text-xs font-extrabold uppercase tracking-widest text-[#8B4513]">
                            CONSTITUENCY PRIORITY
                          </span>
                        </div>
                        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                          {pillar.title}
                        </h3>
                        <p className="text-sm font-bold text-[#00C853] tracking-tight">
                          &ldquo;{pillar.tagline}&rdquo;
                        </p>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        {pillar.description}
                      </p>

                      <div className="space-y-3 pt-4 border-t border-slate-100">
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                          Key Deliverables & Action Plan:
                        </h4>
                        <ul className="space-y-2.5">
                          {pillar.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00C853]/15 text-[#00C853] font-bold text-[11px] mt-0.5">
                                ✓
                              </span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <Link
                          href={`/agenda#${pillar.slug}`}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#00C853] hover:text-[#00E676] group"
                        >
                          <span>Read full policy framework</span>
                          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>

                    </div>

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
