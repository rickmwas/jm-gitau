'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Camera, Calendar, Tag, Eye } from 'lucide-react';
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

export default function MediaGalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeMediaPost, setActiveMediaPost] = useState<CampaignPost | null>(null);

  // Extract all media items from campaign posts
  const mediaItems = useMemo(() => {
    return CAMPAIGN_POSTS.filter((post) => post.assets && post.assets.length > 0);
  }, []);

  const filteredMedia = useMemo(() => {
    if (selectedCategory === 'ALL') return mediaItems;
    return mediaItems.filter((post) => post.category === selectedCategory);
  }, [mediaItems, selectedCategory]);

  const activeIndex = activeMediaPost
    ? filteredMedia.findIndex((p) => p.post_id === activeMediaPost.post_id)
    : -1;

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveMediaPost(filteredMedia[activeIndex - 1]);
    }
  };

  const handleNext = () => {
    if (activeIndex < filteredMedia.length - 1) {
      setActiveMediaPost(filteredMedia[activeIndex + 1]);
    }
  };

  return (
    <div className="space-y-12 pb-20 bg-[#F8FAFC]">
      
      {/* HERO BANNER */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-xs font-extrabold text-[#00C853] uppercase tracking-wider mx-auto">
            <Camera className="h-3.5 w-3.5" />
            <span>MEDIA & PHOTO RECORD</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Captured on the ground.
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Visual highlights from townhalls, youth gatherings, market engagements, and ward visits across Naivasha Constituency.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar justify-start md:justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#00C853] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY MASONRY / GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMedia.map((post) => (
            <div
              key={post.post_id}
              onClick={() => setActiveMediaPost(post)}
              className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-200 cursor-pointer border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={`/${post.assets[0]?.paths?.web || post.assets[0]?.paths?.raw}`}
                alt={post.category}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay Gradient & Badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between">
                <div className="self-start">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[10px] font-extrabold text-slate-900 shadow-xs">
                    <Tag className="h-3 w-3 text-[#00C853]" />
                    {post.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-white text-xs font-semibold line-clamp-2 leading-snug drop-shadow-xs">
                    {post.message}
                  </p>
                  <span className="flex items-center gap-1 text-[11px] text-slate-300 font-medium">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                </div>
              </div>

              {/* View Hover Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-10 w-10 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow-md">
                  <Eye className="h-5 w-5" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <MediaLightbox
        post={activeMediaPost}
        isOpen={!!activeMediaPost}
        onClose={() => setActiveMediaPost(null)}
        onPrev={activeIndex > 0 ? handlePrev : undefined}
        onNext={activeIndex < filteredMedia.length - 1 ? handleNext : undefined}
      />

    </div>
  );
}
