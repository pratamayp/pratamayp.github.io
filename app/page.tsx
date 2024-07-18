import { Contact } from './_components/contact';
import { Experience } from './_components/experience';
import { Hero } from './_components/hero';
import { Projects } from './_components/projects';
import { Technologies } from './_components/technologies';

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <Technologies />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
