interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export default function Section({ children, className = "", dark = false, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`px-6 md:px-8 ${dark ? "bg-ink text-cream" : ""} ${className}`}
    >
      <div className="mx-auto max-w-5xl">
        {children}
      </div>
    </section>
  );
}
