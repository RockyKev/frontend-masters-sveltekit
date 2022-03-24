import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-b8ce1441.js";
export { l as load } from "../../../chunks/_layout-b8ce1441.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-c29f9c7c.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Three - Intro to Dev Tools",
  "created": "2021-11-06T00:00:00.000Z",
  "summary": "Introduction to Dev Tools, v3",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_three_intro_dev_tools_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p><a href="${"https://github.com/jkup/mastering-chrome-devtools"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/jkup/mastering-chrome-devtools</a></p>
<h2 id="${"elements-tab"}"><a href="${"#elements-tab"}">Elements tab</a></h2>
<figure><img src="${"https://i.imgur.com/lck2C4c.png"}"></figure>
<figure><img src="${"https://i.imgur.com/HmYRXjP.png"}"></figure>
<p><strong>Event listener</strong>
Select element and you can see event listeners</p>
<p><strong>shift click on color</strong>
color: #00000; // shift click will switch it to another type like hgb or whatever</p>
<h2 id="${"memory-tab"}"><a href="${"#memory-tab"}">Memory Tab</a></h2>
<p>You can dump JS memory sessions in there.</p>
<h2 id="${"performance-tab"}"><a href="${"#performance-tab"}">Performance Tab</a></h2>
<p>If there\u2019s a red line, it means it\u2019s dropped a frame.</p>
<h2 id="${"network-tab"}"><a href="${"#network-tab"}">Network Tab</a></h2>
<p><strong>6 resources gathered rule</strong>
Six simutanous requests
As of right now, we can get 6 resources at a time.
If you have 20 images, it\u2019ll get the first 6, then move down.</p>
<p>Of course things are picked up by priority.</p>
<p><strong>priority column</strong>
You can sort it by what is coming up.
HTML CSS are vital things. Then after page load is JS.</p>
<p>Override it by moving things to the head.
Preload/defer images.</p>
<h2 id="${"sources-tab"}"><a href="${"#sources-tab"}">Sources tab</a></h2>
<p>Creates a workspace so you can \u2018save\u2019 the browser state. </p>
<p>Doesnt work well with JS frontends.</p>
<p><strong>Debugging</strong>
You can set it to break only on specific URLs when you\u2019re fetching data.</p>
<figure><img src="${"https://i.imgur.com/cmREdC1.png"}"></figure>
<figure><img src="${"https://i.imgur.com/sRAj1H2.png"}"></figure>
<figure><img src="${"https://i.imgur.com/2EOa6YZ.png"}"></figure>
<p><strong>Testing your Android directly with Chrome</strong></p>
<h2 id="${"network-tab-1"}"><a href="${"#network-tab-1"}">Network Tab</a></h2>
<h2 id="${"random-things-to-read"}"><a href="${"#random-things-to-read"}">Random things to read:</a></h2>
<figure><img src="${"https://miro.medium.com/max/2000/1*GuWInZljjvtDpdeT6O0emA.png"}"></figure>
<p><strong>Testing the speed of a node application</strong></p>
<figure><img src="${"https://i.imgur.com/CuEB6qx.png"}"></figure>
<p><strong>Speed testing performance</strong>
To test how fast something is in different parts of the world</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">performance<span class="token punctuation">.</span><span class="token function">mark</span><span class="token punctuation">(</span><span class="token string">"Start"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100000000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// do nothing</span>
<span class="token punctuation">&#125;</span>

performance<span class="token punctuation">.</span><span class="token function">mark</span><span class="token punctuation">(</span><span class="token string">"End"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

performance<span class="token punctuation">.</span><span class="token function">measure</span><span class="token punctuation">(</span><span class="token string">"Frontend Masters Chrome Devtools"</span><span class="token punctuation">,</span> <span class="token string">"Start"</span><span class="token punctuation">,</span> <span class="token string">"End"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

performance<span class="token punctuation">.</span><span class="token function">getEntriesByType</span><span class="token punctuation">(</span><span class="token string">"measure"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> resources <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">getEntriesByType</span><span class="token punctuation">(</span><span class="token string">"resource"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> paints <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">getEntriesByType</span><span class="token punctuation">(</span><span class="token string">"paint"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> navigations <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">getEntriesByType</span><span class="token punctuation">(</span><span class="token string">"navigation"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Then go to the performance Tab and you can actually see the performance numbers.</p>
<p>The performance api is what devtools is using. </p>
<p><strong>Rail Philosophy</strong></p>
<p>Response
Animation
Idle
Load</p>
<p><strong>What can slow down a website</strong></p>
<p>Backend: </p>
<ul class="${"list"}"><li>Database</li>
<li>Server itself</li>
<li>Network</li>
<li>Compression (gzip and brotli)</li></ul>
<p>Front End:</p>
<ul class="${"list"}"><li>Large bundle</li>
<li>Too many files</li>
<li>Images or JS not async</li>
<li>big images</li>
<li>Unused JS/CSS</li>
<li>CSS in Document Body</li>
<li>Not using browser caching</li></ul>
<p><strong>Optimizing JS</strong>
Chrome always tells you that there\u2019s JS that\u2019s being unused. But you never know if it\u2019s something else will trigger it.
It\u2019s better to use bundlers.</p>
<figure><img src="${"https://i.imgur.com/T20vn0m.png"}"></figure>`;
    }
  })}`;
});
export { Week_three_intro_dev_tools_svelte as default, metadata };
