import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-ab845620.js";
export { l as load } from "../../../chunks/_layout-ab845620.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-3d93c575.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Five - JS Object Oriented",
  "created": "2021-11-27T00:00:00.000Z",
  "summary": "The Hard Parts of Object Oriented JavaScript",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_five_hard_parts_ooj_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2 id="${"intro"}"><a href="${"#intro"}">Intro</a></h2>
<p>Slides: <a href="${"https://static.frontendmasters.com/resources/2018-10-03-javascript-hard-parts-oop/javascript-hard-parts-oop.pdf"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://static.frontendmasters.com/resources/2018-10-03-javascript-hard-parts-oop/javascript-hard-parts-oop.pdf</a></p>
<p>OOJ is a way to organize our code as it gets more complex, so it\u2019s not procedure.</p>
<p>It\u2019s about combining things into a \u2018package\u2019. Put all the scores.</p>
<p>The goal of OOJ object oriented javascript is can we find a way to bundle up all of our functions the same way.</p>
<figure><img src="${"https://i.imgur.com/wSU6ZTu.png"}"></figure>
<h2 id="${"object-creation"}"><a href="${"#object-creation"}">Object Creation</a></h2>
<p>This is the best way to organize code.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Phil"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> 
  <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    user1<span class="token punctuation">.</span>score<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> user <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// user = &#123;&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Generate objects using a function</p>
<p>The issue with this: But hard to add features we\u2019re gonna see, and fundamentally untenable in terms of whether it\u2019s going to be performant in terms of memory.</p>
<p>Using this:
user1000 will also have the <code>increment: function() { ... }</code> copied.</p>
<p>That\u2019s 1000 versions of the same function.
Not at all memory performant.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">userCreator</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> score</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> newUser <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

  newUser<span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  newUser<span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
  newUser<span class="token punctuation">.</span><span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    newUser<span class="token punctuation">.</span>score<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> newUser<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token function">userCreator</span><span class="token punctuation">(</span><span class="token string">"Phil"</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> user2 <span class="token operator">=</span> <span class="token function">userCreator</span><span class="token punctuation">(</span><span class="token string">"Julia"</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

user1<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Thread of execution
Execution context </p>
<p>What makes this untenable is that the functionality is IDENTICAL. <code>newUser.increment()</code> is it\u2019s own instance.
It\u2019s creating it\u2019s own version of it.</p>
<p>What we want is a \u2018global\u2019 space where it can find <code>increment()</code></p>
<h2 id="${"prototype--new"}"><a href="${"#prototype--new"}">Prototype &amp; New</a></h2>
<p>It\u2019s better to store one a single item. </p>
<figure><img src="${"https://i.imgur.com/paVyhxt.png"}"></figure>
<p>The goal of Object Oriented Javascript is:
can we bundle up the relevant functionality and relevant data that applies to it?</p>
<p>Not go out and find it in another file somewhere in the ether. That it\u2019s bundled up in the code.</p>
<p>BEFORE</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">userCreator</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> score</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> newUser <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

  newUser<span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  newUser<span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
  newUser<span class="token punctuation">.</span><span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    newUser<span class="token punctuation">.</span>score<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> newUser<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token function">userCreator</span><span class="token punctuation">(</span><span class="token string">"Phil"</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> user2 <span class="token operator">=</span> <span class="token function">userCreator</span><span class="token punctuation">(</span><span class="token string">"Julia"</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

user1<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>NOTE: This will answer one of the popular senior dev question \u2014 how does the <code>new</code> keyword work</p>
<p>AFTER</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">userCreator</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> score</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> newUser <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>userFunctionStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
  newUser<span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  newUser<span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
  <span class="token keyword">return</span> newUser<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> userFunctionStore <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>score<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">login</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"You're logged in"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token function">userCreator</span><span class="token punctuation">(</span><span class="token string">"Phil"</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> user2 <span class="token operator">=</span> <span class="token function">userCreator</span><span class="token punctuation">(</span><span class="token string">"Julia"</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
user1<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p><code>user.increment()</code> is a hidden properties of objects is <code>__proto__</code> dunderstore (double understore) \u2014</p>
<p>It goes to the hidden reference. It\u2019s making a link, a reference, to the prototype. It bonds up.
It does NOT store it in the object. It\u2019s referencing.</p>
<p>To run <code>user.increment()</code>:</p>
<ol class="${"list"}"><li>Javascript starts by looking for <code>increment()</code></li>
<li>It will see an error, which then moves into the <code>__proto__</code></li>
<li>It sees it\u2019s in there, and grabs that and uses it.</li></ol>
<p>This is Javascript\u2019s prototypal nature.</p>
<p>This is the underlining feature of Object Oriented Javascript.</p>
<p>NOTE:
This is it.
Everything else is using the above, but cleaner.
This is Javascript under the hood. </p>
<figure><img src="${"https://i.imgur.com/C1yM0a3.png"}"></figure>
<p>Other languages do this for us. </p>
<p>JS engineers said, \u201CWell give you a tool for that\u201D.
Javascript gives us a <code>new</code> keyword to make it.</p>
<p>We just hand-creating the \u2018bond\u2019. </p>
<h3 id="${"new--this-keyword"}"><a href="${"#new--this-keyword"}">New &amp; this keyword</a></h3>
<figure><img src="${"https://i.imgur.com/jg6kyyw.png"}"></figure>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">userCreator</span><span class="token punctuation">(</span><span class="token string">"phil"</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>The <code>new</code> keyword will automatically get a bond with the new functions.</p>
<p>Is there some place we can put those <code>userFunctionStore</code> functions?</p>
<h3 id="${"functions-are-both-objects--functions"}"><a href="${"#functions-are-both-objects--functions"}">functions are both objects &amp; functions</a></h3>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">multiplyBy2</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> num<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

multiplyBy2<span class="token punctuation">.</span>stored <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token function">multiplyBy2</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>


multiplyBy2<span class="token punctuation">.</span>stored<span class="token punctuation">;</span> <span class="token comment">// 5</span>
multiplyBy2<span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// &#123;&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>They become function-object combos.</p>
<p>It\u2019s a very rare case you\u2019ll use a function and all of it\u2019s object bits.
But you will in Object Oriented Javascript.</p>
<figure><img src="${"https://i.imgur.com/guWpR6n.png"}"></figure>
<p>So we can put functions inside the <code>function--object</code>, and put it inside the function\u2019s <code>prototype</code>. </p>
<h3 id="${"the-new-keyword--how-to-share-functions-with-prototype"}"><a href="${"#the-new-keyword--how-to-share-functions-with-prototype"}">The new Keyword &amp; How to Share functions with prototype</a></h3>
<figure><img src="${"https://i.imgur.com/AKL8qif.png"}"></figure>
<p>BEFORE: This was our changes to create a shared function box</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">userCreator</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> score</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> newUser <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>userFunctionStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
  newUser<span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  newUser<span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
  <span class="token keyword">return</span> newUser<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> userFunctionStore <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>score<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">login</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"You're logged in"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token function">userCreator</span><span class="token punctuation">(</span><span class="token string">"Phil"</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> user2 <span class="token operator">=</span> <span class="token function">userCreator</span><span class="token punctuation">(</span><span class="token string">"Julia"</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
user1<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>AFTER</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// it can also be UserCreator. It's just a regular function no magic.</span>
<span class="token keyword">function</span> <span class="token function">userCreator</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> score</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

userCreator<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>score<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

userCreator<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">login</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"login"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserCreator</span><span class="token punctuation">(</span><span class="token string">"Eva"</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

user1<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>What does the new keyword do?</p>
<ol class="${"list"}"><li>Create a this: <code>{}</code></li>
<li>bonds the <code>__proto__</code> bond with the main function.</li>
<li>returns the value </li></ol>
<p>With the <code>new</code> keyword, it\u2019ll automatically add the bits of code automatically.</p>
<p><code>user1 = new UserCreator(&quot;Eva&quot;, 9)</code></p>
<p>The <code>new</code> keyword creates this extra link.
And that <code>__prototype__</code> is pointing to the <code>UserCreator.prototype.increment()</code></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">this</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">__proto__</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This then gives it a fancy name called \u2018Classes\u2019.</p>
<h3 id="${"review-of-new"}"><a href="${"#review-of-new"}">Review of New</a></h3>
<p>Devs need to let others know that we have to use a <code>new</code> keyword in a function. </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token keyword">function</span> <span class="token function">UserCreator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span> <span class="token comment">//... &#125;</span>
<span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserCreator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>If you fail to use the <code>new</code> keyword, then it doesn\u2019t create a <code>this</code> correctly and fails.
So devs help each other out by using Capital camelcase.</p>
<p><code>this</code> is known as a implicit parameters.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">this</span><span class="token punctuation">.</span>score<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// similar to user1.score++</span>

<span class="token comment">// if you're on user20, it'll be user20.score++</span></code>`}<!-- HTML_TAG_END --></pre>
<p>The simple rule of <code>this</code>, it will refer to the <code>this</code> object INSIDE the function/object/etc.</p>
<p>Sequence of events:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserCreator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
user1<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<ol class="${"list"}"><li><p>we\u2019re looking for the global of <code>user1</code></p></li>
<li><p>we then look for the <code>increment()</code> function inside</p></li></ol>
<p><code>user1.increment()</code> is known as a implicit parameters.</p>
<ol start="${"3"}" class="${"list"}"><li><p>Since user1 doesn\u2019t have a increment() function, it\u2019ll then\u2026</p></li>
<li><p>Move up to the userCreator function-object, and check if increment() exists there.</p></li>
<li><p>It successfully finds an <code>increment()</code></p></li></ol>
<p>A bad thing to say, \u201CLook into the prototype\u201D.
Prototype is not a magic word. <strong>proto</strong> IS a more accurate term.
A user can rename <code>prototype</code> to something else. It\u2019s not accurate.</p>
<h3 id="${"a-gotcha-bug-in-oop"}"><a href="${"#a-gotcha-bug-in-oop"}">A Gotcha bug in OOP</a></h3>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// it can also be UserCreator. It's just a regular function no magic.</span>
<span class="token keyword">function</span> <span class="token function">userCreator</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> score</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

userCreator<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">function</span> <span class="token function">add1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>score<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token comment">// const add1 = function() &#123; this.score++&#125;</span>
  <span class="token function">add1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

userCreator<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">login</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"login"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserCreator</span><span class="token punctuation">(</span><span class="token string">"Eva"</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

user1<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>Look at <code>this.score++</code>, which is on <code>add1()</code></p>
<p>What actually happens is:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">userCreator<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">function</span> <span class="token function">add1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// This is NOT pointing to the object.</span>
    <span class="token comment">// It's pointing to user1.add1() - user1 is not this. </span>
    <span class="token comment">// this is some random ass window!</span>
    <span class="token comment">// it'll return N/A</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>score<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token comment">// const add1 = function() &#123; this.score++&#125;</span>
  <span class="token function">add1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>How they hacked it?
Some weird shit like \u2014 using a <code>that</code>.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token literal-property property">user1</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>user1
  <span class="token literal-property property">add1</span><span class="token operator">:</span> <span class="token punctuation">[</span>f<span class="token punctuation">]</span>
  <span class="token literal-property property">that</span><span class="token operator">:</span> <span class="token keyword">this</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>The easier way is to use arrow functions!</p>
<h3 id="${"arrow-functions"}"><a href="${"#arrow-functions"}">Arrow functions</a></h3>
<p>Arrow functions will point <code>this</code> to where the function was saved.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">userCreator<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">add1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>score<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token punctuation">&#125;</span>
  <span class="token function">add1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This is a new best practice. Not the <code>that: this</code> process.</p>
<p>Performance -
Lexical status scoping: lexical means <code>position on the page</code>. So it gets destroyed after being called.
<code>add1()</code> gets destroyed right after it\u2019s finished.</p>
<h2 id="${"class-keyword"}"><a href="${"#class-keyword"}">Class keyword</a></h2>
<figure><img src="${"https://i.imgur.com/mmGoH7K.png"}"></figure>
<p>Syntatic sugar</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">UserCreator</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> score</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token class-name">UserCreator</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>score<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token class-name">UserCreator</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">login</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"login"</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserCreator</span><span class="token punctuation">(</span><span class="token string">"Eva"</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

user1<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This is exactly the same thing. Nothing has changed.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">UserCreator</span> <span class="token punctuation">&#123;</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> score</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>score<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"login"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserCreator</span><span class="token punctuation">(</span><span class="token string">"Eva"</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

user1<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/mGI5SSb.png"}"></figure>
<ol class="${"list"}"><li>Yellow parts - declare the variables</li>
<li>Blue parts - add the \u2018stored functions\u2019 so you can use it.</li>
<li>The white part - make a instance of that class.</li></ol>
<p>Classical programming do not put functions inside the <code>prototype</code> space.</p>
<p>QUESTION:
What happens when I want to build \u2018paid\u2019 users?
They get new functions that are different from regular users.</p>
<p>I can use the rest of the <code>users</code> stuff.</p>
<p>This is called \u201CSubclassing\u201D</p>
<h2 id="${"default-prototype-chain"}"><a href="${"#default-prototype-chain"}">Default Prototype Chain</a></h2>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">&#125;</span>

obj<span class="token punctuation">.</span>num <span class="token comment">// 3</span>
obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">"num"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Where does this method &#96;hasOwnProperty&#96; come from?</span>

<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// &#123; hasOwnProperty: FUNCTION &#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>In other words\u2026 we\u2019re \u2018cloning\u2019 Object, that has all these other sweet functions inside it\u2019s <code>prototype</code>. </p>
<figure><img src="${"https://i.imgur.com/didwhVG.png"}"></figure>
<p>So what happens if you use </p>
<p><code>multiplyBy2.increase()</code>?</p>
<ol class="${"list"}"><li><p>It looks in the <code>multiplyBy2</code> function list. Doesn\u2019t exist.</p></li>
<li><p>It then moves into the <code>function</code> and their own <code>prototypes</code>. Nothing.</p></li></ol>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span><span class="token operator">:</span> 
  call<span class="token punctuation">,</span> bind<span class="token punctuation">,</span> apply<span class="token punctuation">,</span> __proto__</code>`}<!-- HTML_TAG_END --></pre>
<ol start="${"3"}" class="${"list"}"><li>It now moves even higher to Object\u2019s prototypes\u2026</li></ol>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">Object: 
  hasOwnProperty, __proto__</code>`}<!-- HTML_TAG_END --></pre>
<ol start="${"4"}" class="${"list"}"><li>Doesn\u2019t exist either!</li></ol>
<p>Now we\u2019re showing <code>null</code>. </p>
<p>WARNING:
<a href="${"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto</a></p>
<p><code>Object.prototype.__proto__</code></p>
<p>no longer recommended.</p>
<blockquote><p>Warning: While Object.prototype.<strong>proto</strong> is supported today in most browsers, its existence and exact behavior has only been standardized in the ECMAScript 2015 specification as a legacy feature to ensure compatibility for web browsers. For better support, use Object.getPrototypeOf() instead.</p></blockquote>
<h2 id="${"things-you-should-be-able-to-answer-at-some-point"}"><a href="${"#things-you-should-be-able-to-answer-at-some-point"}">Things you should be able to answer at some point</a></h2>
<ul class="${"list"}"><li>I know what a variable is</li>
<li>I created a function before</li>
<li>I\u2019ve added a CSS style before</li>
<li>I have implemented a sort algorithm (bubble, merge, etc)</li>
<li>I can add a method to an object\u2019s prototype</li>
<li>I understand the event loop in JavaScript</li>
<li>I understand callback functions</li>
<li>I\u2019ve implemented <code>filter</code> from scratch</li>
<li>I can handle collisions in hash tables</li></ul>
<h2 id="${"subclassing-with-factory-functions"}"><a href="${"#subclassing-with-factory-functions"}">Subclassing with Factory Functions</a></h2>
<figure><img src="${"https://i.imgur.com/U797B3H.png"}"></figure>
<p>tldr:
You can split user into moderator &amp; paid user.
THey have different functions.
But they share functions too!</p>
<p>Inherit in JS is inaccurate, since it\u2019s not inheriting</p>
<p>In JS: it\u2019s searching up the prototype chain.
but in the spirit of inheritance, it\u2019s correct. It\u2019s being able to \u2018get this data\u2019. Or the right to look it up</p>
<h3 id="${"creating-a-subclass-with-factory-functions"}"><a href="${"#creating-a-subclass-with-factory-functions"}">Creating a Subclass with Factory Functions</a></h3>
<figure><img src="${"https://i.imgur.com/rEI8KCQ.png"}"></figure>
<p>solution 2 is known as a factory function. It produces.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// This method, you MUST return it since it has to create the object.</span>
<span class="token comment">// This is the factory function</span>
<span class="token keyword">function</span> <span class="token function">userCreator</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> score</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> newUser <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>userFunctions<span class="token punctuation">)</span><span class="token punctuation">;</span>
  newUser<span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  newUser<span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
  <span class="token keyword">return</span> newUser<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span> 


<span class="token keyword">const</span> userFunctions <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token function-variable function">sayName</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"I'm "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span> 
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>score<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token function">userCreator</span><span class="token punctuation">(</span><span class="token string">"Phil"</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
user1<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "I am Phil". This is grabbed from the userFunctions!</span>


<span class="token comment">// Now we're creating the 2 different versions!</span>
<span class="token comment">// We want a very specific TYPE of user.</span>
<span class="token keyword">function</span> <span class="token function">paidUserCreator</span><span class="token punctuation">(</span><span class="token parameter">paidName<span class="token punctuation">,</span> paidScore<span class="token punctuation">,</span> accountBalance</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// create a instance of the userCreator!</span>
  <span class="token keyword">const</span> newPaidUser <span class="token operator">=</span> <span class="token function">userCreator</span><span class="token punctuation">(</span>paidName<span class="token punctuation">,</span> paidScore<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// has all the user stuff, plus a BONUS property!</span>
  Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>newPaidUser<span class="token punctuation">,</span> paidUserFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>
  newPaidUser<span class="token punctuation">.</span>accountBalance <span class="token operator">=</span> accountBalance<span class="token punctuation">;</span>
  <span class="token keyword">return</span> newPaidUser<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> paidUserFunctions <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token function-variable function">increaseBalance</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>accountBalance<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>paidUserFunctions<span class="token punctuation">,</span> userFunctions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> paidUser1 <span class="token operator">=</span> <span class="token function">paidUserCreator</span><span class="token punctuation">(</span><span class="token string">"Allyssa"</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
paidUser1<span class="token punctuation">.</span><span class="token function">increaseBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
paidUser1<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// I am Allyssa</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Sequence of Events:
<code>Object.setPrototypeOf(newPaidUser, paidUserFunction)</code></p>
<ol class="${"list"}"><li><p><code>paidUser1.increaseBalance();</code> first looks for local function <code>increaseBalance()</code>;</p></li>
<li><p>Not there. So it\u2019s look in <code>paidUserFunctions()</code></p></li>
<li><p>BINGO! Had it not existed there, it would have checked <code>userCreator()</code>, and then <code>userFunctions()</code>;</p></li></ol>
<p>Senior dev question:
Tell me how subclasses work under the hood?</p>
<p>It\u2019s all about digging up the prototype chain.</p>
<h3 id="${"call-and-apply"}"><a href="${"#call-and-apply"}">Call() and Apply()</a></h3>
<p>This is the way you should really do it\u2026</p>
<p>We\u2019re creating a <code>userCreator()</code> functions. </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> 
  <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">++</span><span class="token punctuation">;</span> <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> otherObj <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// obj.num now 4</span>
obj<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>otherObj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// otherObj.num now 11</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Sequence of events:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">obj<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>otherObj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// otherObj.num now 11</span></code>`}<!-- HTML_TAG_END --></pre>
<ol class="${"list"}"><li><p>Loading the memory. We\u2019re starting from right to left.</p></li>
<li><p>We get <code>otherObj</code></p></li>
<li><p>We see there\u2019s a <code>call()</code>.</p></li></ol>
<p>functions have a <code>prototype</code>, that has <code>call()</code>. So it\u2019s not a mystery where it\u2019s coming from.
functions create a <code>this: {}</code> behind the scenes.
The <code>call()</code> function changes what this is pointed to.</p>
<ol start="${"4"}" class="${"list"}"><li><p>We move over and we see that <code>obj.increment</code> is a reference of <code>this.num++</code>. </p></li>
<li><p><code>call()</code> says <code>this</code> is actually <code>otherObj</code>. So it\u2019s really saying:</p></li></ol>
<p><code>otherObj.num++</code></p>
<p>And if passes params to it if there\u2019s anything past the comma</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">  userCreator.call(this, paidName, paidScore);
  // userCreator.apply(this, [paidName, paidScore])
</code>`}<!-- HTML_TAG_END --></pre>
<p>apply is the array version of it</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// obj</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> 
  <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">param1<span class="token punctuation">,</span> param2<span class="token punctuation">,</span> param3<span class="token operator">...</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> 
    <span class="token comment">//... </span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

obj<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">'otherObj'</span><span class="token punctuation">,</span> param1<span class="token punctuation">,</span> param2<span class="token punctuation">,</span> param3<span class="token punctuation">)</span>


</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"subclassing-with-new-and-call"}"><a href="${"#subclassing-with-new-and-call"}">Subclassing with New and Call</a></h2>
<p>Solution 3 is similar to how React implements it before ES6!</p>
<p>REMINDER: functions are actually function-object combo.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">userCreator</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> score</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score
<span class="token punctuation">&#125;</span>

userCreator<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"I'm "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

userCreator<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>score<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserCreator</span><span class="token punctuation">(</span><span class="token string">"Phil"</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> user2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserCreator</span><span class="token punctuation">(</span><span class="token string">"Tim"</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

user1<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// now we're on the Paid User side</span>
<span class="token comment">// when you create 'new', it returns for free!</span>
<span class="token keyword">function</span> <span class="token function">paidUserCreator</span><span class="token punctuation">(</span> <span class="token parameter">paidName<span class="token punctuation">,</span> paidScore<span class="token punctuation">,</span> accountBalance</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token function">userCreator</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> paidName<span class="token punctuation">,</span> paidScore<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// userCreator.apply(this, [paidName, paidScore])</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>accountBalance <span class="token operator">=</span> accountBalance<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

paidUserCreator<span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>userCreator<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>

paidUserCreator<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">increaseBalance</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>accountBalance<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> paidUser1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">paidUserCreator</span><span class="token punctuation">(</span><span class="token string">"Allysa"</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

paidUser1<span class="token punctuation">.</span><span class="token function">increaseBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
paidUser1<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// I'm Allyssa</span></code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/ztZKFvX.png"}"></figure>
<p>What\u2019s happening in <code>paidUserCreator()</code>?</p>
<p>Normally, <code>paidUserCreator()</code> is a function + Object combo.</p>
<p>In the Object is a nice, blank <code>__proto__</code>.
But \u2014since we did the <code>call()</code> function - we are binding <code>paidUserCreator()</code> to it\u2019s parent.</p>
<p>We are replacing <code>paidUserCreator()</code>\u2019s <code>__proto__</code> with the <code>userCreator</code>\u2019s <code>__proto__</code>, all because of that call() function.</p>
<p>The hard part:
when we do <code>userCreator.call(this)</code></p>
<p><code>this: {}</code> \u2014 instead of being set to the auto-created object, it\u2019ll throw the the object inside the this.</p>
<figure><img src="${"https://i.imgur.com/n2cjDpP.png"}"></figure>
<p>You can pass any object into that <code>.call()</code> or <code>.apply()</code>.</p>
<h2 id="${"subclassing-with-class-extends-and-super"}"><a href="${"#subclassing-with-class-extends-and-super"}">Subclassing with class, extends, and super</a></h2>
<p>Now to explain how React works! (The ES6 versions)</p>
<p>The final approach of Object Orient \u201CPretend\u201D style.</p>
<p>We\u2019ll figure out how extend() and super() works under the hood</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token comment">// lefthand side</span>
<span class="token keyword">class</span> <span class="token class-name">userCreator</span><span class="token punctuation">&#123;</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> score</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"I am "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>

  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>score<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">userCreator</span><span class="token punctuation">(</span><span class="token string">"Phil"</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> user2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">userCreator</span><span class="token punctuation">(</span><span class="token string">"Tim"</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

user1<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// right side</span>
<span class="token keyword">class</span> <span class="token class-name">paidUserCreator</span> <span class="token keyword">extends</span> <span class="token class-name">userCreator</span> <span class="token punctuation">&#123;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">paidName<span class="token punctuation">,</span> paidScore<span class="token punctuation">,</span> accountBalance</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>paidName<span class="token punctuation">,</span> paidScore<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>accountBalance <span class="token operator">=</span> accountBalance<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token function">increaseBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>accountBalance<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">const</span> paidUser1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">paidUserCreator</span><span class="token punctuation">(</span><span class="token string">"Alyssa"</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  paidUser1<span class="token punctuation">.</span><span class="token function">increaseBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  paidUser1<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"whats-happening-when-we-create-with-new"}"><a href="${"#whats-happening-when-we-create-with-new"}">What\u2019s happening when we create with new</a></h3>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">userCreator</span><span class="token punctuation">(</span><span class="token string">"Phil"</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<ol class="${"list"}"><li>the new key word means new things happen</li>
<li>It first creates a <code>this: {}</code></li>
<li>Inside of <code>this: {}</code>, it points the <code>constructor</code> data, and links to the <code>prototype</code> set of functions in the original class (or function!) </li>
<li>Finally it returns the object.</li></ol>
<p>It becomes this:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">this</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Phil"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
  <span class="token literal-property property">__proto__</span><span class="token operator">:</span> <span class="token punctuation">[</span>sayName <span class="token operator">&amp;</span> increment<span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"whats-happening-with-extend"}"><a href="${"#whats-happening-with-extend"}">What\u2019s happening with extend?</a></h3>
<p>Extends helps us make that bond with the <code>prototype</code> functions.</p>
<p>Also, before\u2026 we used a <code>.call()</code> to create it.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">paidUserCreator</span><span class="token punctuation">(</span> <span class="token parameter">paidName<span class="token punctuation">,</span> paidScore<span class="token punctuation">,</span> accountBalance</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token function">userCreator</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> paidName<span class="token punctuation">,</span> paidScore<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// userCreator.apply(this, [paidName, paidScore])</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>accountBalance <span class="token operator">=</span> accountBalance<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p><code>super()</code> does it for us now!
It actually gets born into the original function.
There\u2019s no side effects in the other way. That was a JS-team implicit thing.</p>
<p>think of it like <code>super(x, y)</code> is set to <code>new userCreator(x, y)</code></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">paidUser1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">paidUserCreator</span><span class="token punctuation">(</span><span class="token string">"Allyssa"</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<ol class="${"list"}"><li>it passes the <code>super( paidName, paidScore)</code> to the userCreator function and returns it into the <code>this</code></li>
<li>inside the <code>super()</code>, it creates a new execution function\u2026</li>
<li>It then sets the <strong>proto</strong> to <code>paidUserCreator</code></li></ol>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
paidUser1<span class="token punctuation">.</span><span class="token function">increaseBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<ol class="${"list"}"><li>It first checks itself for increaseBalance()</li>
<li>It wouldn\u2019t be there, because otherwise we\u2019re duplicating it everywhere.</li>
<li>It\u2019s instead, it\u2019s on <code>paidUserCreator()</code>\u2019s prototype chain</li></ol>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">paidUser1<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<ol class="${"list"}"><li>It checks itself. Not there.</li>
<li>It goes up the <code>paidUserCreator()</code>. Not there.</li>
<li>It now goes up even higher, to <code>userCreator()</code></li></ol>`;
    }
  })}`;
});
export { Week_five_hard_parts_ooj_svelte as default, metadata };
