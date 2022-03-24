import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-ab845620.js";
export { l as load } from "../../../chunks/_layout-ab845620.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-3d93c575.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "Week Eleven - Full Stack",
  "created": "2022-01-23T00:00:00.000Z",
  "summary": "Full Stack for Front-end Engineers, V2",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Week_eleven_full_stack_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Jem Young
<a href="${"https://frontendmasters.com/courses/fullstack-v2/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://frontendmasters.com/courses/fullstack-v2/</a></p>
<h2 id="${"server-setup"}"><a href="${"#server-setup"}">Server Setup</a></h2>
<p>Make sure you key is avtive</p>
<p>Make sure key is active
<code>$vi ~/.ssh/config</code></p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">Host *
AddKeysTAgent yes
UseKeychain yes</code>`}<!-- HTML_TAG_END --></pre>
<p>Add private key
<code>ssh-add -K ~/.ssh/fsfe</code></p>
<p>You don\u2019t want to</p>
<p><code>sudo su</code> because that will give you superpowers and not warn you. Which means you can destroy roots.</p>
<p><code>whoami</code></p>
<p>root</p>
<p>CNAME = Canonical name</p>
<h2 id="${"server-setup-1"}"><a href="${"#server-setup-1"}">Server setup</a></h2>
<p>To set up a user that has root-like powers, but isn\u2019t root.</p>
<ol class="${"list"}"><li><p><code>apt update</code> // Update software</p></li>
<li><p><code>apt upgrade</code></p></li>
<li><p><code>addUser $USERNAME</code> // Create user</p></li>
<li><p><code>usermod -aG sudo $USERNAME</code> // add to sudo group</p></li>
<li><p><code>su $USERNAME</code> // switch user</p></li>
<li><p><code>sudo cat /var/log/auth.log</code> // check if successful</p></li></ol>
<p>It\u2019s people who are trying to log into the server.</p>
<ol start="${"7"}" class="${"list"}"><li><p><code>vi ~/.ssh/authorized_key</code>
// create authorized_key file and paste the PUBLIC key</p></li>
<li><p><code>chmod 644 ~/.ssh/authorized_keys</code> // change file permissions. </p></li>
<li><p><code>sudo vi /etc/ssh/sshd_config</code> disable root login</p></li></ol>
<p><code>head</code> gives you the top 10 lines of the file
<code>tail</code> gives you the last 10 lines of the file</p>
<p>Security above Security
It\u2019s like making your door smaller. It doesn\u2019t actually protect you. </p>
<h2 id="${"application-architecture"}"><a href="${"#application-architecture"}">Application Architecture</a></h2>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">ui
    css
    js
    html</code>`}<!-- HTML_TAG_END --></pre>
<blockquote><p>[00:00:23] Let\u2019s talk about, briefly, application architecture. If you ask me what the difference is between a senior engineer and a junior engineer, I\u2019d say it\u2019s about architecture. It\u2019s not about code, it\u2019s about the architecture. Cuz in the long run, it\u2019s the architecture and application that will get you. It\u2019s how you arrange your files, how you arrange your code.</p></blockquote>
<blockquote><p>[00:00:42] That sort of thing is we\u2019re thinking about long-term maintainability versus just, I\u2019m a hacker who solves bugs every day. That\u2019s more like a junior engineer, senior engineers think long-term. So when we set up an application architecture, remember, it will live for a long time, maybe years. So you want to make sure it\u2019s set up in a way that makes sense to you and everybody can agree on.</p></blockquote>
<h3 id="${"when-to-install-globally"}"><a href="${"#when-to-install-globally"}">When to install globally?</a></h3>
<p><code>npm -g stuff</code></p>
<p>Speaker 2: What are the exceptions? When is it safe to use a global install?</p>
<blockquote><p>Jem Young: When you need to run it globally from any directory. Because this isn\u2019t, let\u2019s say I had four or five other node applications running, I want pm2 to access all of that. So installing and locally wouldn\u2019t make as much sense because we didn\u2019t then we have to pipe everything into node modules, things like that.</p></blockquote>
<blockquote><p>But that\u2019s an excellent point. You generally don\u2019t want to do things globally unless you have to. If you wanna run things globally but from the local directory you can use something called MPX. Which will look at first in your local and then move up. But in this case, we wanna run globally because its a process manager.</p></blockquote>
<h3 id="${"mercurial"}"><a href="${"#mercurial"}">Mercurial</a></h3>
<p>Everybody just knows Git? Fun fact, what does GitHub or not GitHub, I think Facebook uses SVN, Subversion, or is it Mercurial? Facebook uses a monorepo, they have one repository for all of their code at Facebook. Because Git literally can\u2019t handle as much code as they have. There\u2019s like a maximum limit on it.</p>
<p>[00:00:55]
And I think Google has their own custom repo version control as well. </p>
<h2 id="${"server-security"}"><a href="${"#server-security"}">Server Security</a></h2>
<p>Install Fail2Ban and ExpressJS scritpts</p>
<h2 id="${"bash-commands"}"><a href="${"#bash-commands"}">Bash Commands</a></h2>
<p>standard output, input, error
stdout
stdin
stinerr </p>
<p>Unix agreement</p>
<p><code>/var/log</code> is typically where every software writes their log file.</p>
<figure><img src="${"https://i.imgur.com/ZqVRHPc.png"}"></figure>
<h2 id="${"nginx-config-basics"}"><a href="${"#nginx-config-basics"}">nginx config basics</a></h2>
<blockquote><p>And we can set our compression levels to 1 through 9 I believe it is, I wouldn\u2019t mess too much with the compression levels. It\u2019s tempting to go all the way up to 9 or 11, if it were, [LAUGH] if anybody understands that joke.</p></blockquote>
<blockquote><p>[00:07:43] But honestly, at this point you\u2019re trading off CPU power because it takes time to compress these things and run through the compression algorithms versus the amount of bytes you\u2019re saving. And 6 4 is a pretty good level where you\u2019re trading off speed for performance. Going any higher it\u2019s really tempting but you\u2019re honestly not saving that much.</p></blockquote>
<blockquote><p>[00:08:02] There\u2019s more optimizations you can do down the line.</p></blockquote>
<h2 id="${"why-is-security-so-important"}"><a href="${"#why-is-security-so-important"}">Why is security so important</a></h2>
<blockquote><p>people wanna get in anyways just because they use it to build lots of nefarious things or just try to steal passwords, credit card information, things like that.</p></blockquote>
<blockquote><blockquote><blockquote><p>Speaker 2: If you do the horrible thing of reusing your password, they have your password for other things.</p></blockquote></blockquote></blockquote>
<p>We use SSH keys because you while you can reuse those, you can\u2019t steal unless you physically take someone\u2019s computer or their device.</p>
<blockquote><blockquote><blockquote><p>Speaker 3: Redirect your site to them. Nefarious sites.
Jem Young: Yeah, they can absolutely. They can say, I want to bankofusa.com. But it\u2019s actually not actually bankofusa.com to site that looks exactly like it because they can just copy your HTML and CSS and JS.</p></blockquote></blockquote></blockquote>
<blockquote><p>Even better if you weren\u2019t using HTTPS, they can actually forward everything to the actual real site. So that the the people running the site don\u2019t know that it\u2019s broken and they\u2019re just stealing all the traffic in between.</p></blockquote>
<p>[00:02:28]
That is actually it\u2019s called a man in the middle attack.</p>
<blockquote><blockquote><p>Speaker 2: They can kind of run their own server on your server and until you get banned.
And then all of a sudden, your legit stuff is not working cuz your IPs are banned from services like a mailbot or something like that. Like when people\u2019s bridges were spamming the world.
Jem Young: Yeah, they can lock you out of your own server. So that like all that data and all that time and code you put in, they can steal it and lock you out of it and you can\u2019t get it back.</p></blockquote></blockquote>
<blockquote><blockquote><p>Jem Young: They can scrape your database, they can take all that credit card information or unencrypted passwords which today, people still leave unencrypted password in database.</p></blockquote></blockquote>
<p>I\u2019ll use an MD5 hash.</p>
<p>[00:03:45]
But I\u2019ll just do it five times and I\u2019ll hash a password using MD5 which is a very breakable hashing mechanism. And I\u2019ll save that and it looks secure. But because the database wasn\u2019t locked down and the permission weren\u2019t locked down. They got into the database and you are like, it\u2019s okay because everything is still safe cuz it\u2019s encrypted and then they decrypted that.</p>
<blockquote><blockquote><p>Speaker 2: Overloaded with requests.
Jem Young: Yeah, so that\u2019s the end result, what they do is they could turn into what\u2019s known as a botnet. And that\u2019s just a program that they install a backdoor. They won\u2019t do anything. And in fact, if you\u2019re really good in Unix, you can delete all the logs.</p></blockquote></blockquote>
<p>[00:05:06]
So someone could break in, do a bunch of stuff, delete the logs that show that they ever were there which is pretty common. There\u2019s a script that will do it for you. And then they just turn into like a silent botnet and they might not do anything for months or even years.</p>
<p>completely. The more nefarious ones, we\u2019re starting to see a lot more, is what is called cryptojacking or ransoming. So what they\u2019ll do is, Mark like you\u2019re saying earlier, they\u2019ll steal your database credentials, they\u2019ll encrypt all of them.</p>
<p>[00:05:56]
They\u2019ll encrypt your entire database which is, invaluable information and then they\u2019ll sell it back to you for money. Because they encrypted </p>
<h2 id="${"security-checklist"}"><a href="${"#security-checklist"}">Security Checklist</a></h2>
<blockquote><blockquote><p>Speaker 3: One of the most famous zero day things was Stuxnet, where our government or whoever attacked the Iran radioactive program or whatever, nuclear program. And then they used four zero day things as a worm to spread this worm into the facility, it\u2019s just crazy.
Jem Young: Stuxnet is fascinating.
[00:03:37]
If you look at your auth log you see that there\u2019s people trying to break in your server right now. Stuxnet is a really interesting example. And it goes back to, what can someone do if they gain access to your server? So what Stuxnet did was they chained a bunch of zero day, so that is unpatched, unknown bugs.</p></blockquote></blockquote>
<p>[00:03:54]
And they usually start with some sort of a stack overflow or something like that, something innocuous. But if you can make a computer stack overflow, you can make it throw an error, and that error, you can control. And then once you start chaining those together, you can actually start doing something.</p>
<p>[00:04:07]
So even the most minor vulnerability can turn into something major if someone knows what they\u2019re doing. And what Stuxnet did was they planted software into, I wanna say it was the USB drives, that\u2019s how it started. Because this was a nuclear facility that refined uranium, or plutonium, probably uranium.</p>
<p>[00:04:24]
And they\u2019re like, okay, we know we\u2019re dealing with things that are really dangerous. We\u2019re not gonna connect to the Internet at all. So what Stuxnet did was they hooked up to someone\u2019s USB drive. So I don\u2019t know, a secretary or someone, so whenever they hacked their computer. So whenever they plugged in the USB drive, they dumped the software into that.</p>
<p>[00:04:45]
So when that person went to work and they plugged in that USB to, I don\u2019t know, watch movies or something, whatever people at nuclear facilities do, that now got on to their server. So even though that computer wasn\u2019t connected at all to the Internet, they now managed to infiltrate the entire network, which honestly is next level hacking.</p>
<p>[00:05:03]
If you can hack someone\u2019s server without actually being connected to it, that\u2019s like only something governments can achieve, or really, really, really big funded companies. But what they did was really subtle. They just turned off the controls for the things that refined uranium. So they just made them spin out of control.</p>
<p>Certbot -&gt; it\u2019s a wrapper for Let\u2019s Encrypt, built by the EFF Free software foundation. </p>`;
    }
  })}`;
});
export { Week_eleven_full_stack_svelte as default, metadata };
