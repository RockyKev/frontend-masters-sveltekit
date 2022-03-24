import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-ab845620.js";
export { l as load } from "../../../chunks/_layout-ab845620.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-3d93c575.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Twelve - Typescript",
  "created": "2022-01-29T00:00:00.000Z",
  "summary": "TypeScript Fundamentals, v3",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_twelve_typescript_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Mike North
<a href="${"https://frontendmasters.com/courses/typescript-v3/introduction/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://frontendmasters.com/courses/typescript-v3/introduction/</a>
<a href="${"https://www.typescript-training.com/course/fundamentals-v3"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.typescript-training.com/course/fundamentals-v3</a></p>
<p><a href="${"https://www.typescriptlang.org/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.typescriptlang.org/</a></p>
<p>The repo:
<a href="${"https://github.com/mike-north/ts-fundamentals-v3"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/mike-north/ts-fundamentals-v3</a></p>
<h2 id="${"introduction"}"><a href="${"#introduction"}">Introduction</a></h2>
<p>You\u2019ll have a well formed mental model of it.</p>
<p>Why it\u2019s awesome:</p>
<ol class="${"list"}"><li>IT allows the code author, to leave more of your intent \u201Con the page\u201D</li></ol>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span>number0<span class="token operator">:</span> number <span class="token punctuation">&#123;</span>
	add a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">"4"</span><span class="token punctuation">)</span>
</code>`}<!-- HTML_TAG_END --></pre>
<ol start="${"2"}" class="${"list"}"><li>Remove some kinds of errors from runtime to compile time. </li></ol>
<ul class="${"list"}"><li>Values that are potentially abset (null or undefined)</li>
<li>Incomplete refactorng</li>
<li>Breakage around internal code contracts (an argument becomes required)</li></ul>
<ol start="${"3"}" class="${"list"}"><li>Foundations or a code authoring experience. </li></ol>
<p>It autofills thing.</p>
<p>Typescript course:
<a href="${"https://www.typescript-training.com/course/fundamentals-v3"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.typescript-training.com/course/fundamentals-v3</a></p>
<p>Why to use TypeScript </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">////////////////////////////////
// JavaScript, not TypeScript //
////////////////////////////////
class Car &#123;
  constructor(make, model, year) &#123;
    this.make = make
    this.model = model
          
(property) Car.model: any
    this.year = year
  &#125;
&#125;

let sedan = new Car(&quot;Honda&quot;, &quot;Accord&quot;, 2017)
sedan.activateTurnSignal(&quot;left&quot;) // not safe!
new Car(2017, &quot;Honda&quot;, &quot;Accord&quot;) // not safe!</code>`}<!-- HTML_TAG_END --></pre>
<p>So the two <code>not safe</code> errors won\u2019t be discovered UNTIL you run your code. </p>
<figure><img src="${"https://i.imgur.com/W0TSVAy.png"}"></figure>
<h2 id="${"setup"}"><a href="${"#setup"}">Setup</a></h2>
<p><a href="${"https://www.typescript-training.com/course/fundamentals-v3/02-hello-typescript/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.typescript-training.com/course/fundamentals-v3/02-hello-typescript/</a></p>
<p>Declaration files. </p>
<blockquote><p>It\u2019s just sort of a semi colon at the end of the arguments list, right? So you can think of this almost like the types that were stripped away from our source code.</p></blockquote>
<blockquote><p>So you start with TypeScript, which is code that runs and types, and then your compiler almost separates those out. So you get a js file that runs and you get these dts files, which contain only the type information. Why is this good? Well, it lets people who are just using JavaScript who aren\u2019t writing TypeScript.</p></blockquote>
<blockquote><p>They can compile those js files and just call it a day. And people who are writing TypeScript, they can kind of reassemble that together and have the JavaScript that runs and the types that describe the constraints. So this is what will allow you to remain compatible with users who depend on your code regardless of whether they themselves are authoring TypeScript.</p></blockquote>
<p>Typescript can infer variables.
<a href="${"https://www.typescript-training.com/course/fundamentals-v3/03-variables-and-values/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.typescript-training.com/course/fundamentals-v3/03-variables-and-values/</a></p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// if Typescript refers it
let age = 6;

// Typescript will yell at you becuse you started this with a number. 
age = &quot;not a number&quot;;</code>`}<!-- HTML_TAG_END --></pre>
<p>When you use const, it hardlines it. </p>
<p>The use of <code>any</code>. </p>
<p>It\u2019s a way to make it just work. But it doesn\u2019t use it.
Any is dangerous!</p>
<p>It can be anything. It compromises the well-typed code.
It can hold, and it can masquarade/present itself as anything. </p>
<p>We\u2019ll cover more in Top &amp; Botom Typess, in Types &amp; Values)</p>
<h2 id="${"type-categories"}"><a href="${"#type-categories"}">Type Categories</a></h2>
<h3 id="${"explicit-return-types"}"><a href="${"#explicit-return-types"}">Explicit Return Types</a></h3>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/mo8ImkN.png"}"></figure>
<p>So this is going to blow up Typescript.
It demands that your param is a number. </p>
<figure><img src="${"https://i.imgur.com/3RGwijf.png"}"></figure>
<p>TODO:
Test-driven development VS Type-driven development</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// the shape of the object you want
&#123;
	make: &quot;Toyota&quot;,
	model: &quot;Corolla&#39;,
	year: 1994
&#125;

// to make it a Typescript variable 
let car = &#123;
	make: string,
	model: string,
	year: number
&#125;


// to harden the function 
function printCar(car: &#123;
  make: string
  model: string
  year: number
&#125;) &#123;
  console.log(&#96;$&#123;car.make&#125; $&#123;car.model&#125; ($&#123;car.year&#125;)&#96;)
&#125;
</code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"using-typeguards"}"><a href="${"#using-typeguards"}">Using Typeguards:</a></h3>
<p>notice that <code>chargeVoltage?</code> has a quesiton mark? It\u2019s an OR - so it\u2019s checking if the thing exists or not. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">function printCar(car: &#123;
  make: string
  model: string
  year: number
  chargeVoltage?: number
&#125;) &#123;
  let str = &#96;$&#123;car.make&#125; $&#123;car.model&#125; ($&#123;car.year&#125;)&#96;
  car.chargeVoltage
           
(property) chargeVoltage?: number | undefined
  if (typeof car.chargeVoltage !== &quot;undefined&quot;)
    str += &#96;// $&#123;car.chargeVoltage&#125;v&#96;
                          
(property) chargeVoltage?: number
  console.log(str)
&#125;</code>`}<!-- HTML_TAG_END --></pre>
<p>It\u2019s a optional product. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// works
  chargeVoltage?: number
  
// doesn&#39;t work
  chargeVoltage: number | undefined</code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"excess-property-checking"}"><a href="${"#excess-property-checking"}">Excess Property Checking:</a></h3>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">function printCar(car: &#123;
  make: string
  model: string
  year: number
  chargeVoltage?: number
&#125;) &#123;
  // implementation removed for simplicity
&#125;

printCar(&#123;
  make: &quot;Tesla&quot;,
  model: &quot;Model 3&quot;,
  year: 2020,
  chargeVoltage: 220,
  color: &quot;RED&quot;, // &lt;0------ EXTRA PROPERTY
&#125;)</code>`}<!-- HTML_TAG_END --></pre>
<p>Method 1: add it as a optional</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">  color?: string</code>`}<!-- HTML_TAG_END --></pre>
<p>Method 2: Move the param from a literal Object to it\u2019s own object. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">function printCar(car: &#123;
  make: string
  model: string
  year: number
  chargeVoltage?: number
&#125;) &#123;
  // implementation removed for simplicity
&#125;

const myCar = &#123;
  make: &quot;Tesla&quot;,
  model: &quot;Model 3&quot;,
  year: 2020,
  chargeVoltage: 220,
  color: &quot;RED&quot;, // &lt;0------ EXTRA PROPERTY
&#125;

printCar(myCar)</code>`}<!-- HTML_TAG_END --></pre>
<p>Why does this work?</p>
<p>Because the original execution:
The only way to access that color data is within the function.
It gets thrown out, and TypeScript yells at you.</p>
<p>But in the version where we\u2019re storing it in a variable:
You can access that color data by doing <code>myCar.color</code>.
The function is NOT the primary method of getting data.
And TypeScript is okay with that. </p>
<h3 id="${"index-signature---like-dictionaries"}"><a href="${"#index-signature---like-dictionaries"}">Index Signature - like dictionaries</a></h3>
<p>So something like this: </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">const phones = &#123;
  home: &#123; country: &quot;+1&quot;, area: &quot;211&quot;, number: &quot;652-4515&quot; &#125;,
  work: &#123; country: &quot;+1&quot;, area: &quot;670&quot;, number: &quot;752-5856&quot; &#125;,
  fax: &#123; country: &quot;+1&quot;, area: &quot;322&quot;, number: &quot;525-4357&quot; &#125;,
&#125;</code>`}<!-- HTML_TAG_END --></pre>
<p>To safeguard it: </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">const phones: &#123;
  [k: string]: &#123;
	country: string,
	area: string,
	number: string
  &#125;
&#125; = &#123;&#125; 
</code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"array-types"}"><a href="${"#array-types"}">Array Types</a></h3>
<p><code>const fileExtensions = [&quot;js&quot;, &quot;ts&quot;]</code></p>
<p>So if you\u2019re doing a Tuple </p>
<blockquote><p>Sometimes we may want to work with a multi-element, ordered data structure, where position of each item has some special meaning or convention. This kind of structure is often called a tuple.</p></blockquote>
<p>Like a mix array of string and numbers. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">let myCar = [2002, &quot;Toyota&quot;, &quot;Corolla&quot;]</code>`}<!-- HTML_TAG_END --></pre>
<p>Typescript may infer it being \u2014 : </p>
<ol class="${"list"}"><li><code>[2002, &quot;Toyota&quot;, &quot;Corolla&quot;]</code> should be assumed to be a mixed array of numbers and strings</li>
<li><code>[2002, &quot;Toyota&quot;, &quot;Corolla&quot;]</code> should be assumed to be a tuple of fixed length (3)</li></ol>
<p>So you need to explicitly define that. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">let myCar: [number, string, string] = [
  2002,
  &quot;Toyota&quot;,
  &quot;Corolla&quot;,
]

// ERROR
myCar = [&quot;Honda&quot;, 2017, &quot;Accord&quot;]

// ERROR
myCar = [2017, &quot;Honda&quot;, &quot;Accord&quot;, &quot;Sedan&quot;]
</code>`}<!-- HTML_TAG_END --></pre>
<p>EDGECASE  - As of TypeScript 4.2</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// this will cause an error on assignment
const numPair: [number, number] = [4, 5, 6]

// but messing with it down the line will not cause an error
const numPair: [number, number] = [4, 5]
numPair.push(6) // [4, 5, 6]
numPair.pop() // [4, 5]
numPair.pop() // [4]
numPair.pop() // []</code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"structural-vs-nominal-types"}"><a href="${"#structural-vs-nominal-types"}">Structural vs Nominal Types</a></h3>
<p><strong>What is Type checking?</strong>
Is the thing I\u2019m making data, is it the shape I want it to be. </p>
<p><code>x = y</code>  // Is it equivlent to what x holds. </p>
<p><code>() =&gt; x</code> // is it returning it </p>
<p>TypeScript Type system is static. </p>
<blockquote><p>Java, C#, C++ all fit into this category. Keep in mind that inferrence can still occur in static type systems \u2014 TypeScript, Scala, and Haskell all have some form of static type checking.</p></blockquote>
<p>Other Languages: </p>
<blockquote><p>Dynamic type systems perform their \u201Ctype equivalence\u201D evaluation at runtime. JavaScript, Python, Ruby, Perl and PHP fall into this category.</p></blockquote>
<p><strong>Nominal vs Structural</strong></p>
<p>Typescript is <code>Structural</code></p>
<p><code>Nominal</code> is all about the name. </p>
<p>This is java below: </p>
<pre class="${"language-java"}"><!-- HTML_TAG_START -->${`<code class="language-java"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">&#123;</span>
  <span class="token class-name">String</span> make<span class="token punctuation">;</span>
  <span class="token class-name">String</span> model<span class="token punctuation">;</span>
  <span class="token keyword">int</span> make<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CarChecker</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// takes a &#96;Car&#96; argument, returns a &#96;String&#96;</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">printCar</span><span class="token punctuation">(</span><span class="token class-name">Car</span> car<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
<span class="token class-name">Car</span> myCar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// TYPE CHECKING</span>
<span class="token comment">// -------------</span>
<span class="token comment">// Is &#96;myCar&#96; type-equivalent to</span>
<span class="token comment">//     what &#96;checkCar&#96; wants as an argument?</span>
<span class="token class-name">CarChecker</span><span class="token punctuation">.</span><span class="token function">checkCar</span><span class="token punctuation">(</span>myCar<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>All TypeScript (which is <code>structural</code>) cares about the shape.</p>
<p><strong>Duck Typing</strong></p>
<p>It\u2019s another way of saying, \u201CDyanamic Typing\u201D</p>
<blockquote><p>And this gets its name from the duck test, which means if it looks like a duck, swims like a duck, quacks like a duck, it\u2019s probably a duck.</p></blockquote>
<blockquote><p>[00:07:58]
And this is kind of another way of saying dynamic typing, where we kinda attempt to go ahead and use something, and if it works out, okay, and if it doesn\u2019t, we\u2019ll throw an error at runtime. That\u2019s how JavaScript works. You can think of it as having similarities to structural typing.</p></blockquote>
<blockquote><p>[00:08:21]
In that, you just care about having what you need, right? You don\u2019t care about who created it. It\u2019s similar to structural typing in that way, but it\u2019s also dynamic typing, in that there is no type information at build time to evaluate. So all of these errors are popping up at runtime.</p></blockquote>
<p><strong>Strong vs Weak Types</strong></p>
<p>There\u2019s no agreed upon technical definitions. </p>
<p>Instead, go with:
strong <code>-&gt;</code> static<br>
weak <code>-&gt;</code> dynamic </p>
<h3 id="${"union-types"}"><a href="${"#union-types"}">Union Types</a></h3>
<p>NOTES - this is hard. </p>
<figure><img src="${"https://i.imgur.com/xp5ynPb.png"}"></figure>
<p>It can be described using the Pipe operator. </p>
<p>OR, or AND \u2014 </p>
<blockquote><p>In the same diagram above, if we wanted fruits that are also sour (Fruit AND Sour) we\u2019d end up only getting <code>{ Lemon, Lime, Grapefruit }</code>.</p></blockquote>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&quot;success&quot; | &quot;error&quot;</code>`}<!-- HTML_TAG_END --></pre>
<p>It can only be one or the other. </p>
<p>The more advance method is to do this: </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">const outcome: [&quot;error&quot;, Error] | [&quot;success&quot;, &#123;
    name: string;
    email: string;
&#125;]</code>`}<!-- HTML_TAG_END --></pre>
<p>If <code>error</code>, then return the error function.
if <code>success</code>, then go through the rest of the stuff. </p>
<p>Also known as a \u2018tagged\u2019 union type. </p>
<p><a href="${"https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABMANjADgYTjMAKASgC5EAiACwFMBDAEwGdTEAfMqamFRxAbwChEiGMER4AstSjkAdACdqYWnAC2hRAD5EABmkBWAolmUoIWUgo0GpAYeOnz7Toz4BfPn1CRYCRMuoBPACNKAHFjAFV6SlkASTBgOEIiG1YAbVJo2ThZUgAaRABRWSzZAF0UxHT6EAgISnpGfJ5EMGplShJ6KFlcAHMAbkRKP05O7r7EF1LeG2FRVAxsXDUAXjWyKjpGA35BQSMTM0qbPbJq2vrGk73m1vaSUjEYAGtKRAA5bKk8oZGUB+UL0oAAFKAAPNroFCUaQQFRMFy5a7lQQuIZcN67PYHezHU6CDLFbJ5a6CMCUADuhSJsjwpAAKlREHDcIgUApaJRaIgfPSAIIxAAyAGVEEQ6QQkacUZNXO44WAujyQFA4e1ECtfAFgmEoJFonEEoQ+AB6E34gB6AH4gA"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">The code</a></p>
<p><strong>Discriminated Unions</strong></p>
<p>So </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">const outcome = maybeGetUserInfo(); 

if (outcome[0] === &quot;error&quot;) &#123;
  // In this branch of your code, second is an Error
  outcome
    
&#125; else &#123;
  // In this branch of your code, second is the user info
  outcome
    &#125;</code>`}<!-- HTML_TAG_END --></pre>
<p>So you can write a bunch of code like \u2014 </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">outcome[0] === &quot;error&quot; // fire errors 
outcome[0] === &quot;waiting&quot; // fire waiting function 
outcome[0] === &quot;standby&quot; // fire standby function </code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"aliases"}"><a href="${"#aliases"}">Aliases</a></h3>
<p><a href="${"https://www.typescript-training.com/course/fundamentals-v3/07-interfaces-and-type-aliases/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.typescript-training.com/course/fundamentals-v3/07-interfaces-and-type-aliases/</a></p>
<p><code>{ name: string, email: string }</code> becomes complicated after a while. You\u2019ll have to change a lot of code. </p>
<p>So you\u2019re creating a alias in a separate file, then bringing it in to define the shape. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// @filename: types.ts
// Needs to be UpperCase. 
export type UserContactInfo = &#123;
  name: string
  email: string
&#125;


// @filename: utilities.ts
import &#123; UserContactInfo &#125; from &quot;./types&quot;
               
function printContactInfo(info: UserContactInfo) &#123;
  console.log(info) // info // UserContactInfo 
               
  console.log(info.email) // email string
                    
&#125;</code>`}<!-- HTML_TAG_END --></pre>
<p>FOR EXAMPLE: </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// @filename: original.ts</span>
<span class="token comment">/**
 * ORIGINAL version
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">maybeGetUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>
  <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> Error<span class="token punctuation">]</span>
  <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token string">"success"</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> email<span class="token operator">:</span> string <span class="token punctuation">&#125;</span><span class="token punctuation">]</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// implementation is the same in both examples</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token string">"success"</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#123;</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Mike North"</span><span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">"mike@example.com"</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token string">"error"</span><span class="token punctuation">,</span>
      <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"The coin landed on TAILS :("</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>


<span class="token comment">/**
 * CLEANED UP version
 */</span>


<span class="token comment">// @filename: with-aliases.ts</span>
type UserInfoOutcomeError <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> Error<span class="token punctuation">]</span>
type UserInfoOutcomeSuccess <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">"success"</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> email<span class="token operator">:</span> string <span class="token punctuation">&#125;</span>
<span class="token punctuation">]</span>
type UserInfoOutcome <span class="token operator">=</span>
  <span class="token operator">|</span> UserInfoOutcomeError
  <span class="token operator">|</span> UserInfoOutcomeSuccess


<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">maybeGetUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> UserInfoOutcome <span class="token punctuation">&#123;</span>
  <span class="token comment">// implementation is the same in both examples</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token string">"success"</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#123;</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Mike North"</span><span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">"mike@example.com"</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token string">"error"</span><span class="token punctuation">,</span>
      <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"The coin landed on TAILS :("</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"interfaces"}"><a href="${"#interfaces"}">Interfaces</a></h3>
<p>They can only be used to describe <code>object types</code>. </p>
<p>For Javascript Classes:
Typescript calls <code>extends</code> a heritage clause. </p>
<blockquote><p>and that they are used to describe ancestry in an object oriented hierarchy of some sort. Extends is used to describe inheritance between like things. Implements is used to describe inheritance between unlike things.</p></blockquote>
<figure><img src="${"https://i.imgur.com/6iOkD8Q.png"}"></figure>
<p>You can hit some weird stuff. And just recommend using <code>implements</code>.. </p>
<h3 id="${"alias-vs-interface"}"><a href="${"#alias-vs-interface"}">Alias Vs Interface</a></h3>
<p>Choosing if you should use <code>type</code></p>
<ol class="${"list"}"><li><p>If you need to define something other than an object type (e.g., use of the <code>|</code> union type operator), you must use a type alias</p></li>
<li><p>If you need to define a type to use with the <code>implements</code> heritage term, it\u2019s best to use an interface</p></li>
<li><p>If you need to allow consumers of your types to augment them, you must use an interface.</p></li></ol>
<h3 id="${"exercise"}"><a href="${"#exercise"}">Exercise</a></h3>
<p><a href="${"https://www.typescript-training.com/course/fundamentals-v3/08-exercise-json-types/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.typescript-training.com/course/fundamentals-v3/08-exercise-json-types/</a></p>
<p>that exercise is really good because it helps you think through how that data is shaped, as well as going into recursive stuff. </p>
<p>RESEARCH:
Failure-driven development </p>
<p>NOTES:
tuple as a concept is used a LOT in typescript. </p>
<h2 id="${"functions"}"><a href="${"#functions"}">Functions</a></h2>
<p><a href="${"https://www.typescript-training.com/course/fundamentals-v3/09-functions/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.typescript-training.com/course/fundamentals-v3/09-functions/</a></p>
<p><code>void</code> return type means the function doesn\u2019t return anything.</p>
<blockquote><p>The return value of a void function is intended to be ignored</p></blockquote>
<p>Void should only return as a function return type. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// will break 
function invokeInFourSeconds(callback: () =&gt; undefined) &#123;
  setTimeout(callback, 4000)
&#125;

// this will work
function invokeInFiveSeconds(callback: () =&gt; void) &#123;
  setTimeout(callback, 5000)
&#125;
</code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"construct-signatures"}"><a href="${"#construct-signatures"}">Construct Signatures</a></h3>
<p><a href="${"https://www.typescript-training.com/course/fundamentals-v3/09-functions/#function-overloads"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">Function overload</a></p>
<pre class="${"language-ts"}"><!-- HTML_TAG_START -->${`<code class="language-ts"><span class="token keyword">function</span> <span class="token function">handleMainEvent</span><span class="token punctuation">(</span>
  elem<span class="token operator">:</span> HTMLFormElement<span class="token punctuation">,</span>
  handler<span class="token operator">:</span> FormSubmitHandler
<span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">handleMainEvent</span><span class="token punctuation">(</span>
  elem<span class="token operator">:</span> HTMLIFrameElement<span class="token punctuation">,</span>
  handler<span class="token operator">:</span> MessageHandler
<span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">handleMainEvent</span><span class="token punctuation">(</span>
  elem<span class="token operator">:</span> HTMLFormElement <span class="token operator">|</span> HTMLIFrameElement<span class="token punctuation">,</span>
  handler<span class="token operator">:</span> FormSubmitHandler <span class="token operator">|</span> MessageHandler
<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>So this is saying, if you get a <code>HTMLFormElement</code>, then it ties with <code>FormSubmitHandler</code>. </p>
<p>If you get <code>HTMLIFrameElement</code>, then it ties with <code>MessageHandler</code>. </p>
<p>The wires won\u2019t get crossed. </p>
<h3 id="${"this-types-and-best-practices"}"><a href="${"#this-types-and-best-practices"}"><code>this</code> types and Best Practices.</a></h3>
<h3 id="${"best-practices"}"><a href="${"#best-practices"}">Best Practices</a></h3>
<p>Explicit return types </p>
<h3 id="${"classes--access-modifier-keywords"}"><a href="${"#classes--access-modifier-keywords"}">Classes &amp; Access Modifier Keywords</a></h3>
<p>public = allowed
private = nobody can see this
protected = </p>
<p>(kinda like a access modifier, is <code>readonly</code>. It\u2019s like const/frozen array). </p>
<p>this is really about encapsulation, not security.
It\u2019s more of a \u2018fancy linter\u2019. Using a debugger can show that data. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">////////////////////////////////
// JavaScript, not TypeScript //
////////////////////////////////
class Car &#123;
  constructor(make, model, year) &#123;
    this.make = make
    this.model = model
    this.year = year
  &#125;
&#125;


////////////////////////////////
// TypeScript //
////////////////////////////////
class Car &#123;
	public make: string 
	public model: string 
	public year: number 
	protected vinNumber = generateVinNumber()
	protected doorLockCode = generateDoorLockCode()
	 
	 
	 constructor(make: string, model: string, year: number) &#123;
		this.make = make
		this.model = model
		this.year = year
	&#125;
	
	//
	protected unlockAllDoors() &#123;
		unlockCar(this, this.doorLockCode);
	&#125;
&#125;
</code>`}<!-- HTML_TAG_END --></pre>
<p>A cleaner way to do this: </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// BEFORE
class Car &#123;
  make: string
  model: string
  year: number
  constructor(make: string, model: string, year: number) &#123;
    this.make = make
    this.model = model
    this.year = year
  &#125;
&#125;


// AFTER 
class Car &#123;
  constructor(
    public make: string,
    public model: string,
    public year: number
  ) &#123;&#125;
&#125;
</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"types--values"}"><a href="${"#types--values"}">Types &amp; Values</a></h2>
<p><a href="${"https://www.typescript-training.com/course/fundamentals-v3/11-top-and-bottom-types/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.typescript-training.com/course/fundamentals-v3/11-top-and-bottom-types/</a></p>
<h3 id="${"top-types"}"><a href="${"#top-types"}">Top Types</a></h3>
<p>It\u2019s about set theory. </p>
<p><code>any</code> and <code>unknown</code></p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">const x: boolean // true or false 
const y: number // any number in JS. 5, 6, 7. 

let a: 5 | 6 | 7 // anything in &#123; 5, 6, 7 &#125;

let b: null // anything in &#123; null &#125; 

let c: &#123;
	favoriteFruit?: &quot;pineapple&quot; // the choices are pineapple or undefined. 
&#125;</code>`}<!-- HTML_TAG_END --></pre>
<p>So TOP TYPES: <code>any</code> and <code>unknown</code>
<code>any</code> can be anything in Javascript. </p>
<p>When to use <code>any</code>\u2026 <code>console.log</code></p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">console.log(window, Promise, setTimeout, &quot;foo&quot;&#96;</code>`}<!-- HTML_TAG_END --></pre>
<p>The difference between <code>any</code> or <code>unknown</code></p>
<blockquote><p>Values with an unknown type cannot be used without first applying a type guard</p></blockquote>
<p>It\u2019s as flexibility as <code>any</code>
but it has extra responsibility for the person who uses it. You do need to do a <code>type guard</code>.</p>
<p>*<em>Practical uses</em>
Top types comes in handy very often.
When converting from JS -&gt; TS\u2026 it\u2019s good to use <code>any</code> for work-in-progress or don\u2019t know what the type. Like fetch requests. </p>
<h3 id="${"bottom-types"}"><a href="${"#bottom-types"}">Bottom Types</a></h3>
<p>REF: <a href="${"https://www.typescript-training.com/course/fundamentals-v3/11-top-and-bottom-types/#bottom-type-never"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.typescript-training.com/course/fundamentals-v3/11-top-and-bottom-types/#bottom-type-never</a></p>
<p>Describe that can hold NO possible value.
<code>never</code> == <code>\u22A5</code></p>
<p>This is useful for exhaustive conditionals. Like, if it\u2019s not X, or Y, then it\u2019s neither! And you NEED that to have a exhaustive conditional. </p>
<pre class="${"language-ts"}"><!-- HTML_TAG_START -->${`<code class="language-ts">
<span class="token comment">// The exhaustive conditional</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>myVehicle <span class="token keyword">instanceof</span> <span class="token class-name">Truck</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  myVehicle<span class="token punctuation">.</span><span class="token function">tow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Truck</span>

<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>myVehicle <span class="token keyword">instanceof</span> <span class="token class-name">Car</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  myVehicle<span class="token punctuation">.</span><span class="token function">drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Car</span>

<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// NEITHER! </span>
  <span class="token keyword">const</span> neverValue<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> myVehicle
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>imagine if you have a 1000 JS files.
And you have a declaration file for your object.</p>
<p>And someone changes this: </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// before 
let myVehicle: Vehicle = Truck | Car 


// after 
let myVehicle: Vehicle = Truck | Car | Boat</code>`}<!-- HTML_TAG_END --></pre>
<p>Now all of your conditionals with <code>never</code> are broken. Which is GOOD! You need that when doing exhaustive conditionals. </p>
<p>Now, one of three things will happen in that final else block</p>
<ul class="${"list"}"><li>We will have handled every case before reaching it, and thus we will never enter the final else block</li>
<li>We will catch upstream code changes that need to be handled in this conditional at compile time (e.g., adding the Boat case)</li>
<li>If somehow an unexpected value \u201Cslip through\u201D and is not caught until we actually run the code, we will get a meaningful error message</li></ul>
<p>Languages like <code>rust</code> demands that all conditionals are exhausted. </p>
<h3 id="${"type-guards--narrowing"}"><a href="${"#type-guards--narrowing"}">Type Guards &amp; Narrowing</a></h3>
<p><a href="${"https://www.typescript-training.com/course/fundamentals-v3/12-type-guards/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.typescript-training.com/course/fundamentals-v3/12-type-guards/</a></p>
<p><strong>Default Javascript Type guards</strong></p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">let value:
  | Date
  | null
  | undefined
  | &quot;pineapple&quot;
  | [number]
  | &#123; dateRange: [Date, Date] &#125;
</code>`}<!-- HTML_TAG_END --></pre>
<p>This is too much. But this is fine if you\u2019re using type guard. </p>
<p>But you can use JS stuff together: </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// Truthy/falsy check
else if (!value) &#123;
  value
   
let value: undefined
&#125;
// Some built-in functions
else if (Array.isArray(value)) &#123;
  value
   
let value: [number]
&#125;</code>`}<!-- HTML_TAG_END --></pre>
<p><strong>User Defined Typeguards</strong></p>
<p>This is where you want to check like, is it correctly the shape of the object you want. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">interface CarLike &#123;
  make: string
  model: string
  year: number
&#125;

let maybeCar: unknown

// the guard
if (
  maybeCar &amp;&amp;
  typeof maybeCar === &quot;object&quot; &amp;&amp;
  &quot;make&quot; in maybeCar &amp;&amp;
  typeof maybeCar[&quot;make&quot;] === &quot;string&quot; &amp;&amp;
  &quot;model&quot; in maybeCar &amp;&amp;
  typeof maybeCar[&quot;model&quot;] === &quot;string&quot; &amp;&amp;
  &quot;year&quot; in maybeCar &amp;&amp;
  typeof maybeCar[&quot;year&quot;] === &quot;number&quot;
) &#123;
  maybeCar
&#125;
</code>`}<!-- HTML_TAG_END --></pre>
<p>Look at that guard. It\u2019s CRAZY!. It\u2019s so many checks. </p>
<ol class="${"list"}"><li>Is it null or undefined </li>
<li>Is it a object </li>
<li>Is the values matching strings &amp; numbers </li></ol>
<figure><img src="${"https://i.imgur.com/NGlXdJf.png"}"></figure>
<blockquote><p>So the type car is only as good as your alignment between the actual checking logic that you implement and the claim you make, about what that logic means means in terms of the type, of what\u2019s passed in.</p></blockquote>
<blockquote><p>[00:08:16]
If your logic here is flawed, you\u2019re gonna run into big problems, because type scripts got to do exactly what you say. Right now I\u2019m saying everything\u2019s carlike. And so -19 apparently has a property called year on it, TypeScript doing what I\u2019m telling it to do. So just be really careful about these.</p></blockquote>
<blockquote><p>[00:08:40]
These are again, I said this before I want to say one more time. These type guards are the glue between compile time validation and runtime behavior, you got to make sure that your compile time validation and your runtime behavior match up. And if they don\u2019t, you\u2019re gonna be lying to yourself here, right?</p></blockquote>
<h3 id="${"nullish-values"}"><a href="${"#nullish-values"}">Nullish Values</a></h3>
<p><a href="${"https://www.typescript-training.com/course/fundamentals-v3/13-nullish-values/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.typescript-training.com/course/fundamentals-v3/13-nullish-values/</a></p>
<p><code>null</code> means there\u2019s a value, but it means nothing. </p>
<p><code>undefined</code> means the value is not available yet. </p>
<p><code>void</code> for function returns should be ignored. </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> userInfo <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Mike"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">"mike@example.com"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">secondaryEmail</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// user has no secondary email</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> formInProgress <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">createdAt</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">completedAt</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token comment">// it's not here yet. </span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// for void, things like console errors </span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"generic"}"><a href="${"#generic"}">Generic</a></h2>
<p><a href="${"https://www.typescript-training.com/course/fundamentals-v3/14-generics/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.typescript-training.com/course/fundamentals-v3/14-generics/</a></p>
<p>Types declared in other types. </p>
<p>It\u2019s pretty abstract. </p>
<p>so WHY?: </p>
<p>It would be nice to transform data from one type of object into another. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// What we have
const phoneList = [
  &#123; customerId: &quot;0001&quot;, areaCode: &quot;321&quot;, num: &quot;123-4566&quot; &#125;,
  &#123; customerId: &quot;0002&quot;, areaCode: &quot;174&quot;, num: &quot;142-3626&quot; &#125;,
  &#123; customerId: &quot;0003&quot;, areaCode: &quot;192&quot;, num: &quot;012-7190&quot; &#125;,
  &#123; customerId: &quot;0005&quot;, areaCode: &quot;402&quot;, num: &quot;652-5782&quot; &#125;,
  &#123; customerId: &quot;0004&quot;, areaCode: &quot;301&quot;, num: &quot;184-8501&quot; &#125;,
]

// What we want 
const phoneDict = &#123;
  &quot;0001&quot;: &#123;
    customerId: &quot;0001&quot;,
    areaCode: &quot;321&quot;,
    num: &quot;123-4566&quot;,
  &#125;,
  &quot;0002&quot;: &#123;
    customerId: &quot;0002&quot;,
    areaCode: &quot;174&quot;,
    num: &quot;142-3626&quot;,
  &#125;,
  /*... and so on */
&#125;
</code>`}<!-- HTML_TAG_END --></pre>
<p>We need to produce a \u201Ckey\u201D for each object. </p>
<p><code>&lt;T&gt;</code> is a Type Parameter T </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// before 
function mapDict(...args: any[]): any &#123;&#125;

function mapDict&lt;T&gt;(...args: any[]): any &#123;&#125;</code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Generics tl;dr</strong></p>
<p>tbh i\u2019m not following him at all. This is pretty abstract. </p>
<p>i don\u2019t really get it.</p>
<p>Let\u2019s read it outload </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// Array.prototype.map, but for Dict

// BEFORE 
function mapDict(...args: any[]): any &#123;&#125;


// AFTER 

function mapDict&lt;T, U&gt;(
	input Dict&lt;T&gt;, 
	mappingCb: (arg: T) =&gt; U
	): Dict&lt;U&gt; &#123;
		return &#123;&#125;
	&#125;

</code>`}<!-- HTML_TAG_END --></pre>
<ol class="${"list"}"><li>declare that its\u2019 a type Parameter </li>
<li>We did <code>T, U</code> because U comes after T. </li>
<li>We are taking the input, and the callback, and want the return value to be a Dict. </li></ol>
<h3 id="${"generic-scopes--restraints"}"><a href="${"#generic-scopes--restraints"}">Generic Scopes &amp; Restraints</a></h3>
<p><a href="${"https://www.typescript-training.com/course/fundamentals-v3/16-type-param-scopes-and-constraints/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.typescript-training.com/course/fundamentals-v3/16-type-param-scopes-and-constraints/</a></p>`;
    }
  })}`;
});
export { Week_twelve_typescript_svelte as default, metadata };
