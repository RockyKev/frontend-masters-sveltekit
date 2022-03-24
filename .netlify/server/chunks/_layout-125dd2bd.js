import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "./index-054dfab6.js";
import { B as Breadcrumbs } from "./Breadcrumbs-c29f9c7c.js";
/* empty css                                             */import { mdiLink, mdiGithub } from "@mdi/js";
import { f as friendlyDate } from "./dateTime-524e104e.js";
const css$2 = {
  code: ".svg-icon.svelte-1gcz6jb{display:inline-block;vertical-align:baseline;position:relative}",
  map: null
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  let { path } = $$props;
  let { title = void 0 } = $$props;
  let { ariaHidden = false } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.ariaHidden === void 0 && $$bindings.ariaHidden && ariaHidden !== void 0)
    $$bindings.ariaHidden(ariaHidden);
  $$result.css.add(css$2);
  return `<svg class="${"svg-icon svelte-1gcz6jb"}"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} role="${"img"}"${add_attribute("viewBox", viewBox, 0)}${add_attribute("aria-hidden", ariaHidden || title === void 0, 0)}>${title ? `<title>${escape(title)}</title>` : ``}<path${add_attribute("d", path, 0)}${add_attribute("fill", color, 0)}></path></svg>`;
});
const load = async ({ fetch, page }) => {
  const url = page.path + "/related.json";
  const res = await fetch(url);
  if (res.ok) {
    const { posts } = await res.json();
    return {
      props: {
        relatedPosts: posts
      }
    };
  } else {
    return {
      status: res.status,
      error: new Error("Failed to fetch " + url)
    };
  }
};
var _links_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".links.svelte-c6yiuk.svelte-c6yiuk{display:flex;flex-wrap:wrap;margin-top:calc(-1 * var(--line-space));margin-bottom:var(--line-space);list-style-type:none}.links.svelte-c6yiuk>.svelte-c6yiuk{margin-top:var(--line-space)}.links.svelte-c6yiuk>.svelte-c6yiuk:not(:last-child){margin-right:var(--line-space)}.link-button.svelte-c6yiuk.svelte-c6yiuk{display:inline-flex;align-items:center;text-transform:uppercase;font-size:0.8em;font-weight:600;line-height:1;letter-spacing:0.1em;border-radius:0.5em;color:var(--color-text-400)}.link-button.svelte-c6yiuk span.svelte-c6yiuk{margin-left:1em}.link-button.svelte-c6yiuk.svelte-c6yiuk:hover{text-decoration:underline}",
  map: null
};
const Links = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { repo } = $$props;
  let { url } = $$props;
  if ($$props.repo === void 0 && $$bindings.repo && repo !== void 0)
    $$bindings.repo(repo);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css$1);
  return `<ul class="${"links svelte-c6yiuk"}">${url ? `<li class="${"svelte-c6yiuk"}"><a class="${"link-button svelte-c6yiuk"}"${add_attribute("href", url, 0)} target="${"_blank"}" rel="${"noopener"}">${validate_component(Icon, "Icon").$$render($$result, { path: mdiLink, size: "1.5em" }, {}, {})}
				<span class="${"svelte-c6yiuk"}">Visit project</span></a></li>` : ``}
	${repo ? `<li class="${"svelte-c6yiuk"}"><a class="${"link-button svelte-c6yiuk"}"${add_attribute("href", repo, 0)} target="${"_blank"}" rel="${"noopener"}" title="${"GitHub repository"}">${validate_component(Icon, "Icon").$$render($$result, { path: mdiGithub, size: "1.5em" }, {}, {})}
				<span class="${"svelte-c6yiuk"}">GitHub repo</span></a></li>` : ``}
</ul>`;
});
var _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1trw5vf{margin:calc(0.5 * var(--line-space)) 0}hr.svelte-1trw5vf{margin:var(--line-space) 0}.project-info.svelte-1trw5vf{color:var(--color-text-300);line-height:1;margin-bottom:var(--line-space)}.quiet.svelte-1trw5vf{color:var(--color-text-300)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { kind } = $$props;
  let { created } = $$props;
  let { updated } = $$props;
  let { summary } = $$props;
  let { repo = void 0 } = $$props;
  let { url = void 0 } = $$props;
  let { relatedPosts } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.created === void 0 && $$bindings.created && created !== void 0)
    $$bindings.created(created);
  if ($$props.updated === void 0 && $$bindings.updated && updated !== void 0)
    $$bindings.updated(updated);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0)
    $$bindings.summary(summary);
  if ($$props.repo === void 0 && $$bindings.repo && repo !== void 0)
    $$bindings.repo(repo);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.relatedPosts === void 0 && $$bindings.relatedPosts && relatedPosts !== void 0)
    $$bindings.relatedPosts(relatedPosts);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${escape(name)} \xB7 Work \xB7 Cassidy Bandy</title>`, ""}`, ""}

<article class="${"article"}">${validate_component(Breadcrumbs, "Breadcrumbs").$$render($$result, {}, {}, {})}
	<h1 class="${"svelte-1trw5vf"}">${escape(name)}</h1>
	<div class="${"project-info svelte-1trw5vf"}"><time${add_attribute("datetime", created, 0)}>${escape(friendlyDate(created))}</time>
		\xB7
		<span>${escape(kind)}</span></div>

	${slots.default ? slots.default({}) : ``}

	${validate_component(Links, "Links").$$render($$result, { repo, url }, {}, {})}

	<hr class="${"svelte-1trw5vf"}">

	${relatedPosts ? `<h3>Written about</h3>
		<ul class="${"list"}">${each(relatedPosts, (post) => {
    return `<li><a href="${"/blog/" + escape(post.slug)}" class="${"text-link"}">${escape(post.title)}</a>
					<span class="${"quiet svelte-1trw5vf"}">- ${escape(friendlyDate(post.created, true))}</span>
				</li>`;
  })}</ul>` : ``}
</article>`;
});
export { Layout as L, load as l };
