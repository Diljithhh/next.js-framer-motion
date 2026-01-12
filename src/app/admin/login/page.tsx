"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import GeometricNavigation from '@/components/geometric-navigation';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Login failed');
        return;
      }

      router.push('/admin');
      router.refresh();
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-black">
      <GeometricNavigation />

      <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-md w-full">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
            <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
            <p className="text-white/60 mb-8">Sign in to manage your blog posts</p>

            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all"
                  placeholder="Enter your username"
                  required
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

