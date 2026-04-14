import { NextRequest, NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import { signSession, COOKIE_CONFIG, fetchEngagement } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { password, type, clientKey } = await request.json();

    if (!password || !type) {
      return NextResponse.json({ error: 'Missing credentials' }, { status: 400 });
    }

    let isValid = false;

    if (type === 'internal') {
      const hash = process.env.LGP_INTERNAL_HASH;
      if (!hash) return NextResponse.json({ error: 'Auth not configured' }, { status: 500 });
      isValid = await compare(password, hash);
    } else if (type === 'client' && clientKey) {
      const engagement = await fetchEngagement(clientKey);
      // Check both top-level auth and stageData._auth (workaround for current API)
      const hash = engagement?.auth?.passwordHash || engagement?.stageData?._auth?.passwordHash;
      if (!hash) {
        // Debug: try a direct fetch to see what's happening
        const debugUrl = `${process.env.LGP_N8N_BASE_URL || 'https://n8n.eppa.me/webhook'}/lgp-engagement-data?client=${clientKey}&token=${process.env.LGP_N8N_TOKEN || ''}`;
        let debugFetchResult = 'not attempted';
        try {
          const debugRes = await fetch(debugUrl, { cache: 'no-store' });
          debugFetchResult = `status=${debugRes.status} ok=${debugRes.ok}`;
          if (debugRes.ok) {
            const debugData = await debugRes.json();
            debugFetchResult += ` keys=${Object.keys(debugData).join(',')}`;
          }
        } catch (e: unknown) {
          debugFetchResult = `error: ${e instanceof Error ? e.message : String(e)}`;
        }
        return NextResponse.json({
          error: 'Engagement not found',
          _debug: {
            hasEngagement: !!engagement,
            envBaseUrl: process.env.LGP_N8N_BASE_URL?.substring(0, 30) || 'not set',
            envToken: process.env.LGP_N8N_TOKEN ? 'set' : 'not set',
            debugFetch: debugFetchResult,
          },
        }, { status: 404 });
      }
      isValid = await compare(password, hash);
    } else {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    if (!isValid) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    const token = await signSession({
      type,
      ...(type === 'client' && clientKey ? { clientKey } : {}),
    });

    const response = NextResponse.json({ success: true });
    response.cookies.set(COOKIE_CONFIG.name, token, {
      ...COOKIE_CONFIG,
      maxAge: type === 'internal' ? 30 * 24 * 60 * 60 : 90 * 24 * 60 * 60,
    });

    return response;
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
