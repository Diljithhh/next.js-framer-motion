import { NextRequest, NextResponse } from 'next/server';
import { blogDb } from '@/lib/db';
import { getAuthFromRequest } from '@/lib/utils/auth-helpers';
import type { BlogPost } from '@/lib/db';

type Params = {
  params: { slug: string };
};

// GET - Get single blog post
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { slug } = await params;
    const auth = getAuthFromRequest(request);
    const publishedOnly = !auth;

    // Decode the slug to handle URL-encoded characters
    const decodedSlug = decodeURIComponent(slug);

    // Try exact match first, then try with normalized spaces/hyphens
    let post = blogDb.getBySlug(decodedSlug, publishedOnly);
    if (!post) {
      const hyphenSlug = decodedSlug.replace(/\s+/g, '-');
      post = blogDb.getBySlug(hyphenSlug, publishedOnly);
    }
    if (!post) {
      const spaceSlug = decodedSlug.replace(/-/g, ' ');
      post = blogDb.getBySlug(spaceSlug, publishedOnly);
    }

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json({ post });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}

// PUT - Update blog post by slug (admin only)
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const { slug } = await params;
    const auth = getAuthFromRequest(request);
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const existingPost = blogDb.getBySlug(decodeURIComponent(slug));
    if (!existingPost || !existingPost.id) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const body = await request.json();

    // If slug is being changed, check if new slug already exists
    if (body.slug !== undefined && body.slug !== existingPost.slug) {
      const slugExists = blogDb.getBySlug(body.slug);
      if (slugExists && slugExists.id !== existingPost.id) {
        return NextResponse.json({ error: 'A post with this slug already exists' }, { status: 400 });
      }
    }

    const updates: Partial<BlogPost> = {};

    if (body.slug !== undefined) updates.slug = body.slug;
    if (body.title !== undefined) updates.title = body.title;
    if (body.description !== undefined) updates.description = body.description;
    if (body.content !== undefined) updates.content = body.content;
    if (body.author !== undefined) updates.author = body.author;
    if (body.category !== undefined) updates.category = body.category;
    if (body.tags !== undefined) updates.tags = Array.isArray(body.tags) ? body.tags : [];
    if (body.readTime !== undefined) updates.readTime = body.readTime;
    if (body.image !== undefined) updates.image = body.image;
    if (body.published !== undefined) updates.published = body.published;
    if (body.seoKeywords !== undefined) updates.seoKeywords = body.seoKeywords;

    const updated = blogDb.update(existingPost.id, updates);
    if (!updated) {
      return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
    }

    return NextResponse.json({ post: updated });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}

// DELETE - Delete blog post by slug (admin only)
export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const { slug } = await params;
    const auth = getAuthFromRequest(request);
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const post = blogDb.getBySlug(decodeURIComponent(slug));
    if (!post || !post.id) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const deleted = blogDb.delete(post.id);
    if (!deleted) {
      return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Post deleted successfully' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}

