'use client';

import { useEffect, useRef } from 'react';

interface DocViewerProps {
  template: string;
  config: Record<string, unknown>;
}

export default function DocViewer({ template, config }: DocViewerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    function handleLoad() {
      iframe?.contentWindow?.postMessage(
        { type: 'lgp-config', template, config },
        'https://lgp-dashboard.vercel.app'
      );
    }

    iframe.addEventListener('load', handleLoad);
    return () => iframe.removeEventListener('load', handleLoad);
  }, [template, config]);

  return (
    <div className="w-full" style={{ height: 'calc(100vh - 180px)' }}>
      <iframe
        ref={iframeRef}
        src={`https://lgp-dashboard.vercel.app/html/${template}.html`}
        className="w-full h-full border-0"
        title={template}
      />
    </div>
  );
}
