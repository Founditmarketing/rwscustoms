import { Hero } from "../components/Hero";
import { TrustBanner } from "../components/TrustBanner";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Location } from "../components/Location";
import { Projects } from "../components/Projects";

export function Home() {
  return (
    <main>
      <Hero />
      <TrustBanner />
      <Services />
      <About />
      <Location />
      <Projects />
    </main>
  );
}
