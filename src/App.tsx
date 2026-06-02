/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustBanner } from "./components/TrustBanner";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { FloatingContact } from "./components/FloatingContact";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-brand-grey selection:text-white">
      <Header />
      <main>
        <Hero />
        <TrustBanner />
        <Services />
        <Projects />
        <About />
        <Location />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
