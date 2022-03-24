import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-ab845620.js";
export { l as load } from "../../../chunks/_layout-ab845620.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-3d93c575.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Eleven - React",
  "created": "2022-01-27T00:00:00.000Z",
  "summary": "Complete Intro to React",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_eleven_complete_intro_react_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2 id="${"no-frills-react"}"><a href="${"#no-frills-react"}">No Frills React</a></h2>
<p>Dan Abramov </p>
<p>SLIDES: <a href="${"https://btholt.github.io/complete-intro-to-react-v6/pure-react"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://btholt.github.io/complete-intro-to-react-v6/pure-react</a></p>
<p>REPO: <a href="${"https://github.com/btholt/complete-intro-to-react-v6"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/btholt/complete-intro-to-react-v6</a></p>
<p>In VS code, you can <code>html.5</code> in a html file to scaffold the page automatically.</p>
<p>The goal of this course. Before we go into the tools, let\u2019s go into the details. So how <code>create-react-app</code> works.</p>
<p>When importing react scripts:
You need both <code>react</code> and <code>react-dom</code>.</p>
<blockquote><p>You need both packages because react requires two packages to render. React is like the high level API all react works relatively the same way. And then react DOM is actually the underlying line library that interacts with the DOM right? I\u2019m sure many of you have heard of React Native, right? So React Native uses both React and React Native, that\u2019s why you need both of those.</p></blockquote>
<figure><img src="${"https://i.imgur.com/gz6ZDJh.png"}"></figure>
<blockquote><p>I guess the story for that people wanna know is there\u2019s internals that React has and the React team previously had directly used those. So Facebook.com was using private APIs, and so they made this thing here that they said, do not use it or you will be fired at Facebook.</p></blockquote>
<p>SLIDES: <a href="${"https://btholt.github.io/complete-intro-to-react-v6/components"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://btholt.github.io/complete-intro-to-react-v6/components</a></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
    <span class="token string">"div"</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> 
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h1"</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"logo"</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token string">"Adopt Me!"</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This is the default React instance. </p>
<p>In JSX, it\u2019s actually required to capitalize your component names. </p>
<p><code>React.createElement(ELEMENT NAME, ELEMENT ATTRIBUTES/PROPS, DATA)</code></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// const Pet = () => &#123;</span>
<span class="token comment">//   return </span>
<span class="token comment">//     React.createElement("div", &#123;&#125;, [</span>
<span class="token comment">//       React.createElement("h2", &#123;&#125;, "Luna"),</span>
<span class="token comment">//       React.createElement("h3", &#123;&#125;, "Dog"),</span>
<span class="token comment">//       React.createElement("h3", &#123;&#125;, "Havanese"),</span>
<span class="token comment">//     ])</span>
<span class="token comment">// &#125;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Pet</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> 
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
      React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h2"</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
      React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h3"</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>animal<span class="token punctuation">)</span><span class="token punctuation">,</span>
      React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h3"</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>breed<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>


<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
    <span class="token string">"div"</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> 
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h1"</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"logo"</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token string">"Adopt Me!"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Pet<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Luna"</span><span class="token punctuation">,</span> <span class="token literal-property property">animal</span><span class="token operator">:</span> <span class="token string">"Dog"</span><span class="token punctuation">,</span> <span class="token literal-property property">breed</span><span class="token operator">:</span> <span class="token string">"Havanese"</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Pet<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Pepper"</span><span class="token punctuation">,</span> <span class="token literal-property property">animal</span><span class="token operator">:</span> <span class="token string">"Bird"</span><span class="token punctuation">,</span> <span class="token literal-property property">breed</span><span class="token operator">:</span> <span class="token string">"Cockatiel"</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Pet<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Sudo"</span><span class="token punctuation">,</span> <span class="token literal-property property">animal</span><span class="token operator">:</span> <span class="token string">"Dog"</span><span class="token punctuation">,</span> <span class="token literal-property property">breed</span><span class="token operator">:</span> <span class="token string">"Terrier"</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"javascript-tools"}"><a href="${"#javascript-tools"}">JavaScript Tools</a></h2>
<h3 id="${"prettier"}"><a href="${"#prettier"}">PRETTIER</a></h3>
<p>To add Prettier:</p>
<ol class="${"list"}"><li><p><code>npm i -D prettier</code></p></li>
<li><p>create <code>.prettierrc</code>  file</p></li></ol>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// .prettierrc</span>
<span class="token comment">// just a empty object</span>
<span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<ol start="${"3"}" class="${"list"}"><li>Update your scripts</li></ol>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">
<span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token string-property property">"format"</span><span class="token operator">:</span> <span class="token string">"prettier --write "src/**/*.&#123;js,jsx&#125;""</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>If you want prettier to work within a project, you\u2019ll have to install it there. Not use VScode\u2019s default.</p>
<p>VS Code way - get the extention then change the prettier settings.</p>
<h3 id="${"eslint"}"><a href="${"#eslint"}">ESLINT</a></h3>
<ol class="${"list"}"><li><code>npm install -D eslint@7.18.0 eslint-config-prettier@8.1.0</code></li></ol>
<p>You\u2019ll also need to add these:
<code>npm install -D eslint-plugin-import@2.22.1 eslint-plugin-jsx-a11y@6.4.1 eslint-plugin-react@7.22.0</code></p>
<p>And finally here:
<code>npm install -D eslint-plugin-react-hooks@4.2.0</code></p>
<ol start="${"2"}" class="${"list"}"><li>create a <code>eslintrc.json</code></li></ol>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// .eslintrc.json</span>
<span class="token punctuation">&#123;</span>
  <span class="token string-property property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"eslint:recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"plugin:import/errors"</span><span class="token punctuation">,</span>
    <span class="token string">"plugin:react/recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"plugin:jsx-a11y/recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"plugin:react-hooks/recommended"</span><span class="token punctuation">,</span>    
    <span class="token string">"prettier"</span><span class="token punctuation">,</span> <span class="token comment">// has to go last</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token string-property property">"react/prop-types"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">"react/react-in-jsx-scope"</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token string-property property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"react"</span><span class="token punctuation">,</span> <span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token string">"jsx-ally"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"parserOptions"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token string-property property">"ecmaVersion"</span><span class="token operator">:</span> <span class="token number">2021</span><span class="token punctuation">,</span>
    <span class="token string-property property">"sourceType"</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"ecmaFeatures"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token string-property property">"jsx"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token string-property property">"env"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token string-property property">"es6"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"browser"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"node"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token string-property property">"settings"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token string-property property">"react"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token string">"detect"</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<ol start="${"3"}" class="${"list"}"><li>Add a script</li></ol>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token string-property property">"format"</span><span class="token operator">:</span> <span class="token string">"prettier --write "src/**/*.&#123;js,jsx&#125;""</span>
  <span class="token string-property property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint "src/**/*.&#123;js,jsx&#125;" --quiet"</span>  
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<ol start="${"4"}" class="${"list"}"><li>If you got a errors from the linter, put this on top of your react files</li></ol>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">/* global React ReactDOM */</span></code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"npm"}"><a href="${"#npm"}">NPM</a></h3>
<p><code>package-lock.json</code> is to share libs with a project and ensure it\u2019s exactly the same with everyone.</p>
<p>So remember that devDependencies are only for things your project needs.
Where dependencies are built into the project.</p>
<h3 id="${"parcel"}"><a href="${"#parcel"}">Parcel</a></h3>
<p>Bundler for Javascript, like Webpack.</p>
<p>Parcel is kinda smart and can do a lot of defaults. </p>
<p><code>npm install -D parcel@1.12.3</code></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token string-property property">"format"</span><span class="token operator">:</span> <span class="token string">"prettier --write "src/**/*.&#123;js,jsx&#125;""</span>
  <span class="token string-property property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint "src/**/*.&#123;js,jsx&#125;" --quiet"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"parcel src/index.html"</span>  
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>It just knows to dig through index.html and get everything.</p>
<p>It even comes with hot module reload.</p>
<h3 id="${"babel"}"><a href="${"#babel"}">Babel</a></h3>
<p>TIL - the diff between compile vs translation</p>
<blockquote><p>One of my favorite tools again being an infrastructure is Babel. I just like it. Probably a glutton for punishment, I suppose. But it\u2019s a transpiler tool. It takes code that looks one way and it makes it look a different way. And that\u2019s really the some of the store it\u2019s not a compiler, right?.</p></blockquote>
<blockquote><p>You\u2019re not taking like a C++ source code and compiling it to a binary. That\u2019s compilation translation is, I have a set of source code and I\u2019m making it just different source code. So, Babel is already working for us underneath the hood. One of the things that it does for us, you can write things in es 2021, and it\u2019ll transpile Harder for you to IES 2015.</p></blockquote>
<ol class="${"list"}"><li><p><code>npm install -D @babel/core@7.12.16 @babel/preset-react@7.12.13</code></p></li>
<li><p><code>.babelrc</code></p></li></ol>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token punctuation">&#123;</span>
  <span class="token string-property property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">"@babel/preset-react"</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#123;</span>
        <span class="token string-property property">"runtime"</span><span class="token operator">:</span> <span class="token string">"automatic"</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"browserslist"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// " > 25%", </span>
    <span class="token comment">// "IE11",</span>
    <span class="token string">"last 2 Chrome versions"</span><span class="token punctuation">,</span> <span class="token comment">// you can also do last 2 Firefox versions</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>TIL:
<a href="${"https://browserslist.dev/?q=bGFzdCA0IHZlcnNpb25z"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://browserslist.dev/?q=bGFzdCA0IHZlcnNpb25z</a></p>
<ol start="${"3"}" class="${"list"}"><li>You shouldn\u2019t ship your map stuff to production.</li></ol>
<h2 id="${"core-react-concepts"}"><a href="${"#core-react-concepts"}">Core React Concepts</a></h2>
<h3 id="${"jsx"}"><a href="${"#jsx"}">JSX</a></h3>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// JS version</span>
<span class="token keyword">const</span> <span class="token function-variable function">Pet</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> 
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
      React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h2"</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
      React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h3"</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>animal<span class="token punctuation">)</span><span class="token punctuation">,</span>
      React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h3"</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>breed<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>


<span class="token comment">// JSX version</span>
<span class="token keyword">const</span> <span class="token function-variable function">Pet</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">&#123;</span>props<span class="token punctuation">.</span>name<span class="token punctuation">&#125;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">&#123;</span>props<span class="token punctuation">.</span>animal<span class="token punctuation">&#125;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">&#123;</span>props<span class="token punctuation">.</span>breed<span class="token punctuation">&#125;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>      
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"hooks"}"><a href="${"#hooks"}">Hooks</a></h3>
<p>SLIDES: <a href="${"https://btholt.github.io/complete-intro-to-react-v6/hooks"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://btholt.github.io/complete-intro-to-react-v6/hooks</a></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>


<span class="token keyword">const</span> <span class="token constant">ANIMALS</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"bird"</span><span class="token punctuation">,</span> <span class="token string">"cat"</span><span class="token punctuation">,</span> <span class="token string">"dog"</span><span class="token punctuation">,</span> <span class="token string">"fish"</span><span class="token punctuation">,</span> <span class="token string">"horse"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// SearchParams.js</span>
<span class="token keyword">const</span> <span class="token function-variable function">SearchParams</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>

  <span class="token comment">// this won't work. It's always rendering this, without a onChange.</span>
  <span class="token comment">// const location = "Seattle, WA";</span>

  <span class="token comment">// instead, switch to hooks</span>
    <span class="token keyword">const</span> locationTuple <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"Seattle, WA"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> location <span class="token operator">=</span> locationTuple<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> setLocation <span class="token operator">=</span> locationTuple<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

    <span class="token comment">// Destructured</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span> location<span class="token punctuation">,</span> setLocation <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"Seattle, WA"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span> animal<span class="token punctuation">,</span> setAnimal <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"search-params"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>form<span class="token operator">></span>
        <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"location"</span><span class="token operator">></span>
          Location 
                  <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"location"</span> 
                    onChange<span class="token operator">=</span><span class="token punctuation">&#123;</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">setLocation</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">&#125;</span> 
                    value<span class="token operator">=</span><span class="token punctuation">&#123;</span>location<span class="token punctuation">.</span><span class="token function">toUppercase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span> placeholder<span class="token operator">=</span><span class="token string">"Location"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>


        <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"animal"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>select
            id<span class="token operator">=</span><span class="token string">"animal"</span>
            value<span class="token operator">=</span><span class="token punctuation">&#123;</span>animal<span class="token punctuation">&#125;</span>
            onChange<span class="token operator">=</span><span class="token punctuation">&#123;</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">setAnimal</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">&#125;</span>
            onBlue<span class="token operator">=</span><span class="token punctuation">&#123;</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">setAnimal</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">&#125;</span>          
            <span class="token operator">></span>

            <span class="token punctuation">&#123;</span> <span class="token constant">ANIMALS</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">animal</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span>
                  <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token punctuation">&#123;</span>animal<span class="token punctuation">&#125;</span> key<span class="token operator">=</span><span class="token punctuation">&#123;</span>animal<span class="token punctuation">&#125;</span><span class="token operator">></span>
                    <span class="token punctuation">&#123;</span>animal<span class="token punctuation">&#125;</span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
                <span class="token punctuation">)</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> 
            <span class="token punctuation">&#125;</span>


          <span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>

        <span class="token operator">&lt;</span>button<span class="token operator">></span>Submit<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/fvF9tQT.png"}"></figure>
<p>Never ever do this.
Never put hooks inside of conditionals like ifs, or for loops.</p>
<p>It\u2019s called hooks because the </p>
<figure><img src="${"https://i.imgur.com/XCZ3jqP.png"}"></figure>
<h3 id="${"useeffect--fetching-api-data"}"><a href="${"#useeffect--fetching-api-data"}">useEffect &amp; Fetching API data</a></h3>
<p><a href="${"https://btholt.github.io/complete-intro-to-react-v6/useeffect"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://btholt.github.io/complete-intro-to-react-v6/useeffect</a></p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Pet <span class="token keyword">from</span> <span class="token string">"./Pet"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">ANIMALS</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"bird"</span><span class="token punctuation">,</span> <span class="token string">"cat"</span><span class="token punctuation">,</span> <span class="token string">"dog"</span><span class="token punctuation">,</span> <span class="token string">"fish"</span><span class="token punctuation">,</span> <span class="token string">"horse"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// SearchParams.js</span>
<span class="token keyword">const</span> <span class="token function-variable function">SearchParams</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>

    <span class="token comment">// Destructured</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span> location<span class="token punctuation">,</span> setLocation <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"Seattle, WA"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span> animal<span class="token punctuation">,</span> setAnimal <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>pets<span class="token punctuation">,</span> setPets<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


  <span class="token comment">// if you didn't add the [], it'll run every single render. By adding a [], which is once. </span>
  <span class="token comment">// Or you can do [animal], if animal changes.</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token function">requestPets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


  <span class="token comment">// </span>
  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">requestPets</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">http://pets-v2.dev-apis.com/pets?=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>animal<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">&amp;location=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>location<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">&amp;breed=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>breed<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span>
    <span class="token punctuation">)</span>

    <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// once json exists, it'll then pass it to setPets, which updates the state.</span>
    <span class="token function">setPets</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>pets<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>


  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"search-params"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>form<span class="token operator">></span>
        <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"location"</span><span class="token operator">></span>
          Location 
                  <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"location"</span> 
                    onChange<span class="token operator">=</span><span class="token punctuation">&#123;</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">setLocation</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">&#125;</span> 
                    value<span class="token operator">=</span><span class="token punctuation">&#123;</span>location<span class="token punctuation">.</span><span class="token function">toUppercase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span> placeholder<span class="token operator">=</span><span class="token string">"Location"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>


        <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"animal"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>select
            id<span class="token operator">=</span><span class="token string">"animal"</span>
            value<span class="token operator">=</span><span class="token punctuation">&#123;</span>animal<span class="token punctuation">&#125;</span>
            onChange<span class="token operator">=</span><span class="token punctuation">&#123;</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">setAnimal</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">&#125;</span>
            onBlue<span class="token operator">=</span><span class="token punctuation">&#123;</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">setAnimal</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">&#125;</span>          
            <span class="token operator">></span>

            <span class="token punctuation">&#123;</span> <span class="token constant">ANIMALS</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">animal</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span>
                  <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token punctuation">&#123;</span>animal<span class="token punctuation">&#125;</span> key<span class="token operator">=</span><span class="token punctuation">&#123;</span>animal<span class="token punctuation">&#125;</span><span class="token operator">></span>
                    <span class="token punctuation">&#123;</span>animal<span class="token punctuation">&#125;</span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
                <span class="token punctuation">)</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> 
            <span class="token punctuation">&#125;</span>

          <span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>

        <span class="token operator">&lt;</span>button<span class="token operator">></span>Submit<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>


<span class="token punctuation">&#123;</span>
  pets<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">pet</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>Pet
        name<span class="token operator">=</span><span class="token punctuation">&#123;</span>pet<span class="token punctuation">.</span>name<span class="token punctuation">&#125;</span>
        animal<span class="token operator">=</span><span class="token punctuation">&#123;</span>pet<span class="token punctuation">.</span>breed<span class="token punctuation">&#125;</span><span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

  
<span class="token punctuation">&#125;</span>

    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>If you use <code>setTimeout</code> in <code>useEffect</code>, you should also clean up.</p>
<figure><img src="${"https://i.imgur.com/O5nX5Wk.png"}"></figure>
<h3 id="${"custom-hook"}"><a href="${"#custom-hook"}">Custom Hook</a></h3>
<p>Say before you make a API call, you want to check if the data already exists.
If it does, then it returns it.</p>
<p>There\u2019s no specialness that happens. </p>
<p>You shouldn\u2019t actually make a custom hook too frequently.
But this becomes a black box. And it might be better to be search params.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">useBreedList</span><span class="token punctuation">(</span><span class="token parameter">animal</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">const</span> <span class="token punctuation">[</span> breedList<span class="token punctuation">,</span> setBreedList <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// default empty	</span>
	<span class="token keyword">const</span> <span class="token punctuation">[</span> status<span class="token punctuation">,</span> setStatus <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'unloaded'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// enum state</span>


	<span class="token comment">// this will run every time the animal changes. </span>
	<span class="token function">useEffect</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>animal<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token function">setBreedList</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>localCache<span class="token punctuation">[</span>animal<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token function">setBreedList</span><span class="token punctuation">(</span>localCache<span class="token punctuation">[</span>animal<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
			<span class="token function">requestBreedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>
	
	
		<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">requestBreedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>

			<span class="token comment">// reset breedlist </span>
			<span class="token function">setBreedList</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			<span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token string">'loading'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
				<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">http://pets-v2.dev-apis.com/breeds?animal=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>animal<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span>
			<span class="token punctuation">)</span>
			
			<span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			localCache<span class="token punctuation">[</span>animal<span class="token punctuation">]</span> <span class="token operator">=</span> json<span class="token punctuation">.</span>breeds <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		
			<span class="token function">setBreedList</span><span class="token punctuation">(</span>localCache<span class="token punctuation">[</span>animal<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token string">'loaded'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>
	
	<span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>animal<span class="token punctuation">]</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token punctuation">[</span> breedlist<span class="token punctuation">,</span> status<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>Handling User Input
Event Handler: <a href="${"https://reactjs.org/docs/events.html#supported-events"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://reactjs.org/docs/events.html#supported-events</a></p>
<p>Animation, touch events, copy events, UI events</p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html">&lt;form onSubmit=&#123; (e) => &#123;
		e.preventDefault()
		requestPets()
	&#125;&#125; ></code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/IVjvUnk.png"}"></figure>
<p>It \u201Clooks\u201D like a native DOM event? Well no, it\u2019s a React Event. </p>
<figure><img src="${"https://i.imgur.com/J9VOJ1c.png"}"></figure>
<p>The <code>key</code> is keeping track of react changes.
React does not allow you to create a prop called <code>key</code></p>
<p>ADD TO TIL:
<strong>Don\u2019t be clever with your props!</strong></p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">// BAD
&lt;Pet &#123;...pet&#125; key=&#123;pet.id&#125;&gt;


// GOOD
&lt;Pet
	animal=&#123;pet.animal&#125;
	key=&#123;pet.id&#125;
	name=&#123;pet.name&#125;
	breed=&#123;pet.breed&#125;
	images=&#123;pet.images&#125;
/&gt;
</code>`}<!-- HTML_TAG_END --></pre>
<blockquote><p>[00:08:36] And let me tell you from deep experience with this problem, it makes us so much harder to read later. Because I\u2019ll come back here is like what the hell is pep getting? I don\u2019t know, right you become unable to understand. How the parent is interacting with the child by reading the code.</p></blockquote>
<blockquote><p>So this is exactly what I\u2019m talking about is like the waters become very murky of what\u2019s going where and are we getting the right things in the right locations. So I wanted to show you because you\u2019re never really going to run into this because this looks so nice and so easy to type. But just don\u2019t do it believe me, having worked on a code base that did this a lot. It was incredibly frustrating to work with. Just stick to this, I know it\u2019s verbose and takes so many keystrokes in my fingers are so tired and please help me, but don\u2019t just, don\u2019t do it.</p></blockquote>
<h3 id="${"dev-environment"}"><a href="${"#dev-environment"}">Dev Environment</a></h3>
<p><code>NODE_ENV=development</code></p>
<p>ADD TO TIL:
Slack was shipping development mode for years, and saw a massive speed boost. </p>
<p>RESEARCH: <a href="${"https://twitter.com/pankowecki/status/892294002040594434"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://twitter.com/pankowecki/status/892294002040594434</a>
<a href="${"https://news.ycombinator.com/item?id=14899482"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://news.ycombinator.com/item?id=14899482</a></p>
<p>Higher Order Component in React
in the sense that it itself doesn\u2019t do anything, but it offers functionality to its children components.</p>
<h2 id="${"react-capabilities"}"><a href="${"#react-capabilities"}">React Capabilities</a></h2>
<p>React Router V3 -&gt; V4 -&gt; V5 is WILDLY different.
But each new version is very powerful.</p>
<h3 id="${"class-components"}"><a href="${"#class-components"}">Class Components</a></h3>
<p>Hook vs class components
class has lifecycle hooks </p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Component <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> withRouter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>

<span class="token comment">// const Details = () => &#123;</span>
<span class="token comment">//	return &lt;h2>hi lololol omg &lt;/h2></span>
<span class="token comment">// &#125; </span>

<span class="token keyword">class</span> <span class="token class-name">Details</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">&#123;</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// has to do it. Calls the Component Constructor</span>
		
		<span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span>

	<span class="token comment">// it's kinda like useEffect </span>
	<span class="token comment">// fetch all the data </span>
	<span class="token keyword">async</span> <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>	<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">http://pets-v2.dev-apis.com/pets?id=&#123;this.props.match.params.id&#125;</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	
		<span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// this merges with your state</span>
		<span class="token comment">// it ONLY overrides what you have. So it won't change things. </span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
			<span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
			<span class="token literal-property property">name</span><span class="token operator">:</span> json<span class="token punctuation">.</span>pets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> 
			<span class="token literal-property property">breed</span><span class="token operator">:</span> json<span class="token punctuation">.</span>pets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>breed<span class="token punctuation">,</span>
			<span class="token comment">// .. other stuff</span>
	
		<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// Or you can merge two objects together</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>
			Object<span class="token punctuation">.</span><span class="token function">Assign</span><span class="token punctuation">(</span>
			<span class="token punctuation">&#123;</span>
				<span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
			<span class="token punctuation">&#125;</span><span class="token punctuation">,</span> json<span class="token punctuation">.</span>pets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>		
			<span class="token punctuation">)</span>		
		<span class="token punctuation">)</span>
	
	<span class="token punctuation">&#125;</span>

	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">></span> Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span><span class="token punctuation">;</span>
	
		<span class="token punctuation">&#125;</span>

		<span class="token comment">// let's destructure the API </span>
		<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> animal<span class="token punctuation">,</span> breed<span class="token punctuation">,</span> city<span class="token punctuation">,</span> state<span class="token punctuation">,</span> description<span class="token punctuation">,</span> name <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>

		<span class="token keyword">return</span> <span class="token punctuation">(</span>
		
		<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"details"</span><span class="token operator">></span>

			<span class="token operator">&lt;</span>div<span class="token operator">></span>
				<span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">&#123;</span>name<span class="token punctuation">&#125;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
				<span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">&#123;</span>&#96;$<span class="token punctuation">&#123;</span>animal<span class="token punctuation">&#125;</span> <span class="token operator">-</span> $<span class="token punctuation">&#123;</span>breed<span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">&#125;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
		
		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>		
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withRouter</span><span class="token punctuation">(</span>Details<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"class-properties"}"><a href="${"#class-properties"}">Class Properties</a></h3>
<p>Follow this:
<a href="${"https://btholt.github.io/complete-intro-to-react-v6/class-properties"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://btholt.github.io/complete-intro-to-react-v6/class-properties</a></p>
<p>Configure your babel configs for this: </p>
<p><code>npm i -D @babel/plugin-proposal-class-properties@7.13.0 @babel/preset-env@7.13.5 @babel/eslint-parser@7.13.4</code></p>
<p>a quick way to clean out all of your cache.
<code>rm -rf .cache dist</code></p>
<p>ADD TO TIL
By adding a + in front of a variable, it will coercion it into a number. </p>
<figure><img src="${"https://i.imgur.com/PHEGAHc.png"}"></figure>
<h2 id="${"special-case-react-tools"}"><a href="${"#special-case-react-tools"}">Special Case React Tools</a></h2>
<h3 id="${"errors"}"><a href="${"#errors"}">Errors</a></h3>
<p>So you can only do error boundries in React Component Classes.</p>
<p>For example:
If you fail grabbing an API, you can </p>
<ol class="${"list"}"><li><p>do a error component that sends it to your error tracking tool.</p></li>
<li><p>You can have it redirect back to your main page. </p></li></ol>
<p>More info here: <a href="${"https://btholt.github.io/complete-intro-to-react-v6/error-boundaries"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://btholt.github.io/complete-intro-to-react-v6/error-boundaries</a></p>
<h3 id="${"context"}"><a href="${"#context"}">Context</a></h3>
<blockquote><p>So here we go. What is context? Context is like state, but instead of being confined to a component, it\u2019s global to your application. It\u2019s application-level state. This is dangerous. Avoid using context until you have to use it. One of React\u2019s primary benefit is it makes the flow of data obvious by being explicit. This can make it cumbersome at times but it\u2019s worth it because your code stays legible and understandable. Things like context obscure it.</p></blockquote>
<blockquote><p>Context (mostly) replaces Redux. Well, typically. It fills the same need as Redux. I really can\u2019t see why you would need to use both. Use one or the other.</p></blockquote>
<p>notes: <a href="${"https://btholt.github.io/complete-intro-to-react-v6/context"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://btholt.github.io/complete-intro-to-react-v6/context</a></p>
<h3 id="${"portals-refs"}"><a href="${"#portals-refs"}">Portals, Refs</a></h3>
<p>Portals have to show in front of you. </p>
<p>In your root <code>html</code> file.</p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Now modal can live ABOVE your file.</p>
<figure><img src="${"https://i.imgur.com/fbB1FZz.png"}"></figure>`;
    }
  })}`;
});
export { Week_eleven_complete_intro_react_svelte as default, metadata };
