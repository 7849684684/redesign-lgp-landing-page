import { NextRequest, NextResponse } from 'next/server';
import { verifySession, COOKIE_CONFIG } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const cookie = request.cookies.get(COOKIE_CONFIG.name);
  if (!cookie?.value) {
    return NextResponse.json({ authenticated: false });
  }

  const session = await verifySession(cookie.value);
  if (!session) {
    return NextResponse.json({ authenticated: false });
  }

  return NextResponse.json({
    authenticated: true,
    type: session.type,
    clientKey: session.clientKey || null,
  });
}
