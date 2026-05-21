import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import About         from "@/components/About";
import TechStack     from "@/components/TechStack";
import Projects      from "@/components/Projects";
import Certificados  from "@/components/Certificados";
import Contact       from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f1a] text-slate-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Certificados />
      <Contact />
    </main>
  );
}
