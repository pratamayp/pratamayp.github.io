import { Hero } from './_components/hero';
import { Technologies } from './_components/technologies';

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <Technologies />
    </main>
  );
}
