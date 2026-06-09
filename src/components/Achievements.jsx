import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import MediaGallery from "./MediaGallery.jsx";
import ProjectMediaModal from "./ProjectMediaModal.jsx";
import { getItpcAchievementMedia } from "../data/projects.js";

export default function Achievements({ t }) {
  const media = useMemo(() => getItpcAchievementMedia(), []);
  const video = media.find((item) => item.type === "video" || item.type === "youtube");
  const [modal, setModal] = useState({ open: false, index: 0 });

  const openMedia = (index) => setModal({ open: true, index });

  return (
    <section id="achievements" className="section-pad border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker={t.achievements.kicker} title={t.achievements.title} description={t.achievements.text} />
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="rounded-lg border border-asa-orange/25 bg-asa-card p-6 shadow-glow"
          >
            <h3 className="mb-4 text-2xl font-extrabold text-white">{t.achievements.videoTitle}</h3>
            {video ? (
              <button
                type="button"
                onClick={() => openMedia(media.findIndex((item) => item.src === video.src))}
                className="group block w-full overflow-hidden rounded-lg border border-white/10 bg-black"
              >
                {video.type === "youtube" ? (
                  <div className="flex aspect-video w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,138,0,0.24),transparent_48%),#05080c]">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-asa-orange text-2xl font-black text-black shadow-glow">▶</span>
                  </div>
                ) : (
                  <video src={video.src} muted className="aspect-video w-full object-cover opacity-90 transition group-hover:scale-[1.02] group-hover:opacity-100" />
                )}
                <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.04] px-4 py-3 text-start">
                <span className="font-bold text-white">{t.achievements.videoTitle}</span>
                  <span className="text-asa-orange">▶</span>
                </div>
              </button>
            ) : null}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {t.achievements.cards.map((card, index) => (
                <div key={card} className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold leading-7 text-white">
                  <span className="mb-3 block text-asa-orange">{String(index + 1).padStart(2, "0")}</span>
                  {card}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="rounded-lg border border-white/10 bg-asa-card p-6"
          >
            <h3 className="mb-4 text-2xl font-extrabold text-white">{t.achievements.galleryTitle}</h3>
            <MediaGallery media={media} title={t.achievements.galleryTitle} onOpen={openMedia} limit={6} />
          </motion.div>
        </div>
      </div>

      <ProjectMediaModal
        open={modal.open}
        media={media}
        index={modal.index}
        setIndex={(updater) =>
          setModal((value) => ({
            ...value,
            index: typeof updater === "function" ? updater(value.index) : updater,
          }))
        }
        onClose={() => setModal((value) => ({ ...value, open: false }))}
        t={t}
      />
    </section>
  );
}
