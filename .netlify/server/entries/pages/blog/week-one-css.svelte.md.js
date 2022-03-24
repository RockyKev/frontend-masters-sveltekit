import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-b8ce1441.js";
export { l as load } from "../../../chunks/_layout-b8ce1441.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-c29f9c7c.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week One - CSS Grids and Flexbox",
  "created": "2021-10-29T00:00:00.000Z",
  "summary": "CSS Grids and Flexbox for Responsive Web Design",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_one_css_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Course: <a href="${"https://frontendmasters.com/courses/css-grids-flexbox"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://frontendmasters.com/courses/css-grids-flexbox</a>
Instructor: Jen Kramer</p>
<h2 id="${"floats"}"><a href="${"#floats"}">Floats</a></h2>
<p>After float, you must clear</p>
<p>Using the psuedo after table hack.</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">.row::after</span> <span class="token punctuation">&#123;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Floats requires you to use \u201Cmagic math\u201D, like 97% instead of 100%.
margin 4%, you\u2019ll have to do all this weird math.</p>
<h2 id="${"flexbox"}"><a href="${"#flexbox"}">Flexbox</a></h2>
<p>made in 2009
2012 was when it became flex.</p>
<p>If you use a lot of col-class, you can do this</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">[class*="col-"]</span> <span class="token punctuation">&#123;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"flexbox-grid"}"><a href="${"#flexbox-grid"}">Flexbox Grid</a></h2>
<p>Her exercises are assuming 96% total width, so she\u2019s using magic math of 16% gutters and a leftover 4%.</p>
<p>DON\u2019T DO THAT.
WTF.
Stop with the magic numbers.</p>
<p>There\u2019s <code>gap</code>. </p>
<h2 id="${"responsive-images"}"><a href="${"#responsive-images"}">Responsive Images</a></h2>
<p>Image sizes:</p>
<ul class="${"list"}"><li>Server-side - load big image. Not ideal.</li>
<li>Server-side - manage multiple version, show based on need. Like WordPress! Good!</li>
<li>Client-side - manage multiple version, load images with hide/display. Not ideal, since all images will be downloaded.</li>
<li>Client-side - Javascript library, Good!</li></ul>
<p>Modern responsive design using <code>&lt;picture&gt;</code> tag.</p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token comment">&lt;!-- media is like media query --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img/peace-pie-original.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(min-width: 1200px)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img/peace-pie-original.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(min-width: 1200px)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img/peace-pie-150.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a rainbow colored pie<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- img is where you place the mobile, alt tag, and fallback --></span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"css-grid"}"><a href="${"#css-grid"}">CSS Grid</a></h2>
<p><strong>Support</strong>
<code>@support</code> tag
If the browser supports the new feature, use it.
That\u2019s IF the browser even has the <code>@support</code> tag, but that was like 2 years ago. </p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token atrule"><span class="token rule">@supports</span> <span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">div</span> <span class="token punctuation">&#123;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p><a href="${"https://developer.mozilla.org/en-US/docs/Web/CSS/@supports"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://developer.mozilla.org/en-US/docs/Web/CSS/@supports</a></p>
<p><strong>Grid Properties</strong></p>
<p>fr - fragments</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">.myClass</span> <span class="token punctuation">&#123;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> [col1] 40px [col2] 3fr<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 50% 25vh auto<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>`;
    }
  })}`;
});
export { Week_one_css_svelte as default, metadata };
