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

export default function UpdatesFeedClient() {
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
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-xs font-extrabold text-[#00C853] uppercase tracking-wider mx-auto">
            <span className="h-2 w-2 rounded-full bg-[#00C853]" />
            <span>FROM THE GROUND</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Where the conversation is happening.
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Read direct field records, community meetings, townhall notes, and campaign statements across all Naivasha Constituency wards.
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH CONTROL BAR */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#00C853] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search updates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#00C853]/20 focus:border-[#00C853]"
            />
          </div>

        </div>
      </section>

      {/* POSTS GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
            <p className="text-slate-500 font-medium text-sm">No campaign updates found matching your filter.</p>
            <button
              onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); }}
              className="text-xs font-bold text-[#00C853] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.post_id}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
              >
                {/* Post Image Container */}
                {post.assets && post.assets.length > 0 && (
                  <div
                    onClick={() => setActivePost(post)}
                    className="relative aspect-16/10 bg-slate-100 overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={`/${post.assets[0]?.paths?.web || post.assets[0]?.paths?.raw}`}
                      alt={post.category}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-slate-900 shadow-md">
                        <Eye className="h-3.5 w-3.5" /> View Photo
                      </span>
                    </div>
                  </div>
                )}

                {/* Post Body */}
                <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-3">
                    
                    {/* Header info */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-50 text-[#00C853] font-bold border border-emerald-100">
                        <Tag className="h-3 w-3" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500 font-medium">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                    </div>

                    {/* Message Preview */}
                    <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed line-clamp-4">
                      {post.message}
                    </p>
                  </div>

                  {/* Post Footer Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 font-semibold">
                        <ThumbsUp className="h-3.5 w-3.5 text-slate-400" />
                        {post.engagement?.reactions || 0}
                      </span>
                      <span className="flex items-center gap-1 font-semibold">
                        <MessageSquare className="h-3.5 w-3.5 text-slate-400" />
                        {post.engagement?.comments || 0}
                      </span>
                    </div>

                    {post.post_url && (
                      <a
                        href={post.post_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-[#00C853] hover:text-[#00E676] transition-colors"
                      >
                        Source <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>

                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* LIGHTBOX FOR FULL MEDIA VIEW */}
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
