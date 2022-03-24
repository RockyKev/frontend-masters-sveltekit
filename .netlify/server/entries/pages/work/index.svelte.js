import { c as create_ssr_component, f as each, e as escape } from "../../../chunks/index-054dfab6.js";
import { f as friendlyDate } from "../../../chunks/dateTime-524e104e.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".quiet.svelte-174vvkc{color:var(--color-text-300)}",
  map: null
};
const load = async function({ fetch }) {
  const url = "/work.json";
  const res = await fetch(url);
  if (res.ok) {
    const data = await res.json();
    return { props: { projects: data.projects } };
  } else {
    return {
      status: 500,
      error: new Error(`Could not fetch ${url}`)
    };
  }
};
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects } = $$props;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Work \xB7 Rocky Kev</title>`, ""}`, ""}

<article class="${"article"}"><h1>Work</h1>
	<ul class="${"list"}">${each(projects, (project) => {
    return `<li><a href="${"/work/" + escape(project.slug)}" class="${"text-link"}">${escape(project.name)}</a>
				<span class="${"quiet svelte-174vvkc"}">- ${escape(friendlyDate(project.created, true))}</span>
			</li>`;
  })}</ul>
</article>`;
});
export { Work as default, load };
