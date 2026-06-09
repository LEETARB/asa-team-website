import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectMediaModal({ open, media, index, setIndex, onClose, t }) {
  const active = media[index];

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") setIndex((value) => (value + 1) % media.length);
      if (event.key === "ArrowLeft") setIndex((value) => (value - 1 + media.length) % media.length);
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [media.length, onClose, open, setIndex]);

  if (!media.length) {
    return null;
  }

  const previous = () => setIndex((value) => (value - 1 + media.length) % media.length);
  const next = () => setIndex((value) => (value + 1) % media.length);

  return (
    <AnimatePresence>
      {open && active ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur"
        >
          <button type="button" onClick={onClose} className="absolute inset-0 cursor-default" aria-label={t.common.close} />
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-6xl"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm font-bold text-asa-muted">
                {index + 1} / {media.length}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white transition hover:border-asa-orange/50"
              >
                {t.common.close}
              </button>
            </div>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-[#05080c] shadow-glow-strong">
              {active.type === "youtube" ? (
                <iframe
                  src={active.embedSrc}
                  title={active.name}
                  className="aspect-video w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : active.type === "video" ? (
                <video src={active.src} controls autoPlay className="max-h-[78vh] w-full bg-black object-contain" />
              ) : (
                <img src={active.src} alt={active.name} className="max-h-[78vh] w-full object-contain" />
              )}
            </div>
            {media.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={previous}
                  className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-2xl text-white transition hover:border-asa-orange/50"
                  aria-label={t.common.previous}
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-2xl text-white transition hover:border-asa-orange/50"
                  aria-label={t.common.next}
                >
                  ›
                </button>
              </>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
