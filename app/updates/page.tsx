'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Calendar, ThumbsUp, MessageSquare, Share2, ExternalLink, Search, Tag, Eye } from 'lucide-react';
import { CAMPAIGN_POSTS, CampaignPost } from '@/lib/campaignData';
import MediaLightbox from '@/components/MediaLightbox';

const CATEGORIES = [
  'ALL',
  'Church & Community',
  'Campaign Rallies',
  'Development & Projects',
  'Tributes & Condolences',
  'Press & Statements'
];

export default function UpdatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePost, setActivePost] = useState<CampaignPost | null>(null);

  const filteredPosts = useMemo(() => {
    return CAMPAIGN_POSTS.filter((post) => {
      const matchesCat = selectedCategory === 'ALL' || post.category === selectedCategory;
      const matchesSearch = !searchQuery || 
        post.message.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.date.includes(searchQuery) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeIndex = activePost ? filteredPosts.findIndex(p => p.post_id === activePost.post_id) : -1;

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActivePost(filteredPosts[activeIndex - 1]);
    }
  };

  const handleNext = () => {
    if (activeIndex < filteredPosts.length - 1) {
      setActivePost(filteredPosts[activeIndex + 1]);
    }
  };

  return (
    <div className="space-y-12 pb-20 bg-[#F8FAFC]">
      
      {/* HERO BANNER */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="dcp-badge mx-auto">
            <span className="h-2 w-2 rounded-full bg-[#00C853]" />
            <span>SKIZA GROUND • COMMUNITY RECORD</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Verified <span className="text-[#00C853]">Field Reports</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Authentic campaign updates, public engagements, and community photo records from J.M. Gitau across Naivasha under the Democracy for the Citizens Party (DCP).
          </p>
        </div>
      </section>

      {/* SEARCH & FILTER CONTROLS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search reports by keyword, date or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00C853]"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#00C853] text-white shadow-md'
                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* POSTS GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 text-slate-500 font-semibold text-sm">
            No updates match your selected filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => {
              const hasAsset = post.assets && post.assets.length > 0;
              const imagePath = post.assets[0]?.paths.web;

              return (
                <article
                  key={post.post_id}
                  onClick={() => setActivePost(post)}
                  className="cursor-pointer group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    {hasAsset ? (
                      <Image
                        src={`/${imagePath}`}
                        alt={post.category}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-slate-400 text-xs font-bold">
                        Official Statement
                      </div>
                    )}
                    <span className="absolute top-3 left-3 rounded-md bg-[#00C853] px-2.5 py-1 text-[11px] font-bold text-white shadow-xs">
                      {post.category}
                    </span>
                    {post.assets.length > 1 && (
                      <span className="absolute bottom-3 right-3 rounded-md bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 text-[11px] text-white font-medium">
                        📷 {post.assets.length} photos
                      </span>
                    )}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/90 backdrop-blur-xs px-3 py-1.5 text-xs font-bold text-slate-900 shadow-md">
                        <Eye className="h-4 w-4 text-[#00C853]" /> Inspect Record
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <Calendar className="h-3.5 w-3.5 text-[#00C853]" />
                        <span>{post.date}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed line-clamp-3">
                        {post.message}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500 font-semibold">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-[#00C853]">
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
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs text-[#8B4513] font-bold hover:underline inline-flex items-center gap-1"
                        >
                          Facebook <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* LIGHTBOX MODAL */}
      <MediaLightbox
        post={activePost}
        isOpen={!!activePost}
        onClose={() => setActivePost(null)}
        onPrev={activeIndex > 0 ? handlePrev : undefined}
        onNext={activeIndex < filteredPosts.length - 1 ? handleNext : undefined}
      />

    </div>
  );
}
