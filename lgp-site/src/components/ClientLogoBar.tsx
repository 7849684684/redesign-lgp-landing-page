import Section from "@/components/Section";

const clients = [
  "GitHub",
  "Anthropic",
  "Mars",
  "Culture Amp",
  "Deloitte",
  "PwC",
  "EY",
  "KPMG",
  "EA Global",
  "Monash University",
  "Australian Government",
  "Victorian Government",
  "ALLFED",
];

export default function ClientLogoBar() {
  return (
    <Section className="border-t border-surface-2 py-10 md:py-12">
      <p className="label text-text-tertiary mb-6">
        Used by people at
      </p>
      <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
        {clients.map((name) => (
          <span
            key={name}
            className="text-sm md:text-base text-text-secondary/60 font-medium tracking-wide"
          >
            {name}
          </span>
        ))}
      </div>
    </Section>
  );
}
