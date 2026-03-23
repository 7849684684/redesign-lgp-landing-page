interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="pt-32 pb-12 md:pt-40 md:pb-16">
      <h1 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
