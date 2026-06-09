import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/LOGO WITHOUT ASA.png";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function Navbar({ t, language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["home", t.nav.home],
    ["about", t.nav.about],
    ["founder", t.nav.founder],
    ["work", t.nav.work],
    ["services", t.nav.services],
    ["achievements", t.nav.achievements],
    ["contact", t.nav.contact],
  ];

  const goToSection = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-asa-bg/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button onClick={() => goToSection("home")} className="flex items-center gap-3">
          <img src={logo} alt="ASA TEAM logo" className="h-12 w-12 object-contain" />
          <span className="text-lg font-black tracking-wide text-white">{t.common.brand}</span>
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([id, label]) => (
            <button
              key={id}
              onClick={() => goToSection(id)}
              className="text-sm font-semibold text-asa-muted transition hover:text-asa-orange"
            >
              {label}
            </button>
          ))}
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Open menu"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04]"
          >
            <span className="h-0.5 w-5 rounded bg-white" />
            <span className="h-0.5 w-5 rounded bg-white" />
            <span className="h-0.5 w-5 rounded bg-white" />
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-asa-bg/95 px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {links.map(([id, label]) => (
              <button
                key={id}
                onClick={() => goToSection(id)}
                className="rounded-md px-4 py-3 text-start text-sm font-semibold text-asa-muted hover:bg-white/[0.04] hover:text-white"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
