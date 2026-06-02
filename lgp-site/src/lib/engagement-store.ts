import { put, del, list } from '@vercel/blob';

export interface Engagement {
  clientKey: string;
  clientName?: string;
  title?: string;
  currentStage?: string;
  stageStatus?: Record<string, string>;
  surveys?: Record<string, string>;
  contact?: { name?: string; email?: string };
  createdAt?: string;
  updatedAt?: string;
  stageData?: Record<string, unknown> & {
    _auth?: { passwordHash?: string };
    _portal?: { publishedDocs?: Record<string, unknown>; portalUrl?: string };
  };
  publishedDocs?: Record<string, unknown>;
  portalUrl?: string;
  auth?: { passwordHash?: string; createdAt?: string };
  [k: string]: unknown;
}

const PREFIX = 'engagements';
const blobPath = (clientKey: string) => `${PREFIX}/${clientKey}.json`;

export async function getEngagement(clientKey: string): Promise<Engagement | null> {
  const { blobs } = await list({ prefix: blobPath(clientKey), limit: 1 });
  if (!blobs.length) return null;
  const res = await fetch(blobs[0].downloadUrl, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export async function listEngagements(): Promise<Engagement[]> {
  const { blobs } = await list({ prefix: `${PREFIX}/` });
  const results = await Promise.all(
    blobs.map(b => fetch(b.downloadUrl, { cache: 'no-store' }).then(r => r.ok ? r.json() : null))
  );
  return results.filter((r): r is Engagement => r !== null);
}

export async function putEngagement(clientKey: string, eng: Engagement): Promise<void> {
  const stamped: Engagement = { ...eng, clientKey, updatedAt: new Date().toISOString() };
  await put(blobPath(clientKey), JSON.stringify(stamped), {
    access: 'private',
    addRandomSuffix: false,
    contentType: 'application/json',
  });
}

export async function deleteEngagement(clientKey: string): Promise<void> {
  const { blobs } = await list({ prefix: blobPath(clientKey), limit: 1 });
  if (blobs.length) await del(blobs[0].url);
}
