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
      className="group block border border-surface-2 rounded-[var(--radius-md)] p-6 transition-all duration-200 hover:border-brand-teal hover:shadow-sm"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="label text-text-tertiary">{category}</span>
        <span className="text-xs text-text-tertiary">{fileSize}</span>
      </div>
      <h3 className="font-editorial text-lg font-normal text-text-primary mb-2 group-hover:text-brand-teal transition-colors">
        {title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed mb-3">{description}</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-teal">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 2v9m0 0l-3-3m3 3l3-3M3 13h10" />
        </svg>
        Download
      </span>
    </a>
  );
}
