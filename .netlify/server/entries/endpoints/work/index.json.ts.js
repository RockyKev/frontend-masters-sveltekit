import pMap from "p-map";
import { basename } from "path";
const get = async () => {
  const modules = Object.entries({ "./portfolio-site.svelte.md": () => import("../../pages/work/portfolio-site.svelte.md.js"), "./type-kana.svelte.md": () => import("../../pages/work/type-kana.svelte.md.js") });
  const projects = await pMap(modules, async ([filename, module]) => {
    const { metadata } = await module();
    return {
      ...metadata,
      slug: basename(filename, ".svelte.md")
    };
  });
  projects.sort((a, b) => new Date(a.created) > new Date(b.created) ? -1 : 1);
  return {
    status: 200,
    body: { projects }
  };
};
export { get };
