'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, 
  Calendar, 
  ArrowRight, 
  MessageSquare, 
  ThumbsUp, 
  ChevronRight, 
  Compass,
  Share2,
  FileText
} from 'lucide-react';
import { CAMPAIGN_POSTS, CampaignPost } from '@/lib/campaignData';

interface JourneyLocation {
  id: string;
  num: string;
  name: string;
  ward: string;
  tagline: string;
  post: CampaignPost;
  issue: string;
  agendaLink: string;
}

// Representative authentic campaign moments per ward
const JOURNEY_LOCATIONS: JourneyLocation[] = [
  {
    id: 'maiela',
    num: '01',
    name: 'Sero Moi Ndabi',
    ward: 'Maiela Ward',
    tagline: 'Grassroots listening & agricultural infrastructure priorities in rural Maiela.',
    post: CAMPAIGN_POSTS.find(p => p.post_id === '1563591385781111') || CAMPAIGN_POSTS[0],
    issue: 'Clean water access, feeder road repair, and direct agricultural support',
    agendaLink: '/agenda#water-infrastructure'
  },
  {
    id: 'mai-mahiu',
    num: '02',
    name: 'Mai Mahiu Gateway',
    ward: 'Mai Mahiu Ward',
    tagline: 'Trade corridor realities, drainage management, and market security.',
    post: CAMPAIGN_POSTS.find(p => p.post_id === '1558895482917368') || CAMPAIGN_POSTS[1],
    issue: 'Logistics hub opportunities, flood drainage systems, and market security',
    agendaLink: '/agenda#youth-women-empowerment'
  },
  {
    id: 'lakeview',
    num: '03',
    name: 'Lakeside Communities',
    ward: 'Lakeview Ward',
    tagline: 'Engaging fishing communities, small-scale traders, and local families.',
    post: CAMPAIGN_POSTS.find(p => p.post_id === '1554701720003411') || CAMPAIGN_POSTS[2],
    issue: 'Sustainable lake livelihoods, primary school infrastructure, and bursary access',
    agendaLink: '/agenda#education-bursaries'
  },
  {
    id: 'biashara',
    num: '04',
    name: 'Naivasha Town Center',
    ward: 'Biashara Ward',
    tagline: 'Urban business environment, street lighting, and trader empowerment.',
    post: CAMPAIGN_POSTS.find(p => p.post_id === '1553515230122060') || CAMPAIGN_POSTS[3],
    issue: 'Modern market sheds, solar streetlights, and informal trader support',
    agendaLink: '/agenda#youth-women-empowerment'
  },
  {
    id: 'olkaria',
    num: '05',
    name: 'Geothermal Corridor',
    ward: 'Olkaria Ward',
    tagline: 'Vocational training, youth employment, and community health services.',
    post: CAMPAIGN_POSTS.find(p => p.post_id === '1552581446882105') || CAMPAIGN_POSTS[4],
    issue: 'Local hiring quotas, energy benefits for residents, and dispensaries',
    agendaLink: '/agenda#education-bursaries'
  }
];

export default function JourneyScroll() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeLocation = JOURNEY_LOCATIONS[activeIdx];
  const mainAsset = activeLocation.post.assets?.[0]?.paths.web;
  
  // Track scroll position to update active index on desktop scroll
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card, idx) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveIdx(idx);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-slate-900 text-white py-16 lg:py-24 overflow-hidden">
      
      {/* Subtle Background Lighting Accent */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00C853]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#8B4513]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Visual Documentary Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-800">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00C853]/20 border border-[#00C853]/40 px-3.5 py-1 text-xs font-extrabold text-[#00E676] uppercase tracking-widest">
              <Compass className="h-3.5 w-3.5 stroke-[2.5]" />
              <span>VISUAL DOCUMENTARY · GROUND RECORD</span>
            </div>
            <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Moving through Naivasha.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-medium leading-relaxed">
              A visual photo journal of J.M. Gitau&apos;s engagements across Naivasha — documenting real conversations, local issues, and ground realities ward by ward.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-bold text-slate-200 hover:border-[#00C853] hover:text-[#00E676] shadow-sm transition-all"
            >
              <FileText className="h-3.5 w-3.5 text-[#00C853]" />
              <span>Explore 58+ Ground Posts</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Quick Location Chapter Switcher Bar */}
        <div className="flex gap-2 overflow-x-auto py-5 no-scrollbar border-b border-slate-800/80 sticky top-16 z-30 bg-slate-900/90 backdrop-blur-md">
          {JOURNEY_LOCATIONS.map((loc, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => {
                  setActiveIdx(idx);
                  cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-[#00C853] text-slate-950 border-[#00C853] shadow-lg shadow-[#00C853]/25 font-black scale-[1.02]'
                    : 'bg-slate-800/60 text-slate-400 border-slate-700/60 hover:border-slate-500 hover:text-white'
                }`}
              >
                <span className="font-mono opacity-80">{loc.num}</span>
                <span>{loc.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-md font-semibold ${isActive ? 'bg-black/20 text-slate-950' : 'bg-slate-700/50 text-slate-300'}`}>
                  {loc.ward}
                </span>
              </button>
            );
          })}
        </div>

        {/* DESKTOP DOCUMENTARY VIEW (Sticky Frame Left + Scroll Right) */}
        <div className="hidden lg:grid grid-cols-12 gap-10 mt-10 items-start">
          
          {/* Sticky Left Frame: Massive High-Res Photo & Live Context */}
          <div className="col-span-7 sticky top-36">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950 shadow-2xl group">
              {mainAsset ? (
                <Image
                  src={`/${mainAsset}`}
                  alt={`${activeLocation.name} - ${activeLocation.ward}`}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center h-full text-slate-500 text-sm font-mono">
                  Ground Media Asset ({activeLocation.ward})
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
              
              {/* Overlay Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-[#00C853] px-3 py-1 text-xs font-black text-slate-950 shadow-md uppercase tracking-wider">
                    {activeLocation.num} · {activeLocation.ward}
                  </span>
                  <span className="rounded-lg bg-slate-900/90 backdrop-blur-md px-3 py-1 text-xs font-medium text-slate-300 border border-slate-700/70 shadow-xs flex items-center gap-1.5">
                    <Calendar className="h-3 w-3 text-[#00C853]" />
                    {activeLocation.post.date}
                  </span>
                </div>
                <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-slate-300 border border-slate-700">
                  WARD {activeIdx + 1} OF 5
                </span>
              </div>

              {/* Bottom Overlay Info & Real Engagement */}
              <div className="absolute bottom-4 left-4 right-4 p-5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-xl space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-extrabold text-[#00E676] uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {activeLocation.name} ({activeLocation.ward})
                  </h4>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                    <span className="flex items-center gap-1 text-[#00E676]">
                      <ThumbsUp className="h-3 w-3" /> {activeLocation.post.engagement.reactions}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" /> {activeLocation.post.engagement.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="h-3 w-3" /> {activeLocation.post.engagement.shares}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed font-normal italic">
                  &ldquo;{activeLocation.post.message}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Scrollable Story Chapters */}
          <div className="col-span-5 space-y-12 py-4">
            {JOURNEY_LOCATIONS.map((loc, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={loc.id}
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-800/90 border-[#00C853] shadow-xl shadow-[#00C853]/10 ring-1 ring-[#00C853]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-2xl font-black text-[#00C853]">
                      {loc.num}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {loc.ward}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {loc.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-medium mb-4">
                    {loc.tagline}
                  </p>

                  <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-3.5 space-y-1.5 mb-4">
                    <span className="text-[11px] font-extrabold text-[#00E676] uppercase tracking-wider block">
                      Ground Focus Realities:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {loc.issue}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-700/50">
                    <span className="text-[11px] font-mono text-slate-400">
                      {loc.post.date}
                    </span>
                    <Link
                      href={loc.agendaLink}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00E676] hover:underline"
                    >
                      <span>Read Ward Agenda</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* MOBILE CONTINUOUS PHOTO JOURNAL VIEW */}
        <div className="lg:hidden space-y-10 mt-8">
          {JOURNEY_LOCATIONS.map((loc) => {
            const asset = loc.post.assets?.[0]?.paths.web;
            return (
              <div
                key={loc.id}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl"
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/10] bg-slate-950">
                  {asset && (
                    <Image
                      src={`/${asset}`}
                      alt={`${loc.name} - ${loc.ward}`}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-md bg-[#00C853] px-2.5 py-1 text-xs font-black text-slate-950">
                      {loc.num} · {loc.ward}
                    </span>
                    <span className="rounded-md bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 text-[11px] font-medium text-slate-300 border border-slate-700">
                      {loc.post.date}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-[#00C853]" />
                      {loc.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-1">
                      {loc.tagline}
                    </p>
                  </div>

                  {/* Verbatim Ground Post Quote */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                    <span className="text-[10px] font-extrabold text-[#00E676] uppercase tracking-wider block">
                      Field Note Caption:
                    </span>
                    <p className="text-xs text-slate-300 italic leading-relaxed line-clamp-3">
                      &ldquo;{loc.post.message}&rdquo;
                    </p>
                  </div>

                  {/* Ground Issue */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                      Key Ward Priorities:
                    </span>
                    <p className="text-xs text-slate-300 font-medium">
                      {loc.issue}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1 text-[#00E676]">
                        <ThumbsUp className="h-3 w-3" /> {loc.post.engagement.reactions}
                      </span>
                    </div>
                    <Link
                      href={loc.agendaLink}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#00E676]"
                    >
                      <span>Explore Agenda</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
