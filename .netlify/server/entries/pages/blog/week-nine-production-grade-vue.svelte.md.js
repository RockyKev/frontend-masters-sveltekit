import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-b8ce1441.js";
export { l as load } from "../../../chunks/_layout-b8ce1441.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-c29f9c7c.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Nine - Production Grade Vue",
  "created": "2022-01-05T00:00:00.000Z",
  "summary": "Production-Grade Vue (Part 1)",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_nine_production_grade_vue_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Ben Hong
Netlify
<a href="${"https://frontendmasters.com/courses/production-vue/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://frontendmasters.com/courses/production-vue/</a></p>
<h2 id="${"best-practices"}"><a href="${"#best-practices"}">Best Practices</a></h2>
<p>SFC - single file components
The (template, script, styles) pattern.</p>
<p>JAVASCRIPT
<strong>Javascript vs TypeScripts</strong></p>
<ul class="${"list"}"><li><p>Most issues are not from type violations.</p></li>
<li><p>Typescript does inherently guarentee type safely. It requires discipline</p></li>
<li><p>Full type safety in a codebase can affect productivity.</p></li>
<li><p>Most applications can do better testing strategys and code reviews</p></li>
<li><p>You can also add codebase with JSDoc comments. </p></li></ul>
<p>If Vue.js 2, not worth it.</p>
<p>If Vue.js 3, and interested\u2026 go for it!</p>
<p>Why export default
versus
export default NAMED</p>
<p>HTML
html should exist in <code>template</code> or render function.</p>
<p>The render block
Rarely used.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">&#123;</span> 
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'h1'</span><span class="token punctuation">,</span> <span class="token string">'Hello Frontend Masters!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// import mode</span>
<span class="token comment">// hyper script</span>
<span class="token comment">// it's another name for createElement</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> h <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">&#123;</span> 
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'h1'</span><span class="token punctuation">,</span> <span class="token string">'Hello Frontend Masters!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This is helpful to create dynamically.
But it\u2019s better to just use template, because there\u2019s a whole list of other API to create bindings.</p>
<div><figure><img src="${"https://i.imgur.com/V9q9slj.png"}"></figure><figure><img src="${"https://i.imgur.com/IyrXlnG.png"}"></figure><figure><img src="${"https://i.imgur.com/dGgQVxY.png"}"></figure><figure><img src="${"https://i.imgur.com/8Xa8lNZ.png"}"></figure></div>
<p>Of course, the more you abstract it, the harder it is to know what\u2019s being passed. </p>
<p>CSS</p>
<p>Instead of using scoped\u2026</p>
<p>you can use the module.</p>
<p>This creates completely scoped components. </p>
<p>Another bonus is CSS Module Exports.</p>
<div><figure><img src="${"https://i.imgur.com/AHGDx1U.png"}"></figure><figure><img src="${"https://i.imgur.com/gnRkKIR.png"}"></figure></div>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html">
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$style.red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
This should be red
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">


</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>CSS module is done at the compile level. </p>
<p>Ben prefers to put ternaries in the <code>&lt;script&gt;</code> portion.</p>
<figure><img src="${"https://i.imgur.com/Klpz2HI.png"}"></figure>
<p>EXERCISE:
The Dynamic heading issue and how to solve it. </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span> 
            <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'1'</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>&#96;h$<span class="token punctuation">&#123;</span><span class="token keyword">this</span><span class="token punctuation">.</span>level<span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">, </span><span class="token template-punctuation string">&#96;</span></span>Hello it works<span class="token operator">!</span>&#96;<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>TIL - Render function
<a href="${"https://v3.vuejs.org/guide/render-function.html"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://v3.vuejs.org/guide/render-function.html</a></p>
<h2 id="${"cli"}"><a href="${"#cli"}">CLI</a></h2>
<p>The CLI has a UI that lets you:</p>
<ol class="${"list"}"><li>analyze the project deeper</li>
<li>Know about dependencies and optimize</li>
<li>Even kill things. </li></ol>
<p>It also lets you create ES module version, and a legacy module. WOW!</p>
<figure><img src="${"https://i.imgur.com/MoDwiIG.png"}"></figure>
<p>With CLI, you can also add a bunch of libraries. Say you need TypeScript, you also need to get all the configurations and files are in the right place. Like the shim file.</p>
<p>Valid Alternatives to Vue CLI</p>
<p>Micro-frontends is kinda overkill.
Legacy migration.
Server-side rendering.</p>
<p>Question: Vite
Stick with webpack because production apps need stability, and webpack has years of packages that are stable. </p>
<p>Vite has a lot of features that can handle things. FOr new projects, it\u2019s fine.</p>
<p>QUESTION: Can you extend CLI?</p>
<p>It\u2019s open source so yes. </p>
<h2 id="${"component"}"><a href="${"#component"}">Component</a></h2>
<p>Naming Conventions</p>
<p>1) Avoid single name components
Header, Button, Container</p>
<p>We want to avoid collision with HTML5 spec. Vue wants to </p>
<p>filter pipe in Vue2 was depreciated because HTML5 was thinking about using it. </p>
<figure><img src="${"https://i.imgur.com/CflGpVy.png"}"></figure>
<p>If the <code>the</code> element is weird and you\u2019re seeing it too frequently, that\u2019s a sign that you may want to generic things some more.</p>
<figure><img src="${"https://i.imgur.com/Rp46OrP.png"}"></figure>
<figure><img src="${"https://i.imgur.com/BOl9oD9.png"}"></figure>
<p>Premature Optimization is the root of all evil. </p>
<p>PRINCIPLE:
Data Driven Refactor
SIgns you need more components</p>
<ul class="${"list"}"><li>When your components are hard to understand</li>
<li>You feel a fragment of a component could use its own state</li>
<li>Hard to describe what the component is actually responsible for. </li></ul>
<p>How to find reusable components</p>
<ol class="${"list"}"><li><p>Look for v-for loops</p></li>
<li><p>Look for large components</p></li>
<li><p>Look for simular visual designs</p></li>
<li><p>Look for repeating interface fragments</p></li>
<li><p>Look for muptiple/mixed responsibilities</p></li>
<li><p>Look for complicated data paths. </p></li></ol>
<p>If you follow too hard on Presentational VS stateful components, it can lead you into knots.</p>
<h3 id="${"file-structure"}"><a href="${"#file-structure"}">File Structure</a></h3>
<figure><img src="${"https://i.imgur.com/QGzyvXi.png"}"></figure>
<p>Instead of saying Page/Header.vue
Change it to PageHeader.vue</p>
<p>A hybrid level - using page level components. </p>
<p>For Global imports that use the same thing:
Chris Fritz
<a href="${"https://www.youtube.com/watch?v=7lpemgMhi0k"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.youtube.com/watch?v=7lpemgMhi0k</a></p>
<p>Vue global component registration - import all files in directory, taken from Chris Fritz\u2019s talk
<a href="${"https://gist.github.com/lnufnu/ad72070b2855b7be082c685a4a1b4d5d"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://gist.github.com/lnufnu/ad72070b2855b7be082c685a4a1b4d5d</a></p>
<p>Enterprise level:
<a href="${"https://github.com/bencodezen/vue-enterprise-boilerplate"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/bencodezen/vue-enterprise-boilerplate</a></p>
<h3 id="${"component-props"}"><a href="${"#component-props"}">Component Props</a></h3>
<figure><img src="${"https://i.imgur.com/hWM3uQd.png"}"></figure>
<p>no need to have \u2018required\u2019 if you have a default. It\u2019s redundant.</p>
<figure><img src="${"https://i.imgur.com/yUNU8Hn.png"}"></figure>
<h3 id="${"prop-complexity-with-slot"}"><a href="${"#prop-complexity-with-slot"}">Prop complexity with Slot</a></h3>
<p>Problems</p>
<ul class="${"list"}"><li>New requirements increase complexity</li>
<li>If the component has too many multiple responsibilities and conditionals</li>
<li>It becomes low flexibility and hard to maintain</li></ul>
<p>FOR EXAMPLE:</p>
<p>A button \u2014 What if: </p>
<ol class="${"list"}"><li>Optional image in front</li>
<li>Optional image in back</li>
<li>Optional text in the center</li>
<li>Optional Loading animation</li>
<li>Optional front/back can be loaders too.</li></ol>
<p>Rather than overload it with props \u2014
use slots.</p>
<figure><img src="${"https://i.imgur.com/KteFeGV.png"}"></figure>
<p>Look at the top right.
Just inject the element you want, instead of passsing data through props over and over. </p>
<h3 id="${"dynamically-switching-components"}"><a href="${"#dynamically-switching-components"}">Dynamically Switching Components</a></h3>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;component :is=&quot;&quot;&gt;</code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/wh4upp0.png"}"></figure>
<ol class="${"list"}"><li>It only loads the component it needs.</li>
<li>This is literally how routerView works.</li></ol>
<p>PROS:</p>
<ul class="${"list"}"><li>Extremely powerful/flexible</li>
<li>Can accept props</li>
<li>Can accept async components</li>
<li>Can change into different components</li></ul>
<p>CONS:</p>
<ul class="${"list"}"><li>Be careful with prop handling.</li></ul>
<p>Benefits - since you bind a object as a prop, you can then tap into it.</p>
<h3 id="${"vendor-components"}"><a href="${"#vendor-components"}">Vendor Components</a></h3>
<figure><img src="${"https://i.imgur.com/6ZjeDX5.png"}"></figure>
<p>When using Vendor-specific components, it\u2019ll be a nightmare to refactor, especially if you\u2019re swapping to material design or another font family.</p>
<p>Recommended to wrap it with your own component.</p>
<figure><img src="${"https://i.imgur.com/WDOm4OE.png"}"></figure>
<p>Now you can add a simple if statement to switch without hundreds of lines of fixes.</p>
<h3 id="${"transparent-component-wrapper"}"><a href="${"#transparent-component-wrapper"}">Transparent Component Wrapper</a></h3>
<figure><img src="${"https://i.imgur.com/sTbVw1K.png"}"></figure>
<p>Vue assigns things to the top-level element.</p>
<p>So those click events are happening on <code>div</code>.
Instead switch it.</p>
<h3 id="${"mixins"}"><a href="${"#mixins"}">Mixins</a></h3>
<p>Sharing functionality with different components.</p>
<p>People always reach for Mixins first.</p>
<figure><img src="${"https://i.imgur.com/O35xgbo.png"}"></figure>
<p>PROBLEMS WITH MIXINS:</p>
<ul class="${"list"}"><li>Possible Name Clashes</li>
<li>Can\u2019t share template fragments</li>
<li>Gets harder to track where things are coming from. Harder to debug because where is it coming from?</li></ul>
<p>PROS:</p>
<ul class="${"list"}"><li>Easy to use</li>
<li>Good for refactoring</li></ul>
<h3 id="${"provideinject-api"}"><a href="${"#provideinject-api"}">Provide/Inject API</a></h3>
<p><a href="${"https://vuejs.org/v2/api/#provide-inject"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://vuejs.org/v2/api/#provide-inject</a></p>
<p>Lightweight data store. </p>
<p>Say your doing a parent-child prop relationship. </p>
<p>If you do a great-great-great-grandparent relationship, it gets real messy with dependency.</p>
<figure><img src="${"https://i.imgur.com/QUqxCxX.png"}"></figure>
<p>PROS:</p>
<ul class="${"list"}"><li>Easily share data and methods with descendants</li>
<li>Helps avoid unnessary props</li>
<li>Components can choose which properties to inject</li>
<li>Can be used to provide default props and data</li></ul>
<p>CONS:
There are some reactivity caveats when it comes to usage in Vue 2</p>
<ul class="${"list"}"><li>Create a tight relationship between two components that\u2019s not immediatelly apparent</li>
<li>There is ambiguity where it\u2019s coming from where. </li></ul>
<p>They are useful for advance plugin/component libraries. Not good for generic application code.</p>
<p>Tightly coupling component names have a better alternative.</p>`;
    }
  })}`;
});
export { Week_nine_production_grade_vue_svelte as default, metadata };
