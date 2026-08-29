'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Newspaper, 
  CalendarDays, 
  Users, 
  RefreshCw, 
  ShieldAlert, 
  LogOut, 
  Crown, 
  Feather,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';
import { SessionUser } from '@/lib/auth';

export default function AdminSidebarNav({ session }: { session: SessionUser }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Hide sidebar on login page
  if (pathname === '/admin/login') return null;

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  const navItems = [
    { label: 'Overview', href: '/admin', icon: LayoutDashboard },
    { label: 'Posts & Feed', href: '/admin/posts', icon: Newspaper },
    { label: 'Campaign Events', href: '/admin/events', icon: CalendarDays },
    { label: 'Volunteer CRM', href: '/admin/volunteers', icon: Users },
    { label: 'Facebook Sync', href: '/admin/scraper', icon: RefreshCw },
  ];

  if (session.role === 'SUPERADMIN') {
    navItems.push({ label: 'Admin Accounts', href: '/admin/users', icon: ShieldAlert });
  }

  const NavContent = () => (
    <div className="flex flex-col h-full bg-slate-900 text-slate-200">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-extrabold text-sm tracking-tight shadow-sm">
            JM
          </div>
          <div>
            <h2 className="font-bold text-slate-100 text-sm leading-tight">
              J.M. Gitau 2027
            </h2>
            <p className="text-xs text-slate-400">Campaign Operations</p>
          </div>
        </div>

        {/* Mobile close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* User Profile Badge */}
      <div className="px-5 py-3.5 bg-slate-950/60 border-b border-slate-800/80">
        <div className="flex items-center justify-between gap-2">
          <div className="truncate">
            <p className="text-xs font-semibold text-slate-200 truncate">{session.name}</p>
            <p className="text-[11px] text-slate-400 truncate">{session.email}</p>
          </div>
          {session.role === 'SUPERADMIN' ? (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1 flex-shrink-0">
              <Crown className="w-3 h-3" />
              Admin
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1 flex-shrink-0">
              <Feather className="w-3 h-3" />
              Press
            </span>
          )}
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Navigation
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                  : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/70'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer / Links & Logout */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <Link
          href="/"
          target="_blank"
          className="w-full flex items-center justify-between px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors"
        >
          <span>View Live Campaign Site</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Navigation Header */}
      <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-bold text-slate-100 text-sm">JM Gitau 2027</h1>
            <p className="text-[11px] text-amber-400 font-medium">Admin Portal</p>
          </div>
        </div>

        <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-medium">
          {session.role === 'SUPERADMIN' ? 'Admin' : 'Press'}
        </span>
      </div>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-72 max-w-[80vw] bg-slate-900 shadow-2xl flex flex-col z-10">
            <NavContent />
          </div>
        </div>
      )}

      {/* Desktop Sidebar (hidden on mobile) */}
      <aside className="hidden lg:flex w-64 bg-slate-900 border-r border-slate-800 flex-col flex-shrink-0 min-h-screen">
        <NavContent />
      </aside>
    </>
  );
}
