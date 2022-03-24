import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-ab845620.js";
export { l as load } from "../../../chunks/_layout-ab845620.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-3d93c575.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Six - Javascript The Hard Parts",
  "created": "2021-12-05T00:00:00.000Z",
  "summary": "JavaScript The Hard Parts, v2",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_six_js_hard_parts_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p><a href="${"https://frontendmasters.com/courses/javascript-hard-parts-v2/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://frontendmasters.com/courses/javascript-hard-parts-v2/</a>
Will Sentance</p>
<h2 id="${"javascript-intro"}"><a href="${"#javascript-intro"}">Javascript Intro</a></h2>
<blockquote><p>[00:01:04]
Now, I also argue that not only does it make you a great senior engineer, in fact, here\u2019s my claim. Junior engineer takes any feature they\u2019re given to build. And if they\u2019ve seen technology or maybe the solution before, they can solve it. Mid-level engineer takes any feature they\u2019re given to build.</p></blockquote>
<blockquote><p>[00:01:20]
And even if they\u2019ve not seen the technology or solution before, they can figure it out because they\u2019ve learned how to learn, they\u2019re problem solving strong. A senior engineer is somebody who can take any given feature, and not only just figure out for themselves, but enable the rest of their team to figure it out.</p></blockquote>
<blockquote><p>[00:01:37]
Because they have technical communication, the ability to explain what their code is doing to somebody else in their team, in a clear and cordial manner. But I\u2019d also say even for junior mid-level developers, technical communication is gonna make your own mindset clearer. So the purpose of Hard Parts is gonna differ depending maybe on your background in JavaScript.</p></blockquote>
<blockquote><p>[00:01:59]
If you\u2019re someone who\u2019s a mid-senior developer, you\u2019ve seen many of these principles before, maybe you\u2019ve come from a computer science background. Then think of especially the earlier parts of JavaScript, the Hard Parts, as more about building up your technical communication. The ability for you to verbally work through exactly what\u2019s happening on the blackboard here, verbally talk through your JavaScript and your code with clarity and precision.</p></blockquote>
<h3 id="${"thread-of-execution"}"><a href="${"#thread-of-execution"}">Thread of Execution</a></h3>
<p>When Javascript code runs, it:</p>
<ol class="${"list"}"><li>Goes through line-by-line The thread of execution</li>
<li>Saves data like strings and arrays in memory</li></ol>
<p>Identifier - a fancy label that computers give to data</p>
<p>We can only do one Thread of Execution once!</p>
<p>It weaves in, and weaves out.</p>
<h3 id="${"functions"}"><a href="${"#functions"}">Functions</a></h3>
<p>Function saves a process.</p>
<h3 id="${"call-stack"}"><a href="${"#call-stack"}">Call Stack</a></h3>
<p>It keeps track of what functions is running.</p>
<p>Whatever is at the top of the call is currently running.</p>
<p>As soon as you run Javascript,
global() is added to the bottom.
Things get added to the stack, and JS handles it.
But when it\u2019s finish, it goes back to global().</p>
<figure><img src="${"https://i.imgur.com/6803OJz.png"}"></figure>
<h3 id="${"pair-programming"}"><a href="${"#pair-programming"}">Pair Programming:</a></h3>
<blockquote><p>What makes pair programming so powerful:
They can\u2019t get off, they can\u2019t do it their way they have to take my explanation and implement it and if they\u2019re not understanding my explanation, that\u2019s all in me. I can\u2019t say, hey, actually, let me just show you how to do it, I\u2019ve got to be able to verbalize with such clarity and precision intuitive style, that my partner can actually turn it into real code.</p></blockquote>
<blockquote><p>That is remarkable, it\u2019s gonna refine my technical communication beyond measure. Why pair programming is so important as a team doing these industry reviews with, you know, engineering managers and folks in industry for our curriculum. This new curriculum is what makes us do it, but whatever they make us review the new curriculum, because it\u2019s government agency that we\u2019re doing it with.</p></blockquote>
<hr>
<p>The two types of people and Pair programming: </p>
<blockquote><p>One is the researcher and one is the Stack Overflower, both are avoiding what it really is to be an engineer, which I\u2019ll tell you in a second.</p></blockquote>
<blockquote><p>The \u201Cresearcher\u201D avoids what it is to be an engineer, which is to be able to hit a whole block and somehow resolve through it, that is all it is to be an engineer, how do we actually do that? I should have figured out, here\u2019s how we do it, here\u2019s how we actually resolve hitting a whole block we go through the code. It\u2019s hitting a block and assuming the code, and then console logging essential using some other debugging tool, the data as you go through, line by line. And we spend the following three days reading every last thing about the new keyword, and about all aspects of the prototype chain, and wonderful. And yet we don\u2019t write a single line of code, we avoid the block.</p></blockquote>
<blockquote><p>The other approach is to grab snippets of code to fix a bug from Stack Overflow \u201CThe Stack Overflower\u201D.
And when that one when we plug it in, doesn\u2019t work, take that snippet plus the bit we added. Put it in the Stack Overflow, and say, how do these bits, stick together? </p></blockquote>
<p>Why Pair programming is important: </p>
<blockquote><p>Neither is effective in its own isolation, both are necessary to being an engineer, you\u2019ve done this in the first year of your careers, both of these.</p></blockquote>
<h3 id="${"the-state"}"><a href="${"#the-state"}">The state</a></h3>
<p>it\u2019s just memory at the current time.</p>
<h2 id="${"functions--callbacks"}"><a href="${"#functions--callbacks"}">Functions &amp; Callbacks</a></h2>
<h3 id="${"higher-order-functions"}"><a href="${"#higher-order-functions"}">Higher Order Functions</a></h3>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">squareNum</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> num <span class="token operator">*</span> num<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>So this is using <code>num</code> as a param that we can fill in.
A TBD.</p>
<p>What if it weren\u2019t just the data that we could leave TBD in our function that isn\u2019t a string, object, etc. What if we could also leave inside a function to be TBD? </p>
<p>And when we run the function, fill that functionality in? That would make our functions super reusable, super general. </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">copyArrayAndMultiplyBy2</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> output <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      output<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">return</span> output<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">copyArrayAndMultiplyBy2</span><span class="token punctuation">(</span>myArray<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// you'll have to recreate this if:</span>
<span class="token comment">// function copyArrayAndAdd3</span>
<span class="token comment">// function copyArrayAndDivideBy4</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Higher order Functions to the rescue!</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">copyArrayAndManipulate</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> instructions</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> output <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token comment">// now we're just pushing the function!</span>
      output<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">instructions</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">return</span> output<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">multiplyBy2</span><span class="token punctuation">(</span><span class="token parameter">input</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token keyword">return</span> input <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">copyArrayAndManipulate</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> multiplyBy2<span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>How do we bottle up a javascript it?</p>
<p>Any function tha takes a function is a <strong>Higher Order Function</strong>
The function we insert is considered the <strong>Callback function</strong></p>
<p>Keeps it more dry. Because the code is profoundly more reusable. </p>
<p>Declarative Programming - I declare what I want to happen!</p>
<h2 id="${"closures"}"><a href="${"#closures"}">Closures</a></h2>
<p>Benefit: </p>
<ul class="${"list"}"><li>Esoteric of Javascript concepts</li>
<li>We can achieve pro-level functions like <code>once</code> and <code>memoize</code></li>
<li>Many JS design patterns include the mdule pattern use closure</li>
<li>Build iterators, handle partial application and maintain state in a async world</li></ul>
<p>What is Closure</p>
<p>What if it had a memory of what happened before?</p>
<p>It starts with us <code>returning a function from another function</code></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token keyword">function</span> <span class="token function">createFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">function</span> <span class="token function">multiplyBy2</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> num <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> multiplyBy2<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> generateFunc <span class="token operator">=</span> <span class="token function">createFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">generateFunc</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/C9DuMAk.png"}"></figure>
<ol class="${"list"}"><li>generateFunc\u2019s value is the return statement, which is <code>multiplyBy2</code>.</li>
<li>Now we\u2019re at the <code>result</code> variable.</li>
<li>That variable gets the value of <code>multiplyBy2(3)</code></li></ol>
<p>Javascript is a \u2018do the line, the move on\u2019. It does not think about the labels of things after it\u2019s finished.
So <code>result</code> has NO relation to createFunction()! </p>
<p>All that matters is that <code>result</code> GAVE YOU THE RESULT of <code>createFunction()</code>, which is <code>multiplyBy2</code></p>
<p>A KEY ISSUE: DEVS DISTRACT THEMSELVES WITH THE LABEL.
Javascript does not do that under the hood.
We\u2019re doing it with or eyes. </p>
<blockquote><p>Is gonna turn out people. That, saving a function, declaring storing a function inside the execution. Context of running another functions of saving inside its local memory inside another function. When that function gets returned out, it gets the most powerful property bonus feature of JavaScript that we can ask for.</p></blockquote>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>

  <span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">incrementCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    counter <span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token function">incrementCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/CjQqYuN.png"}"></figure>
<p>What does <code>myNewFunc()</code> have?</p>
<p>If you run it, it runs <code>counter++</code>.</p>
<p>Functions return their outputs. That\u2019s kinda their thing.</p>
<p>So where does the variable counter come from?</p>
<p>Well, if you check the outer scope, or the global scope, there is no counter variable.</p>
<h3 id="${"the-backpack-concept"}"><a href="${"#the-backpack-concept"}">The backpack concept:</a></h3>
<p>Functions actually return their <code>local scope, and their result</code>. </p>
<p>So sequence of events:</p>
<ol class="${"list"}"><li>It checks the local scope.</li>
<li>Then it checks the backpack.</li>
<li>Finally it checks the Global Memory. </li></ol>
<p>If it exists in the function \u2018store\u2019, the permenant storage, the \u201Cbackpack\u201D, then it incremenets it there!</p>
<p>It\u2019s located in </p>
<p>[[]] means hidden data. </p>
<p>[[scope]] \u2014 it pulls this <code>backpack</code>. It\u2019s still attached when you pull the function.</p>
<h3 id="${"caveats"}"><a href="${"#caveats"}">Caveats</a></h3>
<p>You can only mess with </p>
<p>You can\u2019t access myNewFunc().scope.counter\u2026 that\u2019s illegal - doesn\u2019t work.
The only way to access is to write a function that messes with it.</p>
<p>It\u2019s private data!
It\u2019s presistent data.</p>
<h3 id="${"what-they-call-it"}"><a href="${"#what-they-call-it"}">What they call it</a></h3>
<p>The backpack \u2014 which is inaccurate. Because they call the function, variable\u2026 whole thing something else.</p>
<p>Devs call it:
Variable environment
Closed Over Variable Environement. (Cove)
Function\u2019s closure. </p>
<p>Scope is the data that i have access to me right now.</p>
<figure><img src="${"https://i.imgur.com/JM9xxmm.png"}"></figure>
<p>Sequence of events:
<code>const anotherFunction = outer()</code></p>
<ol class="${"list"}"><li>anotherFunction gets the results of the <code>incrementCounter()</code></li>
<li>That result is <code>counter++</code></li>
<li>It then gets the <code>local scope</code> of that function as well, getting shoved into [[scope]]</li>
<li></li></ol>
<h3 id="${"use-cases"}"><a href="${"#use-cases"}">Use-cases</a></h3>
<p><code>once</code> -&gt; set a lookup so that if the function once
useful for say, a video game where you complete it, try to run the funciton again\u2026 nah dude.</p>
<p><code>memorization</code></p>
<p>If you have a 100^, it\u2019ll give you a massive calculation.
Well, why do this hard calculation multiple times?
Just store the data in the backpack!</p>
<p>Module pattern:
Data that exists in the </p>
<h2 id="${"async-functions"}"><a href="${"#async-functions"}">Async Functions</a></h2>
<figure><img src="${"https://i.imgur.com/ilx63E5.png"}"></figure>
<h3 id="${"web-api"}"><a href="${"#web-api"}">Web API</a></h3>
<p>So web apis are things that aren\u2019t native to javascript.
Javascript console is not a real thing. Nor is fetch. nor is setTimeout.</p>
<figure><img src="${"https://i.imgur.com/rpvh0Qa.png"}"></figure>
<p>Assume the waitfor1sec() is a expensive 1-sec add a billion items to an array.</p>
<ol class="${"list"}"><li>the <code>waitfor1sec()</code> function fires</li>
<li>The <code>console.log</code> fires</li>
<li>THEN the set timeout?</li></ol>
<p>Because how it gets added on the call stack.</p>
<p>First, it setsTimeout(), putting a callback to come back once it\u2019s finished.
But we have to keep going while we\u2019re waiting. So we add the <code>waitfor1sec()</code> function.
The console.log fires.
The setTimeout() callback has been waiting very eagerly, but we can\u2019t get to it until we run everything else! Because it gets added to the Callstack Queue.</p>
<p>Because that\u2019s how Javascript is made.</p>
<p>Javascript MUST run every single line of code in the call stack.
When that is completely finished, then it checks the Callstack Queue.</p>
<p>That\u2019s the event loop.</p>
<h3 id="${"promises"}"><a href="${"#promises"}">Promises</a></h3>
<figure><img src="${"https://i.imgur.com/qS16ejW.png"}"></figure>
<p>Future data.
fetch is a very very powerful command.
It:</p>
<ol class="${"list"}"><li>goes out into the internet to grab data.</li>
<li>It creates a empty object.</li>
<li>It watches that object.</li>
<li>When data is finally returned, it fills that object.</li>
<li>If the object is filled, it then lets you know.</li>
<li>using <code>.then(randoFunction)</code>, you can then pass a function into that array that gets manipulated.</li>
<li>The thens manipulate that data even more!</li></ol>
<p>That object looks something like this:</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&#123;
    header: ...
    response: null,
    specialFunctions: [...whateverThenFunctionsYouAdd],
    onRejection: ... (for try/catch errors)
&#125;</code>`}<!-- HTML_TAG_END --></pre>
<p>And once that response hits\u2026 it hits.</p>
<h3 id="${"async-code"}"><a href="${"#async-code"}">Async code</a></h3>
<p>So by default\u2026 Javascript goes up and down. Read it, execute, move on.</p>
<p>Well, if you have a function that needs to wait\u2026 TOO BAD. We\u2019re moving on without you.</p>
<h3 id="${"fetch-promises-more-queues"}"><a href="${"#fetch-promises-more-queues"}">Fetch, promises, more queues!</a></h3>
<p>So if you have a <code>fetch</code> and a <code>setTimeout</code>, and a <code>waitfor300ms()</code> function.</p>
<figure><img src="${"https://i.imgur.com/Wh13Pnp.png"}"></figure>
<ol class="${"list"}"><li><p>Code goes up and down. </p></li>
<li><p>It goes and setTimeout().</p></li>
<li><p>setTimeout() goes to live in the browser task as it\u2019s going to do that.</p></li>
<li><p>It goes out and <code>fetch</code></p>
<ul class="${"list"}"><li>In the middle of that, SetTimeOut is finished! So it goes into the Event Queue.</li></ul></li>
<li><p><code>fetch</code> is finished! That also goes into a queue. (But not the event queue, we\u2019re coming to it)</p></li>
<li><p>It continues to read the code and output console.log.</p></li></ol>
<p>The Event loop realizes that the event stack is empty now!
So it\u2019ll dig into\u2026 the queue! (queues really!)</p>
<ol start="${"7"}" class="${"list"}"><li><p>Hey, fetch actually put the data in the <code>microtask queue</code>.
While the setTimeout() put it in the <code>event queue</code>
WTF?</p></li>
<li><p>Well, microtasks have priority! So there it goes!</p></li></ol>
<h3 id="${"the-event-stack-and-the-two-queues"}"><a href="${"#the-event-stack-and-the-two-queues"}">The event stack and the two queues</a></h3>
<ol class="${"list"}"><li>Event stack</li></ol>
<p>Anything that is ready to execute goes on the stack.</p>
<ol start="${"2"}" class="${"list"}"><li>Microtask Queue</li></ol>
<p>Anything resolved with promises.
The Event Loop will check this place FIRST. So, if you make a promise that keeps adding new microtasks queues,
in node, you can \u201Cstarve\u201D the <code>event queue</code>. </p>
<p>It\u2019ll keep executing the microtask queue, because new things keep getting added.</p>
<ol start="${"3"}" class="${"list"}"><li>Event Queue</li></ol>
<p>Anything with callbacks. </p>
<h2 id="${"classes-and-what-the-new-keyword-does-under-the-hood"}"><a href="${"#classes-and-what-the-new-keyword-does-under-the-hood"}">Classes and what the new keyword does under the hood</a></h2>
<h3 id="${"factory-function"}"><a href="${"#factory-function"}">Factory Function</a></h3>
<p>So a factory function creates objects.</p>
<p>something like</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">makeNewMage</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token comment">// ... &#125;;</span>

<span class="token keyword">const</span> JakeTheMage <span class="token operator">=</span> <span class="token function">makeNewMage</span><span class="token punctuation">(</span><span class="token string">'Jake'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> SarahtheMage <span class="token operator">=</span> <span class="token function">makeNewMage</span><span class="token punctuation">(</span><span class="token string">'Sarah'</span><span class="token punctuation">)</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>NOTE: He covers this whole hour in Javascript OOP the hard parts. </p>`;
    }
  })}`;
});
export { Week_six_js_hard_parts_svelte as default, metadata };
