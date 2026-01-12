import { NextRequest, NextResponse } from 'next/server';
import { blogDb } from '@/lib/db';
import { getAuthFromRequest } from '@/lib/utils/auth-helpers';
import type { BlogPost } from '@/lib/db';

// GET - Get all blog posts (public if published, all if admin)
export async function GET(request: NextRequest) {
  try {
    const auth = getAuthFromRequest(request);
    const publishedOnly = !auth; // Only show published posts to non-authenticated users

    const posts = blogDb.getAll(publishedOnly);
    return NextResponse.json({ posts });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Create new blog post (admin only)
export async function POST(request: NextRequest) {
  try {
    const auth = getAuthFromRequest(request);
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'> = {
      slug: body.slug,
      title: body.title,
      description: body.description,
      content: body.content,
      author: body.author || 'Diljith V D',
      category: body.category,
      tags: Array.isArray(body.tags) ? body.tags : [],
      readTime: body.readTime || 5,
      image: body.image,
      published: body.published || false,
      seoKeywords: body.seoKeywords || [],
    };

    // Validate required fields
    if (!post.slug || !post.title || !post.description || !post.content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const created = blogDb.create(post);
    return NextResponse.json({ post: created }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

