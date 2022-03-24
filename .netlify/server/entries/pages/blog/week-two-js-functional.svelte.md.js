import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-b8ce1441.js";
export { l as load } from "../../../chunks/_layout-b8ce1441.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-c29f9c7c.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Two - JavaScript Functional",
  "created": "2021-11-02T00:00:00.000Z",
  "summary": "JavaScript From Fundamentals to Functional JS, v2",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_two_js_functional_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2 id="${"intro---javascript-from-fundamentals-to-functional-js"}"><a href="${"#intro---javascript-from-fundamentals-to-functional-js"}">Intro - JavaScript: From Fundamentals to Functional JS</a></h2>
<p>The differences:
OOP is about the noun.
Functional programming is about the verb. </p>
<p>For example:
OOP building a house, doors, windows.
Functional programming building a house, opening and closing.</p>
<p>TODO: Search:
Observable streams(?) \u2014 this?
think of lambda and ramda underscope</p>
<h2 id="${"objects"}"><a href="${"#objects"}">Objects</a></h2>
<p><strong>Primitive vs Non-primitives</strong>
Primitive values get passed by value (Number, String, Boolean, Undefined, Null and Symbol). </p>
<p>Non-primitive values get passed by reference. (Objects such as functions and arrays are referred to as non-primitive values)
Non-primitive values return the copy instead of return the original, because of reference/value.</p>
<p><strong>Dot Notation versus Brackets</strong></p>
<p>We use the . notation (obj.name).
Reminder that ob keys are always always strings</p>
<p>dots vs brackets</p>
<figure><img src="${"https://i.imgur.com/H87frS2.png"}"></figure>
<p><strong>Object Jawns</strong>
array is just a special type of object.
it has properties
it is indexed \u2014 numeric indices
can loop and do all sorts of things</p>
<p>Reminder that object keys are always always strings!
Also that you should use strings for keys.
But you can do some crazy shit like this:</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span> <span class="token comment">// remember that const </span>
x<span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"words"</span> <span class="token comment">// which gives you x: &#123;"4": "words"&#125;</span>

x<span class="token punctuation">[</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span> <span class="token keyword">return</span> <span class="token string">"stack"</span><span class="token punctuation">&#125;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"other"</span> <span class="token comment">// IFFEE x: &#123;"stack": "other Words"&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>this is acceptable. </p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript">
<span class="token comment">// ES5</span>
<span class="token keyword">const</span> dataES5 <span class="token operator">=</span> <span class="token punctuation">&#123;</span> 
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"dave"</span><span class="token punctuation">,</span> 
  <span class="token function-variable function">speak</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"speak"</span><span class="token punctuation">&#125;</span> 
<span class="token punctuation">&#125;</span>

<span class="token comment">// ES6</span>
<span class="token keyword">const</span> dataES6 <span class="token operator">=</span> <span class="token punctuation">&#123;</span> 
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"dave"</span><span class="token punctuation">,</span> 
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"speak"</span><span class="token punctuation">&#125;</span> 
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Method Versus Property</strong>
property -&gt; x.length
method -&gt; x.pop(1) // see how it has ()</p>
<h2 id="${"list-transformations"}"><a href="${"#list-transformations"}">List Transformations</a></h2>
<p>nothing. No notes taking.</p>
<h2 id="${"foreach-function"}"><a href="${"#foreach-function"}">.forEach() Function</a></h2>
<p>.forEach \u2014 this is really good, where she breaks down the _.each function </p>
<p>Recreating the each function from Underscore <a href="${"https://underscorejs.org/#each"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">Each function</a></p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">const</span> _ <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

_<span class="token punctuation">.</span><span class="token function-variable function">each</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">list<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>

  <span class="token comment">// if array</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>

    <span class="token comment">// loop through the array</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token comment">// run the callback with each item</span>
      <span class="token function">callback</span><span class="token punctuation">(</span>list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> list<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>

  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>

    <span class="token comment">// else if object</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> list<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token function">callback</span><span class="token punctuation">(</span>list<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> list<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>

  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>


<span class="token comment">// TO TEST:</span>
<span class="token comment">// remember that&#96;callback&#96; is a function that you bring in.</span>
<span class="token function">_each</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'johnny'</span><span class="token punctuation">,</span> <span class="token string">'steve'</span><span class="token punctuation">,</span> <span class="token string">'doggo'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> i<span class="token punctuation">,</span> list</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is younger than </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>list<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is older than </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>list<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>_. will always respond with a object</p>
<h2 id="${"map-function"}"><a href="${"#map-function"}">.map() Function</a></h2>
<p>Very often the docs is running the code they are promoting,
most libs have the lib live on their own site, so you can open up console.log and test it.
<code>$[h1]</code></p>
<p>Another hot tip: Test if the result of a function by wrapping it:</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">const</span> weapons <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'candlestick'</span><span class="token punctuation">,</span> <span class="token string">'knife'</span><span class="token punctuation">,</span> <span class="token string">'lead pipe'</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> <span class="token function-variable function">makeBroken</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">broken </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>item<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// What is the result type of map?</span>
Array<span class="token punctuation">.</span>isArray<span class="token punctuation">[</span>_<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>weapons<span class="token punctuation">,</span> makeBroken<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment">// true</span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"filter-function"}"><a href="${"#filter-function"}">.filter() Function</a></h2>
<p>.filter
how to create a filter function yourself
<a href="${"https://i.imgur.com/EFB0e9w.png"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://i.imgur.com/EFB0e9w.png</a></p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript">
<span class="token keyword">const</span> _ <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

_<span class="token punctuation">.</span><span class="token function-variable function">filter</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  
  <span class="token comment">// create a new array</span>
  <span class="token keyword">const</span> storage <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// loop through the array</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>

    <span class="token comment">// check if cb is true</span>
    <span class="token comment">// if true, push into array</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">cb</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      storage<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> storage<span class="token punctuation">;</span>  

<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"functions-in-depth"}"><a href="${"#functions-in-depth"}">Functions in-depth</a></h2>
<p>COOL TIP: </p>
<p><code>$</code> is a value in jquery. it has methods, like <code>$().hide()</code>.</p>
<p><strong>Side Effect</strong>
A side effect is anything that reaches beyond the initial function and changes something outside. like <code>console.log</code></p>
<p>For example: Anything modifying the DOM is creating a side effect. </p>
<p><strong>Functions are objects</strong>
functions are objects. so this is totally legal. </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token keyword">const</span> <span class="token function-variable function">theFunction</span> <span class="token operator">=</span> <span class="token parameter">statement</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>statement<span class="token punctuation">)</span><span class="token punctuation">;</span>

theFunction<span class="token punctuation">.</span>thing <span class="token operator">=</span> <span class="token string">"i'm just data"</span>

<span class="token function">theFunction</span><span class="token punctuation">(</span><span class="token string">'output to console.log'</span><span class="token punctuation">)</span>
theFunction<span class="token punctuation">.</span>thing<span class="token punctuation">;</span> <span class="token comment">// i'm just data</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Arguments</strong></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// Using arguments </span>

<span class="token comment">// Array-like object</span>
<span class="token keyword">const</span> <span class="token function-variable function">constructArr</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>

  <span class="token keyword">const</span> fakeArr <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// arguments is a JS THING</span>
  <span class="token keyword">const</span> realArr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// arguments is a JS THING</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// will spit out the arguments passed</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"array.isArray(arguments)"</span><span class="token punctuation">,</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"array.isArray(fakeArr)"</span><span class="token punctuation">,</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>fakeArr<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// true</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"array.isArray(realArr)"</span><span class="token punctuation">,</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>realArr<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// true</span>
  
  fakeArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'the billards room?'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> fakeArr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token function">constructArr</span><span class="token punctuation">(</span><span class="token string">'was'</span><span class="token punctuation">,</span> <span class="token string">'it'</span><span class="token punctuation">,</span> <span class="token string">'in'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"scopes"}"><a href="${"#scopes"}">Scopes</a></h2>
<p>no comments</p>
<h2 id="${"callbacks"}"><a href="${"#callbacks"}">Callbacks</a></h2>
<p><strong>higher order functions:</strong>
Take a function as a input or returns a function</p>
<p>An example of passing arguments:</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">const</span> <span class="token function-variable function">ifElse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> functionIfTrue<span class="token punctuation">,</span> functionIfFalse<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token comment">// ['yep', 'hi', 'bye']</span>
  <span class="token keyword">return</span> state <span class="token operator">?</span> <span class="token function">functionIfTrue</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">functionIfFalse</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token function">ifElse</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> fn1<span class="token punctuation">,</span> fn2<span class="token punctuation">,</span> <span class="token string">'yep'</span><span class="token punctuation">,</span> <span class="token string">'hi'</span><span class="token punctuation">,</span> <span class="token string">'bye'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>An example of callback:</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token parameter">n</span> <span class="token operator">=></span> n <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">const</span> <span class="token function-variable function">square</span> <span class="token operator">=</span> <span class="token parameter">n</span> <span class="token operator">=></span> n <span class="token operator">*</span> n

<span class="token keyword">const</span> <span class="token function-variable function">doMath</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> func</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">func</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token comment">// same as const doMath = function(n, func) => &#123; return func(n) &#125;</span>

<span class="token function">doMath</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> square<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">doMath</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> increment<span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Recreating Reduce</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">reduce</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">list<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> initial</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">let</span> memo <span class="token operator">=</span> initial<span class="token punctuation">;</span> <span class="token comment">// 2</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token comment">// i === 1</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> memo <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      memo <span class="token operator">=</span> list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
      memo <span class="token operator">=</span> <span class="token function">cb</span><span class="token punctuation">(</span>list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> memo<span class="token punctuation">)</span> <span class="token comment">// 3 + 2</span>
    <span class="token punctuation">&#125;</span>  
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> memo<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span> sum</span><span class="token punctuation">)</span> <span class="token operator">=></span> v <span class="token operator">+</span> sum<span class="token punctuation">)</span>
</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"functional-utilities"}"><a href="${"#functional-utilities"}">Functional Utilities</a></h2>
<p><strong>Currying</strong>
Break a argument pack by number of arguments. </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">var</span> <span class="token function-variable function">abc</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">var</span> curried <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">curry</span><span class="token punctuation">(</span>abc<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">curried</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// => [1, 2, 3]</span>
<span class="token function">curried</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// => [1, 2, 3]</span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Composing</strong>
Take two functions and combine them.
It fires the result of one into the result of the other. </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">consider</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I think it could be... </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">exclaim</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">statement</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>statement<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> blame <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">compose</span><span class="token punctuation">(</span>consider<span class="token punctuation">,</span> exclaim<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">blame</span><span class="token punctuation">(</span><span class="token string">'you'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// the result is:</span>
<span class="token comment">// I think it could be... YOU!</span>
</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"advanced-scope-closure"}"><a href="${"#advanced-scope-closure"}">Advanced Scope: Closure</a></h2>
<p>An example of closure - step by step</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token keyword">const</span> <span class="token function-variable function">myAlert</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token string">"Help! I think i found a clue!"</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">alerter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> CLUE #</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token operator">++</span>count<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> alerter<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> funcAlert <span class="token operator">=</span> <span class="token function">myAlert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> funcAlert2 <span class="token operator">=</span> <span class="token function">myAlert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

funcAlert<span class="token punctuation">;</span> <span class="token comment">// if you called it like this</span>
<span class="token comment">// result: () => &#123;</span>
<span class="token comment">//     alert(&#96;$&#123;x&#125;$&#123;++count&#125;&#96;);</span>
<span class="token comment">//   &#125;</span>

<span class="token function">funcAlert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// called like this</span>
<span class="token comment">// result: POPUP: HELP! I think i found a clue! CLUE #1</span>
<span class="token comment">// in other words, it's calling "alerter" with your "()"</span>

<span class="token function">funcAlert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// called like this</span>
<span class="token comment">// result: it will fire the first alerter(). But then, it'll try to fire again as undefined.</span>
<span class="token comment">// funcAlert(...) is not a function</span>

<span class="token comment">// finally - count keeps getting incremented!</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>Some advance stuff: </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// all this is doing is counting the name + weapon, then return true/false </span>
<span class="token keyword">const</span> <span class="token function-variable function">newClue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> length <span class="token operator">=</span> name<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">weapon</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> clue <span class="token operator">=</span> length <span class="token operator">+</span> weapon<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>clue <span class="token operator">%</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

<span class="token punctuation">&#125;</span>

<span class="token comment">// invoking</span>
<span class="token keyword">const</span> didGreenDoItWithA <span class="token operator">=</span> <span class="token function">newClue</span><span class="token punctuation">(</span><span class="token string">'Green'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this is the 'name' argument</span>

<span class="token function">didGreenDoItWithA</span><span class="token punctuation">(</span><span class="token string">'iron mallet'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this is passed as the 'weapon' argument</span></code>`}<!-- HTML_TAG_END --></pre>`;
    }
  })}`;
});
export { Week_two_js_functional_svelte as default, metadata };
