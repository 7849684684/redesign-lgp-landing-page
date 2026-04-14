import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { fetchEngagement } from '@/lib/auth';
import Section from '@/components/Section';
import Button from '@/components/Button';
import LogoutButton from '@/components/LogoutButton';

// Maps template slugs to their stage label and pipeline stage
const TEMPLATES: Array<{ slug: string; label: string; stage: string; stageDataKey: string }> = [
  { slug: 'engagement-profile',     label: 'Engagement Profile',       stage: 'L1', stageDataKey: 'L1' },
  { slug: 'framing-report',         label: 'Framing Brief',             stage: 'L2', stageDataKey: 'L2' },
  { slug: 'discovery-report',       label: 'Discovery Report',          stage: 'L3', stageDataKey: 'L3' },
  { slug: 'design-blueprint',       label: 'Design Blueprint',          stage: 'L4', stageDataKey: 'L4' },
  { slug: 'setup-guide',            label: 'Setup Guide',               stage: 'G3', stageDataKey: 'G3' },
  { slug: 'facilitator-run-sheet',  label: 'Facilitator Run Sheet',     stage: 'G4', stageDataKey: 'G4' },
  { slug: 'flash-report',           label: 'Executive Impact Report',   stage: 'G6', stageDataKey: 'G6' },
  { slug: 'post-game-report',       label: 'Post-Game Report',          stage: 'P4', stageDataKey: 'P4' },
];

const STAGE_ORDER = [
  'L1', 'L2', 'L3', 'L4', 'L5', 'L6',
  'G1', 'G2', 'G3', 'G4', 'G5', 'G6',
  'P1', 'P2', 'P3', 'P4', 'P5', 'P6',
] as const;

type StageStatus = 'complete' | 'active' | 'pending' | undefined;

interface Engagement {
  clientKey: string;
  clientName: string;
  title: string;
  currentStage: string;
  stageStatus: Record<string, StageStatus>;
  surveys: Record<string, string>;
  stageData: Record<string, Record<string, unknown>>;
  publishedDocs: Record<string, { publishedAt: string; config: Record<string, unknown> }>;
  contact: { name: string; email: string };
  createdAt: string;
  updatedAt: string;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function statusLabel(status: StageStatus) {
  if (status === 'complete') return { text: 'Complete', classes: 'bg-green-500/10 text-green-600' };
  if (status === 'active') return { text: 'Active', classes: 'bg-brand-teal/10 text-brand-teal' };
  return { text: 'Pending', classes: 'bg-surface-2 text-text-tertiary' };
}

function DocStatusBadge({ status }: { status: 'published' | 'draft' | 'none' }) {
  if (status === 'published') {
    return (
      <span className="text-xs px-2 py-0.5 rounded-sm bg-green-500/10 text-green-600 font-medium">
        Published
      </span>
    );
  }
  if (status === 'draft') {
    return (
      <span className="text-xs px-2 py-0.5 rounded-sm bg-amber-500/10 text-amber-600 font-medium">
        Draft
      </span>
    );
  }
  return (
    <span className="text-xs px-2 py-0.5 rounded-sm bg-surface-2 text-text-tertiary font-medium">
      Not started
    </span>
  );
}

export default async function InternalDashboardPage({
  params,
}: {
  params: Promise<{ clientKey: string }>;
}) {
  const { clientKey } = await params;
  const headersList = await headers();
  const sessionType = headersList.get('x-session-type');
  if (sessionType !== 'internal') redirect('/internal/login');

  const engagement: Engagement | null = await fetchEngagement(clientKey);
  if (!engagement) redirect('/internal/pipeline');

  const completedCount = STAGE_ORDER.filter(
    (s) => engagement.stageStatus?.[s] === 'complete'
  ).length;

  const portalUrl = `https://longgameproject.org/portal/login?client=${clientKey}`;

  return (
    <>
      {/* Header */}
      <Section className="pt-8 pb-6 border-b border-surface-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Button href="/internal/pipeline" variant="outline" className="!px-3 !py-1.5 text-xs">
                ← Pipeline
              </Button>
              <span className="text-text-tertiary text-sm">/</span>
              <span className="text-text-secondary text-sm">{engagement.clientName}</span>
            </div>
            <h1 className="font-editorial text-2xl md:text-3xl text-text-primary">
              {engagement.clientName}
            </h1>
            <p className="text-text-secondary mt-1">{engagement.title}</p>
          </div>
          <div className="flex items-center gap-4 pt-6">
            <div className="text-right">
              <p className="label text-text-tertiary">Current stage</p>
              <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-sm font-medium bg-brand-teal/10 text-brand-teal font-mono mt-1">
                {engagement.currentStage}
              </span>
            </div>
            <LogoutButton redirectTo="/internal/login" />
          </div>
        </div>
      </Section>

      {/* Meta bar */}
      <Section className="py-4 border-b border-surface-2" surface={1}>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm">
          <div>
            <span className="label text-text-tertiary mr-2">Progress</span>
            <span className="text-text-primary">{completedCount} / {STAGE_ORDER.length} stages complete</span>
          </div>
          <div>
            <span className="label text-text-tertiary mr-2">Contact</span>
            <a href={`mailto:${engagement.contact?.email}`} className="text-brand-teal hover:underline">
              {engagement.contact?.name}
            </a>
          </div>
          <div>
            <span className="label text-text-tertiary mr-2">Created</span>
            <span className="text-text-secondary">{formatDate(engagement.createdAt)}</span>
          </div>
          <div>
            <span className="label text-text-tertiary mr-2">Updated</span>
            <span className="text-text-secondary">{formatDate(engagement.updatedAt)}</span>
          </div>
          <div>
            <span className="label text-text-tertiary mr-2">Client portal</span>
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-teal hover:underline text-xs font-mono"
            >
              {portalUrl}
            </a>
          </div>
        </div>
      </Section>

      <div className="grid md:grid-cols-3 gap-0">
        {/* Left: Documents */}
        <div className="md:col-span-2 border-r border-surface-2">
          <Section className="py-6">
            <h2 className="label text-text-tertiary mb-4">Documents</h2>
            <div className="space-y-2">
              {TEMPLATES.map(({ slug, label, stage, stageDataKey }) => {
                const allPublished = engagement.publishedDocs || engagement.stageData?._portal?.publishedDocs || {};
                const published = allPublished[slug];
                const hasStageData = !!engagement.stageData?.[stageDataKey];
                const docStatus: 'published' | 'draft' | 'none' = published
                  ? 'published'
                  : hasStageData
                  ? 'draft'
                  : 'none';

                const canView = docStatus !== 'none';

                return (
                  <div
                    key={slug}
                    className="flex items-center justify-between gap-4 px-4 py-3 rounded-sm border border-surface-2 hover:border-surface-2 bg-surface-0 hover:bg-surface-1 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="label text-text-tertiary w-8 shrink-0">{stage}</span>
                      <span className="text-text-primary text-sm truncate">{label}</span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <DocStatusBadge status={docStatus} />
                      {published && (
                        <span className="text-xs text-text-tertiary hidden sm:block">
                          {formatDate(published.publishedAt)}
                        </span>
                      )}
                      {canView ? (
                        <Link
                          href={`/internal/docs/${clientKey}/${slug}`}
                          className="text-xs text-brand-teal hover:underline"
                        >
                          View
                        </Link>
                      ) : (
                        <span className="text-xs text-text-tertiary">-</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>
        </div>

        {/* Right: Stage status + Surveys */}
        <div>
          {/* Stage status */}
          <Section className="py-6 border-b border-surface-2">
            <h2 className="label text-text-tertiary mb-4">Pipeline stages</h2>
            <div className="grid grid-cols-2 gap-1.5">
              {STAGE_ORDER.map((stage) => {
                const status = engagement.stageStatus?.[stage];
                const badge = statusLabel(status);
                return (
                  <div
                    key={stage}
                    className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-sm border border-surface-2 text-xs"
                  >
                    <span className="font-mono text-text-secondary">{stage}</span>
                    <span className={`px-1.5 py-0.5 rounded-sm text-xs font-medium ${badge.classes}`}>
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </Section>

          {/* Surveys */}
          {engagement.surveys && Object.keys(engagement.surveys).length > 0 && (
            <Section className="py-6">
              <h2 className="label text-text-tertiary mb-4">Survey links</h2>
              <div className="space-y-2">
                {Object.entries(engagement.surveys).map(([stage, url]) => (
                  <div key={stage} className="flex items-center justify-between gap-3 text-sm">
                    <span className="font-mono text-text-secondary label">{stage}</span>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-teal hover:underline text-xs truncate max-w-[180px]"
                      title={url}
                    >
                      Open survey
                    </a>
                  </div>
                ))}
              </div>
            </Section>
          )}
        </div>
      </div>
    </>
  );
}
