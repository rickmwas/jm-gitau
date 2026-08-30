import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Users, CheckCircle2, ArrowRight, Compass, MessageCircle } from 'lucide-react';
import { NAIVASHA_WARDS } from '@/lib/campaignData';

export const metadata: Metadata = {
  title: 'Naivasha Wards Profile & Ground Priority Map',
  description: 'Explore ward-by-ward profiles across Naivasha Constituency: Biashara, Mai Mahiu, Olkaria, Lakeview, Maiela, Hell\'s Gate, and Naivasha East. See local priorities and ground action plans.',
  alternates: {
    canonical: 'https://jmgitau2027.co.ke/naivasha',
  },
  openGraph: {
    title: 'Naivasha Wards Profile & Ground Priority Map — J.M. Gitau 2027',
    description: 'Detailed constituency profiles for all wards in Naivasha. Ground-tested initiatives tailored to each community.',
    url: 'https://jmgitau2027.co.ke/naivasha',
    siteName: 'J.M. Gitau Naivasha 2027',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: 'https://jmgitau2027.co.ke/jm-gitau-hero-banner.jpg',
        width: 1024,
        height: 682,
        alt: 'Naivasha Wards Profile Map - J.M. Gitau 2027',
        type: 'image/jpeg',
      },
      {
        url: 'https://jmgitau2027.co.ke/api/og?title=Naivasha+Wards+Profile+%26+Priority+Map&subtitle=Biashara%2C+Mai+Mahiu%2C+Olkaria%2C+Lakeview%2C+Maiela+%26+Naivasha+East',
        width: 1200,
        height: 630,
        alt: 'Naivasha Wards Profile Banner',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naivasha Wards Profile & Ground Priority Map — J.M. Gitau 2027',
    description: 'Detailed constituency profiles for all wards in Naivasha.',
    images: [{
      url: 'https://jmgitau2027.co.ke/jm-gitau-hero-banner.jpg',
      alt: 'Naivasha Wards Profile Map',
    }],
  },
};

const naivashaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Naivasha Constituency Wards Profile',
  description: 'List of administrative electoral wards comprising Naivasha Constituency.',
  itemListElement: NAIVASHA_WARDS.map((ward, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'AdministrativeArea',
      name: ward.name,
      description: ward.description,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Naivasha Constituency, Nakuru County, Kenya'
      }
    }
  }))
};

export default function NaivashaPage() {
  return (
    <div className="space-y-10 sm:space-y-16 pb-20 bg-[#F8FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(naivashaJsonLd) }}
      />
      
      {/* HERO BANNER */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-xs font-extrabold text-[#00C853] uppercase tracking-wider mx-auto">
            <Compass className="h-3.5 w-3.5" />
            <span>NAIVASHA CONSTITUENCY</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            The place at the heart of the journey.
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            From its towns and trading centres to its farms, neighbourhoods and growing communities, Naivasha is 8 diverse, vibrant wards.
          </p>
        </div>
      </section>

      {/* STICKY HORIZONTAL WARD PILL SELECTOR (MOBILE + DESKTOP) */}
      <div className="sticky top-12 sm:top-14 z-20 bg-white/95 backdrop-blur-md border-y border-slate-200 py-2.5 px-4 shadow-xs">
        <div className="mx-auto max-w-7xl flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1 pl-1 pr-2">
            <MapPin className="h-3.5 w-3.5 text-[#00C853]" />
            <span>Jump to Ward:</span>
          </span>
          {NAIVASHA_WARDS.map((w, idx) => (
            <a
              key={w.id}
              href={`#${w.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 hover:bg-[#00C853] hover:text-white hover:border-[#00C853] shrink-0 transition-all active:scale-95"
            >
              <span className="text-[10px] opacity-75 font-mono">0{idx + 1}</span>
              <span>{w.name.replace(' Ward', '')}</span>
            </a>
          ))}
        </div>
      </div>

      {/* WARDS DIRECTORY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {NAIVASHA_WARDS.map((ward, idx) => {
          return (
            <div
              id={ward.slug}
              key={ward.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Photo Column */}
                <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto bg-slate-100">
                  {ward.image && (
                    <Image
                      src={`/${ward.image}`}
                      alt={ward.name}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute top-4 left-4 rounded-xl bg-slate-900/90 backdrop-blur-xs px-3.5 py-1 text-xs font-black text-white shadow-md border border-slate-700">
                    WARD 0{idx + 1}
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                      <div>
                        <span className="text-xs font-bold text-[#8B4513] uppercase tracking-wider">{ward.representative}</span>
                        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">{ward.name}</h2>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                        <Users className="h-3.5 w-3.5 text-[#00C853]" />
                        <span>Pop. {ward.population}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {ward.description}
                    </p>

                    <div className="space-y-2">
                      <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Priority Development Projects:</h3>
                      <div className="flex flex-wrap gap-2">
                        {ward.keyProjects.map((proj, pIdx) => (
                          <span key={pIdx} className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#00C853]" />
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <Link
                      href={`/updates?query=${ward.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00C853] hover:text-[#00E676]"
                    >
                      View Ward Ground Reports <ArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    <a
                      href={`https://wa.me/254700000000?text=Hello%20Hon.%20J.M.%20Gitau%2C%20I%20am%20a%20resident%20of%20${encodeURIComponent(ward.name)}...`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[#00C853] text-xs font-bold hover:bg-emerald-100 active:scale-95 transition-all"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Inquire regarding {ward.name.replace(' Ward', '')}</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
}
