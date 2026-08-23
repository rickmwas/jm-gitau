import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#061E10] text-slate-300">
      {/* Top Accent Bar */}
      <div className="h-[4px] w-full bg-gradient-to-r from-[#00C853] via-[#8B4513] to-[#00E676]" />
      
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="relative h-16 w-48 bg-white p-2 rounded-xl shadow-md">
              <Image
                src="/dcp-official-party-logo.png"
                alt="Democracy for the Citizens Party Official Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Servant leadership for Naivasha Constituency. 100% transparent NG-CDF bursary disbursement, clean water boreholes, youth TVET empowerment, and equal ward development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xs font-extrabold text-white tracking-wider uppercase mb-4">Navigation</h3>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="/about" className="hover:text-[#00E676] transition-colors">About J.M. Gitau</Link></li>
              <li><Link href="/agenda" className="hover:text-[#00E676] transition-colors">Manifesto & 4 Pillars</Link></li>
              <li><Link href="/updates" className="hover:text-[#00E676] transition-colors">Verified Field Reports</Link></li>
              <li><Link href="/media" className="hover:text-[#00E676] transition-colors">Media Archive (58 Photos)</Link></li>
              <li><Link href="/events" className="hover:text-[#00E676] transition-colors">Events & Town Halls</Link></li>
            </ul>
          </div>

          {/* Naivasha Wards */}
          <div>
            <h3 className="font-heading text-xs font-extrabold text-white tracking-wider uppercase mb-4">Constituency Wards</h3>
            <ul className="grid grid-cols-2 gap-2 text-xs font-medium">
              <li><Link href="/naivasha#biashara" className="hover:text-[#00E676] transition-colors">Biashara</Link></li>
              <li><Link href="/naivasha#hells-gate" className="hover:text-[#00E676] transition-colors">Hell&apos;s Gate</Link></li>
              <li><Link href="/naivasha#lakeview" className="hover:text-[#00E676] transition-colors">Lakeview</Link></li>
              <li><Link href="/naivasha#mai-mahiu" className="hover:text-[#00E676] transition-colors">Mai Mahiu</Link></li>
              <li><Link href="/naivasha#maiela" className="hover:text-[#00E676] transition-colors">Maiela</Link></li>
              <li><Link href="/naivasha#olkaria" className="hover:text-[#00E676] transition-colors">Olkaria</Link></li>
              <li><Link href="/naivasha#naivasha-east" className="hover:text-[#00E676] transition-colors">Naivasha East</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="font-heading text-xs font-extrabold text-white tracking-wider uppercase mb-4">Constituency Office</h3>
            <div className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
              <MapPin className="h-4 w-4 text-[#00E676] shrink-0 mt-0.5" />
              <span>Biashara Ward, Naivasha Town, Nakuru County, Kenya</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
              <Phone className="h-4 w-4 text-[#00E676] shrink-0" />
              <span>+254 700 000 000</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
              <Mail className="h-4 w-4 text-[#00E676] shrink-0" />
              <span>contact@jmgitau2027.co.ke</span>
            </div>
            <div className="pt-2">
              <a
                href="https://www.facebook.com/JMGitauNaivashaMP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-emerald-800 bg-[#0C301A] px-3 py-1.5 text-xs text-[#00E676] hover:text-white transition-all"
              >
                Official Facebook Page <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-emerald-900/60 pt-6 text-center text-xs text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} J.M. Gitau Naivasha MP Campaign (Democracy for the Citizens Party - DCP). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
