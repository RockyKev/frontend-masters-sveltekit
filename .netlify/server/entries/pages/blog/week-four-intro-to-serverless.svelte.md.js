import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-ab845620.js";
export { l as load } from "../../../chunks/_layout-ab845620.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-3d93c575.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Four - Intro to Serverless",
  "created": "2021-11-22T00:00:00.000Z",
  "summary": "Modern Search Engine Optimization (SEO)",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_four_intro_to_serverless_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2 id="${"serverless-functions"}"><a href="${"#serverless-functions"}">Serverless Functions</a></h2>
<p>Install netlify @ v2.58.0
<code>npm i -g netlify-cli@latest</code></p>
<p>Then <code>ntl dev</code></p>
<p>Why? It\u2019s the easiest serverless thing. (Also he works there lol)</p>
<p>Why are we using netlify instead of the base installation?
Because serverless functions don\u2019t run in the frontend.
They run in their own separate app.</p>
<h3 id="${"boop"}"><a href="${"#boop"}">Boop</a></h3>
<p>in netlify.toml</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">[build]
  command = &quot;npm run build&quot;
  publish = &quot;_site&quot;
  functions = &quot;functions&quot; // this tells netlify to check for a &#96;functions&#96; folder.</code>`}<!-- HTML_TAG_END --></pre>
<p>We are not writing in toml.</p>
<p>in functions/boop.js</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// servless functions how to deal with incoming requests.</span>
<span class="token comment">// and you do that with a handler</span>

exports<span class="token punctuation">.</span><span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">'Boop!'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Then to get it to run.
http://localhost:8888/.netlify/functions/boop</p>
<h3 id="${"movies"}"><a href="${"#movies"}">Movies</a></h3>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// data/movies.json</span>
<span class="token punctuation">&#123;</span> 
  <span class="token operator">...</span> <span class="token comment">// </span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// functions/movies.js</span>
<span class="token keyword">const</span> movies <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'../data/movies.json'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

exports<span class="token punctuation">.</span><span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token keyword">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>movies<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// body: movies,</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Then to see it:
http://localhost:8888/.netlify/functions/movies</p>
<h3 id="${"parameters"}"><a href="${"#parameters"}">Parameters</a></h3>
<p>netlify functions/aws uses event (event.queryStringParameters)
azure/google functions\u2026 the syntax might be different</p>
<p>How to grab a query string
echo? text=\u201CHello!\u201D</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// functions/echo.js</span>

<span class="token comment">// http://localhost:8888/.netlify/functions/echo?text=Hello!&amp;one=1&amp;two=2</span>
<span class="token comment">// &#123; text: 'Hello!', one: '1', two: '2' </span>
exports<span class="token punctuation">.</span><span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>queryStringParameters<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> text <span class="token punctuation">&#125;</span> <span class="token operator">=</span> event<span class="token punctuation">.</span>queryStringParameters<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You said: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>text<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span>
    <span class="token punctuation">&#125;</span>

<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>A movie lookup:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> movies <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'../data/movies.json'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// destructure the event element</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> queryStringParameters <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>


    <span class="token comment">// http://localhost:8888/.netlify/functions/movie-by-id?id=tt2975590</span>
    <span class="token comment">// should give us Batman v. Booperman</span>

    <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> id <span class="token punctuation">&#125;</span> <span class="token operator">=</span> queryStringParameters<span class="token punctuation">;</span>
    <span class="token keyword">const</span> movie <span class="token operator">=</span> movies<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token operator">=></span> m<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span> 

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>movie<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
            <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">404</span><span class="token punctuation">,</span>
            <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">'Not Found'</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>movie<span class="token punctuation">)</span>  
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"api-data"}"><a href="${"#api-data"}">API Data</a></h2>
<h3 id="${"setting-up-a-api-secret"}"><a href="${"#setting-up-a-api-secret"}">Setting up a API Secret</a></h3>
<p>THis is allowing us to make a api call somewhere else on OMDb API.
Register for a API key. It\u2019s free.</p>
<p>How to get a secret key from javascript</p>
<ol class="${"list"}"><li>inspect the JS Super secret key. </li>
<li>If you make a api call that\u2019s serverless, you can\u2019t see the headers data?
The serverless function cannot be seen. So it\u2019s not exposed.</li></ol>
<p>HEADS UP: </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// this is wrong</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token comment">// this is right</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>The code: </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> <span class="token punctuation">&#123;</span> <span class="token constant">URL</span> <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// node-specific api</span>
<span class="token keyword">const</span> fetch <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"node-fetch"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> movies <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"../data/movies.json"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

exports<span class="token punctuation">.</span><span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">"https://www.omdbapi.com/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// add secret API key to the query string</span>
  api<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"apikey"</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">OMDB_API_KEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// we make a call to ALL movies, and then wait for everything to come in with the Promise.all.</span>
  <span class="token comment">// REF: https://www.learnwithjason.dev/blog/keep-async-await-from-blocking-execution/</span>
  <span class="token comment">// if we awaited at the &#96;return fetch()&#96;, it would be movie, wait for call... movie wait for call. Will take longer.</span>
  <span class="token comment">// by putting the promise at the beginning, it executes in parallel.</span>

  <span class="token keyword">const</span> promises <span class="token operator">=</span> movies<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">movie</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>

    <span class="token comment">// use the movie's IMDB ID to look up the details</span>
    api<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"i"</span><span class="token punctuation">,</span> movie<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span>api<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>

        <span class="token keyword">const</span> scores <span class="token operator">=</span> data<span class="token punctuation">.</span>Ratings<span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
          <span class="token operator">...</span>movie<span class="token punctuation">,</span>
          scores<span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> moviesWithRatings <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>moviesWithRatings<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>Complete working code with a basic working API, a third party pull, and JSON data inside the project.</p>
<p><a href="${"https://github.com/RockyKev/fe-masters-intro-serverless/tree/589701be51ea998c52011ae03e25433626d64b08"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/RockyKev/fe-masters-intro-serverless/tree/589701be51ea998c52011ae03e25433626d64b08</a></p>
<h2 id="${"database--auth"}"><a href="${"#database--auth"}">Database &amp; Auth</a></h2>
<p>Now we\u2019re going into databases. It\u2019 mashed into the API Data section for some reason.</p>
<h3 id="${"setting-up-a-quick-database-with-hasura"}"><a href="${"#setting-up-a-quick-database-with-hasura"}">Setting up a Quick Database with Hasura</a></h3>
<ol class="${"list"}"><li>You\u2019re using Hasura to create a database</li>
<li>Heroku to do serverless or something i dunno&gt;</li></ol>
<p>NOTE: The setup is significantly different from what Jason is doing.</p>
<figure><img src="${"https://i.imgur.com/dcBLNZL.png"}"></figure>
<figure><img src="${"https://i.imgur.com/3liWG1j.png"}"></figure>
<h3 id="${"hasura---fetching-data"}"><a href="${"#hasura---fetching-data"}">Hasura - Fetching Data</a></h3>
<figure><img src="${"https://i.imgur.com/83yJxLB.png"}"></figure>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// functions/util/hasura.js</span>

<span class="token comment">// this can be set up for both get/post</span>
<span class="token keyword">const</span> fetch <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'node-fetch'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> query<span class="token punctuation">,</span> variables <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span> <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>


    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">HASURA_API_URL</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
            <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span>
            <span class="token string-property property">'X-Hasura-Admin-Secret'</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">HASURA_ADMIN_SECRET</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span> <span class="token punctuation">&#123;</span> query<span class="token punctuation">,</span> variables <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>    
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// TODO: in a production app, check if the query is correct and formed. Show helpful info. </span>
    <span class="token comment">// results.errors</span>

    <span class="token keyword">return</span> result<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// named exports</span>
exports<span class="token punctuation">.</span>query <span class="token operator">=</span> query<span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Then in your movies.js, update it:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token comment">// movies.js</span>
<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> <span class="token constant">URL</span> <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// node-specific api</span>
<span class="token keyword">const</span> fetch <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"node-fetch"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> query <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./util/hasura"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// const movies = require("../data/movies.json");</span>

exports<span class="token punctuation">.</span><span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">"https://www.omdbapi.com/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// a GraphQL query</span>
  <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> movies <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">
        query &#123;
            movies &#123;
                id
                poster
                tagline
                title
            &#125;
        &#125;      
    </span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  api<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"apikey"</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">OMDB_API_KEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> promises <span class="token operator">=</span> movies<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">movie</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    api<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"i"</span><span class="token punctuation">,</span> movie<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span>api<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">const</span> scores <span class="token operator">=</span> data<span class="token punctuation">.</span>Ratings<span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
          <span class="token operator">...</span>movie<span class="token punctuation">,</span>
          scores<span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> moviesWithRatings <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>moviesWithRatings<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"hasura---posting-data-through-graphiql"}"><a href="${"#hasura---posting-data-through-graphiql"}">Hasura - Posting Data through GraphiQL</a></h3>
<figure><img src="${"https://i.imgur.com/xbSFk91.png"}"></figure>
<figure><img src="${"https://i.imgur.com/7qTbq3Y.png"}"></figure>
<h3 id="${"posting-data-from-the-adminhtml-page"}"><a href="${"#posting-data-from-the-adminhtml-page"}">Posting data from the admin.html page</a></h3>
<p>So when you visit <code>http://localhost:56237/admin</code></p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Add a New Movie<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>add-movie<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>IMDb Movie ID <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Title <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tagline<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>Tagline <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tagline<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tagline<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>poster<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>Poster <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>poster<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>poster<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Add New Movie<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// TODO: FormData API?</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// serverless function</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/.netlify/functions/add-movie'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'title'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tagline</span><span class="token operator">:</span> data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'tagline'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">poster</span><span class="token operator">:</span> data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'poster'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span>  <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token comment">// TODO: if something goes wrong, print the error code.</span>
      <span class="token comment">// but we want to show a 401 if you're not logged in.</span>
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.message'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Response: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>response<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span>

    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#add-movie'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'submit'</span><span class="token punctuation">,</span> handleSubmit<span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<blockquote><p>I have created a submission to our serverless function and we\u2019re gonna call it with POST instead of get. And when we call it with POST, that means that it\u2019s not going in as query string parameters.</p></blockquote>
<blockquote><p>[00:04:10]
And there\u2019s a reason for that. I don\u2019t want the data in the body to show up in a server log somewhere, right? We don\u2019t want the URL to be called this like, add-movie query string, title, tagline, etc. We want it to be just a call to add-movie and then the body gets sent as a POST body object, which then we\u2019ll grab out once we\u2019re done.</p></blockquote>
<p>This calls the serverless function <code>add-movie</code>.
Let\u2019s build that out now.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// const &#123; query &#125; = require('./util/hasura')</span>

exports<span class="token punctuation">.</span><span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>

    <span class="token comment">// console.log(event);</span>
    <span class="token comment">// when you submit, you get something like  body: '&#123;"id":"id","title":"title","tagline":"tagline","poster":"poster"&#125;',</span>
    <span class="token comment">// So JSON.parse it to make it a nice data object</span>
    <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> tagline<span class="token punctuation">,</span> poster <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// just so it doesn't time out</span>
    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">'wip'</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"adding-data-to-the-database"}"><a href="${"#adding-data-to-the-database"}">Adding data to the database</a></h3>
<figure><img src="${"https://i.imgur.com/WzRJ5A3.png"}"></figure>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token comment">// functions/add-movie.js</span>

<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> query <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./util/hasura"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

exports<span class="token punctuation">.</span><span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> tagline<span class="token punctuation">,</span> poster <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
        <span class="token comment">// the String! is a GraphQL 'required' query.</span>
        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">
            mutation ($poster: String!, $tagline: String!, $title: String!, $id: String!) &#123;
                insert_movies_one(object: &#123;poster: $poster, tagline: $tagline, title: $title, id: $id&#125;) &#123;
                id
                &#125;
            &#125;        
        </span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">variables</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> tagline<span class="token punctuation">,</span> poster <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    


    <span class="token comment">// just so it doesn't time out</span>
    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"access-control"}"><a href="${"#access-control"}">Access Control</a></h3>
<p>This locks the ability to visit /admin/ page and edited. It\u2019s not gated.</p>
<ol class="${"list"}"><li>We\u2019ll be using netlify identify</li></ol>
<p><code>ntl init</code></p>
<ol start="${"2"}" class="${"list"}"><li><p>you\u2019ll create a new project and hook it all up with netlify.</p></li>
<li><p>You now need to hook up your env. files in the netlify app.</p></li>
<li><p>After doing so, you then need to trigger another deploy. </p></li>
<li><p>Finally, switch over to Netlify Identity to turn it on.</p></li></ol>
<figure><img src="${"https://i.imgur.com/4nHUNko.png"}"></figure>
<ol start="${"6"}" class="${"list"}"><li>We\u2019ll also use the Netlify widget to handle all this.</li></ol>
<p><a href="${"https://github.com/netlify/netlify-identity-widget"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/netlify/netlify-identity-widget</a></p>
<ol start="${"7"}" class="${"list"}"><li>Then you grab the widget code and put it all in the page.</li></ol>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html">// login.html
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-netlify-identity-button</span><span class="token punctuation">></span></span>Login<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://identity.netlify.com/v1/netlify-identity-widget.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>    </code>`}<!-- HTML_TAG_END --></pre>
<ol start="${"8"}" class="${"list"}"><li>Finally we create an account, and it\u2019ll exist on the Netlify side.</li></ol>
<div><figure><img src="${"https://i.imgur.com/BQlrOtz.png"}"></figure><figure><img src="${"https://i.imgur.com/6lgozqd.png"}"></figure></div>
<figure><img src="${"https://i.imgur.com/ewE5tFL.png"}"></figure>
<p>Now to handle login and logout</p>
<p>In the admin panel, where you can add new data.
It\u2019ll redirect you to the login page if you\u2019re not logged in.</p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token comment">&lt;!-- // admin.html --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#logout<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Log Out<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">function</span> <span class="token function">handleIdentityEvent</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>

  <span class="token comment">// if you are a user, then keep you here</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">&amp;&amp;</span> user<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">&#125;</span>

  <span class="token comment">// otherwise redirect you</span>
  window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname <span class="token operator">=</span> <span class="token string">'/login/'</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

window<span class="token punctuation">.</span>netlifyIdentity<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'init'</span><span class="token punctuation">,</span> handleIdentityEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>netlifyIdentity<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'logout'</span><span class="token punctuation">,</span> handleIdentityEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>

document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.logout'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>

  event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  window<span class="token punctuation">.</span>netlifyIdentity<span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>In the login page, where you login via netlify.
If you are logged in, it\u2019ll redirect you to the admin page.</p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">handleLogin</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user <span class="token operator">||</span> <span class="token operator">!</span>user<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// if we get here, it means someone is logged in</span>
    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname <span class="token operator">=</span> <span class="token string">"/admin/"</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  window<span class="token punctuation">.</span>netlifyIdentity<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"init"</span><span class="token punctuation">,</span> handleLogin<span class="token punctuation">)</span><span class="token punctuation">;</span>
  window<span class="token punctuation">.</span>netlifyIdentity<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"login"</span><span class="token punctuation">,</span> handleLogin<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>NOTE: If the redirect stuff is broken on local, it\u2019s because your local site isn\u2019t linked with your netlify.
This only works once you \u201Clog in\u201D already, as Netlify Identify is a Netlify.com thing.</p>
<h3 id="${"avoiding-malicious-users"}"><a href="${"#avoiding-malicious-users"}">Avoiding malicious users</a></h3>
<blockquote><p>[00:00:00]
Have somebody was being mischievous, they could figure out what our serverless function was. And then they could just skip this UI altogether, and they could just post to that serverless function, which we don\u2019t want. We wanna control access all the way, and so what we\u2019re gonna do is we\u2019re gonna modify our admin a little bit.</p></blockquote>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">

<span class="token comment">// admin.html</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// we are now getting a JWT token here</span>
    <span class="token comment">// then in the serverless function, pass it in the headers</span>
  <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> access_token <span class="token punctuation">&#125;</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>netlifyIdentity<span class="token punctuation">.</span><span class="token function">currentUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>token<span class="token punctuation">;</span>

  <span class="token comment">// TODO: FormData API?</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// serverless function</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/.netlify/functions/add-movie'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>access_token<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'title'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tagline</span><span class="token operator">:</span> data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'tagline'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">poster</span><span class="token operator">:</span> data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'poster'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>How to parse a JWT: <a href="${"https://jwt.io/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://jwt.io/</a></p>
<figure><img src="${"https://i.imgur.com/71JYAfx.png"}"></figure>
<p>Netlify handles it for you using the <code>context</code> param.</p>
<p>We now update the serverless function.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token comment">// add-movie.js</span>

<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> query <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./util/hasura"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

exports<span class="token punctuation">.</span><span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>

    <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> tagline<span class="token punctuation">,</span> poster <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> user <span class="token punctuation">&#125;</span> <span class="token operator">=</span> context<span class="token punctuation">.</span>clientContext<span class="token punctuation">;</span>

    <span class="token keyword">const</span> isLoggedIn <span class="token operator">=</span> user <span class="token operator">&amp;&amp;</span> user<span class="token punctuation">.</span>app_metadata<span class="token punctuation">;</span>
    <span class="token keyword">const</span> roles <span class="token operator">=</span> user<span class="token punctuation">.</span>app_metadata<span class="token punctuation">.</span>roles <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isLoggedIn <span class="token operator">||</span> <span class="token operator">!</span>roles<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'admin'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
            <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">401</span><span class="token punctuation">,</span>
            <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">'Unauthorized'</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
        <span class="token comment">// the String! is a GraphQL 'required' query.</span>
        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">
            mutation ($poster: String!, $tagline: String!, $title: String!, $id: String!) &#123;
                insert_movies_one(object: &#123;poster: $poster, tagline: $tagline, title: $title, id: $id&#125;) &#123;
                id
                &#125;
            &#125;        
        </span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">variables</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> tagline<span class="token punctuation">,</span> poster <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
    

    <span class="token comment">// just so it doesn't time out</span>
    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"use-cases--qa"}"><a href="${"#use-cases--qa"}">Use Cases &amp; Q&amp;A</a></h2>
<p><code>killall node</code> - a sure fire way to kill everything.</p>
<p>Good user cases:</p>
<ol class="${"list"}"><li>Contact Us and Newsletter is managed by serverless functions.</li></ol>
<p>Jason does: <a href="${"https://github.com/jlengstorf/jason.af/blob/main/functions/subscribe.js"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/jlengstorf/jason.af/blob/main/functions/subscribe.js</a></p>
<ol start="${"2"}" class="${"list"}"><li>Reactions and interactions:
The add to like post, or count visitors?
<a href="${"https://www.joshwcomeau.com/css/introducing-shadow-palette-generator/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.joshwcomeau.com/css/introducing-shadow-palette-generator/</a></li></ol>
<ol start="${"3"}" class="${"list"}"><li><p>Parallel Processing:
tl;dr: say your gatsby site takes a lot of processes.
You can use a bunch of serverless functions (running many many machines at once) to create this end goal.
<a href="${"https://www.npmjs.com/package/gatsby-parallel-runner"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.npmjs.com/package/gatsby-parallel-runner</a></p></li>
<li><p>Add listeners on Twitch
<a href="${"https://github.com/learnwithjason/learnwithjason.dev/tree/main/functions"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/learnwithjason/learnwithjason.dev/tree/main/functions</a></p></li>
<li><p>Starbucks uses their shopcart as a sererless function. </p></li>
<li><p>Stripe Subscriptions
<a href="${"https://github.com/stripe-samples/netlify-stripe-subscriptions/blob/main/functions/identity-signup.js"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/stripe-samples/netlify-stripe-subscriptions/blob/main/functions/identity-signup.js</a></p></li></ol>
<p><a href="${"https://www.netlify.com/blog/2020/07/13/manage-subscriptions-and-protect-content-with-stripe/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.netlify.com/blog/2020/07/13/manage-subscriptions-and-protect-content-with-stripe/</a></p>
<ol start="${"7"}" class="${"list"}"><li>Crawl the web</li></ol>`;
    }
  })}`;
});
export { Week_four_intro_to_serverless_svelte as default, metadata };
