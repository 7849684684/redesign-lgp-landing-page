interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  surface?: 0 | 1;
}

export default function Section({ children, className = "", id, surface }: SectionProps) {
  const bg = surface === 1 ? "bg-surface-1" : "";
  return (
    <section id={id} className={`px-6 ${bg} ${className}`}>
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}
