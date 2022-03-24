import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-b8ce1441.js";
export { l as load } from "../../../chunks/_layout-b8ce1441.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-c29f9c7c.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "CompTIA Networks Part 2",
  "created": "2022-03-19T00:00:00.000Z",
  "summary": "CompTia Networks Course",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Comptia_networks_part_2_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2 id="${"comptia-networks"}"><a href="${"#comptia-networks"}">CompTIA Networks+</a></h2>
<p><a href="${"https://www.udemy.com/course/comptia-network-plus-video-training/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.udemy.com/course/comptia-network-plus-video-training/</a></p>
<h2 id="${"module-10-addressing-networks-with-ipv6-1hr"}"><a href="${"#module-10-addressing-networks-with-ipv6-1hr"}">Module 10: Addressing Networks with IPv6 (1hr)</a></h2>
<p><strong>Decimal to Hexidecmial</strong></p>
<ul class="${"list"}"><li><p>IPv6 is written in hexidecimal notation.</p></li>
<li><p>A hex digit is represented by four binary bits (a nibble)</p></li></ul>
<p>7 == 0101
9 == 1001
F == 1111</p>
<ul class="${"list"}"><li>A hex value is often prepended with 0x</li></ul>
<p>QUESTION 1: Convert 241 from decimal to Hex.</p>
<p>STEP 1 - Figure out whole number and remainder:
241 / 16 = 15<code>.0625</code>
<code>.0625</code> * 16 = 1</p>
<p>Whole: 15
Remainder: 1</p>
<p>STEP 2:  Divide the whole number by 16</p>
<p>If it\u2019s above 16, you repeat the process.
Divide, then get the remainder.</p>
<p>Since it\u2019s below 16, it\u2019s already a letter.
F1</p>
<p>STEP 3: THe solution is:
F1 </p>
<p>or with the prepend \u2014
0xF1</p>
<p>QUESTION 2: Convert 198 from decimal to Hex.</p>
<p>198 / 16 = 12.375</p>
<p>WHOLE: 12
REMAINDER: 6</p>
<p>0xC6</p>
<p>QUESTION 3: Write hexadecimal number of <code>0x2F</code> in binary</p>
<p>2 =  2 = 0010
F = 15 = 1111</p>
<p>0x2F == 0010-1111</p>
<p>QUESTION 3: Write hexadecimal number of <code>0xBC</code> in binary</p>
<p>B = 11 = 1011
C = 12 = 1100</p>
<p>0xBC == 1011-1100</p>
<h3 id="${"ipv6-address"}"><a href="${"#ipv6-address"}">IPv6 address</a></h3>
<figure><img src="${"https://i.imgur.com/uvtPZyw.png"}"></figure>
<p>128-bit
Prefix + host </p>
<ul class="${"list"}"><li>32 hexadecimal numbers</li>
<li>8 \u201Cquartlets\u201D of 4 hexadecimal digits separated by a colon</li>
<li>128-bits total in length</li>
<li>No broadcasts</li>
<li>No fragmentation (MTU discovery preformed for each session)</li></ul>
<p><strong>Shortening an Ipv6 Address</strong></p>
<p>START:
23A0:201A:00b2:0000:0000:0000:0400:0001/64</p>
<p>So /64 is saying, it\u2019s the prefix bit. (The network)</p>
<p>Two rules:</p>
<ul class="${"list"}"><li>Omit leading zeroes in a quartet</li>
<li>Represent consecutive quartets containing all zeros with a double colin. (Only once per address)</li></ul>
<p>END:
23A0:201A:b2::400:1/64</p>
<p>QUESTION:
2000:0000:0000:0000:1234:0000:0000:000B/64</p>
<p>2000::1234:0:0:B/64</p>
<figure><img src="${"https://i.imgur.com/yikE57I.png"}"></figure>
<h3 id="${"ipv6-global-unicast-multicast-solicited-node-multicast"}"><a href="${"#ipv6-global-unicast-multicast-solicited-node-multicast"}">IPv6 Global Unicast, Multicast, Solicited-Node multicast</a></h3>
<figure><img src="${"https://i.imgur.com/oiUMnPs.png"}"></figure>
<p>PC #1 - 2001::1
PC #2 - 2001::2</p>
<p>We know this is a global Unicast because of the first 3 bits.
If it has 001 as it\u2019s first three bits, then it\u2019s a Global Unicast.</p>
<p>2000::/3
Does the first digit HAVE to be a 2? No.
2001, 3001, etc. </p>
<p><strong>Multicast</strong></p>
<p>We don\u2019t assign a multicast to a computer, it\u2019s usually from a server.</p>
<figure><img src="${"https://i.imgur.com/XjQLHoQ.png"}"></figure>
<p>Scope Example: </p>
<ol class="${"list"}"><li>Interface-local scope</li>
<li>Link-local scope \u2014&gt;</li>
<li>Admin-Local Scope</li>
<li>Site-local Scope
8 Organization-Local Scope
E. Global Scope</li></ol>
<p>REMEMBER THIS:
FF02::1 - All nodes in the link-local scope.<br>
FF02::2 - All routers in the link-local scope. </p>
<figure><img src="${"https://i.imgur.com/QE2UwOE.png"}"></figure>
<p><strong>Solicitated-Node Multicast</strong></p>
<figure><img src="${"https://i.imgur.com/s5CQflP.png"}"></figure>
<p>3000::1 &amp; 3000:2</p>
<p>This is a replacement for IPv4 ARP, a broadcast protocol.</p>
<h3 id="${"ipv6-link-local-unique-local"}"><a href="${"#ipv6-link-local-unique-local"}">IPv6 Link Local, Unique Local</a></h3>
<figure><img src="${"https://i.imgur.com/N7pa7i8.png"}"></figure>
<p><code>FE80::/10</code> (the first 10 bits represent link local)</p>
<ul class="${"list"}"><li>Address start with FE80::/10</li>
<li>Can only communicate on one network segment</li>
<li>Similar to IPv4 APIPA address</li>
<li>Can be automatically or stastically assigned. </li></ul>
<p><strong>Unique Local</strong>
It\u2019s routable in your company, but not on the internet.</p>
<figure><img src="${"https://i.imgur.com/ldCvDCr.png"}"></figure>
<p><code>FD00::2</code></p>
<ul class="${"list"}"><li>Starts with FC00::/7</li>
<li>Not routable to the public Internet</li>
<li>Similar to IPv4 private address</li>
<li>If the L bit is set to a 1</li></ul>
<h3 id="${"ipv6-loopback-unspecified"}"><a href="${"#ipv6-loopback-unspecified"}">IPv6 Loopback, Unspecified</a></h3>
<figure><img src="${"https://i.imgur.com/mjquq3f.png"}"></figure>
<p><code>::1</code> - the localhost, similar to 127.0.0.1</p>
<p><strong>Unspecified</strong></p>
<figure><img src="${"https://i.imgur.com/xHrrYTm.png"}"></figure>
<ul class="${"list"}"><li><p>Written as <code>::</code></p></li>
<li><p>Used for a client\u2019s source address when sending a neighbor solicitation message</p></li>
<li><p>Used for the client\u2019s source address when sending a Router Solicitation message.</p></li></ul>
<p>DAD - Duplicate Address Detection.
It sends out a message, and hopes it doesn\u2019t get a response back. If it does, then the thing is being used.</p>
<p><strong>EUI-64 Address</strong></p>
<p>If it\u2019s not assigned, it\u2019ll automatically determine itself by:</p>
<p>Ask the router (here\u2019s the prefix and length in the network address)</p>
<p>EUI-64, Extended Unique Indentifier </p>
<ul class="${"list"}"><li>Uses the MAC address of an interface to create a 64-bit interface ID
CHALLENGE: Mac is only 48-bit longs</li></ul>
<figure><img src="${"https://i.imgur.com/G5aLXlk.png"}"></figure>
<p>EXAMPLE:
R1\u2019s Gig 0/1 interface has a MAC address of <code>0015:2BE4.9B60</code></p>
<p>This is the process \u2014 it makes no meaning.</p>
<p>STEP 1: Split the 48-bit MAC address in the middle. </p>
<p>STEP 2: Insert FF.FE in the middle</p>
<p>STEP 3: Change the format to use the colon delimiter</p>
<p>STEP 4: Conver the first 2 hex digits to binary</p>
<p>STEP 5: flip the 7th bit</p>
<p>STEP 6: Convert the first eight digits back into hexadecimal</p>
<p><strong>Autoconfiguration - Stateful DHCPv6</strong></p>
<p>A DHCPv6 Server can be asked to give it.
IPv6 uses ICMPv6 to provide address resolution instead of ARP.</p>
<p>Stateful -&gt; getting it directly from the DHCPv6. comes from server.</p>
<p>Stateless -&gt; it gets prefix/length from a hop. Then get the EUI-64 approach based on the mac address.</p>
<p>RS (Router Solicitation) and (RA) Router Advertisement are used for automatic prefix assignment. </p>
<p><strong>IPv6 Traffic Flows</strong></p>
<p>unicast - one to one
multicast - one to many (starts with FF)
broadcast - one to every (doesn\u2019t have this)</p>
<p>Anycast - one to \u2018nearest\u2019. </p>
<figure><img src="${"https://i.imgur.com/K3wSgwz.png"}"></figure>
<p><strong>Dual Stack</strong></p>
<p>How to have ipv4 and ipv6 to work together?</p>
<figure><img src="${"https://i.imgur.com/3NbAz54.png"}"></figure>
<p>It\u2019s called a Dual Stack configuration.
It\u2019ll use the client\u2019s IPv4 to communicate to Server 1.
And IPv6 to communicate with Server 2.</p>
<p><strong>Tunneling IPv6 through IPv4 Network</strong></p>
<p>Question:
You have 2 (green) sections that support ipV6.
But you have a middleware that only supports Ipv4. </p>
<p>SOLUTION:
Tunnel where it takes the IPv6 packet over IPv6 packet.</p>
<ul class="${"list"}"><li>RFC 2893: IPv6 Transition Mechanisms</li></ul>
<p>Two types of Tunnels: </p>
<ul class="${"list"}"><li>Configured: More configuration.</li>
<li>Dynamic: But it\u2019s less secure.</li></ul>
<p>TEST:</p>
<p>SLAAC (Stateless Address Autoconfiguration) is used to provide Prefix information through the use of IPv6 NDP (Neighbor Discovery Protocol).</p>
<p>A GUA (Global Unicast Address) is the IPv6 equivalent of an IPv4 Public address. These addresses are both meant to be routed on the internet. </p>
<p>A site-local address is similar to an IPv4 private address.</p>
<p>FF00::/8 is the prefix for the multicast address range in IPv6.
FD00::/8 is the IPv6 Site-Local prefix range.
FE80::/10 is the link-local address range for IPv6.
2000::/3 is the Global Unicast Address (GUA) prefix range for IPv6.</p>
<p>[NEED RESEARCH] What is site-local vs link-local?</p>
<h2 id="${"module-11-explaining-ip-routing-1hr"}"><a href="${"#module-11-explaining-ip-routing-1hr"}">Module 11: Explaining IP Routing (1hr)</a></h2>
<h3 id="${"ip-routing-in-a-nutshell"}"><a href="${"#ip-routing-in-a-nutshell"}">IP Routing in a nutshell</a></h3>
<figure><img src="${"https://i.imgur.com/S8C1AZR.png"}"></figure>
<p>What the laptop already knows:</p>
<ul class="${"list"}"><li>The laptop has a MAC address: AAAA.AAAA.AAAA</li>
<li>It wants to get to the Server MAC Address: BBBB.BBBB.BBBB</li>
<li>It\u2019s Source IP: 192.168.1.1</li>
<li>It\u2019s destination IP: 192.168.2.2</li>
<li>It\u2019s default gateway: 192.168.1.1</li></ul>
<p>STEP 1:
The Hop:
First, the laptop will need to know the MAC address of <code>192.168.1.1</code> (the default gateway)
it will send a ARP address\u2026 and get the mac address and put it in it\u2019s table.</p>
<p>Name : IP Address | Mac address
Default Gateway: 192.168.1.1 | 1111.1111.1111</p>
<p>STEP 2:
The router 1 (default gateway) looks into it\u2019s own Table to see if it has <code>192.168.2.0/24</code> in it\u2019s table. And it does! It says to go talk to Router 2.</p>
<figure><img src="${"https://i.imgur.com/MPDR9gE.png"}"></figure>
<p>But if it doesn\u2019t know, it does the same thing. </p>
<p>Sends an ARP address out.</p>
<p>Router 1 sends a ARP address out. It goes through the switch of <code>10.1.1.0/24</code>, which has all the subnets.
And it gets a response back from Router 2.</p>
<p>Name : IP Address | Mac address
Router 2: 10.1.1.2 | 3333.3333.3333</p>
<p>STEP 3:
Now Router 2 is looking into it\u2019s own table to see if it has <code>192.168.2.0/24</code> in the table. And it does!
It says that it\u2019s directly connected, and now need to get the MAC address!</p>
<figure><img src="${"https://i.imgur.com/P2BCVUQ.png"}"></figure>
<p>So it sends a MAC Address to add that table: </p>
<p>Name : IP Address | Mac address
Router 2: 192.168.2.2 | BBBB.BBBB.BBBB</p>
<p>You need to know the MAC address to get to all the other hops.</p>
<p><strong>Dynamic Routing</strong></p>
<p>Dynamic Routing Protocol - the cost/distance to get to the destination.</p>
<p><strong>Static and Default Routers</strong></p>
<figure><img src="${"https://i.imgur.com/dBkWmrq.png"}"></figure>
<p>Static Routing: </p>
<ul class="${"list"}"><li>Administratively Added routes</li>
<li>Very believable (AD = 1)</li>
<li>Specificy a next hop to reach a network</li></ul>
<p>It\u2019s the one that contains the fewest number of hops. </p>
<p>A default route: </p>
<figure><img src="${"https://i.imgur.com/QzzlZ5a.png"}"></figure>
<p>Rather than manage it in a HQ table</p>
<p>If you don\u2019t have the table, go talk to the HQ.</p>
<p>0.0.0.0 - </p>
<h3 id="${"routing-protocols"}"><a href="${"#routing-protocols"}">Routing Protocols</a></h3>
<p>Ways to approach, usually it\u2019s default. Or static. </p>
<p>But for most places, it\u2019s Dynamic! Using one of these routing protocols.</p>
<p>What to consider:</p>
<ul class="${"list"}"><li>Scalability</li></ul>
<p>RIP: If it\u2019s 15 router hops away, it won\u2019t be work.
BGP: Great for the internet.</p>
<ul class="${"list"}"><li>Vendor Interoperability</li></ul>
<p>EIGRP: Cisco real</p>
<ul class="${"list"}"><li>Familiarity:</li></ul>
<p>EIGRP:</p>
<ul class="${"list"}"><li>Convergence - If a route fail, if a backup path exist\u2026 how long does it take?
RIP a few mins.
BGP like 10 minutes.
OPSF/EIGRP might take a couple seconds.</li></ul>
<p>Who do we believe?
Administrative Distance - the Believability of a routing distance.</p>
<figure><img src="${"https://i.imgur.com/Pys45cv.png"}"></figure>
<p>If it\u2019s directly connected to that specific router, it\u2019s 0.
If it\u2019s static, then someone put it there, and it\u2019s assume by 1 (by default).</p>
<p>Connected: 0
Static: 1
EIGRP: 90
OSPF: 110
RIP: 120</p>
<p>Why isn\u2019t BGP there? Because you won\u2019t really use it.</p>
<p><strong>Autonomous Systems: IGP(interior Gateway Protocol) vs EGPs (Exterior Gateway Protoclls):</strong>
Autonomous System - A network under a single admin control, such as your company or a Internet Service Provider.</p>
<figure><img src="${"https://i.imgur.com/QjA7pid.png"}"></figure>
<p>All ISP/Companies get their own AS number. </p>
<p>So think of AS as like, the manager.
Managers use EGP to talk to each other. But to talk to the workers, they use IGP. </p>
<p>IGP (interior Gateway Protocol) When you\u2019re running a routing system inside your company.
EGP (Exterior Gateway Protocol) Communicates with other autonomous systems</p>
<p>EGP uses BGP, which is how the internet works.</p>
<p><strong>Routing Protocol Comparison</strong></p>
<figure><img src="${"https://i.imgur.com/IRF2avK.png"}"></figure>
<p>The test uses <code>Hybrid</code> instead of <code>Path-Vector</code>.</p>
<p>RIP: Distance-Vector | it uses hop counts to reach a destination.
OSPF: Link-State | it has a table of everything, and knows how to get there.
EIGRP: Distance-Vector | It counts a metric, to determine the next hop.
BGP: Path-Vector (Or Hybrid Protocol) | Considers path attributes. </p>
<p>Hop Count: A metric used by Rip to measure the numbers of routers to cross to reach a destination network.
Dijkstra Algorithm: Used by OSPF. Assigns costs to links and calcs the shortest path between two points in a network. Also used in GPS, and smart cars. </p>
<p><strong>RIP (IGP system)</strong></p>
<p>WHAT IS IT:
RIP: Routing by Rumor. One router tells anotherr router which router.</p>
<p>It uses Hop Counts to determine distance. It\u2019s a <code>Distance-Vector</code>.
1-15 - it\u2019s fine.
16 hops - unreachable. </p>
<p>If there\u2019s a update to the table router, it lets everyone know immediately. </p>
<figure><img src="${"https://i.imgur.com/8OXxKSR.png"}"></figure>
<p>Poison Reverse -
If Router 3 sees that a Interface is down, it sends a advertisement to others that it\u2019s 16.</p>
<p>TYPES OF VERSIONS:</p>
<figure><img src="${"https://i.imgur.com/cmdbrrr.png"}"></figure>
<p>RIPv1: </p>
<ul class="${"list"}"><li>super old. Legacy. </li>
<li>It sends broadcasts, to everything. Routers, PCs, printers\u2026 every 30 seconds. </li>
<li>No VLSM Support (tl;dr - subnet masks can\u2019t be found. 10.1.1.0/24, can\u2019t be seen.)</li>
<li>Only IPv4.</li></ul>
<p>VLSM (Variable Length Subnet Mask) Support - The ability of a routing protocol to advertise a network with a non-default subnet mask.</p>
<p>RIPv2:</p>
<ul class="${"list"}"><li>Multicasts (224.0.0.9) \u2014 still sends out every 30 seconds</li>
<li>Supports VLSM Support</li>
<li>Authentication - so stranger can\u2019t just enter a router and get data. </li>
<li>Only IPv4</li></ul>
<p>RIPng:</p>
<ul class="${"list"}"><li>Multicasts (FF02::9)</li>
<li>IPv6</li></ul>
<p><strong>OSPF  (IGP system)</strong></p>
<p>Not covered \u2014 IS-IS. </p>
<p>OSPF is like puzzle pieces.
Differnt routers know different pieces. are connected to different routers.</p>
<ul class="${"list"}"><li>Open Standard</li>
<li>Establishes adjacenties with routers</li>
<li>Sends Link state Advertisements (LS) to other routers</li>
<li>Constructs a Link State Database from received LSAs</li>
<li>Runs the Dijkstra Shortest Path first (SPF) algorithm to deteremint the shortest path to a network.</li>
<li>Attempts to inject the best path for each network into a router\u2019s IP routing table.
But just because OSPF says so, it might not be believeable. Maybe EIGRP has a recommendation. It will win, because it has a more believable Administrative Distance than OSPF.</li></ul>
<p><strong>OSPF Terms:</strong></p>
<ul class="${"list"}"><li>hello: A protocol used to discover OSPF neighbors and confirms reachablility to other neighbors. (also used in the election of a designated Router)</li>
<li>Link state Advertisements (LSA): Info a router sends and recieves about network reachability. (used to construct that LS database). NOT A PACKET.</li>
<li>Link State Update (LSU): A packet that carries LSAs.</li>
<li>Link state Request (LSR): Used by the router to request specific LSA info from a neighbor.</li>
<li>Link State Acknowledgment (LSAck): Used by a router to confirm it received a LSU.</li></ul>
<p>So a router notices a missing piece of the puzzle, and makes a LSR to it\u2019s friend.
That friend needs to send a LSAck back!</p>
<p><strong>OSPF - What are neighbors VS Adjacencies:</strong></p>
<p>Hello: <code>224.0.0.5</code> OR <code>FF02::5</code></p>
<p>Neighbors -&gt; people who live near you. You can say hi.
Adjacencies -&gt; Neighbors, but also you trust/like, share info with.</p>
<figure><img src="${"https://i.imgur.com/D0QPBOT.png"}"></figure>
<p>Neighbors are routers that:</p>
<ul class="${"list"}"><li>Reside on the same network link</li>
<li>Exchange Hello Messages</li></ul>
<p>Adjacencies are routers that:</p>
<ul class="${"list"}"><li>Are neighbors</li>
<li>Have exchanged Link State Updates (LSU) and Database Description (DD) Packets</li></ul>
<p>Why not have everyone be a Adjacencies?
It doesn\u2019t scale well!</p>
<figure><img src="${"https://i.imgur.com/Oct4Xn2.png"}"></figure>
<figure><img src="${"https://i.imgur.com/9WNd0XL.png"}"></figure>
<figure><img src="${"https://i.imgur.com/PU343Kd.png"}"></figure>
<p>It\u2019s better to organize things into separate areas, faster.
Each area can do the calculation (Dijkstra Algorithm) within the area.</p>
<p>How does Area 1 know the table data for Area 0?
It sues Area Border Routers (ABR) to do that.
Not a map, just a list. Don\u2019t need to run the Dijkstra Algorithm on it. </p>
<p>QUESTION: When to start adding areas?
Original: If you have more than 50 routers, break it into other areas.
These days, it\u2019s not that big of a issue now. </p>
<p>A better idea is to organize it like:
datacenter routes in one area.
And enterprise routes in a different area.</p>
<p>QUESTION: Multi-Area OSPF and Area 0?
You are required to have a Area 0.
Multi-Area OSPF networks Area 0 is called a Backbone Area (Just a name. 0 or 0.0.0.0 \u2014 not a IP Address)</p>
<p>QUESTION: OSPF Cost?</p>
<figure><img src="${"https://i.imgur.com/eKKgOye.png"}"></figure>
<p>It makes it based on the COST of the link.
Cost = Reference Bandwidth / Interface Bandwidth</p>
<p>The default reference bandwdith is 100 Mbps</p>
<p>So
R1 -&gt; R2 -&gt; R3 = 1 + 1 + 1 = 3
R1 to R2 is 100Mbps </p>
<p><strong>EIGRP  (IGP system)</strong></p>
<p>Enchanced Interior Gateway Routing Protocol (EIGRP)</p>
<ul class="${"list"}"><li>fast convergence (link failure is very fast.)</li>
<li>Scalable (RIP has a 15 hop limit)</li>
<li>Can be configured to use Load Balancing over unequal cost links</li>
<li>Classless (VLSM Support - versus RIPv1)</li>
<li>Communicates via Multicast (224.0.0.10 or FF02::A)</li>
<li>Used to be Cisco-proprietary.</li></ul>
<p>Very little implementation on non-cisco stuff.</p>
<p>How to determine Metric Calculation:</p>
<figure><img src="${"https://i.imgur.com/RUiJmcW.png"}"></figure>
<p>Bandwidth
Delay
Reliability (255 / 255 = 100% reliable)
Load (255)
Maximum Transmission Unit (MTU) \u2014 last to use.</p>
<p>If you ignore all the crazy math, the only things that matter is Bandwidth and Delay, since most of htose values zero out. </p>
<p>Big Dogs Really Like MTU.
But by default, all that matters is Bandwidth and Delay.</p>
<figure><img src="${"https://i.imgur.com/gxxlG0l.png"}"></figure>
<p>You are that <code>10.1.1.0/24</code>, and you want to get to R3. </p>
<p>Reported Distance - To get there. </p>
<p>Feasible Distance - EIGRP\u2019s metric to a network, includes the Reported DIstance (RD) from a next-hop router, and the distance to get to that next-hop router.</p>
<p>Through R1, it\u2019s 1000 + 10000. So FD is 11000.</p>
<p>Through R2 - it\u2019s 1000 + 5000. So FD is 6000.</p>
<p>It\u2019ll choose the successor route.
But if the route fails, it can fall back to Feasible Successor.</p>
<p>The Feasible Condition: </p>
<figure><img src="${"https://i.imgur.com/UoGXROJ.png"}"></figure>
<p>It\u2019s trying to avoid a situation where you lose a important node.
In this chart, to get from (right side) <code>10.1.1.0/24</code> to R1.
R2\u2019s path is 16,000 FD.</p>
<p>In order to decide the <code>Feasible Successor</code>, it MUST BE LOWER than the FD path (16,000)
So R3\u2019s reported route is 11,000.
While R4\u2019s reported route is 18,000.</p>
<p>R4 cannot do it. Why? We are seeing this from a topology. The Server does not.
In our heads, it should work. But they\u2019re looking at pure math.
But if R2 fails, and R3 fails\u2026 then R4 will still get it.</p>
<p><strong>BGP (EGP system)</strong></p>
<figure><img src="${"https://i.imgur.com/xRWnaKm.png"}"></figure>
<p>BGP is what talks to Automonmous Systems (AS).</p>
<p>BGP is now over 9000! (Networks)</p>
<ul class="${"list"}"><li><p>It\u2019s to talk from Companies and ISPs.</p></li>
<li><p>They can form neighborships.</p></li>
<li><p>It must be configured explicity. It\u2019s direct, static.</p></li>
<li><p>TCP Session is seasblished between neighbors.</p></li>
<li><p>Advertises Address Prefix and Length (Called Network Layer reachability information (NLRI))</p></li>
<li><p>It doesn\u2019t use math. It advertises a collection of Path attributes used for path selection.</p></li>
<li><p>it\u2019s considered a Path Vector Routing Protocol (Hybrid)</p></li></ul>
<p>BGP Path Attributes:</p>
<p>Tie Breakers. </p>
<p>We Love Oranges As Oranges Mean Pure Refreshment</p>
<ul class="${"list"}"><li>Weight</li>
<li>Local Preference</li>
<li>Originate</li>
<li>AS Path Length</li>
<li>Origin Type</li>
<li>Multi-Exit Discriminator (MED)</li>
<li>Paths</li>
<li>Router ID</li></ul>
<p><strong>Subinterfaces</strong></p>
<p>Sub-interfaces - It\u2019s interfaces on a physical switch. </p>
<figure><img src="${"https://i.imgur.com/4br7PeJ.png"}"></figure>
<p>How does Sales Computer talks to Engineering Server?
Using a trunk.
Data flows to the trunk, into the router, out of the trunk, and to the right VLAN.</p>
<figure><img src="${"https://i.imgur.com/D7CGkdJ.png"}"></figure>
<p>You can separate within the trunk, using the sub-interfaces.</p>
<p>TEST:
The default gateway\u2019s main purpose is to connect networks, route between them (InterVLAN routing), and possibly provide internet connectivity. This device is usually a multilayer switch or a router.</p>
<p>RIP - Distance-Vector - each hop is a distance.
OSPF - Link-state - think internet. Each linked page to get to another link page. WIkipedia game.
EIGRP - Distance-Vector. Just RIP but
BGP - Path-Vector, or Hybrid - </p>
<p>EIGRP is an Advanced Distance Vector routing protocol that uses the metric, Distance, which is based on a calculation of Bandwidth and Delay.</p>
<p>The ARP (Address Resolution Protocol) table is used to store temporary MAC address to IP address mappings, which is vital for the IPv4 routing process. </p>
<p>The MAC address table only contains MAC address to port mappings. </p>
<p>The routing table contains subnets and information on how to reach those given subnets.</p>
<h2 id="${"module-12-streaming-voice-and-video-1hr"}"><a href="${"#module-12-streaming-voice-and-video-1hr"}">Module 12: Streaming Voice and Video (1hr)</a></h2>
<p><strong>Voice over IP</strong></p>
<p>Using existing digital network to turn audio data to 1s and 0s, and sending it over the RTC protocol.</p>
<figure><img src="${"https://i.imgur.com/RtPHac2.png"}"></figure>
<p>You would use:
Phone -&gt; PBX -&gt; Tieline -&gt; Public Switch Telephone Network -&gt; PBX -&gt; phone</p>
<p>You might have a separate network that transfered video!</p>
<figure><img src="${"https://i.imgur.com/YvVheGO.png"}"></figure>
<p>Router -&gt; IP WAN -&gt; Router
Using a RTP</p>
<p>And the following Ports:</p>
<ul class="${"list"}"><li>FXS Port: Foreign Exchange Station</li>
<li>FXO Port; Foreign Exchange Office</li>
<li>E&amp;M Port: Ear and Mouth (Earth and Magneto)</li></ul>
<p>QUESTION: How to take a analog waveform and move it to digital?
You know how movies run at 24 frames a second? It\u2019s just 24 pictures to simulate movement.</p>
<p>Take a audio sample frequency, and and rebuild the waveform!</p>
<figure><img src="${"https://i.imgur.com/g6ic9TG.png"}"></figure>
<p>Nyquist Theorem - Harry Nyquist, a waveform can be sampled and adequately reproduced from those samples if the number of samples taken per second is at least 2x the highest frequency (in HZ) being sampled. </p>
<p>At 4000Hz over a analog phone.
So for the internet, we need 8000Hz samples per second. </p>
<p>PAM (Pulse Amplitute Modulation) - Analog approach to encoding a signale based on the aplitude of samples taken.
PCM (Pulse Code Modulation) - Digital approach to encoding a signal, where a numeric value is assigned to a PAM sample based on the amplitute of that sample.</p>
<figure><img src="${"https://i.imgur.com/RnT1nTl.png"}"></figure>
<p>Quantization Noise - Background Noise in PCM due to rounding erros that occur when assigning a numeric value to sample amplitudes. </p>
<figure><img src="${"https://i.imgur.com/Gn4Cr3q.png"}"></figure>
<p>Instead of a linear axis, focus on logrithmic scale on lower volumes.
So like higher noise will drown out anyways. But lower noise, needs much more steps. </p>
<p>And you can organize that with bit samples</p>
<figure><img src="${"https://i.imgur.com/NzxCVzc.png"}"></figure>
<p>8-bit samples. 64kb per second. </p>
<p>And we use a Codecs to do that.</p>
<figure><img src="${"https://i.imgur.com/aRRF43e.png"}"></figure>
<p><strong>Video over IP</strong></p>
<p>Terms to know:
Frames Per Second
Refresh Rate - represents the time it shows the image. It\u2019s usually 2x the frame.
Interlaced Video - 1080i (means interlaced.) Where half is updated (see image below) at a time.
Progressive Video - 1080p - It paints the whole screen.
Pixels
Apect Ratio - 4:3. Currently, it\u2019s 16:9. 1080x1920
Compression Standards - MPEG-1, MPEG-2, MPEG-4, H.264</p>
<figure><img src="${"https://i.imgur.com/R4QxXM2.png"}"></figure>
<p><strong>Unified Communications Network</strong></p>
<p>Voice, video, Instant messages, See if someone is available\u2026
It\u2019s called a Unified Communications Network.</p>
<figure><img src="${"https://i.imgur.com/6KD6k1w.png"}"></figure>
<p>Call Agent - A unified communication component that handles tasks such as call processing. Like a PBX replacement. (A analog phone\u2019s component)</p>
<p>Voice Messaging System - Handles voice mail</p>
<p>Instant Messaging and Presence System - Text msg and someone\u2019s availability</p>
<p>Unified Border Element (Aka Session Border Controller) - interconnects independent VOIP calls</p>
<p><strong>QoS (Quality of Service) Fundamentals</strong></p>
<figure><img src="${"https://i.imgur.com/28QLjeh.png"}"></figure>
<p>In the Speed mIsmatch:
In this, the IP Lan is sending data at a Fast E rate, but it\u2019s moving at a slow GiG to the switch.</p>
<p>In the Aggregation Point:
A gig comes to SW2, but it\u2019s trying to receive three gig data to three different servers. Bottleneck.</p>
<p>Periodic Congestion - like when things lag when you\u2019re backing up, or if everyone logs in at the same time.</p>
<figure><img src="${"https://i.imgur.com/OvVJqYx.png"}"></figure>
<p>Best effort: uses FIFO
DiffServ: A collection of QoS mechanisms that classify traffic types and assign diff policies.
IntServ: A QoS SMechanism that allows an application to reerve bandwidth for that application, using RSVP</p>
<p>Common QoS Mechanism: </p>
<ol class="${"list"}"><li><p>Identify the classification &amp; marking.
The next switch/router can figure out what else to do it. Think of Delta, where they\u2019re ranking you on the ticket. First class, sky priority, coach\u2026</p></li>
<li><p>Queuing Mechanism.
We separate the cache into different buckets, based on different types. Like VoIP should go first. Or best effort. Often Queueing Congestion Management.</p></li>
<li><p>Congestion Avoidance.
If a queue starts to overflow\u2026
3-way handshake. SYN, SYN-ACK, ACK.
We do more and more of those 3-way handshakes and push the time a bit farther.</p></li></ol>
<p>TCP Slow Start. Reduce the window size.
TCP Synchronization. Occurs when all TCP flows simultaneously go into TCP Slow start due to a queue overflow.</p>
<p>WRed - Weighted Random Early Detection - Is when Spock sacificed him to save the many.
RED - Random Early Detection - Introduces the possibility of packet discard, regardless of markings, at specific queue depth.</p>
<ol start="${"4"}" class="${"list"}"><li>Policing and Shaping
Traffic Conditioners
A category of QoS mechanisms (including Policing and Shaping) that limits bandwidth for a class of traffic.</li></ol>
<p>Don\u2019t beat the speed limit. No bandwidth for you if you violate the speed limit, like the Soup Nazi. No soup for you, come back in the week.</p>
<ol start="${"5"}" class="${"list"}"><li>Link Efficiency</li></ol>
<p>Think of a triple tracker trailor (3 trailers). And you\u2019re behind it.
The 3-trailer truck starts going through, and finally it\u2019s your turn. </p>
<p>LFI - Link Fragmentation and Interleaving (LFI)
A QoS mechanism that fragments large packets and interleaves smaller packets with the fragments. </p>
<p>With LFI, it turns the 3-trailer truck into three trucks.</p>
<p><strong>12.5 QoS Markings and dropping traffic</strong></p>
<figure><img src="${"https://i.imgur.com/Di0G2dn.png"}"></figure>
<p>Layer 2 CoS marketing doesn\u2019t cross a router.
So you make it a layer 3 marking.</p>
<figure><img src="${"https://i.imgur.com/rd4epmP.png"}"></figure>
<p>There\u2019s 2 modes:
IP Precedence. (3 bits)
DSCP (6 bits)</p>
<p>We have this ToS byte, and use the first 3 bits for the IP Precedence.
Like if I use VOIP, which is pretty important\u2026 i want to mark it with a 5. (101)
If we use the DSCP, which is 6-bits.</p>
<p>PHB - Per-hop behavior.
ITF said, making numbers up is stupid. Here\u2019s values that are important.</p>
<figure><img src="${"https://i.imgur.com/HgT79BS.png"}"></figure>
<p>In the binary Values, we\u2019re only looking at the first three bytes. (101) is 5. And five works backward compatability mode!</p>
<p>Well what about probability of dropping?
DSCP Assured Forwarding (AF) Values</p>
<figure><img src="${"https://i.imgur.com/Wyc5oOc.png"}"></figure>
<figure><img src="${"https://i.imgur.com/gJNdSSx.png"}"></figure>
<figure><img src="${"https://i.imgur.com/1tNjM7W.png"}"></figure>
<p><strong>QoS Traffic Shaping and Policing</strong></p>
<p>Traffic Conditioners determine shaping and policing traffic;</p>
<p>Shaping:</p>
<ul class="${"list"}"><li>Delays excess traffic rather than dropping it. Puts it in the buffer, then sends you n the way.</li>
<li>Used on slower speed interfaces.</li>
<li>uses Bits</li></ul>
<p>Policing:</p>
<ul class="${"list"}"><li>Dropping traffic rather than delaying.</li>
<li>Used on higher speed interfaces. </li>
<li>Tells you to come back later.</li>
<li>Uses Bytes.</li></ul>
<figure><img src="${"https://i.imgur.com/2M5sURu.png"}"></figure>
<figure><img src="${"https://i.imgur.com/lPLJiwa.png"}"></figure>
<p>FORMULA:
CIR = Bc/Tc</p>
<p>CIR (Committed Information Rate) = Average speed over the prior of a second.
at 10 mbps, you gotta send 10 mb per second.</p>
<p>Bc (committed Bursts) = number of bits (for shaping) or bytes (for policing) that are deposited in the token bucket during a timing interval.</p>
<p>Tc (timing Interval) = the interval at which tokens are deposited in the token bucket</p>
<p>Person example: It\u2019s like if you\u2019re driving at 120mph to get somewhere in 30 minutes. The police officer says, \u201CSpeed limit is 60mph.\u2019 And you\u2019re like, I\u2019m still under the limit because i\u2019m traveling at exactly 60mph, since im doing that for 30 minutes.</p>
<p>The image is the same. It\u2019s sending at the line rate\u2026 </p>
<p>TEST:
QoS settings are set in what\u2019s known as the ToS (Type of Service) Byte in an IPv4 packet (Traffic Class in IPv6).</p>
<h2 id="${"module-13-virtualizing-network-devices-75hr"}"><a href="${"#module-13-virtualizing-network-devices-75hr"}">Module 13: Virtualizing Network Devices (.75hr)</a></h2>
<p>BEFORE:
You used to buy 3 different servers. </p>
<figure><img src="${"https://i.imgur.com/0BSEQGM.png"}"></figure>
<p>You can have 1 physical server, with three virtual servers.
Connect it a single network interface card into the Switch.
And the software, how to virtualize\u2026
It\u2019s called a Hypervisor. Create, start, stop, monitor multiple virtual machines.</p>
<p>Type-1 Hypervisor \u2014 Native/barmetal. Directly runs on the server\u2019s hardware.
Type-2 HyperVisor \u2014 Runs in a traditional operating system. VirtualBox\u2026</p>
<p>A type 1 hypervisor (bare-metal hypervisor), on the other hand, is installed directly on top.
A Type 2 hypervisor, or a hosted hypervisor, is a software application that is installed on top of an existing operating system to be able to create virtual machines.</p>
<p>A machine that a hypervisor is running on is known as a host, and the virtual machine is known as a guest. </p>
<figure><img src="${"https://i.imgur.com/fjUNqXr.png"}"></figure>
<p>You can even virtual routers too.</p>
<p>In Physical servers, you can also get separate Physical Ports for each virtual nic.</p>
<p>You can do Cloud Providers.
Virtual Providers.
You can install a Virtual Firewall, with Virtual Load Balances. </p>
<p><strong>Virtual Router Redundancy Protocl (VRRP)</strong>
A virtual IP address is an address assigned to an application that doesn\u2019t physically exist. Some devices that leverage a Virtual IP address are load balancers and First Hop Redundancy protocols (FHRPs), such as HSRP and VRRP.</p>
<figure><img src="${"https://i.imgur.com/lWmOWNc.png"}"></figure>
<p>If you\u2019re using R1 (master) to connect to the internet, and it fails\u2026 you want to switch to R2 (Backup).</p>
<p>What can you do is switch to a Virtual Router.
Virtual Router has a MAC address attached to R1.</p>
<p>Backup is sending a advertisement every second.
And if Master falls apart, Virtual Router switches to the Backup.</p>
<p>From the perspective of the PC, it doesn\u2019t change. It\u2019s invisible. </p>
<p>VRRP:</p>
<ul class="${"list"}"><li>Standard, using First-Hop Redundancy Protocol</li>
<li>Defined RFC 3786</li>
<li>Called Master and Backup Routers (active and Standby)</li>
<li>MAC ADDRESS: 0000.5e00.01XX</li>
<li>Preempt Enable by default</li>
<li>Default Master Advertisement Interval: 1sec</li>
<li>Default Master Down Interval: 3 * Master_Ad_Interval + [(256 - VRRP Priority)/256]</li>
<li>Multicast Address: 224.0.0.18</li>
<li>Can use Interface IP Address as Virtual IP Address</li></ul>
<p>First-Hop Redundancy Protocol (FHRP) - Protocl that allows a backup router to take over if a client\u2019s default  router goes down. </p>
<p>Pre-emption: If R1 is the master, and it comes back up, in order to take the master role agian, it needs to have preemption roll. Cisco - has it disabled. VRRP - has preemption by default.</p>
<p><strong>Storage Area Network (SAN) Technologies</strong></p>
<figure><img src="${"https://i.imgur.com/Ahcvszi.png"}"></figure>
<p>server 1 can\u2019t talk to Server 2\u2019s harddrive.</p>
<p>Block-level storage - storing/retrieving data on a block of bytes or bits, as opposed to storing an retrieving an entire file.</p>
<p>File-level storage - slash slash file name bytes. It\u2019s transfering files one a time.</p>
<p>SCSI - Scuzzy (Small Computer Systme interface) - A collection of standards defining a method of data transfer to directly attached devices (Hard drives)</p>
<figure><img src="${"https://i.imgur.com/W6ZmiNk.png"}"></figure>
<p>This is is using Files. </p>
<figure><img src="${"https://i.imgur.com/tmGiqEu.png"}"></figure>
<p>This is connected to the Ethernet Switch and a Fiber Channel Switch
Using a Host Bus Adapter (HBA).
Creates block level storage.</p>
<figure><img src="${"https://i.imgur.com/b6rAerA.png"}"></figure>
<figure><img src="${"https://i.imgur.com/Rq00uFt.png"}"></figure>
<p>iSCuzzy (ISCSI) - </p>
<p>It doesn\u2019t look like a server storage.</p>
<figure><img src="${"https://i.imgur.com/CCLujoG.png"}"></figure>
<p>We like Fibre Storage because block storage is so much more efficient.
And Ethernet because it\u2019s readily available. </p>
<p>Another tech is InfiniBand.
Competiting tech over Fiber channel of Ethernet.
Instead \u2014 Fiber channel over InfiniBand. </p>
<p>Might be a data center, super computer, or in a network.</p>
<p>Speed is 40Gbps
connects to a IB Switch, that connects to storage area. </p>
<p><strong>Cloud technologies</strong></p>
<p>XaaS (ANything as Service)</p>
<p>Types of Cloud Services</p>
<ul class="${"list"}"><li>Public </li>
<li>Private</li>
<li>Hybrid</li>
<li>Community</li></ul>
<p>Typical Cloud Services</p>
<ul class="${"list"}"><li>Infrastructure as a service</li>
<li>Software as a service</li>
<li>Platform as a Service (A dev environment. Like 3 linux servers)</li>
<li>Network as a Service (Making VPNs, or bandwidth on demand)</li>
<li>Desktop as a Service (Subscriptions to a desktop, maintained by a small biz.)</li></ul>
<p>Elastic Provisioning - pay for waht you use. </p>
<p><strong>Accessing Cloud Services</strong></p>
<figure><img src="${"https://i.imgur.com/HvvXSEV.png"}"></figure>
<p>WLAN or using a VPN</p>
<p>Or how about moving with multiple Cloud Providers?</p>
<figure><img src="${"https://i.imgur.com/01y8NL1.png"}"></figure>
<p>You can then switch between multiple cloud providers.</p>
<p><strong>Infrastructure as Code (IaC)</strong></p>
<p>It\u2019s a config file.</p>
<ol class="${"list"}"><li>provision infrastructure files</li>
<li>configre existing infrastructure.</li>
<li>Deploy and manage applications</li></ol>
<p>HashiCorp Terraform
Puppet
Chef
Ansible for IAc</p>
<p>YAML (YAML ain\u2019t markup language)</p>
<p>Ansible does not need a agent. </p>
<p><strong>Multi-tenancy</strong></p>
<figure><img src="${"https://i.imgur.com/ZKL9DxL.png"}"></figure>
<p>Tenants share services. Water, electric\u2026
but Tenant 1 cannot go to tenant 2\u2019s house.</p>
<figure><img src="${"https://i.imgur.com/x25fqa2.png"}"></figure>
<p>TESTING:
A SAN (Storage Area Network) is a network where there is access to high-speed block storage, seen in places such as Data Centers. With a SAN, the storage appears as if it were directly connected to a host. </p>
<p>A Network Attached Storage (NAS) is a server that provides access to file storage through a Local Area Network (LAN).</p>
<p>Platform as a Service (PaaS) is a cloud solution for developers that allows them to develop their programs without having the test equipment physically on premise. </p>
<p>Infrastructure as a Service (IaaS) is a cloud solution used for outsourcing infrastructure devices such as servers and routers.</p>
<h2 id="${"module-14-securing-a-network-25hr"}"><a href="${"#module-14-securing-a-network-25hr"}">Module 14: Securing a Network (2.5hr)</a></h2>
<h3 id="${"general-security"}"><a href="${"#general-security"}">General Security</a></h3>
<p>Goals for security:</p>
<ul class="${"list"}"><li>Confidentiality (You can encrypt it. and use a key to unlock it)</li>
<li>Integrity (ensure files is modified in transit. Like sending money and not someone stealing)</li>
<li>Availability (Someone doesn\u2019t DoS)</li></ul>
<p>Confidentiality </p>
<ul class="${"list"}"><li>Firewall sits on the edge of the network. Stateful inspection. </li>
<li>Access Control List (ACL), permits/denies specific destinations. You can block telnet. Only use SSL.</li>
<li>Encryption. </li></ul>
<p><strong>Encryption</strong>
Symmetric Encryption. Source and destination has a shared secret key. Like USB flash drive, or through the phone. </p>
<p>DES - Data Encryption Standard - Mid-1970s. Uses 56-bit key. Weak.
3DES - Triple Data Encryption Standard. Uses three, for 168 bits. More secure. But depends on implementation. Still not using as much.
AES - Advance Encryption STandard - AES-128, AES-192, AES-256. Algorithm in modern networks.</p>
<p>Asymmetric Encryption.
Rivest, Shamir, and Adleman (RSA)</p>
<figure><img src="${"https://i.imgur.com/D27Drg0.png"}"></figure>
<p>So the client talks to internet to go to Amazon
Internet has a Certificate Authority
Certificate Authority proves it\u2019s the right spot, and you are sent to Amazon.</p>
<p>Certificate Authority (CA) - trusted third-party that can sign keys. digital certs.</p>
<p>Amazon gets a X.509 v3 Digital Certificate from say, Verisign.
They get a Public key, and a private key. </p>
<figure><img src="${"https://i.imgur.com/tYrslnH.png"}"></figure>
<ol class="${"list"}"><li>client wants a secure connection</li>
<li>Server sends a digital certificate. (which contains Amazon\u2019s public key)</li>
<li>Client authenticates the certificates with the CA\u2019s public key.  (using the Certificate Authority)</li>
<li>Client Generates a string and encrypts it with amazon.com\u2019s public key. </li>
<li>Client sends encrupted string to amazon.com</li>
<li>Amazon.com decrypts the string with it\u2019s private key (a session key, only lasts a session)</li></ol>
<p>So now that you got this figured out, you can switch to Symmetric encryption!</p>
<p><strong>Integrity</strong></p>
<p>Hashing Algorithm. Fingerprint of the data.
MD5 (message Digest 5) - 128-bit MD5 Hash digest.
SHA-1 - similar to MD5. But uses 160-bit hash digest.</p>
<p>What happens when a malicious actor takes a file and modifies it with virus, then runs the hashing algorithm? You\u2019ll still get the malicious file, and it correctly hashes!</p>
<p>HMAC - Hash-based message authentication Code (HMAC) - Uses a shared secret key, in conjunction with a hashing algorithm, to create a hash digest.</p>
<p><strong>Availbility</strong></p>
<p>The five nines. 99.999 Percent Uptime.
Which is 5 minutes of downtime per year. </p>
<p>Sample threats:</p>
<ul class="${"list"}"><li>Improperly formmated data</li>
<li>DoS attack - Denial of service attack</li>
<li>DDoS attack - Coordinated DoS attack (Distributed Denial - multiple)</li></ul>
<p>Prevention:</p>
<ul class="${"list"}"><li>OS patches</li>
<li>IDS, IPS, and firewall appliances</li></ul>
<p>IDS - Intrusion detection System. THis one clones data and analyzes it, then sends rules to firewall.
IPS - Intrusion prevention system. This one goes through traffic flows. stops traffice before it gets to the system.</p>
<p><strong>Exploit vs Vulnerability</strong></p>
<p>Vulnerability: A flaw in a secure system. Like weak password, or forgot something.</p>
<p>Exploit: Taking advantage of a vulnerability</p>
<p>Zero-day attack - new exploit that just been discovered and not patch.</p>
<figure><img src="${"https://i.imgur.com/1gJavok.png"}"></figure>
<p>MITRE Corporation</p>
<h3 id="${"types-of-attacks"}"><a href="${"#types-of-attacks"}">Types of Attacks</a></h3>
<figure><img src="${"https://i.imgur.com/XRITy30.png"}"></figure>
<figure><img src="${"https://i.imgur.com/l22X2fI.png"}"></figure>
<p><strong>DoS &amp; DDoS attacks</strong>
You can do a SYN Flood: Initiates multiple TCP 3-way handshakes, but never complete.
SYN, SYN-ACK\u2026 but never follow up.</p>
<p>UDP Flood: Sends a large volumn of UDP segments, since UDP is connectionless, the victim cannot verify the sender\u2019s IP address.</p>
<p>HTTP Flood: Targets the web services on a server by sending a stream of HTTP instructions (GET/POST)</p>
<p>DNS Reflected: Attacker spoof\u2019s the IP address of the victim and sends a large number of DNS queries.</p>
<p>Spoofed Source IP = 192.0.2.123
using the ping 198.51.100.255, which is a broadcast. then fires a message on the broadcast.</p>
<p><strong>On-Path Attacks</strong>
METHOD 1: Man-in-the-middle attack</p>
<figure><img src="${"https://i.imgur.com/5uuXeQG.png"}"></figure>
<p>Examples:</p>
<ul class="${"list"}"><li>MAC Flooding: Attacker floods switch with so many fake MAC address, filling up to capcity. then the Switch acts like a HUB, which just sends out on all ports.</li>
<li>ARP Poisoning: Claims that attacker\u2019s MAc address is the victim\u2019s default gateway</li>
<li>Rogue DHCP: Attacker\u2019s DHCP server tells the victim that the IP address of the default gateway is the attacker\u2019s IP address.</li></ul>
<figure><img src="${"https://i.imgur.com/e1q3Hcg.png"}"></figure>
<p><code>sudo macof -i eth0</code></p>
<p>10 seconds or less.
TO FIX: Require it so that only a limited number of MAC addresses that can be learned off a single switchboard.</p>
<p>METHOD 2: ARP Poisoning</p>
<p>Unsollicitated ARP replies are sent to the victim, claiming the attacker\u2019s MAC address it eh AMC address of hte victim\u2019s default gateway.</p>
<figure><img src="${"https://i.imgur.com/mq3fNON.png"}"></figure>
<p>Computer 1 asks \u201CWHat\u2019s the MAC address to <code>10.1.1.1</code>?
Computer 1 learns it\u2019s AAAA.AAAA.AAAA.</p>
<figure><img src="${"https://i.imgur.com/6F4fHej.png"}"></figure>
<p>TO FIX: depends. It can check the setting.</p>
<p>METHOD 3: DHCP Spoofing</p>
<figure><img src="${"https://i.imgur.com/lKv0TJg.png"}"></figure>
<p>A DHCP Client reaches to the subnet/switch, and tries to discover.
A rogue DHCP Server sends an offer FIRST before the Corporate DHCP server.</p>
<p>DHCP Client will then point to the attacker\u2019s default gateway.</p>
<p>TO FIX: Depends. Cisco has DHCP Snooping. It assigns trusted/untrusted ports. DHCP offer method can only comes from a specific port.</p>
<p><strong>VLAN Hopping Attack</strong></p>
<p>Where a hacker in one VLAN accesses a computer in another VLAN.
You\u2019re supposed to go through a Switch for that.</p>
<figure><img src="${"https://i.imgur.com/1gZFS8s.png"}"></figure>
<p>Attacker sends a DTP Frame to the switch, and calls itself a \u2018trunk\u2019.</p>
<figure><img src="${"https://i.imgur.com/zT3T67f.png"}"></figure>
<p>Then when it\u2019s time to attack, the trunk switches to say it\u2019s actually VLAN 5 frame.</p>
<figure><img src="${"https://i.imgur.com/vd9u8rR.png"}"></figure>
<p>They\u2019re in the native VLAN, and the switches rip out each VLAN bit.</p>
<p>It\u2019s a unidirectional attack. Like a DoS.</p>
<p><strong>Social Engineering Attacks</strong></p>
<p>Phishing Attack - where they say, \u2018login is broken. please login.\u201D</p>
<p>Tailgating - piggybacking - an attacker walks behind someone that has legitment access.</p>
<p>Shoulder Surfing - looking over someone\u2019s shoulder to see the credit card at a ATM. Use privacy filter.</p>
<p><strong>Other Common Attacks</strong></p>
<p>Insider Threat - Malicious user. Fix by having logging.</p>
<p>Logic bomb - Code that performs some action based on an event.</p>
<p>Rogue Access point - Wireless access poinjt installed on a network without proper authorization</p>
<p>Evil Twin - ABC network. They might call it as ABC net2. </p>
<p>War driving - Drive around a geographical area in an attempt to find wi-fi hotspets that can be accessed. If they\u2019re doing something bad, they can find this weak address and use that.</p>
<p>Malware - infect/harm a host.</p>
<p>DNS Poison - Send false advertisement. If you go to amazon.com, but it sends you to 123amazon.com. Or a rogue DHCP server. </p>
<p>Randomware - Wannacry. Encrypt data on the hard drive. And you had to pay for it.</p>
<p>Spoofing - Pretend to be a differnt MAC or IP address. That lets them flood traffic, or use the IP address to visit a specific area spot.</p>
<p>deauthentication Frame - Deauthenticate a spoofed IP address, off a Wireless AP. well, they can set up a evil twin attack.</p>
<p>Brute Force - Dictionary attack. Start brute force attack.</p>
<h3 id="${"common-defense-strategies"}"><a href="${"#common-defense-strategies"}">Common Defense Strategies</a></h3>
<p>Change Default credentials. </p>
<p>Avoid Common passwords.</p>
<p>Upgrade Firmware.</p>
<p>Patch and Update.</p>
<p>Perform file Hashing.</p>
<p>Disable Unnessary Services. Don\u2019t need wifi, turn it off.</p>
<p>use Secure Protocols. </p>
<p>Generate New security keys. </p>
<p>Disable Unused Ports.
like Telnet.</p>
<p>Also Device Ports, like on switches.</p>
<p><strong>Mitigating Network Threats</strong></p>
<p>Signature Management - keep attack signatures current on devices, such as IDS and IPS sensors</p>
<p>Device Hardening - Apply a collection of best practice procedures to secure network devices (disabling unnessary sevices on a device)</p>
<p>Change the Native VLAN - Configre a trunk\u2019s untagged VLAN to a non-default value, to prevent unconfigured swithc ports from automatically beloning to the native VLAN.</p>
<p>Define Privileged User Accounts - Define accounts. </p>
<p>File Integrity Monitoring </p>
<p>Role Separation </p>
<p>Set up a Honeypot - a host that\u2019s just to lure the attacker. individual system. A honeynet is a bunch more virtual stuff.</p>
<p>Pen Tester - a thirdparty who sees what they can do.</p>
<figure><img src="${"https://i.imgur.com/wk7RbPQ.png"}"></figure>
<p>Defense in Depth: multiple layers of security. Not just a firewall, but like lots of security protectors.</p>
<p>Zero Trust - don\u2019t automatically give them everything access. No permission until authetnication.</p>
<p>Least privilege -</p>
<p><strong>EAP Authentication</strong>
Extensible Authentication Protocol (EAP) Autentication</p>
<p>A Authentication Server sends a authenticator (which is really just sends a session key) to all the servers.</p>
<figure><img src="${"https://i.imgur.com/y0zeDBS.png"}"></figure>
<ul class="${"list"}"><li>One of hte original auth methods specificed by the IEE 802.1X standard</li>
<li>Authenticates end users and RADIUS servers via a Message Auth Code derived from digital certs of the end users &amp; RADIUS servers</li>
<li>Requires a Cert Authority (CA)</li>
<li>Allows clients to login using creds stored in a Microsoft Ative Directory Database</li></ul>
<p>Extensible Authentication Protocol (EAP) Autehntication via Secure Tunneling (EAP-FAST)
1 - Client usesa a Protected Access Credential (PAC) to request access to the network
2 - Consists of two or three phases</p>
<ul class="${"list"}"><li>Phase 0 (optional): Clients PAC is dynamically configured</li>
<li>Phase 1: Client and the AAA server uses the PAC to establish a TLS tunnel</li>
<li>Phase 2: Client sends user info across the tunnel</li></ul>
<p>PEAP - Protected Extensible Authentication Protocol ()
Developeed by Ciscco, Microsoft, and RSA
Goal of protecting auehtnciation transaction by using a TLS connection</p>
<p>Two main types of PEAP implementation: </p>
<ul class="${"list"}"><li>Version 0 (EAP-MSCHAPv2) - Mcirisoft Challenge - widely supported by Microsoft Active Deictory</li>
<li>PEAPv1/EAP-GTC (Generic Token card) - uses generic databases (LDAP and OTP) for authentication</li></ul>
<p><strong>Authetinication Servers</strong></p>
<p>AAA Server, Kerberos System, or Single Sign On.</p>
<p>AAA Server
Authentication: Who are you?
Authorization: What are you allowed to do?
Accounting: What did you do?</p>
<figure><img src="${"https://i.imgur.com/PdRH8Ir.png"}"></figure>
<p>RADIUS server has more accounting feature. And is more frequent.</p>
<p>Kerberos System (Kerberos and Cerberus) \u2014
This one is hard!</p>
<figure><img src="${"https://i.imgur.com/DI1y8LV.png"}"></figure>
<p>To make this work \u2014 Client wants to talk to the File Server.</p>
<ul class="${"list"}"><li>Client wants to communicate, by sending a 1-way hash of the key.</li>
<li>There\u2019s a KDC (Auth Server and Ticket Granting Server)</li>
<li>The Auth service takes key, checks it and then hands it over to the Ticket Granting Server with a Encrypted Ticket.</li>
<li>The Client takes the Encryupted Ticket to the Ticket Granting Server, with a ticket &amp; session Key. </li>
<li>The Ticket Granting Server, and gives you a key to the File Server.</li>
<li>Finally, a communication to the File Server.</li></ul>
<figure><img src="${"https://i.imgur.com/8lslTsc.png"}"></figure>
<p>Everything goes to a LDAP Server.
LADP - A protocl ued to send info between central repo of user data (directory server) and a variety of systems which users need to authenticate.</p>
<p>LADP example - Microsoft Active Diectory</p>
<p><strong>User Authentication Methods</strong></p>
<ul class="${"list"}"><li>Multi-factor or two-factor authentication</li></ul>
<ul class="${"list"}"><li>What the user knows. (Password)</li>
<li>What the user has. (Dongle, USB)</li>
<li>What a user IS. ()</li>
<li>WHERE a user is. (Geofrencing)</li>
<li>What a user DOES (drawing a pattern)</li></ul>
<ul class="${"list"}"><li>IEEE 802.1x </li></ul>
<figure><img src="${"https://i.imgur.com/UjDMCGP.png"}"></figure>
<ul class="${"list"}"><li>Here\u2019s a key to get
Authenticator and a supplicant. </li></ul>
<ul class="${"list"}"><li><p>Network Access Control
Posture Validation - REquirements to the login process (like you need a specific anti-virus software version in order to join the ntework)</p></li>
<li><p>MAC Filtering</p></li></ul>
<p>Your home laptop doesn\u2019t automatically connect to work. But it\u2019s easy to spoof it.</p>
<ul class="${"list"}"><li>Captive Portal.</li></ul>
<p>Connect through a login screen.</p>
<p><strong>Physical Security</strong></p>
<p>What if someone just walks off with the equipment? Take a laptop?
Security:</p>
<ol class="${"list"}"><li>Motion detector</li>
<li>Asset Tracking Gear. They have RFID chips that ring when you go through a door.</li>
<li>Video Surveillance</li>
<li>Tamper Detection</li></ol>
<p>Prevention:</p>
<p>Badges that logs you.
Biometrics.
Employee training. Tailgating behind someone.
Access Control Vestibule (two doors, one door locks. Aka mantrap.)
Locks (doors, racks, cabinets)
Smart Lockers (like disaster recovery. Need auth.)</p>
<p>Equipment Disposal:
Throw it away by \u2014</p>
<p>Factory Reset
Sanitize Device. (Darik\u2019s Boot and Nuke (DBAN))</p>
<p><strong>Network Forensics</strong></p>
<p>It\u2019s when you do detective work.</p>
<p>Like using a Laptop running wireshark in a Switch (with port mirroring enabled)
Computer forensics. </p>
<p>Detect suspicious activity
Incident Investigation</p>
<p>Categories of Forensics:
Capture all traffic  - need lots of hard drive
Stop, look, listen - a tool that watches things.</p>
<p>TPCdump and wireframe.
Any requests through the the firewall would be logged into the server.</p>
<p><strong>Securing STP</strong>
STP - Spanning Tree Protocol</p>
<figure><img src="${"https://i.imgur.com/RIwkK5B.png"}"></figure>
<p>You don\u2019t want a malicious person to become the Root Bridge. </p>
<figure><img src="${"https://i.imgur.com/EErJUdD.png"}"></figure>
<p>Yo can have a feature turned on called PortFast - it allows a port to be configured to connect to a end-station. </p>
<p>So SW4 becomesa BPDU Guard, and stays on the outside. And it also promises to only do a very specific thing.  When SW5 connets to them and tries to send them BPDU, it goes into error-disabled mode.</p>
<figure><img src="${"https://i.imgur.com/5EENnoB.png"}"></figure>
<p>SW3 is sending a Superior BPDU. </p>
<p>Root guard feature \u2014
The infrastrutre is set up so you should never see a Superior BPDU.</p>
<p><strong>IPv6 Router Advertisement (RA) Guard</strong></p>
<figure><img src="${"https://i.imgur.com/CXOqvFv.png"}"></figure>
<p>R1 sends a multicast to all computers.</p>
<p>THREAT:</p>
<ul class="${"list"}"><li>Convince a client that the attacker is the default router</li>
<li>Send incorrect SLAAC info to client. </li></ul>
<figure><img src="${"https://i.imgur.com/5z0CvVA.png"}"></figure>
<p>It\u2019s a policy that checks the RA against the policy. So malicious attacker has to know that too.</p>
<p><strong>Securing DHCP</strong></p>
<p>DHCP Server is awesome \u2014 Allows new device that auto-assigned IP Address, submask, gateway.</p>
<p>What if someone sets up their own DHCP, that gives their own DNS, that looks likea Facebook Login page?</p>
<p>DHCP Client wants to connect to the network.</p>
<p>The rogue DHCP server sends it\u2019s data first. </p>
<p>How to protect against yourself? </p>
<figure><img src="${"https://i.imgur.com/9UnHnjn.png"}"></figure>
<p>Surgically set up a trusted port, and everything else is untrusted.</p>
<p>A real situation:
Network conference, people brought their own hardware. And DHCP servers were conflicting with others.
So to fix, they had to hardcode/define trusted port manually.</p>
<p><strong>IoT Security Concerns</strong></p>
<p>Many IoT devices were not designed with security in mind.
Like, conneting to cameras online.
Many users leave default passwords.</p>
<p>Mirai Malware Example \u2014 scanned devices with default passwords. Infected IoT devices. Became a botneck.</p>
<p>Then attacked a DNS Server (DNS provider).
Twitter was offline that day.</p>
<p>SOlutions:</p>
<p>place IoT devices on their own VLAN.
Have it on their own guest network.</p>
<p><strong>Cloud Security</strong></p>
<figure><img src="${"https://i.imgur.com/daGKb8w.png"}"></figure>
<p>User TLS tunnel to Internet, to Cloud Provider.
Encrypted tunnel.</p>
<p>Another method is a building with a VPN, into the cloud, then VPN it into the Cloud Provider.</p>
<p>Another fast method is a Private WAN, that\u2019s connected to a dedicated Server.</p>
<p>Another extra layer of security:</p>
<p>CASB \u2014 Cloud Access Security Broker.
Sites between users &amp; cloud resources
Monitors traffic and sends alerts.</p>
<p><strong>IT Risk Management</strong></p>
<p>Being proactive on Security. </p>
<p>Five step model:</p>
<ol class="${"list"}"><li>identify Attack targets (like computers, or building access)</li>
<li>Rank data (social security numbers, or just content)</li>
<li>Determine Risk LEvel (Risk level = Probability of Breach * Financial Impact of Breach)</li>
<li>Set Risk Tolerances</li>
<li>Monitor</li></ol>
<p>Threat terms on test:</p>
<p>Vulnerability - is a weakness
Threat - is something someone develops to exploit that weakness.
Posture Assessment - Check things like the version of their anti-virus or whateve.r
Penetration Testing - Looks for vulnerabilities
Process and Vendor Assessments - look at their weaknessses.</p>
<p>TEST:
Router Advertisement (RA) Guard is a Ethernet switch security feature that can prevent an attacker from sending RA messages into the attacker\u2019s switch port. If the attacker were successful, they might convince a client that the attacker\u2019s computer was the victim\u2019s default gateway. Or, when an IPv6 endpoint was generating their IP address via SLAAC, they could receiving incorrect information about their network segment by the malicious RA messages.</p>
<p>The identification phase is where you identify yourself, such as with a username. The Authentication phase is where you prove your identity using, for example, a password. The Authorization phase defines what access you have to a given system. The accounting phase keeps track of what you accessed and when you accessed a system or data.</p>
<p>RADIUS (Remote Authentication Dial-in User Service) is an open standard that many devices can use to authenticate into a network. RADIUS works well with 802.1X and EAP (Extensible Authentication Protocol), which are protocols used for authenticating into wireless networks.</p>
<p>TACACS+ (Terminal Access Controller Access Control System Plus) works on the basis of the AAA framework to provide Authentication, granular Authorization, and accounting features. Like RADIUS, but offers granulaor cauth features.</p>
<p>Wireless encryption standards
WEP
WEP2</p>
<p>WPA - uses TKIP
WPA2 uses CCMP</p>
<p>Protocols
TKIP (Temporal Key Integrity Protocol) was created to quickly solve the security problems that arose with WEP. Although TKIP did solve some problems, there were still numerous problems that still existed
CCMP (Counter Mode Cipher Block Chaining Message Authentication Code Protocol) was created. This protocol is based on AES and is used to remedy the weaknesses of WEP with TKIP.</p>
<p>A DDOS (Distributed Denial of Service) amplification attack is an attack triggered by a botnet formed by computers infected with malware. When a C&amp;C (Command and Control) sends a message to the botnet, the computers initiate a request to a server with a spoofed source IP address. Afterward, the server responds to the spoofed address thus turning a multitude of small requests into a large payload. This attack can be done with DNS (Domain Name System) or NTP (Network Time Protocol) servers. DNS poisoning involves manipulating packets containing DNS information, typically for malicious purposes.</p>
<p>Dynamic ARP Inspection (DAI) is used to inspect an ARP to make sure it is legitimate. VLANs, Port Security, and ACLs can\u2019t prevent ARP poisoning. ARP (Address Resolution Protocol) is a Data Link protocol used to dynamically map an IP address to a MAC address, which is vital for the IP routing process. ARP poisoning leverages the fact that ARP doesn\u2019t have any built-in security mechanism, and with that, ARP poisoning involves giving false information when an ARP request is made.</p>
<p>Kerberos is an authentication protocol that leverages the use of tickets to authenticate network devices over unsecured networks. Kerberos is largely used in places where hosts need access to servers.</p>
<p>ACLs (Access Control Lists) are used to match certain qualities in traffic, such as IP addresses to then perform a configured action, such as dropping a packet. </p>
<ul class="${"list"}"><li>ACLs can be used for security functions. With ACLs, entries are processed in a logical order, and once an entry is matched, no further matching is done. </li>
<li>ACLs also contain an implicit deny by default, meaning that if the traffic isn\u2019t permitted, it will be dropped by default. </li>
<li>There is no <code>implicit permit</code>. It\u2019s all about saying NO.</li>
<li>ACLs can be used to prevent communication between users in the accounting VLAN and marketing VLAN. </li></ul>
<p>802.1X is a standard that defines port-based access control for LANs or WLANs. 802.1X defines three parties: Supplicant, Authenticator, and Authentication Server. The supplicant provides authentication credentials, and this is typically a host. An Authenticator provides communication between the supplicant and authentication server. This device can be an AP (Access Point) or Switch. Finally, the Authentication server is a server that receives and responds to request to an authenticator, allowing or denying connection requests. </p>
<h2 id="${"module-15-monitoring-and-analyzing-networks-5hr"}"><a href="${"#module-15-monitoring-and-analyzing-networks-5hr"}">Module 15: Monitoring and Analyzing Networks (.5hr)</a></h2>
<p><strong>Device Monitoring Tools</strong></p>
<p>SIEM - Security Information and Event management (collection of hardware/software of services back to a single spot to examine stuff)</p>
<p>example: Syslog
If an event occurs, send that to a syslog.
Interface Statistics.
CPu and Memory Statistics</p>
<p>Monitoring Processes</p>
<ul class="${"list"}"><li>Have someone actually do the Log Reviewing.</li>
<li>Port Scan and Velnerability Scan</li>
<li>Patch Management (Microsoft has something like Patch Tuesday.)</li>
<li>Compare with Baseline Data. </li>
<li>Packet Analysis</li>
<li>Netflow collector</li></ul>
<figure><img src="${"https://i.imgur.com/neztmrA.png"}"></figure>
<p>There\u2019s different versions of notifications/severity. </p>
<p><strong>SNMP</strong></p>
<figure><img src="${"https://i.imgur.com/Ma4kkK9.png"}"></figure>
<p>SNMP Agent  - on each device is a MIB, which contains a OID.</p>
<p>If a certain event happens, then it lets the SNMP Manager know.</p>
<p>It\u2019s a two-way event:
The agent sends a \u2018trap notification\u2019.
The SNMP sends a query/response.</p>
<p>SNMP Security Options:</p>
<p>Version 1: used to be just read, and read/write strings. Community Strings (password)
Version 2c: Nobody actually used the new security. Community Strings. Multiple vendors would use the same string.
Version 3: Encryption, Integrity checking, and Authentication Services.</p>
<p><strong>Remote Access Methods</strong></p>
<figure><img src="${"https://i.imgur.com/KbZHgkc.png"}"></figure>
<p>SITUATION: Client1 wants to talk to the server.</p>
<p>Method 1: Uses a site-to-site VPN.
Method 2: Client-to-Site VPN (remote access VPN)</p>
<p>You can use a Internet Protocl Security (IPsec)</p>
<p>Web browsers have security built in itL SSL/TLS (tls is the next level of SSL)</p>
<ul class="${"list"}"><li>Another version of TSL, which is Datagram Transport Layer Security</li>
<li>HTTP &amp; HTTPS</li></ul>
<p>SITUATION 2: How can Client1 control a computer on SW2. </p>
<p>They can use a Remote Desktop Protocl (RDP)
or Virtual network Computing (VNC)</p>
<p>SITUATION 3: File transfers</p>
<p>FTP.
FTPS. \u2014 older version. This is using ssh.
SFTP. \u2014 SSL
TFTP. \u2014 not secure. </p>
<p>SITUATION 3: Out of band network.</p>
<p>PTSN - using a modem. </p>
<p>Telnet or ssh to talk to a router. </p>
<p><strong>Environemnt Monitoring</strong></p>
<p>A device to monitor equipment room.</p>
<p>Environmental monitor - using a sms text </p>
<p>Power. Have a UPS \u2014 uninterrupt power supply. It has a finite life. </p>
<figure><img src="${"https://i.imgur.com/CARfqdh.png"}"></figure>
<p>Wireless Survey Sofware - which puts a heatmap/physical map to see it\u2019s radius.</p>
<p>for 2.4ghz - 1, 6, 11 to avoid overlap.</p>
<figure><img src="${"https://i.imgur.com/2GQ2pE7.png"}"></figure>
<p>TEST:
Syslog is a protocol that is used for message logging. Syslog, when configured, sends traps or notifications about network devices. Traps can contain information such as an interface state change or a message about a server\u2019s CPU reaching high utilization.</p>
<p>SNMP (Simple Network Management Protocol) sends taps and baselines on network devices. Baselines give information about overall system health.</p>
<p>SIEM (Security Information and Event Management) software is used to combine security information and event management software into a single package, providing real-time statistics of security alerts viewable from a single pane of glass. Think like\u2026 semen.</p>
<p>SNMP (Simple Network Management Protocol) is a protocol used to remotely manage network devices and also is used to send statistics about a device through the use of traps. Devices using SNMP have a MIB (Management Information Base) which are composed of OIDs (Object Identifiers), which are objects that correspond to a specific variable, which is then used to provide statistical information about something like an interface. </p>
<p>NMS (Network Management System) is used to probe information from SNMP agents (Devices that contain a MIB)</p>
<h2 id="${"module-16-examing-best-practices-for-network-admin-1hr"}"><a href="${"#module-16-examing-best-practices-for-network-admin-1hr"}">Module 16: Examing Best Practices for Network Admin (1hr)</a></h2>
<p><strong>Safety Procedures</strong></p>
<ol class="${"list"}"><li>Remove power. </li>
<li>Properly grounded.</li></ol>
<p>Use a wrist-strap with a resistor, so power moves somewhere else.</p>
<p>Heavy equiupment on the bottom for foundation. Secure racks to ground/wall. </p>
<p>Fire Supression using chemicals/gasses (NOT WATER!)</p>
<p>Heating/ventilation, systems.</p>
<p><strong>Wiring Management</strong></p>
<figure><img src="${"https://i.imgur.com/Ehc0bQe.png"}"></figure>
<p>IDF - Intermedia Distrbution Frame (wireing closet)
MDF - main distribution frame (wiring frame to a core place.)</p>
<p>Fiber Optic cable if it bends too much, can bend the light cable. You need a min distance.</p>
<p>Plenum Cabling - cabling with outer insulator that is fire retardant and minimizes release of dangerous fumes in like small walls/air fumes.</p>
<p>Spaghetti wiring - wires tangled together.</p>
<p>Label both ends of the cable. to avoid chaos.
Use cable management system (separate power and regular cables, otherwise there\u2019s interference.)</p>
<p><strong>Power Management</strong>
SPS - Standby Power Supply. It\u2019s cheaper, but it takes a few seconds to power it.</p>
<p>Generator - this gets the generator kicks on to give some power. With gasoline, it powers the server without building power.</p>
<p>UPS - uninterruptible Power Supply. It only has a tiny battery.</p>
<figure><img src="${"https://i.imgur.com/5QIgvzt.png"}"></figure>
<p>So there\u2019s two different outlets. And PDU is a distrbutor, like a separate electric company.</p>
<p><strong>Rack Management</strong></p>
<p>19-inch rack. Router/switches, you can buy stuff that have a 2-post rack. It\u2019s find for lightweight.</p>
<p>Servers, you want a 4-post rack.</p>
<p>Server rails, which has locks.</p>
<figure><img src="${"https://i.imgur.com/oNriF5z.png"}"></figure>
<p>create cold Aisles, hot aisles. </p>
<p><strong>Change Control/Change Management</strong></p>
<p>A system to track changes/new issues.</p>
<p>Team members should be aware of each other\u2019s changes.</p>
<p>STORY:
They filled out a change control form, swapped out of the switches\u2026 email was dead.
Was those events related? Discovered that it\u2019s not related. When the email system change\u2026 someone in a California swapped a hardware and didn\u2019t include a change control form.</p>
<p><strong>High Availability</strong></p>
<p>The five nines of availability.
99.999%
That\u2019s 5 minutes of downtime.</p>
<p>Higher cost \u2014 </p>
<ul class="${"list"}"><li>Redundant compoennts, powers</li>
<li>UPS/Generator</li>
<li>provide multiple routers/gateways</li>
<li>FHRP (First-hop redundant Protocols)</li></ul>
<p>Fault-tolerance - the ability to continue oepration if one of it\u2019s components fail. </p>
<p>Having more ISP, increase throughput.
If a ISP goes down, switch ISP2.</p>
<figure><img src="${"https://i.imgur.com/fmm4Del.png"}"></figure>
<p>Load balancing. </p>
<p><strong>Cloud High Availability</strong></p>
<p>Cloud Provider can also use a Virtual Firewall, and redundant Virtual Machines.</p>
<p>The four tiers of a data-center:</p>
<p>Tier 1: 99.671% availability - roughly 28 hours of downtime.
Tier 2: 99.741% availability - 22 hours of downtime \u2014 lots of power
Tier 3: 99.982 avaialbility - 1hour
Tier 4: 99.995% availability - 5 minutes. </p>
<p><strong>Active-active vs active-passive</strong></p>
<figure><img src="${"https://i.imgur.com/bw1wXIy.png"}"></figure>
<p>Active-Active Conncetion - You can use both links for data</p>
<p>Active-Passive connection - one goes on standby.</p>
<p>Active-Passive THINGS:
TYPE 1: Hot standby Router Protocl (HSPRP) -</p>
<figure><img src="${"https://i.imgur.com/p565vO5.png"}"></figure>
<p>DIFFERENT NAME: Active and Standby router. It sends Hello.</p>
<p>If the first hop fails, then it jumps to the next one.
here\u2019s your IP address, and default Gateway.
It\u2019s a virtual router. default Gateway (10.1.1.1) is a virtual router, and it\u2019s using either R1 or R2.</p>
<p>TYPE 2: Virtual Router Redundancy Protocl (VRRP)</p>
<figure><img src="${"https://i.imgur.com/ilMSQqs.png"}"></figure>
<p>The difference, Router 1 and the Virtual Router has the same IP addresses.</p>
<p>DIFFERENT NAME: This uses Master and Backup. It sends Advertisement. </p>
<p>Active-Active THINGS:</p>
<figure><img src="${"https://i.imgur.com/csCmegR.png"}"></figure>
<p>AVG - Active Virtual Gateway - Responses to ARP queries asking for the MAC address of a default gateway
AVF - active virtual forwarders</p>
<p>Active Virtual Gateway gives different answers, load balancing ones.
When PC1 does a ARP, it says 1111.1111.1111
When PC2 does a ARP, it says 2222.2222.2222</p>
<p><strong>Diaster Recovery</strong></p>
<p>Disaster recovery </p>
<p>Enterprise Data Center -&gt; backup stora</p>
<p>Types of backup:</p>
<p>Full: all data
differential: only changes since the last one.
Incremental backup: Only changes since the last full/diff/incremental change.
Snapshots: back up entire sever, including state information.</p>
<p>Diaster Recovery Sites:</p>
<p>Enterprise Data center</p>
<p>Alterative sites:</p>
<p>Cold site - has power, HVAC, floor space. There\u2019s no equipment here. It\u2019s just available.</p>
<p>Warm site - power, hvac, floor space, and server hardware. It\u2019s ready if there\u2019s problems.</p>
<p>Hot site - Power, hvac, floor space, service hardware, and it synchronize data. Cost more money.</p>
<p>SLA - Service level agreement. Promise to your users about how long a system will be down in an event of a disaster.</p>
<p>Recovery Time Objective (RTO) - max time a system will be offline.
Recovery Point Objective - max amount of time it\u2019ll last back up.</p>
<p>Mean Times Between failure - average time before it fails.
Mean Time to Repair - avg time before you have ot repair a failed product.</p>
<p><strong>Standards, policies, and rules</strong>
USE ACRONYMS</p>
<p>Privileged User Agreement - what access a user has. </p>
<p>Password Policy - min requirement for passwords.</p>
<p>On-boarding/off-boarding procedures - when people join and leave.</p>
<p>Licensing restrictions - how a license can be used.</p>
<p>International Export Controls - restrict exporting software to another company, because of specific encryption standard)</p>
<p>Data Loss Prevention - a policy to not release private info</p>
<p>Remote Access Policies - methods remote uses can accessing a company\u2019s internal network/</p>
<p>Incident Response Policies - identifies what happens when there\u2019s a incident. steps to follow.</p>
<p>BYOB Policy - using your own device.</p>
<p>AUP - Acceptable Use Policy. Like, you can\u2019t use a data cloud to store your baby pics. Or can\u2019t use facebook.</p>
<p>NDA - Non-disclosure agreement.</p>
<p>System Life Cycle - different phases of a hardware\u2019s existence. Plan, purchase, install. maintain, dispose.</p>
<p>Safety Procedures and Policies - guidelines for conduct, to maintain a safe working place.</p>
<p><strong>Documentation</strong></p>
<p>Privileged User Agreement - What permissions people have?</p>
<p>Memorandum of Understanding - Not a legal document, documents to ensure that they can see everyone\u2019s undersatnd.</p>
<figure><img src="${"https://i.imgur.com/DKRcM0Z.png"}"></figure>
<p><strong>TESTING:</strong>
Topology diagrams are used to display the logical or physical interconnections of devices within a network or networks. Rack diagrams might display what servers reside on which rack and operating system information. Inventory management documents are used to keep track of assets within a company.</p>
<p>MDF/IDF (Main Distribution Facility/ Intermediate Distribution Facility) documentation is used to keep track of the physical interconnections of networks.</p>
<p>Baseline documentation is used to keep track of a system\u2019s performance based on its stock configuration. Information in this document is then compared to the performance of a device after a modification. </p>
<p>NIC teaming is a technology used to logically combine Network Interface Cards (NICs) to make them appear as one or more logical interfaces. This technology provides fast performance and fault tolerance. </p>
<p>Port channeling isn\u2019t a server exclusive technology and only combines links.</p>
<p>Rack Diagrams provide information about devices on racks, such as servers, as well as operating system, power, and configuration information. Inventory management documents are used to keep track of inventory or assets (things worth of value to a company).</p>
<p>MTTR (Mean Time To Repair) is a document that states how long it will take a certain device to repair or fix.</p>
<p>MTBF (Mean Time Between  Failures) is a document used to give information on the lifespan of a device. MTBR doesn\u2019t exist.</p>
<h2 id="${"module-17-troubleshooting-networking-125hr"}"><a href="${"#module-17-troubleshooting-networking-125hr"}">Module 17: Troubleshooting Networking (1.25hr)</a></h2>
<p><strong>7-step methodology</strong></p>
<ol class="${"list"}"><li>Identify the problem</li>
<li>Establish a theory of probable cause (consider the OSI Model and work your way down.)</li>
<li>Test the theory to determine the cause</li>
<li>Establish a plan of action, and identify potential effects</li>
<li>Implement the solution, or escalete if nessessary</li>
<li>Verify Full System functinality, and implement preventative measures</li>
<li>Document Findings, Actions, and Outcomes</li></ol>
<p>[TODO] THink of mnemomic</p>
<p><strong>CLI Troubleshooting</strong></p>
<p>Commands you should know.
==Linux==
ssh - To connect to a router
man - manual page
arp - learn the arp cache.
<code>nslookup [uri]</code> - resolve IP address of a domain address. Does DNS lookup.
<code>dig</code> - query a DNS (Domain Name System) server. gives you aliases and shit.
host - like dig, but who handles mail, AAA, etc.</p>
<p>ifconfig - gives more info like ipconfig. Physical address, Lease, DHCP.
ping - check availability - verify basic network reachability that relies on ICMP (Internet Control Message Protocol) messages.
<code>iptable</code> - set up firewall rules on host
sudo - super user do
<code>tcpdump</code> - requires sudo. analyze what packets are going through a computer\u2019s NIC (Network Interface Card).
<code>nmap</code> - it tells which ports are available. is an open source tool that can be used to scan for computer\u2019s IP addresses and can even gather more information than that.</p>
<p><code>traceroute</code></p>
<p>==windows specific==
nbtstat -
<code>netstat</code> -  displays active connections a computer has to a network or to the internet.
<code>nslookup</code> -
<code>ipconfig</code> -  ipconfig is used to display TCP/IP information on a Windows host, as well as Domain Name and DNS server information
ipconfig /release to release from the default gateway</p>
<p><code>ping</code> - check availability</p>
<p>route print - to see all Routing table
tracert - see reachability &amp; hops of a desintation. Like  like traceroute.
<code>pathping</code> - it\u2019s ping AND tracert. </p>
<p><code>arp -a</code> - To display the ARP (Address Resolution Protocol) table on a Windows host, t</p>
<p><strong>Network Application Commands</strong></p>
<p>Cisco IOS Router</p>
<p>Commands:
<code>show config</code> - shows status NVRAM. The bootup one.</p>
<p><code>show running-config</code> - show commands that you may have changed.
<code>show startup-config</code> - like show config</p>
<p><code>running-config star</code> (<code>copy run star</code>) - copies running config to startup config</p>
<p><code>show ip route</code></p>
<p><code>show ipv4 route</code>
<code>show ipv6 route</code></p>
<p><code>show ip int brief</code> show the interfaces, IP addresses, </p>
<p><code>show interface {interface_id}</code> - show a specific interface and stats.
It\u2019ll show you that the hardware is up, and the protocol is up. That\u2019s <code>up-up</code> mode.
Its in Full Duplix, and how many packets/bytes.
Full duplex - which means it sends &amp; recieves at the same time.
Cyclic Redundancy Check - see if the checksum value is the same as we calculate. Else, it\u2019ll show errors.
giant</p>
<figure><img src="${"https://i.imgur.com/YPnzJMN.png"}"></figure>
<p>Giant is that if there\u2019s any errors. Giant is greater than 1580 bytes.
Jumbo frames can be 9000 bytes! And also if there\u2019s a Frame Check sequence error.</p>
<p>The opposite errro types is a runt. Where it\u2019s less than 64-bytes.
Any encapsulation errors. </p>
<p><code>debug ospf hello</code> displays Cisco hello stuff.
<code>undebug all</code></p>
<p><strong>Device Metrics and Sensors</strong></p>
<p>Commands to test temperature memory CPU sensors</p>
<p>How to find it from a Cisco catalyst switch</p>
<p><code>show env temperature</code></p>
<p><code>show processes memory</code></p>
<figure><img src="${"https://i.imgur.com/g6NIYUF.png"}"></figure>
<p><code>show processes cpu</code></p>
<p><strong>Environmental Metrics and Sensors</strong></p>
<p>What about data centers</p>
<p>Like temperature, humidity, power, and water.
We can use sensors like
SNMP Manager, with agents and MIB.</p>
<p>It fires a SNMP Trap. </p>
<ul class="${"list"}"><li>Temperature and Humidity Sensor. </li>
<li>Uniterruptible Power Supply (UPS) </li>
<li>Water Level Sensor (like in basement\u2026 flooding. Even shows depth.)</li></ul>
<p><strong>Common LAN issues</strong></p>
<p>Attenuation - it\u2019s when the cable/signal is weakened from time.</p>
<p>Latency - degrade quality. 150ms for voice.</p>
<p>Jitter - if a voip packet, data, then voip packet\u2026 will create jitter.</p>
<p>Crosstalk - if two electric fields happen to cross. It\u2019s why we have twist cables.</p>
<p>Electromagnetic Interference (EMI) - like electric spike from a microwave. Fiber optics doesn\u2019t have to deal with that.</p>
<p>Open/Short - when there\u2019s a break on cable. </p>
<p>Incorrect Pin-out
Incorrect cable Type
Bad port
Damaged Cables
Bent Pins
Bottleneck -
VLAN Mismatch -
Network Connection LED Status Indicator</p>
<p>Transceiver Mismatch -
TX/RX Reverse - like 2PCs, need a crosswire.</p>
<p>Duplex/Speed mismatch  - full duplex/half duplex.</p>
<p><strong>Common Wireless Network Issues</strong></p>
<p>Reflection - radio waves moving into a weird way.
Refraction - radio wave going through watercolor or cinderblock Refraction is the bending of an RF frequency if it\u2019s passed through a different medium. </p>
<p>Absorption is a property in which signal can get lost by an undesired source absorbing the signal.
Attenuation is a natural property that occurs as a reduction of signal when the distance from the source increases. This property applies to wireless signals from an AP, especially if not configured properly, or if there is something blocking the signal.</p>
<p>EIRP - effective isotropic radiative power - how much signal power is sent from the access point\u2019s antenna
incorrect antenna type -
interference - microwave
incorrect antenna placement - like coverage area in the parking lot. You don\u2019t want that. </p>
<p>channel overlap - Or channels conflict. like 1, 6, 1\u2026
Association time - DHCP - access point isn\u2019t working right.
Captive Portal Issues - DNS was hardcoded and it fucked up.
AP Disassociation - session/idle timeout.</p>
<p>Overcapcity - where too many clients on a Access Point.
Distance Limitations - where radio power isn\u2019t working.</p>
<p>Wrong SSID
Wrong Passphase
Security Type mismatch - like TKIP when it\u2019s supposed to be WEP
Power Levels
Signal to noise ratio - the bigger ratio, the better.</p>
<p><strong>Common Network Service Issues</strong></p>
<p>Name Resolution - DNS server was not doing it\u2019s job. Ping DNS server\u2026 and see if that\u2019s the case.
ping 8.8.8.8 and if that works\u2026 then you can go out to the internet.</p>
<p>Wrong Default Gateway IP -
Wrong Subnet Mask - which bits talk to network portion, and which one to host portion.
Overlapping IP address -
Overlapping Mac address - this can fuck up the mac table. Instability, frames will not be delivered. You can statically configure it with malicious intent.</p>
<p>Non expired IP address.
Rogue DHCP - use DHCP snooping to solve.</p>
<p>Untrusted SSL Certificate - a Secure Sockets Layer. Which contains a trusted-third party, a CA, like Docusign. Running a local host with a self-signed certificate. So you need to make a exception.</p>
<p>Wrong time - The device reading the time\u2026 NTP. </p>
<p>Exhausted DHCP scope  - maybe we\u2019re out of dhcp pool. A church that handed a class C network with 200 IPs available. All those devices exhausted the scope, and people weren\u2019t able to connect to the public wifi. Had to switch to a /24 subnet, to a /16 subnet. </p>
<p>Blocked ports. </p>
<p>Incorrect Firewall Settings or Incorrect ACL settings - need to know the exact ports
Service not responding - restart a service.</p>
<p>Hardware Issue </p>
<p><strong>General Networking Issues</strong></p>
<p>Device Misconfiguration - is the settings correct.
Missing Routes - routers not talking to you correct</p>
<p>Routing loop - When a packet goes through a router, it still has a TTL, which will disappear. Versus a switch, which doesn\u2019t trigger a TTL.</p>
<p>Interface - Giants or runts?</p>
<p>Baselines - what\u2019s error rates of stats of things.</p>
<p>Collision - when mostly with hubs, which collides data. Can still happen in a wireless network.
Pre-wifi version 6.</p>
<p>Broadcast storm - loops through Switches. You can fix with STP - spanning tree protocol setup.</p>
<p>Multicast FLooding - flooding can impact network performaance. use PEM sparce-mode. </p>
<p>Asymmetrical Routing - if routing goes through 1, but data is returned to another</p>
<p>DNS issue - you can check the DNS server</p>
<p>NTP issues - certs expiring because time is goofy</p>
<p>BYOB issues - BYOB policies.</p>
<p>License issues - trial version ends. </p>
<p><strong>TEST:</strong>
Attenuation is a natural property that occurs as a reduction of signal when the distance from the source increase. When there is a gradual reduction in signal strength with an increased distance from a source, it\u2019s because of Attenuation.</p>
<p>sh arp is used on a Cisco device to display the ARP table.</p>
<p>The commands used to verify TCP/IP information on hosts are ifconfig (for Unix and Linux hosts) and ipconfig (for Windows hosts)</p>
<p>For wireless:</p>
<ul class="${"list"}"><li>Variance in Delay is known as Jitter which is measured in Milliseconds. </li>
<li>Delay is the amount of time it takes for a packet to travel from one point to the next measured in milliseconds. </li>
<li>Latency describes the amount of time a delay takes. </li>
<li>Absorption is a property in which signal can get lost by an undesired source absorbing the signal. </li>
<li>Loss is a reduction in attenuation as it spreads through a space.</li></ul>
<blockquote><p>A technician was tasked with configuring computers to automatically receive their IP address information instead of using static addressing. When the technician carried out the migration, he noticed that many computers got an address in the 169.254.0.0/16 range instead of in the 10.1.1.0/24 range. During the previous day, all the computers were working properly. Which of the following could have caused this issue?</p></blockquote>
<p>Since the technician noticed that the computers did have proper IP addresses the previous day and now don\u2019t suggest there may be a problem with DHCP. Not to mention that an address in the 169.254.0.0/16 range suggests APIPA addresses are being used. Automatic Private IP Addressing (APIPA) addresses suggests that a host can\u2019t find a DHCP server, and thus assigns itself an address in the 169.254.0.0/16 range in hopes of it can be able to communicate to hosts within the broadcast domain.</p>
<blockquote><p>You are designing a wireless network so that a technician can go out and configure the access points. At the moment, you are choosing an SSID for the network. You choose to use the SSID \u2018Enterprise network\u2019 on one AP and \u2018enterprise network\u2019 on another AP. All the other settings are configured to be the same. When you verify if the wireless network is functional, you notice once you reach some distance from the first access point corresponding to the \u2018Enterprise network\u2019 SSID, your signal drops. Which of the following most likely caused the issue?</p></blockquote>
<p>Based on the description, it can be seen that the SSIDs (Service Set Identifiers)configured on the respective access points are different, which is causing the signal to not be spread, thus causing the host to lose connectivity. Wrong antenna types and interference might cause a similar issue, but based on the description, it is seen that there are two different SSIDs, which is the real issue. Configuring the same SSID on the access points wouldn\u2019t cause this problem to happen.</p>
<blockquote><p>You have been tasked to move your organization\u2019s IP addresses from static to DHCP assigned addresses. The only consideration is some hosts will still require static addressing. Later, you discover a host that got its IP address assigned by DHCP can\u2019t communicate on the network. Which of the following could have caused this issue?</p></blockquote>
<p>Given this situation, if a host received a duplicate address, it won\u2019t be able to communicate in the network. The solution in this case would be to give up the leased address on the host and possibly look at addresses you could exclude on the DHCP server. If the default gateway was incorrect, the host could still communicate within the subnet. A DNS server being down wouldn\u2019t affect network communication in this case. A computer can\u2019t have a duplicate MAC address unless explicitly you explicitly configure one. Also, there is rarely a need, if ever, to change a computer\u2019s NIC (Network Interface</p>
<blockquote><p>Which of the following might happen to a host that can\u2019t reach the DHCP server after the specified lease time?</p></blockquote>
<p>If a host can\u2019t contact a DHCP (Dynamic Host Configuration Protocol) server, 2 things will happen: 1. The host will assign itself an APIPA (Automatic Private IP Address) and 2. The host won\u2019t be able to communicate with hosts outside of the subnet because the host won\u2019t have a default gateway set as default gateway information is given up once the lease is passed. ARP (Address Resolution Protocol) is a Data Link protocol used to dynamically map an IP address to a MAC address. ARP doesn\u2019t provide automatic address assignment.</p>
<h2 id="${"module-18-prepping-or-comptia-network-exam"}"><a href="${"#module-18-prepping-or-comptia-network-exam"}">Module 18: Prepping or CompTIA Network+ Exam</a></h2>
<p>THREE THINGS TO DO:</p>
<ol class="${"list"}"><li>Get objectives \u2014</li>
<li>Schedule study time. </li>
<li>Get your hands dirty. </li></ol>
<figure><img src="${"https://i.imgur.com/KvC1A3M.png"}"></figure>
<p>The URL: <a href="${"https://comptiacdn.azureedge.net/webcontent/docs/default-source/exam-objectives/comptia-network-n10-008-exam-objectives-(5-0).pdf?sfvrsn=8d00a1d7_2"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://comptiacdn.azureedge.net/webcontent/docs/default-source/exam-objectives/comptia-network-n10-008-exam-objectives-(5-0).pdf?sfvrsn=8d00a1d7_2</a></p>
<p>EXAMPLE: Plan your schedule time \u2014
Like 8 hours per week.
1 hr/day - M-F
3 hrs on Saturday.
15 hours of hands-on</p>
<p>Getting hands dirty:</p>
<ul class="${"list"}"><li>Use non-prod computer</li>
<li>Buying a home lab</li>
<li>Hands-on Lab simulation \u2014 bit.ly/netplussim</li></ul>
<p><strong>Exam Day</strong></p>
<ol class="${"list"}"><li>arrive early</li>
<li>determine your required pace (like 90 questions, that means 90 minutes.)</li>
<li>Begin with confidence. </li></ol>
<h2 id="${"module-19-wrapup"}"><a href="${"#module-19-wrapup"}">Module 19: Wrapup</a></h2>`;
    }
  })}`;
});
export { Comptia_networks_part_2_svelte as default, metadata };
