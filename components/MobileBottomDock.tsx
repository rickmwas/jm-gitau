'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Compass, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronRight 
} from 'lucide-react';
import { NAIVASHA_WARDS } from '@/lib/campaignData';

export default function MobileBottomDock() {
  const pathname = usePathname();
  const [wardSheetOpen, setWardSheetOpen] = useState(false);

  // Hide dock on admin screens
  if (pathname.startsWith('/admin')) {
    return null;
  }

  const isHome = pathname === '/';
  const isAgenda = pathname.startsWith('/agenda');
  const isNaivasha = pathname.startsWith('/naivasha');

  return (
    <>
      {/* 1. WARD QUICK-JUMP BOTTOM SHEET MODAL */}
      {wardSheetOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex flex-col justify-end sm:hidden animate-in fade-in duration-200"
          onClick={() => setWardSheetOpen(false)}
        >
          <div 
            className="bg-white rounded-t-3xl border-t border-slate-200 p-5 space-y-4 max-h-[80vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sheet Handle & Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-[#00C853]">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-extrabold text-slate-900">Explore Naivasha Wards</h3>
                  <p className="text-[10px] text-slate-500 font-semibold">Select a ward to view priorities & reports</p>
                </div>
              </div>
              <button 
                onClick={() => setWardSheetOpen(false)}
                className="p-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
                aria-label="Close ward drawer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* 8 Wards Grid */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              {NAIVASHA_WARDS.map((ward, idx) => (
                <Link
                  key={ward.id}
                  href={`/naivasha#${ward.slug}`}
                  onClick={() => setWardSheetOpen(false)}
                  className="flex flex-col p-3 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#00C853] hover:bg-emerald-50/50 transition-all text-left group"
                >
                  <span className="text-[9px] font-mono font-bold text-[#00C853] uppercase">Ward 0{idx + 1}</span>
                  <span className="font-heading text-xs font-bold text-slate-900 group-hover:text-[#00C853] transition-colors">{ward.name}</span>
                  <span className="text-[10px] text-slate-500 truncate mt-0.5">{ward.representative}</span>
                </Link>
              ))}
            </div>

            {/* Bottom View All Link */}
            <div className="pt-2">
              <Link
                href="/naivasha"
                onClick={() => setWardSheetOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-md active:scale-[0.98] transition-all"
              >
                <span>View Full Naivasha Constituency Directory</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 2. THE FLOATING BOTTOM STICKY ACTION DOCK */}
      <nav 
        aria-label="Mobile Navigation Dock"
        className="fixed bottom-0 left-0 right-0 z-40 block sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-2 py-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      >
        <div className="grid grid-cols-4 items-center gap-1 max-w-md mx-auto">
          
          {/* 1. Home */}
          <Link
            href="/"
            className={`flex flex-col items-center justify-center min-h-[48px] rounded-xl py-1 transition-all ${
              isHome 
                ? 'text-[#00C853] font-bold' 
                : 'text-slate-500 hover:text-slate-900 active:scale-95'
            }`}
          >
            <Home className={`h-5 w-5 ${isHome ? 'stroke-[2.5]' : 'stroke-2'}`} />
            <span className="text-[10px] tracking-tight mt-0.5">Home</span>
            {isHome && <span className="h-1 w-1 rounded-full bg-[#00C853] mt-0.5" />}
          </Link>

          {/* 2. Agenda */}
          <Link
            href="/agenda"
            className={`flex flex-col items-center justify-center min-h-[48px] rounded-xl py-1 transition-all ${
              isAgenda 
                ? 'text-[#00C853] font-bold' 
                : 'text-slate-500 hover:text-slate-900 active:scale-95'
            }`}
          >
            <Compass className={`h-5 w-5 ${isAgenda ? 'stroke-[2.5]' : 'stroke-2'}`} />
            <span className="text-[10px] tracking-tight mt-0.5">Agenda</span>
            {isAgenda && <span className="h-1 w-1 rounded-full bg-[#00C853] mt-0.5" />}
          </Link>

          {/* 3. Wards Sheet Trigger */}
          <button
            type="button"
            onClick={() => setWardSheetOpen(true)}
            className={`flex flex-col items-center justify-center min-h-[48px] rounded-xl py-1 transition-all ${
              isNaivasha 
                ? 'text-[#00C853] font-bold' 
                : 'text-slate-500 hover:text-slate-900 active:scale-95'
            }`}
          >
            <MapPin className={`h-5 w-5 ${isNaivasha ? 'stroke-[2.5]' : 'stroke-2'}`} />
            <span className="text-[10px] tracking-tight mt-0.5">8 Wards</span>
            {isNaivasha && <span className="h-1 w-1 rounded-full bg-[#00C853] mt-0.5" />}
          </button>

          {/* 4. Primary High-Conversion WhatsApp Trigger */}
          <a
            href="https://wa.me/254700000000?text=Hello%20Hon.%20J.M.%20Gitau%2C%20I%20am%20a%20resident%20of%20Naivasha..."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp message to Hon. J.M. Gitau"
            className="flex flex-col items-center justify-center min-h-[48px] rounded-xl bg-[#25D366] text-white shadow-md shadow-[#25D366]/30 active:scale-95 transition-all py-1"
          >
            <div className="relative">
              <span className="animate-ping absolute -top-0.5 -right-0.5 inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
              <MessageCircle className="h-5 w-5 fill-white stroke-[#25D366]" />
            </div>
            <span className="text-[10px] font-black tracking-tight text-white mt-0.5">WhatsApp</span>
          </a>

        </div>
      </nav>
    </>
  );
}
