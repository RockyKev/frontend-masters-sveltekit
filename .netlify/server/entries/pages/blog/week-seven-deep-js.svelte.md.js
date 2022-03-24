import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-ab845620.js";
export { l as load } from "../../../chunks/_layout-ab845620.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-3d93c575.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Seven - Deep JS",
  "created": "2021-12-12T00:00:00.000Z",
  "summary": "Deep JavaScript Foundations, v3",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_seven_deep_js_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Hey It\u2019s Kyle Simpson!</p>
<p>Slides: <a href="${"https://static.frontendmasters.com/resources/2019-03-07-deep-javascript-v2/deep-js-foundations-v2.pdf"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://static.frontendmasters.com/resources/2019-03-07-deep-javascript-v2/deep-js-foundations-v2.pdf</a></p>
<h2 id="${"introduction"}"><a href="${"#introduction"}">Introduction</a></h2>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">/* It started with this question */</span>
x<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token operator">++</span>x<span class="token punctuation">;</span>

<span class="token comment">// It's supposed to be the same as this, correct?</span>
x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>


<span class="token comment">/* The funky catch-all */</span>

<span class="token comment">// What actually happens </span>

<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token string">"5"</span><span class="token punctuation">;</span> 
x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// "51"</span>

<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token string">"5"</span><span class="token punctuation">;</span>
y<span class="token operator">++</span><span class="token punctuation">;</span>  <span class="token comment">// 5</span>
y<span class="token punctuation">;</span>    <span class="token comment">// 6</span>

</code>`}<!-- HTML_TAG_END --></pre>
<blockquote><p>[00:05:20]
We blame the language. JavaScript clearly must have been designed poorly because this happened. </p></blockquote>
<blockquote><p>[00:05:56]
If you ask a room of C++ developers, have you ever read any part of the specification for C++? Most hands will go up, same for Java. But if I ask that same question, and I do, all over the world I ask this question almost every time, how many of you have read any part of the JavaScript spec?</p></blockquote>
<blockquote><p>[00:06:12]
And I hardly ever get any hands. And I think part of what I\u2019m getting at here is that many developers in the JavaScript community seem to think that JavaScript with its low barrier to entry, should be so automatically understandable, so intuitive, that if it\u2019s not immediately intuitive, therefore it was poorly designed.</p></blockquote>
<blockquote><p>[00:06:53]
And then when we get bitten by it we shift the blame to someone else. Instead of most developers in other communities saying, well, the fault is my own. I didn\u2019t understand it enough, okay? So here, when I experienced it coming back as the number 5 instead of the string 5, I didn\u2019t say, stupid JavaScript, how could you be so poorly designed?</p></blockquote>
<blockquote><p>[00:07:30]
I actually had this argument recently where somebody said, I don\u2019t know, the JavaScript engine is the source of authority. No, it isn\u2019t. The specification is the source of authority. And if you\u2019re wondering why does something do it, why am I seeing this behavior? Why does it seem weird or mysterious or black box or buggy or whatever?</p></blockquote>
<p>tl;dr: Have you ever read any part of the JS specification? </p>
<figure><img src="${"https://i.imgur.com/F7qjORD.png"}"></figure>
<p>The 3 pillars to describe \u2014 </p>
<ul class="${"list"}"><li>Types</li></ul>
<p>Primitive Types, Abstract Operations, Coercion, Equality, TypeScript, flow, etc.</p>
<ul class="${"list"}"><li>Scope</li></ul>
<p>Nested Scope, hoisting, Closures, and Modules</p>
<ul class="${"list"}"><li>Objects (oriented)</li></ul>
<p>Different from OOP, which is about the class-oriented.</p>
<p><code>this</code>, <code>class{}</code>, Prototypes, OO vs OLOO</p>
<h2 id="${"types"}"><a href="${"#types"}">Types</a></h2>
<p>\u201CIn JavaScript, everything is an object.\u201D</p>
<blockquote><blockquote><blockquote><p>Kyle Simpson: There is a reason for this statement, but this statement is a misconception, this is false. And that\u2019s a joke, by the way. [LAUGH] because false is not an object. False is an example of one of those values that is not an object. The reason behind why people say everything is an object, is because most of the values in JavaScript can behave as objects.</p></blockquote></blockquote></blockquote>
<p>The Primitive Types: </p>
<ul class="${"list"}"><li>undefined</li>
<li>string</li>
<li>number</li>
<li>boolean</li>
<li>object</li>
<li>Symbol</li></ul>
<blockquote><p>[00:04:04]
There is also add it recently a few years back in years six, a lesser none type but the primitives of types on the less call simple, symbols don\u2019t get use to often a lot of white for JavaScript that use basically you create suto private keys on objects. Not really private, but kinda obscure.</p></blockquote>
<blockquote><p>[00:04:23]
So you don\u2019t see those used a lot, more probably used in frameworks than you\u2019re gonna see in your general JavaScript code, but it is a primitive type nonetheless. </p></blockquote>
<h3 id="${"kyle-simpsons-subtypes"}"><a href="${"#kyle-simpsons-subtypes"}">Kyle Simpson\u2019s \u2018subtypes\u2019</a></h3>
<ul class="${"list"}"><li><p>undeclared</p></li>
<li><p>null</p></li>
<li><p>function?</p>
<blockquote><p>Kyle Simpson: And what about functions though? JavaScript didn\u2019t even list out function. If you look closely in that previous list, it didn\u2019t list out function and yet we know intuitively, that values which are functions have a very specific behavior, that is different from values that are numbers for say for example, so isn\u2019t it a type.</p></blockquote></li></ul>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token function-variable function">v</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">typeof</span> v<span class="token punctuation">;</span> <span class="token comment">// "function"</span>
</code>`}<!-- HTML_TAG_END --></pre>
<ul class="${"list"}"><li>array?</li></ul>
<blockquote><p>Arrays, we use this all the time, and it seems like they definitely have a specific behavior.</p></blockquote>
<blockquote><p>They\u2019re numerically indexed, and they have a length property that automatically updates. And they have various methods to them. So, are they a type? Again, the best way to think about them, the best mental model I\u2019ve come up with is that it\u2019s a subtype of the object type. It\u2019s a special kinda object with this numeric indexing.</p></blockquote>
<ul class="${"list"}"><li>bigint</li></ul>
<figure><img src="${"https://i.imgur.com/Hq8lgU5.png"}"></figure>
<p>You can determine what the primitive with the keyword <code>typeof</code></p>
<p>Historical record: </p>
<p>If you wanted to remove a value, use undefined.
If you wanted to remove a object, use null.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">var</span> number <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> theObject <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token keyword">typeof</span> theObject<span class="token punctuation">;</span> <span class="token comment">// object?!</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This is historical. Goofy stuff that\u2019s a bug. </p>
<h3 id="${"temporal-dead-zone-tdz"}"><a href="${"#temporal-dead-zone-tdz"}">Temporal Dead Zone (TDZ)</a></h3>
<figure><img src="${"https://i.imgur.com/xF7NcbP.png"}"></figure>
<p>And undefined means there\u2019s definitely a variable, and at the moment, it has no value.</p>
<p>But there\u2019s another concept of emptiness in the language that was introduced with, essentially, ES6. And the best way to describe this is uninitialized. Another way of referring to this particular condition that a variable can be in is called the TDZ, the temporal dead zone. We\u2019re gonna get much more into this in our next unit of discussion when we talk about scopes.</p>
<h3 id="${"nan-is-not-a-number"}"><a href="${"#nan-is-not-a-number"}">NaN, is Not a Number</a></h3>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">myCatsAge <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">"n/a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>

myCatsAge <span class="token operator">===</span> myCatsAge<span class="token punctuation">;</span> <span class="token comment">// false!!! WOAH</span>
<span class="token keyword">undefined</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

Number<span class="token punctuation">.</span><span class="token function">isNan</span><span class="token punctuation">(</span>myCatsAge<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token function">isNan</span><span class="token punctuation">(</span><span class="token string">"words"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></code>`}<!-- HTML_TAG_END --></pre>
<p>NaN is a thing that doesn\u2019t equal itself.</p>
<figure><img src="${"https://i.imgur.com/0VgIfod.png"}"></figure>
<h3 id="${"negative-0"}"><a href="${"#negative-0"}">Negative 0</a></h3>
<p><code>(-0)</code></p>
<p>It\u2019s a real thing.</p>
<p>Good usecase \u2014
Kyle built an app and wanted the car to continue pointing in the same spot, instead of the default.</p>
<p>So when the car was not moving, it would go to <code>-0</code>.
<code>0</code> would go to default.</p>
<h3 id="${"when-to-use-new"}"><a href="${"#when-to-use-new"}">When to use new</a></h3>
<figure><img src="${"https://i.imgur.com/zuSZWEa.png"}"></figure>
<h2 id="${"coercion"}"><a href="${"#coercion"}">Coercion</a></h2>
<p>toPrimitive(hints)</p>
<p><a href="${"https://262.ecma-international.org/9.0/#sec-abstract-operations"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://262.ecma-international.org/9.0/#sec-abstract-operations</a></p>
<p><a href="${"https://262.ecma-international.org/9.0/#sec-toprimitive"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://262.ecma-international.org/9.0/#sec-toprimitive</a></p>
<p>toString</p>
<p>toNumber</p>
<p>toBoolean
It uses a lookup table! It\u2019s either on or not.</p>
<h3 id="${"cases-of-cohecision"}"><a href="${"#cases-of-cohecision"}">Cases of Cohecision</a></h3>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">var</span> numStudents <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span>

<span class="token comment">// this is coercison</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">There are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>numStudents<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> students.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// There are 16 students</span>

<span class="token comment">// this is explicit</span>

<span class="token comment">// 'join' forces things to become strings. Don't do this.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">There are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token punctuation">[</span>numStudents<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> students.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// There are 16 students</span>

<span class="token comment">// A function on a primitive? wtf?</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">There are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>numStudents<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> students.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// There are 16 students</span>

<span class="token comment">// A clearer way </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">There are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token function">String</span><span class="token punctuation">(</span>numStudents<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> students.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// There are 16 students</span>
</code>`}<!-- HTML_TAG_END --></pre>
<blockquote><p>[00:09:45]
Except what happens when it\u2019s NaN.
Kyle Simpson: Okay, there\u2019s all kinds of corner cases in all of these coercions. So if you\u2019re in the habit of using some of these and not using others, I mean I hate to call this out but it sort of hypocritical to say, I used this form or magic but I don\u2019t like that form of magic.</p></blockquote>
<blockquote><p>[00:10:06]
I don\u2019t know if we should use the magic at all, I think we should learn it, use it, and then it\u2019s not magical at all. Once you learn it, you\u2019re doing something intentional, and you\u2019re communicating your intent to other people. That does not mean that implicitness is always bad.</p></blockquote>
<h2 id="${"philosophy-of-coercion"}"><a href="${"#philosophy-of-coercion"}">Philosophy of Coercion</a></h2>
<figure><img src="${"https://i.imgur.com/vN0RHLG.png"}"></figure>
<p>[00:00:40]
I make the claim that a quality JavaScript program is going to have to embrace coercion. You have to make sure that the types involved in every operation are clear. And by the way that means that you shouldn\u2019t be designing all these polymorphic functions that can take any sort of value and do 15 different things based upon the value.</p>
<p>[00:01:00]
You\u2019re asking for coercion problems when you do that and then papering over them, but I used the triple, I used the triple equals. Why not just design a function that only takes numbers and then make another function that only takes strings? Or make a function that takes numbers and strings, and it\u2019s very clear it can only be those two types, and I know what corner cases I have to worry about between numbers and strings.</p>
<p>[00:01:23]
We can choose to be more obvious about how we manage our types, how much we overload, how polymorphic we make our code. We can opt in to more problems or opt out of problems as a result.</p>
<figure><img src="${"https://i.imgur.com/BK1LDNo.png"}"></figure>
<blockquote><p>What I\u2019m actually saying is that your code is a form of communication, and there is an effective way to communicate that understands and uses the tool well. If you ask the reader of a code to understand something about the tool so that they can understand that line of code, that is an investment on their part.</p></blockquote>
<blockquote><p>Yeah, the junior devs gonna need to learn some stuff, but that\u2019s what happens in every job and in every industry, you have to learn some stuff. You don\u2019t see an architect saying, well we\u2019re not gonna design that building well cuz we\u2019ve got an intern on the job. You teach the intern how to build the building well.</p></blockquote>
<h3 id="${"kyle-rant"}"><a href="${"#kyle-rant"}">Kyle Rant!!</a></h3>
<figure><img src="${"https://i.imgur.com/2g1xB14.png"}"></figure>
<p>Kyle believes this is wrong.
Who decides what is working and what is dangerous?</p>
<figure><img src="${"https://i.imgur.com/movePjO.png"}"></figure>
<p>Cohesion test:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token keyword">function</span> <span class="token function">isValidName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>
		<span class="token keyword">typeof</span> name <span class="token operator">==</span> <span class="token string">"string"</span> <span class="token operator">&amp;&amp;</span>
		name<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">3</span>
	<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token parameter">attended<span class="token punctuation">,</span>length</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>
		<span class="token keyword">typeof</span> attended <span class="token operator">==</span> <span class="token string">"string"</span> <span class="token operator">&amp;&amp;</span>
		attended<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">""</span>
	<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		attended <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>attended<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>
		<span class="token keyword">typeof</span> length <span class="token operator">==</span> <span class="token string">"string"</span> <span class="token operator">&amp;&amp;</span>
		length<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">""</span>
	<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		length <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>
		<span class="token keyword">typeof</span> attended <span class="token operator">==</span> <span class="token string">"number"</span> <span class="token operator">&amp;&amp;</span>
		<span class="token keyword">typeof</span> length <span class="token operator">==</span> <span class="token string">"number"</span> <span class="token operator">&amp;&amp;</span>
		attended <span class="token operator">&lt;=</span> length <span class="token operator">&amp;&amp;</span>
		attended <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
		length <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
		Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span>attended<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
		Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span>
	<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>

	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>


<span class="token comment">// tests:</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValidName</span><span class="token punctuation">(</span><span class="token string">"Frank"</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token string">"10"</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token string">"6"</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token string">"6"</span><span class="token punctuation">,</span><span class="token string">"10"</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValidName</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValidName</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValidName</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValidName</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValidName</span><span class="token punctuation">(</span><span class="token string">"  &#92;t&#92;n"</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValidName</span><span class="token punctuation">(</span><span class="token string">"X"</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token string">"foo"</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token string">"foo"</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token string">"foo"</span><span class="token punctuation">,</span><span class="token string">"bar"</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string">"6"</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token string">"10"</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token string">"10"</span><span class="token punctuation">,</span><span class="token string">"6"</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">10.1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token number">6.1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token string">"10.1"</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token string">"6.1"</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hoursAttended</span><span class="token punctuation">(</span><span class="token string">"6.1"</span><span class="token punctuation">,</span><span class="token string">"10.1"</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"equality"}"><a href="${"#equality"}">Equality</a></h2>
<p>KYLE RANT!</p>
<p>He really spends an hour complaining about (===) and (==)</p>
<p>A HOUR.</p>
<h2 id="${"scope-and-types"}"><a href="${"#scope-and-types"}">Scope and Types</a></h2>
<p>Difference between Typescript and Flow
<a href="${"https://github.com/niieani/typescript-vs-flowtype"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/niieani/typescript-vs-flowtype</a></p>
<h2 id="${"scope-and-typing"}"><a href="${"#scope-and-typing"}">Scope and Typing</a></h2>
<h3 id="${"static-typing"}"><a href="${"#static-typing"}">Static Typing</a></h3>
<h2 id="${"scope"}"><a href="${"#scope"}">Scope</a></h2>
<p>How does Javascript go, \u201CYour Line 10 variable is undefined\u201D</p>
<p>The 4 stages of compiling.</p>
<p>In bash, if there\u2019s an error in line 4, lines 1, 2, &amp; 3 runs.</p>
<p>Javascript is a compile language.
The computer compiles the code before running. </p>
<p>Some say something like Java, it compiles, then it runs. </p>
<p>Javascript does it too. It interpret\u2019s the code, then fires it to the Javascript Engine.</p>
<h3 id="${"compile--run"}"><a href="${"#compile--run"}">Compile &amp; Run</a></h3>
<p>Javascript is a TWO-PASS system.</p>
<ol class="${"list"}"><li>Compile Time (Processing or Parsing)</li>
<li>Run time (Executing)</li></ol>
<p>THe first pass:
It doesn\u2019t ACTUALLY create it.
It\u2019s actually \u2018planning the idea\u2019 of creating it.
It creates a \u2018treasure map\u2019. </p>
<p>The second pass:
When it runs!
That\u2019s where things get assigned.
So now it follows the treasure map, and does it.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token keyword">function</span> <span class="token function">otherClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token comment">// ... &#125;</span>

<span class="token function">otherClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Remember, functions don\u2019t really exist. They exist \u2018symbolically.\u2019</p>
<p>A bad part of Javascript</p>
<p><strong>Dynamic Global Variables</strong></p>
<p>If you declare a variable without declaring it\u2026 it automatically creates a auto-global.</p>
<p><strong>NOTE: This does not work in strict mode</strong></p>
<p>NEVER EVER auto-create them.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">var</span> teacher <span class="token operator">=</span> <span class="token string">"Kyle"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">otherClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    teacher <span class="token operator">=</span> <span class="token string">"Suzy"</span><span class="token punctuation">;</span>
    topic <span class="token operator">=</span> <span class="token string">"React"</span><span class="token punctuation">;</span> <span class="token comment">// automatically made and thrown in global </span>

<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Type Error: It means that the type is wrong. Like passing a object into a string the wrong way.</p>
<p>Ref error: I cannot find the variable! There was no reference!</p>
<p>Strict mode is not always on. If you\u2019re compiling, it always uses Strict Mode.</p>
<h3 id="${"diff-between-undefined-vs-undeclared"}"><a href="${"#diff-between-undefined-vs-undeclared"}">Diff between undefined vs undeclared</a></h3>
<p>undefined \u2014 It doesn\u2019t have a value yet.</p>
<p>undeclared \u2014 Never been formally declared.</p>
<h3 id="${"arrow-functions"}"><a href="${"#arrow-functions"}">Arrow functions</a></h3>
<p>KYLE\u2019S OPINION
(Named) Function Declaration </p>
<p>is better than</p>
<p>Named Function Expression</p>
<p>is better than </p>
<p>Anonymous Function Expression</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// function declarion</span>
<span class="token keyword">function</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token comment">// ... &#125;</span>

<span class="token comment">// named function expression</span>
<span class="token keyword">const</span> <span class="token function-variable function">studentId</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token comment">// ... &#125;</span>


<span class="token comment">// anon function express</span>
<span class="token keyword">const</span> <span class="token function-variable function">studentId</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=></span> studentBody<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"scope-and-function-expressions"}"><a href="${"#scope-and-function-expressions"}">Scope and Function Expressions</a></h3>
<h3 id="${"advanced-scope"}"><a href="${"#advanced-scope"}">Advanced Scope</a></h3>
<p><strong>Lexical scope</strong></p>
<p>Almost every language with compilers use lexical scope. Bash is not lexical scope.</p>
<p>It\u2019s figured out in author time. When you\u2019re writing it. </p>
<p>It\u2019s not figured out in run time.</p>
<p><strong>Dynamic Scope</strong></p>
<p>It does NOT exist in Javascript!</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token keyword">function</span> <span class="token function">ask</span><span class="token punctuation">(</span><span class="token parameter">question</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>teacher<span class="token punctuation">,</span> question<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// will get teacher from otherAsk();</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">otherAsk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">var</span> teacher <span class="token operator">=</span> <span class="token string">"Suzy"</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>The Principle of Least Privilege (least exposure)</p>
<ol class="${"list"}"><li><p>Keep everything private. Sets up a defensive posture.</p></li>
<li><p>Reduces surface area. Hide it, and you prevent them from access it.</p></li>
<li><p>You protect yourself from future refactoring. If you use it, my changes will break your code. </p></li></ol>
<p><strong>IIFE Pattern</strong> &amp; <strong>Block Scoping</strong></p>
<p>It runs because <code>()()</code></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// IIFE</span>
<span class="token punctuation">(</span> <span class="token keyword">function</span> <span class="token function">sayTeacher</span><span class="token punctuation">(</span><span class="token parameter">teacher</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>teacher<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">"suzy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Blocks Scope</span>
<span class="token comment">// It's only a block scope with let/const</span>
<span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> teacher <span class="token operator">=</span> <span class="token string">"Suzy"</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>teacher<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>KYLE\u2019S HOT TAKE: <code>var</code> has a place.</p>
<p>He believes <code>let</code> should only be used in a few lines of the function.</p>
<p>Where <code>var</code> represents a function\u2019s variable. </p>
<p>You can create a \u2018symantic signal\u2019. </p>
<p><strong>Block scoping</strong></p>
<p>Kyle\u2019s idea: </p>
<p>If using a variable for a few lines, use a block statement.</p>
<figure><img src="${"https://i.imgur.com/w3xvKeH.png"}"></figure>
<p><strong>const problem</strong></p>
<p>Kyle\u2019s take: </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token keyword">const</span> teachers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'kyle'</span><span class="token punctuation">,</span> <span class="token string">'suzy'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
teachers<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"brian"</span><span class="token punctuation">;</span> <span class="token comment">// ALLOWED</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>Kyle only uses const only for primitives. Like strings, booleans, numbers. </p>
<p><strong>Hoisting</strong></p>
<p>It\u2019s not actually a real thing. It does not move things. It\u2019s a metaphor. </p>
<p>Kyle\u2019s take \u2014 </p>
<p>It\u2019s because people don\u2019t want to think about the two-pass process. </p>
<p><strong>TDZ</strong></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">teacher <span class="token operator">=</span> <span class="token string">'Kyle'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> teacher <span class="token operator">=</span> <span class="token string">"Suzy"</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>So right now, <code>teacher</code> is in the dead zone. </p>
<p>Assignment is a run-time thing. (Stage 2)</p>
<h3 id="${"closure"}"><a href="${"#closure"}">Closure</a></h3>
<p>[00:00:46]</p>
<blockquote><p>Doug Crawford, has had a lot of really great things that he\u2019s done for our industry and a lot of things that he said.</p></blockquote>
<blockquote><p>And when he says something brilliant, he deserves credit for it. Years ago, he had a conference talk that he was giving about computer science things that have been created over the course of the history of computer science. And he was making a point that, essentially, all great ideas take a whole generation of programmers before they get implemented, before they become popular.</p></blockquote>
<blockquote><p>And he gave a variety of examples. And when he went to explain why that phenomenon exists, it was sort of a tongue in cheek kind of response or explanation, which is kind of half-true and half-funny. He said, well, the reason why it takes a full generation is because we\u2019re so stubborn.</p></blockquote>
<blockquote><p>We\u2019re stuck in our ways. So we have to wait around for all of the current generation to die or retire llll before the new great idea picks up. [LAUGH] Again, it\u2019s like half-true and half-funny.</p></blockquote>
<blockquote><p>But he went on to say we know that closure must be truly great cuz it took two full generations to catch on.</p></blockquote>
<p>It\u2019s so powerful that every modern language has closure.</p>
<p>Closure is: </p>
<ol class="${"list"}"><li>It\u2019s when it\u2019s able to remember it\u2019s access it\u2019s lexical scope. </li>
<li>Even when it\u2019s executed outside that lexical scope.</li></ol>
<p>Closure \u2014 it\u2019s \u201Cclosed over\u201D the function. </p>
<p>Closure doesn\u2019t \u2018close over\u2019 a value.
It closes over a variable. </p>
<p>It takes the snapshot of the variable.
It \u201Ccloses over\u201D the variable. </p>
<p>It\u2019s preserving access to variables. </p>
<h3 id="${"module-pattern"}"><a href="${"#module-pattern"}">Module Pattern</a></h3>
<p>It requires lexical scope.
And Closure. </p>
<p>It\u2019s a functions and data and putting them into a object.</p>
<p>The module pattern requires a <code>encapsulation</code>. Which is a fancy word of hiding data. The idea of visibility. It\u2019s public and private data. </p>
<p>To have a module, you have to hide data. </p>
<p>So take take the same idea</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token comment">// Not a module pattern</span>
<span class="token keyword">const</span> workshop <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">teacher</span><span class="token operator">:</span> <span class="token string">"Kyle"</span><span class="token punctuation">,</span> 
    <span class="token function">ask</span><span class="token punctuation">(</span><span class="token parameter">question</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>teacher<span class="token punctuation">,</span> question<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>l

<span class="token comment">// Classic Module pattern</span>
<span class="token keyword">const</span> workshop <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">Module</span><span class="token punctuation">(</span><span class="token parameter">teacher</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">var</span> publicAPI <span class="token operator">=</span> <span class="token punctuation">&#123;</span> ask<span class="token punctuation">,</span> <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">ask</span><span class="token punctuation">(</span><span class="token parameter">question</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>teacher<span class="token punctuation">,</span> question<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">return</span> publicAPI<span class="token punctuation">;</span>

<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">"Kyle"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



<span class="token comment">// factory function Module Pattern</span>
<span class="token keyword">function</span> <span class="token function">WorkshopModule</span><span class="token punctuation">(</span><span class="token parameter">teacher</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">var</span> publicAPI <span class="token operator">=</span> <span class="token punctuation">&#123;</span> ask <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
    
    <span class="token keyword">function</span> <span class="token function">ask</span><span class="token punctuation">(</span><span class="token parameter">question</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>teacher<span class="token punctuation">,</span> question<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">return</span> publicAPI<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">var</span> workshop <span class="token operator">=</span> <span class="token function">WorkshopModule</span><span class="token punctuation">(</span><span class="token string">"Kyle"</span><span class="token punctuation">)</span><span class="token operator">:</span>

<span class="token comment">// ES6 Modules</span>
 

<span class="token comment">// THE ACTION</span>
workshop<span class="token punctuation">.</span><span class="token function">ask</span><span class="token punctuation">(</span><span class="token string">"It's a module, right?"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Kyle It's a module, right?</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>We can also create a factory function.</p>
<h3 id="${"modules"}"><a href="${"#modules"}">Modules</a></h3>
<figure><img src="${"https://i.imgur.com/GBfj3wH.png"}"></figure>
<p>Top: Newer ES6 module
Bottom: old school way. </p>
<h3 id="${"objects"}"><a href="${"#objects"}">Objects</a></h3>
<p><strong>this</strong></p>
<p>Whatever the target is.</p>
<p><strong>Implicit and explicit binding</strong>
using <code>workshop.ask.bind(workshop)</code></p>
<p>bind does a hardcoded linkage. </p>
<p>Isn\u2019t is better to just write a module and use closure?</p>
<p><strong>new keyword</strong></p>
<p>The third way to call a function.</p>
<p>It\u2019s to invoke and create a whole new functioning object.</p>
<p>FOUR THINGS IT DOES:</p>
<ol class="${"list"}"><li>Creates a brand new empty object</li>
<li>Links that object to another object. (Link?)</li>
<li>Invokes the function with <code>this</code> set to the new object.</li>
<li>Then if it doesn\u2019t return an object, assume return of this.</li></ol>
<p><strong>Default Binding</strong></p>
<p>The fallback, default to the global. </p>
<p><strong>CLasses</strong></p>
<p>Super</p>
<blockquote><p>[00:02:11]
As a matter of fact, the class system also now has a super keyword in it, which allows you to do relative polymorphism. </p></blockquote>
<blockquote><p>If you have a child class that defines a method of the same name as a parent class, so called shadowing. If you have one that defines the same method name in a child as in the parent.</p></blockquote>
<blockquote><p>You can refer to the parent from the child by saying super dot, like you see on line 12.</p></blockquote>
<p>Classes and Prototypes</p>
<p>The Lexical module system which we had for 20 years. Instead, people want to use the class system like other languages.</p>
<blockquote><p>The entire class system is built upon this idea that your methods don\u2019t exist on your instances, they exist on your prototypes and guess what happens when you say this.ask and you assign it a function? It\u2019s no longer on the prototype anymore, it\u2019s on your instance.</p></blockquote>
<blockquote><p>[00:05:43]
So every single time you instantiate a function, you\u2019re getting a whole separate copy of all those functions added to every single instance.</p></blockquote>
<h3 id="${"prototypes"}"><a href="${"#prototypes"}">Prototypes</a></h3>
<blockquote><p>You might remember in our discussion of this keyword that I said that new in front of a function call is a constructor call. That is not the same thing as saying there\u2019s a constructor, it is to simply say that that is basically for lack of a better term when you use new in front of a function call it\u2019s constructing an object to be used for this binding of that function call.</p></blockquote>
<blockquote><p>So that\u2019s where objects come from. They come via new from these constructor calls. And it is often said that in that process of constructing these new objects that it\u2019s making that object based on the constructor\u2019s prototype.</p></blockquote>
<p>A \u201Cconstructor call\u201D makes an object \u2018based-on\u2019 it\u2019s own prototype. It\u2019s making a \u2018copy\u2019 of the prototype. </p>
<p>In most langauges, classes are just a blueprint. Kyle\u2019s son is a blueprint of him, a copy of him. </p>
<p>Changing a window in the blueprint does not magically affect the building.</p>
<p>Javascript DOES NOT MAKE A COPY. It makes a LINK to it\u2019s own prototype. </p>
<p>Prototype system:</p>
<figure><img src="${"https://i.imgur.com/h0YpbrW.png"}"></figure>
<p>So that ask function is NOT copied to the object. It goes up the prototype chain, to the original instance.</p>
<p>Dunder Prototype
<strong>prototype</strong></p>
<blockquote><p>Speaker 2: What happens when you set dunder proto?</p></blockquote>
<blockquote><p>Kyle Simpson: Good question. It is not very common for you to use the Dunder Proto as a setter. It is technically both a getter and a setter. It is almost always used just to reference it. And I would say generally speaking, it\u2019s sort of an anti-pattern to rewire the prototype chain of an object.</p></blockquote>
<blockquote><p>[00:02:54]
But as of ES6, dunder proto is officially also something that can set the proto linkage from one object to a different object. So if you have an object A that\u2019s linked over here and then later you decide, I want that object prototype linked over here, you can use dunder proto as a setter to change it.</p></blockquote>
<p>Classical Vs Prototypal Inheritance</p>
<p>CLassical Classes</p>
<p>When you\u2019re instantiating, you\u2019re copying.</p>
<p>Prototypal Classes</p>
<p>Things are LINKED to, not copying.</p>
<p>Javascript\u2019s Behavior Delegation (Not inheritance)</p>
<p><strong>OLOO Pattern</strong></p>
<p>Objects Linked to Other Objects</p>
<p>Lua and Javascript.</p>
<p>Delegation-oriented design \u2014</p>
<p>Stop thinking of parent/child relationships, and think about peer to peer. </p>
<figure><img src="${"https://i.imgur.com/cyq1xUH.png"}"></figure>`;
    }
  })}`;
});
export { Week_seven_deep_js_svelte as default, metadata };
