import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-ab845620.js";
export { l as load } from "../../../chunks/_layout-ab845620.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-3d93c575.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Five - JS Testing",
  "created": "2021-12-03T00:00:00.000Z",
  "summary": "JavaScript Testing Practices and Principles",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_five_js_testing_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2 id="${"intro-to-testing"}"><a href="${"#intro-to-testing"}">Intro to Testing</a></h2>
<p>SLIDES: <a href="${"https://slides.com/kentcdodds/testing-principles#/1"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://slides.com/kentcdodds/testing-principles#/1</a></p>
<p>Goals:</p>
<ol class="${"list"}"><li>Explain the fundamentals</li>
<li>Writing tests</li>
<li>Test</li></ol>
<p>Will avoid the tech-specific stuff</p>
<p>Repo:
git clone <a href="${"https://github.com/kentcdodds/testing-workshop.git"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/kentcdodds/testing-workshop.git</a>
cd testing-workshop
npm run setup \u2014silent</p>
<h3 id="${"typechecking"}"><a href="${"#typechecking"}">Typechecking</a></h3>
<p>(TypeScript) - You can remove a whole set of bug categories with static typing.
ESLint is supposed to catch bugs.
Prettier is supposed to clean up things. </p>
<figure><img src="${"https://i.imgur.com/Mgy8xh8.png"}"></figure>
<h3 id="${"unit-tests"}"><a href="${"#unit-tests"}">Unit tests</a></h3>
<figure><img src="${"https://i.imgur.com/yzO0Vmi.png"}"></figure>
<h3 id="${"integration-testing"}"><a href="${"#integration-testing"}">Integration Testing</a></h3>
<figure><img src="${"https://i.imgur.com/8wIwNAc.png"}"></figure>
<h3 id="${"end-to-end-testing"}"><a href="${"#end-to-end-testing"}">End to end testing</a></h3>
<p>Pull it up and make it as close to you as possible</p>
<h3 id="${"quick-example-of-a-test"}"><a href="${"#quick-example-of-a-test"}">Quick example of a test</a></h3>
<p>This is the most fundamental example of a test!</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// this is purposely written wrong.</span>
<span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> expected <span class="token operator">=</span> <span class="token number">10</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">!==</span> expected<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">the result of </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>result<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is not equal to the expected of </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>expected<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>When you see testing libraries do this:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'subtract subtracts numbers'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> expected <span class="token operator">=</span> <span class="token number">4</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>expected<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>It really looks like this:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">title<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">\u2713 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>title<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">x </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>title<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"creating-a-test-factory"}"><a href="${"#creating-a-test-factory"}">Creating a test factory</a></h3>
<figure><img src="${"https://i.imgur.com/I4fQZxf.png"}"></figure>
<p>PRO:
Easier to add to the test.</p>
<p>CON:
You have the title contain the specific data.</p>
<p>How Jest finds test files:
a folder name <code>__tests__</code></p>
<figure><img src="${"https://i.imgur.com/BS6heu4.png"}"></figure>
<p>Method 1: separate the <code>test</code> folder and the <code>src</code> folder
Method 2: Inside the <code>src</code> folder, are your tests.</p>
<h3 id="${"where-to-put-tests"}"><a href="${"#where-to-put-tests"}">Where to put tests?</a></h3>
<p>\u201CPlace files as close to where they\u2019re relevant as possible.\u201D</p>
<h3 id="${"code-coverage"}"><a href="${"#code-coverage"}">Code Coverage?</a></h3>
<p>IT creates a coverage directory (called Istabul)</p>
<p>It\u2019s often a management mandate to create a 100% code coverage.
Which is a HUGE diminish returns.
That last 10% is always hard to maintain and not worth it.</p>
<figure><img src="${"https://i.imgur.com/d52r2Ro.png"}"></figure>
<p>The code coverage doesn\u2019t also give us confidence.
It\u2019s more of a indicator of \u201CWhat code has coverage\u201D.</p>
<p>It\u2019s not telling you what you need to do, what\u2019s important. It\u2019s just covering surface level.
<a href="${"https://docs.cypress.io/guides/tooling/code-coverage#Full-stack-code-coverage"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://docs.cypress.io/guides/tooling/code-coverage#Full-stack-code-coverage</a></p>
<p>You\u2019re better off to:
\u201CTest software the way your user uses your software\u201D</p>
<h2 id="${"unit-testing"}"><a href="${"#unit-testing"}">Unit testing</a></h2>
<p>A long time ago, it used to be \u2018one assertion per test\u2019.
A testing framework allows you to add a bunch of assertions and group them together, because it\u2019ll show you which one failed.</p>
<figure><img src="${"https://i.imgur.com/8OHVJZ6.png"}"></figure>
<p>So an example of testing login:</p>
<p>Your tests should resemble how the user uses it.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// from a separate file</span>
<span class="token keyword">function</span> <span class="token function">isPasswordAllowed</span><span class="token punctuation">(</span><span class="token parameter">password</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> password<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">6</span> <span class="token operator">&amp;&amp;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">d</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">D</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>


<span class="token comment">// main test file</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>isPasswordAllowed<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'file'</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'isPasswordAllowed only allows some passwords'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">isPasswordAllowed</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">isPasswordAllowed</span><span class="token punctuation">(</span><span class="token string">'fffffffffff'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">isPasswordAllowed</span><span class="token punctuation">(</span><span class="token string">'999999999'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">isPasswordAllowed</span><span class="token punctuation">(</span><span class="token string">'asdfj.@sdfkj'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>

<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"mocks"}"><a href="${"#mocks"}">Mocks</a></h2>
<p>It means \u201Cto fake something\u201D.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> winner <span class="token operator">=</span> <span class="token function">thumbWar</span><span class="token punctuation">(</span><span class="token string">'Ken Wheeler'</span><span class="token punctuation">,</span> <span class="token string">'Kent C. Dodds'</span><span class="token punctuation">)</span>

<span class="token function">expect</span><span class="token punctuation">(</span>winner<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">'Kent C Dodds'</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>He had to hack the <code>thumbwar</code> function a bit to make it work.</p>
<blockquote><p>What is mock testing?
Mocking means creating a fake version of an external or internal service that can stand in for the real one, helping your tests run more quickly and more reliably. When your implementation interacts with an object\u2019s properties, rather than its function or behavior, a mock can be used.
<a href="${"https://circleci.com/blog/how-to-test-software-part-i-mocking-stubbing-and-contract-testing/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://circleci.com/blog/how-to-test-software-part-i-mocking-stubbing-and-contract-testing/</a></p></blockquote>
<p>ROCKY NOTES: This isn\u2019t very good at all.
Not the chapter, but this method of testing and using Jest.</p>
<p>For example - each test is mutating things and leaving side effects that can affect other tests.
So he\u2019s having to write \u2018functions\u2019 to clean up a test after it\u2019s finished, which is\u2026 a problem with the testing software, not the code.
Cypress isolates each test without having to clean it up.</p>
<p>Another key note:
Kent even literally says he avoids this style of testing (mock testing) because it\u2019s not similar to what the end user is doing.</p>
<h2 id="${"testing-practices"}"><a href="${"#testing-practices"}">Testing Practices</a></h2>
<p>Reminder on promises:
await/async</p>
<p>Functions that need to wait for a response:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">theFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token operator">...</span> <span class="token punctuation">&#125;</span>

<span class="token comment">//then to call the function</span>
<span class="token keyword">await</span> <span class="token function">theFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Something I like that\u2019s he\u2019s doing is creating a placeholder request/response and shapes it.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token literal-property property">req</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>

  <span class="token comment">// a bunch of object assign stuff</span>

<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>\u201CI like testing where i can slice the unit as much of the dependencies as I can to make as pure as possible so I have a lot of confidence when I test.\u201D</p>
<h3 id="${"test-driven-development"}"><a href="${"#test-driven-development"}">Test Driven Development</a></h3>
<figure><img src="${"https://i.imgur.com/u72cndq.png"}"></figure>
<p>Red -&gt; Green -&gt; Refactor.</p>
<ol class="${"list"}"><li>You write some code in your code to fail.</li>
<li>Then fix your source code to pass. </li>
<li>Then update either your src/test.</li></ol>
<p>TDD has a great place with pure functions.
You can create a list of this is allowed, this is allowed\u2026 and just keep growing your list.
If I was writing a utility library, then TDD is great.</p>
<p>Where it doesn\u2019t work very well, it\u2019s trickier\u2026 is UI.
If you\u2019re not certain what things look like\u2026 you can\u2019t write test code to make it look like that.</p>
<h3 id="${"readme-driven-development"}"><a href="${"#readme-driven-development"}">Readme Driven Development</a></h3>
<p>I (Kent) use RDD \u2014
Readme Driven Development. Where I write the documentation of how I expect to work, then match it with the code.</p>
<h2 id="${"integration-testing-1"}"><a href="${"#integration-testing-1"}">Integration Testing</a></h2>
<p>The difference between in Integration and unit testing is limited:
Integration doesn\u2019t use mocking.
It starts up a server, and hits the server itself.</p>`;
    }
  })}`;
});
export { Week_five_js_testing_svelte as default, metadata };
