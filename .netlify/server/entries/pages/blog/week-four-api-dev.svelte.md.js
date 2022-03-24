import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-ab845620.js";
export { l as load } from "../../../chunks/_layout-ab845620.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-3d93c575.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Four - Intro to API",
  "created": "2021-11-18T00:00:00.000Z",
  "summary": "Modern Search Engine Optimization (SEO)",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_four_api_dev_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Slides: <a href="${"https://slides.com/scotups/api-design-in-node-with-express-v3/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://slides.com/scotups/api-design-in-node-with-express-v3/</a>
Repo: <a href="${"https://github.com/FrontendMasters/api-design-node-v3"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/FrontendMasters/api-design-node-v3</a>
MongoDB hosting: <a href="${"https://mlab.com/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://mlab.com/</a>
MondoDB in Memory: <a href="${"https://www.npmjs.com/package/mongodb-memory-server"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.npmjs.com/package/mongodb-memory-server</a></p>
<h2 id="${"introduction"}"><a href="${"#introduction"}">Introduction</a></h2>
<p>API is: Application programming interface
They mean REST API. It\u2019s the verb.
Usually a server on some remote machine that dictates how another application can interact with with some data
Basic data operations like, Create, Read, Update, Destroy (CRUD)</p>
<p><strong>Node:</strong>
Build for high concurrent APIs that are not CPU intensive</p>
<p>Node.js is Javascript, async and event driven.
SIngle threaded (can optimize)</p>
<p>When kept async, Node can handle a high amount of concurrent request.</p>
<p>Not design for CPU Intensive work (data crunching, ML, big math)</p>
<p><strong>Express</strong>
It\u2019s the standard API framework for Node.js</p>
<p>Handles sockets, route matching, error handling, and more.</p>
<p>Open source.</p>
<h2 id="${"express"}"><a href="${"#express"}">Express</a></h2>
<p>Standard action verbs.
GET, POST, UPDATE, DELETE</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"hello"</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Insomnia API is a Postman alternative.</p>
<p><strong>Middleware</strong>
Middleware is a lsit of functions that execute, in order, before your controllers.</p>
<p>It\u2019s in the middle of the request &amp; response.</p>
<ul class="${"list"}"><li>Allow you to execute functions on an incoming request with guaranteed order.</li>
<li>Great for authenticating, transforming the request, tracking, error handling.</li>
<li>Middleware can also respond to request like a controller would, but that is not their intent.</li></ul>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// middleware is 'the next'. </span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/data'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"logging"</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>Think of a response as a <code>return </code></p>
<p><strong>Matching route requests</strong></p>
<p>You\u2019ll often use exact matching, or param matching.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// regex</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/^user/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"hello"</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token comment">// glob</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/*'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"hello"</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token comment">// param</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/:id'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"hello"</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p><strong>POST vs PUT</strong>
Post is creating something new.
Put is \u2018putting\u2019 in new information.</p>
<p><strong>Route Order</strong></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token comment">// this will be the result.</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Router and Sub Routes</strong></p>
<p><code>const router = express.router()</code></p>
<p>Why would you use a router?
if you different authentication strategy. </p>
<p>[00:04:32]</p>
<blockquote><blockquote><p>Speaker 2: So why would you use router over app.get?
Scott Moss: The reason you would use router is if you just didn\u2019t wanna put everything in the same file, honestly. Or if you had, if some part of your API had its own set of rules that you wanted to isolate just for that part of the API, then you would make another router for it.</p></blockquote></blockquote>
<p>[00:04:56]
For instance, let\u2019s say you had an API that serves static assets that also serves json, it served this proprietary machine learning thing. And the json one had a different authentication strategy than a machine learning one did, right? So if you added the authentication strategy as middleware to the route, it\u2019ll lock the whole API down.</p>
<p>[00:05:17]
That\u2019s not what you want, you need different authentication strategies for different things. So you would make another router for this part of your API, for the json, and register it\u2019s authentication strategy on it\u2019s middleware and then the machine learning one would have it\u2019s authentication strategy on it\u2019s middleware, and they don\u2019t conflict with each other.</p>
<p><strong>Router Verb Methods</strong></p>
<p>Instead of creating all the get, post, put, delete\u2026</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>you can use router.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
routes<span class="token punctuation">.</span><span class="token function">router</span><span class="token punctuation">(</span><span class="token string">'/cat/:id'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p><strong>item.router.js</strong></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token comment">// item.router.js</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Router <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'express'</span>

<span class="token keyword">const</span> <span class="token function-variable function">controller</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span> <span class="token punctuation">(</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'hello'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>controller<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>controller<span class="token punctuation">)</span>

<span class="token comment">// /api/item/:id</span>
router
  <span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">'/:id'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>controller<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>controller<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>controller<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router

<span class="token comment">// server.js</span>
<span class="token keyword">import</span> itemRouter <span class="token keyword">from</span> <span class="token string">'./resources/item.item.router'</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/api/item'</span><span class="token punctuation">,</span> itemRouter<span class="token punctuation">)</span>
</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"data-modeling"}"><a href="${"#data-modeling"}">Data Modeling</a></h2>
<p>Mongoose for schema.
The model is what things should look like.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> userSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> String
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"controllers--models"}"><a href="${"#controllers--models"}">Controllers &amp; Models</a></h2>
<p>tldr: Controllers are just middleware but with the intent on returning some data.</p>
<p>Middleware and controllers are the same.</p>
<p>But Controllers can be anything - like third party library, or Stripe data.</p>
<p>They are going to return some data.</p>
<ul class="${"list"}"><li><p>Controllers handle what a Route + Verb combo can access from the DB</p></li>
<li><p>Think of them as the final middleware in the stack for a request. Their is no intent to proceed to another middleware function after a controller (like a return)</p></li>
<li><p>Controllers implement the logic that interacts with our DB models</p></li>
<li><p>Can generalize controllers to work for many models because we\u2019re going with a REST approach which requires CRUD actions on resources</p></li></ul>
<p><strong>Generalizing CRUD Design Overview</strong></p>
<p>You\u2019re better off creating
Create One
Get One
Get Many
Update One
Delete One</p>
<p>C - model.create(), new model() //
R - model.find(), model.findOne(), model.findById() // get one, get many
U - model.update(), model.findByIdAndUpdate(), model.findOneAndUpdate()
D - model.remove(), model.findByIdAndUpdate(), model.findOneAndRemove()</p>
<h2 id="${"auth"}"><a href="${"#auth"}">Auth</a></h2>
<p>tldr; You can never truly protect an API, but requiring authentication makes it a bit safer</p>
<p>Your API - will never be entirely safe, but make it hard for them</p>
<blockquote><p>There\u2019s nothing, cuz your vulnerability are gonna be your users. So either way, your application is just gonna be hacked by somebody if it wants to be. So there really isn\u2019t a safe way, but you can just make it harder for them, and that\u2019s what authentication is gonna do. </p></blockquote>
<blockquote><p>So authentication is controlling if an incoming request can proceed or not, that\u2019s basically it.</p></blockquote>
<blockquote><p>[00:01:32]
Can this request go forward and do what it\u2019s trying to do? That\u2019s authentication at its finest. At least in the context of what we\u2019re gonna be doing. Authorization is controlling if an authenticated request has the correct permissions to access a resource. So after you even authenticate it, we need to see if you\u2019re authorized to do what you\u2019re asking to do.</p></blockquote>
<blockquote><p>[00:01:52]
Are you authorized to delete work spaces, are you authorized to change their credit card information, although you are authenticated? So that\u2019s the difference. So that\u2019s like you\u2019re using like some type of roles or something like that. That\u2019s like authorization. Identification is basically, who is this requester? What user is it, what application is it?</p></blockquote>
<blockquote><p>[00:02:13]
I need to identify what, who this request is. So, those are the three different things when people, when I hear people say about authentication, they\u2019re really talking about all three of those. They\u2019re just summarizing it with the word Auth. So, that\u2019s basically what it is. What we\u2019re going to be doing is, yeah, basically all three of them.</p></blockquote>
<p>The THREE:
Authentication - is controlling if an incoming request can proceed or not</p>
<p>Authorization - is controlling if an authenticated request has the correct permissions to access a resource</p>
<p>Identification -  is determining who the requester is</p>
<p><strong>JWT authentication</strong></p>
<p>So JWT authentication. They\u2019re basically tokens passed to every single request to check on the auth server.</p>
<blockquote><p>So if you compare it to something like sessions and cookies on the server, right, that\u2019s a traditional authentication mechanism where, on the server, the server keeps track of sessions stored somewhere.</p></blockquote>
<blockquote><p>[00:00:20]
You have some session state where it\u2019s in redis, in memory. Somewhere you\u2019re keeping track of sessions of a user that\u2019s interacted with the database and that\u2019s how you know they are authenticated or not. When they\u2019re not, you get rid of that session. They had to create a new session.</p></blockquote>
<blockquote><p>[00:00:34]
So that\u2019s like a stateful authentication method. JWT is the quite opposite. It\u2019s stateless. The server doesn\u2019t keep track of anything. It has no idea what\u2019s happening. They\u2019re not keeping track of who\u2019s asking for anything. All the server does is create a token and gives it to an authenticated requestor.</p></blockquote>
<blockquote><p>[00:00:51]
And from that point on, the requestor has to send that token on every single request. It\u2019s stateless. It doesn\u2019t remember what happened last time. You have to send it every single time, and then it checks every single time to see if you\u2019re authenticated. So a JWT authentication is basically a bearer token strategy that allows the API to be stateless with user auth.</p></blockquote>
<p>They call it a bearer token strategy.</p>
<p>The API will take the token, and verify it to then return a payload.</p>
<h2 id="${"wrapup"}"><a href="${"#wrapup"}">Wrapup</a></h2>
<p>hapi is a framework like express.</p>`;
    }
  })}`;
});
export { Week_four_api_dev_svelte as default, metadata };
