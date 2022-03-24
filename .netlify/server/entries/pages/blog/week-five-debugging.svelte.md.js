import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-b8ce1441.js";
export { l as load } from "../../../chunks/_layout-b8ce1441.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-c29f9c7c.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Five - Debugging",
  "created": "2021-12-04T00:00:00.000Z",
  "summary": "Javascript Debugging and Fixing Common JavaScript Errors",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_five_debugging_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2 id="${"debugging-javascript"}"><a href="${"#debugging-javascript"}">Debugging Javascript</a></h2>
<p>Github: <a href="${"https://github.com/toddhgardner/getRANTR"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/toddhgardner/getRANTR</a></p>
<p>Random trivia:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token string">'\u{1F4A9}'</span><span class="token punctuation">.</span>length <span class="token comment">// 2 because it's unicode counting</span>

<span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span> <span class="token comment">// JS floating point operations have issues with overflow rounding percision</span>

<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2016</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2016 July 1 -- this is saying June 31st, which doesn't exist... which overflows to July 1.</span>

<span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [0, 1, [undefined, undefined]]</span>

<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 10, 5] because it treats it as strings</span></code>`}<!-- HTML_TAG_END --></pre>
<p>part 2</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// -Infinity</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 2 -- it actually calls Function.prototype.length which returns the num of arguments.</span>

<span class="token operator">+</span><span class="token string">"42"</span><span class="token punctuation">;</span> <span class="token comment">// 42 -- because the + is not preceded by a string, it stays a string. </span>

<span class="token string">'\u{1F4A9}'</span> <span class="token operator">-</span> <span class="token string">'\u{1F4A9}'</span> <span class="token comment">// NaN - '\u{1F4A9}' does not have a corresponding number</span>

<span class="token operator">!</span><span class="token operator">!</span><span class="token string">""</span> <span class="token comment">// false</span>

<span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span> <span class="token comment">// Infinity</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>Very few things in JS throw through a <code>&lt;Error&gt;</code></p>
<p>Something to be aware:</p>
<p>This is applicable to completely vanilla JS or jQuery.
There\u2019s a bit of different debugging done with frameworks. </p>
<h2 id="${"how-to-fix-bugs"}"><a href="${"#how-to-fix-bugs"}">How to fix Bugs</a></h2>
<p>A generic tool:
Identify, Isolate, Resolve, Prevent.</p>
<p><strong>Identity:</strong></p>
<p><strong>Isolate:</strong></p>
<p><strong>Resolve:</strong></p>
<p><strong>Prevent:</strong>
Regression Tests</p>
<h3 id="${"cant-delete-a-tweet"}"><a href="${"#cant-delete-a-tweet"}">Can\u2019t delete a tweet</a></h3>
<p>GOAL: The issue is that when the user clicks the delete button, it doesn\u2019t actually fire the JS code correctly.</p>
<p><strong>Issue 1: There\u2019s no console.log error.</strong></p>
<p>He notices that the button redirects. </p>
<p>console.log -&gt; press gear -&gt; Preserve log </p>
<p>He now notices that there\u2019s a uncaught error, and it automatically redirects. </p>
<p>Because it\u2019s <code>&lt;button&gt;</code> in a form, which automatically submits a get/post request. </p>
<p><strong>Issue 2: How to stop the redirect</strong></p>
<p>He found the element\u2019s event handler, then opened up where it was located in JS.</p>
<p>He added this in the file.</p>
<p><code>evt.preventDefault()</code></p>
<p><strong>Issue 3: It\u2019s still not fixed</strong></p>
<p>He was losing the context of <code>this</code>.
His initial fix was a old fashion ES5 method.</p>
<p><code>this.model.destroy()</code></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token function-variable function">onDelete</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">.</span>bind<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"text-stays-in-the-text-field"}"><a href="${"#text-stays-in-the-text-field"}">Text stays in the text field</a></h3>
<ol class="${"list"}"><li>He finds the onChange event. </li></ol>
<p>He discovers that the data is saved on localStorage.</p>
<ol start="${"2"}" class="${"list"}"><li>In the code, he says that there\u2019s a conditional that adds that localStorage.</li></ol>
<figure><img src="${"https://i.imgur.com/HBNwLeD.png"}"></figure>
<p>The solution is to instead just check if that variable type is a string.
<code>if (typeof text === &#39;string&#39;)</code></p>
<h3 id="${"server-giving-a-400-bad-request"}"><a href="${"#server-giving-a-400-bad-request"}">Server giving a 400 bad request</a></h3>
<p>The error he discovered was that the message being submitted must have a length greater than 0. </p>
<h3 id="${"a-single-user-has-2124-errors"}"><a href="${"#a-single-user-has-2124-errors"}">A single User has 2124 errors</a></h3>
<p>His solution: return the error back to the user.</p>
<h2 id="${"more-advanced-bug-tracking"}"><a href="${"#more-advanced-bug-tracking"}">More Advanced Bug Tracking</a></h2>
<h3 id="${"unexpected-high-memory-usage"}"><a href="${"#unexpected-high-memory-usage"}">Unexpected High Memory Usage</a></h3>
<p>SKIP: Fifth Bug</p>
<p>Yikes, I think this is really outdated.</p>
<p>Note: his screenshot is using a old version of Chrome Profiles.</p>
<h3 id="${"networkproxy-bug"}"><a href="${"#networkproxy-bug"}">Network/Proxy Bug</a></h3>
<p>The issue:
It\u2019s making a call to another JS file that the user blocked with adblocker.</p>
<p>We shouldn\u2019t stop the user just because it.</p>
<p>This is fixed by wrapping the call to check if it exists, THEN fire it.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>analytics<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  analytics<span class="token punctuation">.</span><span class="token function">trackUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>But what about say Javascript?</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>$<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'jQuery failed to load'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"&lt;h1>Well that didn't work are you in a elevator?&lt;/h1>&lt;p>Reach out to help@site.com&lt;/p>"</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"design-for-debuggability"}"><a href="${"#design-for-debuggability"}">Design for Debuggability</a></h2>
<figure><img src="${"https://i.imgur.com/ash4oJX.png"}"></figure>
<p>jQuery builds a lot of abstraction to make it easier for the end user.
But it makes it complicated.</p>
<p>There\u2019s a lot of complication under the hood. </p>
<p>It\u2019s a see-saw.</p>
<h3 id="${"rule-of-3"}"><a href="${"#rule-of-3"}">Rule of 3</a></h3>
<p>Refactoring: Improving the Design for</p>
<p>The first time you run into a problem, solve it.
The second time, just copy it.
The third time, then you make that consideration.</p>
<h3 id="${"adding-a-secret-debug-mode"}"><a href="${"#adding-a-secret-debug-mode"}">Adding a secret debug mode</a></h3>
<p><code>site.com?debug</code></p>`;
    }
  })}`;
});
export { Week_five_debugging_svelte as default, metadata };
