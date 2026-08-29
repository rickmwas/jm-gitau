'use client';

import { useState, useEffect } from 'react';
import { 
  CalendarDays, 
  Plus, 
  MapPin, 
  Clock, 
  Trash2, 
  Loader2 
} from 'lucide-react';

const WARDS = [
  'Viwanda',
  'Mai Mahiu',
  'Olkaria',
  'Naivasha East',
  'Naivasha Town',
  'Lakeview',
  'Hell\'s Gate',
  'Biashara',
];

const EVENT_TYPES = [
  'Rally / Townhall',
  'Church Service Visit',
  'Youth Sports Tournament',
  'Women Group Meetup',
  'Door to Door Mobilization',
];

export default function AdminEventsPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00 AM');
  const [location, setLocation] = useState('');
  const [ward, setWard] = useState('Viwanda');
  const [type, setType] = useState('Rally / Townhall');
  const [description, setDescription] = useState('');
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/events');
      const data = await res.json();
      if (data.events) {
        setEvents(data.events);
      }
    } catch (e) {
      console.error('Failed to load events:', e);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);
    try {
      const res = await fetch('/api/admin/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, date, time, location, ward, type, description, status: 'upcoming' }),
      });

      if (res.ok) {
        setShowModal(false);
        setTitle('');
        setLocation('');
        setDescription('');
        fetchEvents();
      }
    } catch (e) {
      console.error('Error creating event:', e);
    } finally {
      setCreating(false);
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      const res = await fetch('/api/admin/events', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        setEvents(events.map((ev) => (ev.id === id ? { ...ev, status } : ev)));
      }
    } catch (e) {
      console.error('Error updating event status:', e);
    }
  };

  const handleDeleteEvent = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;
    try {
      const res = await fetch(`/api/admin/events?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setEvents(events.filter((ev) => ev.id !== id));
      }
    } catch (e) {
      console.error('Error deleting event:', e);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
            <CalendarDays className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            <span>Campaign Events & Rally Scheduler</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Schedule town halls, rallies, and church visits across Naivasha constituency wards.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="min-h-[42px] px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 self-start sm:self-auto shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>New Campaign Event</span>
        </button>
      </div>

      {/* Events List */}
      {loading ? (
        <div className="flex items-center justify-center py-16 text-slate-500 gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-amber-400" />
          <span>Loading scheduled rallies...</span>
        </div>
      ) : events.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center text-slate-500 text-xs">
          No campaign events scheduled yet. Tap "New Campaign Event" to schedule a rally!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((ev) => (
            <div key={ev.id} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 shadow-xs">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  {ev.ward} Ward
                </span>

                <select
                  value={ev.status}
                  onChange={(e) => handleStatusChange(ev.id, e.target.value)}
                  className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-xs font-semibold text-slate-200"
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-100">{ev.title}</h3>
                {ev.description && <p className="text-xs text-slate-400 mt-1 leading-relaxed">{ev.description}</p>}
              </div>

              <div className="pt-2.5 border-t border-slate-800 space-y-1 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{ev.date} at {ev.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span className="truncate">{ev.location}</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] font-medium text-slate-400">{ev.type}</span>
                  <button
                    onClick={() => handleDeleteEvent(ev.id)}
                    className="text-slate-500 hover:text-red-400 transition-colors p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* New Event Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl max-w-lg w-full p-6 shadow-xl space-y-4">
            <h2 className="text-lg font-bold text-slate-100">
              Schedule New Campaign Event
            </h2>

            <form onSubmit={handleCreateEvent} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Event Title
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Mai Mahiu Youth Empowerment Rally"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Time
                  </label>
                  <input
                    type="text"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="10:00 AM"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Ward
                  </label>
                  <select
                    value={ward}
                    onChange={(e) => setWard(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 focus:outline-none"
                  >
                    {WARDS.map((w) => (
                      <option key={w} value={w}>
                        {w}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Event Type
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 focus:outline-none"
                  >
                    {EVENT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Location Venue
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Mai Mahiu Social Hall"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-xs disabled:opacity-50"
                >
                  {creating ? 'Saving...' : 'Save Event'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
