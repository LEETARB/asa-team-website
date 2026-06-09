import React from "react";

export default function LanguageSwitcher({ language, setLanguage }) {
  return (
    <div className="flex rounded-full border border-white/10 bg-white/[0.04] p-1">
      {["en", "ar"].map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase transition ${
            language === lang
              ? "bg-asa-orange text-black shadow-glow"
              : "text-asa-muted hover:text-white"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
