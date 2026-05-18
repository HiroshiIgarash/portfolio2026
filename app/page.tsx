import { About } from "./_components/About";
import { Career } from "./_components/Career";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { MarkerStrongs } from "./_components/MarkerStrongs";
import { Nav } from "./_components/Nav";
import { Off } from "./_components/Off";
import { Projects } from "./_components/Projects";
import { Skills } from "./_components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <div id="top" />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Career />
      <Off />
      <Contact />
      <Footer />
      <MarkerStrongs />
    </>
  );
}
