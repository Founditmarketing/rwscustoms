/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Cta } from "./components/Cta";
import { FloatingContact } from "./components/FloatingContact";
import { LoadingScreen } from "./components/LoadingScreen";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { AboutUs } from "./pages/AboutUs";
import { ServicePage } from "./pages/ServicePage";
import { Gallery } from "./pages/Gallery";
import { Locations } from "./pages/Locations";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { ScrollToTop } from "./components/ScrollToTop";

export const LoadContext = createContext(true);

export default function App() {
  const [hasLoaded, setHasLoaded] = useState(() => {
    return sessionStorage.getItem("initialLoadDone") === "true";
  });

  return (
    <LoadContext.Provider value={hasLoaded}>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-brand-grey selection:text-white flex flex-col">
        <LoadingScreen onComplete={() => setHasLoaded(true)} />
      <ScrollToTop />
      <Header />
      <FloatingContact />
      
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>

        <Cta />
        <Footer />
      </div>
    </LoadContext.Provider>
  );
}
