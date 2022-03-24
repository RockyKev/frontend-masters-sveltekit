import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-ab845620.js";
export { l as load } from "../../../chunks/_layout-ab845620.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-3d93c575.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Six - Code Transformation with ASTs",
  "created": "2021-12-05T00:00:00.000Z",
  "summary": "Javascript Code Transformation and Linting with ASTs",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_six_code_transformation_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2 id="${"what-is-it"}"><a href="${"#what-is-it"}">What is it</a></h2>
<p>Abstract Syntax Trees. </p>
<blockquote><p>An AST is the result of parsing code. For JavaScript, an AST is a JavaScript object containing a tree representation of your source. Before we use it, we have to create it. Depending on the code we are parsing, we choose the appropriate parser.</p></blockquote>
<p>Honestly, it would be easier to read this to get a better picture:
<a href="${"https://www.digitalocean.com/community/tutorials/js-traversing-ast"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.digitalocean.com/community/tutorials/js-traversing-ast</a></p>
<p>And Kent C. Dodd\u2019s course is more when you\u2019re ready to get your hands dirty with making some AST rules.</p>
<p>Github: <a href="${"https://github.com/kentcdodds/asts-workshop"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/kentcdodds/asts-workshop</a>
Slides: <a href="${"https://frontendmasters.com/courses/linting-asts/examples-of-abstract-syntax-trees/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://frontendmasters.com/courses/linting-asts/examples-of-abstract-syntax-trees/</a></p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">git clone https://github.com/kentcdodds/asts-workshop.git
cd asts-workshop
yarn run setup --silent
node scripts/autofill-feedback-email.js YOUR_EMAIL@DOMAIN.COM
git commit -am &quot;ready to go&quot;</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"abstract-syntax-trees"}"><a href="${"#abstract-syntax-trees"}">Abstract Syntax Trees</a></h2>
<p>If you\u2019re using Babel: </p>
<p>It\u2019s how we use ESNext -&gt; BABEL -&gt; ES Now</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> add <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'lodash/fp'</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>Codemods better than find/replace</p>
<p>There\u2019s a bunch of codemods  (react-codemod, jest-codemod, etc)</p>
<p>Check out this visual Javascript AST Visualizer</p>
<figure><img src="${"https://resources.jointjs.com/demos/javascript-ast"}"></figure>
<p>Another tool:
<a href="${"https://astexplorer.net/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://astexplorer.net/</a></p>
<figure><img src="${"https://i.imgur.com/rjstvCE.png"}"></figure>
<p>AST doesn\u2019t run code. It just analyses it. </p>
<h2 id="${"eslint-plugin-and-ast"}"><a href="${"#eslint-plugin-and-ast"}">ESlint Plugin and AST</a></h2>
<blockquote><p>ESLint is really good at identifying patterns that are not the kind of patterns you want in your code base, and that includes stylistic issues, but also actual logical problems or domain specific things.</p></blockquote>
<p>So to do a linting example:</p>
<figure><img src="${"https://i.imgur.com/h9eTahx.png"}"></figure>
<ol class="${"list"}"><li><p>You write a valid and a invalid version.</p></li>
<li><p>This has a <code>meta</code> for generating docs. And a it has a <code>creator</code></p></li>
<li><p>The final arrow is the AST explorer.</p></li></ol>
<figure><img src="${"https://i.imgur.com/xJsMJca.png"}"></figure>
<p>So to work with this description:
<code>dissallow If Statements without blocks</code></p>
<p>In the yellow, it\u2019s checking the nodes, and navigates through each block that fits.
If there\u2019s another if statement, it moves to that node. </p>
<figure><img src="${"https://i.imgur.com/B6AZUML.png"}"></figure>
<p>Things has a <code>consequent</code> and in the block statement.</p>
<p>The <code>create</code> method returns a \`context.report()
so you can return a message.</p>
<p>AST are just javascript objects.</p>
<p>Essentially, you\u2019re opening up the object in console.log, and finding the patterns of the (invalid) versus (valid) things, and writing the code to match it.</p>
<h3 id="${"things-to-consider"}"><a href="${"#things-to-consider"}">Things to consider</a></h3>
<p>Overall, it\u2019s just Javascript. You\u2019re writing a javascript function to check things, and it returns some true/false.
It\u2019s just traversing the nodes and turning things into objects so it can check.</p>
<p>Performance doesn\u2019t matter in this context.</p>
<p>He had to pass all the results to <code>consoleUsages</code> array, because he had to wait for:</p>
<ol class="${"list"}"><li>The entire tree to be traversed so the parent is connected to the child node.</li></ol>
<h3 id="${"rockys-specific-notes-in-this-section"}"><a href="${"#rockys-specific-notes-in-this-section"}">Rocky\u2019s specific notes in this section.</a></h3>
<ul class="${"list"}"><li><p>He\u2019s writing it very much like jQuery-ish, where it\u2019s slicing the object as much as he can until he gets the object\u2019s key/value that he wants, and then checks for that. </p></li>
<li><p>He constantly creates helpers for himself. He finds a opportunity to shorten a 3-4 lines into a function, he will.</p></li></ul>
<p>More plugin links:
<a href="${"https://eslint.org/docs/developer-guide/working-with-plugins"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://eslint.org/docs/developer-guide/working-with-plugins</a></p>
<h2 id="${"babel-plugin-an-ast"}"><a href="${"#babel-plugin-an-ast"}">Babel Plugin an AST</a></h2>
<blockquote><p>This module contains methods for building ASTs manually and for checking the types of AST nodes.</p></blockquote>
<p>Check out Babel Types: <a href="${"https://babeljs.io/docs/en/babel-types"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://babeljs.io/docs/en/babel-types</a></p>
<p>So Babel\u2019s have a lot of methods. So things like replacing the strings.</p>
<h3 id="${"rockys-specific-notes-about-this-section"}"><a href="${"#rockys-specific-notes-about-this-section"}">Rocky\u2019s specific notes about this section</a></h3>
<p>This is just like the other one. </p>
<p>Babel builds it\u2019s ast by doing <code>start: 32 end: 44</code> so you check between the two. </p>
<h2 id="${"codemods-and-ast"}"><a href="${"#codemods-and-ast"}">Codemods and AST</a></h2>
<p><a href="${"https://github.com/codemod-js/codemod"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/codemod-js/codemod</a></p>
<p>Codemods are often domain-specific \u2014 </p>
<p>Use-cases:</p>
<ul class="${"list"}"><li>This tool changed from version 1 to version 2 and all the apis changed. So now you have to do all these fixes.</li>
<li>You want to do something better than a find/replace</li></ul>
<p>The use-case they used is jQuery to Javascript.</p>
<p><a href="${"https://github.com/codemod-js/codemod"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/codemod-js/codemod</a></p>
<blockquote><p>Codemods are intended to change the source code so that you can migrate away from an old API, or something like that, old testing framework, whatever. And they\u2019re super duper cool. And because it uses babel, or because we can use Babel to do this, you pretty much know every thing you need to know about building this, it\u2019s just taking the time getting used to the APIs and that kinda thing.</p></blockquote>
<blockquote><p>[00:02:49]
And what happens is for each file in the source directory, it will run your plug-in on it and take the output of that and save it to the file, and so where Babel plug-ins are generally for compile time. They don\u2019t actually finish the source, they just change what you\u2019re shipping.</p></blockquote>
<blockquote><p>[00:03:12]
Codemods are intended to change the source code so that you can migrate away from an old API, or something like that, old testing framework, whatever. And they\u2019re super duper cool. And because it uses babel, or because we can use Babel to do this, you pretty much know every thing you need to know about building this, it\u2019s just taking the time getting used to the APIs and that kinda thing.</p></blockquote>
<h3 id="${"rockys-specific-notes-about-this-section-1"}"><a href="${"#rockys-specific-notes-about-this-section-1"}">Rocky\u2019s specific notes about this section</a></h3>`;
    }
  })}`;
});
export { Week_six_code_transformation_svelte as default, metadata };
