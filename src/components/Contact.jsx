import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";

export default function Contact({ t }) {
  const cards = [
    [t.contact.labels.email, t.contact.email, `mailto:${t.contact.email}`, false],
    [t.contact.labels.phone, t.contact.phone, `tel:${t.contact.phone}`, false],
    [t.contact.labels.linkedin, t.contact.linkedin, "https://www.linkedin.com/in/ali-alaa-it", true],
  ];

  return (
    <section id="contact" className="section-pad border-t border-white/10 bg-[#070b10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker={t.contact.kicker} title={t.contact.title} description={t.contact.description} />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-4">
            {cards.map(([label, value, href, external], index) => (
              <motion.a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-lg border border-white/10 bg-asa-card p-6 transition hover:border-asa-orange/50 hover:shadow-glow"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-asa-orange">{label}</p>
                <p className="mt-3 break-words text-lg font-extrabold text-white">{value}</p>
              </motion.a>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="rounded-lg border border-asa-orange/25 bg-asa-card p-6 shadow-glow sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="field" placeholder={t.contact.form.name} type="text" />
              <input className="field" placeholder={t.contact.form.email} type="email" />
            </div>
            <textarea className="field mt-4 min-h-40 resize-none" placeholder={t.contact.form.message} />
            <button type="button" className="mt-4 w-full rounded-md bg-asa-orange px-6 py-4 font-extrabold text-black transition hover:bg-asa-amber sm:w-auto">
              {t.contact.form.button}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
