import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";

export default function Founder({ t }) {
  return (
    <section id="founder" className="section-pad border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker={t.founder.kicker} title={t.founder.title} />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="rounded-lg border border-asa-orange/25 bg-asa-card p-7 shadow-glow"
          >
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-asa-orange">{t.founder.kicker}</p>
            <h3 className="mt-4 text-4xl font-extrabold text-white">{t.founder.name}</h3>
            <div className="mt-6 h-px bg-gradient-to-r from-asa-orange via-asa-amber to-transparent" />
            <p className="mt-6 text-sm leading-7 text-asa-muted">{t.founder.highlights.join(" / ")}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <p className="text-lg leading-9 text-asa-muted">{t.founder.text}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {t.founder.highlights.map((item) => (
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
