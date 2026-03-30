import type { Metadata } from "next";
import Section from "@/components/Section";
import ResourceCard from "@/components/ResourceCard";
import DownloadCard from "@/components/DownloadCard";
import { getAllResources } from "@/lib/resources";
import { getAllDownloads } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "Resources",
  description: "Articles, frameworks, and tools from The Long Game Project on strategy, decision-making, and leadership.",
};

export default function ResourcesPage() {
  const resources = getAllResources();
  const downloads = getAllDownloads();

  return (
    <>
      <Section>
        <div className="pt-12 pb-12 md:pt-16 md:pb-16">
          <h1 className="font-editorial text-4xl md:text-5xl font-normal text-text-primary leading-tight mb-4">
            Resources
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Articles, frameworks, and tools on strategy, decision-making, and
            building teams that think well under pressure.
          </p>
        </div>
      </Section>

      {resources.length > 0 && (
        <Section className="pb-16 md:pb-24">
          <p className="label text-text-tertiary mb-6">Articles</p>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.map((resource) => (
              <ResourceCard key={resource.slug} {...resource} />
            ))}
          </div>
        </Section>
      )}

      {downloads.length > 0 && (
        <Section className="pb-24 border-t border-surface-2 pt-16 md:pt-24">
          <p className="label text-text-tertiary mb-6">Downloads</p>
          <div className="grid md:grid-cols-2 gap-4">
            {downloads.map((download) => (
              <DownloadCard key={download.filename} {...download} />
            ))}
          </div>
        </Section>
      )}

      {resources.length === 0 && downloads.length === 0 && (
        <Section className="pb-24">
          <p className="text-text-tertiary">More resources coming soon.</p>
        </Section>
      )}
    </>
  );
}
