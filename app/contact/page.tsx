'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Ear } from 'lucide-react';
import { NAIVASHA_WARDS } from '@/lib/campaignData';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    ward: 'Biashara Ward',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20 bg-[#F8FAFC]">
      
      {/* HERO BANNER */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-xs font-extrabold text-[#00C853] uppercase tracking-wider mx-auto">
            <Mail className="h-3.5 w-3.5 text-[#00C853]" />
            <span>CONTACT</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Let&apos;s talk.
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Questions, ideas, invitations or something happening in your community — send a message.
          </p>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="dcp-card p-6 space-y-6 shadow-sm">
              <h2 className="font-heading text-1.5xl font-extrabold text-slate-900">Campaign Headquarters</h2>
              
              <div className="space-y-4 text-sm text-slate-700 font-medium">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#00C853] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Naivasha Constituency Office:</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Biashara Ward, Naivasha Town, Nakuru County, Kenya</p>
                  </div>
                </div>

                {/* 1-Tap Mobile Action Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href="https://wa.me/254700000000?text=Hello%20Hon.%20J.M.%20Gitau%2C%20I%20am%20a%20constituent%20from%20Naivasha..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-slate-900 font-bold text-xs min-h-[48px] hover:bg-[#25D366]/20 transition-all"
                  >
                    <Send className="h-4 w-4 text-[#25D366]" />
                    <div>
                      <span className="block text-[10px] text-[#25D366] font-extrabold uppercase">1-Tap WhatsApp</span>
                      <span>Chat directly</span>
                    </div>
                  </a>

                  <a
                    href="tel:+254700000000"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 font-bold text-xs min-h-[48px] hover:bg-slate-200 transition-all"
                  >
                    <Phone className="h-4 w-4 text-[#00C853]" />
                    <div>
                      <span className="block text-[10px] text-slate-500 font-extrabold uppercase">1-Tap Phone</span>
                      <span>+254 700 000 000</span>
                    </div>
                  </a>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Mail className="h-5 w-5 text-[#00C853] shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Email:</strong>
                    <p className="text-xs text-slate-600">contact@jmgitau2027.co.ke</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#00C853] uppercase tracking-wider">
                <Ear className="h-4 w-4" />
                <span>OFFICE HOURS & OUTREACH</span>
              </div>
              <p className="text-xs text-slate-700 font-semibold">Monday – Friday: 8:00 AM – 5:00 PM</p>
              <p className="text-xs text-slate-700 font-semibold">Saturday: 9:00 AM – 1:00 PM (Ward Outreaches)</p>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <div className="dcp-card p-8 space-y-6 shadow-md">
              <h2 className="font-heading text-xl font-extrabold text-slate-900">Send a Direct Message</h2>
              
              {submitted ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center space-y-3">
                  <CheckCircle2 className="h-10 w-10 text-[#00C853] mx-auto" />
                  <h3 className="font-heading text-lg font-bold text-slate-900">Thank You for Reaching Out!</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto font-medium">
                    Your message has been received by the J.M. Gitau campaign office. A representative will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Samuel Mwangi"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-900 focus:border-[#00C853] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0712 345 678"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-900 focus:border-[#00C853] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-900 focus:border-[#00C853] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Naivasha Ward</label>
                      <select
                        value={formData.ward}
                        onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-900 focus:border-[#00C853] focus:outline-none"
                      >
                        {NAIVASHA_WARDS.map((w) => (
                          <option key={w.id} value={w.name}>{w.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Message or Query *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your constituency inquiry or feedback..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-900 focus:border-[#00C853] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#00C853] px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-[#00C853]/25 hover:bg-[#00E676] hover:text-slate-950 transition-all"
                  >
                    Submit Message <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
