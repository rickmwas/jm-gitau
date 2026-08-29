import { ReactNode } from 'react';
import { getSession } from '@/lib/auth';
import AdminSidebarNav from '@/components/admin/AdminSidebarNav';

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await getSession();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col lg:flex-row">
      {/* Sidebar & Mobile Header */}
      {session && <AdminSidebarNav session={session} />}

      {/* Main Page Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
}
