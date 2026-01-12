import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const dbPath = path.join(process.cwd(), 'data', 'blog.db');

// Ensure data directory exists
const dataDir = path.dirname(dbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const db = new Database(dbPath);

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Create tables if they don't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS blog_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    content TEXT NOT NULL,
    author TEXT NOT NULL DEFAULT 'Diljith V D',
    category TEXT NOT NULL,
    tags TEXT NOT NULL,
    read_time INTEGER NOT NULL DEFAULT 5,
    image TEXT,
    published BOOLEAN NOT NULL DEFAULT 0,
    seo_keywords TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX IF NOT EXISTS idx_slug ON blog_posts(slug);
  CREATE INDEX IF NOT EXISTS idx_published ON blog_posts(published);
  CREATE INDEX IF NOT EXISTS idx_created_at ON blog_posts(created_at DESC);
`);

export interface BlogPost {
  id?: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  readTime: number;
  image?: string;
  published: boolean;
  seoKeywords?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface BlogPostDB {
  id?: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  category: string;
  tags: string; // Stored as JSON string
  read_time: number;
  image?: string;
  published: number; // SQLite uses 0/1 for boolean
  seo_keywords?: string; // Stored as JSON string
  created_at?: string;
  updated_at?: string;
}

// Convert DB format to app format
function dbToApp(post: BlogPostDB): BlogPost {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    description: post.description,
    content: post.content,
    author: post.author,
    category: post.category,
    tags: post.tags ? JSON.parse(post.tags) : [],
    readTime: post.read_time,
    image: post.image || undefined,
    published: Boolean(post.published),
    seoKeywords: post.seo_keywords ? JSON.parse(post.seo_keywords) : undefined,
    createdAt: post.created_at,
    updatedAt: post.updated_at,
  };
}

// Convert app format to DB format
function appToDb(post: Partial<BlogPost>): Partial<BlogPostDB> {
  const dbPost: Record<string, unknown> = {};
  if (post.slug !== undefined) dbPost.slug = post.slug;
  if (post.title !== undefined) dbPost.title = post.title;
  if (post.description !== undefined) dbPost.description = post.description;
  if (post.content !== undefined) dbPost.content = post.content;
  if (post.author !== undefined) dbPost.author = post.author;
  if (post.category !== undefined) dbPost.category = post.category;
  if (post.tags !== undefined) dbPost.tags = JSON.stringify(post.tags);
  if (post.readTime !== undefined) dbPost.read_time = post.readTime;
  if (post.image !== undefined) dbPost.image = post.image || null;
  if (post.published !== undefined) dbPost.published = post.published ? 1 : 0;
  if (post.seoKeywords !== undefined) dbPost.seo_keywords = post.seoKeywords ? JSON.stringify(post.seoKeywords) : null;
  if (post.updatedAt !== undefined) dbPost.updated_at = new Date().toISOString();
  return dbPost;
}

// Blog post operations
export const blogDb = {
  getAll: (publishedOnly: boolean = false): BlogPost[] => {
    const query = publishedOnly
      ? 'SELECT * FROM blog_posts WHERE published = 1 ORDER BY created_at DESC'
      : 'SELECT * FROM blog_posts ORDER BY created_at DESC';
    const posts = db.prepare(query).all() as BlogPostDB[];
    return posts.map(dbToApp);
  },

  getBySlug: (slug: string, publishedOnly: boolean = false): BlogPost | null => {
    const query = publishedOnly
      ? 'SELECT * FROM blog_posts WHERE slug = ? AND published = 1'
      : 'SELECT * FROM blog_posts WHERE slug = ?';
    const post = db.prepare(query).get(slug) as BlogPostDB | undefined;
    return post ? dbToApp(post) : null;
  },

  getById: (id: number): BlogPost | null => {
    const post = db.prepare('SELECT * FROM blog_posts WHERE id = ?').get(id) as BlogPostDB | undefined;
    return post ? dbToApp(post) : null;
  },

  create: (post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): BlogPost => {
    const dbPost = appToDb(post);
    const result = db
      .prepare(
        `INSERT INTO blog_posts (slug, title, description, content, author, category, tags, read_time, image, published, seo_keywords)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .run(
        dbPost.slug,
        dbPost.title,
        dbPost.description,
        dbPost.content,
        dbPost.author || 'Diljith V D',
        dbPost.category,
        dbPost.tags,
        dbPost.read_time || 5,
        dbPost.image || null,
        dbPost.published || 0,
        dbPost.seo_keywords || null
      );

    const created = blogDb.getById(result.lastInsertRowid as number);
    return created!;
  },

  update: (id: number, post: Partial<BlogPost>): BlogPost | null => {
    const dbPost = appToDb(post);
    const setClauses: string[] = [];
    const values: (string | number | null)[] = [];

    Object.entries(dbPost).forEach(([key, value]) => {
      setClauses.push(`${key} = ?`);
      values.push(value as string | number | null);
    });

    if (setClauses.length === 0) return blogDb.getById(id);

    setClauses.push('updated_at = ?');
    values.push(new Date().toISOString());
    values.push(id);

    db.prepare(`UPDATE blog_posts SET ${setClauses.join(', ')} WHERE id = ?`).run(...(values as never[]));
    return blogDb.getById(id);
  },

  delete: (id: number): boolean => {
    const result = db.prepare('DELETE FROM blog_posts WHERE id = ?').run(id);
    return result.changes > 0;
  },
};

// User operations
export const userDb = {
  create: (username: string, passwordHash: string) => {
    db.prepare('INSERT INTO users (username, password_hash) VALUES (?, ?)').run(username, passwordHash);
  },

  getByUsername: (username: string): { id: number; username: string; password_hash: string } | null => {
    const result = db.prepare('SELECT * FROM users WHERE username = ?').get(username) as { id: number; username: string; password_hash: string } | undefined;
    return result || null;
  },
};

export default db;

