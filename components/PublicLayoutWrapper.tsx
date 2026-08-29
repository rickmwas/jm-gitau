'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import MobileBottomDock from '@/components/MobileBottomDock';

export default function PublicLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">{children}</div>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pb-16 sm:pb-0">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <MobileBottomDock />
    </>
  );
}
