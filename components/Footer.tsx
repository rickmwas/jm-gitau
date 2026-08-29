import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      {/* Top Accent Bar */}
      <div className="h-[4px] w-full bg-gradient-to-r from-[#00C853] via-[#8B4513] to-[#00E676]" />
      
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="relative h-14 w-44 bg-slate-50 p-2 rounded-xl border border-slate-200 shadow-2xs">
              <Image
                src="/dcp-official-party-logo.png"
                alt="Democracy for the Citizens Party Official Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <div className="font-heading text-sm font-extrabold text-slate-900">J.M. GITAU</div>
              <div className="text-xs text-[#00C853] font-bold">Naivasha · 2027</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                Listening. Engaging. Looking ahead. A public record of communities, conversations, and priorities across Naivasha.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xs font-extrabold text-slate-900 tracking-wider uppercase mb-4">Navigation</h3>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="/about" className="hover:text-[#00C853] transition-colors">The Story</Link></li>
              <li><Link href="/agenda" className="hover:text-[#00C853] transition-colors">The Agenda</Link></li>
              <li><Link href="/updates" className="hover:text-[#00C853] transition-colors">From the Ground</Link></li>
              <li><Link href="/media" className="hover:text-[#00C853] transition-colors">The Record</Link></li>
              <li><Link href="/events" className="hover:text-[#00C853] transition-colors">Calendar</Link></li>
            </ul>
          </div>

          {/* Naivasha Wards */}
          <div>
            <h3 className="font-heading text-xs font-extrabold text-slate-900 tracking-wider uppercase mb-4">Constituency Wards</h3>
            <ul className="grid grid-cols-2 gap-2 text-xs font-medium">
              <li><Link href="/naivasha#biashara" className="hover:text-[#00C853] transition-colors">Biashara</Link></li>
              <li><Link href="/naivasha#hells-gate" className="hover:text-[#00C853] transition-colors">Hell&apos;s Gate</Link></li>
              <li><Link href="/naivasha#lakeview" className="hover:text-[#00C853] transition-colors">Lakeview</Link></li>
              <li><Link href="/naivasha#mai-mahiu" className="hover:text-[#00C853] transition-colors">Mai Mahiu</Link></li>
              <li><Link href="/naivasha#maiela" className="hover:text-[#00C853] transition-colors">Maiela</Link></li>
              <li><Link href="/naivasha#olkaria" className="hover:text-[#00C853] transition-colors">Olkaria</Link></li>
              <li><Link href="/naivasha#naivasha-east" className="hover:text-[#00C853] transition-colors">Naivasha East</Link></li>
              <li><Link href="/naivasha#viwandani" className="hover:text-[#00C853] transition-colors">Viwandani</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="font-heading text-xs font-extrabold text-slate-900 tracking-wider uppercase mb-4">Constituency Office</h3>
            <div className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
              <MapPin className="h-4 w-4 text-[#00C853] shrink-0 mt-0.5" />
              <span>Biashara Ward, Naivasha Town, Nakuru County, Kenya</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
              <Phone className="h-4 w-4 text-[#00C853] shrink-0" />
              <span>+254 700 000 000</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
              <Mail className="h-4 w-4 text-[#00C853] shrink-0" />
              <span>contact@jmgitau2027.co.ke</span>
            </div>
            <div className="pt-2">
              <a
                href="https://www.facebook.com/JMGitauNaivashaMP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-[#00C853] hover:bg-emerald-100 transition-all"
              >
                Official Facebook Page <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} J.M. Gitau Naivasha MP Campaign (Democracy for the Citizens Party - DCP). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
