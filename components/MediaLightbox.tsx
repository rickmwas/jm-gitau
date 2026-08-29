'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Calendar, Tag, ThumbsUp, MessageSquare } from 'lucide-react';
import { CampaignPost } from '@/lib/campaignData';

interface MediaLightboxProps {
  post: CampaignPost | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function MediaLightbox({ post, isOpen, onClose, onPrev, onNext }: MediaLightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !post) return null;

  const imagePath = post.assets?.[0]?.paths?.web || post.assets?.[0]?.paths?.raw;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Horizontal Swipe (Next / Prev)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 45) {
      if (deltaX < 0 && onNext) {
        onNext(); // Swiped left -> next
      } else if (deltaX > 0 && onPrev) {
        onPrev(); // Swiped right -> prev
      }
    } else if (deltaY > 90) {
      // Swiped down -> close
      onClose();
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 backdrop-blur-md p-2 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative flex flex-col lg:flex-row w-full max-w-6xl max-h-[92vh] sm:max-h-[90vh] bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all border border-slate-200 shadow-sm"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Media Container */}
        <div className="relative flex-1 bg-slate-950 min-h-[300px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
          {imagePath ? (
            <Image
              src={`/${imagePath}`}
              alt={post.category || 'Campaign photo'}
              fill
              className="object-contain p-2"
              priority
            />
          ) : (
            <div className="text-slate-400 text-sm">No photo asset available</div>
          )}

          {/* Previous / Next Controls */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 text-slate-800 hover:bg-[#00C853] hover:text-white transition-all border border-slate-200 shadow-md"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 text-slate-800 hover:bg-[#00C853] hover:text-white transition-all border border-slate-200 shadow-md"
              aria-label="Next photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Info Panel */}
        <div className="w-full lg:w-96 p-6 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-slate-200 space-y-4 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#00C853] bg-[#00C853]/10 px-2.5 py-1 rounded-md border border-[#00C853]/30">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                <Calendar className="h-3 w-3 text-[#00C853]" />
                {post.date}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Campaign Photo Record
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium whitespace-pre-line max-h-60 overflow-y-auto pr-1">
                {post.message}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-semibold">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-[#00C853]">
                <ThumbsUp className="h-3.5 w-3.5" /> {post.engagement.reactions}
              </span>
              <span className="flex items-center gap-1 text-slate-600">
                <MessageSquare className="h-3.5 w-3.5" /> {post.engagement.comments}
              </span>
            </div>
            {post.post_url && (
              <a
                href={post.post_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#00C853] font-bold hover:underline"
              >
                View on Facebook
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
