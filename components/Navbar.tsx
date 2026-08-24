'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown,
  Newspaper, 
  Archive, 
  Camera, 
  Calendar, 
  Phone,
  HeartHandshake
} from 'lucide-react';

const MAIN_NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'The Story', path: '/about' },
  { label: 'The Agenda', path: '/agenda' },
  { label: 'Naivasha', path: '/naivasha' },
];

const JOURNEY_ITEMS = [
  { 
    label: 'From the Ground', 
    desc: 'Stories & visits', 
    path: '/updates', 
    icon: Newspaper 
  },
  { 
    label: 'The Record', 
    desc: 'Public archive', 
    path: '/media', 
    icon: Archive 
  },
  { 
    label: 'Gallery', 
    desc: 'Photos & video', 
    path: '/media#gallery', 
    icon: Camera 
  },
  { 
    label: 'Calendar', 
    desc: 'Upcoming events', 
    path: '/events', 
    icon: Calendar 
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [journeyAccordionOpen, setJourneyAccordionOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Track scroll position for header glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside listener for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard accessibility: Escape key listener
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isJourneyActive = JOURNEY_ITEMS.some(
    (item) => pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path))
  );

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Executive Top Announcement Bar with Centered Slogan */}
      <div className="bg-[#0B132B] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 overflow-hidden">
        <div className="mx-auto flex sm:grid sm:grid-cols-3 items-center justify-center sm:justify-between max-w-7xl">
          
          {/* LEFT: Campaign Identity (Desktop only) */}
          <div className="hidden sm:flex items-center font-medium text-[11px] sm:text-xs justify-start whitespace-nowrap overflow-hidden">
            <span className="text-slate-200 font-semibold tracking-wide">
              DCP Naivasha 2027
            </span>
          </div>

          {/* CENTER: Slogan Focal Point (Mobile & Desktop) */}
          <div className="flex items-center justify-center text-center w-full sm:w-auto">
            <span className="font-brush-marker text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap slogan-text-shimmer">
              SKIZA WAKENYA <span className="text-[#00E676] mx-1">•</span> SKIZA GROUND
            </span>
          </div>

          {/* RIGHT: Secondary Utility Action (Desktop only) */}
          <div className="hidden sm:flex items-center justify-end">
            <Link 
              href="/agenda" 
              className="flex items-center gap-1 text-[11px] sm:text-xs text-[#00E676] hover:text-white transition-colors font-semibold group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00E676] rounded px-1 whitespace-nowrap"
            >
              <span>Read the Agenda</span>
              <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </Link>
          </div>

        </div>
      </div>

      {/* Top Party Color Ribbon */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#00C853] via-[#8B4513] to-[#00E676]" />

      {/* Main Spacious Navbar Body */}
      <div 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80' 
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Simplified Identity Block */}
          <Link href="/" className="flex items-center gap-3 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] rounded-lg p-0.5">
            <div className="relative h-11 w-36 sm:h-12 sm:w-44 transition-transform group-hover:scale-[1.01]">
              <Image
                src="/dcp-official-party-logo.png"
                alt="Democracy for the Citizens Party Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
            <div className="hidden sm:flex flex-col border-l border-slate-200/90 pl-3 py-0.5">
              <span className="font-heading text-sm sm:text-base font-extrabold text-slate-900 tracking-tight group-hover:text-[#00C853] transition-colors whitespace-nowrap">
                J.M. GITAU
              </span>
              <span className="text-[11px] font-semibold text-slate-500 tracking-wide whitespace-nowrap">
                DCP · Naivasha · 2027
              </span>
            </div>
          </Link>

          {/* Desktop Single-Line Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* Primary Main Items */}
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`py-1 text-sm font-semibold transition-colors duration-150 relative whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] focus-visible:ring-offset-2 rounded-md ${
                    isActive
                      ? 'text-[#00C853]'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00C853] rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* "The Journey" Custom Mega-Menu Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                id="journey-menu-trigger"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                aria-controls="journey-mega-menu"
                className={`inline-flex items-center gap-1.5 py-1 text-sm font-semibold transition-colors duration-150 relative whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] focus-visible:ring-offset-2 rounded-md ${
                  isJourneyActive || dropdownOpen
                    ? 'text-[#00C853]'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <span>The Journey</span>
                <ChevronDown 
                  className={`h-4 w-4 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180 text-[#00C853]' : 'text-slate-400'
                  }`} 
                />
                {(isJourneyActive || dropdownOpen) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00C853] rounded-full" />
                )}
              </button>

              {/* Polished Mega-Menu Dropdown Container */}
              {dropdownOpen && (
                <div
                  id="journey-mega-menu"
                  role="menu"
                  aria-labelledby="journey-menu-trigger"
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-96 rounded-2xl bg-white/98 backdrop-blur-xl border border-slate-200/90 shadow-2xl p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-3 px-1 border-b border-slate-100 pb-2">
                    THE JOURNEY
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {JOURNEY_ITEMS.map((subItem) => {
                      const SubIcon = subItem.icon;
                      const isSubActive = pathname === subItem.path || (subItem.path !== '/' && pathname.startsWith(subItem.path));
                      return (
                        <Link
                          key={subItem.label}
                          href={subItem.path}
                          role="menuitem"
                          onClick={() => setDropdownOpen(false)}
                          className={`group flex flex-col p-3 rounded-xl transition-all duration-150 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] ${
                            isSubActive
                              ? 'bg-emerald-50/70 border-emerald-200/80 text-emerald-950'
                              : 'bg-slate-50/50 border-transparent hover:bg-slate-100/80 hover:border-slate-200/60'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <SubIcon className={`h-4 w-4 shrink-0 ${isSubActive ? 'text-[#00C853]' : 'text-slate-500 group-hover:text-[#00C853]'} transition-colors`} />
                            <span className="text-xs font-bold text-slate-900 group-hover:text-[#00C853] transition-colors whitespace-nowrap">
                              {subItem.label}
                            </span>
                          </div>
                          <span className="text-[11px] font-medium text-slate-500 group-hover:text-slate-600 line-clamp-1">
                            {subItem.desc}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              className={`py-1 text-sm font-semibold transition-colors duration-150 relative whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] focus-visible:ring-offset-2 rounded-md ${
                pathname === '/contact'
                  ? 'text-[#00C853]'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Contact
              {pathname === '/contact' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00C853] rounded-full" />
              )}
            </Link>
          </nav>

          {/* Primary Visual CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/get-involved"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#00C853] to-[#00B048] px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 hover:from-[#00E676] hover:to-[#00C853] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] focus-visible:ring-offset-2"
            >
              <HeartHandshake className="h-4 w-4 text-white" />
              <span className="whitespace-nowrap">Get Involved</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 lg:hidden transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5 text-slate-900" /> : <Menu className="h-5 w-5 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Accordion Drawer */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[102px] bottom-0 z-50 bg-white/98 backdrop-blur-xl p-5 lg:hidden overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200 flex flex-col justify-between border-b border-slate-200 shadow-2xl">
          <div className="space-y-4">
            
            {/* Identity Badge Header Card */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full bg-[#00C853] flex items-center justify-center text-white font-black text-xs shadow-sm">
                  DCP
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">J.M. GITAU</h4>
                  <p className="text-[11px] font-semibold text-[#00C853]">DCP · Naivasha · 2027</p>
                </div>
              </div>
              <span className="text-[10px] font-mono bg-white text-slate-600 px-2 py-1 rounded-md border border-slate-200 shadow-2xs">
                OFFICIAL PLATFORM
              </span>
            </div>

            {/* Mobile Navigation List */}
            <div className="space-y-1">
              {/* Primary Nav Links */}
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between min-h-[48px] px-4 rounded-xl font-bold text-sm transition-all ${
                      isActive
                        ? 'bg-[#00C853] text-white shadow-md shadow-[#00C853]/20'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="h-2 w-2 rounded-full bg-white" />}
                  </Link>
                );
              })}

              {/* The Journey Accordion Menu */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setJourneyAccordionOpen(!journeyAccordionOpen)}
                  aria-expanded={journeyAccordionOpen}
                  aria-controls="mobile-journey-accordion"
                  className="w-full flex items-center justify-between min-h-[48px] px-4 font-bold text-sm text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span>The Journey</span>
                    {isJourneyActive && (
                      <span className="h-2 w-2 rounded-full bg-[#00C853]" />
                    )}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${journeyAccordionOpen ? 'rotate-180 text-[#00C853]' : ''}`} />
                </button>

                {journeyAccordionOpen && (
                  <div id="mobile-journey-accordion" className="px-3 pb-3 space-y-1 pt-1 border-t border-slate-200/80 bg-white">
                    {JOURNEY_ITEMS.map((subItem) => {
                      const SubIcon = subItem.icon;
                      const isSubActive = pathname === subItem.path || (subItem.path !== '/' && pathname.startsWith(subItem.path));
                      return (
                        <Link
                          key={subItem.label}
                          href={subItem.path}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-3 min-h-[44px] px-3 rounded-lg transition-all ${
                            isSubActive
                              ? 'bg-emerald-50 text-[#00C853] font-bold border border-emerald-200'
                              : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                          }`}
                        >
                          <SubIcon className={`h-4 w-4 shrink-0 ${isSubActive ? 'text-[#00C853]' : 'text-slate-400'}`} />
                          <div className="flex flex-col">
                            <span className="text-xs font-semibold">{subItem.label}</span>
                            <span className="text-[10px] text-slate-500 font-normal">{subItem.desc}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Contact Link */}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between min-h-[48px] px-4 rounded-xl font-bold text-sm transition-all ${
                  pathname === '/contact'
                    ? 'bg-[#00C853] text-white shadow-md shadow-[#00C853]/20'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>Contact</span>
                {pathname === '/contact' && <span className="h-2 w-2 rounded-full bg-white" />}
              </Link>
            </div>

          </div>

          {/* Bottom Actions */}
          <div className="space-y-3 pt-4 border-t border-slate-200">
            <Link
              href="/get-involved"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#00C853] to-[#00B048] min-h-[48px] px-4 py-3 text-sm font-black text-white shadow-lg shadow-emerald-500/25 active:scale-[0.98] transition-all"
            >
              <HeartHandshake className="h-4 w-4 text-white" />
              <span>Get Involved & Volunteer</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="https://wa.me/254700000000?text=Hello%20Hon.%20J.M.%20Gitau%2C%20I%20am%20a%20constituent%20from%20Naivasha..."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-slate-100 border border-slate-200 min-h-[44px] px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-all"
            >
              <Phone className="h-3.5 w-3.5 text-[#00C853]" />
              <span>Direct WhatsApp</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
}

