const mediaModules = import.meta.glob("../assets/ITCP-PHOTOS/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const youtubeDemo = {
  src: "https://youtu.be/8q4k9zjXHxc?si=lOGDIT7CTqOvLVBK",
  embedSrc: "https://www.youtube.com/embed/8q4k9zjXHxc",
  type: "youtube",
  name: "ASA TEAM demo video",
};

const itpcMedia = Object.entries(mediaModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    return {
      src,
      type: "image",
      name: path.split("/").pop(),
    };
  })
  .concat(youtubeDemo);

const projectIds = ["tajriba-platform", "itpc-management-system"];

const mediaById = {
  "itpc-management-system": itpcMedia,
};

export function getProjects(t) {
  return t.work.projects.map((project, index) => {
    const id = projectIds[index] ?? `project-${index + 1}`;
    return {
      ...project,
      id,
      media: mediaById[id] ?? [],
    };
  });
}

export function getItpcMedia() {
  return itpcMedia;
}

export function getItpcAchievementMedia() {
  return itpcMedia.filter((item) => item.name.includes("WhatsApp") || item.type === "youtube");
}
