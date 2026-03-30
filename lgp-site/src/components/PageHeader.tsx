interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="pt-12 pb-12 md:pt-16 md:pb-16">
      <h1 className="font-editorial text-4xl md:text-5xl font-normal text-text-primary leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
