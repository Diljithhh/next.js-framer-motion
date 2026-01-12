import { NextRequest, NextResponse } from 'next/server';
import { getAuthFromRequest } from '@/lib/utils/auth-helpers';

export async function GET(request: NextRequest) {
  const auth = getAuthFromRequest(request);
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return NextResponse.json({ user: auth });
}

