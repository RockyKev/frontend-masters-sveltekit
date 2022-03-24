import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-b8ce1441.js";
export { l as load } from "../../../chunks/_layout-b8ce1441.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-c29f9c7c.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Nine - Intro to Vue",
  "created": "2022-01-02T00:00:00.000Z",
  "summary": "Introduction to Vue 3",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_nine_intro_to_vue_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Intro to Vue.js
Sarah Drasner
<a href="${"https://github.com/sdras/intro-to-vue"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/sdras/intro-to-vue</a></p>
<h2 id="${"intro"}"><a href="${"#intro"}">Intro</a></h2>
<p>VanillaJS vs Vue</p>
<blockquote><p>The other thing about it that I really like is we\u2019re holding a state. Unlike in olden days where the DOM would hold the state and you\u2019re kind of always pinging the DOM like, hey, what\u2019s going on?</p></blockquote>
<blockquote><p>Did you change this? Hey, what\u2019s going on? Did this update? We\u2019re holding a state instead. And we\u2019re telling the DOM what to do with that. So we really have better finite control over what\u2019s going on with the state of our application and where that is getting added to.</p></blockquote>
<blockquote><p>It\u2019s also reactive. We\u2019re gonna go into this whole section about what reactivity means and why that\u2019s different in Vue 3. But what you need to know for now is reactivity is really helpful because a lot of premises and reactivity is responding to changes. And that\u2019s what a lot of application development is.</p></blockquote>
<h2 id="${"directives-modifiers--data-rendering"}"><a href="${"#directives-modifiers--data-rendering"}">Directives, Modifiers &amp; Data Rendering</a></h2>
<p>v-model - two-way binding</p>
<p>v-if/v-else - mounting is expensive. So showing/hiding, rather than re-mounting is a option.</p>
<p>v-bind - </p>
<p>v-for - </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">(value, key, index) in jokes :key=&quot;value&quot;</code>`}<!-- HTML_TAG_END --></pre>
<p>v-once &amp; v-pre - </p>
<p>v-pre is like <code>&lt;pre&gt;</code>, in that it doesn\u2019t render vue itself. THat\u2019s useful for documentation. </p>
<p>v-on - binding to events.</p>
<p>v-html &amp; v-text -</p>
<p>v-html renders html.
v-text is like mustashe templates, in case you have a use-case where you can\u2019t use mustashes. Mustashe templates render them faster though, so use that. </p>
<p><strong>v-model Modifiers</strong></p>
<p>v-model.trim will strip any leading &amp; trailing whitespace from bound string</p>
<p>v-model.number - change strings to number </p>
<p>v-model.lazy - waits for data after the user finishes. </p>
<p>When i\u2019m using .lazy, i use it with form validation. Anything which deals with a lot of data. Because it\u2019s annoying to fill out a form and constantly get validation over and over again as you\u2019re typing.</p>
<p><strong>event modifiers</strong></p>
<p>@mousemove.stop - compare to e.stopPropagation()</p>
<p>@mousemove.prevent - this is e.preventDefault()</p>
<p>@submit.prevent - will no longer reload the page on submit</p>
<p>@click.once - click event fire once
@click.native - so you can listen to native events</p>
<p>EXERCISE:</p>
<p><a href="${"https://codepen.io/sdras/pen/685454ccb793ad59193a369c58b8747b"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/685454ccb793ad59193a369c58b8747b</a></p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">    &lt;input v-model.number=&quot;num2&quot; type=&quot;number&quot; /&gt;</code>`}<!-- HTML_TAG_END --></pre>
<p>TIL: You can force type. Take a look -&gt; v-model.number </p>
<h2 id="${"methods-computed-properties--watchers"}"><a href="${"#methods-computed-properties--watchers"}">Methods, Computed Properties &amp; Watchers</a></h2>
<p>Codepen - Rainbow mouse
<a href="${"https://codepen.io/sdras/pen/75205908c2189487ca91f9b49c1c978a"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/75205908c2189487ca91f9b49c1c978a</a></p>
<blockquote><p>I get really frustrated with JavaScript and I wanna scream, this is bullshit, but I keep forgetting what this refers to.</p></blockquote>
<p>Codepen - Vue Form </p>
<p><a href="${"https://codepen.io/sdras/pen/1e3443b570d2bf072d87ac96cb150f3f"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/1e3443b570d2bf072d87ac96cb150f3f</a></p>
<p>Codepen - Sorting Table Data
<a href="${"https://codepen.io/sdras/pen/d53df955e0918d9437424cf5eee82fe8"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/d53df955e0918d9437424cf5eee82fe8</a></p>
<p>Reminder - this is bound to the component. so you should not use a arrow function in methods. </p>
<h3 id="${"computed-property-vs-methods"}"><a href="${"#computed-property-vs-methods"}">Computed Property vs Methods</a></h3>
<figure><img src="${"https://i.imgur.com/9AqZLeU.png"}"></figure>
<p>Codepen - Computed Properties in place of that array
<a href="${"https://codepen.io/sdras/pen/eb5416266e86fdd45195c3974c7898f6"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/eb5416266e86fdd45195c3974c7898f6</a></p>
<p>codepen - Filtering blog post Exercise Solution
<a href="${"https://codepen.io/sdras/pen/9405ba833415572d34ec7c3ba13b1608"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/9405ba833415572d34ec7c3ba13b1608</a></p>
<p>Filters were dropped, because you can do everything with computed properties. </p>
<p>Codepen - Filter Version
<a href="${"https://codepen.io/sdras/pen/1b9e273a1d27f64a99b94d8754a3b693"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/1b9e273a1d27f64a99b94d8754a3b693</a></p>
<p>Codepen - Computed Properties
<a href="${"https://codepen.io/sdras/pen/21f82be7b6afe10d89738db184bafb89"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/21f82be7b6afe10d89738db184bafb89</a></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// Filters Version </span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">customer1total</span><span class="token operator">:</span> <span class="token number">35.43</span>    
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token function">tip20</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>value<span class="token operator">*</span><span class="token number">.2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// Computed Properties Version </span>
<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">customer1total</span><span class="token operator">:</span> <span class="token number">35.43</span>    
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token function">tip20</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>customer1total<span class="token operator">*</span><span class="token number">.2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"reactivity--proxies"}"><a href="${"#reactivity--proxies"}">Reactivity &amp; Proxies</a></h3>
<p>Sarah explains that reactive programming is programming with asynchronous data streams, adds that a stream is a sequence of ongoing events ordered in time that offer some hooks with which to observe it, and walks through the various steps that Vue 3 goes through to make an object reactive. Proxies, which are objects that encase other objects or functions that allow engineers to intercept it, are also explored in this section.</p>
<p>Most of what we\u2019re doing with application development is reacting to state changes.</p>
<blockquote><p>So what is reactive? We\u2019ve heard reactive programming and people talk about reactive programming a lot lately and sometimes people think, well reactive programming is RXJs. And they\u2019re not wrong. RxJs is reactive programming. But reactive programming is a type of programming it\u2019s a large umbrella and RxJs is one library that uses reactive premises.</p></blockquote>
<p>WHAT IS REACTIVE?
Reactive programming is programming with asynchronous data streams.</p>
<p>A stream is a sequence of ongoing events ordered in time that offer some hooks with which to observe it.</p>
<p>Andre Staltz\u2019 post - <a href="${"https://gist.github.com/staltz/868e7e9bc2a7b8c1f754"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://gist.github.com/staltz/868e7e9bc2a7b8c1f754</a></p>
<p>When we use reactive premises for building applications, this means it\u2019s very easy to update state in reaction to events.</p>
<p>HOW DOES VUE 3 DO REACTIVITY?</p>
<ul class="${"list"}"><li>Detect when there\u2019s a change in one of the values</li>
<li>Track the function that changes it</li>
<li>Trigger the function so it can update the final value</li></ul>
<p>Proxies - </p>
<blockquote><p>(Detect)\u2026 Because proxies are already doing that for us automatically. We can \u2018track\u2019 the function that changes it using track and we can \u2018trigger\u2019 a function that updates the final value in trigger.</p></blockquote>
<figure><img src="${"https://i.imgur.com/ndEUOkc.png"}"></figure>
<figure><img src="${"https://i.imgur.com/3qQQodx.png"}"></figure>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token comment">//the data that's being used</span>
<span class="token keyword">const</span> dinner <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span> 

<span class="token comment">// What happens to the data.</span>
<span class="token comment">// this sets a get/set </span>
<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span> 

<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>dinner<span class="token punctuation">,</span> handler<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Codepen - Proxy explainer in Codepen (sweet animations)
<a href="${"https://codepen.io/team/Vue/pen/wvgqyJK"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/team/Vue/pen/wvgqyJK</a></p>
<p><strong>Set(), Map() &amp; WeakMap()</strong></p>
<p>Set()</p>
<p>Map() is a series of key &amp; values, similar to object
remember explicit ordering
Like Set(), which is only uniques </p>
<p>Weakmap()</p>
<p>The main two things \u2014 one can be garbage collected. </p>
<p>Why does this matter?
Because this is what Vue is doing under the hood. </p>
<h3 id="${"watchers"}"><a href="${"#watchers"}">Watchers</a></h3>
<p>Codepen - Watchers
<a href="${"https://codepen.io/sdras/pen/2f082def935abf0dab372893f0efac1d"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/2f082def935abf0dab372893f0efac1d</a></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'The counter has changed!'</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
	<span class="token function">watchedProperty</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">It was </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>oldValue<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">, now it's </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>newValue<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Codepen - Punk Beers
(It watches for scroll and when it reaches the bottom, it gets more data.)</p>
<p><a href="${"https://codepen.io/sdras/pen/dRqZOy"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/dRqZOy</a></p>
<p>Instead of building the new one:
<a href="${"https://github.com/tangbc/vue-virtual-scroll-list"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/tangbc/vue-virtual-scroll-list</a></p>
<p>built by Vue Core Team . </p>
<p><strong>Codepen - Graph with SVG</strong>
<a href="${"https://codepen.io/sdras/pen/OWZRZL"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/OWZRZL</a>
Transitioning state with watchers</p>
<p>The graph is built with Vue! (not a JS lib)</p>
<p>Watchers only watch one property.
But it\u2019s flexible that you can set it to watch your one property, and then change another property.</p>
<p>That\u2019s can be a side-effect, where you change things that someone else doesn\u2019t know about it. </p>
<blockquote><p>And so there are kind of purists in this area who will say don\u2019t do something like that because you\u2019re now changing something that you didn\u2019t know that you are changing. So that is something to watch out for, to watch out for. What I would recommend is that you\u2019re always encapsulating thing and methods and calling them so that it\u2019s a little bit more explicit and not doing everything directly in the watcher in order to kind of change things around.</p></blockquote>
<blockquote><p>But it\u2019s a little bit different from a computer property in that sense, that computer properties are really like giving you another view from that one piece. Watchers allow you to affect multiple pieces.</p></blockquote>
<h2 id="${"components-and-props"}"><a href="${"#components-and-props"}">Components and Props</a></h2>
<p>Templates</p>
<ul class="${"list"}"><li>You can also use render functions (<a href="${"https://vuejs.org/v2/guide/render-function.html"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://vuejs.org/v2/guide/render-function.html</a>)</li>
<li>You can also use JSX</li></ul>
<p>Each component has it\u2019s own isolated scope. </p>
<p>If you don\u2019t, it retains the scope for all instances of that component.</p>
<p>camelCasing converts to kebab-case. </p>
<p>Codepen - Comment app -
<a href="${"https://codepen.io/sdras/pen/422d5ce1f61d93ca253e06132b83c598"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/422d5ce1f61d93ca253e06132b83c598</a></p>
<p>\u2018dumb\u2019 components - components that are only used to render things. It\u2019s only responsible is to show pretty shit. It might even capture events. But it passes that data back to it. </p>
<p>Codepen - Wine Label maker - SLOTs
<a href="${"https://codepen.io/sdras/pen/BpjQzE"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/BpjQzE</a>
Review this? It\u2019s really good.
<code>&lt;component :is=&quot;selected&quot;&gt;</code></p>
<p>Codepen - Tabs with Keep Alive</p>
<p>with <code>keep-alive</code>
<a href="${"https://codepen.io/sdras/pen/bd394c76a0aa9e44abc37e3d061aef1b"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/bd394c76a0aa9e44abc37e3d061aef1b</a></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Inactive components will be cached<span class="token operator">!</span> <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>keep<span class="token operator">-</span>alive<span class="token operator">></span>
<span class="token operator">&lt;</span>component <span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">"currentTabComponent"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>component<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>keep<span class="token operator">-</span>alive<span class="token operator">></span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"app-development"}"><a href="${"#app-development"}">App Development</a></h2>
<p>Benefits of a CLI</p>
<ul class="${"list"}"><li>Build processes</li>
<li>Lots of features</li>
<li>Libraries</li></ul>
<h3 id="${"lifecycle-hooks"}"><a href="${"#lifecycle-hooks"}">Lifecycle hooks</a></h3>
<figure><img src="${"https://i.imgur.com/0AMKEVu.png"}"></figure>
<p>created - great place to call APIs
mounted - great place to work on DOM operations
activated - associated for keep-alive</p>
<p>renderTracked - (new! v3) - when vDOM is rerendered, good for debugging
renderTriggered - (new! v3) - similar, but tells you what triggered the rerendering</p>
<p>Codepen - Lifecycle hooks example
<a href="${"https://codepen.io/sdras/pen/28d3a5b277ada8f9d1b0b34a2d73831c"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/28d3a5b277ada8f9d1b0b34a2d73831c</a></p>
<p>Lifecycle hook image for V2 <a href="${"https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram</a></p>
<h3 id="${"nuxt"}"><a href="${"#nuxt"}">Nuxt</a></h3>
<ul class="${"list"}"><li>Automatic Code Splitting</li>
<li>Server-side rendering /STatic/Jamstack/SPA</li>
<li>Powerful Routing System with Asynchronous Data</li>
<li>Lighthouse scores out of the gate</li>
<li>Automatic dynamic routes</li>
<li>Transplitation</li>
<li>Hot reloading </li>
<li>Pre-procesing: SASS, LESS</li>
<li>Write vue files </li></ul>
<p>In nuxt.config.js </p>
<p>You can add all these globals, like your <code>&lt;head&gt;</code>, type of mode, font imports. </p>
<h3 id="${"rendering-in-nuxt"}"><a href="${"#rendering-in-nuxt"}">Rendering in Nuxt</a></h3>
<p>When vue takes up anything that is dynamic, it\u2019s called hydration when it re-hydrates the data.</p>
<blockquote><p>Stephanie Walter did this great pen that shows, CSS transitions versus CSS animations, and what CSS transitions do is they interpolate two states, you go from one state to another state, but you\u2019re not allowed to create loops or other processes in between them.</p></blockquote>
<blockquote><p>In terms of CSS animations, we have the ability to access keyframes. So keyframes can gives us the ability to go from one state to another, just like transitions does, but it also has a lot more power, so we\u2019re able to do loops, we\u2019re able to put many different things, at different points in time.</p></blockquote>
<figure><img src="${"https://i.imgur.com/YIVcIRO.png"}"></figure>
<p>The transition component:
<a href="${"https://v3.vuejs.org/guide/transitions-enterleave.html"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://v3.vuejs.org/guide/transitions-enterleave.html</a></p>
<p>animate.css
<a href="${"https://animate.style/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://animate.style/</a></p>
<h2 id="${"animations"}"><a href="${"#animations"}">Animations</a></h2>
<p>Codepen - the difference between transitions and animations
<a href="${"https://codepen.io/stephaniewalter/pen/xxVgReM"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/stephaniewalter/pen/xxVgReM</a></p>
<p>The Transition Component: </p>
<blockquote><p>The transition component is really good for coordinating entrances and exits, of a component that has a conditional statement. So if you wrap that transition component, it\u2019s not a component that\u2019s mounting and unmounting, it won\u2019t really work. For anything else, any other thing, we can hook into our CSS and JavaScript the regular way.</p></blockquote>
<figure><img src="${"https://i.imgur.com/qdmVlbw.png"}"></figure>
<p><strong>Animating with CSS Classes</strong></p>
<p>codepen: <a href="${"https://codepen.io/sdras/pen/GRZyVQL"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/GRZyVQL</a></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">enter<span class="token operator">-</span>active<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"toasty"</span>
leave<span class="token operator">-</span>active<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bounceOut"</span>
<span class="token punctuation">.</span>toasty <span class="token punctuation">&#123;</span>
  toasty 1s ease both<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Still <code>&lt;transition /&gt;</code> component, but</p>
<p>(Simplest example)</p>
<p>Can also hook into CSS animation libraries this way</p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span>
    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ballmove<span class="token punctuation">"</span></span>
    <span class="token attr-name">enter-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bouncein<span class="token punctuation">"</span></span>
    <span class="token attr-name">leave-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rollout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Without using <code>&lt;transition /&gt;</code></p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123; shake: noActivated &#125;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noActivated = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noActivated<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Oh no!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>Codepen: Flip cards Animation:
<a href="${"https://codepen.io/team/Vue/pen/76e344bf057bd58b5936bba260b787a8"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/team/Vue/pen/76e344bf057bd58b5936bba260b787a8</a></p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;transition name=&quot;flip&quot; mode=&quot;out-in&quot;&gt;
  &lt;slot v-if=&quot;!isShowing&quot;&gt;&lt;/slot&gt;
  &lt;img v-else src=&quot;https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo14.jpeg&quot; /&gt;
&lt;/transition&gt;</code>`}<!-- HTML_TAG_END --></pre>
<p>Example: <a href="${"https://slides.com/sdrasner/intro-to-vue-3-5?token=YXhIwtpW#/26"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://slides.com/sdrasner/intro-to-vue-3-5?token=YXhIwtpW#/26</a></p>
<p><strong>Animating with Javascript hooks</strong></p>
<p>Codepen: <a href="${"https://codepen.io/sdras/pen/vYGVbxy"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/vYGVbxy</a></p>
<p>Using the <code>beforeEnter()</code> hook gives people a heads up that she is making a animation. </p>
<p>BASIC EXAMPLE: </p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"> <span class="token comment">&lt;!-- basic version --></span> 
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> 
  <span class="token attr-name">@enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>enterEl<span class="token punctuation">"</span></span>
  <span class="token attr-name">@leave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>leaveEl<span class="token punctuation">"</span></span>
  <span class="token attr-name">:css</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
 <span class="token comment">&lt;!-- put element here--></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
   <span class="token function">enterEl</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
     <span class="token comment">//entrance animation</span>
     <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token function">leaveEl</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">//exit animation</span>
    <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>COMPLEX EXAMPLE:</p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> 
  <span class="token attr-name">@before-enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>beforeEnter<span class="token punctuation">"</span></span>
  <span class="token attr-name">@enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>enter<span class="token punctuation">"</span></span>
  <span class="token attr-name">@after-enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>afterEnter<span class="token punctuation">"</span></span>
  <span class="token attr-name">@enter-cancelled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>enterCancelled<span class="token punctuation">"</span></span>

  <span class="token attr-name">@before-leave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>beforeLeave<span class="token punctuation">"</span></span>
  <span class="token attr-name">@leave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>leave<span class="token punctuation">"</span></span>
  <span class="token attr-name">@after-leave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>afterLeave<span class="token punctuation">"</span></span>
  <span class="token attr-name">@leave-cancelled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>leaveCancelled<span class="token punctuation">"</span></span>
  <span class="token attr-name">:css</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
 
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"> <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token function">beforeEnter</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      gsap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">transformPerspective</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
        <span class="token literal-property property">perspective</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
        <span class="token literal-property property">transformStyle</span><span class="token operator">:</span> <span class="token string">"preserve-3d"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">autoAlpha</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token function">enter</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token operator">...</span>
      gsap<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"drop"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> wordCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        tl<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>split<span class="token punctuation">.</span>words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
          <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">1.5</span><span class="token punctuation">,</span>
          <span class="token literal-property property">z</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">150</span> <span class="token operator">-</span> <span class="token operator">-</span><span class="token number">150</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token operator">-</span><span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">ease</span><span class="token operator">:</span> <span class="token string">'bounce'</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token string">"drop+=0."</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i<span class="token operator">/</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token operator">...</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This fucking animation is so great:
<a href="${"https://github.com/sdras/page-transitions-travelapp"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/sdras/page-transitions-travelapp</a></p>
<h2 id="${"composition-api--custom-directives"}"><a href="${"#composition-api--custom-directives"}">Composition API &amp; Custom Directives</a></h2>
<p>Slides: <a href="${"https://slides.com/sdrasner/intro-to-vue-3-6?token=yidUZcRL#/9"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://slides.com/sdrasner/intro-to-vue-3-6?token=yidUZcRL#/9</a></p>
<p>Why we moved to Composition API. </p>
<p>Timeline of Evan You\u2019s \u201CWhy\u201D?
<a href="${"https://www.youtube.com/watch?v=Vp5ANvd88x0"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.youtube.com/watch?v=Vp5ANvd88x0</a></p>
<blockquote><p>Before we move on into that, I do wanna mention that Evan has a keynote about some of the key differences that he kind of goes through in this keynote, for all of the things that happened when he was kind of going from Vue 2 to Vue 3. And at one point we wrote everything in classes.</p></blockquote>
<blockquote><p>At one point we were thinking about moving in a direction and then we changed gears, and he reflects on all of those changes and what occurred. So you can see a timeline of all of those events. So, if you\u2019re interested in some of those changes and what made things go into that, especially things like how RFC review process worked, he goes into a lot of detail.</p></blockquote>
<blockquote><p>One of the things I wanted to share with you is that this took 2years, it\u2019s a whole rewrite, Vue 2 to Vue 3, even though the surface API is the same. There was 37 RFCs, [LAUGH] 2,000 commits, and a tremendous amount of work in sub-projects too. So this is just in the new repo, and then there\u2019s also new versions of other projects as well.</p></blockquote>
<h3 id="${"what-is-composition-api-trying-to-solve"}"><a href="${"#what-is-composition-api-trying-to-solve"}">What is Composition API trying to solve?</a></h3>
<p>It\u2019s a common situation: you have two components that are pretty similar, they share the same basic functionality, but there\u2019s enough that\u2019s different about each of them that you come to a crossroads: do I split this component into two different components? Or do I keep one component, but create enough variance with props that I can alter each one?</p>
<figure><img src="${"https://i.imgur.com/B4qlm07.png"}"></figure>
<p>This was a Vue solution with Functional Programming.</p>
<p>It\u2019s called the composition API because we compose with it. </p>
<blockquote><p>Composition API allows you to encapsulate one piece of functionality so that you can use it in different components throughout the application.</p></blockquote>
<blockquote><p>If written correctly, they are pure- they don\u2019t modify or change things outside of the function\u2019s scope, so you will reliably always receive the same value with the same inputs on multiple executions.</p></blockquote>
<p>Codepen versions \u2014  <a href="${"https://codepen.io/sdras/pen/ed762c954ff67f56c47de955b754805c"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/ed762c954ff67f56c47de955b754805c</a></p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Do you like tacos?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yes<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yes<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tacos<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> yes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tacos<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> no<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tacos<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tacos === <span class="token punctuation">'</span>yes<span class="token punctuation">'</span><span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>thumbs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u{1F44D}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>you're a monster<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">tacos</span><span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>Vue 3 with Composition API:
<a href="${"https://codepen.io/sdras/pen/45492786305a158d50f5264867959343"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/sdras/pen/45492786305a158d50f5264867959343</a></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>h3<span class="token operator">></span>Do you like tacos<span class="token operator">?</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"radio"</span> id<span class="token operator">=</span><span class="token string">"yes"</span> value<span class="token operator">=</span><span class="token string">"yes"</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"tacos"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"no"</span><span class="token operator">></span> yes<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
  <span class="token operator">&lt;</span>br<span class="token operator">></span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"radio"</span> id<span class="token operator">=</span><span class="token string">"no"</span> value<span class="token operator">=</span><span class="token string">"no"</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"tacos"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"no"</span><span class="token operator">></span> no<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>

  <span class="token operator">&lt;</span>br<span class="token operator">></span>
    <span class="token operator">&lt;</span>p v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"tacos === 'yes'"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"thumbs"</span><span class="token operator">></span>\u{1F44D}<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"tacos === 'no'"</span><span class="token operator">></span>you're a monster<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> ref <span class="token punctuation">&#125;</span> <span class="token operator">=</span> Vue<span class="token punctuation">;</span>

<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> tacos <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
      tacos
    <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"comparison-of-options-api-vs-composition-api"}"><a href="${"#comparison-of-options-api-vs-composition-api"}">Comparison of Options API vs Composition API</a></h3>
<p>Sandbox
<a href="${"https://codesandbox.io/s/simple-options-api-importing-composition-api-yfhpv?from-embed"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codesandbox.io/s/simple-options-api-importing-composition-api-yfhpv?from-embed</a></p>
<p>The new script Setup &amp; Composition Resources</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;script setup&gt;
  const state = reactive(&#123;
    count: 0
  &#125;)

  onMounted(() =&gt; &#123;
    console.log(state.count)
  &#125;)

  return &#123;
    state
  &#125;
&lt;/script&gt;
</code>`}<!-- HTML_TAG_END --></pre>
<p>Links:
<a href="${"https://v3.vuejs.org/guide/composition-api-introduction.html"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://v3.vuejs.org/guide/composition-api-introduction.html</a></p>
<p>Usecases - <a href="${"https://github.com/antfu/vueuse"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/antfu/vueuse</a></p>
<h2 id="${"vuex"}"><a href="${"#vuex"}">Vuex</a></h2>
<p>LAST PAGE: <a href="${"https://frontendmasters.com/courses/vue-3/vuex/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://frontendmasters.com/courses/vue-3/vuex/</a></p>
<p><a href="${"https://slides.com/sdrasner/intro-to-vue-3-7?token=YvT8ZUzV#/1/0/3"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://slides.com/sdrasner/intro-to-vue-3-7?token=YvT8ZUzV#/1/0/3</a></p>
<p>What is it: </p>
<ul class="${"list"}"><li>It\u2019s a centralized store for sharing data and logic, and even shared methods, or async. You can think about it a little bit like it\u2019s the brains of the application. </li>
<li>It\u2019s really good for unidirectional data flow. So we\u2019re not throwing things up and down and around.</li>
<li>We have all of that state in one place. Remember, we talked a little bit before about making sure that we\u2019re not changing things in multiple spots, and we know who truly owns the state of something. </li></ul>
<p>Origin:
It\u2019s built off of the concept of Redux, a lot of the kind of flux application architecture.
So flux application architecture came first. Then Redux worked off of that. And then Vue worked off of Redux, and kind of simplified the API just a little bit, so it\u2019s similar to Redux. You could still use Redux, if you like. But Vuex is really what I recommend for Vue applications.</p>
<p>Why: </p>
<blockquote><p>So why? In a complex single page application, passing state between many different components, and especially deeply nested, or sibling components can get complicated very quickly. Having one centralized place to access your data can help you stay organized. Before when we were doing those amid examples, you could see that were passing things down, passing things back up.</p></blockquote>
<blockquote><p>But what if you\u2019re in the state where you have to pass it up two times, or you have to pass it down two times, or if you have to pass it up and back down? Or what if there\u2019s something that many, many components need to know about all at the same time?</p></blockquote>
<blockquote><p>So having all of that in one place, and then giving it to the components as they need, it makes a lot of sense. It keeps everything really organized. And that can be really, really helpful for working with applications. When would you use it? Sometimes people just say you just know.</p></blockquote>
<p><strong>When to use it?</strong></p>
<p>1 - When you have multiple instances of children/siblings communicating
2 - When you want to see the entire satte organized in one place.</p>
<p>*<em>When not to use it:</em></p>
<p>1 - You have, like I just mentioned, multiple pieces of people kind of talking around the application. I would still use emit for examples like a select that I need to use over and over again, because I wanna keep that select kind of state encapsulated, even if I want the parent component of the select to know about something.</p>
<p>2 - I don\u2019t necessarily wanna hold that in the store, because, again, I don\u2019t want it to be brittle.</p>
<p>3 - If you put too much things into the store, it becomes too much.</p>
<p><strong>Keywords:</strong></p>
<ul class="${"list"}"><li><code>State</code> is what you might expect: the state of the application. Similar to how we use data in the components.</li></ul>
<p>(read)
this.$store.state.nameofthing</p>
<ul class="${"list"}"><li><code>Getters</code> will make values able to show statically in our templates. In other words, getters can read the value, but not mutate the state.</li></ul>
<p>(read)
this.$store.getters.nameofthing</p>
<ul class="${"list"}"><li><code>Mutations</code> will allow us to update the state, but they will always be synchronous. Mutations are the only way to change data in the state in the store.</li></ul>
<p>(write)
this.$store.commit.nameofthing</p>
<ul class="${"list"}"><li><code>Actions</code> will allow us to update the state, asynchronously, but will use an existing mutation. This can be very helpful if you need to perform a few different mutations at once in a particular order, or reach out to a server.</li></ul>
<p>(write)
this.$store.dispatch.nameofthing</p>
<p>store pattern:
v-store </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">'vuex'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>v-store 2 (nuxt)</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">state</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'myvalue'</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token function-variable function">getterValue</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>value
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token function-variable function">updateValue</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    state<span class="token punctuation">.</span>value <span class="token operator">=</span> payload
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token function">updateActionValue</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> commit <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'updateValue'</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// abstract example: </span>
Basic Abstract Example

<span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token comment">//showing things, not mutating state</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token function-variable function">tripleCounter</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>counter <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token comment">//mutating the state</span>
  <span class="token comment">//mutations are always synchronous</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">//showing passed with payload, represented as num</span>
    <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      state<span class="token punctuation">.</span>counter <span class="token operator">+=</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> 
  <span class="token comment">//commits the mutation, it's asynchronous</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// showing passed with payload, represented as asynchNum (an object)</span>
    <span class="token function-variable function">asyncIncrement</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> commit <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> asyncNum</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        <span class="token comment">//the asyncNum objects could also just be static amounts</span>
        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'increment'</span><span class="token punctuation">,</span> asyncNum<span class="token punctuation">.</span>by<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> asyncNum<span class="token punctuation">.</span>duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>In main.js</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> store <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./store/index'</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">store</span><span class="token operator">:</span> store<span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;App/>'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> App <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>getting all the state from the store: </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// you can use a spread operator, useful when you have to work with a lot of state/getters/mutations/actions:</span>

<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> mapState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token comment">// map this.count to this.$store.state.count</span>
      <span class="token string">'count'</span><span class="token punctuation">,</span> 
      <span class="token string">'posts'</span><span class="token punctuation">,</span>
      <span class="token string">'items'</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>A vuex store example:
<a href="${"https://github.com/sdras/ecommerce-netlify/blob/main/store/index.js"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/sdras/ecommerce-netlify/blob/main/store/index.js</a></p>
<p>RANDOM NOTES: </p>
<p>Tip 1 - key
:key needs to be unique to the entire dom. </p>
<p>Tip 2 - keycode
TIL: keycodes for keyboard stuff is being depreciated.
<a href="${"https://v3.vuejs.org/guide/migration/keycode-modifiers.html#_3-x-syntax"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://v3.vuejs.org/guide/migration/keycode-modifiers.html#_3-x-syntax</a></p>
<p>The actual notes: <a href="${"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode</a></p>
<p>tip 3 - hsl
hsl, hue is a big circle and great for color generation. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">backgroundColor: &#96;hsl($&#123;x&#125;, 80%, 50%)&#96; </code>`}<!-- HTML_TAG_END --></pre>
<p>tip 4 - Vue is now tree-shaking.
Say if you\u2019re not using animation, then it gets removed.
Compared to Vue2, which compiles it regardless. </p>
<p>tip 5 - animation
PROTIP: It\u2019s the opposite with animation: ease-out is better for easing in. ease-in is better for easing out.</p>
<p>tip 6 - animations with margin is bad.
Use translate, which is hardware accelleration. </p>`;
    }
  })}`;
});
export { Week_nine_intro_to_vue_svelte as default, metadata };
