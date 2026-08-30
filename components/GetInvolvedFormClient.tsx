'use client';

import { useState } from 'react';
import { Users, Heart, Share2, CheckCircle2, UserCheck, Ear } from 'lucide-react';
import { NAIVASHA_WARDS } from '@/lib/campaignData';

export default function GetInvolvedFormClient() {
  const [signedUp, setSignedUp] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    ward: 'Biashara Ward',
    role: 'Mobilizer & Youth Leader'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSignedUp(true);
  };

  return (
    <div className="space-y-16 pb-20 bg-[#F8FAFC]">
      
      {/* HERO BANNER */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-xs font-extrabold text-[#00C853] uppercase tracking-wider mx-auto">
            <UserCheck className="h-3.5 w-3.5" />
            <span>JOIN TEAM J.M. GITAU</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Stand with Naivasha. Shape 2027.
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Real change happens when neighbors talk to neighbors. Join our ward volunteer network, youth mobilizers, and community captains today.
          </p>
        </div>
      </section>

      {/* FORM AND WAYS TO HELP GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Volunteer Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-2">
              <h2 className="font-heading text-2xl font-extrabold text-slate-900">Sign Up as a Ward Volunteer</h2>
              <p className="text-xs text-slate-600 font-medium">
                Fill in your details below. Our ward campaign coordinator will reach out to you directly via WhatsApp or Phone.
              </p>
            </div>

            {signedUp ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00C853] text-white mx-auto shadow-md">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900">Thank You, {form.name}!</h3>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  Your volunteer registration for <span className="font-bold text-[#00C853]">{form.ward}</span> has been received. Together we build Naivasha!
                </p>
                <button
                  onClick={() => setSignedUp(false)}
                  className="text-xs font-bold text-[#00C853] hover:underline pt-2"
                >
                  Register Another Volunteer
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., John Kamau"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#00C853]/20 focus:border-[#00C853]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (WhatsApp)</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g., 0712 345 678"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#00C853]/20 focus:border-[#00C853]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Ward in Naivasha</label>
                  <select
                    value={form.ward}
                    onChange={(e) => setForm({ ...form, ward: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#00C853]/20 focus:border-[#00C853]"
                  >
                    {NAIVASHA_WARDS.map((w) => (
                      <option key={w.slug} value={w.name}>
                        {w.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Volunteer Role</label>
                  <select
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#00C853]/20 focus:border-[#00C853]"
                  >
                    <option value="Mobilizer & Youth Leader">Mobilizer & Youth Leader</option>
                    <option value="Ward Coordinator">Ward Coordinator</option>
                    <option value="Digital & Social Media Advocate">Digital & Social Media Advocate</option>
                    <option value="Event Logistics & Support">Event Logistics & Support</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#00C853] py-3.5 text-xs font-bold text-white shadow-md shadow-[#00C853]/20 hover:bg-[#00E676] hover:text-slate-950 transition-all"
                >
                  Submit Registration
                </button>
              </form>
            )}
          </div>

          {/* Cards: Ways to Support */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h2 className="font-heading text-2xl font-extrabold text-slate-900">Other Ways to Help</h2>
              <p className="text-xs text-slate-600 font-medium">
                Every action counts — from hosting a small group listening forum to sharing updates online.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2 shadow-xs">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00C853] text-white">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-sm font-bold text-slate-900">Host a Neighborhood Forum</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Invite neighbors in your estate or village for an informal conversation with J.M. Gitau.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2 shadow-xs">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#8B4513] text-white">
                  <Share2 className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-sm font-bold text-slate-900">Spread the Word Online</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Share campaign manifestos, ward initiatives, and updates across your WhatsApp groups and social feeds.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2 shadow-xs sm:col-span-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-sm font-bold text-slate-900">Youth & Women Empowerment Captains</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Lead local community groups, market trader networks, or sports tournaments under the Skiza Wakenya banner.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
