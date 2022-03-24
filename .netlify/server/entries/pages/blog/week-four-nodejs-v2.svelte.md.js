import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-b8ce1441.js";
export { l as load } from "../../../chunks/_layout-b8ce1441.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-c29f9c7c.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Four - Intro to NodeJS",
  "created": "2021-11-17T00:00:00.000Z",
  "summary": "Introduction to Node.js, V2",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_four_nodejs_v2_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p><a href="${"https://frontendmasters.com/courses/node-js-v2/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://frontendmasters.com/courses/node-js-v2/</a></p>
<p>Scott Moss</p>
<h1 id="${"introduction-to-nodejs-v2"}"><a href="${"#introduction-to-nodejs-v2"}">Introduction to Node.js, V2</a></h1>
<p><a href="${"https://intro-to-nodejs-v2-site.vercel.app/lesson/00-welcome"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://intro-to-nodejs-v2-site.vercel.app/lesson/00-welcome</a></p>
<p><strong>Use-cases</strong></p>
<ul class="${"list"}"><li>API\u2019s and servers</li>
<li>Databases (there\u2019s some DBs build in node)</li>
<li>CLIs</li>
<li>Building Tools</li>
<li>Automations</li>
<li>Basic Scripting</li>
<li>GPU shopping bots</li></ul>
<p>OS-level language.</p>
<p>There\u2019s no browser or visual rendered.</p>
<p>Browser website is just one big string, and you can test it.</p>
<p>Node - long controversal history
had split to become IO.js </p>
<p>what things they can bring into node.
when new global JS features, node has to decide.
Like they wont bring in browser-specific features.</p>
<p>Node vs deno
Like Node.js, written in typescripts.
takes best packages of node so it\u2019s built in. Like testing, building.</p>
<h2 id="${"basic-components"}"><a href="${"#basic-components"}">Basic Components</a></h2>
<p><strong>Globals</strong></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>global<span class="token punctuation">)</span> <span class="token comment">// showing the window</span>


__dirname <span class="token comment">// current directory</span>

__filename

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">)</span> <span class="token comment">// a swiss army knife. Obj about the program. </span>
                    <span class="token comment">// everything where the env variables are stored, even the computer</span>

<span class="token comment">// modules</span>
<span class="token string">"exports"</span>
<span class="token string">"module"</span>
<span class="token string">"require"</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Modules</strong>
Modules are reusable chunks.
It encapuslates each file in it\u2019s own closure.</p>
<p>Now there\u2019s two modules. <code>js</code> &amp; <code>mjs</code></p>
<p><strong>COMMONJS</strong></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// index.js</span>
<span class="token keyword">const</span> <span class="token function-variable function">action</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello there"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> action 


<span class="token comment">// app.js</span>
<span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./index'</span><span class="token punctuation">)</span>
<span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">// in node cli</span>
<span class="token comment">// node app.js</span>
<span class="token comment">// $ Hello There</span></code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// index.mjs</span>
<span class="token comment">// creates a named export</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">action</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello there"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>


<span class="token comment">// app.mjs</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> action <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./index.mjs'</span><span class="token punctuation">;</span>

<span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// in node cli</span>
<span class="token comment">// node app.js</span>
<span class="token comment">// $ Hello There</span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>File System</strong></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token comment">// index.mjs</span>
<span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">"fs"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fs<span class="token punctuation">)</span>

<span class="token comment">// result</span>
 <span class="token literal-property property">appendFile</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> appendFile<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">appendFileSync</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> appendFileSync<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">access</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> access<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">accessSync</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> accessSync<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">chown</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> chown<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">chownSync</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> chownSync<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">chmod</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> chmod<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">chmodSync</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> chmodSync<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">close</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> close<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">closeSync</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> closeSync<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">copyFile</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> copyFile<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">copyFileSync</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> copyFileSync<span class="token punctuation">]</span><span class="token punctuation">,</span></code>`}<!-- HTML_TAG_END --></pre>
<p>notice that there\u2019s a sync version of it.
Because everything in node is async, the alternative is async.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// index.mjs</span>
<span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">"fs/promises"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fs<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This is the promise version. </p>
<p>__dirname \u2014 you don\u2019t actually have access this to in mjs</p>
<p>BUFFER
PS G:\\Development\\frontend-masters-temp\\node-js-v2&gt; node index.mjs
<code>&lt;Buffer 3c 21 44 4f 43 54 59 50 45 20 68 74 6d 6c 3e 0d 0a 3c 68 74 6d 6c 20 6c 61 6e 67 3d 22 65 6e 22 3e 0d 0a 3c 68 65 61 64 3e 0d 0a 20 20 3c 6d 65 74 61 ... 220 more bytes&gt;</code></p>
<p>It\u2019s better to stream a file than load the whole file into memory.</p>
<p>HOW DOES ASYNC WORK IN JAVASCRIPT
readFile &amp; writeFile are async functions.
If you don\u2019t wait for readFile to work\u2026 it\u2019ll fail on the next stage.
You can also </p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>&#123;title&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>&#123;body&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> readFile<span class="token punctuation">,</span> writeFile <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"fs/promises"</span>

<span class="token comment">// 1 - read the file &amp; we need to wait for it to response</span>

<span class="token comment">// the commonJS method</span>
<span class="token comment">// but we don't have access to __dirname in moduleJS</span>
<span class="token comment">// const template = await readFile(__dirname, "/template.html")</span>

<span class="token comment">// the module js version </span>
<span class="token comment">// readFile takes the data, and the encoding.</span>
<span class="token keyword">let</span> template <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'template.html'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span> <span class="token comment">// creates it in buffer format if there's no encoding.</span>
<span class="token comment">// console.log(template.toString()) // turns it into html format</span>


<span class="token comment">// 2 - what data should we replace</span>


<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Learn Node.js"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">"This is the final HTML"</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    template <span class="token operator">=</span> template<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">&#123;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>key<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">&#125;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>


<span class="token keyword">await</span> <span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'index.html'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">,</span> template<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Error Handling</strong></p>
<p>VIA: <a href="${"https://intro-to-nodejs-v2-site.vercel.app/lesson/07-error-handling"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://intro-to-nodejs-v2-site.vercel.app/lesson/07-error-handling</a></p>
<p>You prob don\u2019t want your app to crash and burn when there\u2019s an error.
Like, if your API is set up and takes an error, it shouldn\u2019t kill your app.</p>
<p>When a exception is thrown in Node.js, the current process will exit with a code of 1.
This effectively errors out and stops your programing completely. You can manually do this with:</p>
<p><code>process.exit(1)</code>
Don\u2019t do this. It\u2019s a system level. </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span>readFile<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"fs"</span>

<span class="token comment">// This is the callback way. </span>
<span class="token comment">// Add a error callback, otherwise return the data.</span>
<span class="token function">readFile</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'app.mj'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"im in the readFile"</span><span class="token punctuation">)</span>

        <span class="token comment">// handle the error</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

        <span class="token comment">// if you want it to crash, throw err</span>
        <span class="token keyword">throw</span> err
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// return the data</span>

    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>


<span class="token comment">// This is with promises</span>
<span class="token comment">// No need for callback</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>readFile <span class="token keyword">as</span> readFilePromises<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"fs/promises"</span>

<span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"im in the readFilePromises"</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">readFilePromises</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'app.mj'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token comment">// if you want it to crash, throw err</span>
    <span class="token comment">// throw err</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Global way - this is if you don\u2019t have access to the code directly.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'uncaughtException'</span><span class="token punctuation">,</span> cb<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p><strong>Errors and Async Q&amp;A</strong></p>
<p>ERROR Vs EXCEPTION
An error can CAUSE an exception.</p>
<p>If you \u2018throw\u2019 the error, it can raise an exception.
The error alone is just an object.</p>
<p>Exceptions are like the highest level.
If you get an error, you can speak to the manager.
Versus an error is just complaining in the first place.</p>
<p>AWAIT
Is await blocking the thread?
So why aren\u2019t we using synchronous?</p>
<p>Await is giving the illusion of blocking the code.
What\u2019s actually happen, it actually becomes a generator.
It\u2019s a async for-loop. Like putting your code into a callback. It\u2019s the same functionality.
Async/Await was to solve a visual problem.</p>
<p>Promises (or Callbacks), already solve the functional problem - I want this code to run after thsi code.</p>
<p>Promise is supposed to make it look nicer.</p>
<p>Frontend never had the problem with promises. You didn\u2019t make 20 API calls and 20 event handler calls nestled into each otehr.
But then backend did. It was when backend interacted with a bunch of different apis and had to wait for other APIs to be ready and they saw all these crazy async patterns.
promises were somewhat to keep something flat.</p>
<p>But the <code>.then</code> was still not flat enough, so that\u2019s why async/await is still doing.</p>
<p>CAN YOU MOVE ON DURING AN AWAIT?
No.
Because the next line won\u2019t execute until the read line comes back with a result or throws an error.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">readFilePromises</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'app.mj'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>It won\u2019t even be read/scene. it\u2019s like a callback.</p>
<p>It won\u2019t even be read and wanting to be seen. Because it\u2019s the equivalent of putting it in a callback. It just won\u2019t happen. So no you cannot continue to process something that defeats the purpose of the await. If you want to continue processing something while something else is happening in the background, then you won\u2019t use async await you will use a callback or you use dot then.</p>
<h2 id="${"packages"}"><a href="${"#packages"}">Packages</a></h2>
<p><code>npm install --help</code></p>
<p><strong>Creating a local Packages &amp; npm</strong></p>
<p>A package is just a bunch of modules put together to make it work.</p>
<p>Node Package Manager (NPM) is bundled with node.</p>
<p><a href="${"https://intro-to-nodejs-v2-site.vercel.app/lesson/08-packages"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://intro-to-nodejs-v2-site.vercel.app/lesson/08-packages</a></p>
<p>To create your first package:</p>
<ol class="${"list"}"><li><code>npm init</code></li></ol>
<p>package name: it\u2019s what it\u2019ll be called on npm. Must be unique.
entry point: what file to start at.
test command: </p>
<ol start="${"2"}" class="${"list"}"><li></li></ol>
<p><strong>How to find and install packages</strong></p>
<p>NPM -&gt; search -&gt; Mongo DB</p>
<p>Things I look for:</p>
<ol class="${"list"}"><li>Make sure it\u2019s relatively updated.</li>
<li>See the sourcecode </li>
<li>Try to see if this was a active project</li></ol>
<p>Remember that packages have packages.
dependencies. in <code>node_modules</code></p>
<p><strong>Using npm packages</strong></p>
<p>If you\u2019re installing things and you need to read the source code in node_modules, you might be better off finding another package.</p>
<p>NPM VS YARN</p>
<p>Npm was in a state of not being updated. It didn\u2019t have packagelock.json</p>
<p>Yarn was better.
Soon after, npm does the same thing as yarn now if not better.</p>
<p>So remember you can do shit like this:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">"lodash"</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// in the terminal

$ node index.mjs</code>`}<!-- HTML_TAG_END --></pre>
<p>The difference in import</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> app <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"./app.js"</span>

<span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">"lodash"</span></code>`}<!-- HTML_TAG_END --></pre>
<p>The <code>./</code> means that it\u2019s a local file.
The lack of that means it\u2019s a node_module lib.</p>
<p>WHAT IS NPX</p>
<p>npm install is global
You can install things global.
<code>npm install -g yarn</code></p>
<p>Sometimes there are some global CLIs, some global tools that you don\u2019t want to install.
But you need some functionality out of them for there is a one off thing.
Maybe it\u2019s a scaffolding tool.
Maybe it\u2019s a deployment tool, but it\u2019s just something you don\u2019t really wanna keep around, but you do need to run it right quick.</p>
<p><code>npx yarn add lodash</code></p>
<p>That is saying for npx to tell yarn to install lodash for me.</p>
<p>It runs that specific tool without actually installing yarn.</p>
<p>DEPENECENIES VS DEV DEPENVCIES
The difference \u2014
how and when it\u2019s installed.
We\u2019ll go there in test section.</p>
<p><strong>Running npm Scripts</strong></p>
<p>If it gets complicated, move the npm script into a js file.</p>
<h2 id="${"cli"}"><a href="${"#cli"}">CLI</a></h2>
<p><a href="${"https://intro-to-nodejs-v2-site.vercel.app/lesson/09-clis"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://intro-to-nodejs-v2-site.vercel.app/lesson/09-clis</a></p>
<p>any command that runs in the terminal is a CLI.</p>
<p>This allows you to run it from the CLI</p>
<pre class="${"language-reddit.mjs"}"><!-- HTML_TAG_START -->${`<code class="language-reddit.mjs">#! /usr/bin/env node </code>`}<!-- HTML_TAG_END --></pre>
<p>As it tells the terminal what environment it\u2019s running from. </p>
<p>Add a <code>bin</code> to your package.json</p>
<blockquote><p>So in this case, because this is a CLI and this application is not meant to be consumed by an import. I wouldn\u2019t expect you to npm install my CLI, and then import it into your app, unless I explicitly said hey you can also use this CLI programmatically, by importing it.</p></blockquote>
<blockquote><p>Most of the time, that\u2019s just extra work for developers, so they don\u2019t always do that, so it\u2019s usually just only consumed by a CLI. So in that case, this main field probably just gets ignored, right? This main field is only for when someone\u2019s importing, or requiring your application, whereas in this case, it\u2019s a CLI and we don\u2019t plan on having programmatic access.</p></blockquote>
<blockquote><p>So you could think of this as like the main field when it comes to the CLI and not this so you can kind of ignore that, so I just wanted to clear that up. So now we have the bin here and then the last thing we need to do is, we need to install our own CLI on our computer.</p></blockquote>
<p>If it sees that bin command, it\u2019ll do that.</p>
<p>npm is going to create a symlink.</p>
<p><code>npm uninstall -g</code> can often fix a lot of problems.</p>
<p>CLI STUFF
<code>console.log(process.argv)</code></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token constant">PS</span> <span class="token constant">G</span><span class="token operator">:</span>Development\frontend<span class="token operator">-</span>masters<span class="token operator">-</span>temp&#92;node<span class="token operator">-</span>js<span class="token operator">-</span>v2&#92;reddit<span class="token operator">-</span>cli<span class="token operator">></span> node reddit<span class="token punctuation">.</span>mjs
<span class="token punctuation">[</span>
  <span class="token string">'C:\\Program Files&#92;nodejs&#92;node.exe'</span><span class="token punctuation">,</span>
  <span class="token string">'G:\\Development\\frontend-masters-temp&#92;node-js-v2&#92;reddit-cli&#92;reddit.mjs'</span>
<span class="token punctuation">]</span></code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">PS G:Development\frontend-masters-temp&#92;node-js-v2&#92;reddit-cli&gt; node reddit.mjs hello --print     
[
  &#39;C:\\Program Files&#92;nodejs&#92;node.exe&#39;,
  &#39;G:\\Development\\frontend-masters-temp&#92;node-js-v2&#92;reddit-cli&#92;reddit.mjs&#39;,
  &#39;hello&#39;,
  &#39;--print&#39;
]
</code>`}<!-- HTML_TAG_END --></pre>
<p>This piece of code is a CLI to get a random post from reddit with the reddit api
<a href="${"https://www.reddit.com/.json"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.reddit.com/.json</a></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">reddit<span class="token punctuation">.</span>mjs

#<span class="token operator">!</span> <span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>env node 

<span class="token keyword">import</span> fetch <span class="token keyword">from</span> <span class="token string">'node-fetch'</span>
<span class="token keyword">import</span> open <span class="token keyword">from</span> <span class="token string">'open'</span>
<span class="token keyword">import</span> yargs <span class="token keyword">from</span> <span class="token string">'yargs'</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hey im in the reddit cli"</span><span class="token punctuation">)</span>

<span class="token comment">// this puts arguments (flags) that you can get.</span>
<span class="token keyword">const</span> <span class="token punctuation">&#123;</span>argv<span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">yargs</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

<span class="token comment">// https://www.reddit.com/.json</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'https://www.reddit.com/.json'</span>

<span class="token comment">// fetch doesn't return the data. It returns the response.</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> children <span class="token operator">=</span> data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>children
<span class="token keyword">const</span> randomPost <span class="token operator">=</span> children<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> children<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> link <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">https://reddit.com</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>randomPost<span class="token punctuation">.</span>data<span class="token punctuation">.</span>permalink<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span>
<span class="token keyword">const</span> subreddit <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>randomPost<span class="token punctuation">.</span>data<span class="token punctuation">.</span>subreddit_name_prefixed<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>argv<span class="token punctuation">.</span>print<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">
        title: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>randomPost<span class="token punctuation">.</span>data<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">,
        link: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>link<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">,
        subreddit: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>subreddit<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">
    </span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
    <span class="token function">open</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// console.log(data);</span>


</code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">

<span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">u</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">l</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">course</span><span class="token operator">:</span> <span class="token string">'node.js'</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// how to avoid [object object]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"servers"}"><a href="${"#servers"}">Servers</a></h2>
<p><a href="${"https://intro-to-nodejs-v2-site.vercel.app/lesson/10-servers"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://intro-to-nodejs-v2-site.vercel.app/lesson/10-servers</a></p>
<p>Node.js has access to OS level functionality.</p>
<blockquote><p>Node.js has access to OS level functionality, like networking tools. This allows us to build very capable servers. Mixed with the fact that Node.js is single threaded and runs an even loop for async tasks, Node.js is widely used for API\u2019s that need to respond fast and don\u2019t require heavy CPU intensive work.</p></blockquote>
<p>Using the hard way: </p>
<blockquote><p>Node.js ships with the http module. This module is an abstraction around OS level networking tools. For Node.js, the http module would be considered \u201Clow level\u201D. Let\u2019s create a simple server.</p></blockquote>
<p><code>http</code> is \u201Clow level\u201D. You might say that nothing in node is low-level. But this is pretty low-level for node.
You also shouldn\u2019t use <code>http</code> since it\u2019s very low-level.</p>
<p>Servers \u2014&gt; it handles a request, and then gives a response.
Like a server in a restaurant.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// code</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>CLI FRAMEWORKS
commander <a href="${"https://github.com/tj/commander.js/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/tj/commander.js/</a>
heroku cli
oclif - <a href="${"https://blog.heroku.com/open-cli-framework"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://blog.heroku.com/open-cli-framework</a></p>
<p>WHEN TO USE NODE</p>
<blockquote><p>So I\u2019ve had some experience with that. And actually, the first language that I ever learned was Ruby that I learned Python. And then I did learn Java, but not for servers, but for android so I don\u2019t really have any server experience there other than my current job now which does use a lot of Java.</p></blockquote>
<blockquote><p>Yes, I would say, I would always choose node high-level when I don\u2019t have any, high CPU intensive tasks. So things like arithmetic, A.I ,machine learning. Yes, you can do it a node absolutely. But it wasn\u2019t meant for that. And if you tried to do that it\u2019s like trying to squeeze a size 15 shoe in a size 15 foot in a size 10 shoe is just it\u2019s gonna hurt.</p></blockquote>
<blockquote><p>But you could probably do it. So you better off using node for things like I need a JSON API, I need to query your database and they send back some data, that\u2019s it. It\u2019s a crud API, that\u2019s all that I\u2019m doing. It\u2019s not doing crazy stuff. That\u2019s what you would use node for, cuz it\u2019s able to handle a lot of requests out of the box without any tweaking.</p></blockquote>
<blockquote><p>That\u2019s what it was built for. So if you\u2019re going for more request per second, and you\u2019re going for the low CPU intensive tasks, and JavaScript, node is a really good choice. In fact, the thing is you don\u2019t really need to unless you\u2019re a billion dollar company where a fraction of performance could cost you hundreds of thousands if not millions of dollars.</p></blockquote>
<p>WHAT IS MIDDLEWARE?</p>
<blockquote><p>You can think of middleware as like a little piece of functionality that sits in between what you eventually wanna do with the request and when it came in. It\u2019s like a pipe of plugins that can manipulate the request, it can inspect the request, it can do whatever it wants to the request before it eventually sends it to another middleware or, in this case the controller.</p></blockquote>
<blockquote><p>It\u2019s like you have a sandwich, one side of the bread would be the client, the other side of the bread would, no, one side of the bread would be the incoming request and other side of bread would be the response. And then somewhere in the middle is the middleware.</p></blockquote>
<blockquote><p>Like all the stuff that\u2019s in the middle, and then the piece of meat is the controller, right? So the middleware is like all the toppings that just adds all the extra stuff to whatever meat or veggie patty you got going on there, that\u2019s middleware. So body-parser and morgan are those two.</p></blockquote>
<p>You should never release a production thing without logging.</p>
<p>When you push data to a express server, the data is just staying in memory.
If you restart the server, it kills the data.
You\u2019d need to write it somewhere in the future. (DB, json, etc?)</p>
<h2 id="${"testing"}"><a href="${"#testing"}">Testing</a></h2>
<p>One of the more common nodejs things is unit testing and end-to-end testing.</p>
<p>SUPER LOW LEVEL:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token comment">// mylib.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token operator">=></span> num1 <span class="token operator">+</span> num2

<span class="token comment">// mylib.spec.js</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> add <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./myLib.mjs'</span>
<span class="token keyword">import</span> assert <span class="token keyword">from</span> <span class="token string">'assert'</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">
    add() 
    Should add two numbers
</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>

<span class="token comment">// we are assuming that it 1 + 2 will equal to 4, which is incorrect.</span>
<span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
    assert<span class="token punctuation">.</span><span class="token function">strictEqual</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"SUCCESS"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"FAIL"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">PS <span class="token punctuation"></span>testing<span class="token operator">></span> <span class="token function">node</span> lib.spec.mjs

    add<span class="token punctuation">(</span><span class="token punctuation">)</span>
    Should <span class="token function">add</span> two numbers

FAIL
AssertionError <span class="token punctuation">[</span>ERR_ASSERTION<span class="token punctuation">]</span>: Expected values to be strictly equal:

<span class="token number">3</span> <span class="token operator">!=</span><span class="token operator">=</span> <span class="token number">4</span>

    at file:///G:/Development/frontend-masters-temp/node-js-v2/testing/lib.spec.mjs:10:12
    at ModuleJob.run <span class="token punctuation">(</span>internal/modules/esm/module_job.js:152:23<span class="token punctuation">)</span>
    at async Loader.import <span class="token punctuation">(</span>internal/modules/esm/loader.js:166:24<span class="token punctuation">)</span>
    at async Object.loadESM <span class="token punctuation">(</span>internal/process/esm_loader.js:68:5<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  generatedMessage: true,
  code: <span class="token string">'ERR_ASSERTION'</span>,
  actual: <span class="token number">3</span>,
  expected: <span class="token number">4</span>,
  operator: <span class="token string">'strictEqual'</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>JEST:
THis is all piggybacking off of Jasmine, and grabbing more from Mocha.</p>
<h2 id="${"deployment"}"><a href="${"#deployment"}">Deployment</a></h2>
<p><a href="${"https://intro-to-nodejs-v2-site.vercel.app/lesson/12-deployment"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://intro-to-nodejs-v2-site.vercel.app/lesson/12-deployment</a></p>
<p>This is to publish a npm package.</p>
<ol class="${"list"}"><li>create an account</li></ol>
<ol start="${"2"}" class="${"list"}"><li><code>npm publish</code></li></ol>
<p>How it looks <a href="${"https://www.npmjs.com/package/scott-reddit-cli"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.npmjs.com/package/scott-reddit-cli</a></p>
<p>Heroku - it\u2019s built on top of AWS but made a lot easier.</p>
<h2 id="${"wrapup"}"><a href="${"#wrapup"}">Wrapup</a></h2>
<blockquote><p>[00:01:53]
Something that I like to do is I like to take a small chunk of time, whether it\u2019s 60 minutes or 90 minutes. Especially in Node and like pick a technology that I\u2019m just not familiar with in Node, whether it\u2019s like streams, WebSockets, HTTPS, a different database. And I\u2019m like, all right, 60 minutes, build the smallest thing you can make with this.</p></blockquote>
<blockquote><p>[00:02:14]
Whether it\u2019s following a HelloWorld tutorial on the documentation website, or watching a video. I try to build the smallest thing that I can and I try to do that multiple times. And usually within a week, I really understand that technology to the point where I\u2019m comfortable talking about it, and it\u2019s no longer foreign to me.</p></blockquote>
<blockquote><p>[00:02:29]
And I might not be great at it, but I\u2019m no longer foreign. And that\u2019s kinda how I develop my knowledge, and that\u2019s kinda how I move through things. And then when I come across it in the real world, and I use it at work, that\u2019s when I develop a deep knowledge for it.</p></blockquote>
<blockquote><p>[00:02:41]
So that\u2019s just some of the tips that I wanted to pass on to you and I don\u2019t know if that\u2019ll work or not, but that\u2019s just how I do things. Other than that, I can leave you with some really cool JavaScript projects or NodeJS projects that I think are really cool.</p></blockquote>
<p><strong>When to Upgrade NPM packages?</strong></p>
<p>Only upgrade when you need it.
<code>npm update [packagename]</code></p>
<p>Like major updates, there might be a lot of refactors to get there.</p>`;
    }
  })}`;
});
export { Week_four_nodejs_v2_svelte as default, metadata };
