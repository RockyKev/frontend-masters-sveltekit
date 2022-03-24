import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-ab845620.js";
export { l as load } from "../../../chunks/_layout-ab845620.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-3d93c575.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Nine - Building Apps with Vue & Nuxt",
  "created": "2022-01-03T00:00:00.000Z",
  "summary": "Building Applications with Vue & Nuxt",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_nine_building_applications_vue_nuxt_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Source: <a href="${"https://frontendmasters.com/courses/vue-nuxt-apps/introduction/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://frontendmasters.com/courses/vue-nuxt-apps/introduction/</a>
Sarah Drasner </p>
<h2 id="${"introduction"}"><a href="${"#introduction"}">Introduction</a></h2>
<ul class="${"list"}"><li><p>I like games because there\u2019s a lot of state management in games. </p></li>
<li><p>Then a food ordering application. </p>
<ul class="${"list"}"><li>Slots </li>
<li>Dynamic Pages</li>
<li>Car logic</li>
<li>Validation </li></ul></li>
<li><p>Composition API</p></li></ul>
<p>Link to resource:
<a href="${"https://github.com/sdras/building-web-apps-with-vue"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/sdras/building-web-apps-with-vue</a></p>
<p>SLIDES: <a href="${"https://slides.com/sdrasner/building-vue-apps-3-foodapp?token=DiquCMbB"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://slides.com/sdrasner/building-vue-apps-3-foodapp?token=DiquCMbB</a></p>
<p>VSCODE Snippets: <a href="${"https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets</a></p>
<p>TODO: How to read API.  <a href="${"https://www.netlify.com/guides/creating-an-api-with-aws-lambda-dynamodb-and-api-gateway/api-gateway/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.netlify.com/guides/creating-an-api-with-aws-lambda-dynamodb-and-api-gateway/api-gateway/</a></p>
<p>Working with SVG Graphics in Vue:</p>
<figure><img src="${"https://i.imgur.com/guhYfyI.png"}"></figure>
<p>She made a single svg in Photoshop.
She labeled them correctly, put them into folders\u2026
Then she exported it as a SVG.
That puts them into IDs.
Then she can target them directly.</p>
<p>The other option is she\u2019s just puting the SVG directly into a Vue Component.</p>
<h2 id="${"quiz-game-app"}"><a href="${"#quiz-game-app"}">Quiz Game App</a></h2>
<p>SLIDES: <a href="${"https://slides.com/sdrasner/vueapps2?token=oePuyn8o"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://slides.com/sdrasner/vueapps2?token=oePuyn8o</a></p>
<p>Repo: <a href="${"https://github.com/sdras/building-web-apps-with-vue/tree/main/game-problem"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/sdras/building-web-apps-with-vue/tree/main/game-problem</a></p>
<p>You might have to <code>npm i node-sass sass-loader</code></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
	<span class="token literal-property property">uiState</span><span class="token operator">:</span> <span class="token string">'start'</span><span class="token punctuation">,</span>
	<span class="token comment">// ...</span>

<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>I like writing strings in <code>uiState</code> instead of booleans because you can then manage your state with a specific \u2018state\u2019, rather than a bunch of booleans checking it. </p>
<p>Things she did: </p>
<ol class="${"list"}"><li>She put the data directly into the Vuex store. </li>
<li>In the computed properties, she\u2019s using <code>mapState[]</code> to bring data from the store/index.js\` </li></ol>
<p>She creates a GamestateStart.vue, which changes based on the uiState. </p>
<p><code>gsap</code> Greensock is stable with every browser. Using transform is different for every browser. </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> gsap <span class="token keyword">from</span> <span class="token string">"gsap"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> mapState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"vuex"</span><span class="token punctuation">;</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">&#123;</span>

	<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"score"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token function">score</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			gsap<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token string">'#needle'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
				<span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span> 
				<span class="token literal-property property">rotation</span><span class="token operator">:</span> newValue<span class="token punctuation">,</span> 
				<span class="token literal-property property">transformOrigin</span><span class="token operator">:</span> <span class="token string">"50% 100%"</span> <span class="token comment">// she changed it to 50% 87%		</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// She also adjust the size of the score to fudge the numbers. // https://github.com/sdras/building-web-apps-with-vue/blob/main/game-solution/src/store/index.js#L61</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></code>`}<!-- HTML_TAG_END --></pre>
<p><code>Math.sign(state.score)</code> to safely convert a number into a -1 or +1.
<a href="${"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign</a></p>
<p>Fisher-Yates is the shuffle that lodash does.
More info: <a href="${"https://bost.ocks.org/mike/shuffle/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://bost.ocks.org/mike/shuffle/</a>
Her snippet: <a href="${"https://github.com/sdras/building-web-apps-with-vue/blob/main/game-solution/src/App.vue#L153"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/sdras/building-web-apps-with-vue/blob/main/game-solution/src/App.vue#L153</a></p>
<p>In a SVG:
Think of <code>defs</code>, think of them as a staging area. </p>
<p>masking vs clipping:
<a href="${"https://css-tricks.com/masking-vs-clipping-use/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://css-tricks.com/masking-vs-clipping-use/</a></p>
<p>Look at this amazing code:
codepen - xray skeleeton:
<a href="${"https://codepen.io/noeldelgado/pen/ByxQjL"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/noeldelgado/pen/ByxQjL</a></p>
<h2 id="${"the-food-app"}"><a href="${"#the-food-app"}">The Food App</a></h2>
<h3 id="${"building-a-food-app-with-nuxt"}"><a href="${"#building-a-food-app-with-nuxt"}">Building a Food App with Nuxt</a></h3>
<p>The project: nuxtfoodapp.netlify.app</p>
<p>Nuxt -
it\u2019s a meta-framework</p>
<ul class="${"list"}"><li>Excellent performance<ul class="${"list"}"><li>Tree shaking</li></ul></li>
<li>Automatic generated Dynamic Routes </li>
<li>Automatic Routing</li>
<li>SSR / Jamstack / SPA rendering </li>
<li>Elegant defaults &amp; great organization </li></ul>
<p>Nuxt comes with the vuex store by default. </p>
<p>Folder structure:
Layout - We can put it in this layouts default, and then it will persist on every page. And that\u2019s really nice because we can also create different types of layouts as we work middle ware is, you\u2019re gonna see in a second, we\u2019re gonna make pages by simply putting a view file in a pages directory.</p>
<p>Hero generator:
<a href="${"https://hero-generator.netlify.app/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://hero-generator.netlify.app/</a></p>
<p>Middleware -
[00:05:31]
So in middle ware, you have access to those routes, and that\u2019s where you can apply some logic. So middle ware is a great place to do things like auth. Middle ware is a great place to do things like tell the store about the route changing or something like that.</p>
<p>[00:05:45]
That would be done in middleware. And I mentioned this about the pages directory, we have an index page. And we have this kind of defaults container. You see this logo being brought in, just like we did with the view CLI and we are able to have this kind of defaults, but what\u2019s really nice about it Is that we have, a base index file and all of a sudden we have a page.</p>
<p>plugin - it\u2019s like mounting in the main JS folder. </p>
<p>static - any static files. </p>
<p>in nuxt.config.js:
head, global css, plugins
<a href="${"https://nuxtjs.org/docs/directory-structure/nuxt-config/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://nuxtjs.org/docs/directory-structure/nuxt-config/</a></p>
<h3 id="${"vuex-store"}"><a href="${"#vuex-store"}">Vuex Store</a></h3>
<p>Actions. Actions can\u2019t change the state, actions can commit mutations that change the state. But actions are good for asynchronous logic.</p>
<p>Mutations are the only thing that can change the state. So in our game application, they\u2019re synchronous.</p>
<p>So in this case, what we\u2019re going to do is we\u2019re going to use an action to do that kind of async stuff, and that action will call a commit in the mutation.</p>
<h3 id="${"how-to-make-a-api"}"><a href="${"#how-to-make-a-api"}">How to make a API:</a></h3>
<p><a href="${"https://www.netlify.com/guides/creating-an-api-with-aws-lambda-dynamodb-and-api-gateway/api-gateway/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.netlify.com/guides/creating-an-api-with-aws-lambda-dynamodb-and-api-gateway/api-gateway/</a></p>
<p>The endpoint:
<a href="${"https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants</a></p>
<p>There\u2019s a api key and you also need to set up stuff</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">try</span> <span class="token punctuation">&#123;</span>

	<span class="token comment">// check if the data is already there or not</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span>fooddata<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span>

	<span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token constant">URLHERE</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
	<span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
		<span class="token string-property property">'Content-Type'</span> <span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span> 
		<span class="token string-property property">'x-api-key'</span> <span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">AWS_API_KEY</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">&#123;</span>
		<span class="token comment">// errors here</span>
	<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>For local vs server: </p>
<p>she created a <code>getfood.server.js</code> in the plugins folder.
So she can get the API code. </p>
<p>NOTES:
for props arrays -
YOU MUST return an return value. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">type: Array, 
default: () =&gt; [&quot;tacos&quot;, &quot;pizza&quot;, &quot;dim sum&quot;]</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"filtering-data--adding-dynamic-pages"}"><a href="${"#filtering-data--adding-dynamic-pages"}">Filtering Data &amp; Adding Dynamic Pages</a></h2>
<p>Performance thoughts </p>
<p>Using a for loop to filter, rather than <code>filter</code>. </p>
<h2 id="${"vuex"}"><a href="${"#vuex"}">Vuex</a></h2>
<h3 id="${"getters"}"><a href="${"#getters"}">Getters</a></h3>
<p>[00:05:14]
But don\u2019t overuse getters. In other words, if one component Is just thinking about itself. You don\u2019t necessarily have to put it in the store in as a getter in order to do so. The reason why I caution against that is for big enterprise apps at scale. What can happen is people are using that Vuex Store not just a place to keep the centralized state data.</p>
<p>[00:05:37]
They\u2019re also using it as a self documenting place to understand the brains of the application. So if you put tons of getter information in that store. You\u2019re causing people to kind of look through a ton of information to understand what\u2019s going on for the application for the whole, for that full application.</p>
<p>[00:05:56]
It doesn\u2019t matter too much with a small application, but you\u2019ll start to see this that Vuex enterprise apps at scale that we need to kind of keep the Vuex Store a little bit more modularized. And Divya has a great course that shows how to use Vuex modules and goes into more depth there as well.</p>
<h2 id="${"forms--composition-api"}"><a href="${"#forms--composition-api"}">Forms &amp; Composition API</a></h2>
<p>SLIDES: <a href="${"https://slides.com/sdrasner/building-vue-apps-4-compositionapi?token=IAnBmcyn"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://slides.com/sdrasner/building-vue-apps-4-compositionapi?token=IAnBmcyn</a></p>
<h2 id="${"validation"}"><a href="${"#validation"}">Validation</a></h2>
<p>It gives you a few things to check and hide things.</p>
<p>Vue validate blog: <a href="${"https://css-tricks.com/form-validation-in-under-an-hour-with-vuelidate/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://css-tricks.com/form-validation-in-under-an-hour-with-vuelidate/</a></p>
<h2 id="${"migration-to-v3-composition-api"}"><a href="${"#migration-to-v3-composition-api"}">Migration to V3 Composition API</a></h2>
<p>It\u2019s about reuable components or logic
to remove mixins
It\u2019s about encapsulation</p>
<p>Clear what\u2019s being exported. Within mixins, it\u2019s not clear what is given. </p>
<p>inspired by React Hooks</p>
<p><a href="${"https://v3.vuejs.org/guide/migration/introduction.html"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://v3.vuejs.org/guide/migration/introduction.html</a></p>
<p>Also library of recipes
<a href="${"https://vueuse.org/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://vueuse.org/</a></p>
<p>TIPS:
Reducer - <a href="${"https://css-tricks.com/understanding-the-almighty-reducer/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://css-tricks.com/understanding-the-almighty-reducer/</a></p>`;
    }
  })}`;
});
export { Week_nine_building_applications_vue_nuxt_svelte as default, metadata };
