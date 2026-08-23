'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Camera, Calendar, Tag, Eye, Filter } from 'lucide-react';
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

interface GalleryItem {
  asset_id: string;
  webPath: string;
  category: string;
  date: string;
  post: CampaignPost;
}

export default function MediaPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Extract all 58 individual WebP assets into a flat gallery index
  const galleryItems = useMemo(() => {
    const items: GalleryItem[] = [];
    CAMPAIGN_POSTS.forEach((post) => {
      post.assets.forEach((asset) => {
        if (asset.paths.web) {
          items.push({
            asset_id: asset.asset_id,
            webPath: asset.paths.web,
            category: post.category,
            date: post.date,
            post
          });
        }
      });
    });
    return items;
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'ALL') return galleryItems;
    return galleryItems.filter(item => item.category === selectedCategory);
  }, [galleryItems, selectedCategory]);

  const activeIndex = activeItem ? filteredItems.findIndex(i => i.asset_id === activeItem.asset_id) : -1;

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveItem(filteredItems[activeIndex - 1]);
    }
  };

  const handleNext = () => {
    if (activeIndex < filteredItems.length - 1) {
      setActiveItem(filteredItems[activeIndex + 1]);
    }
  };

  return (
    <div className="space-y-12 pb-20 bg-[#F8FAFC]">
      
      {/* HERO BANNER */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="dcp-badge mx-auto">
            <span className="h-2 w-2 rounded-full bg-[#00C853]" />
            <span>AUTHENTIC MEDIA ARCHIVE</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Campaign <span className="text-[#00C853]">Photo Gallery</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Discover {galleryItems.length} web-optimized photo records of J.M. Gitau&apos;s community engagements, church services, town halls, and ward visits across Naivasha.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
            <Filter className="h-4 w-4 text-[#00C853]" />
            <span>Filter Category:</span>
          </div>

          <div className="flex flex-wrap gap-2">
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
                {cat} {cat === 'ALL' ? `(${galleryItems.length})` : ''}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY MASONRY/GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 text-slate-500 font-semibold text-sm">
            No photos found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {filteredItems.map((item) => (
              <div
                key={item.asset_id}
                onClick={() => setActiveItem(item)}
                className="group relative cursor-pointer aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 border border-slate-200 shadow-xs hover:shadow-xl transition-all"
              >
                <Image
                  src={`/${item.webPath}`}
                  alt={item.category}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between">
                  <span className="self-start rounded-md bg-[#00C853] px-2 py-0.5 text-[10px] font-bold text-white shadow-xs">
                    {item.category}
                  </span>
                  <div className="flex items-center justify-between text-[11px] text-slate-200 font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-[#00C853]" /> {item.date}
                    </span>
                    <Eye className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* LIGHTBOX PREVIEW */}
      <MediaLightbox
        post={activeItem?.post || null}
        isOpen={!!activeItem}
        onClose={() => setActiveItem(null)}
        onPrev={activeIndex > 0 ? handlePrev : undefined}
        onNext={activeIndex < filteredItems.length - 1 ? handleNext : undefined}
      />

    </div>
  );
}
