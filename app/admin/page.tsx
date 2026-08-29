import Link from 'next/link';
import { prisma } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { 
  Newspaper, 
  CalendarDays, 
  Users, 
  RefreshCw, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Plus,
  ArrowRight
} from 'lucide-react';

export default async function AdminDashboardOverview() {
  const session = await getSession();

  // Fetch metrics safely from database
  const postsCount = await prisma.post.count().catch(() => 0);
  const eventsCount = await prisma.event.count().catch(() => 0);
  const volunteersCount = await prisma.volunteer.count().catch(() => 0);
  const lastScraperLog = await prisma.scraperLog.findFirst({
    orderBy: { runAt: 'desc' },
  }).catch(() => null);

  const recentPosts = await prisma.post.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
  }).catch(() => []);

  const upcomingEvents = await prisma.event.findMany({
    take: 4,
    where: { status: 'upcoming' },
    orderBy: { date: 'asc' },
  }).catch(() => []);

  return (
    <div className="space-y-6">
      {/* Mobile-Friendly Executive Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {session?.role === 'SUPERADMIN' ? 'SUPERADMIN' : 'PRESS OFFICER'}
              </span>
              <span className="text-xs text-slate-400">Naivasha Constituency 2027</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-100">
              Welcome back, {session?.name || 'Campaign Officer'}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Manage campaign posts, rallies, and volunteers directly from your mobile or laptop.
            </p>
          </div>

          {/* Quick Mobile Action Bar */}
          <div className="flex items-center gap-2 pt-2 md:pt-0">
            <Link
              href="/admin/scraper"
              className="flex-1 sm:flex-none min-h-[42px] px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Sync Facebook Feed</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Cards Grid (Responsive 2-col on mobile, 4-col on desktop) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Posts</span>
            <Newspaper className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-2 text-2xl font-extrabold text-slate-100">{postsCount}</div>
          <p className="text-[11px] text-slate-400 mt-0.5 truncate">FB Feed & Updates</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Rallies & Events</span>
            <CalendarDays className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-2 text-2xl font-extrabold text-slate-100">{eventsCount}</div>
          <p className="text-[11px] text-slate-400 mt-0.5 truncate">Across 8 Wards</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Volunteers</span>
            <Users className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-2 text-2xl font-extrabold text-slate-100">{volunteersCount}</div>
          <p className="text-[11px] text-slate-400 mt-0.5 truncate">From /get-involved</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Sync Status</span>
            <RefreshCw className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2 text-sm font-bold text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" />
            <span>{lastScraperLog ? lastScraperLog.status : 'Active'}</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5 truncate">
            {lastScraperLog ? new Date(lastScraperLog.runAt).toLocaleDateString() : 'Auto 2x Daily'}
          </p>
        </div>
      </div>

      {/* Main Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Posts Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-amber-400" />
                <span>Recent Feed Updates</span>
              </h2>
              <Link href="/admin/posts" className="text-xs font-semibold text-amber-400 hover:underline flex items-center gap-1">
                <span>Manage Posts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {recentPosts.length === 0 ? (
                <div className="py-8 text-center text-slate-500 text-xs">
                  No posts recorded in database yet. Run initial feed sync.
                </div>
              ) : (
                recentPosts.map((post) => (
                  <div key={post.id} className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {post.category}
                      </span>
                      <span className="text-[11px] text-slate-400">{post.date}</span>
                    </div>
                    <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                      {post.message}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Upcoming Rallies Column */}
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-amber-400" />
                <span>Upcoming Rallies</span>
              </h2>
              <Link href="/admin/events" className="text-xs font-semibold text-amber-400 hover:underline">
                View All
              </Link>
            </div>

            <div className="space-y-3">
              {upcomingEvents.length === 0 ? (
                <div className="py-6 text-center text-slate-500 text-xs">
                  No upcoming rallies scheduled.
                </div>
              ) : (
                upcomingEvents.map((ev) => (
                  <div key={ev.id} className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400">{ev.ward} Ward</span>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {ev.date}
                      </span>
                    </div>
                    <h3 className="text-xs font-bold text-slate-200">{ev.title}</h3>
                    <p className="text-[11px] text-slate-400 truncate">{ev.location}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
