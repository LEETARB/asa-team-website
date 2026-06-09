import React from "react";

export default function MediaGallery({ media, title, onOpen, limit = 5 }) {
  const visible = media.filter((item) => item.type === "image").slice(0, limit);

  if (!visible.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {visible.map((item) => {
        const mediaIndex = media.findIndex((entry) => entry.src === item.src);
        return (
          <button
            key={item.src}
            type="button"
            onClick={() => onOpen(mediaIndex)}
            className="group overflow-hidden rounded-md border border-white/10 bg-[#05080c] text-start"
            aria-label={`${title} ${mediaIndex + 1}`}
          >
            <img
              src={item.src}
              alt={`${title} ${mediaIndex + 1}`}
              className="aspect-video w-full object-cover object-top opacity-85 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
            />
          </button>
        );
      })}
    </div>
  );
}
