import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import EndorserBar from "@/components/EndorserBar";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "The Long Game Project - Building Better Thinkers",
    template: "%s | The Long Game Project",
  },
  description:
    "Strategic thinking is a skill. Don't outsource it. Practice it. We build the environments where better decision makers live.",
  icons: {
    icon: "/logos/lgp-icon-teal.svg",
  },
  openGraph: {
    title: "The Long Game Project",
    description: "Strategic thinking is a skill. Don't outsource it. Practice it.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,300;1,6..72,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${sourceSans.variable}`}>
        <EndorserBar />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
