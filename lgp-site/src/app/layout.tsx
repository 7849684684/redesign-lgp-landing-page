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
    "Games, simulations, and peer challenge that make your team sharper — not just your slides.",
  icons: {
    icon: "/logos/lgp-icon-teal.svg",
  },
  openGraph: {
    title: "The Long Game Project",
    description: "Games, simulations, and peer challenge that make your team sharper.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,300;1,6..72,400&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('lgp-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${sourceSans.variable}`}>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <EndorserBar />
        <main id="main-content" className="min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
