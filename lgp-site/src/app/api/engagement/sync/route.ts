import { NextRequest, NextResponse } from 'next/server';
import { putEngagement, deleteEngagement, type Engagement } from '@/lib/engagement-store';

const MAX_BODY_BYTES = 256 * 1024;

export async function POST(request: NextRequest) {
  const token = process.env.LGP_SYNC_TOKEN;
  if (!token) {
    return NextResponse.json({ error: 'Sync not configured' }, { status: 500 });
  }

  const auth = request.headers.get('authorization') || '';
  if (auth !== `Bearer ${token}`) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
  }

  const record = body as Partial<Engagement> & { _delete?: boolean };
  const clientKey = record.clientKey;
  if (typeof clientKey !== 'string' || !clientKey) {
    return NextResponse.json({ error: 'Missing clientKey' }, { status: 400 });
  }

  try {
    if (record._delete === true) {
      await deleteEngagement(clientKey);
      return NextResponse.json({ success: true, clientKey, deleted: true });
    }
    const { _delete: _omit, ...clean } = record;
    void _omit;
    await putEngagement(clientKey, clean as Engagement);
    return NextResponse.json({ success: true, clientKey });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Sync failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
