import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { fetchEngagement } from '@/lib/auth';
import Section from '@/components/Section';
import Button from '@/components/Button';
import LogoutButton from '@/components/LogoutButton';
import Image from 'next/image';

// ----- Static lookup tables -----

const TEMPLATE_LABELS: Record<string, string> = {
  'engagement-profile': 'Engagement Profile',
  'framing-report': 'Framing Brief',
  'discovery-report': 'Discovery Report',
  'design-blueprint': 'Design Blueprint',
  'setup-guide': 'Setup Guide',
  'facilitator-run-sheet': 'Facilitator Run Sheet',
  'flash-report': 'Executive Impact Report',
  'post-game-report': 'Post-Game Report',
  'sponsor-dashboard': 'Sponsor Dashboard',
};

const STAGE_LABELS: Record<string, string> = {
  L1: 'Fit Assessment',
  L2: 'Framing',
  L3: 'Discovery',
  L4: 'Design',
  L5: 'Development',
  L6: 'Playtesting',
  G1: 'Production',
  G2: 'Logistics',
  G3: 'Setup',
  G4: 'Facilitation',
  G5: 'Observation',
  G6: 'Debrief',
  P1: 'Data Collection',
  P2: 'Analysis',
  P3: 'Validation',
  P4: 'Reporting',
  P5: 'Implementation',
  P6: 'Value Tracking',
};

const PHASES = [
  { label: 'Leadup', stages: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6'] },
  { label: 'Game Day', stages: ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'] },
  { label: 'Post-Game', stages: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'] },
];

type StageStatus = 'complete' | 'active' | 'pending' | 'locked';

// ----- Sub-components -----

function StageNode({ id, status }: { id: string; status: StageStatus }) {
  const label = STAGE_LABELS[id];

  // Node visual style by status
  const nodeStyle: Record<StageStatus, string> = {
    complete: 'bg-brand-teal border-brand-teal text-white',
    active: 'bg-brand-amber border-brand-amber text-white',
    pending: 'bg-surface-0 border-surface-2 text-text-tertiary',
    locked: 'bg-surface-1 border-surface-2 text-text-tertiary opacity-50',
  };

  return (
    <div className="flex flex-col items-center gap-1.5 min-w-[52px]">
      <div className="relative">
        <div
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-medium transition-all ${nodeStyle[status]}`}
          title={`${id}: ${label}`}
        >
          {status === 'complete' ? (
            // Tick mark for completed stages
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <span>{id}</span>
          )}
        </div>
        {/* Pulse ring on active stage */}
        {status === 'active' && (
          <span className="absolute inset-0 rounded-full border-2 border-brand-amber animate-ping opacity-40" />
        )}
      </div>
      <span className="text-[9px] text-text-tertiary text-center leading-tight max-w-[52px] break-words">
        {label}
      </span>
    </div>
  );
}

function PipelineTracker({ stageStatus }: { stageStatus: Record<string, string> }) {
  return (
    <div className="rounded-sm border border-surface-2 bg-surface-0 p-6">
      <h2 className="label text-text-secondary mb-6">Engagement Progress</h2>
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-0 sm:divide-x sm:divide-surface-2">
        {PHASES.map((phase) => (
          <div key={phase.label} className="flex-1 sm:px-6 first:sm:pl-0 last:sm:pr-0">
            <p className="label text-text-tertiary mb-4">{phase.label}</p>
            <div className="flex flex-wrap gap-x-3 gap-y-4">
              {phase.stages.map((stageId) => (
                <StageNode
                  key={stageId}
                  id={stageId}
                  status={(stageStatus[stageId] as StageStatus) || 'locked'}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DocCard({ template, publishedAt }: { template: string; publishedAt: string }) {
  const label = TEMPLATE_LABELS[template] || template;
  const date = new Date(publishedAt).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-surface-2 last:border-0">
      <div>
        <p className="text-text-primary text-sm font-medium">{label}</p>
        <p className="text-xs text-text-tertiary mt-0.5">Published {date}</p>
      </div>
      <Button href={`/portal/docs/${template}`} variant="outline" className="!px-3 !py-1.5 text-xs shrink-0">
        View
      </Button>
    </div>
  );
}

// ----- Page -----

export default async function PortalDashboardPage() {
  const headersList = await headers();
  const clientKey = headersList.get('x-session-client');
  if (!clientKey) redirect('/portal/login');

  const engagement = await fetchEngagement(clientKey);
  if (!engagement) redirect('/portal/login');

  const {
    clientName,
    title,
    currentStage,
    stageStatus = {},
    surveys = {},
    publishedDocs = {},
    contact,
  } = engagement;

  const currentSurveyUrl = surveys[currentStage];
  const publishedDocEntries = Object.entries(publishedDocs) as [string, { publishedAt: string }][];

  return (
    <div className="min-h-screen bg-surface-0">
      {/* Portal header bar */}
      <header className="border-b border-surface-2 bg-surface-0 sticky top-0 z-10">
        <div className="mx-auto max-w-[1280px] px-6 py-3 flex items-center justify-between">
          <Image
            src="/logos/lgp-icon-teal-solid.svg"
            alt="The Long Game Project"
            width={28}
            height={28}
          />
          <LogoutButton />
        </div>
      </header>

      {/* Engagement header */}
      <Section className="pt-10 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="label text-text-tertiary mb-1">{clientName}</p>
            <h1 className="font-editorial text-3xl md:text-4xl text-text-primary">{title}</h1>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="label text-text-tertiary">Current stage</span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-sm bg-brand-amber/10 text-brand-amber text-sm font-medium border border-brand-amber/20">
              {currentStage} &ndash; {STAGE_LABELS[currentStage] || currentStage}
            </span>
          </div>
        </div>
      </Section>

      {/* Progress tracker */}
      <Section className="pb-8">
        <PipelineTracker stageStatus={stageStatus} />
      </Section>

      {/* Two-column lower section */}
      <Section className="pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left: documents + survey CTA */}
          <div className="lg:col-span-2 space-y-6">

            {/* Survey CTA */}
            {currentSurveyUrl && (
              <div className="rounded-sm border border-brand-amber/30 bg-brand-amber/5 p-6">
                <p className="label text-brand-amber mb-2">Action Required</p>
                <p className="text-text-primary text-sm mb-4">
                  Please complete the {STAGE_LABELS[currentStage] || currentStage} survey to help us prepare for the next stage of your engagement.
                </p>
                <Button href={currentSurveyUrl} variant="amber" external>
                  Complete Survey &rarr;
                </Button>
              </div>
            )}

            {/* Published documents */}
            <div className="rounded-sm border border-surface-2 bg-surface-0 p-6">
              <h2 className="label text-text-secondary mb-1">Your Documents</h2>
              {publishedDocEntries.length === 0 ? (
                <p className="text-text-tertiary text-sm mt-4">
                  No documents have been published yet. You&apos;ll be notified when your first deliverable is ready.
                </p>
              ) : (
                <div className="mt-2">
                  {publishedDocEntries.map(([template, doc]) => (
                    <DocCard key={template} template={template} publishedAt={doc.publishedAt} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: contact card */}
          <div className="space-y-4">
            {contact && (
              <div className="rounded-sm border border-surface-2 bg-surface-0 p-6">
                <h2 className="label text-text-secondary mb-4">Your Consultant</h2>
                <p className="text-text-primary text-sm font-medium">{contact.name}</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-brand-teal text-sm hover:underline mt-1 inline-block"
                >
                  {contact.email}
                </a>
                <p className="text-text-tertiary text-xs mt-4 leading-relaxed">
                  Questions about your engagement? Reach out directly - we&apos;re here to help.
                </p>
              </div>
            )}

            {/* Help card */}
            <div className="rounded-sm border border-surface-2 bg-surface-1 p-6">
              <h2 className="label text-text-secondary mb-3">About This Portal</h2>
              <p className="text-text-secondary text-xs leading-relaxed">
                This portal gives you access to your engagement deliverables and tracks progress through the LGP pipeline. Documents are published as they are completed.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
