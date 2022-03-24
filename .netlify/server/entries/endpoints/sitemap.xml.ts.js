import { g as getBlogPosts } from "../../chunks/blog-posts-f2f31c9e.js";
import { html } from "common-tags";
import { g as getWorks } from "../../chunks/works-d9517c0a.js";
import { B as BASE_URL } from "../../chunks/url-8759b9e2.js";
const EMPTY_LINES = /^\s+\n/gm;
function createUrlElement(href, lastmod) {
  return html`
		<url>
			<loc>${new URL(href, BASE_URL).href}</loc>
			${lastmod ? "<lastmod>" + lastmod + "</lastmod>" : ""}
		</url>
	`.replace(EMPTY_LINES, "");
}
const get = async ({ host }) => {
  const blogPosts = await getBlogPosts(host);
  const blogUrls = blogPosts.map((post) => createUrlElement("blog/" + post.slug, post.updated ?? post.created));
  const works = await getWorks(host);
  const worksUrls = [...works.entries()].map(([slug, work]) => createUrlElement("work/" + slug, work.updated ?? work.created));
  const urlElements = [
    createUrlElement("/"),
    createUrlElement("work"),
    ...worksUrls,
    createUrlElement("blog"),
    ...blogUrls,
    createUrlElement("about")
  ];
  const xml = html`
		<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${urlElements.join("\n")}
		</urlset>
	`;
  return {
    status: 200,
    headers: {
      "Content-Type": "application/xml"
    },
    body: xml
  };
};
export { get };
