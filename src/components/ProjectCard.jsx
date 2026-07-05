import React from "react";
import { motion } from "framer-motion";
import MediaGallery from "./MediaGallery.jsx";

function displayHost(url) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function ProjectCard({ project, t, onOpenMedia, index }) {
  const images = project.media.filter((item) => item.type === "image");
  const video = project.media.find((item) => item.type === "video" || item.type === "youtube");
  const cover = images[0] ?? video;
  const hasMedia = project.media.length > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="min-w-[88vw] overflow-hidden rounded-lg border border-asa-orange/35 bg-asa-card shadow-glow sm:min-w-[720px] lg:min-w-[920px]"
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-asa-orange">{project.category}</p>
            {project.liveUrl ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-bold text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                {t.common.liveBadge}
              </span>
            ) : null}
          </div>
          <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">{project.title}</h3>
          <p className="mt-5 text-base leading-8 text-asa-muted">{project.description}</p>
          {project.achievement ? (
            <p className="mt-5 rounded-md border border-asa-orange/20 bg-asa-orange/10 p-4 text-sm font-semibold leading-7 text-asa-amber">
              {project.achievement}
            </p>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-asa-orange/20 bg-asa-orange/10 px-3 py-1 text-sm font-bold text-asa-amber">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-7">
            <h4 className="mb-4 font-extrabold text-white">{t.work.featuresTitle}</h4>
            <div className="grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-md bg-white/[0.035] px-3 py-2 text-sm text-asa-muted">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-asa-orange" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {hasMedia ? (
              <button
                type="button"
                onClick={() => onOpenMedia(0)}
                className="rounded-md bg-asa-orange px-6 py-4 font-semibold text-black transition hover:bg-asa-amber"
              >
                {video ? t.common.viewMedia : t.common.viewProject}
              </button>
            ) : null}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  hasMedia
                    ? "rounded-md border border-asa-orange/40 bg-white/[0.04] px-6 py-4 font-semibold text-white transition hover:border-asa-orange"
                    : "rounded-md bg-asa-orange px-6 py-4 font-semibold text-black transition hover:bg-asa-amber"
                }
              >
                {t.common.visitSite} ↗
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white/10 bg-white/[0.04] px-6 py-4 font-semibold text-white transition hover:border-asa-orange/50"
              >
                {t.common.viewCode}
              </a>
            ) : null}
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#080c12] p-6 sm:p-8 lg:border-s lg:border-t-0">
          {cover ? (
            <>
              <button
                type="button"
                onClick={() => onOpenMedia(project.media.findIndex((item) => item.src === cover.src))}
                className="group mb-4 block w-full overflow-hidden rounded-lg border border-white/10 bg-[#05080c] shadow-glow"
              >
                {cover.type === "video" ? (
                  <video src={cover.src} muted className="aspect-[16/10] w-full object-cover" />
                ) : (
                  <img
                    src={cover.src}
                    alt={project.title}
                    className="aspect-[16/10] w-full object-cover object-top transition duration-300 group-hover:scale-105"
                  />
                )}
              </button>
              <MediaGallery media={project.media} title={project.title} onOpen={onOpenMedia} />
            </>
          ) : project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full min-h-[280px] flex-col items-center justify-center rounded-lg border border-asa-orange/25 bg-[radial-gradient(circle_at_center,rgba(255,138,0,0.16),transparent_60%),#05080c] p-8 text-center shadow-glow transition hover:border-asa-orange/60"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-asa-orange text-3xl font-black text-black shadow-glow transition group-hover:scale-105">
                ↗
              </span>
              <span className="mt-6 text-2xl font-extrabold text-white">{t.common.visitSite}</span>
              <span dir="ltr" className="mt-2 font-mono text-sm font-bold text-asa-orange">
                {displayHost(project.liveUrl)}
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
