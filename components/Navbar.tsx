'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About J.M.', path: '/about' },
  { label: 'Manifesto', path: '/agenda' },
  { label: 'Naivasha Wards', path: '/naivasha' },
  { label: 'Field Reports', path: '/updates' },
  { label: 'Gallery', path: '/media' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
      {/* Top DCP Neon Green & Brown Party Accent Bar */}
      <div className="h-[4px] w-full bg-gradient-to-r from-[#00C853] via-[#8B4513] to-[#00E676]" />
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        
        {/* Brand Logo with Official Uploaded DCP Party Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative h-14 w-44 sm:w-52">
            <Image
              src="/dcp-official-party-logo.png"
              alt="Democracy for the Citizens Party Official Logo (Skiza Wakenya)"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
          <div className="hidden sm:flex flex-col border-l border-slate-200 pl-3">
            <span className="font-heading text-base font-extrabold text-[#00C853] tracking-tight group-hover:text-[#00E676] transition-colors">
              J.M. GITAU
            </span>
            <span className="text-[11px] font-bold text-[#8B4513]">
              Naivasha MP Candidate 2027
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 text-xs font-bold rounded-lg transition-all ${
                  isActive
                    ? 'bg-[#00C853]/15 text-[#00C853] border border-[#00C853]/30 shadow-2xs'
                    : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 rounded-xl bg-[#00C853] px-4.5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#00C853]/25 hover:bg-[#00E676] hover:text-[#0F172A] transition-all hover:scale-[1.02]"
          >
            Get Involved <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-4 lg:hidden shadow-lg">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2.5 text-sm font-bold rounded-lg ${
                    isActive
                      ? 'bg-[#00C853]/15 text-[#00C853] border border-[#00C853]/30'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/get-involved"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#00C853] py-3 text-sm font-bold text-white shadow-md"
            >
              Get Involved <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
