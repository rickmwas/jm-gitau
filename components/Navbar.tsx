'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Phone, 
  FileText, 
  User, 
  Newspaper, 
  ImageIcon, 
  Calendar, 
  Mail,
  HeartHandshake
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', path: '/', icon: User },
  { label: 'The Story', path: '/about', icon: User },
  { label: 'The Agenda', path: '/agenda', icon: FileText },
  { label: 'Naivasha', path: '/naivasha', icon: MapPin },
  { label: 'From the Ground', path: '/updates', icon: Newspaper },
  { label: 'The Record', path: '/media', icon: ImageIcon },
  { label: 'Calendar', path: '/events', icon: Calendar },
  { label: 'Contact', path: '/contact', icon: Mail },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Executive Top Announcement & Utility Bar */}
      <div className="bg-[#0B132B] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2 font-medium text-[11px] sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C853] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C853]"></span>
            </span>
            <span className="text-slate-200 font-semibold tracking-wide">DCP OFFICIAL CAMPAIGN</span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline text-slate-400">Naivasha Constituency 2027</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-medium">
            <a 
              href="tel:+254700000000" 
              className="hidden md:flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3 text-[#00C853]" />
              <span>+254 700 000 000</span>
            </a>
            <span className="hidden md:inline text-slate-700">|</span>
            <Link 
              href="/agenda" 
              className="flex items-center gap-1 text-[#00E676] hover:underline font-semibold"
            >
              <Sparkles className="h-3 w-3" />
              <span>Read the Agenda</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Top Party Color Hairline Ribbon */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#00C853] via-[#8B4513] to-[#00E676]" />

      {/* Main Navbar Body with Glassmorphism */}
      <div 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80' 
            : 'bg-white/90 backdrop-blur-sm py-3 border-b border-slate-100'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Brand Logo & Candidate Identity */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative h-12 w-40 sm:h-13 sm:w-48 transition-transform group-hover:scale-[1.01]">
              <Image
                src="/dcp-official-party-logo.png"
                alt="Democracy for the Citizens Party Official Logo (Skiza Wakenya)"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
            <div className="hidden sm:flex flex-col border-l border-slate-200/90 pl-3.5 py-0.5">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-sm sm:text-base font-extrabold text-slate-900 tracking-tight group-hover:text-[#00C853] transition-colors">
                  J.M. GITAU
                </span>
                <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#00C853]">
                  DCP
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 tracking-tight">
                Naivasha MP Candidate &apos;27
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 text-xs lg:text-[13px] font-semibold rounded-lg transition-all duration-150 relative ${
                    isActive
                      ? 'text-[#00C853] bg-emerald-50/80 font-bold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#00C853] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/get-involved"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00C853] to-[#00B048] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 hover:from-[#00E676] hover:to-[#00C853] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <HeartHandshake className="h-3.5 w-3.5 text-white" />
              <span>Get Involved</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 lg:hidden transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5 text-slate-900" /> : <Menu className="h-5 w-5 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Dashboard */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[105px] bottom-0 z-50 bg-slate-900/95 backdrop-blur-xl p-5 lg:hidden overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200 flex flex-col justify-between">
          <div className="space-y-4">
            
            {/* Drawer Header Badge */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full bg-[#00C853] flex items-center justify-center text-slate-950 font-black text-xs">
                  DCP
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white">J.M. GITAU</h4>
                  <p className="text-[11px] font-semibold text-[#00E676]">Naivasha Constituency MP 2027</p>
                </div>
              </div>
              <span className="text-[10px] font-mono bg-slate-900 text-slate-400 px-2 py-1 rounded-md border border-slate-700">
                OFFICIAL APP
              </span>
            </div>

            {/* Dashboard Cards Navigation */}
            <div className="grid grid-cols-2 gap-3">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.path;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex flex-col justify-between p-4 rounded-2xl border transition-all h-24 ${
                      isActive
                        ? 'bg-[#00C853] text-slate-950 border-[#00C853] font-bold shadow-lg shadow-[#00C853]/20 scale-[1.02]'
                        : 'bg-slate-800/80 text-slate-200 border-slate-700/80 hover:border-slate-500 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Icon className={`h-5 w-5 ${isActive ? 'text-slate-950' : 'text-[#00E676]'}`} />
                      {isActive && <span className="h-2 w-2 rounded-full bg-slate-950" />}
                    </div>
                    <span className="text-xs font-extrabold tracking-tight">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>

          </div>

          {/* Bottom Direct Actions */}
          <div className="space-y-3 pt-6 border-t border-slate-800">
            <a
              href="https://wa.me/254700000000?text=Hello%20Hon.%20J.M.%20Gitau%2C%20I%20am%20a%20constituent%20from%20Naivasha..."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] min-h-[48px] px-4 py-3 text-sm font-black text-white shadow-lg shadow-[#25D366]/25 active:scale-[0.98] transition-all"
            >
              <Phone className="h-4 w-4 fill-white" />
              <span>Direct WhatsApp with J.M. Gitau</span>
            </a>

            <Link
              href="/get-involved"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-slate-800 border border-slate-700 min-h-[48px] px-4 py-3 text-sm font-bold text-slate-200 hover:text-white transition-all"
            >
              <HeartHandshake className="h-4 w-4 text-[#00E676]" />
              <span>Get Involved & Volunteer</span>
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}
