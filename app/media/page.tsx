'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Calendar, Eye } from 'lucide-react';
import { CAMPAIGN_POSTS } from '@/lib/campaignData';

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
    <div className="space-y-12 pb-20 bg-[#F8FAFC]">
      
      {/* DCP STANDARDIZED HERO BANNER */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl mx-auto">
          <div className="dcp-badge mx-auto">
            <span className="h-2 w-2 rounded-full bg-[#00C853]" />
            <span>SKIZA GROUND • VISUAL MEDIA ARCHIVE</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Photo & <span className="dcp-gradient-heading">Media Gallery</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            All 58 high-resolution web-optimized field photos captured across Naivasha Constituency under the Democracy for the Citizens Party (DCP).
          </p>
        </div>
      </section>

      {/* MEDIA GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {allAssets.map((item) => (
            <div
              key={item.assetId}
              onClick={() => setSelectedAsset(item)}
              className="dcp-card group relative aspect-[4/3] overflow-hidden cursor-pointer shadow-sm"
            >
              <Image
                src={`/${item.webPath}`}
                alt={item.category}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3.5">
                <span className="self-start rounded-md bg-[#00C853] px-2.5 py-1 text-[10px] font-bold text-white shadow-xs">
                  {item.category}
                </span>
                <div className="flex items-center justify-between text-xs text-white font-semibold">
                  <span>{item.date}</span>
                  <Eye className="h-4 w-4 text-[#00E676]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL INSPECTOR */}
      {selectedAsset && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
          onClick={() => setSelectedAsset(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedAsset(null)}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-slate-800"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image */}
            <div className="relative flex max-h-[60vh] items-center justify-center bg-slate-950">
              <div className="relative h-[55vh] w-full">
                <Image
                  src={`/${selectedAsset.webPath}`}
                  alt={selectedAsset.category}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Modal Details */}
            <div className="p-6 space-y-4 overflow-y-auto">
              <div className="flex items-center justify-between">
                <span className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-[#00C853]">
                  {selectedAsset.category}
                </span>
                <span className="text-xs font-semibold text-slate-500">{selectedAsset.date}</span>
              </div>
              <p className="text-sm font-semibold text-slate-800 leading-relaxed whitespace-pre-line">
                {selectedAsset.caption}
              </p>
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-3.5 font-mono text-xs text-slate-600 space-y-1">
                <div><strong className="text-[#00C853]">Asset Path:</strong> {selectedAsset.webPath}</div>
                <div><strong className="text-[#00C853]">Resolution:</strong> {selectedAsset.dimensions.width}x{selectedAsset.dimensions.height}px</div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
