import { NextRequest } from 'next/server';
import { verifyToken } from '../auth';

export function getAuthFromRequest(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  if (!token) return null;
  return verifyToken(token);
}

