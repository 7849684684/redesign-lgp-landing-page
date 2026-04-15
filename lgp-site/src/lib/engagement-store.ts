import { Redis } from '@upstash/redis';

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

const INDEX_KEY = 'eng:index';
const keyFor = (clientKey: string) => `eng:${clientKey}`;

let _client: Redis | null = null;
function client(): Redis {
  if (_client) return _client;
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (!url || !token) throw new Error('Upstash Redis env vars not configured');
  _client = new Redis({ url, token });
  return _client;
}

export async function getEngagement(clientKey: string): Promise<Engagement | null> {
  return (await client().get<Engagement>(keyFor(clientKey))) ?? null;
}

export async function listEngagements(): Promise<Engagement[]> {
  const keys = await client().smembers(INDEX_KEY);
  if (!keys.length) return [];
  const records = await client().mget<Engagement[]>(...keys.map(keyFor));
  return records.filter((r): r is Engagement => r !== null);
}

export async function putEngagement(clientKey: string, eng: Engagement): Promise<void> {
  const stamped: Engagement = { ...eng, clientKey, updatedAt: new Date().toISOString() };
  const c = client();
  await c.set(keyFor(clientKey), stamped);
  await c.sadd(INDEX_KEY, clientKey);
}

export async function deleteEngagement(clientKey: string): Promise<void> {
  const c = client();
  await c.del(keyFor(clientKey));
  await c.srem(INDEX_KEY, clientKey);
}
