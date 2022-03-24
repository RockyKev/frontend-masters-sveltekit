import pMap from "p-map";
import { basename } from "path";
const get = async () => {
  const modules = Object.entries({ "./comptia-networks-part-1.svelte.md": () => import("../../pages/blog/comptia-networks-part-1.svelte.md.js"), "./comptia-networks-part-2.svelte.md": () => import("../../pages/blog/comptia-networks-part-2.svelte.md.js"), "./vue-mastery-vue3-forms.svelte.md": () => import("../../pages/blog/vue-mastery-vue3-forms.svelte.md.js"), "./week-eight-css-in-depth.svelte.md": () => import("../../pages/blog/week-eight-css-in-depth.svelte.md.js"), "./week-eleven-complete-intro-react.svelte.md": () => import("../../pages/blog/week-eleven-complete-intro-react.svelte.md.js"), "./week-eleven-full-stack.svelte.md": () => import("../../pages/blog/week-eleven-full-stack.svelte.md.js"), "./week-five-debugging.svelte.md": () => import("../../pages/blog/week-five-debugging.svelte.md.js"), "./week-five-hard-parts-ooj.svelte.md": () => import("../../pages/blog/week-five-hard-parts-ooj.svelte.md.js"), "./week-five-js-testing.svelte.md": () => import("../../pages/blog/week-five-js-testing.svelte.md.js"), "./week-four-api-dev.svelte.md": () => import("../../pages/blog/week-four-api-dev.svelte.md.js"), "./week-four-intro-to-serverless.svelte.md": () => import("../../pages/blog/week-four-intro-to-serverless.svelte.md.js"), "./week-four-nodejs-v2.svelte.md": () => import("../../pages/blog/week-four-nodejs-v2.svelte.md.js"), "./week-nine-building-applications-vue-nuxt.svelte.md": () => import("../../pages/blog/week-nine-building-applications-vue-nuxt.svelte.md.js"), "./week-nine-intro-to-vue.svelte.md": () => import("../../pages/blog/week-nine-intro-to-vue.svelte.md.js"), "./week-nine-production-grade-vue.svelte.md": () => import("../../pages/blog/week-nine-production-grade-vue.svelte.md.js"), "./week-one-css.svelte.md": () => import("../../pages/blog/week-one-css.svelte.md.js"), "./week-one-javascript.svelte.md": () => import("../../pages/blog/week-one-javascript.svelte.md.js"), "./week-one-webdev.svelte.md": () => import("../../pages/blog/week-one-webdev.svelte.md.js"), "./week-seven-deep-js.svelte.md": () => import("../../pages/blog/week-seven-deep-js.svelte.md.js"), "./week-six-code-transformation.svelte.md": () => import("../../pages/blog/week-six-code-transformation.svelte.md.js"), "./week-six-js-hard-parts.svelte.md": () => import("../../pages/blog/week-six-js-hard-parts.svelte.md.js"), "./week-ten-advanced-vue-features.svelte.md": () => import("../../pages/blog/week-ten-advanced-vue-features.svelte.md.js"), "./week-ten-production-grade-vue-part-2.svelte.md": () => import("../../pages/blog/week-ten-production-grade-vue-part-2.svelte.md.js"), "./week-ten-vuex-for-intermediate.svelte.md": () => import("../../pages/blog/week-ten-vuex-for-intermediate.svelte.md.js"), "./week-three-intro-dev-tools.svelte.md": () => import("../../pages/blog/week-three-intro-dev-tools.svelte.md.js"), "./week-three-intro-linux-command.svelte.md": () => import("../../pages/blog/week-three-intro-linux-command.svelte.md.js"), "./week-three-seo.svelte.md": () => import("../../pages/blog/week-three-seo.svelte.md.js"), "./week-twelve-functional-js-part-1.svelte.md": () => import("../../pages/blog/week-twelve-functional-js-part-1.svelte.md.js"), "./week-twelve-typescript.svelte.md": () => import("../../pages/blog/week-twelve-typescript.svelte.md.js"), "./week-twelve-web-performance.svelte.md": () => import("../../pages/blog/week-twelve-web-performance.svelte.md.js"), "./week-two-accessibility.svelte.md": () => import("../../pages/blog/week-two-accessibility.svelte.md.js"), "./week-two-js-functional.svelte.md": () => import("../../pages/blog/week-two-js-functional.svelte.md.js") });
  const posts = await pMap(modules, async ([filename, module]) => {
    const { metadata } = await module();
    return {
      ...metadata,
      slug: basename(filename, ".svelte.md")
    };
  });
  posts.sort((a, b) => new Date(a.created) > new Date(b.created) ? -1 : 1);
  return {
    status: 200,
    body: { posts }
  };
};
export { get };
