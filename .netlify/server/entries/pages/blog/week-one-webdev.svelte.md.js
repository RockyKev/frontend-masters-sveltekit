import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-ab845620.js";
export { l as load } from "../../../chunks/_layout-ab845620.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-3d93c575.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week One - Web Dev V2",
  "created": "2021-10-25T00:00:00.000Z",
  "summary": "All the notes about Web Dev V2",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_one_webdev_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Course: <a href="${"https://frontendmasters.com/courses/web-development-v2/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://frontendmasters.com/courses/web-development-v2/</a>
Instructor: Brian Holt</p>
<h2 id="${"using-ajax-and-nodejs"}"><a href="${"#using-ajax-and-nodejs"}">Using Ajax and Node.js</a></h2>
<p>Brian Holt\u2019s method of using a Javascript Library:</p>
<ol class="${"list"}"><li>Grab library via CDN</li>
<li>steal code, </li>
<li>bastardize it.</li></ol>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">const</span> popmotion <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'popmotion'</span><span class="token punctuation">)</span> <span class="token comment">// CommonJS - the old way</span>
<span class="token comment">//  require("./useless") &lt;-- commonjs</span>

use <span class="token keyword">import</span> x from y <span class="token comment">// ES modules - more improved way</span></code>`}<!-- HTML_TAG_END --></pre>
<p>HOT TIP: In VSCode, hover over the required(), and click on the lightbulb will \u201Cfix\u201D everything for you, using import.</p>
<p>You can use <code>-y</code> to say yes to all. </p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">npm</span> init -y <span class="token punctuation">(</span>yes to all<span class="token punctuation">)</span>
$ <span class="token function">npm</span> info <span class="token punctuation">[</span>package<span class="token punctuation">]</span> // gives you info on what it is <span class="token keyword">in</span> the terminal</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"learning-git"}"><a href="${"#learning-git"}">Learning Git</a></h2>
<p><strong>Links</strong></p>
<p><a href="${"https://www.sourcetreeapp.com/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">SourceTree</a>
Git GUI.</p>
<p><a href="${"https://explainshell.com/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">explainshell.com</a>
It\u2019s like a documentation for bash shell commands </p>
<p>You can also do this: <code>$ man ls - for manual of ls</code></p>
<p><a href="${"https://ohshitgit.com/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">ohshitgit</a>
If you f\u2019 up, here\u2019s some recipes.
Personally, I feel like it\u2019s better to stick with a GUI.</p>
<p><a href="${"https://choosealicense.com/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">For your repo</a>
Let\u2019s you choose what type of license. Work with a community, make it simple, share about improvements, MUST be open source, etc.</p>
<p>First, attach a LICENSE file in your repo.
Then, pick a license that aligns with you.</p>
<p>You have legal support to do things.
NONCOMMERCIAL - if you steal it, i can bring legal.
Very few use GNU (copyleft).</p>
<p><strong>How to make a file:</strong></p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">echo &quot;&lt;h1&gt;title&lt;/h1&gt;&quot; &gt; index.html &lt;--- means to make a file</code>`}<!-- HTML_TAG_END --></pre>
<p><strong>How to exit vim</strong></p>
<p>1) vi html</p>
<p>2) i insert mode</p>
<p>3) esc --- goes to command mode</p>
<p>4) colon q --- not so fast</p>
<p>5) colon w --- save</p>
<p>6) colon wq --- fast and save</p>
<h2 id="${"using-nodejs"}"><a href="${"#using-nodejs"}">Using Node.js</a></h2>
<p>Using Express: <a href="${"https://btholt.github.io/intro-to-web-dev-v2/node"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://btholt.github.io/intro-to-web-dev-v2/node</a></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> complements <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">"You like nice today"</span><span class="token punctuation">,</span>
  <span class="token string">"That dress looks nice on you"</span><span class="token punctuation">,</span>
  <span class="token string">"Have you been working out?"</span><span class="token punctuation">,</span>
  <span class="token string">"You can do hard things"</span><span class="token punctuation">,</span>
  <span class="token string">"You've gotten far in this course. You're really smart"</span><span class="token punctuation">,</span>
  <span class="token string">"You're programming! How cool is that?"</span><span class="token punctuation">,</span>
  <span class="token string">"I'm really proud of you"</span><span class="token punctuation">,</span>
  <span class="token string">"You made this"</span><span class="token punctuation">,</span>
  <span class="token string">"You've learned a lot of things, and that's pretty hard to do"</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getRandomComplement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> randomIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> complements<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> complements<span class="token punctuation">[</span>randomIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"index.html"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/complement"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  res
    <span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      <span class="token literal-property property">complement</span><span class="token operator">:</span> <span class="token function">getRandomComplement</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"/public"</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">"./public"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"listening on http://localhost:3000"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>req = request
res = response
you have to res.end to end the server call
express framework to build a quick api
http is a low-level thing.
express wrap it with support stuff</p>`;
    }
  })}`;
});
export { Week_one_webdev_svelte as default, metadata };
