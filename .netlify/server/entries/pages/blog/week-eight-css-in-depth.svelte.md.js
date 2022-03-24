import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-ab845620.js";
export { l as load } from "../../../chunks/_layout-ab845620.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-3d93c575.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Eight - CSS In Depth",
  "created": "2021-12-21T00:00:00.000Z",
  "summary": "CSS In-Depth, v2",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_eight_css_in_depth_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>CSS In-Depth, v2
Estelle Weyl
Slides: <a href="${"https://estelle.github.io/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://estelle.github.io/</a></p>
<p>Separation of Concerns</p>
<p>Content - HTML
Behavior - JS
Presentation - CSS</p>
<p>Prefixes is specifically for edge-cases. For example android devices that can\u2019t generate gradients, so they have their special way. </p>
<h2 id="${"selectors"}"><a href="${"#selectors"}">Selectors</a></h2>
<p>All the selectors, ever (so far):
<a href="${"https://estelle.github.io/selectors/selectors.html"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://estelle.github.io/selectors/selectors.html</a></p>
<figure><img src="${"https://i.imgur.com/ub0cqG1.png"}"></figure>
<figure><img src="${"https://i.imgur.com/FDJX5dq.png"}"></figure>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">// E[attr^=val]
// Element E whose attribute attr starts with the value val.

a[href^=mailto]</span> <span class="token punctuation">&#123;</span><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>emailicon.gif<span class="token punctuation">)</span></span><span class="token punctuation">;</span><span class="token punctuation">&#125;</span>
<span class="token selector">a[href^=http]:after</span> <span class="token punctuation">&#123;</span><span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">" ("</span> <span class="token function">attr</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span> <span class="token string">")"</span><span class="token punctuation">;</span><span class="token punctuation">&#125;</span>

<span class="token selector">// E[attr$=val]
// Element E whose attribute attr ends in val . 

a[href$=pdf]</span> <span class="token punctuation">&#123;</span><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>pdficon.gif<span class="token punctuation">)</span></span><span class="token punctuation">;</span><span class="token punctuation">&#125;</span>
<span class="token selector">a[href$=pdf]:after</span> <span class="token punctuation">&#123;</span><span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">" (PDF)"</span><span class="token punctuation">;</span><span class="token punctuation">&#125;</span>

// E[attr*=val]
// Element E whose attribute attr matches val anywhere within the attribute. Similar to E[attr~=val] above<span class="token punctuation">,</span> except the val can be part of a word.
</code>`}<!-- HTML_TAG_END --></pre>
<p>States</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">:default
:valid
:invalid

:required
:optional

:in-range
:out-of-range

:read-only
:read-write

:placeholder-shown

:user-invalid</code>`}<!-- HTML_TAG_END --></pre>
<p>Additional Pseudo-elements
Highlight Pseudo-elements:</p>
<p>::selection
::inactive-selection
::spelling-error
::grammar-error
Other Pseudo-elements:</p>
<p>::marker
::placeholder
::content</p>
<h2 id="${"psuedo-elements"}"><a href="${"#psuedo-elements"}">Psuedo-elements</a></h2>
<p>last-child vs last-of-type</p>
<p>root, empty, and blank</p>
<p><strong>empty elements</strong></p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;E/&gt;
&lt;E&gt;&lt;/E&gt;
&lt;E&gt;&lt;!-- this is a comment --&gt;&lt;/E&gt;
&lt;E title=&quot;this is an empty element&quot;/&gt;</code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Drag and Drop targetting</strong></p>
<p>Drag and Drop Pseudo Classes
<code>:drop</code>
drop targets while the user is \u201Cdragging\u201D.
Unfortunately, dropzone attribute is not yet supported
<code>:drop(active)</code>
current drop target for the drag operation.
<code>:drop(valid)</code>
drop target is valid for the object currently being dragged, like correct filetype.
<code>:drop(invalid)</code>
drop target is invalid for the object currently being dragged, i.e. doesn\u2019t except the filetype of object being dragged.
<code>:drop(valid active)</code>
matches active drop target if it\u2019s valid</p>
<h2 id="${"generated-content"}"><a href="${"#generated-content"}">Generated Content</a></h2>
<p>Adding custom tags based on css selectors</p>
<figure><img src="${"https://i.imgur.com/b8dfYbx.png"}"></figure>
<p>You can\u2019t use transform tools (like rotate) on a static element. </p>
<p>You can put attribute content into the content tag!</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">a[href^=http]:hover &#123;
   position: relative;
&#125;
a[href^=http]:hover:after &#123;
   content: attr(href);
   position: absolute;
   top: 1em;
   left: 0;
   background-color: black;
   color: white;
   padding: 3px 5px;
   line-height:1;
&#125; </code>`}<!-- HTML_TAG_END --></pre>
<p>Generated Content (like <code>after</code> content) is not accessibility. </p>
<h2 id="${"media-query"}"><a href="${"#media-query"}">Media query</a></h2>
<p>Resolution Units
dpi: dots per inch (72, 96)</p>
<p>dpcm: dots per centimeter (1dpcm \u2248 2.54dpi)</p>
<p>dppx: dots per pixel
1dppx = 96dpi (default resolution of images)
Note: 0 is invalid.</p>
<p>For a mobile-optimized site, you want this:</p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>The only time you want to disable zoom or resizing is if it\u2019s a game.</p>
<p>MDN: <a href="${"https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag</a></p>
<h2 id="${"supports"}"><a href="${"#supports"}">Supports</a></h2>
<p>@supports is the way to apply a new CSS feature.</p>
<h2 id="${"colors-and-appearance"}"><a href="${"#colors-and-appearance"}">Colors and Appearance</a></h2>
<p><strong>Differences between opacity and transparency</strong>
When you have opacity, it\u2019s actually the whole element that is becoming transparent. So here, the top one is opacity 1.</p>
<p>Here you still have the white, because only the color of the shadow, it should be shadow color. And the color of the text became transparent. But you still have the shadow on that text and you still have the background that is fully opaque. Here the text, the shadow, the background, all of it became transparent, because the opacity was set on the element.</p>
<p>And everything went to transparent. So that\u2019s the difference between AlphaTransparency and opacity. Which really doesn\u2019t make it that much of a difference in your life, until you get stuck on explaining to someone, basically. So AlphaTransparency tips, transparent shadows are awesome. </p>
<p><strong>buttons</strong></p>
<p>Please don\u2019t use <code>spans</code> or <code>divs</code> as button.
How do you tab to it? How do you keyboard focus to it? How do you deal with all the accessibility issues? Use <code>button</code>. </p>
<h2 id="${"flexbox"}"><a href="${"#flexbox"}">Flexbox</a></h2>
<p>What are flex items:</p>
<ul class="${"list"}"><li>All non-absolute positioned child nodes</li>
<li>generated content (psuedo elements like before &amp; after)</li>
<li>anonymous flex items =&gt; non-empty text nodes</li></ul>
<p>What are NOT flex items:</p>
<ol class="${"list"}"><li>::first-line &amp; ::first-letter</li>
<li>white space</li></ol>
<p>What are kinda: </p>
<ol class="${"list"}"><li>absolute/fixed positioned items</li></ol>
<p>Changes Properties:</p>
<ol class="${"list"}"><li><code>min-height/min-width</code> are switched to default auto. (instead of 0)</li>
<li><code>visibility: collapse</code></li>
<li><code>margin:</code> Adjacent flex item margins do not collapse</li></ol>
<p>Ignored Properties:</p>
<ol class="${"list"}"><li>column-* properties</li>
<li>Float</li>
<li>Clear</li>
<li>Vertical-align</li></ol>
<h2 id="${"tables"}"><a href="${"#tables"}">Tables</a></h2>
<p>thead - Place to put the title.
tfooter - it\u2019s where you put something like calculations. Such as all the calories in an ice cream list.</p>
<p>Captions - specifies the title of the table. </p>
<p>if you add border to your tables - it adds a bit of spacing.
border-collapse - the default behavior is <code>seperate</code> of the cell borders. <code>collapse</code> will make it like Excel.
border-spacing - how much space between. </p>
<p>You can hide shells</p>
<p>empty-cell: show | hide
it\u2019s similar to:</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">td:empty, th:empty</span> <span class="token punctuation">&#123;</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>table-layout: auto | fixed (fixed renders faster)</p>
<p>vertical-align - in tables</p>
<h2 id="${"grid"}"><a href="${"#grid"}">Grid</a></h2>
<p>Flexbox (Oct 2009. Last call working draft is May 14, 2015)
Grid. (March 2017 fully released) </p>
<p><code>fr</code> is a relative unit - a fraction. </p>
<p>It auto-assumes you want 1 fr per row.</p>
<p>The <code>tracklist</code> is the layout. </p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">div</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* grid-template-columns: &lt;track-list> */</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>gap</strong></p>
<p><code>grid-column-gap</code> - gap between col
<code>grid-row-gap</code> - gap between rows
<code>grid-gap</code> - shorthand</p>
<p><strong>Naming</strong></p>
<p>Columns and rows are ordered starting with 1. </p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">div</span> <span class="token punctuation">&#123;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr [start] <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span> [mid] <span class="token function">repeat</span><span class="token punctuation">(</span>8<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span> [end]<span class="token punctuation">;</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> 2 / start / 4 / mid<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Difference between items/content</strong></p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// Containers ---&gt; content
justify-content: 
align-content: 

It&#39;s aligning the whole row/column. 

// Containers ---&gt; items
justify-items:
align-items: 

It&#39;s aligning each item within itself. Globally</code>`}<!-- HTML_TAG_END --></pre>
<p>What about itself?</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// flex &amp; grid items 
justify-self:
align-self:</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"background--borders"}"><a href="${"#background--borders"}">Background &amp; Borders</a></h2>
<p>background is shorthand.</p>
<p>It actually has</p>
<ul class="${"list"}"><li>background-repeat</li>
<li>background-attachment</li>
<li>background-position</li>
<li>background-color</li></ul>
<p><strong>background-clip:</strong>
border-box - The background extends to the outside edge of the border (but underneath the border in z-ordering).
padding-box - The background extends to the outside edge of the padding. No background is drawn beneath the border.
content-box - The background is painted within (clipped to) the content box.
text - The background is painted within (clipped to) the foreground text.</p>
<figure><img src="${"https://i.imgur.com/FIpPB2b.png"}"></figure>
<p><strong>background-origin</strong>
border-box - The background is positioned relative to the border box.
padding-box -  The background is positioned relative to the padding box.
content-box - The background is positioned relative to the content box.</p>
<figure><img src="${"https://i.imgur.com/WivA9HX.png"}"></figure>
<h2 id="${"gradient"}"><a href="${"#gradient"}">Gradient</a></h2>
<p><a href="${"https://estelle.github.io/CSS/gradients/index.html#slide2"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://estelle.github.io/CSS/gradients/index.html#slide2</a></p>
<figure><img src="${"https://i.imgur.com/6AXwBiK.png"}"></figure>
<p>Color stops and Length units</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">.slide</span> <span class="token punctuation">&#123;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span>
    <span class="token function">linear-gradient</span><span class="token punctuation">(</span>
      red 0%<span class="token punctuation">,</span>
      orange 20%<span class="token punctuation">,</span>
      yellow 40%<span class="token punctuation">,</span>
      green 60%<span class="token punctuation">,</span>
      blue 80%<span class="token punctuation">,</span>
      purple 100%
    <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/iCLbP2S.png"}"></figure>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">.slide</span> <span class="token punctuation">&#123;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span>
    <span class="token function">linear-gradient</span><span class="token punctuation">(</span>
      orange 20vh<span class="token punctuation">,</span>
      yellow 40vh<span class="token punctuation">,</span>
      green 60vh<span class="token punctuation">,</span>
      blue 80vh
    <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/4OljjBj.png"}"></figure>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css">  <span class="token selector">.slide</span> <span class="token punctuation">&#123;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span>
      <span class="token function">conic-gradient</span><span class="token punctuation">(</span>
        orange .20turn<span class="token punctuation">,</span>
        yellow .40turn<span class="token punctuation">,</span>
        green .60turn<span class="token punctuation">,</span>
        blue .80turn
      <span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/KuU0IuE.png"}"></figure>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">.slide</span> <span class="token punctuation">&#123;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span>
    <span class="token function">linear-gradient</span><span class="token punctuation">(</span>
      red 20vh<span class="token punctuation">,</span>
      orange 20vh<span class="token punctuation">,</span>
      yellow 40vh<span class="token punctuation">,</span>
      green 60vh<span class="token punctuation">,</span>
      blue 80vh<span class="token punctuation">,</span>
      purple 80vh
    <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/enGQfcr.png"}"></figure>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">#conic11</span> <span class="token punctuation">&#123;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span>
    <span class="token function">repeating-conic-gradient</span><span class="token punctuation">(</span>
      magenta 0 4deg<span class="token punctuation">,</span>
      orange 4deg 8deg
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/Et7UYzu.png"}"></figure>
<h2 id="${"transforms--transitions--animations"}"><a href="${"#transforms--transitions--animations"}">Transforms &amp; Transitions &amp; Animations</a></h2>
<div><figure><img src="${"https://i.imgur.com/WYSinJB.png"}"></figure><figure><img src="${"https://i.imgur.com/EQVvK9G.png"}"></figure></div>
<h2 id="${"other-features"}"><a href="${"#other-features"}">Other Features</a></h2>
<p>clip-path
shape-outside</p>
<p>You can stack clip-path/shape-outside to keep curving a shape.</p>
<p>You can also clip-path a URL. </p>
<p>How to add a placeholder cursor in an input</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css">  <span class="token selector">li</span> <span class="token punctuation">&#123;</span><span class="token property">line-height</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span> <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span><span class="token punctuation">&#125;</span>
  <span class="token selector">label</span> <span class="token punctuation">&#123;</span><span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span><span class="token punctuation">&#125;</span>
  <span class="token selector">.shell span</span> <span class="token punctuation">&#123;</span><span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span><span class="token punctuation">&#125;</span>
  <span class="token selector">li</span> <span class="token punctuation">&#123;</span><span class="token property">font-family</span><span class="token punctuation">:</span> helvetica<span class="token punctuation">;</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 0.93rem<span class="token punctuation">;</span><span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/ZYoJMKY.png"}"></figure>`;
    }
  })}`;
});
export { Week_eight_css_in_depth_svelte as default, metadata };
