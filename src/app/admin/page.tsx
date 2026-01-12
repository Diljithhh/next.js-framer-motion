"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Save, LogOut, Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import GeometricNavigation from '@/components/geometric-navigation';
import type { BlogPost } from '@/lib/db';
// Dynamically import TiptapEditor to avoid SSR issues
const TiptapEditor = dynamic(() => import('@/components/ui/tiptap-editor'), {
  ssr: false,
  loading: () => (
    <div className="border border-white/10 rounded-xl bg-white/[0.05] min-h-[300px] flex items-center justify-center">
      <p className="text-white/60">Loading editor...</p>
    </div>
  ),
});

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    description: '',
    content: '',
    author: 'Diljith V D',
    category: '',
    tags: [] as string[],
    readTime: 5,
    image: '',
    published: false,
    seoKeywords: [] as string[],
  });



  const [tagInput, setTagInput] = useState('');
  const [keywordInput, setKeywordInput] = useState('');

  useEffect(() => {
    checkAuth();
    if (isAuthenticated) {
      loadPosts();
    }
  }, [isAuthenticated]);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push('/admin/login');
      }
    } catch {
      setIsAuthenticated(false);
      router.push('/admin/login');
    }
  };

  const loadPosts = async () => {
    try {
      const res = await fetch('/api/blog');
      const data = await res.json();
      setPosts(data.posts || []);
    } catch (error) {
      console.error('Failed to load posts:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let url: string;
      let method: string;

      if (isEditing && editingPost) {
        // If slug changed, we need to use the original slug to find the post
        // The API will handle updating the slug internally
        url = `/api/blog/${encodeURIComponent(editingPost.slug)}`;
        method = 'PUT';
      } else {
        url = '/api/blog';
        method = 'POST';
      }

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.error || 'Failed to save post');
        return;
      }

      const data = await response.json();
      await loadPosts();
      resetForm();

      if (isEditing) {
        alert('Post updated successfully!');
      } else {
        alert('Post created successfully!');
      }
    } catch (error) {
      alert('Failed to save post. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this post? This action cannot be undone.')) return;

    try {
      const response = await fetch(`/api/blog/${encodeURIComponent(slug)}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await loadPosts();
        alert('Post deleted successfully!');
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to delete post');
      }
    } catch (error) {
      alert('Failed to delete post. Please try again.');
      console.error(error);
    }
  };





  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsEditing(true);
    setFormData({
      slug: post.slug,
      title: post.title,
      description: post.description,
      content: post.content,
      author: post.author,
      category: post.category,
      tags: post.tags || [],
      readTime: post.readTime,
      image: post.image || '',
      published: post.published,
      seoKeywords: post.seoKeywords || [],
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingPost(null);
    setIsEditing(false);
    setFormData({
      slug: '',
      title: '',
      description: '',
      content: '',
      author: 'Diljith V D',
      category: '',
      tags: [],
      readTime: 5,
      image: '',
      published: false,
      seoKeywords: [],
    });
    setTagInput('');
    setKeywordInput('');
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData({ ...formData, tags: formData.tags.filter(t => t !== tag) });
  };

  const addKeyword = () => {
    if (keywordInput.trim() && !formData.seoKeywords.includes(keywordInput.trim())) {
      setFormData({ ...formData, seoKeywords: [...formData.seoKeywords, keywordInput.trim()] });
      setKeywordInput('');
    }
  };

  const removeKeyword = (keyword: string) => {
    setFormData({ ...formData, seoKeywords: formData.seoKeywords.filter(k => k !== keyword) });
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect
  }

  return (
    <main className="relative min-h-screen bg-black">
      <GeometricNavigation />

      <section className="relative pt-24 pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Admin Panel
            </h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 hover:bg-red-500/30 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                {isEditing ? 'Edit Post' : 'Create New Post'}
              </h2>
              {isEditing && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-white/70 hover:text-white transition-colors"
                >
                  <Plus className="w-4 h-4 inline mr-2" />
                  New Post
                </button>
              )}
            </div>

            <div className="space-y-6">
              {/* Slug */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Slug (URL-friendly)
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all"
                  placeholder="getting-started-with-flutter"
                  required
                />
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all"
                  placeholder="Getting Started with Flutter"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all resize-none"
                  rows={3}
                  placeholder="A brief description of the post"
                  required
                />
              </div>

              {/* Content - Rich Text Editor */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Content
                </label>
                <TiptapEditor
                  key={editingPost?.id || 'new-post'} // Add this key prop
                  content={formData.content}
                  onChange={(content) => setFormData({ ...formData, content })}
                  placeholder="Write your blog post content here..."
                />
              </div>

              {/* Author & Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Category
                  </label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all"
                    placeholder="Flutter"
                    required
                  />
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Tags
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    className="flex-1 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all"
                    placeholder="Add a tag and press Enter"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="px-4 py-2 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/30 transition-colors"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/70 text-sm flex items-center gap-2"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="hover:text-white"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* SEO Keywords */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  SEO Keywords
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
                    className="flex-1 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all"
                    placeholder="Add SEO keyword and press Enter"
                  />
                  <button
                    type="button"
                    onClick={addKeyword}
                    className="px-4 py-2 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/30 transition-colors"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.seoKeywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/70 text-sm flex items-center gap-2"
                    >
                      {keyword}
                      <button
                        type="button"
                        onClick={() => removeKeyword(keyword)}
                        className="hover:text-white"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Image URL & Read Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Image URL
                  </label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all"
                    placeholder="/blog/image.jpg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Read Time (minutes)
                  </label>
                  <input
                    type="number"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: parseInt(e.target.value) || 5 })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all"
                    min="1"
                  />
                </div>
              </div>

              {/* Published Toggle */}
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="w-5 h-5 rounded border-white/20 bg-white/[0.05] text-indigo-500 focus:ring-indigo-400"
                  />
                  <span className="text-white/80">Published</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                {loading ? 'Saving...' : isEditing ? 'Update Post' : 'Create Post'}
              </button>
            </div>
          </form>

          {/* Posts List */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">All Posts</h2>
            <div className="space-y-4">
              {posts.length === 0 ? (
                <p className="text-white/60">No posts yet. Create your first post above!</p>
              ) : (
                posts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                        {post.published ? (
                          <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 border border-green-500/30 text-green-300 flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            Published
                          </span>
                        ) : (
                          <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 border border-gray-500/30 text-gray-300 flex items-center gap-1">
                            <EyeOff className="w-3 h-3" />
                            Draft
                          </span>
                        )}
                      </div>
                      <p className="text-white/60 text-sm mb-1">{post.slug}</p>
                      <p className="text-white/50 text-xs">
                        {new Date(post.createdAt || '').toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="p-2 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/30 transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(post.slug)}
                        className="p-2 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 hover:bg-red-500/30 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

