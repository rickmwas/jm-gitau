'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, ThumbsUp, MessageSquare, Share2, ExternalLink, Filter } from 'lucide-react';
import { CAMPAIGN_POSTS, CampaignPost } from '@/lib/campaignData';

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

  const filteredPosts = CAMPAIGN_POSTS.filter((post) => {
    const matchesCat = selectedCategory === 'ALL' || post.category === selectedCategory;
    const matchesSearch = !searchQuery || post.message.toLowerCase().includes(searchQuery.toLowerCase()) || post.date.includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-12 py-12">
      
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">FIELD REPORTS</span>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Campaign Updates</h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Verified updates, photos, and news from J.M. Gitau&apos;s community visits across Naivasha.
          </p>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
          
          <input
            type="text"
            placeholder="Search updates by keyword or date..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-80 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Posts Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            No updates match your selected filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => {
              const hasAsset = post.assets && post.assets.length > 0;
              return (
                <article
                  key={post.post_id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition-all hover:border-slate-700"
                >
                  {/* Photo */}
                  <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                    {hasAsset ? (
                      <Image
                        src={`/${post.assets[0].paths.web}`}
                        alt={post.category}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-slate-600 text-xs">
                        Statement Post
                      </div>
                    )}
                    <span className="absolute top-3 left-3 rounded-md border border-blue-500/30 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-blue-400">
                      {post.category}
                    </span>
                    {post.assets.length > 1 && (
                      <span className="absolute bottom-3 right-3 rounded-md bg-slate-950/80 px-2 py-0.5 text-[11px] text-white">
                        📷 {post.assets.length} photos
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Calendar className="h-3.5 w-3.5 text-blue-400" />
                        <span>{post.date}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                        {post.message}
                      </p>
                    </div>

                    {/* Engagement */}
                    <div className="flex items-center justify-between border-t border-slate-800/80 pt-3 text-xs text-slate-400">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="h-3.5 w-3.5 text-blue-400" /> {post.engagement.reactions}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-3.5 w-3.5" /> {post.engagement.comments}
                        </span>
                        <span className="flex items-center gap-1">
                          <Share2 className="h-3.5 w-3.5" /> {post.engagement.shares}
                        </span>
                      </div>
                      {post.post_url && (
                        <a
                          href={post.post_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-400 hover:underline inline-flex items-center gap-1"
                        >
                          View on FB <ExternalLink className="h-3 w-3" />
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

    </div>
  );
}
