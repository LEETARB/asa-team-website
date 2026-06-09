import React from "react";
import logo from "../assets/LOGO WITHOUT ASA.png";

export default function Footer({ t }) {
  return (
    <footer className="border-t border-white/10 bg-asa-bg px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-start">
        <div className="flex items-center gap-3">
          <img src={logo} alt="ASA TEAM logo" className="h-12 w-12 object-contain" />
          <div>
            <p className="font-black text-white">{t.common.brand}</p>
            <p className="text-sm text-asa-muted">{t.footer.built}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm text-asa-muted sm:flex-row sm:gap-5">
          <a href={`mailto:${t.contact.email}`} className="hover:text-asa-orange">{t.contact.email}</a>
          <a href="https://www.linkedin.com/in/ali-alaa-it" target="_blank" rel="noreferrer" className="hover:text-asa-orange">
            LinkedIn
          </a>
          <span>© 2026 {t.common.brand}. {t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
