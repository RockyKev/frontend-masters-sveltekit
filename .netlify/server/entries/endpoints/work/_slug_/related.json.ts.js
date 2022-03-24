import { g as getBlogPosts } from "../../../../chunks/blog-posts-f2f31c9e.js";
let posts;
const get = async function({ params, host }) {
  const { slug } = params;
  if (!posts) {
    posts = await getBlogPosts(host);
  }
  return {
    body: {
      posts: posts.filter((post) => post.relatedProjectSlugs?.includes(slug))
    }
  };
};
export { get };
