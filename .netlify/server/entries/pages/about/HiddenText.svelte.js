import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index-054dfab6.js";
/* empty css                                                                 */const css = {
  code: "div.svelte-vfo2dy{display:inline-block}",
  map: null
};
const HiddenText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"hidden-text svelte-vfo2dy"}"${add_attribute("tabindex", 0, 0)} aria-live="${"polite"}">${`${slots.hidden ? slots.hidden({}) : ``}`}
</div>`;
});
export { HiddenText as default };
