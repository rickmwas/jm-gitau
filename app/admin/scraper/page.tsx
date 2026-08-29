'use client';

import { useState, useEffect } from 'react';
import { RefreshCw, Play, CheckCircle2, XCircle, AlertCircle, Loader2, Server } from 'lucide-react';

export default function AdminScraperPage() {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState('apify');
  const [limit, setLimit] = useState(15);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/scraper');
      const data = await res.json();
      if (data.logs) {
        setLogs(data.logs);
      }
    } catch (e) {
      console.error('Failed to fetch scraper logs:', e);
    } finally {
      setLoading(false);
    }
  };

  const handleRunScraper = async () => {
    setRunning(true);
    setStatusMessage('Launching Facebook feed sync pipeline...');
    try {
      const res = await fetch('/api/admin/scraper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode, limit }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatusMessage('Sync process launched in background! View progress in logs below.');
        setTimeout(fetchLogs, 3000);
      } else {
        setStatusMessage(`Error: ${data.error}`);
      }
    } catch (e: any) {
      setStatusMessage(`Error triggering sync: ${e.message}`);
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
          <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
          <span>Facebook Feed Ingestion & Sync Controls</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Sync posts directly from Hon. J.M. Gitau's Facebook Page or inspect automatic 12-hour cron logs.
        </p>
      </div>

      {/* Control Panel */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-5 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-sm font-bold text-slate-100">On-Demand Sync Trigger</h2>
            <p className="text-xs text-slate-400">Fetch newest posts & process WebP photos</p>
          </div>

          <span className="px-2.5 py-1 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Auto-Cron: 2x Daily
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
              Ingestion Mode
            </label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 focus:outline-none"
            >
              <option value="apify">Apify Live Facebook Scraper</option>
              <option value="file">Local Dataset / File Ingest</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
              Fetch Limit
            </label>
            <select
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 focus:outline-none"
            >
              <option value={5}>Newest 5 Posts</option>
              <option value={15}>Newest 15 Posts (Standard)</option>
              <option value={30}>Newest 30 Posts (Deep Sync)</option>
            </select>
          </div>
        </div>

        {statusMessage && (
          <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        <div className="flex justify-end pt-1">
          <button
            onClick={handleRunScraper}
            disabled={running}
            className="w-full sm:w-auto min-h-[42px] px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 disabled:opacity-50 transition-colors shadow-xs"
          >
            {running ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Running Sync...</span>
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4" />
                <span>Run Feed Sync Now</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Sync Execution History Logs */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4 shadow-xs">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <Server className="w-4 h-4 text-amber-400" />
            <span>Execution Audit Logs</span>
          </h2>
          <button onClick={fetchLogs} className="text-xs text-amber-400 font-semibold hover:underline">
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-8 text-slate-500 gap-2">
            <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
            <span className="text-xs">Fetching execution logs...</span>
          </div>
        ) : logs.length === 0 ? (
          <div className="py-6 text-center text-slate-500 text-xs">
            No scraper executions logged in database yet.
          </div>
        ) : (
          <div className="space-y-2">
            {logs.map((log) => (
              <div key={log.id} className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {log.status === 'SUCCESS' ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        SUCCESS
                      </span>
                    ) : log.status === 'RUNNING' ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                        <Loader2 className="w-3 h-3 animate-spin" />
                        RUNNING
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-500/10 text-red-400 border border-red-500/20 flex items-center gap-1">
                        <XCircle className="w-3 h-3" />
                        FAILED
                      </span>
                    )}

                    <span className="text-[11px] text-slate-400">
                      {new Date(log.runAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">{log.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
