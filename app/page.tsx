import { About } from "./_components/About";
import { Career } from "./_components/Career";
import { Hero } from "./_components/Hero";
import { Nav } from "./_components/Nav";
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
    </>
  );
}
