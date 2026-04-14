import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { fetchEngagement } from '@/lib/auth';
import Section from '@/components/Section';
import Button from '@/components/Button';
import DocViewer from './DocViewer';

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

export default async function PortalDocPage({
  params,
}: {
  params: Promise<{ template: string }>;
}) {
  const { template } = await params;
  const headersList = await headers();
  const clientKey = headersList.get('x-session-client');
  if (!clientKey) redirect('/portal/login');

  const engagement = await fetchEngagement(clientKey);
  if (!engagement) redirect('/portal/login');

  const allPublished = engagement.publishedDocs || engagement.stageData?._portal?.publishedDocs || {};
  const publishedDoc = allPublished[template];
  if (!publishedDoc) {
    return (
      <Section className="pt-24 pb-16">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="font-editorial text-2xl text-text-primary mb-4">
            Document Not Available
          </h1>
          <p className="text-text-secondary mb-6">
            This document hasn&apos;t been published yet. You&apos;ll be notified when it&apos;s ready.
          </p>
          <Button href="/portal/dashboard" variant="outline">
            Back to Dashboard
          </Button>
        </div>
      </Section>
    );
  }

  const config = publishedDoc.config || {};
  const label = TEMPLATE_LABELS[template] || template;
  const publishedDate = new Date(publishedDoc.publishedAt).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <>
      <Section className="pt-6 pb-4 border-b border-surface-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button href="/portal/dashboard" variant="outline" className="!px-3 !py-1.5 text-xs">
              &larr; Dashboard
            </Button>
            <h1 className="font-editorial text-lg text-text-primary">{label}</h1>
          </div>
          <span className="text-xs text-text-tertiary">Published {publishedDate}</span>
        </div>
      </Section>
      <DocViewer template={template} config={config} />
    </>
  );
}
