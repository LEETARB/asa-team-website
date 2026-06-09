import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";

export default function Services({ t }) {
  return (
    <section id="services" className="section-pad border-t border-white/10 bg-[#070b10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker={t.services.kicker} title={t.services.title} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {t.services.cards.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group min-h-64 rounded-lg border border-white/10 bg-asa-card/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-asa-orange/50 hover:shadow-glow"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md border border-asa-orange/30 bg-asa-orange/10 text-sm font-extrabold text-asa-orange">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-2xl font-extrabold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-asa-muted">{service.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
