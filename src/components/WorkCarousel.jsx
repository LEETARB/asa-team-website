import React, { useMemo, useRef, useState } from "react";
import SectionTitle from "./SectionTitle.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectMediaModal from "./ProjectMediaModal.jsx";
import { getProjects } from "../data/projects.js";

export default function WorkCarousel({ t }) {
  const projects = useMemo(() => getProjects(t), [t]);
  const sliderRef = useRef(null);
  const [modal, setModal] = useState({ open: false, media: [], index: 0 });

  const scroll = (direction) => {
    const node = sliderRef.current;
    if (!node) return;
    const amount = node.clientWidth * 0.9;
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  const openMedia = (project, index) => {
    setModal({ open: true, media: project.media, index: Math.max(index, 0) });
  };

  return (
    <section id="work" className="section-pad relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-x-0 top-24 -z-10 mx-auto h-72 max-w-5xl rounded-full bg-asa-orange/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionTitle kicker={t.work.kicker} title={t.work.title} description={t.work.description} align="start" />
          <div className="mb-10 flex gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-2xl text-white transition hover:border-asa-orange/50"
              aria-label={t.common.previous}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-2xl text-white transition hover:border-asa-orange/50"
              aria-label={t.common.next}
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 scrollbar-soft"
        >
          {projects.map((project, index) => (
            <div key={project.id} className="snap-start">
              <ProjectCard project={project} t={t} index={index} onOpenMedia={(mediaIndex) => openMedia(project, mediaIndex)} />
            </div>
          ))}
        </div>
      </div>

      <ProjectMediaModal
        open={modal.open}
        media={modal.media}
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
