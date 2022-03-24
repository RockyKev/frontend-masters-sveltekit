import { g as getBlogPosts } from "../../../../chunks/blog-posts-f2f31c9e.js";
import { g as getWorks } from "../../../../chunks/works-d9517c0a.js";
async function getRelatedProjectsMap(host) {
  const map = /* @__PURE__ */ new Map();
  const [posts, works] = await Promise.all([getBlogPosts(host), getWorks(host)]);
  for (const post of posts) {
    map.set(post.slug, post.relatedProjectSlugs?.map((slug) => works.get(slug)) || []);
  }
  return map;
}
let relatedProjects;
const get = async function({ params, host }) {
  const { slug } = params;
  if (!relatedProjects) {
    relatedProjects = await getRelatedProjectsMap(host);
  }
  if (relatedProjects.has(slug)) {
    return {
      body: {
        projects: relatedProjects.get(slug)
      }
    };
  }
};
export { get };
