import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-b8ce1441.js";
export { l as load } from "../../../chunks/_layout-b8ce1441.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-c29f9c7c.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Three - Intro to Linux and Command Line",
  "created": "2021-11-07T00:00:00.000Z",
  "summary": "Complete Intro to Linux and the Command-Line",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_three_intro_linux_command_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p><a href="${"https://btholt.github.io/complete-intro-to-linux-and-the-cli/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://btholt.github.io/complete-intro-to-linux-and-the-cli/</a></p>
<h2 id="${"the-cli"}"><a href="${"#the-cli"}">The CLI</a></h2>
<p><strong>WHICH</strong>
<code>which</code> shows you where the program lives.</p>
<p><code>which ls</code></p>
<p><strong>LS</strong></p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">ls</span> -l -a</code>`}<!-- HTML_TAG_END --></pre>
<p><code>-l</code> show me stats like file
<code>-a</code> show me hidden files
<code>--help</code> see all the flags for ls
<code>ls lsah</code> - show everything and permissions</p>
<p><strong>BASH HISTORY</strong>
Your bash history is saved with up/down arrow keys. Which means you shouldn\u2019t save your passwords on it. </p>
<p>Ctrl+R - reverse-search history
(left and right drops you back into your terminal)</p>
<p><code>tail ~/.bash_history</code></p>
<p>It adds it to the bash history when you log out.
It \u2018buffers\u2019 it in memory. </p>
<p><strong>COPY AND PASTE</strong></p>
<p>A malicious person can hide things in your clipboard and force a return.
So if you copy/paste, it can hide some extra commands, and automatically run it once you paste it in your terminal.</p>
<p><strong>SIGNALS</strong>
A notification that you send to the event.
It\u2019s like a text message that says, \u201CCome over\u201D</p>
<p><code>Ctrl+C</code> - SIGINT // Stop running</p>
<p><code>Ctrl + D</code> - SIGQUIT  // Quit the program
It can only be done in the operating system.</p>
<p>SIGTERM  // Terminate</p>
<p>SIGKILL // this is done in the Task Manager</p>
<figure><img src="${"https://i.imgur.com/lKYFfSl.png"}"></figure>
<h2 id="${"files-pipes--permissions"}"><a href="${"#files-pipes--permissions"}">Files, Pipes, &amp; Permissions</a></h2>
<p><strong>Principle of Least Power</strong>
<code>whoami</code> to find your current user.</p>
<p><code>cat /etc/passd</code> to find all the users.
A bunch of users that are not used directly through the interactive GUI.</p>
<p>Why?</p>
<p>Those users have a very specific permission.
Similar to AWS. </p>
<p><strong>su</strong></p>
<p><code>su brian</code> switch to user brian</p>
<figure><img src="${"https://imgs.xkcd.com/comics/incident.png"}"></figure>
<p><strong>Groups</strong>
Set groups that can do certain actions. </p>
<p><strong>read, write, execute everything</strong></p>
<p>This is the same:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">777</span> file.txt
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx,g<span class="token operator">=</span>rwx,o<span class="token operator">=</span>rwx file.txt

<span class="token comment"># user </span>
<span class="token comment"># group</span>
<span class="token comment"># other people</span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"environments--processes"}"><a href="${"#environments--processes"}">Environments &amp; Processes</a></h2>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token builtin class-name">echo</span> hello my name is <span class="token environment constant">$USER</span></code>`}<!-- HTML_TAG_END --></pre>
<p>hello my name is ubuntu</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span>brian
$ <span class="token builtin class-name">echo</span> hello my name is <span class="token environment constant">$USER</span></code>`}<!-- HTML_TAG_END --></pre>
<p>hello my name is brian</p>
<p>(Note: it only saves it within the session)</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token assign-left variable">GREETING</span><span class="token operator">=</span><span class="token string">"hello"</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$GREETING</span> <span class="token environment constant">$USER</span>, how are you?</code>`}<!-- HTML_TAG_END --></pre>
<p>hello ubuntu, how are you?</p>
<p><strong>Where all the variables are located</strong>
<code>sudo vi/etc/environment</code></p>
<p>This is shared by EVERY SINGLE USER.</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token assign-left variable">TEST_THING</span><span class="token operator">=</span><span class="token string">"blahblah"</span></code>`}<!-- HTML_TAG_END --></pre>
<p>so if you open the shell again, $TEST_THING will equal \u201Cblahblah\u201D</p>
<p><strong>Bash sessions and where to save things</strong>
use <code>/.bashrc</code> for all changes.</p>
<p><code>/.bash_profile</code> only runs on start. </p>
<p><strong>Exit codes</strong>
<code>date</code>
This gives us the current date/time.</p>
<p><code>uptime</code>
Gives you how long you\u2019ve been on, and logged in users.</p>
<p><code>echo $?</code>
<code>0</code></p>
<p>This gives us the \u2018exit code\u2019. 0 means success.
If you get a different number, you\u2019ll get some other numbers. </p>
<ul class="${"list"}"><li>0: means it was successful. Anything other than 0 means it failed</li>
<li>1: a good general catch-all \u201Cthere was an error\u201D</li>
<li>2: a bash internal error, meaning you or the program tried to use bash in an incorrect way</li>
<li>126: Either you don\u2019t have permission or the file isn\u2019t executable</li>
<li>127: Command not found</li>
<li>128: The exit command itself had a problem, usually that you provided a non-integer exit code to it</li>
<li>130: You ended the program with CTRL+C</li>
<li>137: You ended the program with SIGKILL</li>
<li>255: Out-of-bounds, you tried to exit with a code larger than 255</li></ul>
<p><a href="${"https://btholt.github.io/complete-intro-to-linux-and-the-cli/process-operators"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">reference</a></p>
<h2 id="${"networking--the-internet"}"><a href="${"#networking--the-internet"}">Networking &amp; The Internet</a></h2>
<p><strong>ssh and sftp</strong>
If you connect normally via <code>ssh</code>, you can connect via <code>sftp</code>.</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">sftp<span class="token operator">></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Then you can do <code>pwd</code> &amp; <code>ls</code> for your current directory on the remote.
Or <code>lpwd</code> and <code>lls</code> for local directory on your host.</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">sftp<span class="token operator">></span> put localfile.txt</code>`}<!-- HTML_TAG_END --></pre>
<p><strong>permissions</strong></p>
<p>When you download a script from the internet (script.sh),
you have to give it execute permissions via chmod.
NOTE: check the script that it\u2019s not a bad script.</p>
<p><strong>wget vs curl</strong></p>
<p>wget is like the COPY of the internet.</p>
<p>wget will also recursively download things. Like it will look in a html file, and also get javascript, css, etc.</p>
<p><strong>curl commands</strong></p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ curl -O https://website.com/thing.txt </code>`}<!-- HTML_TAG_END --></pre>
<p>-O flag gets the entire <code>thing.txt</code> file and puts it in your root folder.</p>
<p>POST REQUESTS:</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ curl -X POST https://website.com/thing.txt </code>`}<!-- HTML_TAG_END --></pre>
<figure><img src="${"https://i.imgur.com/QcPrZoy.png"}"></figure>
<p><strong>Dangerous internet</strong></p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash</code>`}<!-- HTML_TAG_END --></pre>
<p>Watch out for that <code>| bash</code> command.
This is trusted URL. But if this was on JOE\u2019s BLOG, do not execute.</p>
<p>The workaround:</p>
<figure><img src="${"https://i.imgur.com/8M2lFqP.png"}"></figure>
<ol class="${"list"}"><li><p>curl curl -o- URL &gt; my-file.sh</p></li>
<li><p>cat my-file.sh</p></li></ol>
<p>The server can switch something underneath you with Bash.</p>
<h2 id="${"skip-package-management"}"><a href="${"#skip-package-management"}">(Skip) Package Management</a></h2>
<h2 id="${"shell-scripts"}"><a href="${"#shell-scripts"}">Shell Scripts</a></h2>
<p><strong>Making a script</strong>
<code>nano gen_files.sh</code></p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">mkdir</span> -p ~/temp <span class="token comment"># -p mean don't error if it exists in this case, it does other things too</span>
<span class="token builtin class-name">cd</span> ~/temp
<span class="token function">touch</span> file<span class="token punctuation">&#123;</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">10</span><span class="token punctuation">&#125;</span>.txt
<span class="token builtin class-name">echo</span> <span class="token keyword">done</span></code>`}<!-- HTML_TAG_END --></pre>
<p>To run it: (3 different ways)
<code>source gen_files.sh</code>
<code>. gen_files.sh</code>
<code>bash gen_files.sh</code></p>
<p><strong>hashbang</strong></p>
<p>Open gen_files.sh and put this as the very first line. I bold that because it must be the first line.</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token shebang important">#! /bin/bash</span></code>`}<!-- HTML_TAG_END --></pre>
<p>If you add that, you can then change it from <code>gen_files.sh</code>-&gt;<code>gen_files</code>. And then make <code>chmod +x gen_files</code>
and when you run it <code>./gen_files</code>, it\u2019ll automatically execute.</p>
<p><strong>path &amp; variables</strong></p>
<p>echo $PATH</p>
<h2 id="${"skip-automation--customization"}"><a href="${"#skip-automation--customization"}">(SKIP) Automation &amp; Customization</a></h2>`;
    }
  })}`;
});
export { Week_three_intro_linux_command_svelte as default, metadata };
