import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-a2120f4e.js";
export { l as load } from "../../../chunks/_layout-a2120f4e.js";
import "../../../chunks/Breadcrumbs-3d93c575.js";
import "../../../chunks/stores-2f64c591.js";
/* empty css                                                           */import "@mdi/js";
import "../../../chunks/dateTime-524e104e.js";
const metadata = {
  "name": "Type Kana",
  "created": "2020-08-02T00:00:00.000Z",
  "kind": "Web app",
  "summary": "A quiz app to help you learn hiragana and katakana, the Japanese syllabaries.",
  "repo": "https://github.com/c-bandy/type-kana",
  "url": "https://type-kana.cass.moe"
};
const Type_kana_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Type Kana is quiz app to help you learn hiragana and katakana, the Japanese
syllabaries. The app is built in Svelte, and utilizes the powerful Svelte Kit
framework for SSR + routing.</p>`;
    }
  })}`;
});
export { Type_kana_svelte as default, metadata };
