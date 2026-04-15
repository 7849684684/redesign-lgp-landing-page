import { NextResponse, NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

function getSecret(): Uint8Array {
  const secret = process.env.LGP_SESSION_SECRET;
  if (!secret) throw new Error('LGP_SESSION_SECRET not configured');
  return new TextEncoder().encode(secret);
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- Auth checks for protected routes ---
  const isPortalProtected = pathname.startsWith('/portal/') && !pathname.startsWith('/portal/login');
  const isInternalProtected = pathname.startsWith('/internal/') && !pathname.startsWith('/internal/login');

  if (isPortalProtected || isInternalProtected) {
    const cookie = request.cookies.get('lgp-session');
    if (!cookie?.value) {
      // Redirect to appropriate login
      const loginUrl = isInternalProtected
        ? new URL('/internal/login', request.url)
        : new URL('/portal/login', request.url);
      // Preserve client param for portal
      const clientParam = request.nextUrl.searchParams.get('client');
      if (clientParam) loginUrl.searchParams.set('client', clientParam);
      // Preserve return URL so the login page can redirect back after auth
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }

    try {
      const { payload } = await jwtVerify(cookie.value, getSecret());
      const session = payload as { type: string; clientKey?: string };

      // Scope enforcement - internal sessions can't access portal routes and vice versa
      if (isInternalProtected && session.type !== 'internal') {
        return NextResponse.redirect(new URL('/portal/login', request.url));
      }
      if (isPortalProtected && session.type !== 'client') {
        return NextResponse.redirect(new URL('/internal/login', request.url));
      }

      // Inject session data into request headers for use in server components
      const response = NextResponse.next();
      response.headers.set('x-session-type', session.type);
      if (session.clientKey) response.headers.set('x-session-client', session.clientKey);
      addSecurityHeaders(response);
      return response;
    } catch {
      // Invalid or expired token - clear the cookie and redirect to login
      const loginUrl = isInternalProtected
        ? new URL('/internal/login', request.url)
        : new URL('/portal/login', request.url);
      loginUrl.searchParams.set('from', pathname);
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete('lgp-session');
      return response;
    }
  }

  // --- Default: security headers only ---
  const response = NextResponse.next();
  addSecurityHeaders(response);
  return response;
}

function addSecurityHeaders(response: NextResponse) {
  const headers = response.headers;
  headers.set('X-Frame-Options', 'DENY');
  headers.set('X-XSS-Protection', '1; mode=block');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');
  headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; font-src 'self' data: https://fonts.gstatic.com; frame-src 'self' https://lgp-dashboard.vercel.app"
  );
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
