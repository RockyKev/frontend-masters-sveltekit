import { c as create_ssr_component, f as each, e as escape } from "../../../chunks/index-054dfab6.js";
import { f as friendlyDate } from "../../../chunks/dateTime-524e104e.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".quiet.svelte-174vvkc{color:var(--color-text-300)}",
  map: null
};
const load = async function({ fetch }) {
  const url = "/blog.json";
  const res = await fetch(url);
  if (res.ok) {
    const { posts } = await res.json();
    return { props: { posts } };
  } else {
    return {
      status: 500,
      error: new Error(`Could not fetch ${url}`)
    };
  }
};
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Blog \xB7 Rocky Kev</title>`, ""}`, ""}

<article class="${"article"}"><h1>Blog</h1>
	<ul class="${"list"}">${each(posts, (post) => {
    return `<li><a href="${"/blog/" + escape(post.slug)}" class="${"text-link"}">${escape(post.title)}</a>
				<span class="${"quiet svelte-174vvkc"}">- ${escape(friendlyDate(post.created, true))}</span>
			</li>`;
  })}</ul>
</article>`;
});
export { Blog as default, load };
