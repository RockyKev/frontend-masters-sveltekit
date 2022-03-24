import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-b8ce1441.js";
export { l as load } from "../../../chunks/_layout-b8ce1441.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-c29f9c7c.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Twelve - Web Performance",
  "created": "2022-01-28T00:00:00.000Z",
  "summary": "Web Performance Fundamentals",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_twelve_web_performance_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<figure><img src="${"https://i.imgur.com/MktPSlV.png"}"></figure>
<p>Todd Gardner
@toddHGardner
<a href="${"https://frontendmasters.com/courses/web-perf/introduction/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://frontendmasters.com/courses/web-perf/introduction/</a></p>
<p>He manages TrackJS and RequestMetrics</p>
<h2 id="${"elements-of-performance"}"><a href="${"#elements-of-performance"}">Elements of Performance</a></h2>
<h3 id="${"do-a-feeler-test"}"><a href="${"#do-a-feeler-test"}">Do a feeler test</a></h3>
<figure><img src="${"https://i.imgur.com/Z1NyPoS.png"}"></figure>
<p>GOOGLE SHEET WITH EXERCISE: <a href="${"https://docs.google.com/spreadsheets/d/10QlmdN4A1mtJFc2fLACjVftN2SOjsDuwgZ35slFKwG4/edit#gid=828938081"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://docs.google.com/spreadsheets/d/10QlmdN4A1mtJFc2fLACjVftN2SOjsDuwgZ35slFKwG4/edit#gid=828938081</a></p>
<figure><img src="${"https://i.imgur.com/78n6B6L.png"}"></figure>
<h3 id="${"psychology-of-waiting"}"><a href="${"#psychology-of-waiting"}">Psychology of waiting</a></h3>
<ol class="${"list"}"><li>People want to start</li>
<li>Bored waiting feels slower</li>
<li>Anxious waits feel slower</li>
<li>Unexplained waits feel slower</li>
<li>Uncertain waits feel slower</li>
<li>People will wait for value</li></ol>
<h3 id="${"web-vitals"}"><a href="${"#web-vitals"}">Web Vitals</a></h3>
<figure><img src="${"https://i.imgur.com/jey5GWK.png"}"></figure>
<p>Page load metric lost it\u2019s value because people were gaming the system.
A div would load a white screen, then Javascript builds it, and then a couple seconds later it ACTUALLY loads.</p>
<figure><img src="${"https://i.imgur.com/en3Z9ia.png"}"></figure>
<p>Web vitals become the next thing.</p>
<h3 id="${"first-contentful-paint-fcp"}"><a href="${"#first-contentful-paint-fcp"}">First Contentful Paint (FCP)</a></h3>
<p>The time until the user sees an indication that the page is loading.</p>
<h3 id="${"largest-contentful-paint-lcp"}"><a href="${"#largest-contentful-paint-lcp"}">Largest Contentful Paint (LCP)</a></h3>
<p>THe time is when the largest amount of content comes in. This is a proxy of when the user thinks the page is mostly there. </p>
<figure><img src="${"https://i.imgur.com/vMBkGIW.png"}"></figure>
<h3 id="${"cumulative-layout-shift-cls"}"><a href="${"#cumulative-layout-shift-cls"}">Cumulative Layout Shift (CLS)</a></h3>
<figure><img src="${"https://i.imgur.com/CzhwFoD.png"}"></figure>
<p>This check on the lifetime of the page!
The movement distance and impact of page elements during the entire lifetime of the document the user sees. </p>
<ul class="${"list"}"><li>DONT MOVE STUFF</li></ul>
<p>SPAs were penalized the most by this, because if the react app is deploying and doing all sorts of movements. </p>
<h3 id="${"first-input-delay-fid"}"><a href="${"#first-input-delay-fid"}">First Input Delay (FID)</a></h3>
<figure><img src="${"https://i.imgur.com/lbrNx4v.png"}"></figure>
<p>This is about the browser, not the user.</p>
<p>If an article is loaded, and you went to click on it\u2026 there\u2019s a delay? It\u2019s the time that the browser is still rendering &amp; executing your JS.</p>
<p>The browser time delay between the user\u2019s first click and execution of application code.</p>
<p>First Contentful Paint FCP - Response quick
Largest Contentful Paint LCP - Get to the point
Cumulative Layout Shift CLS - Dont move stuff
First Input Delay FID - dont load too much</p>
<h3 id="${"lighthouse"}"><a href="${"#lighthouse"}">Lighthouse</a></h3>
<p>Rules of thumb: </p>
<ol class="${"list"}"><li>Devtools - detach lighthouse.</li>
<li>Throttle it by a mobile device.</li></ol>
<p>Things to know:
Relative to YOUR machine, network
The chrome window size
Chrome application priority</p>
<p>Because it renders the browser size itself. If you shrink it, it will give you a different performance stat.
Make sure chrome is in the foreground, because if it\u2019s in the background, it\u2019ll defer things. </p>
<p>Exercise: <a href="${"https://docs.google.com/spreadsheets/d/10QlmdN4A1mtJFc2fLACjVftN2SOjsDuwgZ35slFKwG4/edit#gid=492748406"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://docs.google.com/spreadsheets/d/10QlmdN4A1mtJFc2fLACjVftN2SOjsDuwgZ35slFKwG4/edit#gid=492748406</a></p>
<p>Extensitions matter too, because they inject code to the page.
Remember that 100px will obviously render way faster. </p>
<p>Lab data is what lighthouse gives you - your local computer, or a server.
Crux data is what real users on the internet are getting.</p>
<h2 id="${"metrics"}"><a href="${"#metrics"}">Metrics</a></h2>
<p>This is about interpreting data.
And it\u2019s kinda \u201Cmeh\u201D. Like, it\u2019s more about the marketing side. </p>
<h3 id="${"intepreting-data"}"><a href="${"#intepreting-data"}">Intepreting data</a></h3>
<figure><img src="${"https://i.imgur.com/g6W4Oll.png"}"></figure>
<p>Safari doesn\u2019t report. Firefox doesn\u2019t report. </p>
<figure><img src="${"https://i.imgur.com/A07cLJk.png"}"></figure>
<p>P50% of users \u2014&gt;  is the median.
P75% of users \u2014&gt; is what google looks at
P95% of users \u2014&gt; this is like phones in mongolia. It\u2019s often lobbed off. We don\u2019t think about that. </p>
<figure><img src="${"https://i.imgur.com/Q4sq0kO.png"}"></figure>
<p>So looking at this \u2014 there\u2019s kinda a problem here. Because within the P75 - you notice there\u2019s a weird bump around that 75% mark.</p>
<h2 id="${"performance"}"><a href="${"#performance"}">Performance</a></h2>
<p>Compare with other site.
<a href="${"https://www.lightest.app/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.lightest.app/</a></p>
<figure><img src="${"https://i.imgur.com/qGajCIz.png"}"></figure>
<p>The project folder: <a href="${"https://github.com/toddhgardner/perf-training-website"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/toddhgardner/perf-training-website</a>
It\u2019s a node project, with a single HTML file.
It\u2019s not that optimized. </p>
<p>We need to capture real field data. </p>
<p><code>window.performance</code>
<a href="${"https://developer.mozilla.org/en-US/docs/Web/API/performance_property"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://developer.mozilla.org/en-US/docs/Web/API/performance_property</a></p>
<p>Questions:</p>
<ul class="${"list"}"><li>How long did it download this image</li>
<li>How long did it take to run this event. </li></ul>
<p>You can run this in the console in Devtools.
That\u2019s how you get the raw data.</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js">performance<span class="token punctuation">.</span><span class="token function">getEntries</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
performance<span class="token punctuation">.</span><span class="token function">getEntriesByType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
performance<span class="token punctuation">.</span><span class="token function">getEntriesByName</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/o3N14eD.png"}"></figure>
<figure><img src="${"https://i.imgur.com/mty93Q1.png"}"></figure>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">new</span> <span class="token class-name">PerformanceObserver</span><span class="token punctuation">(</span>
	<span class="token punctuation">(</span><span class="token parameter">entryList</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">var</span> entries <span class="token operator">=</span> entryList<span class="token punctuation">.</span><span class="token function">getEntries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>opts<span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Performance timing is one type of entry
Performance observer is a different type of entry </p>
<p>Check out this:
<a href="${"https://github.com/toddhgardner/perf-training-website/blob/main/public/assets/js/util/perf.js"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/toddhgardner/perf-training-website/blob/main/public/assets/js/util/perf.js</a></p>
<p>Google has a version that\u2019s official! But this code is what\u2019s under the hood. </p>
<figure><img src="${"https://i.imgur.com/mCxRTRH.png"}"></figure>
<h2 id="${"optimizing-metrics"}"><a href="${"#optimizing-metrics"}">Optimizing Metrics</a></h2>
<h3 id="${"improve-fcp-practice"}"><a href="${"#improve-fcp-practice"}">Improve FCP Practice</a></h3>
<p>The time until the user sees an indication. </p>
<p>METHOD 1: Improve the server </p>
<ul class="${"list"}"><li>Size it correctly</li>
<li>Minimize the processing on your sizer. </li>
<li>Network bandwidth.</li></ul>
<p>METHOD 2: Small documents</p>
<ul class="${"list"}"><li>Your content size.
Can you deliver smaller versions.
HTML -&gt; 80-100kb is kinda big.
Image -&gt; Can you make it smaller? </li></ul>
<p>GZIP or brotli? </p>
<p>METHOD 3: Short Transmission</p>
<ul class="${"list"}"><li>Reduce delivery hops. </li></ul>
<figure><img src="${"https://i.imgur.com/qEJGhsp.png"}"></figure>
<p>Wher we can place the hops.
For example: East Coast server takes 200-300ms to deliver to West coast. </p>
<p>CDN it to make it a bit easier. It can be 50ms. Pop it at a specific spot so they connect there faster. </p>
<h3 id="${"largest-contentful-paint"}"><a href="${"#largest-contentful-paint"}">Largest Contentful Paint</a></h3>
<p>The time until the user sees most of the page (or believes it\u2019s almost read)</p>
<figure><img src="${"https://i.imgur.com/QMXI0js.png"}"></figure>
<p>Your HTML is loaded, and identify what chained elements to bring out. </p>
<p>So the space between FCP and LCP is what is loading.</p>
<p>METHOD 1: Defer resources until later</p>
<p>FOR JAVASCRIPT:
When you add a <code>async</code> to your script. Do it later. It\u2019ll download, BUT will still execute. If the script finishes downloading, it\u2019ll still block your cache because it\u2019s being fired. </p>
<p>Instead \u2014
Move scripts to bottom (footer)\u2026
When you add a <code>defer</code> to your script. Do it later. It\u2019ll download, AND it won\u2019t execute until it\u2019s go time. If the script finishes downloading, it\u2019ll wait until the event is ready to go. </p>
<p>METHOD 2: Optimize Images
FOR IMAGES:
Check out the Lazyloader code:  <a href="${"https://github.com/toddhgardner/perf-training-website/blob/main/public/assets/js/util/lazyloader.js"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/toddhgardner/perf-training-website/blob/main/public/assets/js/util/lazyloader.js</a></p>
<p>In your html \u2014 you can add:</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;img src=&quot;picture-1200.jpg&quot; loading=&quot;lazy&quot;&gt;</code>`}<!-- HTML_TAG_END --></pre>
<p><code>loading=&quot;lazy&quot;</code>. That will defer the image for much later. Except, it doesn\u2019t work with safari/ios. </p>
<p>It can also lazyload anything.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;iframe src=&quot;&quot; data-src=&quot;&quot;...&gt;</code>`}<!-- HTML_TAG_END --></pre>
<p>It\u2019ll load when you reach that spot, by moving <code>data-src</code> into <code>src</code>. </p>
<p>Lazyloader: <a href="${"https://github.com/toddhgardner/perf-training-website/blob/main/public/assets/js/util/lazyloader.js"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/toddhgardner/perf-training-website/blob/main/public/assets/js/util/lazyloader.js</a></p>
<p>Adding Responsive image: </p>
<figure><img src="${"https://i.imgur.com/dXhjvmG.png"}"></figure>
<p>using <code>src</code> &amp; <code>srcset</code></p>
<p>Using Optimizing Images:
<a href="${"https://tinypng.com/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://tinypng.com/</a></p>
<p>imageOptimizer webpack:
The code -
<a href="${"https://github.com/toddhgardner/perf-training-website/blob/main/tools/imageOptimizer.js"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://github.com/toddhgardner/perf-training-website/blob/main/tools/imageOptimizer.js</a></p>
<p>What\u2019s neat is that he named them with <code>image.min.jpg</code></p>
<pre class="${"language-html"}"><!-- HTML_TAG_START -->${`<code class="language-html">&lt;img src="button.png"
	data-srcset="button-600.min.png 600w, 
	button-900.min.png 900w,
	"
	sizes="(max-width: 600px) 600w,
	(max-width: 900px) 900w,
	"
</code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/XgubDcX.png"}"></figure>
<p>METHOD 3: Reduce request overhead</p>
<p>Implement http/2: </p>
<p>Pros: fast
Pros: reuse connections
Cons: server setup &amp; compatibility
Cons: No SSL </p>
<p>So it won\u2019t work on local.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">cache-control: max-age=600
expires: Weds, 20 Jan 2021
etag: &quot;55230-230123badsb&quot;</code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/ypA1yOg.png"}"></figure>
<p>Preloading:
<code>rel=&quot;preconnect&quot;</code> tag.
That will allow us to get that google font asap.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;link rel=&quot;preconnect&quot; 
	href=&quot;https://fonts.gstatic.com&quot;&gt;</code>`}<!-- HTML_TAG_END --></pre>
<p><code>rel=&quot;preload&quot;</code> tag.
Say you have a depenency that needs the item, and you need it earlier/faster. (For example, icons.css)</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;link rel=&quot;preconnect&quot; 
	href=&quot;/icons.css&quot;&gt;</code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/X7vYbRp.png"}"></figure>
<p>He\u2019s preconnecting gstatic fonts
He also preconnecting his chat program.
He then preloaded all the css elements. </p>
<h3 id="${"cumulative-layout-shift"}"><a href="${"#cumulative-layout-shift"}">Cumulative Layout shift</a></h3>
<p>It\u2019s the movement distance and impact of page elements during the ENTIRE LIFETIME of the document the user sees. </p>
<p>LCP -&gt; \u201CHey I\u2019m ready\u201D</p>
<p>It\u2019s saying \u201Ckeep this empty space here\u201D. </p>
<p>The browser is remembering the aspect-ratio for that image. </p>
<p>How to fix it:
The design choice of moving it to the bottom of the page.</p>
<p>CSS - And then:: </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">position: relative;</code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"first-input-delay"}"><a href="${"#first-input-delay"}">First Input Delay</a></h3>
<p>the browser time delay between the user\u2019s first click and the execution of application code. </p>
<p>Don\u2019t load too much. </p>
<p>If you are having this problem, then you are pushing WAAAY too much Javascript. </p>
<p>[00:00:00]</p>
<blockquote><blockquote><p>Before we get started on part three, I wanna give an opportunity for us to talk about some questions. There was a great question in chat just before we left about whether or not the first input delay is different than another metric called time to interactivity. Time to interactivity is another metric that you\u2019ll see in the Google lighthouse report.</p></blockquote></blockquote>
<p>[00:00:20]
But it\u2019s not usually considered one of the core web vitals. It\u2019s not something that Google is gonna rank you on. They\u2019re different things. Time to interactivity is a milestone that happens sometime after largest contentful paint. And it\u2019s the milestone at which your document is all kind of built together and Google thinks it is fully ready to accept user input.</p>
<p>[00:00:43]
Whereas first input delay is that from the time when the user actually interacts with your site, until when your code is able to respond to an event, that delay is first input delay. The first is a milestone in the loading process. It\u2019s something else taking consider between first contentful paint, largest contentful paint, time to interactive.</p>
<p>[00:01:10]
Whereas first input delay is more measuring whether or not you\u2019re loading too much stuff. But it\u2019s a good question. So the question from zoom was not fully understanding what the performance and, was it the Performance tab or the Network tab?</p>
<h2 id="${"planning"}"><a href="${"#planning"}">PLanning</a></h2>
<p>Check his slides \u2014
<a href="${"https://docs.google.com/presentation/d/13p5x-QtqlJDluu1-hMILmWrsnSmg87G-DC2aqoKzwxc/edit#slide=id.gb774a1a237_0_396"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://docs.google.com/presentation/d/13p5x-QtqlJDluu1-hMILmWrsnSmg87G-DC2aqoKzwxc/edit#slide=id.gb774a1a237_0_396</a></p>
<p>This program is super sweet:
<a href="${"https://www.performancebudget.io/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.performancebudget.io/</a></p>
<p>Setting your goals:
How can you be 20% faster than your competitor?</p>
<h3 id="${"marketing-about-third-party-pixel-service"}"><a href="${"#marketing-about-third-party-pixel-service"}">Marketing about third-party pixel service</a></h3>
<p>You need data to convince marketing. </p>
<figure><img src="${"https://i.imgur.com/KMx9l3S.png"}"></figure>
<p>They care about costs, revenue, price. </p>
<p>Did things go down? Now you can talk about it.
Sometimes, speed is down but revenue is up. Maybe that\u2019s okay. You can\u2019t over-perform everything. </p>`;
    }
  })}`;
});
export { Week_twelve_web_performance_svelte as default, metadata };
