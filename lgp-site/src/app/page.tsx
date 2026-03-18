import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Reframe from "@/components/Reframe";
import Practice from "@/components/Practice";
import WhatWeBuild from "@/components/WhatWeBuild";
import Proof from "@/components/Proof";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative paper-texture">
      <Navigation />
      <Hero />
      <Reframe />
      <Practice />
      <WhatWeBuild />
      <Proof />
      <CTA />
      <Footer />
    </main>
  );
}
