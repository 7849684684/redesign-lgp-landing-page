import { SignJWT, jwtVerify } from 'jose';

// Types
export interface SessionPayload {
  type: 'internal' | 'client';
  clientKey?: string;
  iat: number;
  exp: number;
}

// Constants
const COOKIE_NAME = 'lgp-session';
const INTERNAL_EXPIRY = '30d';
const CLIENT_EXPIRY = '90d';

// Get secret as Uint8Array (required by jose)
function getSecret(): Uint8Array {
  const secret = process.env.LGP_SESSION_SECRET;
  if (!secret) throw new Error('LGP_SESSION_SECRET not configured');
  return new TextEncoder().encode(secret);
}

// Sign a JWT
export async function signSession(payload: Omit<SessionPayload, 'iat' | 'exp'>): Promise<string> {
  const expiry = payload.type === 'internal' ? INTERNAL_EXPIRY : CLIENT_EXPIRY;
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiry)
    .sign(getSecret());
}

// Verify a JWT, returns null if invalid or expired
export async function verifySession(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

// Cookie config
export const COOKIE_CONFIG = {
  name: COOKIE_NAME,
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  path: '/',
};

// Cloudflare Access service token headers (Zero Trust gateway in front of n8n)
function cfAccessHeaders(): Record<string, string> {
  const id = process.env.CF_ACCESS_CLIENT_ID;
  const secret = process.env.CF_ACCESS_CLIENT_SECRET;
  if (!id || !secret) return {};
  return {
    'CF-Access-Client-Id': id,
    'CF-Access-Client-Secret': secret,
  };
}

// n8n API helper - proxied server-side to keep the token out of the browser
export async function fetchEngagement(clientKey: string) {
  const baseUrl = process.env.LGP_N8N_BASE_URL || 'https://n8n.eppa.me/webhook';
  const token = process.env.LGP_N8N_TOKEN || '';
  const res = await fetch(
    `${baseUrl}/lgp-engagement-data?client=${encodeURIComponent(clientKey)}&token=${encodeURIComponent(token)}`,
    { cache: 'no-store', headers: cfAccessHeaders() }
  );
  if (!res.ok) return null;
  return res.json();
}

export async function fetchAllEngagements() {
  const baseUrl = process.env.LGP_N8N_BASE_URL || 'https://n8n.eppa.me/webhook';
  const token = process.env.LGP_N8N_TOKEN || '';
  const res = await fetch(
    `${baseUrl}/lgp-engagement-data?list=true&token=${encodeURIComponent(token)}`,
    { cache: 'no-store', headers: cfAccessHeaders() }
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data.engagements || [];
}
