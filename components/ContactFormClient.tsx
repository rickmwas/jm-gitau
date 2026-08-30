'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Ear } from 'lucide-react';
import { NAIVASHA_WARDS } from '@/lib/campaignData';

export default function ContactFormClient() {
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
    if (!formData.name || !formData.phone || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20 bg-[#F8FAFC]">
      
      {/* HERO BANNER */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-xs font-extrabold text-[#00C853] uppercase tracking-wider mx-auto">
            <Ear className="h-3.5 w-3.5" />
            <span>WE ARE LISTENING</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Get in touch with Team J.M. Gitau.
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Have a proposal for your ward, a issue in your estate, or want to invite J.M. Gitau to a community meeting? Reach out to us.
          </p>
        </div>
      </section>

      {/* CONTACT INFO & FORM SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-slate-900">Campaign Secretariat</h2>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Our team is active across Naivasha Town and all constituent electoral wards.
              </p>
            </div>

            <div className="space-y-4">
              
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00C853] text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-slate-900">Naivasha Main Office</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mt-0.5">
                    Biashara Ward, Naivasha Town Centre<br />
                    Nakuru County, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8B4513] text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-slate-900">Direct Phone & WhatsApp</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mt-0.5">
                    Available for ground calls and WhatsApp messages.
                  </p>
                  <a
                    href="https://wa.me/254700000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-bold text-[#00C853] hover:underline mt-1"
                  >
                    Send WhatsApp Message
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-slate-900">Email Enquiries</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mt-0.5">
                    contact@jmgitau2027.co.ke
                  </p>
                </div>
              </div>

            </div>

            {/* Official Party Badge */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-2 border border-slate-800">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-[#00C853]/20 border border-[#00C853]/40 text-xs font-extrabold text-[#00E676] uppercase">
                DCP Party Candidate
              </div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Democracy for the Citizens Party (DCP - Skiza Wakenya). Dedicated to inclusive representation for every resident of Naivasha Constituency.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-slate-900">Send a Message</h2>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Share your feedback, ideas, or report a ward priority directly to J.M. Gitau.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00C853] text-white mx-auto shadow-md">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900">Message Delivered!</h3>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  Thank you for writing to us. Our secretariat team will review your note and respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#00C853] hover:underline pt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Grace Wanjiku"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#00C853]/20 focus:border-[#00C853]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g., 0722 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#00C853]/20 focus:border-[#00C853]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="e.g., name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#00C853]/20 focus:border-[#00C853]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Electoral Ward</label>
                    <select
                      value={formData.ward}
                      onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#00C853]/20 focus:border-[#00C853]"
                    >
                      {NAIVASHA_WARDS.map((w) => (
                        <option key={w.slug} value={w.name}>
                          {w.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message or Ward Proposal</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your suggestion, community priority, or query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#00C853]/20 focus:border-[#00C853]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#00C853] py-3.5 text-xs font-bold text-white shadow-md shadow-[#00C853]/20 hover:bg-[#00E676] hover:text-slate-950 transition-all"
                >
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
