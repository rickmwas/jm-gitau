'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, ArrowRight, MessageSquare, ThumbsUp, ChevronRight, Compass } from 'lucide-react';
import { CAMPAIGN_POSTS, CampaignPost } from '@/lib/campaignData';

interface JourneyLocation {
  id: string;
  name: string;
  ward: string;
  tagline: string;
  post: CampaignPost;
  issue: string;
  agendaLink: string;
}

// Select representative authentic campaign moments per ward
const JOURNEY_LOCATIONS: JourneyLocation[] = [
  {
    id: 'maiela',
    name: 'Sero Moi Ndabi',
    ward: 'Maiela Ward',
    tagline: 'A conversation is where many journeys begin.',
    post: CAMPAIGN_POSTS.find(p => p.post_id === '1563591385781111') || CAMPAIGN_POSTS[0],
    issue: 'Water supply, agricultural feeder roads, and rural community support',
    agendaLink: '/agenda#water-infrastructure'
  },
  {
    id: 'mai-mahiu',
    name: 'Mai Mahiu Gateway',
    ward: 'Mai Mahiu Ward',
    tagline: 'The places are familiar. The conversations are different.',
    post: CAMPAIGN_POSTS.find(p => p.post_id === '1558895482917368') || CAMPAIGN_POSTS[1],
    issue: 'Logistics opportunities, flood control drainage, and market security',
    agendaLink: '/agenda#youth-women-empowerment'
  },
  {
    id: 'lakeview',
    name: 'Lakeside Communities',
    ward: 'Lakeview Ward',
    tagline: 'Listening to fishermen, families, and lakeside traders.',
    post: CAMPAIGN_POSTS.find(p => p.post_id === '1554701720003411') || CAMPAIGN_POSTS[2],
    issue: 'Lakeside livelihoods, primary school infrastructure, and bursary access',
    agendaLink: '/agenda#education-bursaries'
  },
  {
    id: 'biashara',
    name: 'Naivasha Town Center',
    ward: 'Biashara Ward',
    tagline: 'Everyday realities shaping life in Biashara Ward.',
    post: CAMPAIGN_POSTS.find(p => p.post_id === '1553515230122060') || CAMPAIGN_POSTS[3],
    issue: 'Market shed modernization, street lighting, and business environment',
    agendaLink: '/agenda#youth-women-empowerment'
  },
  {
    id: 'olkaria',
    name: 'Geothermal Corridor',
    ward: 'Olkaria Ward',
    tagline: 'Looking ahead across Olkaria and surrounding communities.',
    post: CAMPAIGN_POSTS.find(p => p.post_id === '1552581446882105') || CAMPAIGN_POSTS[4],
    issue: 'Vocational training, local community benefits, and healthcare access',
    agendaLink: '/agenda#education-bursaries'
  }
];

export default function JourneyScroll() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeLocation = JOURNEY_LOCATIONS[activeIdx];
  const mainAsset = activeLocation.post.assets?.[0]?.paths.web;

  return (
    <section className="relative bg-slate-50 text-slate-900 py-16 lg:py-24 overflow-hidden border-y border-slate-200">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C853]/08 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B4513]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00C853]/10 border border-[#00C853]/30 px-3.5 py-1 text-xs font-extrabold text-[#00C853] uppercase tracking-wider mb-3">
              <Compass className="h-3.5 w-3.5" />
              <span>THE JOURNEY</span>
            </div>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl tracking-tight">
              Naivasha, through the journey.
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl font-medium">
              From one conversation to the next, the story takes shape on the ground.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:border-[#00C853] hover:text-[#00C853] shadow-xs transition-all"
            >
              See full record <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Location Selection Bar */}
        <div className="flex gap-3 overflow-x-auto py-6 no-scrollbar border-b border-slate-200">
          {JOURNEY_LOCATIONS.map((loc, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-[#00C853] text-white border-[#00C853] shadow-md shadow-[#00C853]/20 scale-[1.02]'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900 shadow-2xs'
                }`}
              >
                <MapPin className={`h-3.5 w-3.5 ${isActive ? 'text-white' : 'text-[#00C853]'}`} />
                <span>{loc.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-md ${isActive ? 'bg-black/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {loc.ward}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Story Showcase */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
          
          {/* Main Visual Photo Display */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              {mainAsset && (
                <Image
                  src={`/${mainAsset}`}
                  alt={`${activeLocation.name} - ${activeLocation.ward}`}
                  fill
                  className="object-cover transition-all duration-700 hover:scale-105"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              {/* Photo Overlay Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-[#00C853] px-3 py-1 text-xs font-black text-white shadow-md">
                  {activeLocation.ward}
                </span>
                <span className="rounded-lg bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-slate-800 border border-slate-200 shadow-xs">
                  <Calendar className="inline h-3 w-3 text-[#00C853] mr-1" />
                  {activeLocation.post.date}
                </span>
              </div>

              {/* Bottom Image Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md space-y-1">
                <p className="text-xs text-slate-800 line-clamp-2 leading-relaxed font-medium">
                  {activeLocation.post.message}
                </p>
                <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-1 font-semibold">
                  <span className="flex items-center gap-1 text-[#00C853]">
                    <ThumbsUp className="h-3 w-3" /> {activeLocation.post.engagement.reactions} reactions
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" /> {activeLocation.post.engagement.comments} comments
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contextual Storytelling Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-black text-[#8B4513] uppercase tracking-wider">
                GROUND CONVERSATION & AGENDA
              </span>
              <h3 className="font-heading text-2xl font-bold text-slate-900 leading-tight">
                {activeLocation.tagline}
              </h3>
            </div>

            {/* Key Community Issue */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00C853] uppercase">
                <MapPin className="h-4 w-4" />
                <span>Key Focus Issue ({activeLocation.ward})</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {activeLocation.issue}
              </p>
            </div>

            {/* Candidate Position & Agenda Commitment */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">J.M. Gitau Commitment:</h4>
              <blockquote className="text-sm text-slate-700 italic leading-relaxed border-l-2 border-[#00C853] pl-4 py-1 font-medium">
                &ldquo;Every ward in Naivasha deserves direct representation, equal funding, and visible development projects on the ground.&rdquo;
              </blockquote>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={activeLocation.agendaLink}
                className="inline-flex items-center gap-2 rounded-xl bg-[#00C853] px-5 py-3 text-xs font-bold text-white shadow-md shadow-[#00C853]/20 hover:bg-[#00E676] hover:text-slate-950 transition-all"
              >
                View Ward Agenda <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/naivasha#${activeLocation.id}`}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-xs transition-all"
              >
                Explore {activeLocation.ward} Profile
              </Link>
            </div>

            {/* Interactive Progress Indicator */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs text-slate-400 font-mono">
              <span>LOCATION 0{activeIdx + 1} OF 0{JOURNEY_LOCATIONS.length}</span>
              <div className="flex items-center gap-1.5">
                {JOURNEY_LOCATIONS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Go to location ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      activeIdx === i ? 'w-6 bg-[#00C853]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
