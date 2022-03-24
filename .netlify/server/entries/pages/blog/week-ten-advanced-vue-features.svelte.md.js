import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-b8ce1441.js";
export { l as load } from "../../../chunks/_layout-b8ce1441.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-c29f9c7c.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Ten - Advanced Vue",
  "created": "2022-01-10T00:00:00.000Z",
  "summary": "Advanced Vue.js Features from the Ground Up",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_ten_advanced_vue_features_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Vue.js Features from the Ground Up</p>
<p>COURSE: <a href="${"https://frontendmasters.com/courses/advanced-vue/introduction/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://frontendmasters.com/courses/advanced-vue/introduction/</a>
Evan You</p>
<p>SLIDES: <a href="${"https://docs.google.com/presentation/d/1TgDx4DN8YqfdndYWMovBcQVPWyKLTNcbo1YS8XlLo9o/edit"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://docs.google.com/presentation/d/1TgDx4DN8YqfdndYWMovBcQVPWyKLTNcbo1YS8XlLo9o/edit</a></p>
<h2 id="${"react"}"><a href="${"#react"}">React</a></h2>
<p>What does reactivity mean?
How changing state reflects changing in the DOM. </p>
<p>We have 2 variables: </p>
<p>How do we keep variable A and variable B stay together?</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">a = 2
b = a * 10</code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">onStateChanged() =&gt; &#123;
	view = render(state)
&#125;)</code>`}<!-- HTML_TAG_END --></pre>
<blockquote><p>[00:03:53] And that function is called a set state. Set state simply takes the new state, and replaces the old state, and then calls update function again. Right and if you\u2019ve used React you will find this extremely familiar because React forces you to trigger on state changes of your setState.</p></blockquote>
<blockquote><p>[00:04:12] And this is essentially what React is all about. Not all about but this is in a nutshell how React works, right? So we\u2019ve noticed something different in the view context or in the angular context that we can, in fact, directly manipulate the state without having to call set state.</p></blockquote>
<p>Task:
Create Getters &amp; Setters </p>
<p><a href="${"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty</a></p>
<p>WTF?
<code>enumerable</code> ?</p>
<p>Yikes, this is so over my head: </p>
<p>So what I gathered from it\u2026</p>
<ol class="${"list"}"><li>You create a function that has getters and setters. </li>
<li>Then you create an observer, to watch for changes. </li></ol>
<h2 id="${"writing-plugins"}"><a href="${"#writing-plugins"}">Writing Plugins</a></h2>
<p><code>Vue.use(plugin)</code></p>
<p>A plugin is something that just takes Vue, and does something with the Vue itself.</p>
<p>Mixin is a global API that applies to every instance. </p>
<p>It\u2019s a better idea to wrap global mixins in a plugin interface. </p>
<p>Another common use-case is the $options property. </p>
<p>What\u2019s the value of a plugin?</p>
<figure><img src="${"https://i.imgur.com/RhPvGhX.png"}"></figure>
<p><code>rules</code> is not a real method in vue. </p>
<p>But to call it, you\u2019ll have to write </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>rules<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token comment">// we can do something </span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>But you\u2019ll have to do that with every single component.</p>
<p>Instead, it\u2019ll be better do to this:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">myPlugin</span> <span class="token operator">=</span> <span class="token parameter">Vue</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span> <span class="token punctuation">&#123;</span>
		<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>rules<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
				<span class="token comment">// we can do something </span>
			<span class="token punctuation">&#125;</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token punctuation">&#125;</span>


</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"render-functions"}"><a href="${"#render-functions"}">Render Functions</a></h2>
<blockquote><blockquote><p>Evan You: So we talked about reactivity in the first section, and now we\u2019re talking about random functions, and random functions are essentially the other half of the puzzle that completes the whole reactivity rendering system in view itself. And in case you don\u2019t know render functions, view templates are in fact compiled into render functions under the hood.</p></blockquote></blockquote>
<figure><img src="${"https://i.imgur.com/m90J4sd.png"}"></figure>
<p>This is how Vue works under the hood. </p>
<ol class="${"list"}"><li>Your jsx compiles into JS code. </li>
<li>It returns that JS code, creating a virtual dom behind the scene.</li>
<li>While generating a actual dom. </li></ol>
<p>When things start getting \u2018reactive\u2019, that\u2019s the virtual dom moving around.</p>
<figure><img src="${"https://i.imgur.com/DeSIXBc.png"}"></figure>
<p>So this is how it moves so fast.
Virtual dom compares diffs from old virtual dom.
then reapplies it. We apply the minimal amount of changes. </p>
<p>ACTUAL DOM
<code>document.createELement(&#39;div&#39;)</code></p>
<p>VIRTUAL DOM
<code>vm.$createElement(&#39;div&#39;)</code></p>
<p>A real div node is very heavy, with lots of features behind it.</p>
<p>When we say, \u201CTouching th dom is slower.\u201D</p>
<figure><img src="${"https://i.imgur.com/klLV4Vo.png"}"></figure>
<p>It literally looks like a object. </p>
<p>Creating a 1000 cheap virtual dom elements is way faster. </p>
<blockquote><p>Virtual DOM:
(Essentially) A lightweight JavaScript data format to represent what the actual DOM should look like at a given point in time</p></blockquote>
<p>If we, say, use inner HTML to update our app, we\u2019re essentially throwing away all the previous DOM nodes, real DOM nodes, regenerating all the real DOM nodes again. So this cost is much much more expensive than, say, just generating a new virtual DOM snapshot. And inner HTML also has a problem.</p>
<p>The Virtual DOM isn\u2019t just because it\u2019s faster, but because </p>
<blockquote><p>But a common misunderstanding is virtual DOM is what makes a lot of these frameworks fast. It does not. Virtual DOM is just a way to get around the limitations of the original DOM so that it enables this paradigm of declaratively composing what you want the DOM to look like.</p></blockquote>
<blockquote><p>Virtual DOM:
Decouples rendering logic from the actual DOM - enables rendering capabilities in non-browser environments, e.g. server-side and native mobile rendering.</p></blockquote>
<p>For all these JS frameworks \u2014 </p>
<blockquote><p>It doesn\u2019t need to ever touch the DOM. And in fact, if we abstract out these eventual connecting points, API\u2019s that touch the DOM and then sort of redirect them to other places.</p></blockquote>
<blockquote><p>We can create the same app running virtually in any environment that supports JavaScript, but it doesn\u2019t necessarily have to touch the DOM. Instead, it can talk to a native rendering engine, for example, iOS or Android. Or on the server side, we can turn the virtual DOM into strings or a string finder.</p></blockquote>
<figure><img src="${"https://i.imgur.com/z6RvzgH.png"}"></figure>
<p><strong>JSX vs Templates</strong></p>
<p>In Evan\u2019s opinion - they\u2019re the same thing.
People compare the two. </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">&#123;</span>
	<span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>We start with template API as the default.
But you can drop down to the Render Function API if you want. </p>
<p>Hyper Script is a script that creates HyperText, which is HTML.</p>
<p>Which is by convention, we shorten it to <code>h</code>. (As seen in the example above) </p>
<figure><img src="${"https://i.imgur.com/x7ZJbZQ.png"}"></figure>
<ol class="${"list"}"><li><p>Creating a div with some inner text. </p></li>
<li><p>Creating a div with a class on it, then inner text. </p></li>
<li><p>This is a div, with some children element, and some other stuff. </p></li></ol>
<p><code>h</code> can also directly render a component. </p>
<p>WTF:
Functional components versus stateful components?</p>
<p><strong>Stateful Components (normal components)</strong>
Stateful components are </p>
<p><strong>Functional Components</strong>
Functional components don\u2019t hold any state of their own. So it\u2019s kind of expended in line which makes it extremely cheap because there\u2019s no overhead of creating a backing instance, holding all these data properties in place and everything</p>
<p>Use case are when you have a lot of leaf nodes (a list), but inside they have don\u2019t much need for state \u2014 presentational components. or example, you\u2019re just rendering a button, or just rendering a static avatar or something.</p>
<p>If you have these presentational components which simply takes some data, takes some props in and renders some output depending on their props then this seems a perfect candidate for functional components.</p>
<p>And if these components are repeated in many places in your app, turning them into functional ones should boost the performance of an app. </p>
<figure><img src="${"https://i.imgur.com/Vgp1tG1.png"}"></figure>
<p>this render function creates the following: </p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>	
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>The goal is to create a div that a dynamic component. </p>
<p><strong>Higher Order Components</strong></p>
<p>A react thing. But let\u2019s go into it.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// Dynamic Component 

Vue.component(&#39;example&#39;, &#123;
	props; [&#39;ok&#39;], 
	render(h) &#123;
		return this.ok ? h(Foo) : h(Bar)
	&#125;
&#125;)

// Higher Order Components 
function withAvatarURL (InnerComponent) &#123;
	// you can create a cache so it&#39;s not always fetching here

	return &#123;
		props: [&#39;username&#39;],
		data () &#123;
			return &#123; url: &#96;http://via.placeholder.com/200x200&#96; &#125;
		&#125;,
		created() &#123;
			fetchURL(this.username, url =&gt; &#123;
				this.url = url
			&#125;)
		&#125;,
		render (h) &#123;
			return h(Avatar, &#123;
				props: &#123;
					src: this.url,
				&#125;
			&#125;
		&#125;
	&#125;
&#125;
</code>`}<!-- HTML_TAG_END --></pre>
<p>Provides a higher level of reusability. Easier to test, since there\u2019s no business logic. If you use a conditional Mixin, you\u2019re testing it twice.</p>
<blockquote><p>[00:05:26] So this is good, because it shows that it is a good encapsulation mechanism. The only interface we\u2019re using to talk between the parent and the child is view props. Because the way we communicate is so constrained. This make ensures that change in the inter implementation of this enhancer doesn\u2019t affect other parts in your code.</p></blockquote>
<blockquote><p>[00:05:49] This is critical, if you have a large team, a large project. And you want to make sure when you are changing things, you\u2019re not stepping on other people\u2019s toes, not accidentally breaking other things. The trick to that is, make sure this piece of code, finding contracts with other parts of the code base, is minimal.</p></blockquote>
<h2 id="${"state-management"}"><a href="${"#state-management"}">State Management</a></h2>
<p>State management didn\u2019t exist until Facebook and Flex. </p>
<p><strong>Why Vuex?</strong></p>
<blockquote><p>[00:06:26] For example, you grab some data from the backend API, and your page A needs that data, your page B also needs that data. And even worse, there could be two different components nested in very different, deeply nested component trees, but they still need to access the same piece of data.</p></blockquote>
<blockquote><p>[00:06:46] So the question becomes unclear which component should own the data, right, and eventually, you realize neither of them should own the data. The data should be hoisted out to be managed in a centralized place if the data is meant to be shared by multiple components across your app.</p></blockquote>
<p><strong>Difference between mutation and actions</strong></p>
<p><strong>Mutation</strong></p>
<ul class="${"list"}"><li>Must be synchron. Because devtools! </li>
<li>mutation is what changes the code. mutations\u2019 focus is just on dealing just with the state.</li>
<li>you know there\u2019s the time travel feature and we have snapshots of your state whenever a mutation happens. If you want to take snapshots then it is critical that the mutations be synchronous because you can compare the before and after immediately after the function is called</li>
<li>If a mutation can contain arbitrary asynchronous operations, then after you call the mutation you don\u2019t really know how long you have to wait until your state has actually changed.</li></ul>
<p><strong>Actions: </strong></p>
<ul class="${"list"}"><li>Async</li>
<li>Also inside actions you can do a lot of things like calling to external APIs, whereas your </li></ul>
<h2 id="${"routing"}"><a href="${"#routing"}">Routing</a></h2>
<p>hash API vs
HTML History API? </p>
<blockquote><p>So, we all know that in the browser there are two ways to do routing you can use a hash or you can use the HTML5 History API. HTML5 History API is better in the sense, it supports pop state and you get better looking URLs but it requires some sort of server configuration, so that when you directly visit a deep link, the server still renders the same static HTML page for your client-side router to pick up.</p></blockquote>
<h2 id="${"form-validation"}"><a href="${"#form-validation"}">Form Validation</a></h2>
<p>Two schools of thought.
Markup-based - Vee-validate
This is about declaring your rules inside the markup.</p>
<p>Model-based \u2014 Vuelidate
This is about declaring your rules inside of Javascript.</p>
<figure><img src="${"https://i.imgur.com/WrEKKXt.png"}"></figure>
<p>You can also set up an array of functions in JS land.
<code>validate: compose(greaterThan(5), allCaps())</code></p>
<p>You can set up watches</p>
<p>In <code>beforeCreate()</code>
The reactivity system hasn\u2019t been initialized.</p>
<blockquote><p>Evan You: So how do we implement that?
Evan You: Let\u2019s go back to the master branch and try to implement that. So remember for any plugin, we should have an install method which takes Vue as the argument.
Evan You: And, let\u2019s think about what we need to do for this plug-in.</p></blockquote>
<blockquote><p>[00:06:05] We need to be able to process this custom validation\u2019s object. So, that means we need to have a global mixing that injects the created hook into every component. And then we check if (this.$options.validations), this is where we need to do work, right?
Evan You: So some of the, let\u2019s see if we actually should use the created hook, right?</p></blockquote>
<blockquote><p>[00:06:42]
There\u2019s really, so some of you might start to think you can set up watchers in the created hook. Each of the properties run through the validations, and then set the data onto the $v right, that works. That could, indeed, work. But that feels very imperative. Is there a more declarative way to think about this?</p></blockquote>
<blockquote><p>[00:07:08]
The fact is, there is. So, let\u2019s look at this $v thing. What should it be? Should it be just an object on the instance that we can mutate? Or could it just be some declarative mapping from our current form state? So if we take that approach, let\u2019s actually mix it in as a computed property, right?</p></blockquote>
<figure><img src="${"https://i.imgur.com/ikUdCqI.png"}"></figure>
<p>You can do something like this to test if the value even exists:</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">Object.keys(rules || &#123;&#125;).forEach(key =&gt; &#123; // ... &#125;
</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"internationalization"}"><a href="${"#internationalization"}">Internationalization</a></h2>
<p>vue-i18n \u2014 It comes with performance cost. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;h1&gt; &#123;&#123; $t(&#39;welcome-message&#39;]&#125;&lt;/h1&gt;
&lt;button @click=&quot;changeLanguage(&#39;en&#39;)&quot;&gt;English&lt;/button&gt;</code>`}<!-- HTML_TAG_END --></pre>
<p>So this is not very performant since it has to run through the entire app to switch content, and can do it over again. You don\u2019t have to save all the JSON in one spot.</p>
<p>An alternative is to instead have multiple apps and just do it at compile time.
Essentially - 2+ versions with different languages, set at differnt URLs?</p>
<p>If performance gain is needed, do it.</p>
<figure><img src="${"https://i.imgur.com/MPEXSgt.png"}"></figure>
<p>Then wire it up using prototypical inheritance (Evan\u2019s recommended): </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">const i18nPlugin = &#123;
	install (Vue, locales) &#123;
		Vue.prototype.$t = function(id) &#123;
			return locales[this.$root.lang][id]
		&#125;	
	&#125;
&#125;
</code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">this.$root.lang // this starts the reactivity process </code>`}<!-- HTML_TAG_END --></pre>
<p>(Or you can do the mixin way)
There\u2019s no performance issue because it doesn\u2019t have to wire it up.</p>
<h2 id="${"wrapping-up-advanced-vuejs"}"><a href="${"#wrapping-up-advanced-vuejs"}">Wrapping up Advanced Vue.JS</a></h2>
<p>Web Components? </p>
<p>angular 2.04 uses web components, and the other falls back.</p>
<p>interop - what does that mean?</p>
<p>The Future: </p>
<blockquote><p>Evan You: Upcoming? One of the things we are gonna do is, the next big thing in you is probably a rewrite a build that only runs on latest modern browsers. Currently we have a lot of code that\u2019s dealing with legacy browsers, IE9 or stuff. Which sort of [COUGH][INAUDIBLE] Library itself and places a lot of restrictions, because we cannot use any of the latest ES features.</p></blockquote>
<blockquote><p>And it\u2019s kind of a pain, because when you know ESS set on map would be better suited for this case, but you cannot use it, so you have to [INAUDIBLE] Yourself, or use a less capable alternative in the library. So, I am pretty looking forward to the day where IE is just completely dead, so that I can drop everything about them.</p></blockquote>
<blockquote><p>And then we\u2019ll rewrite the reactivity system using ES 2015 proxies, which will be able to get rid of some of the gotchas we currently have in Vue, for example, adding new properties. I\u2019m gonna have to call vue.set if you were using properties, and you can also directly assign to indices into arrays without having to use Vue set again and you can delete properties.</p></blockquote>
<blockquote><p>And observation will be lazy by default, so there will be a lot of benefits if we are able to sort of both drop a lot of weight, and also improve the current system even more.</p></blockquote>`;
    }
  })}`;
});
export { Week_ten_advanced_vue_features_svelte as default, metadata };
