interface DownloadCardProps {
  title: string;
  description: string;
  filename: string;
  fileSize: string;
  category: string;
}

export default function DownloadCard({ title, description, filename, fileSize, category }: DownloadCardProps) {
  return (
    <a
      href={`/downloads/${filename}`}
      download
      className="group block border border-rule/60 rounded-sm p-6 transition-colors duration-150 hover:border-ink/30 hover:bg-surface/40"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-mono uppercase tracking-widest text-muted">
          {category}
        </span>
        <span className="text-xs text-muted">{fileSize}</span>
      </div>
      <h3 className="font-display text-lg font-semibold text-ink mb-2 group-hover:text-blue transition-colors duration-150">
        {title}
      </h3>
      <p className="text-sm text-muted leading-relaxed mb-3">
        {description}
      </p>
      <span className="inline-flex items-center gap-1.5 text-sm text-blue font-medium">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 2v9m0 0l-3-3m3 3l3-3M3 13h10" />
        </svg>
        Download
      </span>
    </a>
  );
}
