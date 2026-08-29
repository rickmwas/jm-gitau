'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/254700000000?text=Hello%20Hon.%20J.M.%20Gitau%2C%20I%20am%20a%20resident%20of%20Naivasha..."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Hon. J.M. Gitau on WhatsApp"
      className="hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-xl shadow-[#25D366]/35 hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all group"
    >
      <div className="relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <MessageCircle className="relative h-5 w-5 fill-white stroke-[#25D366]" />
      </div>
      <span className="text-xs sm:text-sm font-bold tracking-tight text-white pr-1">
        Talk to J.M. Gitau
      </span>
    </a>
  );
}
