'use client';

import { useState } from 'react';
import { Users, Heart, Share2, CheckCircle2, UserCheck } from 'lucide-react';
import { NAIVASHA_WARDS } from '@/lib/campaignData';

export default function GetInvolvedPage() {
  const [signedUp, setSignedUp] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    ward: 'Biashara Ward',
    role: 'Mobilizer & Youth Leader'
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setSignedUp(true);
  };

  return (
    <div className="space-y-16 py-12">
      
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">VOLUNTEER MOBILIZATION</span>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Join Team J.M. Gitau 2027</h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Be part of the grassroots movement transforming Naivasha Constituency across all 7 Wards.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Volunteer Roles */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl font-bold text-white">How You Can Participate</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Ward Youth & Women Mobilizer</h3>
                  <p className="text-xs text-slate-400 mt-1">Lead local outreach and voter sensitization in your polling center and village.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 shrink-0">
                  <Share2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Digital & Social Media Ambassador</h3>
                  <p className="text-xs text-slate-400 mt-1">Share campaign updates, manifesto posts, and field photos across WhatsApp and Facebook groups.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 shrink-0">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Community Event Organizer</h3>
                  <p className="text-xs text-slate-400 mt-1">Help coordinate sports cups, town halls, and constituency medical camps.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 space-y-6">
              <h2 className="text-2xl font-bold text-white">Volunteer Registration</h2>
              
              {signedUp ? (
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-6 text-center space-y-3">
                  <UserCheck className="h-10 w-10 text-blue-400 mx-auto" />
                  <h3 className="text-lg font-bold text-white">Welcome To Team J.M. Gitau!</h3>
                  <p className="text-xs text-slate-300">
                    Thank you for signing up to serve Naivasha Constituency. Our Ward coordinator will contact you directly via phone/WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Wanjiku"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+254 700 000 000"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Naivasha Ward *</label>
                    <select
                      value={form.ward}
                      onChange={(e) => setForm({ ...form, ward: e.target.value })}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                    >
                      {NAIVASHA_WARDS.map((w) => (
                        <option key={w.id} value={w.name}>{w.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Volunteer Role</label>
                    <select
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                    >
                      <option value="Mobilizer & Youth Leader">Ward Mobilizer & Youth Leader</option>
                      <option value="Digital & Social Media">Digital & Social Media Ambassador</option>
                      <option value="Event Organizer">Event Logistics & Town Hall Organizer</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all"
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
