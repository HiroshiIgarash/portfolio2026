import { About } from "./_components/About";
import { Hero } from "./_components/Hero";
import { Nav } from "./_components/Nav";
import { Skills } from "./_components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <div id="top" />
      <Hero />
      <About />
      <Skills />
    </>
  );
}
