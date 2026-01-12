import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogDb } from '@/lib/db';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import GeometricNavigation from '@/components/geometric-navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = blogDb.getAll(true); // Only published posts
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // Decode the slug to handle URL-encoded characters (spaces, etc.)
  const decodedSlug = decodeURIComponent(slug);
  // Try exact match first, then try with normalized spaces/hyphens
  let post = blogDb.getBySlug(decodedSlug, true); // Only published
  if (!post) {
    // Try with spaces replaced by hyphens
    const hyphenSlug = decodedSlug.replace(/\s+/g, '-');
    post = blogDb.getBySlug(hyphenSlug, true);
  }
  if (!post) {
    // Try with hyphens replaced by spaces
    const spaceSlug = decodedSlug.replace(/-/g, ' ');
    post = blogDb.getBySlug(spaceSlug, true);
  }

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,
    keywords: post.seoKeywords || post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.createdAt,
      authors: [post.author],
      tags: post.tags,
      images: post.image ? [`https://diljithh.vercel.app${post.image}`] : [],
    },
    alternates: {
      canonical: `https://diljithh.vercel.app/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  // Decode the slug to handle URL-encoded characters (spaces, etc.)
  const decodedSlug = decodeURIComponent(slug);
  // Try exact match first, then try with normalized spaces/hyphens
  let post = blogDb.getBySlug(decodedSlug, true); // Only published posts
  if (!post) {
    // Try with spaces replaced by hyphens
    const hyphenSlug = decodedSlug.replace(/\s+/g, '-');
    post = blogDb.getBySlug(hyphenSlug, true);
  }
  if (!post) {
    // Try with hyphens replaced by spaces
    const spaceSlug = decodedSlug.replace(/-/g, ' ');
    post = blogDb.getBySlug(spaceSlug, true);
  }
  const allPosts = blogDb.getAll(true);

  // Get related posts (same category or shared tags)
  const relatedPosts = post
    ? allPosts
        .filter(
          (p) =>
            p.slug !== post.slug &&
            (p.category === post.category ||
              p.tags.some((tag) => post.tags.includes(tag)))
        )
        .slice(0, 3)
    : [];

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.image ? `https://diljithh.vercel.app${post.image}` : undefined,
    "datePublished": post.createdAt,
    "dateModified": post.updatedAt || post.createdAt,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://diljithh.vercel.app"
    },
    "publisher": {
      "@type": "Person",
      "name": post.author
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://diljithh.vercel.app/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": post.tags.join(", ")
  };

  return (
    <main className="relative min-h-screen bg-black">
      <GeometricNavigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="relative min-h-screen py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />

        <div className="relative z-10 w-full flex flex-col items-center px-6 md:px-12">
          <div className="max-w-4xl w-full">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 text-sm text-white/60 mb-4 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
                  {post.category}
                </span>
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

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                  {post.title}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                {post.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-white/[0.05] border border-white/10 text-white/70"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div
                className="text-white/90 leading-relaxed space-y-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:text-white [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:text-white/95 [&>p]:mb-4 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>li]:text-white/80 [&>pre]:bg-white/[0.05] [&>pre]:border [&>pre]:border-white/10 [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:overflow-x-auto [&>code]:text-indigo-300 [&>code]:bg-white/[0.05] [&>code]:px-1 [&>code]:rounded"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Author Info */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/20 to-rose-500/20 border border-white/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">DV</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{post.author}</h3>
                  <p className="text-white/60">Full Stack & Flutter Developer</p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16 pt-8 border-t border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all"
                    >
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-white/60 text-sm line-clamp-2">
                        {relatedPost.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}

