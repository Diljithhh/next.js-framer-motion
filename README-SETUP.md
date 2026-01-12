# Blog Admin Setup Guide

## Initial Setup

### 1. Create Admin User

Run the following command to create your admin user:

```bash
npx tsx scripts/init-admin.ts <username> <password>
```

For example:
```bash
npx tsx scripts/init-admin.ts admin mypassword123
```

### 2. Access Admin Panel

1. Visit `/admin/login`
2. Log in with your credentials
3. You'll be redirected to `/admin` where you can:
   - Create new blog posts
   - Edit existing posts
   - Delete posts
   - Publish/unpublish posts

## Features

### Admin Panel Features:
- ✅ Rich text editor (React Quill) for writing blog content
- ✅ Create, edit, and delete blog posts
- ✅ Publish/unpublish posts (draft mode)
- ✅ Add tags and SEO keywords
- ✅ Set categories, read time, and featured images
- ✅ Preview all posts in a list
- ✅ Simple authentication with JWT

### Blog Features:
- ✅ Dynamic blog posts from database
- ✅ SEO-optimized pages with metadata
- ✅ Schema.org structured data
- ✅ Related posts based on category/tags
- ✅ Responsive design matching your site theme

## Database

The blog uses SQLite (better-sqlite3) for data storage. The database file is created automatically at:
- `data/blog.db`

This is automatically ignored by git (see `.gitignore`).

## API Endpoints

### Public Endpoints:
- `GET /api/blog` - Get all published posts
- `GET /api/blog/[slug]` - Get a single post by slug

### Protected Endpoints (requires authentication):
- `POST /api/blog` - Create a new post
- `PUT /api/blog/[id]/update` - Update a post
- `DELETE /api/blog/[id]/update` - Delete a post

### Auth Endpoints:
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user

## Writing Blog Posts

### Required Fields:
- **Slug**: URL-friendly identifier (e.g., `getting-started-with-flutter`)
- **Title**: Post title
- **Description**: Brief description (used in meta tags)
- **Content**: Full post content (HTML from rich text editor)
- **Category**: Post category (e.g., `Flutter`, `Backend`, `AI`)

### Optional Fields:
- **Tags**: Array of tags for categorization
- **SEO Keywords**: Keywords for search engine optimization
- **Image URL**: Featured image path
- **Read Time**: Estimated reading time in minutes
- **Published**: Toggle to publish/draft

## Tips for SEO

1. **Use descriptive slugs**: `getting-started-with-flutter` is better than `post-1`
2. **Write compelling descriptions**: Used in meta tags and social sharing
3. **Add relevant tags**: Helps with categorization and related posts
4. **Use SEO keywords**: Target specific search terms
5. **Publish regularly**: Consistency helps with search rankings

## Security Notes

- Change the JWT_SECRET in production (set in environment variables)
- Use strong passwords for admin accounts
- The database file contains sensitive data - keep it secure
- Consider adding rate limiting for production use

## Troubleshooting

### Database not found
The database is created automatically on first run. Make sure the `data` directory is writable.

### Cannot login
Make sure you've created an admin user using the init script.

### Posts not showing
- Check if posts are marked as "Published"
- Verify database connection
- Check browser console for errors

