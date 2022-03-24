import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-ab845620.js";
export { l as load } from "../../../chunks/_layout-ab845620.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-3d93c575.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Ten - Production Grade Vue",
  "created": "2022-01-08T00:00:00.000Z",
  "summary": "Production-Grade Vue (Part 2)",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_ten_production_grade_vue_part_2_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Ben Hong
Netlify
<a href="${"https://frontendmasters.com/courses/production-vue/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://frontendmasters.com/courses/production-vue/</a></p>
<h2 id="${"composition-api"}"><a href="${"#composition-api"}">Composition API</a></h2>
<p>There\u2019s a Vue 2 Plugin for this as well. </p>
<p>The key problem Composition API is solving is reducing the cons that Mixins and Provide/Inject API does.</p>
<p>Currently:
Object API
Composition API</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"hello"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> currentCount <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>    <span class="token operator">&lt;</span>h2<span class="token operator">></span>Current Count <span class="token number">2</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> currentCount2 <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span> <span class="token operator">--</span><span class="token operator">></span>

        <span class="token operator">&lt;</span>h2<span class="token operator">></span>Current Count <span class="token number">2</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> state<span class="token punctuation">.</span>currentCount2 <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>Current Count <span class="token number">3</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> currentCount3 <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"incrementCount"</span><span class="token operator">></span>Click<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> reactive<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> toRefs <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"HelloWorld"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> String
    <span class="token punctuation">&#125;</span>
    <span class="token comment">// OPTIONS API</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
        <span class="token literal-property property">currentCount</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>currentCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>

    <span class="token comment">// COMPOSITION API - PART 1 </span>
    <span class="token comment">// Note: similar to data, but not reactive.</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// declare it</span>
        <span class="token keyword">const</span> currentCount2 <span class="token operator">=</span> <span class="token number">12</span>
        
        <span class="token comment">// return it</span>
        <span class="token keyword">return</span> <span class="token punctuation">&#123;</span> 
            currentCount2
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token comment">// COMPOSITION API - PART 2</span>
    <span class="token comment">// Note: similar to data, but not reactive.</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// declare it</span>
        <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
            <span class="token literal-property property">currentCount2</span><span class="token operator">:</span> <span class="token number">12</span>        
        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

        <span class="token comment">// if you declare it outside, you need ref</span>
        
        <span class="token keyword">const</span> currentCount3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> <span class="token function-variable function">incrementCount2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            state<span class="token punctuation">.</span>currentCount2<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
        
         <span class="token keyword">const</span> <span class="token function-variable function">incrementCount3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            currentCount2<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
        
        <span class="token comment">// return it</span>
        <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
            <span class="token comment">// notice it's not ...state</span>
            <span class="token comment">// toRefs(state),</span>
            state<span class="token punctuation">,</span>
            incrementCount2<span class="token punctuation">,</span> 
            currentCount3
        <span class="token punctuation">&#125;</span>    
    
<span class="token punctuation">&#125;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>The idea is that it starts to act closer to Javascript.</p>
<p>QUESTION: Should I use ref or reactive?
Use reactive as it\u2019s closer to Options API as a mental model. </p>
<h3 id="${"composition-modules"}"><a href="${"#composition-modules"}">Composition Modules</a></h3>
<p><code>composeables</code> is a common use. </p>
<p>But it\u2019s a bad term.
Composable, is just utility funcitons.
It\u2019s like calling Lodash \u2018doubles\u2019, the doubles folder. </p>
<p>You can instead move the data to a separate file, imported int othe setup.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function-variable function">userCounterMethod</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>

    <span class="token comment">// declare it</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token literal-property property">currentCount2</span><span class="token operator">:</span> <span class="token number">12</span>        
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

    <span class="token comment">// if you declare it outside, you need ref</span>

    <span class="token keyword">const</span> currentCount3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">incrementCount2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    state<span class="token punctuation">.</span>currentCount2<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">incrementCount3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    currentCount2<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// return it</span>
    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// notice it's not ...state</span>
    <span class="token comment">// toRefs(state),</span>
    state<span class="token punctuation">,</span>
    incrementCount2<span class="token punctuation">,</span> 
    currentCount3
    <span class="token punctuation">&#125;</span>    
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>You have a explicit path to this method.
It\u2019s crystal clear where things are coming from, over mixins &amp; provide/inject.</p>
<p>Let\u2019s you pull out what you want, and expose it.
It\u2019s more clearer to read.</p>
<p>QUESTIONS:
In composition API:</p>
<ol class="${"list"}"><li>What is a ref? (reactive reference)</li>
<li>What is reactive?</li></ol>
<h2 id="${"state-management"}"><a href="${"#state-management"}">State Management</a></h2>
<p>Vuex Best practices</p>
<p>What data should go into Vuex?</p>
<ul class="${"list"}"><li>Data shared between components that might not be in direct parent-child relation</li>
<li>Data taht you want to keep between router views
** route params are more important thought</li></ul>
<p>What to avoid putting in</p>
<ul class="${"list"}"><li>User Interface Variables<ul class="${"list"}"><li>isDrowntownOpen, isInputFocused, isModalVisible</li></ul></li>
<li>Forms data</li>
<li>Validation Results</li>
<li>Single records from teh API</li></ul>
<p>QUESTION: Do I always need a getter to return a simple fragment of a state?</p>
<p>No. </p>
<figure><img src="${"https://i.imgur.com/a8HOpvc.png"}"></figure>
<p>Treat it like a computered property.
If you need to share derived vuex state between components, make a getter.</p>
<p>PROTIP: (debatable)
Avoid calling mutations directly in components.</p>
<p>Seems like using excess boilerplate to use actions to mutate.</p>
<blockquote><p>[00:07:29] And so what this means is you can just call your actions and then basically programmatic, like the algorithm will know which things you\u2019re trying to mutate in the state.</p></blockquote>
<blockquote><p>I would recommend sticking with actions in this particular case. Because the moment you have an actual mutation linked together, it\u2019s like the provide inject example. You\u2019ve created a fixed relationship where if in the future like over here in shopping list, we change either I don\u2019t know call it the mutation and how it works.</p></blockquote>
<blockquote><p>[00:02:02] This can actually break what\u2019s going on over here. Whereas if you have an action you still need to update if things renamed and things. But you allow sort of a better, sort of a more declarative way of saying what you wanna do and then the implementation details can be taken care of later.</p></blockquote>
<blockquote><p>[00:02:17] As opposed to doing the mutation directly from module to module. So, hopefully that helps answer your question. [LAUGH] So the statement made in the chat is that they enjoy the declarative nature or the more explicit nature of using this dot store, dot state, or dot dispatch, in order to be very explicit as far as what you\u2019re accessing rather than conflicting it with the component namespace, right?</p></blockquote>
<blockquote><p>[00:02:43] So in this regard, it\u2019s related to the first question regarding weather map state or accessing the disk dollar store makes more sense. And so this is a perfect example of I think it\u2019s important to define what makes the most sense for your team long term. And so you\u2019re right if you feel that over time either the the local data instance is started getting muddled up with the map functions.</p></blockquote>
<p>Question - Multiple mutations per Action</p>
<blockquote><p>[00:05:32] So the other question we have here is regarding whether. A single action should only commit one mutation. Or I think the other one was whether a mutation should update multiple pieces of state. So I\u2019m gonna answer this formula question, if I\u2019m wrong, please, please clarify for me. So when it comes to actions, there really is no call it best practice, for how many mutations you should be committing.</p></blockquote>
<blockquote><p>[00:05:57] After all, especially when you have things as complex as fetching an API and then breaking it out. A lot of times there are multiple things you\u2019re committing, because the API might give you one large response. Then you want to chunk out into different modules or different methods. There are definite reasons to commit more than once in an action and there\u2019s absolutely nothing wrong with that.</p></blockquote>
<blockquote><p>[00:06:16] As far as mutating state, this is a more nuanced question, because the idea here is that, do you want a single mutation to update multiple pieces of state versus one? And so I think this is, call it a gut feeling. Unfortunately with this one, in the sense that think of it data-driven refactoring from.</p></blockquote>
<blockquote><p>[00:06:36] I would probably start with atomic pieces only because atomic pieces can be composed into action. And so unless you\u2019re really sure about the architecture of this one mutation should update three pieces of state. And this is always the case and it should never change. Then there\u2019s an argument to impacting multiple pieces of state with a single mutation.</p></blockquote>
<p>PROTIP:
Use built-in map helpers </p>
<figure><img src="${"https://i.imgur.com/dPj5PHf.png"}"></figure>
<p>BEST PRACTICES:
Always use namespace modules. </p>
<p>DISCUSSION:
With the Composition API, do we even need Vuex?</p>
<p>Vuex still has a lot of help with debugging. Time travel, seeing where things break.</p>
<p>Composition API is great for sharing data. It does alleviate a lot.</p>
<h3 id="${"routing"}"><a href="${"#routing"}">Routing</a></h3>
<figure><img src="${"https://i.imgur.com/kSUFRi1.png"}"></figure>
<h2 id="${"testing"}"><a href="${"#testing"}">Testing</a></h2>
<p>Pareto Principle - 80/20 rule.
20% effort -&gt; 80% results.</p>
<p>Jest is he standard for component testing.
Cypress is working on component testing.</p>
<p>Testing library is recommended by the Vue Testing team. (testing-library.com)</p>
<p>Vue Test Utils is useful at the lower level testing. </p>
<p>BEST PRACTICES</p>
<ol class="${"list"}"><li><p>Don\u2019t test that vue works. Test that things are showing what is expecting.</p></li>
<li><p>Primarily stick with shallow rendering. So instead of testing a collection of components, test the most shallowest level. </p>
<ul class="${"list"}"><li>A common component can break many tests.</li></ul></li>
<li><p>Build unit tests into generators</p></li></ol>
<p>Unit tests aren\u2019t the best 20% to focus on.</p>
<p>The man goals of the core business test:
#1. Can the user login?
#2. Can the user pay us?</p>
<p>If any of those tests break, then it\u2019s super critical.</p>
<p>If I take out one feature \u2014 that super critical level, will it work?</p>
<p>End-to-end testing
Cypress, TestCafe</p>
<p>Best Practice E2E Testing</p>
<ol class="${"list"}"><li><p>Don\u2019t maintain state between tests</p>
<p>\u201CIn test 1, grab a token.\u201D
\u201CIn test 2, use that token to do something else.\u201D</p>
<p>That will break down a chain.</p>
<p>Achieve one thing without breaking anything else.</p></li>
<li><p>Don\u2019t select elements with classes. It\u2019s fragile beacuse classes change. A popular solution is <code>data-test=&#39;thing&#39;</code></p></li></ol>
<p>Another idea, using user intent. A submit button, or a link. </p>
<p>REACH OUT TO FE_MASTERS
<a href="${"https://frontendmasters.com/courses/production-vue/testing-libraries/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://frontendmasters.com/courses/production-vue/testing-libraries/</a>
<a href="${"https://i.imgur.com/avGnCb2.png"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://i.imgur.com/avGnCb2.png</a></p>
<h2 id="${"code-maintenance"}"><a href="${"#code-maintenance"}">Code Maintenance</a></h2>
<blockquote><p>[00:00:40] Because as we know, as I mentioned earlier, I\u2019ve worked on teams where like the contractors are working on the other side of the world. And so this makes timezone overlap like near impossible. And so if you can imagine if someone writes something in a way that breaks convention, and they\u2019re allowed to, and then that enters the code base, but then they\u2019re the only ones who know understand or how to fix it.</p></blockquote>
<blockquote><p>[00:01:00] This means now you\u2019re gonna basically lose a whole day of development over like these bugs. </p></blockquote>
<h3 id="${"why-are-best-practices-important"}"><a href="${"#why-are-best-practices-important"}">Why are \u201Cbest practices\u201D important</a></h3>
<p>What we want at the end of the day?</p>
<ul class="${"list"}"><li>faster dev</li>
<li>Fewer bugs</li>
<li>More opportunity </li></ul>
<p>Think of it as \u2018chosen conventions\u2019.</p>
<h3 id="${"what-makes-a-convention-good"}"><a href="${"#what-makes-a-convention-good"}">What makes a convention Good?</a></h3>
<p>Two primary factors: </p>
<ol class="${"list"}"><li>They enable devs to write great code with a low barrier of entry</li>
<li>They are easy to refactor and/or abandon</li></ol>
<p>Generators and automate shit</p>
<p><a href="${"https://github.com/bencodezen/vue-enterprise-boilerplate/tree/main/generators/new"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/bencodezen/vue-enterprise-boilerplate/tree/main/generators/new</a></p>
<p>Implementation
STAGE 1 - Pre-commit -
\u2014 add testing to the pre-commit
STAGE 2 - Pull request
\u2014 </p>
<p>STAGE 3 - commiting code - linting
\u2014 </p>
<p>Look into ESLint A11y plugin</p>
<p>I hate that Production-Grade Vue.js
Vue or not, I think this is \u2014
Code Maintenance section is really good. </p>
<p>Check out this:
creates a live style guide
<a href="${"https://vue-styleguidist.github.io/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://vue-styleguidist.github.io/</a></p>
<p>Another is storybook vue</p>`;
    }
  })}`;
});
export { Week_ten_production_grade_vue_part_2_svelte as default, metadata };
