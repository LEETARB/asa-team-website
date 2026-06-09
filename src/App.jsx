import React, { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Founder from "./components/Founder.jsx";
import Services from "./components/Services.jsx";
import WorkCarousel from "./components/WorkCarousel.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { translations } from "./data/translations.js";

export default function App() {
  const [language, setLanguage] = useState("en");
  const t = useMemo(() => translations[language], [language]);

  return (
    <div className="min-h-screen bg-asa-bg text-asa-text" dir={t.dir} lang={language}>
      <Navbar t={t} language={language} setLanguage={setLanguage} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Founder t={t} />
        <WorkCarousel t={t} />
        <Services t={t} />
        <Achievements t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
