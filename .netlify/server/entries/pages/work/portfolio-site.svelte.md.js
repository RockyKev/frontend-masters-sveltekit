import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-125dd2bd.js";
export { l as load } from "../../../chunks/_layout-125dd2bd.js";
import "../../../chunks/Breadcrumbs-c29f9c7c.js";
import "../../../chunks/stores-2f64c591.js";
/* empty css                                                           */import "@mdi/js";
import "../../../chunks/dateTime-524e104e.js";
const metadata = {
  "name": "Portfolio Site",
  "created": "2021-02-26T00:00:00.000Z",
  "kind": "Website",
  "summary": "Updated portfolio website for 2021. Built with Svelte Kit.",
  "repo": "https://github.com/c-bandy/website"
};
const { name, created, kind, summary, repo } = metadata;
const Portfolio_site_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>${escape(summary)}</p>
<p>Initially built with <a href="${"https://sapper.svelte.dev/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">Sapper</a>, now uses <a href="${"https://kit.svelte.dev/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">Svelte
Kit</a> to handle routing and server-rendering.</p>`;
    }
  })}`;
});
export { Portfolio_site_svelte as default, metadata };
