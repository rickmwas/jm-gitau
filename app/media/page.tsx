'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Calendar, MapPin, ExternalLink, Eye } from 'lucide-react';
import { CAMPAIGN_POSTS, CampaignPost } from '@/lib/campaignData';

export default function MediaPage() {
  const [selectedAsset, setSelectedAsset] = useState<{
    webPath: string;
    rawPath: string;
    category: string;
    date: string;
    caption: string;
    postUrl?: string;
    dimensions: { width: number; height: number };
  } | null>(null);

  // Flatten all assets
  const allAssets = CAMPAIGN_POSTS.flatMap((post) =>
    post.assets.map((asset) => ({
      assetId: asset.asset_id,
      webPath: asset.paths.web,
      rawPath: asset.paths.raw,
      category: post.category,
      date: post.date,
      caption: post.message,
      postUrl: post.post_url,
      dimensions: asset.dimensions,
    }))
  );

  return (
    <div className="space-y-12 py-12">
      
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">VISUAL ARCHIVE</span>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Photo & Media Gallery</h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            All 58 high-resolution web-optimized field photos captured across Naivasha Constituency.
          </p>
        </div>
      </section>

      {/* Media Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {allAssets.map((item) => (
            <div
              key={item.assetId}
              onClick={() => setSelectedAsset(item)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-800 bg-slate-900 cursor-pointer"
            >
              <Image
                src={`/${item.webPath}`}
                alt={item.category}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                <span className="self-start rounded bg-blue-600/80 px-2 py-0.5 text-[10px] font-semibold text-white">
                  {item.category}
                </span>
                <div className="flex items-center justify-between text-xs text-white">
                  <span>{item.date}</span>
                  <Eye className="h-4 w-4 text-blue-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Inspector */}
      {selectedAsset && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
          onClick={() => setSelectedAsset(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedAsset(null)}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/80 text-white hover:bg-slate-800"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image */}
            <div className="relative flex max-h-[60vh] items-center justify-center bg-black">
              <div className="relative h-[55vh] w-full">
                <Image
                  src={`/${selectedAsset.webPath}`}
                  alt={selectedAsset.category}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4 overflow-y-auto">
              <div className="flex items-center justify-between">
                <span className="rounded-md border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                  {selectedAsset.category}
                </span>
                <span className="text-xs text-slate-400">{selectedAsset.date}</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                {selectedAsset.caption}
              </p>
              <div className="rounded-lg bg-slate-950 p-3 font-mono text-xs text-slate-400 space-y-1">
                <div><strong className="text-blue-400">Web Asset:</strong> {selectedAsset.webPath}</div>
                <div><strong className="text-blue-400">Resolution:</strong> {selectedAsset.dimensions.width}x{selectedAsset.dimensions.height}px</div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
