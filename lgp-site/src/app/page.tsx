import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Method from "@/components/Method";
import Offerings from "@/components/Offerings";
import Proof from "@/components/Proof";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Problem />
      <Method />
      <Offerings />
      <Proof />
      <Contact />
      <Footer />
    </main>
  );
}
