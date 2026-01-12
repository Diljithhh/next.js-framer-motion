import type { Metadata } from 'next';
import Link from 'next/link';
import { blogDb } from '@/lib/db';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import GeometricNavigation from '@/components/geometric-navigation';

export const metadata: Metadata = {
  title: 'Blog — Flutter, AI & Development Articles',
  description: 'Technical articles, tutorials, and insights on Flutter development, AI integration, and software engineering by Diljith V D.',
  keywords: ['flutter blog', 'ai development blog', 'software engineering', 'technical articles', 'full stack development'],
  openGraph: {
    title: 'Blog — Flutter, AI & Development Articles',
    description: 'Technical articles, tutorials, and insights on Flutter development, AI integration, and software engineering.',
    type: 'website',
    url: 'https://diljithh.vercel.app/blog',
  },
};

export default async function BlogPage() {
  const posts = blogDb.getAll(true); // Only published posts

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Diljith's Blog",
    "description": "Technical articles on Flutter, AI, and software development",
    "url": "https://diljithh.vercel.app/blog",
    "author": {
      "@type": "Person",
      "name": "Diljith V D",
      "url": "https://diljithh.vercel.app"
    }
  };

  return (
    <main className="relative min-h-screen bg-black">
      <GeometricNavigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative min-h-screen py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />

        <div className="relative z-10 w-full flex flex-col items-center px-6 md:px-12">
          <div className="max-w-6xl w-full">
            {/* Header */}
            <div className="text-center mb-16 md:mb-20">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                  Blog & Articles
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                Technical insights, tutorials, and thoughts on Flutter, AI, and software development
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                >
                  {post.image && (
                    <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-rose-500/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-rose-500/10 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.createdAt || '').toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime} min read
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-white/70 mb-4 line-clamp-2">
                      {post.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-white/[0.05] border border-white/10 text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-indigo-400 text-sm font-medium group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {posts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-white/60 text-lg">No blog posts yet. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

