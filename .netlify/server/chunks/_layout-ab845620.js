import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute, f as each } from "./index-054dfab6.js";
import { f as friendlyDate } from "./dateTime-524e104e.js";
import { M as Meta } from "./Meta-049a30d4.js";
import { B as Breadcrumbs } from "./Breadcrumbs-3d93c575.js";
import { B as BASE_URL } from "./url-8759b9e2.js";
const load = async ({ fetch, page }) => {
  const url = page.path + "/related.json";
  const res = await fetch(url);
  if (res.ok) {
    const { projects } = await res.json();
    return {
      props: {
        relatedProjects: projects
      }
    };
  } else {
    return {
      status: res.status,
      error: new Error("Failed to fetch " + url)
    };
  }
};
var _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1g4v19m.svelte-1g4v19m{margin:calc(0.5 * var(--line-space)) 0}.article-info.svelte-1g4v19m.svelte-1g4v19m{color:var(--color-text-300);margin-bottom:var(--line-space);display:flex;align-items:center}.article-info.svelte-1g4v19m>.svelte-1g4v19m:not(:first-child){margin-left:1ch}.author.svelte-1g4v19m.svelte-1g4v19m{display:flex}.author.svelte-1g4v19m:hover .svelte-1g4v19m{text-decoration:underline}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { created } = $$props;
  let { updated } = $$props;
  let { summary } = $$props;
  let { coverImageUrl } = $$props;
  let { relatedProjects } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.created === void 0 && $$bindings.created && created !== void 0)
    $$bindings.created(created);
  if ($$props.updated === void 0 && $$bindings.updated && updated !== void 0)
    $$bindings.updated(updated);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0)
    $$bindings.summary(summary);
  if ($$props.coverImageUrl === void 0 && $$bindings.coverImageUrl && coverImageUrl !== void 0)
    $$bindings.coverImageUrl(coverImageUrl);
  if ($$props.relatedProjects === void 0 && $$bindings.relatedProjects && relatedProjects !== void 0)
    $$bindings.relatedProjects(relatedProjects);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${escape(`${title} \xB7 FE-NOTES \xB7 Rocky Kev`)}</title>`, ""}${validate_component(Meta, "Meta").$$render($$result, {
    title,
    description: summary,
    image: coverImageUrl && new URL(coverImageUrl, BASE_URL).href
  }, {}, {})}`, ""}

<article class="${"article"}">
	${validate_component(Breadcrumbs, "Breadcrumbs").$$render($$result, {}, {}, {})}
	<h1 class="${"svelte-1g4v19m"}">${escape(title)}</h1>
	<div class="${"article-info svelte-1g4v19m"}"><a href="${"/about"}" class="${"author svelte-1g4v19m"}">
			<span class="${"svelte-1g4v19m"}">Hey Its Rocky</span></a>
		<span class="${"separator svelte-1g4v19m"}">\xB7</span>
		<time${add_attribute("datetime", created, 0)} class="${"svelte-1g4v19m"}">${escape(friendlyDate(created))}</time></div>

	${slots.default ? slots.default({}) : ``}

	<hr>

	${relatedProjects ? `<h3>In this article</h3>
		<ul class="${"list"}">${each(relatedProjects, (project) => {
    return `<li><a href="${"/work/" + escape(project.slug)}" class="${"text-link"}" sveltekit:prefetch>${escape(project.name)}</a>
				</li>`;
  })}</ul>` : ``}
</article>`;
});
export { Layout as L, load as l };
