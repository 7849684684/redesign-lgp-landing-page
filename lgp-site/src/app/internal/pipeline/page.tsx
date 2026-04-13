import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { fetchAllEngagements } from '@/lib/auth';
import Section from '@/components/Section';
import LogoutButton from '@/components/LogoutButton';

// Canonical stage order for the 18-stage pipeline
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
  updatedAt: string;
  createdAt: string;
}

function computeProgress(stageStatus: Record<string, StageStatus>): number {
  return STAGE_ORDER.filter((s) => stageStatus[s] === 'complete').length;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function StageBadge({ stage }: { stage: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium bg-brand-teal/10 text-brand-teal font-mono">
      {stage}
    </span>
  );
}

function ProgressBar({ completed, total }: { completed: number; total: number }) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 rounded-full bg-surface-2 overflow-hidden">
        <div
          className="h-full rounded-full bg-brand-teal transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs text-text-tertiary tabular-nums w-10 text-right">
        {completed}/{total}
      </span>
    </div>
  );
}

export default async function PipelinePage() {
  const headersList = await headers();
  const sessionType = headersList.get('x-session-type');
  if (sessionType !== 'internal') redirect('/internal/login');

  const raw: Engagement[] = await fetchAllEngagements();

  // Sort by updatedAt descending
  const engagements = [...raw].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  const totalCount = engagements.length;
  const activeCount = engagements.filter((e) =>
    Object.values(e.stageStatus || {}).some((s) => s === 'active')
  ).length;
  const completedCount = engagements.filter((e) =>
    STAGE_ORDER.every((s) => e.stageStatus?.[s] === 'complete')
  ).length;

  return (
    <>
      {/* Header */}
      <Section className="pt-8 pb-6 border-b border-surface-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <p className="label text-text-tertiary mb-1">LGP Internal</p>
              <h1 className="font-editorial text-2xl md:text-3xl text-text-primary">
                Pipeline Overview
              </h1>
            </div>
          </div>
          <LogoutButton redirectTo="/internal/login" />
        </div>
      </Section>

      {/* Summary stats */}
      <Section className="py-6 border-b border-surface-2" surface={1}>
        <div className="grid grid-cols-3 gap-6 max-w-lg">
          <div>
            <p className="text-3xl font-editorial text-text-primary">{totalCount}</p>
            <p className="label text-text-tertiary mt-1">Total</p>
          </div>
          <div>
            <p className="text-3xl font-editorial text-brand-teal">{activeCount}</p>
            <p className="label text-text-tertiary mt-1">Active</p>
          </div>
          <div>
            <p className="text-3xl font-editorial text-text-secondary">{completedCount}</p>
            <p className="label text-text-tertiary mt-1">Completed</p>
          </div>
        </div>
      </Section>

      {/* Engagement list */}
      <Section className="py-8">
        {engagements.length === 0 ? (
          <p className="text-text-secondary text-sm py-12 text-center">
            No engagements found.
          </p>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-2">
                    <th className="text-left label text-text-tertiary pb-3 font-normal pr-6">Client</th>
                    <th className="text-left label text-text-tertiary pb-3 font-normal pr-6">Stage</th>
                    <th className="text-left label text-text-tertiary pb-3 font-normal pr-6 min-w-[180px]">Progress</th>
                    <th className="text-left label text-text-tertiary pb-3 font-normal pr-6">Updated</th>
                    <th className="pb-3" />
                  </tr>
                </thead>
                <tbody>
                  {engagements.map((engagement) => {
                    const completed = computeProgress(engagement.stageStatus || {});
                    return (
                      <tr
                        key={engagement.clientKey}
                        className="border-b border-surface-2 hover:bg-surface-1 transition-colors"
                      >
                        <td className="py-4 pr-6">
                          <p className="text-text-primary font-medium">{engagement.clientName}</p>
                          <p className="text-text-tertiary text-xs mt-0.5">{engagement.title}</p>
                        </td>
                        <td className="py-4 pr-6">
                          <StageBadge stage={engagement.currentStage} />
                        </td>
                        <td className="py-4 pr-6">
                          <ProgressBar completed={completed} total={STAGE_ORDER.length} />
                        </td>
                        <td className="py-4 pr-6 text-text-tertiary whitespace-nowrap">
                          {formatDate(engagement.updatedAt)}
                        </td>
                        <td className="py-4 text-right">
                          <Link
                            href={`/internal/dashboard/${engagement.clientKey}`}
                            className="text-xs text-brand-teal hover:underline"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
              {engagements.map((engagement) => {
                const completed = computeProgress(engagement.stageStatus || {});
                return (
                  <Link
                    key={engagement.clientKey}
                    href={`/internal/dashboard/${engagement.clientKey}`}
                    className="block rounded-sm border border-surface-2 p-4 hover:border-brand-teal transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <p className="text-text-primary font-medium">{engagement.clientName}</p>
                        <p className="text-text-tertiary text-xs mt-0.5">{engagement.title}</p>
                      </div>
                      <StageBadge stage={engagement.currentStage} />
                    </div>
                    <ProgressBar completed={completed} total={STAGE_ORDER.length} />
                    <p className="text-text-tertiary text-xs mt-2">
                      Updated {formatDate(engagement.updatedAt)}
                    </p>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </Section>
    </>
  );
}
