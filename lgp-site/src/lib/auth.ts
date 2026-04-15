import { SignJWT, jwtVerify } from 'jose';
import { getEngagement, listEngagements } from './engagement-store';

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

// Engagement data access - now reads from the Upstash Redis push mirror.
// n8n pushes updates to /api/engagement/sync; these helpers just read.
// Signatures preserved so route handlers remain unchanged.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchEngagement(clientKey: string): Promise<any> {
  return getEngagement(clientKey);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchAllEngagements(): Promise<any[]> {
  return listEngagements();
}
