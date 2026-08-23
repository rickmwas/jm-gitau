import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  GraduationCap, 
  Droplets, 
  Users, 
  HeartPulse, 
  ChevronRight,
  ThumbsUp,
  MessageSquare,
  MapPin,
  Calendar,
  ShieldCheck
} from 'lucide-react';
import { CAMPAIGN_POSTS, AGENDA_PILLARS, NAIVASHA_WARDS } from '@/lib/campaignData';

const PILLAR_ICONS: Record<string, any> = {
  GraduationCap,
  Droplets,
  Users,
  HeartPulse
};

export default function Home() {
  const latestUpdates = CAMPAIGN_POSTS.slice(0, 3);
  const featuredPost = CAMPAIGN_POSTS[0];

  return (
    <div className="space-y-16 pb-20 bg-[#F8FAFC]">
      
      {/* BESPOKE EXECUTIVE LIGHT MODE HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200 shadow-xs">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,200,83,0.08),rgba(255,255,255,0))]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Official Party Badge with User's Official DCP Logo */}
              <div className="inline-flex items-center gap-3.5 rounded-2xl border border-emerald-300 bg-emerald-50 px-4 py-2 shadow-2xs">
                <div className="relative h-8 w-28 sm:w-32">
                  <Image
                    src="/dcp-official-party-logo.png"
                    alt="Official DCP Logo"
                    fill
                    priority
                    className="object-contain object-left"
                  />
                </div>
                <span className="h-4 w-px bg-emerald-400" />
                <span className="text-xs font-black text-[#00C853] tracking-wider uppercase">
                  SKIZA WAKENYA • SKIZA GROUND
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.15]">
                Leadership Built On <span className="bg-gradient-to-r from-[#00C853] via-emerald-600 to-[#8B4513] bg-clip-text text-transparent">Action & Integrity.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
                Empowering families across all 7 Naivasha Wards through 100% transparent NG-CDF bursaries, clean water boreholes, youth TVET scholarships, and agricultural feeder roads.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/agenda"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#00C853] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#00C853]/25 hover:bg-[#00E676] hover:text-slate-950 transition-all hover:scale-[1.02]"
                >
                  Explore Manifesto <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/media"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-2xs"
                >
                  View 58 Field Photos
                </Link>
              </div>

              {/* Key Metric Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                <div>
                  <div className="text-2xl font-black text-[#00C853]">100%</div>
                  <div className="text-xs font-semibold text-slate-500">Bursary Transparency</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">7 Wards</div>
                  <div className="text-xs font-semibold text-slate-500">Naivasha Constituency</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#8B4513]">20+</div>
                  <div className="text-xs font-semibold text-slate-500">Verified Field Reports</div>
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-900">
                  {featuredPost && featuredPost.assets.length > 0 && (
                    <Image
                      src={`/${featuredPost.assets[0].paths.web}`}
                      alt="J.M. Gitau Community Engagement in Naivasha"
                      fill
                      priority
                      className="object-cover"
                    />
                  )}
                  <span className="absolute top-3 left-3 rounded-md bg-[#00C853] px-2.5 py-1 text-[11px] font-bold text-white shadow-md">
                    Verified Field Photo
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5 text-[#00C853] font-bold">
                      <MapPin className="h-3.5 w-3.5" /> Naivasha Constituency
                    </span>
                    <span className="font-semibold">{featuredPost?.date}</span>
                  </div>
                  <p className="text-xs text-slate-800 font-semibold line-clamp-2 leading-relaxed">
                    {featuredPost?.message}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LEADERSHIP PROMISE BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-300 bg-gradient-to-r from-emerald-50/90 via-white to-amber-50/60 p-8 sm:p-12 space-y-6 shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-[#00C853]" />
            <span className="text-xs font-extrabold tracking-widest text-[#00C853] uppercase">THE CANDIDATE&apos;S PROMISE</span>
          </div>
          <blockquote className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl leading-tight max-w-4xl">
            &ldquo;Constituency leadership is not executed from distant offices — it is built on the ground, listening to citizens in their own villages.&rdquo;
          </blockquote>
          <div className="flex items-center gap-3 pt-2">
            <span className="text-sm font-black text-slate-900">Hon. Jane Kihara / J.M. Gitau</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#00C853]" />
            <span className="text-xs text-[#00C853] font-bold">Naivasha MP Candidate 2027 (DCP)</span>
          </div>
        </div>
      </section>

      {/* MANIFESTO PILLARS OF ACTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-extrabold tracking-widest text-[#00C853] uppercase">OUR MANIFESTO</span>
          <h2 className="font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl">4 Pillars of Action for Naivasha</h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Targeted constituency development programs delivering real results for every household.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AGENDA_PILLARS.map((pillar, idx) => {
            const IconComp = PILLAR_ICONS[pillar.icon] || GraduationCap;
            return (
              <div
                key={pillar.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-[#00C853]/50 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-200 text-[#00C853] group-hover:bg-[#00C853] group-hover:text-white transition-all">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">0{idx + 1}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-[#00C853] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-slate-100">
                  <Link
                    href={`/agenda#${pillar.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00C853] hover:text-[#00E676]"
                  >
                    Read Details <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* LATEST FIELD REPORTS FROM SCRAPED FACEBOOK PAYLOAD */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-[#00C853] uppercase">VERIFIED FIELD DATA</span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 mt-1">Latest From The Ground</h2>
          </div>
          <Link
            href="/updates"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#00C853] hover:text-[#00E676]"
          >
            View All 20 Field Reports <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {latestUpdates.map((post) => {
            const hasAsset = post.assets && post.assets.length > 0;
            return (
              <article
                key={post.post_id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:shadow-xl hover:border-slate-300"
              >
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  {hasAsset && (
                    <Image
                      src={`/${post.assets[0].paths.web}`}
                      alt={post.category}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <span className="absolute top-3 left-3 rounded-md bg-[#00C853] px-2.5 py-1 text-[11px] font-bold text-white shadow-xs">
                    {post.category}
                  </span>
                  {post.assets.length > 1 && (
                    <span className="absolute bottom-3 right-3 rounded-md bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 text-[11px] text-white font-medium">
                      📷 {post.assets.length} photos
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <Calendar className="h-3.5 w-3.5 text-[#00C853]" />
                      <span>{post.date}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 line-clamp-3 leading-relaxed font-semibold">
                      {post.message}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-[#00C853] font-bold">
                        <ThumbsUp className="h-3.5 w-3.5" /> {post.engagement.reactions}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-3.5 w-3.5" /> {post.engagement.comments}
                      </span>
                    </div>
                    {post.post_url && (
                      <a
                        href={post.post_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#8B4513] hover:underline inline-flex items-center gap-1"
                      >
                        FB Post <ArrowRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* NAIVASHA WARDS SELECTOR */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold tracking-widest text-[#00C853] uppercase">CONSTITUENCY MAP</span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900">Serving All 7 Naivasha Wards</h2>
            <p className="text-slate-600 text-sm font-medium">
              Equal development, fair bursaries, and infrastructure projects across Naivasha.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {NAIVASHA_WARDS.map((ward) => (
              <Link
                key={ward.id}
                href={`/naivasha#${ward.slug}`}
                className="group flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-4 text-center transition-all hover:border-[#00C853] hover:bg-white hover:shadow-md"
              >
                <MapPin className="h-5 w-5 text-[#00C853] group-hover:scale-110 transition-transform mb-2" />
                <span className="font-heading text-xs font-bold text-slate-900 group-hover:text-[#00C853] transition-colors">
                  {ward.name}
                </span>
                <span className="text-[10px] text-slate-500 font-semibold mt-1">{ward.population}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#00C853] via-emerald-700 to-[#8B4513] p-8 sm:p-12 text-center text-white space-y-6 shadow-xl">
          <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
            Join the Movement for Naivasha 2027
          </h2>
          <p className="text-emerald-50 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Together, we can build a transparent, prosperous, and empowered Naivasha Constituency. Register as a campaign volunteer or share your feedback today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/get-involved"
              className="rounded-xl bg-[#8B4513] px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#653816] transition-all"
            >
              Sign Up As Volunteer
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all"
            >
              Contact Campaign Office
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
