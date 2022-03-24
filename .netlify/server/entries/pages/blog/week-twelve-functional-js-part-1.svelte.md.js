import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-b8ce1441.js";
export { l as load } from "../../../chunks/_layout-b8ce1441.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-c29f9c7c.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Twelve - Functional JS Part 1",
  "created": "2022-01-31T00:00:00.000Z",
  "summary": "Functional JavaScript First Steps (Part 1)",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_twelve_functional_js_part_1_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Anjana Vakil </p>
<p><a href="${"https://observablehq.com/collection/@anjana/functional-javascript-first-steps"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://observablehq.com/collection/@anjana/functional-javascript-first-steps</a></p>
<p><a href="${"https://frontendmasters.com/courses/functional-first-steps/introduction/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://frontendmasters.com/courses/functional-first-steps/introduction/</a></p>
<h2 id="${"what-is-functional-programming"}"><a href="${"#what-is-functional-programming"}">What is functional programming</a></h2>
<figure><img src="${"https://i.imgur.com/V17RpWd.png"}"></figure>
<blockquote><p>[00:01:30]
So you might have heard about some functional languages like Haskell or Clojure. Maybe some other ones, like for the front-end, there\u2019s Elm. There\u2019s some languages that support multiple types of programming including functional, and let\u2019s say object oriented like F Sharp or Scala. And then there is JavaScript, which probably does not usually get described as a functional language, but is actually really wonderful for learning the basics of functional programming in my opinion.</p></blockquote>
<p>It\u2019s not a coding style. It\u2019s a paradigm. A way of thinking.</p>
<p>Other Paradigms: </p>
<p>Imperative</p>
<ul class="${"list"}"><li>follow my command</li>
<li>do this then that</li></ul>
<p>Declarative</p>
<ul class="${"list"}"><li>this is what I want.</li>
<li>Do whatever your want</li></ul>
<p>Object oriented </p>
<ul class="${"list"}"><li>Keep state to yourself</li>
<li>send/recieve messages</li></ul>
<blockquote><p>[00:04:01]
But in object-oriented programming, we use concepts like encapsulation, where we have objects that keep internal values to themselves, and they can change those values. Which when we have values changing over time, we have something called state which we\u2019re gonna talk about several times today. And then those objects since they\u2019re encapsulated, they keep that to themselves, but they can talk to each other through messages that they pass by, for example, calling methods on other objects in the program.</p></blockquote>
<blockquote><p>[00:04:31]
So you have a kind of this message passing lifestyle where the world of the program is made up of these little kind of cellular objects that are little encapsulated units, and they behave by interacting with each other through messages. If you\u2019re curious about how that all works, I have a talk you can find on YouTube.</p></blockquote>
<p>It\u2019s one TYPE of Declarative programming. </p>
<p>It boils down to one thing.
PURE FUNCTIONS.
Input in.
Output out. </p>
<p>TODO: READ THIS:
<a href="${"https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming</a></p>
<p>And check out
<a href="${"https://www.recurse.com/about"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.recurse.com/about</a></p>
<p>TO WATCH:
<a href="${"https://www.youtube.com/watch?v=TbP2B1ijWr8"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.youtube.com/watch?v=TbP2B1ijWr8</a></p>
<h3 id="${"impure-vs-pure"}"><a href="${"#impure-vs-pure"}">Impure vs Pure</a></h3>
<figure><img src="${"https://i.imgur.com/A1mUBIb.png"}"></figure>
<p>Issues with the impure: </p>
<ol class="${"list"}"><li><code>name</code> is declared outside</li>
<li>there\u2019s no return value. </li>
<li>It\u2019s using <code>console.log</code>, which is updating the OUTSIDE world. </li></ol>
<p>The big asterisk with functional programming!
How do you do anything? You can\u2019t update your profile, you can\u2019t change your password. </p>
<p>The pure function DOESN\u2019T DO anything!</p>
<p>When we\u2019re doing functional programming, it\u2019s about the computational programming. </p>
<p>It\u2019s about pushing the data OUTSIDE. The inside is totally pure. </p>
<h3 id="${"why"}"><a href="${"#why"}">Why?</a></h3>
<p><strong>Why Functional Programming</strong>
You create code that\u2019s much more predictable.
Safer. Dependable.
Easier to test/debug. </p>
<p>You don\u2019t have to run the entire program to load, scaffold, just to test. </p>
<p>For writing data transformations in a high-stakes environment, functional programming is great for that.</p>
<p><strong>Why Functional Javascript</strong></p>
<ul class="${"list"}"><li><p>Because object-oriented JS is tricky
Prototypes &amp; inheritance is a wild world. </p></li>
<li><p>It\u2019s an established community </p></li></ul>
<p>QUESTION: Lines of code for a function?
The tendency in functional programming is that programs tend to be smaller. But it\u2019s more about focusing on having pure functions and no side effects. </p>
<h3 id="${"side-effects"}"><a href="${"#side-effects"}">Side Effects</a></h3>
<p>Do EVERYTHING with functions.
What is my input?
What is my output? </p>
<p>That\u2019s it.
The output should be deterministic.
It means input &amp; output will always be exactly the same every time it runs. Deterministic. </p>
<p>\u201CWhat should my program run? <code>--&gt;</code> That\u2019s imperative. </p>
<figure><img src="${"https://i.imgur.com/qB0UkcU.png"}"></figure>
<figure><img src="${"https://i.imgur.com/7Q6cEMW.png"}"></figure>
<figure><img src="${"https://i.imgur.com/RFZcucy.png"}"></figure>
<p>In FP, it\u2019s about creating a NEW thing.
It\u2019s a common strategy. The old one is still the same. </p>
<p>In Functional Programming, we call them <code>ary</code>: </p>
<p>unary - takes one param
binary - Two argument function</p>
<h3 id="${"exercise"}"><a href="${"#exercise"}">Exercise:</a></h3>
<p><a href="${"https://observablehq.com/@anjana/exercise-pure-functions?collection=@anjana/functional-javascript-first-steps"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://observablehq.com/@anjana/exercise-pure-functions?collection=@anjana/functional-javascript-first-steps</a></p>
<p>QUESTION: </p>
<blockquote><p>\u201CAre all asynchronous functions impure by definition because you\u2019re returning a promise that later needs to be resolved.\u201D</p></blockquote>
<blockquote><p>[00:12:31]
I think anything you\u2019re doing asynchronously is non deterministic because if it was deterministic, then you wouldn\u2019t need to return a promise in the first place. Is that correct or am I.</p>
<blockquote><p>Interesting question are all asynchronous operations in JavaScript impure. Because we need to wait for those promises to resolve.</p></blockquote></blockquote>
<blockquote><p>[00:12:51]
What about a case of a really long running calculation that perhaps if I have some kind of like distributed system and part of one of my processors is doing a long calculation and I\u2019m waiting for that to come back. Well, it depends again on like that calculation and what it\u2019s doing.</p></blockquote>
<blockquote><p>[00:13:12]
So I, this is an interesting one and asynchronicity in JavaScript always opens up cans of worms. And again, JavaScript itself is not necessarily the way JavaScript runs is not necessarily like the most pure functional environment. However the operation that we\u2019re doing asynchronously, it might not be an impure operation.</p></blockquote>
<h2 id="${"staying-out-of-the-loop-with-recursion"}"><a href="${"#staying-out-of-the-loop-with-recursion"}">Staying out of the loop with Recursion</a></h2>
<figure><img src="${"https://i.imgur.com/FFZ2poX.png"}"></figure>
<p>And how it helps us avoid a more imperative style of looping through iteration.</p>
<p><code>looping</code> is stateful. It\u2019s imperative. </p>
<p><code>self-referential</code> loops is stateless, and functional. </p>
<p>Base case: It\u2019s the thing to help you exit the loop. </p>
<p>recursive case: this brings you back into the loop. </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// Iteration:</span>
<span class="token keyword">function</span> <span class="token function">sum</span> <span class="token punctuation">(</span><span class="token parameter">numbers</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numbers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    total <span class="token operator">+=</span> numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">return</span> total<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span></code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// Recursion:</span>
<span class="token keyword">function</span> <span class="token function">sum</span> <span class="token punctuation">(</span><span class="token parameter">numbers</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// base case</span>
	<span class="token comment">// this is to avoid the infinite loop </span>
    <span class="token keyword">return</span> numbers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// recursive case</span>
	<span class="token comment">// this deletes the last number</span>
    <span class="token keyword">return</span> numbers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token function">sum</span><span class="token punctuation">(</span>numbers<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Keep this in mind:</p>
<ul class="${"list"}"><li>It\u2019s a style. You can choose between the iterative version vs the recursion version depending on your team/experience.</li>
<li>There is no right or wrong. </li></ul>
<p>Exercise: <a href="${"https://observablehq.com/@anjana/staying-out-of-the-loop-with-recursion?collection=@anjana/functional-javascript-first-steps"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://observablehq.com/@anjana/staying-out-of-the-loop-with-recursion?collection=@anjana/functional-javascript-first-steps</a></p>
<p>Factorial and fibonacci\u2019s solution is similar to the MATH method of doing it! The wikipedia math is the solution!</p>
<p>In Functional programming:
It\u2019s strongly typed! It\u2019s really restrictive, like only positive numbers. Or a very specific object shape. You\u2019ll see a types - typescript, to have a guarantee of that object. </p>
<figure><img src="${"https://i.imgur.com/ciA52l0.png"}"></figure>
<p><code>iterativeFibbonacci()</code></p>
<p><code>recusiveFibbonacci()</code>
Recursion is much slower.
It\u2019s calling multiple times to each other. The callstack is overflowed. </p>
<p>One solution to get into is memoization. Hashing the results of fibonacci. </p>
<p>Too much recursion error:
The local host has a finite resources. You keep adding frames to the stack. you can switch to a tailcall optimization.  </p>
<p>TO WATCH: Tail call Optimization
<a href="${"https://www.youtube.com/watch?v=-PX0BV9hGZY"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.youtube.com/watch?v=-PX0BV9hGZY</a></p>
<p>Firefox doesn\u2019t have tail call optimization.
Safari DOES take it.
Node &amp; V8 did implement it.
When you do tail call optimization, it messes with the call stack. V8 never implemented fully. </p>`;
    }
  })}`;
});
export { Week_twelve_functional_js_part_1_svelte as default, metadata };
