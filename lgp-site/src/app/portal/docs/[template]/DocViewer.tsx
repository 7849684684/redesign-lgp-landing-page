'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const DASHBOARD_ORIGIN = 'https://lgp-dashboard.vercel.app';

interface DocViewerProps {
  template: string;
  config: Record<string, unknown>;
  label: string;
  /** Small note shown on the right of the reader header, e.g. "Published 5 Jun 2026" or "Draft". */
  meta?: string;
  backHref: string;
  backLabel?: string;
}

/**
 * Full-viewport document reader.
 *
 * The embedded report templates are long documents that bring their own
 * scrolling. Previously this component sized the iframe to a fixed
 * `calc(100vh - 180px)` and rendered inside the marketing chrome (sticky
 * EndorserBar + SiteFooter), which produced a confusing double scroll (the
 * page scrolled AND the iframe scrolled) and cut content off under mobile
 * browser toolbars (100vh ignores the dynamic toolbar).
 *
 * Now the reader takes over the viewport as a single, predictable scroll
 * region: a fixed overlay sized with 100dvh, its own compact header, and the
 * iframe filling the remaining space (no magic-number offsets). The underlying
 * page scroll is locked while it is open.
 */
export default function DocViewer({
  template,
  config,
  label,
  meta,
  backHref,
  backLabel = 'Dashboard',
}: DocViewerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Deliver the config to the embedded template.
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const sendConfig = () => {
      iframe.contentWindow?.postMessage({ type: 'lgp-config', template, config }, DASHBOARD_ORIGIN);
    };

    // Send once the iframe document has loaded...
    const handleLoad = () => {
      setLoaded(true);
      sendConfig();
    };
    iframe.addEventListener('load', handleLoad);

    // ...and also whenever the embedded doc announces it is ready. This closes
    // the race where the doc registers its message listener after our load
    // handler already fired (which would otherwise leave the doc blank).
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== DASHBOARD_ORIGIN) return;
      if ((event.data as { type?: string } | null)?.type === 'lgp-ready') sendConfig();
    };
    window.addEventListener('message', handleMessage);

    return () => {
      iframe.removeEventListener('load', handleLoad);
      window.removeEventListener('message', handleMessage);
    };
  }, [template, config]);

  // Lock the underlying page scroll so the document is the only scroll region.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-surface-0"
      style={{ height: '100dvh' }}
    >
      {/* Reader header */}
      <header className="flex-none flex items-center justify-between gap-3 border-b border-surface-2 bg-surface-0 px-4 sm:px-6 h-14">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href={backHref}
            className="shrink-0 inline-flex items-center rounded-sm border border-surface-2 px-3 py-1.5 text-xs text-text-secondary hover:bg-surface-1 transition-colors"
          >
            &larr; {backLabel}
          </Link>
          <h1 className="font-editorial text-base sm:text-lg text-text-primary truncate">{label}</h1>
        </div>
        {meta && <span className="shrink-0 text-xs text-text-tertiary">{meta}</span>}
      </header>

      {/* Document — the single scroll region */}
      <div className="relative flex-1 min-h-0">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-text-tertiary text-sm">
            Loading document&hellip;
          </div>
        )}
        <iframe
          ref={iframeRef}
          src={`${DASHBOARD_ORIGIN}/html/${template}.html`}
          className="block w-full h-full border-0"
          title={label}
        />
      </div>
    </div>
  );
}
