import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectMediaModal from "./ProjectMediaModal.jsx";
import { getProjects } from "../data/projects.js";

const variants = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? -80 : 80 }),
};

export default function WorkCarousel({ t }) {
  const projects = useMemo(() => getProjects(t), [t]);
  const count = projects.length;
  const [[index, direction], setState] = useState([0, 0]);
  const [modal, setModal] = useState({ open: false, media: [], index: 0 });

  const active = ((index % count) + count) % count;
  const project = projects[active];

  const paginate = (dir) => setState(([current]) => [current + dir, dir]);
  const goTo = (target) => setState(([current]) => [target, target > ((current % count) + count) % count ? 1 : -1]);

  const openMedia = (mediaIndex) => setModal({ open: true, media: project.media, index: Math.max(mediaIndex, 0) });

  return (
    <section id="work" className="section-pad relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-x-0 top-24 -z-10 mx-auto h-72 max-w-5xl rounded-full bg-asa-orange/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionTitle kicker={t.work.kicker} title={t.work.title} description={t.work.description} align="start" />
          {count > 1 ? (
            <div className="mb-2 flex items-center gap-4 md:mb-10">
              <span dir="ltr" className="text-sm font-bold text-asa-muted">
                {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => paginate(-1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-2xl text-white transition hover:border-asa-orange/50"
                  aria-label={t.common.previous}
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => paginate(1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-2xl text-white transition hover:border-asa-orange/50"
                  aria-label={t.common.next}
                >
                  ›
                </button>
              </div>
            </div>
          ) : null}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={project.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
              drag={count > 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(event, info) => {
                if (info.offset.x < -70) paginate(1);
                else if (info.offset.x > 70) paginate(-1);
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              <ProjectCard project={project} t={t} onOpenMedia={openMedia} />
            </motion.div>
          </AnimatePresence>
        </div>

        {count > 1 ? (
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {projects.map((item, dotIndex) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(dotIndex)}
                aria-label={`${t.work.projectCount} ${dotIndex + 1}`}
                aria-current={dotIndex === active}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  dotIndex === active ? "w-8 bg-asa-orange" : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        ) : null}
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
