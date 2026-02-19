import type { Metadata } from "next";
import { Bebas_Neue, Space_Mono, Outfit } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Long Game Project — Strategic Thinking. Redefined.",
  description:
    "Workshops, masterminds and coaching that use tabletop exercises, red teaming and strategic games to make you a radically better strategic thinker.",
  openGraph: {
    title: "The Long Game Project",
    description: "Strategic Thinking. Redefined.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bebasNeue.variable} ${spaceMono.variable} ${outfit.variable} antialiased bg-deep text-white`}
      >
        {children}
      </body>
    </html>
  );
}
