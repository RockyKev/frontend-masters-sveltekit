import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-b8ce1441.js";
export { l as load } from "../../../chunks/_layout-b8ce1441.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-c29f9c7c.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Ten - Vuex",
  "created": "2022-01-10T00:00:00.000Z",
  "summary": "Introduction to Vue 3",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_ten_vuex_for_intermediate_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Divya Tagtachian</p>
<p>REPO: <a href="${"https://github.com/shortdiv/frontend-masters-vuex"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/shortdiv/frontend-masters-vuex</a></p>
<p><a href="${"https://frontendmasters.com/courses/vuex/introduction/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://frontendmasters.com/courses/vuex/introduction/</a></p>
<p>SLIDES:
Vuex 1: Introduction to State Management
<a href="${"https://slides.com/shortdiv/vuex-1"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://slides.com/shortdiv/vuex-1</a></p>
<p>Vuex 2: Vuex; The Good Parts\u2014State, Getters, Actions, Mutations
<a href="${"https://slides.com/shortdiv/vuex-2"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://slides.com/shortdiv/vuex-2</a></p>
<p>Vuex 3: Getting Vuex State into SFCs
<a href="${"https://slides.com/shortdiv/vuex-3"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://slides.com/shortdiv/vuex-3</a></p>
<p>Vuex 4: Composing Vuex Actions
<a href="${"https://slides.com/shortdiv/vuex-4"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://slides.com/shortdiv/vuex-4</a></p>
<p>Vuex 5: Vuex Modules
<a href="${"https://slides.com/shortdiv/vuex-5"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://slides.com/shortdiv/vuex-5</a></p>
<p>Vuex 6: Vuex Plugins
<a href="${"https://slides.com/shortdiv/vuex-6"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://slides.com/shortdiv/vuex-6</a></p>
<p>Vuex 7: Vuex + Vue Router
<a href="${"https://slides.com/shortdiv/vuex-7"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://slides.com/shortdiv/vuex-7</a></p>
<p>Fundamentals of Vuex
Vuex + Vue (SFCs)
Vuex + Vue Router
Composing Vuex
Vuex Modules
Vuex Plugins
Normalizing State</p>
<figure><img src="${"https://i.imgur.com/983sTeQ.png"}"></figure>
<p>What is Vuex?</p>
<p>Centralized data store for shared data, logic, and methods, with rules ensuring that the state can only be mutated in a predictable fashion.</p>
<figure><img src="${"https://i.imgur.com/cLgbUyC.png"}"></figure>
<p>State - Single source of truth for store state
Actions - Similar to mutations, but it commits mutations
Mutations - The only way to change store state
Getters - Computer derived state based on store state</p>
<blockquote><p>[00:01:32]
And so, the action is what? Is how the application decides or how the store decides what to do with that particular event. This is also a way back in APIs, can come in handy. It\u2019s where you\u2019re essentially calling to a database, or reading from a data base. And that\u2019s what happens within actions itself.</p></blockquote>
<p>Codepen:
<a href="${"https://codepen.io/shortdiv/pen/zYGoVwe"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://codepen.io/shortdiv/pen/zYGoVwe</a></p>
<p>Moving state to Vuex</p>
<figure><img src="${"https://i.imgur.com/hIcrOsU.png"}"></figure>
<figure><img src="${"https://i.imgur.com/FvqJtFp.png"}"></figure>
<h2 id="${"state--getters"}"><a href="${"#state--getters"}">State &amp; Getters</a></h2>
<p>Responsibilities &amp; Statement management system</p>
<p>State - centralize state exist</p>
<p>Actions - Make db calls, fetch APIs
Async</p>
<p>mutation - where state is mutated
It\u2019s strictly sync. </p>
<p>getters - And then, getters is sort of this sense of checking over the state or updating how the state renders on the front end. Getter is cached if nothing changed. It doesn\u2019t change.</p>
<p>Components never change the state directly. Only the store. </p>
<figure><img src="${"https://i.imgur.com/13UyJvL.png"}"></figure>
<figure><img src="${"https://i.imgur.com/pNEx3LH.png"}"></figure>
<p>It\u2019s the name of the mutation, and a payload. </p>
<p>You want to know if something is async for the frontend. The user might click multiple times. </p>
<figure><img src="${"https://i.imgur.com/0P8ymnf.png"}"></figure>
<p>Notice - in Line 23 - It sets the state in the frontend.
Then it does the line 26 commit - to pass the data.
Finally, it turns off the loading. </p>
<figure><img src="${"https://i.imgur.com/owo1Hpo.png"}"></figure>
<figure><img src="${"https://i.imgur.com/n7W2ePU.png"}"></figure>
<h2 id="${"store"}"><a href="${"#store"}">Store</a></h2>
<p>Repo: <a href="${"https://github.com/shortdiv/vuex-sfc"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/shortdiv/vuex-sfc</a>
<code>npm i</code></p>
<p>The idea is to move the store out of the component and into the store.
<a href="${"https://github.com/shortdiv/vuex-sfc/blob/step-0/src/components/VendingMachineAdmin.vue"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/shortdiv/vuex-sfc/blob/step-0/src/components/VendingMachineAdmin.vue</a></p>
<figure><img src="${"https://i.imgur.com/rl0XkNk.png"}"></figure>
<p>commit
getter
state
dispatch</p>
<h2 id="${"helpers--actions"}"><a href="${"#helpers--actions"}">Helpers &amp; Actions</a></h2>
<figure><img src="${"https://i.imgur.com/bE4epir.png"}"></figure>
<p>It\u2019s grabbing the commit. </p>
<p>Destructuring context
<a href="${"https://github.com/shortdiv/vuex-sfc/blob/step-1/src/store/index.js"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/shortdiv/vuex-sfc/blob/step-1/src/store/index.js</a></p>
<p>You have helpers like:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span>
	mapState<span class="token punctuation">,</span>
	mapActions<span class="token punctuation">,</span> 
	mapGetters<span class="token punctuation">,</span>
	mapMutations
<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"vuex"</span></code>`}<!-- HTML_TAG_END --></pre>`;
    }
  })}`;
});
export { Week_ten_vuex_for_intermediate_svelte as default, metadata };
