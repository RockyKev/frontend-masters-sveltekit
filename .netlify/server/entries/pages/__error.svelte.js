import { c as create_ssr_component, e as escape } from "../../chunks/index-054dfab6.js";
function load({ error, status }) {
  return { props: { error, status } };
}
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { error } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  return `${$$result.head += `${$$result.title = `<title>${escape(status)}</title>`, ""}`, ""}

<h1>${escape(status)}</h1>

${error && error.message ? `<p>${escape(error.message)}</p>` : ``}

${``}`;
});
export { _error as default, load };
