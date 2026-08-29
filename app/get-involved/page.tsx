'use client';

import { useState } from 'react';
import { Users, Heart, Share2, CheckCircle2, UserCheck, Ear } from 'lucide-react';
import { NAIVASHA_WARDS } from '@/lib/campaignData';

export default function GetInvolvedPage() {
  const [signedUp, setSignedUp] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    ward: 'Biashara Ward',
    role: 'Mobilizer & Youth Leader'
  });

  const [submitting, setSubmitting] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/volunteers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.name,
          phone: form.phone,
          ward: form.ward,
          interests: [form.role],
        }),
      });
      setSignedUp(true);
    } catch (err) {
      console.error('Error recording signup:', err);
      setSignedUp(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 pb-20 bg-[#F8FAFC]">
      
      {/* HERO BANNER */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-xs font-extrabold text-[#00C853] uppercase tracking-wider mx-auto">
            <UserCheck className="h-3.5 w-3.5" />
            <span>GET INVOLVED</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Have something to say?
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Naivasha is a conversation, and every community has something worth hearing.
          </p>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Volunteer Roles Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-heading text-2xl font-extrabold text-slate-900">How You Can Participate</h2>
            
            <div className="space-y-4">
              <div className="dcp-card flex items-start gap-4 p-5 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-[#00C853] shrink-0 font-bold">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-extrabold text-slate-900">Ward Youth & Women Mobilizer</h3>
                  <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">Lead local outreach and voter sensitization in your polling center and village.</p>
                </div>
              </div>

              <div className="dcp-card flex items-start gap-4 p-5 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-[#8B4513] shrink-0 font-bold">
                  <Share2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-extrabold text-slate-900">Digital & Social Media Ambassador</h3>
                  <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">Share campaign updates, manifesto posts, and field photos across WhatsApp and Facebook groups.</p>
                </div>
              </div>

              <div className="dcp-card flex items-start gap-4 p-5 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-[#00C853] shrink-0 font-bold">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-extrabold text-slate-900">Community Event Organizer</h3>
                  <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">Help coordinate sports cups, town halls, and constituency medical camps.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-6">
            <div className="dcp-card p-8 space-y-6 shadow-md">
              <h2 className="font-heading text-2xl font-extrabold text-slate-900">Volunteer Registration</h2>
              
              {signedUp ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center space-y-3">
                  <UserCheck className="h-10 w-10 text-[#00C853] mx-auto" />
                  <h3 className="font-heading text-lg font-bold text-slate-900">Welcome To Team J.M. Gitau!</h3>
                  <p className="text-xs text-slate-600 font-medium">
                    Thank you for signing up to serve Naivasha Constituency. Our Ward coordinator will contact you directly via phone/WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Wanjiku"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-900 focus:border-[#00C853] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. 0712 345 678"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-900 focus:border-[#00C853] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Naivasha Ward *</label>
                    <select
                      value={form.ward}
                      onChange={(e) => setForm({ ...form, ward: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-900 focus:border-[#00C853] focus:outline-none"
                    >
                      {NAIVASHA_WARDS.map((w) => (
                        <option key={w.id} value={w.name}>{w.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Volunteer Role</label>
                    <select
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-900 focus:border-[#00C853] focus:outline-none"
                    >
                      <option value="Mobilizer & Youth Leader">Ward Mobilizer & Youth Leader</option>
                      <option value="Digital & Social Media">Digital & Social Media Ambassador</option>
                      <option value="Event Organizer">Event Logistics & Town Hall Organizer</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#00C853] px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-[#00C853]/25 hover:bg-[#00E676] hover:text-slate-950 transition-all"
                  >
                    Complete Registration <CheckCircle2 className="h-4 w-4" />
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
