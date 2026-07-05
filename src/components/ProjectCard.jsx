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

export default function ProjectCard({ project, t, onOpenMedia }) {
  const images = project.media.filter((item) => item.type === "image");
  const video = project.media.find((item) => item.type === "video" || item.type === "youtube");
  const cover = images[0] ?? video;
  const hasMedia = project.media.length > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-hidden rounded-2xl border border-asa-orange/35 bg-asa-card shadow-glow"
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="p-5 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-asa-orange sm:text-sm sm:tracking-[0.22em]">
              {project.category}
            </p>
            {project.liveUrl ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-bold text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                {t.common.liveBadge}
              </span>
            ) : null}
          </div>
          <h3 className="mt-3 text-2xl font-extrabold text-white sm:mt-4 sm:text-3xl lg:text-4xl">{project.title}</h3>
          <p className="mt-4 text-[0.95rem] leading-8 text-asa-muted sm:text-base">{project.description}</p>
          {project.achievement ? (
            <p className="mt-5 rounded-md border border-asa-orange/20 bg-asa-orange/10 p-4 text-sm font-semibold leading-7 text-asa-amber">
              {project.achievement}
            </p>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-asa-orange/20 bg-asa-orange/10 px-2.5 py-1 text-xs font-bold text-asa-amber sm:px-3 sm:text-sm">
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {hasMedia ? (
              <button
                type="button"
                onClick={() => onOpenMedia(0)}
                className="rounded-md bg-asa-orange px-6 py-3.5 text-center font-semibold text-black transition hover:bg-asa-amber"
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
                    ? "rounded-md border border-asa-orange/40 bg-white/[0.04] px-6 py-3.5 text-center font-semibold text-white transition hover:border-asa-orange"
                    : "rounded-md bg-asa-orange px-6 py-3.5 text-center font-semibold text-black transition hover:bg-asa-amber"
                }
              >
                {t.common.visitSite} ↗
              </a>
            ) : null}
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#080c12] p-5 sm:p-8 lg:border-s lg:border-t-0 lg:p-10">
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
              className="group flex h-full min-h-[240px] flex-col items-center justify-center rounded-lg border border-asa-orange/25 bg-[radial-gradient(circle_at_center,rgba(255,138,0,0.16),transparent_60%),#05080c] p-8 text-center shadow-glow transition hover:border-asa-orange/60 sm:min-h-[300px]"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-asa-orange text-3xl font-black text-black shadow-glow transition group-hover:scale-105">
                ↗
              </span>
              <span className="mt-6 text-xl font-extrabold text-white sm:text-2xl">{t.common.visitSite}</span>
              <span dir="ltr" className="mt-2 font-mono text-sm font-bold text-asa-orange">
                {displayHost(project.liveUrl)}
              </span>
            </a>
          ) : null}
        </div>
      </div>

      {project.metrics?.length ? (
        <div className="border-t border-white/10 px-5 py-6 sm:px-8 lg:px-10">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="min-w-[140px] flex-1 rounded-lg border border-white/10 bg-white/[0.03] p-4 text-center"
              >
                <p className="text-2xl font-black text-asa-orange sm:text-3xl">{metric.value}</p>
                <p className="mt-1.5 text-xs leading-5 text-asa-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {project.details?.length ? (
        <div className="border-t border-white/10 p-5 sm:p-8 lg:p-10">
          <h4 className="mb-5 text-lg font-extrabold text-white">{t.work.detailsTitle}</h4>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.details.map((group) => (
              <div key={group.title} className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                <h5 className="mb-3 font-bold text-asa-amber">{group.title}</h5>
                <ul className="space-y-2.5">
                  {group.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-6 text-asa-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-asa-orange" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </motion.article>
  );
}
