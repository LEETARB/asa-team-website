import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";

export default function About({ t }) {
  return (
    <section id="about" className="section-pad border-t border-white/10 bg-[#070b10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker={t.about.kicker} title={t.about.title} />
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="rounded-lg border border-asa-orange/25 bg-asa-card p-7 shadow-glow"
          >
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-asa-orange">{t.common.brand}</p>
            <h3 className="mt-4 text-3xl font-black text-white">{t.about.title}</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            <p className="text-lg leading-9 text-asa-muted">{t.about.text}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {t.about.highlights.map((item) => (
                <div key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white">
                  <span className="me-2 text-asa-orange">/</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
