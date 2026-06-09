import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({ kicker, title, description, align = "center" }) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
      className={`mx-auto mb-10 max-w-3xl ${centered ? "text-center" : "text-start"}`}
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-asa-orange">{kicker}</p>
      <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-asa-muted sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}
