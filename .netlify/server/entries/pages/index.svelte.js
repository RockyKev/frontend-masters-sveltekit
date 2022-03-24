import { c as create_ssr_component, v as validate_component } from "../../chunks/index-054dfab6.js";
import "@mdi/js";
/* empty css                                                        */import { L as Logo } from "../../chunks/Logo-44d34826.js";
import { M as Meta } from "../../chunks/Meta-049a30d4.js";
var _landing_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".landing.svelte-txcweu.svelte-txcweu{grid-area:landing}h1.svelte-txcweu .svg-icon{top:0.15em}h1.svelte-txcweu.svelte-txcweu{display:flex;align-items:flex-end}hr.svelte-txcweu.svelte-txcweu{width:4em;margin:0;margin-bottom:var(--line-space)}ul.links.svelte-txcweu.svelte-txcweu{display:flex;flex-direction:column;list-style-type:none;margin-bottom:var(--line-space)}ul.links.svelte-txcweu a.svelte-txcweu{display:flex;align-items:center;float:left}ul.links.svelte-txcweu a.svelte-txcweu:hover{text-decoration:underline}",
  map: null
};
const Landing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="${"landing svelte-txcweu"}"><h1 class="${"svelte-txcweu"}">Frontend Masters <br> Notetaking Blog
		${validate_component(Logo, "Logo").$$render($$result, { size: "1.2em" }, {}, {})}</h1>

	<p>Writing up notes as I get them from Frontend Masters!
	</p>
	<p>Hey Naas!
	</p>

	<p>~Rocky		
	</p>
	
	<hr class="${"bold svelte-txcweu"}">
	<ul class="${"links svelte-txcweu"}">
		<a href="${"/blog"}" class="${"nav-link svelte-txcweu"}">Jump straight to the Notes
	</a></ul>
</section>`;
});
var _work_svelte_svelte_type_style_lang = "";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container.svelte-1wko6af{display:grid;grid-template-columns:1fr 1fr;grid-template-areas:"landing work";-webkit-column-gap:calc(2 * var(--line-space));column-gap:calc(2 * var(--line-space))}@media screen and (min-width: 45em) and (max-width: 60em){.container.svelte-1wko6af{grid-template-columns:4fr 5fr\r\n	}}@media screen and (max-width: 45em){.container.svelte-1wko6af{grid-template-columns:1fr;grid-template-areas:"landing"\r\n				"work"\r\n	}}',
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
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects } = $$props;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Frontend Masters Blog</title>`, ""}${validate_component(Meta, "Meta").$$render($$result, {
    title: "FEmasters Notes",
    description: "My notes for FEmasters",
    image: "/embed.png",
    isRoot: true
  }, {}, {})}`, ""}

<div class="${"container svelte-1wko6af"}">${validate_component(Landing, "Landing").$$render($$result, {}, {}, {})}
	
</div>`;
});
export { Routes as default, load };
