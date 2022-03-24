import { c as create_ssr_component, o as onDestroy, d as add_attribute } from "./index-054dfab6.js";
const Meta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { image = void 0 } = $$props;
  let { isRoot = false } = $$props;
  onDestroy(() => {
  });
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.isRoot === void 0 && $$bindings.isRoot && isRoot !== void 0)
    $$bindings.isRoot(isRoot);
  return `<meta name="${"title"}"${add_attribute("content", title, 0)}>
<meta name="${"description"}"${add_attribute("content", description, 0)}>
<meta name="${"theme-color"}" content="${"#bd84bc"}">

${!isRoot ? `<meta property="${"og:site_name"}" content="${"Rocky Kev"}">` : ``}
<meta property="${"og:type"}" content="${"website"}">
<meta property="${"og:title"}"${add_attribute("content", title, 0)}>
<meta property="${"og:description"}"${add_attribute("content", description, 0)}>
${image ? `<meta property="${"og:image"}"${add_attribute("content", image, 0)}>` : ``}

<meta name="${"twitter:card"}" content="${"summary_large_image"}">
<meta name="${"twitter:title"}"${add_attribute("content", title, 0)}>
<meta name="${"twitter:description"}"${add_attribute("content", description, 0)}>
${image ? `<meta name="${"twitter:image"}"${add_attribute("content", image, 0)}>` : ``}`;
});
export { Meta as M };
