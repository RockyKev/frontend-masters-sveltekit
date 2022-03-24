import { c as create_ssr_component, b as subscribe, f as each, d as add_attribute, e as escape } from "./index-054dfab6.js";
import { p as page } from "./stores-2f64c591.js";
var Breadcrumbs_svelte_svelte_type_style_lang = "";
const css = {
  code: ".breadcrumbs.svelte-vv8rl4.svelte-vv8rl4{font-weight:600;text-transform:uppercase;letter-spacing:0.05em;line-height:1;color:var(--color-text-300)}.breadcrumbs.svelte-vv8rl4 a.svelte-vv8rl4:hover{text-decoration:underline}",
  map: null
};
const Breadcrumbs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let segments;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  segments = $page.path.slice(1).split("/").slice(0, -1);
  $$unsubscribe_page();
  return `<nav class="${"breadcrumbs svelte-vv8rl4"}" aria-label="${"Breadcrumbs"}">${each(segments, (segment, i) => {
    return `<a${add_attribute("href", "/" + segments.slice(0, i + 1).join("/"), 0)} sveltekit:prefetch class="${"svelte-vv8rl4"}">${escape(segment)}</a>
		<span>/ </span>`;
  })}
</nav>`;
});
export { Breadcrumbs as B };
