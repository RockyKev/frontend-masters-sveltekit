import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-b8ce1441.js";
export { l as load } from "../../../chunks/_layout-b8ce1441.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-c29f9c7c.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Two - Accessibility",
  "created": "2021-11-06T00:00:00.000Z",
  "summary": "Website Accessibility, v2",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_two_accessibility_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2 id="${"what-is-it"}"><a href="${"#what-is-it"}">What is it</a></h2>
<p>The curb cut effect.</p>
<p>The Curb-Cut Effect, in its essence, asserts that an investment in one group can cascade out and up and be a substantial investment in the broader well-being of a nation \u2014 one whose policies and practices create an equitable economy, a healthy community of opportunity, and just society.</p>
<h2 id="${"screen-readers"}"><a href="${"#screen-readers"}">screen readers</a></h2>
<p><strong>Web Content Accessibility Guidelines (WCAG)</strong>
This is what companies have to meet. </p>
<p>WCAG specifies three different conformance levels they are:</p>
<ul class="${"list"}"><li>A (lowest)</li>
<li>AA (mid range)</li>
<li>and AAA (highest)</li></ul>
<p>WebAIM is trying to distill it in human ways. </p>
<h2 id="${"accessible-html"}"><a href="${"#accessible-html"}">accessible html</a></h2>
<p><strong>Pictures</strong>
You don\u2019t need \u201Cpicture of\u201D or \u201Cimage of\u201D. Rule of thumb is explain the image to a blind person if they were in the room.</p>
<p>You can also put a empty alt text so your image skips over. It\u2019s decorative.</p>
<p><strong>Turn on screen reader</strong>
Option ctrl U // Voice over
links/headings/</p>
<p>Labels do everything you can do.
Aria-label is for everything else.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">The label tag can only works with &quot;labelable&quot; elements. Those include:

&lt;button&gt;
&lt;input&gt;
&lt;keygen&gt;
&lt;meter&gt;
&lt;output&gt;
&lt;progress&gt;
&lt;select&gt;
&lt;textarea&gt;
If you ever need to label an element not on that list, use aria-label instead.</code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Make direct screen reader only statements.</strong></p>
<p>Sometimes you\u2019ll want to communicate with a screen reader directly! One cool example is announcing to screen reader users that you offer accessibility features! In that case you can make some HTML and wrap it in a visually hidden class.</p>
<p>For example on twitter: (all made up)</p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html">
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visuallyhidden<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Hi we have a set of custom hotkeys for visual-impared people.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.visuallyhidden</span> <span class="token punctuation">&#123;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -500px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>       </code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Buttons</strong></p>
<p>This is a shitty button by the way.
Don\u2019t make buttons with div.</p>
<ol class="${"list"}"><li>We start with a div</li></ol>
<p><code>&lt;div onclick=&quot;alert(&#39;hello&#39;)&quot;&gt;Click me!&lt;/div&gt;</code></p>
<ol start="${"2"}" class="${"list"}"><li>We could give it an ARIA role - (more on ARIA later)
This will let screen readers know the element can be clicked.</li></ol>
<p><code>&lt;div role=&quot;button&quot; onclick=&quot;alert(&#39;hello&#39;)&quot;&gt;Click me!&lt;/div&gt;</code></p>
<ol start="${"3"}" class="${"list"}"><li>We could give it a tabindex
This will allow keyboard only users to tab to it.</li></ol>
<p><code>&lt;div tabindex=&quot;0&quot; role=&quot;button&quot; onclick=&quot;alert(&#39;hello&#39;)&quot;&gt;Click me!&lt;/div&gt;</code></p>
<ol start="${"4"}" class="${"list"}"><li>Don\u2019t forget about keyboard only users!</li></ol>
<p><code>&lt;div tabindex=&quot;0&quot; role=&quot;button&quot; onclick=&quot;alert(&#39;hello&#39;)&quot; onkeyup=&quot;alert(&#39;hello&#39;)&quot;&gt;Click me!&lt;/div&gt;</code></p>
<ol start="${"5"}" class="${"list"}"><li>Don\u2019t forget about screen reader users either!</li></ol>
<p><code>&lt;div aria-label=&quot;Alert the word hello&quot; tabindex=&quot;0&quot; role=&quot;button&quot; onclick=&quot;alert(&#39;hello&#39;)&quot; onkeyup=&quot;alert(&#39;hello&#39;)&quot;&gt;Click me!&lt;/div&gt;</code></p>
<h2 id="${"aria"}"><a href="${"#aria"}">aria</a></h2>
<p>w3 spec (like javascript) which are accessibility helpers. Add specifically for accessibility. A role attribute.</p>
<p>The ARIA spec provides us with great tools for labelling and describing any element we want. They are:</p>
<p>aria-label
aria-labelledby
aria-describedby</p>
<p><strong>What is the difference between labelledby and describedby?</strong>
A label provides essential information about an object, while a description provides extended information that the user might need.</p>
<p><strong>If you make your own custom checkbox</strong></p>
<p>use the <code>role</code>
<a href="${"https://www.w3.org/TR/html-aria/#aria-table"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.w3.org/TR/html-aria/#aria-table</a></p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>percent-loaded<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>progressbar<span class="token punctuation">"</span></span> <span class="token attr-name">aria-valuenow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>75<span class="token punctuation">"</span></span>
     <span class="token attr-name">aria-valuemin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">aria-valuemax</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>targetting</strong></p>
<p>CSS Selectors</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css">  <span class="token selector">.dropdown[aria-expanded="false"] .icon::after</span> <span class="token punctuation">&#123;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'\u25B6'</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token selector">.dropdown[aria-expanded="true"] .icon::after</span> <span class="token punctuation">&#123;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'\u25BC'</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p><strong>live regions</strong></p>
<p>If you had dynamic content that changes, and you want the screen reader to re-read things if it changes.</p>
<p><code>&lt;div aria-live=&quot;assertive&quot;&gt;Waiting for a ride&lt;/div&gt;</code></p>
<p>One of my favorite APIs, the value that you pass in to aria-live is a politeness setting. You can pass in:</p>
<p>assertive - will interrupt whatever it\u2019s doing to announce.
polite - will announce the live region update when it next idles.
off - will not read the update.</p>
<h2 id="${"focus-management"}"><a href="${"#focus-management"}">focus management</a></h2>
<p>Things you can steal:
<strong>1: Keyboard Shortcuts</strong></p>
<figure><img src="${"https://i.imgur.com/dxx44Zv.png"}"></figure>
<p><strong>2: skip links</strong></p>
<figure><img src="${"https://i.imgur.com/lfVyM4a.png"}"></figure>
<p>Press tab and a special command hits up
Skip links
Skip links help users skip over large headers and navigation and jump right into the \u201Cmain\u201D content of your site. When a user hits tab for the first time, a button will appear and offer users to jump right to the main section.</p>
<p><strong>Shift tabbing</strong>
tab = go forward
shift-tab = go back</p>
<p><strong>Tab index</strong>
You can add the tabindex attribute to any element like this:</p>
<p><code>&lt;div tabindex=&quot;0&quot;&gt;I&#39;m focusable&lt;/div&gt;</code></p>
<p><code>negative</code>: value means that the element should be focusable, but should not be reachable via sequential keyboard navigation;</p>
<p><code>0</code>:  means that the element should be focusable and reachable via sequential keyboard navigation</p>
<p><code>a positive value</code> means should be focusable and reachable via sequential keyboard navigation;
If several elements share the same tabindex, their relative order follows their relative position in the document.</p>
<p><strong>get the active element in JS</strong></p>
<p>Sometimes, especially on single page applications, it\u2019s helpful to store the currently focused element before a page transition so you can return to it later.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">    <span class="token comment">// A modal is about to be opened</span>
          <span class="token comment">// Store the current news item</span>
          <span class="token keyword">const</span> currentItem <span class="token operator">=</span> document<span class="token punctuation">.</span>activeElement<span class="token punctuation">;</span>
          <span class="token comment">// Open the modal</span>
          <span class="token comment">// On modal close, refocus on the news item they had open</span>
          currentItem<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        
      </code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Tab Trapping</strong>
Locks all the accessibility if you\u2019re in a modal. </p>
<p>Grabs first element and last element within the modale.</p>
<p>Then with the key down event in JS, have it switch focus on first or last. </p>
<h2 id="${"visual-considerations"}"><a href="${"#visual-considerations"}">visual considerations</a></h2>
<p>System level APIS
Using the new <code>prefer</code> api</p>
<p>For example: of they can get seizures.</p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html">   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>animation<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>animated box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        
      
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        
<span class="token selector">.animation</span> <span class="token punctuation">&#123;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> pulse 1s linear infinite both<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span>prefers-reduced-motion<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">.animation</span> <span class="token punctuation">&#123;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> dissolve<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Or preer color scheme:</p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        ...
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-scheme</span><span class="token punctuation">:</span> dark<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
    <span class="token selector">.wrapper</span> <span class="token punctuation">&#123;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-scheme</span><span class="token punctuation">:</span> light<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
    <span class="token selector">.wrapper</span> <span class="token punctuation">&#123;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>        </code>`}<!-- HTML_TAG_END --></pre>
<ol class="${"list"}"><li>Check their cache to see if they\u2019re using light or dark already taggled</li>
<li>Check their system </li></ol>
<h2 id="${"tooling"}"><a href="${"#tooling"}">tooling</a></h2>
<p>Use linters
eslint-plugin-vuejs-accessiblility</p>
<p>Use design systems like
Adobe\u2019s react spectrum
google material design</p>
<p>chrome extension</p>
<p>axe dev tools
<a href="${"https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US</a></p>`;
    }
  })}`;
});
export { Week_two_accessibility_svelte as default, metadata };
