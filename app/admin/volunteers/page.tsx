'use client';

import { useState, useEffect } from 'react';
import { 
  Users, 
  Download, 
  Filter, 
  Phone, 
  Mail, 
  MapPin, 
  Trash2, 
  Loader2, 
  CheckCircle, 
  Clock, 
  UserCheck 
} from 'lucide-react';

const WARDS = [
  'ALL',
  'Viwanda',
  'Mai Mahiu',
  'Olkaria',
  'Naivasha East',
  'Naivasha Town',
  'Lakeview',
  'Hell\'s Gate',
  'Biashara',
];

const STATUSES = ['ALL', 'new', 'contacted', 'assigned'];

export default function AdminVolunteersPage() {
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedWard, setSelectedWard] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL');

  useEffect(() => {
    fetchVolunteers();
  }, [selectedWard, selectedStatus]);

  const fetchVolunteers = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (selectedWard !== 'ALL') query.set('ward', selectedWard);
      if (selectedStatus !== 'ALL') query.set('status', selectedStatus);

      const res = await fetch(`/api/admin/volunteers?${query.toString()}`);
      const data = await res.json();
      if (data.volunteers) {
        setVolunteers(data.volunteers);
      }
    } catch (e) {
      console.error('Failed to fetch volunteers:', e);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      const res = await fetch('/api/admin/volunteers', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        setVolunteers(volunteers.map((v) => (v.id === id ? { ...v, status } : v)));
      }
    } catch (e) {
      console.error('Failed to update status:', e);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to remove this volunteer signup?')) return;
    try {
      const res = await fetch(`/api/admin/volunteers?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setVolunteers(volunteers.filter((v) => v.id !== id));
      }
    } catch (e) {
      console.error('Failed to delete volunteer:', e);
    }
  };

  const exportToCSV = () => {
    if (volunteers.length === 0) return;

    const headers = ['Full Name', 'Phone', 'Email', 'Ward', 'Polling Station', 'Status', 'Signed Up At'];
    const rows = volunteers.map((v) => [
      `"${v.fullName.replace(/"/g, '""')}"`,
      `"${v.phone.replace(/"/g, '""')}"`,
      `"${(v.email || '').replace(/"/g, '""')}"`,
      `"${v.ward.replace(/"/g, '""')}"`,
      `"${(v.pollingStation || '').replace(/"/g, '""')}"`,
      `"${v.status}"`,
      `"${new Date(v.createdAt).toLocaleDateString()}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `JM_Gitau_Volunteers_${selectedWard}_Ward_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            <span>Volunteer & Supporter CRM</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Track and mobilize supporters registered via <code>/get-involved</code> across Naivasha wards.
          </p>
        </div>

        <button
          onClick={exportToCSV}
          disabled={volunteers.length === 0}
          className="min-h-[42px] px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-amber-400 font-bold text-xs shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Download className="w-4 h-4" />
          <span>Export CSV Dataset</span>
        </button>
      </div>

      {/* Responsive Filter Toolbar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Filter Ward:</span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {WARDS.map((w) => (
            <button
              key={w}
              onClick={() => setSelectedWard(w)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedWard === w
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {w}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      {loading ? (
        <div className="flex items-center justify-center py-16 text-slate-500 gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-amber-400" />
          <span>Loading supporter records...</span>
        </div>
      ) : volunteers.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center text-slate-500 text-sm">
          No volunteers registered for the selected ward filter.
        </div>
      ) : (
        <>
          {/* Mobile Card List (shown on small screens) */}
          <div className="md:hidden space-y-3">
            {volunteers.map((v) => (
              <div key={v.id} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 shadow-xs">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-slate-100 text-sm">{v.fullName}</h3>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {v.ward} Ward
                    </span>
                  </div>
                  
                  <select
                    value={v.status}
                    onChange={(e) => handleStatusChange(v.id, e.target.value)}
                    className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-xs font-semibold text-slate-200"
                  >
                    <option value="new">🆕 New</option>
                    <option value="contacted">📞 Contacted</option>
                    <option value="assigned">✅ Assigned</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300 pt-1 border-t border-slate-800/80">
                  <a href={`tel:${v.phone}`} className="flex items-center gap-2 text-amber-400 font-bold py-1">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{v.phone}</span>
                  </a>
                  {v.pollingStation && (
                    <div className="text-[11px] text-slate-400">
                      Station: {v.pollingStation}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] text-slate-500">
                  <span>Signed up: {new Date(v.createdAt).toLocaleDateString()}</span>
                  <button
                    onClick={() => handleDelete(v.id)}
                    className="text-red-400 font-semibold flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop HTML Table (hidden on mobile) */}
          <div className="hidden md:block bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950 border-b border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    <th className="py-3 px-4">Supporter Name</th>
                    <th className="py-3 px-4">Ward</th>
                    <th className="py-3 px-4">Contact</th>
                    <th className="py-3 px-4">Polling Station</th>
                    <th className="py-3 px-4">Status Tag</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-xs text-slate-300">
                  {volunteers.map((v) => (
                    <tr key={v.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-100">{v.fullName}</td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          {v.ward}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <a href={`tel:${v.phone}`} className="font-bold text-slate-200 hover:text-amber-400">
                          {v.phone}
                        </a>
                      </td>
                      <td className="py-3.5 px-4 text-slate-400">
                        {v.pollingStation || '—'}
                      </td>
                      <td className="py-3.5 px-4">
                        <select
                          value={v.status}
                          onChange={(e) => handleStatusChange(v.id, e.target.value)}
                          className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded text-xs font-semibold text-slate-200"
                        >
                          <option value="new">🆕 New</option>
                          <option value="contacted">📞 Contacted</option>
                          <option value="assigned">✅ Assigned</option>
                        </select>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => handleDelete(v.id)}
                          className="p-1 text-slate-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
