import { NextRequest, NextResponse } from 'next/server';
import { userDb } from '@/lib/db';
import { verifyPassword, generateToken, setAuthToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password required' }, { status: 400 });
    }

    const user = userDb.getByUsername(username);
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const isValid = await verifyPassword(password, user.password_hash);
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = generateToken({ userId: user.id, username: user.username });
    await setAuthToken(token);

    return NextResponse.json({ success: true, user: { id: user.id, username: user.username } });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

