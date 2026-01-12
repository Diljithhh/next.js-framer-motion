import { NextResponse } from 'next/server';
import { userDb } from '@/lib/db';
import { hashPassword } from '@/lib/auth';

// This endpoint creates the initial admin user
// Call it once: POST /api/auth/init with { username, password } in body
export async function POST(request: Request) {
  try {
    // Only allow in development or with a secret key
    if (process.env.NODE_ENV === 'production' && request.headers.get('x-secret-key') !== process.env.INIT_SECRET_KEY) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password required' }, { status: 400 });
    }

    // Check if user already exists
    const existing = userDb.getByUsername(username);
    if (existing) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const passwordHash = await hashPassword(password);
    userDb.create(username, passwordHash);

    return NextResponse.json({ success: true, message: 'Admin user created successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

