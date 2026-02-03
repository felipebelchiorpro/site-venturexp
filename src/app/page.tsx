import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Solutions } from "@/components/Solutions";
import { TechStack } from "@/components/TechStack";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { ParallaxAssets } from "@/components/ParallaxAssets";

export default function Home() {
  return (
    <main className="min-h-screen bg-venture-black text-white selection:bg-ios-blue selection:text-white relative">
      <ParallaxAssets />
      <Header />
      <Hero />
      <About />
      <Solutions />
      <TechStack />
      <Projects />
      <Process />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
