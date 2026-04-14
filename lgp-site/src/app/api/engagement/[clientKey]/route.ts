import { NextRequest, NextResponse } from 'next/server';
import { verifySession, COOKIE_CONFIG, fetchEngagement } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ clientKey: string }> }
) {
  const { clientKey } = await params;

  // Verify auth
  const cookie = request.cookies.get(COOKIE_CONFIG.name);
  if (!cookie?.value) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  const session = await verifySession(cookie.value);
  if (!session) {
    return NextResponse.json({ error: 'Invalid session' }, { status: 401 });
  }

  // Client sessions can only access their own engagement data
  if (session.type === 'client' && session.clientKey !== clientKey) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const data = await fetchEngagement(clientKey);
  if (!data) {
    return NextResponse.json({ error: 'Engagement not found' }, { status: 404 });
  }

  // Normalise: merge stageData._auth and stageData._portal into top-level fields
  const publishedDocs = data.publishedDocs || data.stageData?._portal?.publishedDocs || {};
  const portalUrl = data.portalUrl || data.stageData?._portal?.portalUrl;

  // Strip auth and internal portal metadata from the response
  const { auth: _authField, stageData: rawStageData, ...safeData } = data;

  // Remove _auth and _portal from stageData before returning
  const cleanStageData = rawStageData ? { ...rawStageData } : {};
  delete cleanStageData._auth;
  delete cleanStageData._portal;

  // Client access only returns published deliverables
  if (session.type === 'client') {
    return NextResponse.json({
      ...safeData,
      publishedDocs,
      portalUrl,
    });
  }

  // Internal access gets the full engagement record
  return NextResponse.json({
    ...safeData,
    publishedDocs,
    portalUrl,
    stageData: cleanStageData,
  });
}
