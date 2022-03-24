import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-b8ce1441.js";
export { l as load } from "../../../chunks/_layout-b8ce1441.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-c29f9c7c.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Vue Mastery - Vue 3 Forms",
  "created": "2021-11-14T00:00:00.000Z",
  "summary": "Vue Mastery Vue 3 Forms",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Vue_mastery_vue3_forms_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2 id="${"vue-3-forms"}"><a href="${"#vue-3-forms"}">Vue 3 Forms</a></h2>
<p>Source: <a href="${"https://www.vuemastery.com/courses/vue3-forms/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.vuemastery.com/courses/vue3-forms/</a></p>
<h3 id><a href="${"#"}"></a></h3>
<p>End result: <a href="${"https://github.com/Code-Pop/Vue-3-Forms/tree/l5-end"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/Code-Pop/Vue-3-Forms/tree/l5-end</a></p>
<figure><img src="${"https://i.imgur.com/ZuKq7PO.png"}"></figure>
<pre class="${"language-vue"}"><!-- HTML_TAG_START -->${`<code class="language-vue">
// components/BaseCheckbox.vue
&lt;template&gt;
  &lt;input
    type=&quot;checkbox&quot;
    :checked=&quot;modelValue&quot;
    @change=&quot;$emit(&#39;update:modelValue&#39;, $event.target.checked)&quot;
    class=&quot;field&quot;
  /&gt;
  &lt;label v-if=&quot;label&quot;&gt;&#123;&#123; label &#125;&#125;&lt;/label&gt;
&lt;/template&gt;

&lt;script&gt;
export default &#123;
  props: &#123;
    label: &#123;
      type: String,
      default: &#39;&#39;
    &#125;,
    modelValue: &#123;
      type: Boolean,
      default: false
    &#125;
  &#125;
&#125;
&lt;/script&gt;

// views/SimpleForm.vue

</code>`}<!-- HTML_TAG_END --></pre>`;
    }
  })}`;
});
export { Vue_mastery_vue3_forms_svelte as default, metadata };
