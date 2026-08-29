'use client';

import { useState, useEffect } from 'react';
import { 
  Newspaper, 
  Plus, 
  Search, 
  Star, 
  Trash2, 
  ExternalLink, 
  Loader2, 
  PlusCircle
} from 'lucide-react';

const CATEGORIES = [
  'ALL',
  'Church & Community',
  'Campaign Rallies',
  'Development & Projects',
  'Tributes & Condolences',
  'Press & Statements',
  'Youth & Empowerment',
  'General',
];

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('ALL');
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Form State
  const [newCategory, setNewCategory] = useState('Press & Statements');
  const [newMessage, setNewMessage] = useState('');
  const [newPostUrl, setNewPostUrl] = useState('');
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/posts');
      const data = await res.json();
      if (data.posts) {
        setPosts(data.posts);
      }
    } catch (e) {
      console.error('Failed to load posts:', e);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleFeatured = async (id: string, current: boolean) => {
    try {
      const res = await fetch('/api/admin/posts', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, isFeatured: !current }),
      });
      if (res.ok) {
        setPosts(posts.map((p) => (p.id === id ? { ...p, isFeatured: !current } : p)));
      }
    } catch (e) {
      console.error('Error toggling featured status:', e);
    }
  };

  const handleChangeCategory = async (id: string, category: string) => {
    try {
      const res = await fetch('/api/admin/posts', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, category }),
      });
      if (res.ok) {
        setPosts(posts.map((p) => (p.id === id ? { ...p, category } : p)));
      }
    } catch (e) {
      console.error('Error updating category:', e);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    try {
      const res = await fetch(`/api/admin/posts?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setPosts(posts.filter((p) => p.id !== id));
      }
    } catch (e) {
      console.error('Error deleting post:', e);
    }
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setCreating(true);
    try {
      const res = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: newCategory,
          message: newMessage,
          postUrl: newPostUrl || 'https://www.facebook.com/JMGitauNaivashaMP',
          isPublished: true,
        }),
      });

      if (res.ok) {
        setNewMessage('');
        setNewPostUrl('');
        setShowCreateModal(false);
        fetchPosts();
      }
    } catch (e) {
      console.error('Failed to create post:', e);
    } finally {
      setCreating(false);
    }
  };

  const filteredPosts = posts.filter((post) => {
    const matchesCat = selectedCat === 'ALL' || post.category === selectedCat;
    const matchesSearch =
      !search ||
      post.message.toLowerCase().includes(search.toLowerCase()) ||
      post.category.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
            <Newspaper className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            <span>Feed Posts & News Moderation</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Categorize Facebook feed posts or publish official press updates directly from the field.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="min-h-[42px] px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 self-start sm:self-auto shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>New Press Update</span>
        </button>
      </div>

      {/* Controls & Search */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search post content..."
            className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.slice(0, 6).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCat === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts List */}
      {loading ? (
        <div className="flex items-center justify-center py-16 text-slate-500 gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-amber-400" />
          <span>Loading feed posts...</span>
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center text-slate-500 text-xs">
          No posts match your current search/category filter.
        </div>
      ) : (
        <div className="space-y-3">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 shadow-xs">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <select
                  value={post.category}
                  onChange={(e) => handleChangeCategory(post.id, e.target.value)}
                  className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded text-xs font-bold text-amber-400 focus:outline-none"
                >
                  {CATEGORIES.filter((c) => c !== 'ALL').map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>{post.date}</span>
                  {post.postUrl && (
                    <a href={post.postUrl} target="_blank" rel="noreferrer" className="hover:text-amber-400">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xs text-slate-200 leading-relaxed whitespace-pre-line line-clamp-4">
                {post.message}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <div className="flex items-center gap-3 text-[11px] text-slate-400">
                  <span>👍 {post.reactions || 0}</span>
                  <span>💬 {post.comments || 0}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleFeatured(post.id, post.isFeatured)}
                    className={`px-2.5 py-1 rounded text-xs font-bold flex items-center gap-1 transition-colors ${
                      post.isFeatured
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-slate-950 text-slate-400 border border-slate-800'
                    }`}
                  >
                    <Star className={`w-3 h-3 ${post.isFeatured ? 'fill-amber-400 text-amber-400' : ''}`} />
                    <span>{post.isFeatured ? 'Featured' : 'Feature'}</span>
                  </button>

                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="p-1 text-slate-500 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* New Post Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl max-w-lg w-full p-6 shadow-xl space-y-4">
            <h2 className="text-lg font-bold text-slate-100">
              New Campaign Statement / Post
            </h2>

            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Category
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 focus:outline-none"
                >
                  {CATEGORIES.filter((c) => c !== 'ALL').map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Post Caption
                </label>
                <textarea
                  rows={4}
                  required
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Enter official message or update..."
                  className="w-full p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 placeholder-slate-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Optional Facebook Link
                </label>
                <input
                  type="url"
                  value={newPostUrl}
                  onChange={(e) => setNewPostUrl(e.target.value)}
                  placeholder="https://www.facebook.com/JMGitauNaivashaMP/posts/..."
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-xs disabled:opacity-50"
                >
                  {creating ? 'Publishing...' : 'Publish Update'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
