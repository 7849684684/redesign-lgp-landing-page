import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { fetchEngagement } from '@/lib/auth';
import Section from '@/components/Section';
import Button from '@/components/Button';
import DocViewer from '@/app/portal/docs/[template]/DocViewer';

const TEMPLATE_LABELS: Record<string, string> = {
  'engagement-profile':    'Engagement Profile',
  'framing-report':        'Framing Brief',
  'discovery-report':      'Discovery Report',
  'design-blueprint':      'Design Blueprint',
  'setup-guide':           'Setup Guide',
  'facilitator-run-sheet': 'Facilitator Run Sheet',
  'flash-report':          'Executive Impact Report',
  'post-game-report':      'Post-Game Report',
};

// Maps template slug to the stageData key that holds its generated config
const TEMPLATE_STAGE_DATA_KEY: Record<string, string> = {
  'engagement-profile':    'L1',
  'framing-report':        'L2',
  'discovery-report':      'L3',
  'design-blueprint':      'L4',
  'setup-guide':           'G3',
  'facilitator-run-sheet': 'G4',
  'flash-report':          'G6',
  'post-game-report':      'P4',
};

interface Engagement {
  clientKey: string;
  clientName: string;
  stageData: Record<string, Record<string, unknown>>;
  publishedDocs: Record<string, { publishedAt: string; config: Record<string, unknown> }>;
}

export default async function InternalDocPage({
  params,
}: {
  params: Promise<{ clientKey: string; template: string }>;
}) {
  const { clientKey, template } = await params;

  const headersList = await headers();
  if (headersList.get('x-session-type') !== 'internal') redirect('/internal/login');

  const engagement: Engagement | null = await fetchEngagement(clientKey);
  if (!engagement) redirect('/internal/pipeline');

  const publishedDoc = engagement.publishedDocs?.[template];
  const stageDataKey = TEMPLATE_STAGE_DATA_KEY[template];
  const stageConfig = stageDataKey ? engagement.stageData?.[stageDataKey] : undefined;

  const config = publishedDoc?.config ?? stageConfig ?? {};
  const isDraft = !publishedDoc && !!stageConfig;
  const label = TEMPLATE_LABELS[template] || template;

  if (!publishedDoc && !stageConfig) {
    return (
      <Section className="pt-24 pb-16">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="font-editorial text-2xl text-text-primary mb-4">No Content Yet</h1>
          <p className="text-text-secondary mb-6">
            This document hasn&apos;t been generated yet.
          </p>
          <Button href={`/internal/dashboard/${clientKey}`} variant="outline">
            Back to Dashboard
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Breadcrumb bar */}
      <Section className="pt-4 pb-4 border-b border-surface-2">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 min-w-0">
            <Button
              href="/internal/pipeline"
              variant="outline"
              className="!px-3 !py-1.5 text-xs shrink-0"
            >
              Pipeline
            </Button>
            <span className="text-text-tertiary text-sm">/</span>
            <Button
              href={`/internal/dashboard/${clientKey}`}
              variant="outline"
              className="!px-3 !py-1.5 text-xs shrink-0"
            >
              {engagement.clientName}
            </Button>
            <span className="text-text-tertiary text-sm">/</span>
            <h1 className="font-editorial text-base text-text-primary truncate">{label}</h1>
            {isDraft && (
              <span className="text-xs px-2 py-0.5 rounded-sm bg-amber-500/10 text-amber-600 font-medium shrink-0">
                Draft
              </span>
            )}
          </div>
        </div>
      </Section>

      {/* Document iframe */}
      <DocViewer template={template} config={config as Record<string, unknown>} />
    </>
  );
}
