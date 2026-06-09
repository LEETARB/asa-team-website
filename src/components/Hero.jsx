import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/LOGO WITHOUT ASA.png";

export default function Hero({ t }) {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,138,0,0.20),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(255,176,0,0.12),transparent_25%),linear-gradient(135deg,#05080c,#090d13_45%,#05080c)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.14] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute inset-0 -z-10 noise-layer" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-asa-orange/30 bg-asa-orange/10 px-4 py-2 text-sm font-bold text-asa-orange">
            {t.common.brand}
          </p>
          <h1 className="text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {t.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-asa-muted sm:text-xl">{t.hero.subtext}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#work" className="rounded-md bg-asa-orange px-6 py-4 text-center font-extrabold text-black shadow-glow transition hover:bg-asa-amber">
              {t.common.exploreWork}
            </a>
            <a href="#contact" className="rounded-md border border-white/15 bg-white/[0.04] px-6 py-4 text-center font-extrabold text-white transition hover:border-asa-orange/60 hover:text-asa-orange">
              {t.common.contactTeam}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <img
            src={logo}
            alt="ASA TEAM logo"
            className="relative mx-auto aspect-square w-full object-contain drop-shadow-[0_0_42px_rgba(255,138,0,0.34)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
