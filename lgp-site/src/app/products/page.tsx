import type { Metadata } from "next";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Products",
  description: "Tools and products from The Long Game Project - strategy frameworks, decision tools, and more.",
};

const products = [
  {
    title: "Prism Cards",
    description:
      "A deck of strategic thinking prompts designed to shift perspective during planning sessions, workshops, and one-on-ones. Each card reframes a common strategic challenge from an unexpected angle.",
    href: "https://prism.cards",
    status: "Available",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Section>
        <div className="pt-32 pb-12 md:pt-40 md:pb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
            Products & Tools
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            Things you can take back to your team. Strategy tools designed for
            daily use, not just offsite workshops.
          </p>
        </div>
      </Section>

      <Section className="pb-24">
        <div className="grid md:grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>

        <div className="mt-16 max-w-xl">
          <p className="text-xs font-mono uppercase tracking-widest text-muted mb-3">
            Coming soon
          </p>
          <p className="text-muted leading-relaxed">
            We are working on more tools and products. If you want early access
            or have ideas for what would be useful, get in touch.
          </p>
        </div>
      </Section>
    </>
  );
}
