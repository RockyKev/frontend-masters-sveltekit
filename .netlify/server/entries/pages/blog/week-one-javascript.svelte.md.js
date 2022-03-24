import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-ab845620.js";
export { l as load } from "../../../chunks/_layout-ab845620.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-3d93c575.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week One - Getting Started with JavaScript, v2",
  "created": "2021-10-27T00:00:00.000Z",
  "summary": "Getting Started with JavaScript, v2. The Three Pillars of JS",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_one_javascript_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Course: Week One - Getting Started with JavaScript, v2
Instructor: Kyle Simpson</p>
<h2 id="${"programming-primer"}"><a href="${"#programming-primer"}">Programming Primer</a></h2>
<p>The Three Pillars of JS in Kyle Simpson\u2019s class are: </p>
<p>Types &amp; Coercion - How to convert from one to another, checking quality, primatives</p>
<p>Scope - How data stays within the same space</p>
<p>this &amp; prototypes - Aligning </p>
<h2 id="${"types--coercion"}"><a href="${"#types--coercion"}">Types &amp; Coercion</a></h2>
<p><strong>isNan</strong>
Something to be aware:
\u201Cgreeting\u201D is NaN but this is not true \u201Cgreeting\u201D.isNaN</p>
<p><strong>Coercion</strong></p>
<p>When you string + number. </p>
<p>Javascript tries to automagically identify the type based on the first variable.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">100 + 100 = 200
&quot;100&quot; + 100 = 100100 because first is string</code>`}<!-- HTML_TAG_END --></pre>
<p>For example: </p>
<ul class="${"list"}"><li>It only does numeric math when the first variable is a number.</li>
<li>It\u2019ll add the strings together when the first variable is a string</li></ul>
<p>It\u2019s a regrettable choice.</p>
<p><strong>Double-equals vs triple-equals</strong></p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript">
<span class="token comment">// this</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>workshop1<span class="token punctuation">.</span>topic <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> workshop1<span class="token punctuation">.</span>topic <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
   <span class="token punctuation">(</span>workshop2<span class="token punctuation">.</span>topic <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> workshop2<span class="token punctuation">.</span>topic <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> 
  <span class="token comment">// ... </span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// is the same</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>workshop1<span class="token punctuation">.</span>topic <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>workshop2<span class="token punctuation">.</span>topic <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> 
  <span class="token comment">// ... </span>
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"scope"}"><a href="${"#scope"}">Scope</a></h2>
<p>The differences:
<code>undefined</code> - variable that\u2019s been declared but no value given
<code>undeclared</code> - never been made</p>
<p><strong>Reducing Scope - The old way:</strong>
IFEE is a good way to declare a value that you don\u2019t want to change. </p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">var</span> teacher <span class="token operator">=</span> <span class="token string">"kyle"</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span> <span class="token keyword">function</span> <span class="token function">anotherTeacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">var</span> teacher <span class="token operator">=</span> <span class="token string">"suzy"</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>teacher<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Suzy</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>teacher<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// kyle</span></code>`}<!-- HTML_TAG_END --></pre>
<p>you can\u2019t change teacher, so it\u2019s like a harden value. </p>
<p><strong>Reducing Scope - Today, let/const:</strong></p>
<p>You know, let/const.</p>
<p><strong>Scoping within closure:</strong></p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript">
<span class="token keyword">function</span> <span class="token function">ask</span><span class="token punctuation">(</span><span class="token parameter">question</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">holdYourQuestion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>question<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">var</span> myQuestion <span class="token operator">=</span> <span class="token function">ask</span><span class="token punctuation">(</span><span class="token string">"What is closure?"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">myQuestion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// What is Closure?</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Think of it like a backpack. It saves the data inside of it.</p>
<h2 id="${"this--prototypes"}"><a href="${"#this--prototypes"}">this &amp; prototypes</a></h2>
<p>All objects have a prototype chain</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token comment">// Let's create an object o from function F with its own properties a and b:</span>

<span class="token keyword">let</span> <span class="token function-variable function">F</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// making a copy of F()'s values.</span>
<span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#123;a: 1, b: 2&#125;</span>

<span class="token comment">// add properties in F function's prototype</span>
<span class="token class-name">F</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token class-name">F</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>

<span class="token comment">// see how o doesn't get affected.</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
<span class="token comment">// Is there a 'c' own property on o? No, check its prototype.</span>
<span class="token comment">// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.</span></code>`}<!-- HTML_TAG_END --></pre>
<p><a href="${"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain</a></p>`;
    }
  })}`;
});
export { Week_one_javascript_svelte as default, metadata };
