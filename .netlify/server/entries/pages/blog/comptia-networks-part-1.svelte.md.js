import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-054dfab6.js";
import { L as Layout } from "../../../chunks/_layout-b8ce1441.js";
export { l as load } from "../../../chunks/_layout-b8ce1441.js";
import "../../../chunks/dateTime-524e104e.js";
import "../../../chunks/Meta-049a30d4.js";
import "../../../chunks/Breadcrumbs-c29f9c7c.js";
import "../../../chunks/stores-2f64c591.js";
import "../../../chunks/url-8759b9e2.js";
const metadata = {
  "title": "CompTIA Networks Part 1",
  "created": "2022-03-18T00:00:00.000Z",
  "summary": "CompTia Networks Course",
  "coverImageUrl": "/media/projects/type-kana/session.jpg"
};
const Comptia_networks_part_1_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2 id="${"comptia-networks"}"><a href="${"#comptia-networks"}">CompTIA Networks+</a></h2>
<p><a href="${"https://www.udemy.com/course/comptia-network-plus-video-training/"}" rel="${"noopener"}" class="${"text-link"}" target="${"_blank"}">https://www.udemy.com/course/comptia-network-plus-video-training/</a></p>
<h2 id="${"module-1-intro-1hr---done"}"><a href="${"#module-1-intro-1hr---done"}">Module 1: Intro (1hr) - DONE</a></h2>
<div><figure><img src="${"/media/comptia-blogpost/m1-headers-1.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m1-headers-2.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m1-headers-3.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m1-headers-4.png"}"></figure></div>
<figure><img src="${"/media/comptia-blogpost/m1-osi-model-pizza.png"}"></figure>
<p>Breaking Bad:
\u201CPlease do not throw sausage pizza\u201D</p>
<p>Physical
Datalink
Network
Transfer
Sessions
Presentation
Application</p>
<figure><img src="${"/media/comptia-blogpost/m1-osi-model-data.png"}"></figure>
<p>And this is:
Bacon for Poor souls</p>
<p>Bits
Frames
Packets
Segments</p>
<figure><img src="${"/media/comptia-blogpost/m1-ports-and-protocols-1.png"}"></figure>
<figure><img src="${"/media/comptia-blogpost/m1-ports-and-protocols-2.png"}"></figure>
<figure><img src="${"/media/comptia-blogpost/m1-ports-and-protocols-3.png"}"></figure>
<h2 id="${"module-2-network-pieces-and-parts-1hr"}"><a href="${"#module-2-network-pieces-and-parts-1hr"}">Module 2: Network Pieces and Parts (1hr)</a></h2>
<figure><img src="${"/media/comptia-blogpost/m2-switch.png"}"></figure>
<figure><img src="${"/media/comptia-blogpost/m2-hub.png"}"></figure>
<p>Hubs were dumb. They did not know where things are. All it was doing was taking packets.</p>
<p>If laptop 1 and laptop 2 was trying to send a packet out at the exact time, the hub would warn them and they both would set a random timer to send it again, hopefully avoiding collision</p>
<p>The Switch became the next gen, and it started to focus more of sorting data</p>
<p>Empty table. But if you were sending something to a Mac address, say printer at CCCC, the switch would flood that message until someone received it. Then it\u2019ll note both addresses in their table.</p>
<figure><img src="${"/media/comptia-blogpost/m2-router.png"}"></figure>
<p>Router focuses on just knowing it\u2019s neighbor.</p>
<p>How does it know the internet? It used 0.0.0.0 and that\u2019s a default routing.</p>
<div><figure><img src="${"/media/comptia-blogpost/m2-collision-vs-broadcast-domains-1.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m2-collision-vs-broadcast-domains-2.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m2-collision-vs-broadcast-domains-3.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m2-collision-vs-broadcast-domains-4.png"}"></figure></div>
<p>Collision domains are old networks where packet colliding can happen</p>
<p>Broadcast domain are where networks call out to identify their Mac addresses with each other</p>
<p>How does it work with routers? Routers ignore broadcasts and create subdivides</p>
<p>Remember network 1 2 and 3? They can broadcast inside each other</p>
<p><strong>IDS/IPS, and DMZ</strong></p>
<div><figure><img src="${"/media/comptia-blogpost/m2-intrusion1.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m2-intrusion2.png"}"></figure></div>
<figure><img src="${"/media/comptia-blogpost/m2-dmz.png"}"></figure>
<p>Intrusion Detection System - lives inside</p>
<p>Intrusion Prevention System - lives on the wire</p>
<p>Firewall</p>
<p>IDS - a packet goes through firewall, and then goes to the multilayer switch and splits traffic between ids sensor and client.
The ids sensor notices something fishy and hardens the firewall.
The client is still attacked dwihr a single packet.</p>
<p>Ips is in line and detects ahead. He could ha w also included a firewall pic.</p>
<p>Lastly, the way firewalls work is, if a computer is going out to the internet, the firewall bundles all the details so when that packet returns, the filewall knows it was intensional. It knows who asked for it, and where to bring it.</p>
<p><strong>Proxy Servers, VPN, Advanced Filtering</strong></p>
<div><figure><img src="${"/media/comptia-blogpost/m2-proxy.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m2-advance-filtering.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m2-vpn.png"}"></figure></div>
<p>New firewalls can now look at massive datasets to block malicious packets, if they match a specific footprint. Remember that packets are encrypted. And prior tech used to unpack and decrypt, which was slow</p>
<p>Vpn connector is useful for remote workers. It\u2019s main job is to handle all the vpn connections, as opposed to a server</p>
<p>Proxy server isn\u2019t used much because of high speed internet. Prior, say at a university\u2026 Proxy server would fetch yahoo.com for one student. And when another student wanted to see yahoo as well, it just goes into the proxy cache. It\u2019s great for low bandwidth stuff.</p>
<p>QUESTIONS:
Which of the following devices operate at layer 2 of the OSI model?</p>
<p>Bridges and Switches both operate on the data link layer. Both devices also do intelligent frame forwarding, meaning they do frame forwarding based on destination MAC addresses. Hubs operate on the physical layer. Routers operate on the network layer and make forwarding decisions based on destination IP addresses.</p>
<h2 id="${"module-3-topologies-1hr"}"><a href="${"#module-3-topologies-1hr"}">Module 3: Topologies (1hr)</a></h2>
<p><strong>Star Topology</strong></p>
<p>CONS - the single star if fail will die.</p>
<p><strong>Mesh Topology</strong></p>
<p>Full Mesh - everything is connected.
PRO: </p>
<ul class="${"list"}"><li>Optimial Path</li></ul>
<p>CON: </p>
<ul class="${"list"}"><li>More expensive</li></ul>
<p>Partial Mesh - we strategically put links between traffic
PRO:
CON</p>
<ul class="${"list"}"><li>Suboptimal</li></ul>
<p><strong>Ring Topology</strong>
LEGACY:
So the prior method using CDMA, to avoid collision.</p>
<p>Token Ring \u2014 goes in a circle sending a token.
The token takes the data, and moves through the system. </p>
<p>FDDI - it uses counter-rotating, two rings.</p>
<p>[ADD PICTURE0]</p>
<p>MAU \u2014 it becomes a star.</p>
<p><strong>Bus Topology</strong>
LEGACY:</p>
<p>CSMA/CD \u2014 Carrier-sense multiple access with collision detection</p>
<p>It listens to the same bus.
If there\u2019s a spike in the voltage, it will wait.
uses a random back off timer. </p>
<p>If you throw a point a connection in the middle - it becomes a star.</p>
<p><strong>Point-to-Point Topology</strong></p>
<p>Router connects to router
Typically a Layer 2 protocol
Could be physical point-to-point (P2P)
Could be a logical point-to-point counter.</p>
<p><strong>Client-Server, Peer-to-Peer</strong></p>
<figure><img src="${"https://i.imgur.com/rlWKWzd.png"}"></figure>
<p>If PC1 wants to talk to PC3.
It\u2019s when clients access a server to access resources.</p>
<p>Peer-to-Peer Network:</p>
<figure><img src="${"https://i.imgur.com/T9fTiuO.png"}"></figure>
<p>Just let PC4 share the data.
Just let PC1 share the printer.</p>
<p>Cons is that there\u2019s no overwatch.</p>
<p><strong>LAN, WAN, MAN, CAN, PAN, WLAN, SD-WAN</strong></p>
<h3 id="${"lan---local-area-network"}"><a href="${"#lan---local-area-network"}">LAN - Local Area Network</a></h3>
<p>In an office. </p>
<ul class="${"list"}"><li>Fairly High speed</li>
<li>Centrally Located. Not spanning more than one building.</li></ul>
<h3 id="${"wan---wide-area-network"}"><a href="${"#wan---wide-area-network"}">WAN - Wide Area Network</a></h3>
<p>Two geographical locations. Like HQ, and in another building, BR1.
Usually a Lightning bolt. If it\u2019s dotted, it\u2019s \u201COn-demand\u201D. </p>
<ul class="${"list"}"><li>Typically slower than LANs</li>
<li>Geographically Dispersed Sites</li>
<li>Sites Connect to Service Provider</li></ul>
<p>A replacement is a VPN. It just sends to the cloud.</p>
<h3 id="${"man---metropolitan-area-network"}"><a href="${"#man---metropolitan-area-network"}">MAN - Metropolitan Area Network</a></h3>
<p>Example: Chicago</p>
<p>John Hancock Center
Willis Tower
Tribute Tower
Chicago Board of Trade</p>
<ul class="${"list"}"><li>Limited Availability \u2014 since it\u2019s usually in metros.</li>
<li>Very High Speed</li>
<li>Redundant </li></ul>
<figure><img src="${"https://i.imgur.com/TqomcMt.png"}"></figure>
<p>How to avoid clashing customers?
LAMBDA.
Different customers have different lambda. They use a different light. </p>
<h3 id="${"can---campus"}"><a href="${"#can---campus"}">CAN - Campus</a></h3>
<p>Can be university, or even tech companies. </p>
<figure><img src="${"https://i.imgur.com/K3ymz7f.png"}"></figure>
<p>Done with conduit systems, or a central place.</p>
<ul class="${"list"}"><li>Very High Speed</li>
<li>Nearby Buildings</li>
<li>Easy to add redundancy (So there\u2019s no single point of failure)</li></ul>
<h3 id="${"pan---personal"}"><a href="${"#pan---personal"}">PAN - Personal</a></h3>
<p>Smallest. Connects TWO devices.</p>
<ul class="${"list"}"><li>Wireless controller </li>
<li>Remote.</li>
<li>Smart phone -&gt; Speaker</li></ul>
<p>Infrared or Bluetooth.</p>
<h3 id="${"wlan---wireless-lan"}"><a href="${"#wlan---wireless-lan"}">WLAN - Wireless LAN</a></h3>
<figure><img src="${"https://i.imgur.com/q85y78W.png"}"></figure>
<p>Communicates wave through a Access Point.
The Access point talks to a switch.
Using radiowaves.</p>
<ul class="${"list"}"><li>Adds Flexibility and mobility for connections</li></ul>
<p>CONCERN:
Radiowave collision.
Switch channels. </p>
<h3 id="${"sd-wan---software-defined-wan"}"><a href="${"#sd-wan---software-defined-wan"}">SD-WAN - Software-Defined WAN</a></h3>
<figure><img src="${"https://i.imgur.com/y0wMNn0.png"}"></figure>
<p>Connect remote sites back to a central site using various WAN technologies.</p>
<p>Predictable performance and security</p>
<p>ISSUES:</p>
<ul class="${"list"}"><li>Traffic backhauling might be required</li></ul>
<p>Modern SD-WAN Connections</p>
<figure><img src="${"https://i.imgur.com/oNRc0PD.png"}"></figure>
<p>Applications are migrating to the cloud, to provide security.
provide security, QoS, and forwarding</p>
<p>You have the Physical Infrastructure \u2014 everything is a wire. It\u2019s called a \u2018Underlay Network\u2019.
But the SD-WAN Controller, it\u2019s a Virtual Infrastructure. It\u2019s called the \u2018overlay network\u2019. </p>
<p>Here\u2019s how SD-WAN controller \u2014</p>
<ul class="${"list"}"><li>it decouples from the router. </li>
<li>Can use a wide variety of technology</li>
<li>The forwarding decisions is made by the SD-WAN Controller.</li>
<li>Can provide configs to provide consistent QoS, Security, and predicable controller. </li></ul>
<h3 id="${"industrial-control-systems-and-scada"}"><a href="${"#industrial-control-systems-and-scada"}">Industrial Control Systems and SCADA</a></h3>
<p>SCADA
Supervisory
Control
And
Dada
Acquisition </p>
<p>For example - a pond\u2026 we want to monitor it.</p>
<figure><img src="${"https://i.imgur.com/wXDUrDc.png"}"></figure>
<p>CONTROL 1: We need a water level sensor, to check Temperature, water level, and a control system.
CONTROL 2: We\u2019ll need  water pump to pump water.</p>
<p>RTU: To manage the controls.
SCADA Master: That\u2019s managing all the RTU.</p>
<p>So a situation where it rains.
The water sensor notices it, and tells the RTU. The RTU switches on the pump.
The RTU then let\u2019s the SCADA Master know.</p>
<h2 id="${"module-4-understanding-networks-15hr"}"><a href="${"#module-4-understanding-networks-15hr"}">Module 4: Understanding Networks (1.5hr)</a></h2>
<p>ATM (Asynchronous Transfer Mode) is a technology used by service providers to switch data using fixed cells of 53 bytes. </p>
<p>MPLS (MultiProtocol Label Switching) is a Service Provider technology used to switch
data based on labels, instead of addresses. </p>
<p>Frame Relay is a layer 2 protocol that specifies the framing and structure of Frame Relay frames on the perspective WAN (Wide Area Network) network. </p>
<p>PPP (Point to Point Protocol) is a layer 2 encapsulation protocol that provides features such as authentication and compression, typically used on WAN (Wide Area Network) links.</p>
<h3 id="${"vpns"}"><a href="${"#vpns"}">VPNS</a></h3>
<p>Remove Access VPN</p>
<figure><img src="${"https://i.imgur.com/jnwzfp6.png"}"></figure>
<p>Let\u2019s you share private stuff over the internet.</p>
<p>What about when you want to share a local print job? You don\u2019t need that overhead.
So you can use a Split Tunnel, which keeps local traffic flowing over the VPN.
(Versus Full Tunnel)</p>
<p>Site-to-Site VPN</p>
<figure><img src="${"https://i.imgur.com/mo7qEmH.png"}"></figure>
<p>VPN Concentrator, let the router deal with the data encryption and etc.</p>
<p>VPN uses GRE tunnels -&gt; IPSec tunnels to transfer data.</p>
<h3 id="${"vpn-protocols"}"><a href="${"#vpn-protocols"}">VPN Protocols</a></h3>
<p><strong>GRE Tunnel</strong>
Generic Routing Encapsulation</p>
<figure><img src="${"https://i.imgur.com/FbdKqzz.png"}"></figure>
<ol class="${"list"}"><li>It does not provide security</li>
<li>Can encapsulate nearly any type daa.</li></ol>
<p><strong>IP Security (IPSec)</strong></p>
<figure><img src="${"https://i.imgur.com/gUfw0TY.png"}"></figure>
<ol class="${"list"}"><li><p>Provides
Encyprtion, hashing, Digital Signatures, Applies serial numbers to packets (So sniffers can\u2019t recreate it)</p></li>
<li><p>Can encapsulate unicast IP Packets</p></li>
<li><p>Two modes
Transport Mode: Use packets original header
Tunnel mode: Encapsulates entire packet</p></li>
<li><p>Authentication and Encryption</p></li></ol>
<ul class="${"list"}"><li>Authentication Header: Authenticates an entire IP packet</li>
<li>Encapsulating Security Protocol (ESP): Can authenticate an IP packet (not including the IP Header), and can perform encryption.</li></ul>
<ol start="${"5"}" class="${"list"}"><li>Setup Steps
Step 1 - Establish an Internet Key Exchange (IKE) Phase 1 tunnel (aka internet security association and key management protocol (ISAKMP))
Step 2: Establish IKE Phase 2 Tunnel. </li></ol>
<p><strong>GRE over Ipsec, a best of both worlds</strong></p>
<figure><img src="${"https://i.imgur.com/l2Ls0ND.png"}"></figure>
<ol class="${"list"}"><li>Take the GRE tunnel, and encapsulates that traffic type into GRE packets. </li>
<li>Since IPsec only takes unicast IP packets, GRE packets will work. So IPsec converts it and sends it over.</li></ol>
<h3 id="${"dynamic-multipoint-vpn"}"><a href="${"#dynamic-multipoint-vpn"}">Dynamic Multipoint VPN</a></h3>
<figure><img src="${"https://i.imgur.com/dvPfYTl.png"}"></figure>
<p>HUB: HQ
SPOKE: Branch A, B, and C</p>
<p>BEFORE: If Branch A wants to connect to Branch C, it\u2019ll have to talk back to HQ. </p>
<figure><img src="${"https://i.imgur.com/i3MCknl.png"}"></figure>
<p>NOW: With Dynamic Multipoint VPN.
It uses Multipoint GRE (mGRE):
and Next Hope Resolution Protocol (NHRP): Used to discover the IP address of the device at the far end of a tunnel.</p>
<p>BUT \u2014 how does Branch A talk to Branch B and even set up that Dynamic Tunnel?</p>
<figure><img src="${"https://i.imgur.com/UvV4sF7.png"}"></figure>
<p>It\u2019ll say, you want to reach 10.0.0.2 at their real IP \u2014 over the public internet.</p>
<p>NHRP Query -
\u201CWhat\u2019s the Physical IP address of IP Address 10.0.0.2\u201D to the hub.
It\u2019s your message.</p>
<p>DHCP
SDN</p>
<h3 id="${"web-services--voice-services"}"><a href="${"#web-services--voice-services"}">Web Services &amp; Voice Services</a></h3>
<figure><img src="${"https://i.imgur.com/vdiUvJx.png"}"></figure>
<p>Ephemeral port number for the source. Like 56000+</p>
<p>The source IP:
Destination IP:
Source Port
Destination Port: </p>
<p><strong>Voice Services</strong></p>
<figure><img src="${"https://i.imgur.com/2RUcdNp.png"}"></figure>
<p>Before to connect phones \u2014 they used to own a PBX (private branch exchange)</p>
<p>PBX is like a phone version of a switch.
EXAMPLE: </p>
<ul class="${"list"}"><li>6000 phones, you don\u2019t connect it to the Phone Company. </li>
<li>You can connect them to each other, and only 200 phones are actually outbound. </li>
<li>And if it was in another building, it\u2019ll go over something called \u2018a tieline\u2019.</li></ul>
<figure><img src="${"https://i.imgur.com/9eQPjvy.png"}"></figure>
<figure><img src="${"https://i.imgur.com/622zktO.png"}"></figure>
<p>The PBX replacement is \u2018the Call Agent.</p>
<p>SIP - session Initiative Protocol.
That\u2019s the data type for voip.</p>
<ol class="${"list"}"><li>So x3800 wants to talk to x1012.</li>
<li>The Call agent will figure out all the code, and then moves that message config to x1012. </li>
<li>x1012 accepts and then a direct communication will occur. Call Agent doesn\u2019t need to do anything any more.</li></ol>
<p>RTP - Real-time transport protocol (RTP)</p>
<p>A transport layer protocol that carries voice/video media.</p>
<h3 id="${"dhcp"}"><a href="${"#dhcp"}">DHCP</a></h3>
<p>Dynamic Host Configuration Protocol (DHCP) theory</p>
<figure><img src="${"https://i.imgur.com/n8d7HbE.png"}"></figure>
<p>Computer talks to switch, that connects to a DHCP Server.</p>
<p>4-step process:
DORA -
D - Discover \u2014 it\u2019s a broadcast. (Anyone there?)
O - Offer. It\u2019s unicast. (Here\u2019s my IP address.)
R - Request. It\u2019s a broadcast. (Can I have a IP Address?)
A - Acknowledgement. It\u2019s a unicast. (Sure can!)</p>
<p>The computer is at 0.0.0.0, before a IP address is sent.
Well, the DHCP Server is actually talking directly to the MAC Address.</p>
<p>NOTE: Router stops broadcast \u2014
So Laptop A cannot talk to Laptop B.
To avoid that, the router becomes a DHCP Relay/IP Helper.
That allows it.</p>
<figure><img src="${"https://i.imgur.com/lqELsuM.png"}"></figure>
<p>DHCP Features:</p>
<ul class="${"list"}"><li>MAC reservations. (like keep the printer to always assign X address)</li>
<li>Pools (aka Scopes) (different pool for diff subnets, like 192.168.100, 172.16.1.100)</li>
<li>IP Exclusions (Don\u2019t include these IPs)</li>
<li>Scope Options
( Like give the Default gateway, DNS server, or change the TTL, or Option 150.)</li>
<li>Lease Time
If it will expire in 8 days\u2026 to renew
T1 = ask on 1/2 of lease time (4 days)
T2 = ask again on 7/8 lease time. (7 days0)</li></ul>
<figure><img src="${"https://i.imgur.com/OX83DNJ.png"}"></figure>
<h3 id="${"dns"}"><a href="${"#dns"}">DNS</a></h3>
<figure><img src="${"https://i.imgur.com/ncquOd7.png"}"></figure>
<figure><img src="${"https://i.imgur.com/nIIQGuG.png"}"></figure>
<ol class="${"list"}"><li>Your computer wants something, so it sends <code>website.com</code> to the internet.</li>
<li>DNS server takes that, and sends back to your computer the ip address.</li>
<li>Your computer then pings that ip address.</li></ol>
<p>DNS Terms:</p>
<p>Authoerative Name Server -
Where it will forward requests.
Like .com will forward it to the right data spot.</p>
<p>DNS Zone Transfer -
When you send your DNS Zone updatse from a priamry to a secondary.</p>
<p>Reverse Lookup -
When you query a DNS server for a domain name with a specific address.
So it takes <code>www.website.com</code> and returns IP address.</p>
<p>Internal DNS -
Like one for only internal offices and workplace.</p>
<p>External DNS
This is for the intenret.</p>
<p>VPN - How someone on the internet to connect to the internal.
Like working from home.</p>
<figure><img src="${"https://i.imgur.com/Hywfwji.png"}"></figure>
<p>A \u2014 Address
AAAAA - IpV6 address
CNAME - another name for that record. Alias.
MX - mail service account.
PTR - Like a CNAME. Used when performing Reverse Lookout.
SOA - Start of Authority - A informational record.
TXT - To contain descriptive human text. Now it sends attrs/values.
SRV - A record to point to other specific services. Like more generic MX record.
NS - Tells a DNS zone to use specific name servers, for security reasons.</p>
<h3 id="${"nat-theory"}"><a href="${"#nat-theory"}">NAT Theory</a></h3>
<p>The most common method for ipv4.:</p>
<p>How do you connect to other computers locally?
What IP Address do they get?</p>
<p>RFC1918 \u2014
This specifies private IPv4 Address spaces. Stuff you can routed within an org but not on public internet.
PRIVATE: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16</p>
<p>Can route them just fine in the network.</p>
<figure><img src="${"https://i.imgur.com/LjWYyUM.png"}"></figure>
<figure><img src="${"https://i.imgur.com/xEgZ9M5.png"}"></figure>
<p>NAT-enabled router changes the source IP and makes a special IP to the internet.</p>
<p>They have a table</p>
<p>Inside local
outside local
inside global
outside local</p>
<figure><img src="${"https://i.imgur.com/j26IbU0.png"}"></figure>
<p>This ALSO ASSUMES that the internet service provider is giving you a POOL of addresses. Which it doesn\u2019t!</p>
<p>Inside means\u2026 you can access.
Inside Local \u2014 It\u2019s IP addresses you can access from your computer directly.
Inside Global \u2014 It\u2019s the source IP, which again, you can access! </p>
<p>Outside Global - It means that it\u2019s completely outside of our network.</p>
<p>Outside Local - Rarely will see this.</p>
<p>QUESTION:
How does this work int his sitaution?
Your own home network. 1 IP address. But you also have a bunch of devices.</p>
<p>A variant of NAT -
Port Address Translation (PAT) Theory</p>
<p>You have to share the IP, but different port numbers.</p>
<figure><img src="${"https://i.imgur.com/BPs1V2y.png"}"></figure>
<figure><img src="${"https://i.imgur.com/aE07MR7.png"}"></figure>
<p>Computer wants to talk to another computer.
The Port Mapping Router sents it to the SSH Server.
The SSH Server takes that number, and sends it to the correct port.</p>
<h3 id="${"ntp"}"><a href="${"#ntp"}">NTP</a></h3>
<p>Network Time Protocol (NTP) Theory</p>
<p>Why do techies need accurate time?</p>
<ul class="${"list"}"><li>Logging errors.</li>
<li>Digital certificates to exchange private data. Have experation dates.</li>
<li>IP phones. </li></ul>
<p>Atomic clock C-133 elements, which vibrates 9mil times. That\u2019s 1-second. </p>
<p>So we want a router, that points to that Atomic Cloud.</p>
<p>NTP is as easy as 123.
Port 123.
Statum number\u2026 measure the beliebability of a time source.</p>
<p>So Router talking to Internet Atomic Clock \u2014 Stratum = 1
A SW1 talking to Router \u2014 Statum = 2.</p>
<p>It allows that info to propogate.
BUT, if the place is a statum grater than 16, then it refuses it.</p>
<h3 id="${"sdn"}"><a href="${"#sdn"}">SDN</a></h3>
<p>BEFORE:
It was time consuming to spin up a network real fast.
Like after a major football game, traffic will flood. So you set up a bunch of networks.
But you can\u2019t just CLI into each one manually.</p>
<p>NOW:
Virtual Machines, set up load balancing.</p>
<p>SDN - three planes.
Management Plane - In charge of access that router/switch. Like running SSL, but to your virtual machine that duplicates the commands. </p>
<p>Control Plane - In charge of figuring out protocol types.
Populating the router to make forwarding decisions.</p>
<p>Data Plane - It\u2019s just figuring out data. </p>
<figure><img src="${"https://i.imgur.com/xHY3uVV.png"}"></figure>
<p>We call those devices\u2026 Southbound Interfaces. (SBI)</p>
<p>This is called a Centralized Control Plane.
Using OpenFlow.</p>
<p>We use Applications to communicate the SDN Controller, using
Northbound Interfaces. (NBI)</p>
<p>north of the SDN Controller is like\u2026 application, your program.
south of the SDN controller is like\u2026 the devices themselves.</p>
<figure><img src="${"https://i.imgur.com/l5IK5jv.png"}"></figure>
<h3 id="${"iot"}"><a href="${"#iot"}">IOT</a></h3>
<p>Camera that talks to Phone. Microwave that talks to watch.
Lightbulb.</p>
<p>Drivers:</p>
<ul class="${"list"}"><li>Thanks to High speed internet widly available</li>
<li>Wi-Fi in the devices</li>
<li>Smart phones </li></ul>
<p>Sample Applications</p>
<ul class="${"list"}"><li>Predictive maintence (your car telling your phone that it needs aire)</li>
<li>Self-optimization production (if factory 1 fails, it tells factory 2.)</li>
<li>Automated inventory management (The monitor tells corona how much is left on the keg. If low, it tells corona to send another one)</li>
<li>Home automation</li>
<li>Health monitoring - </li></ul>
<p>Supporting Technology</p>
<ul class="${"list"}"><li>Z-Wave - like honeywell, using a mesh topology. Using 900 mhz band (not 2.4ghz)</li>
<li>Zigbee - not compatbie. Faster. Competitor to Z-wave.</li>
<li>ANT/ANT+ - heartrate monitor</li>
<li>Bluetooth - Lowpower transfer. Speakers to phone,.</li>
<li>NFC - Near-field communication using your credit card</li>
<li>IR - Infrared (IR), direct line of sight. </li>
<li>RFID - Radio frequency, using iPhone tags.</li>
<li>IEEE 802.11 - wifi standard.</li></ul>
<h3 id="${"sip-trunks"}"><a href="${"#sip-trunks"}">SIP Trunks</a></h3>
<p>PSTN - Old phone world
ITSP - to connect us to phones around the world. Using a SIP Gateway. </p>
<p>BEFORE:
You have 200 phones that you pay the phone company to create a wire for.</p>
<p>AFTER:
You have 200 phones that are controlled by a Call Agent, that sends it through a SIP Gateawy, that goes to the ITSP Internet.</p>
<figure><img src="${"https://i.imgur.com/TX7clxg.png"}"></figure>
<ol class="${"list"}"><li>Starts the negotiation, using SIP.</li>
<li>then RTP deals with the actual call.</li></ol>
<h2 id="${"module-5-selecting-wan-technologies-1hr"}"><a href="${"#module-5-selecting-wan-technologies-1hr"}">Module 5: Selecting WAN Technologies (1hr)</a></h2>
<p><strong>Cellular</strong></p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">Smart Phone -&gt; Cell Tower -&gt; Service Provider&#39;s Ground Station -&gt; Internet</code>`}<!-- HTML_TAG_END --></pre>
<p>1G - Analog Voice
2G - Digital voice and added support for GSM, and CDMA
25G - Packet Switching
2.75G (EDGE) - Increase Data rates
3G - Better data rates, UMTS and CDMA2000
4G - 100 Mps download at least
4G LTS - 20 Mbps-100 MBps
5G - Higher speed, lower latecy. Like for Cars.
mmWave - light posts or traffic.
Sub-6GHz - uses </p>
<figure><img src="${"https://i.imgur.com/qe4tvMH.png"}"></figure>
<p>VSAT -
Very Small Aperture Terminal (VSAT)
Wan Tech that uses small satellite dishes connected to a network and supports 2-way communication. </p>
<p>(Not like Sat TV, which is single direction.)</p>
<ul class="${"list"}"><li><p>Usually the dish is less than 3 meters.
Great for remote locations. Or a oil rig. Or a ship that uses some VSAT technology. </p></li>
<li><p>12 Mbps to 10 Mbps.</p></li>
<li><p>Date experiences more delays. Thousands of miles to travel to up, then down back to the ground. And weather conditions. </p></li></ul>
<p><strong>Cable</strong></p>
<p>Cable Modem. </p>
<figure><img src="${"https://i.imgur.com/5vNHtX3.png"}"></figure>
<p>Hybrid Fiber-coax (HFC) Distribution Network:
A cable companies infrastructure for both. </p>
<p>Data-Over-Cable-Service Interface Specification (DOCSIS):
A set of standards specificying the diff feq ranges in a cable TV Network.</p>
<p>Cable Modem termination SYstem (CMTS)</p>
<p>Max download/upload speed. </p>
<p><strong>PPP</strong></p>
<p>Point-to-point protocol Features - It\u2019s a Layer 2 Protocol.</p>
<ol class="${"list"}"><li><p>Authentication  \u2014 CHAP vs PAP:
PAP (Password Authentication Protocol) - Sends login credentials across network. (Cleartext)
CHAP (Challegne Handshake Authen Protocol) - Encrypted version. </p></li>
<li><p>Compression - A feature. </p></li>
<li><p>Detect Errors and Correct them.
He\u2019s not a big fan of this feature.
If it detects it and uses a copy. </p></li>
<li><p>Multiple Links</p></li></ol>
<p>MLP - Bundles Multiple phyiscal links into a single logical link, which improves throughput. </p>
<p><strong>PPPoE</strong></p>
<figure><img src="${"https://i.imgur.com/hPilXWR.png"}"></figure>
<p>It\u2019s ability to do authentication. Using PAP vs CHAP. </p>
<p>We can use PPPoE \u2014 Over Ethernet. </p>
<p>DSL is data over the phone line. </p>
<ol class="${"list"}"><li>Your DSL modem wants to connect to the internet.</li>
<li>The (DSLAM) - DSL Access Multiplexer needs to confirm you have access.</li>
<li>It needs to take user/pass data to auth server.</li>
<li>It uses a PPPoE to get that, to send to the Auth Server.</li></ol>
<p><strong>DSL</strong></p>
<p>DSL is data over the phone line. </p>
<p>ADSL - means asymetric. Higher and data. 18,000 feet.
Symmetric DSL - same upload/download.  12,000 feet.
Very High DSL - 4000 feet.</p>
<p>DSLAM - 18000 feet between modem and DSLAM.
To fix that, they use Load Coils, installed every 18,000 feet.</p>
<p><strong>MPLS</strong></p>
<p>Ethernet Switching is considered a Layer 2 technology.
Layer 2 mac address.</p>
<p>Routers make decision at Layer 3.
More like IP addresses. </p>
<figure><img src="${"https://i.imgur.com/CxLoeP9.png"}"></figure>
<p>MPLS isn\u2019t really a layer 2 or a layer 3. Contains layer information.
ANd goes between both headers.</p>
<p>it makes a forwarding based on Labels, in a <code>sham</code> header.
It doesn\u2019t need to use lower-powered routers to make decisions based on labels, versus the massive amounts of IP addresses. The restriction is no longer (as routers are faster.)
Good case - you can also use VPN and others.</p>
<figure><img src="${"https://i.imgur.com/X50hjpJ.png"}"></figure>
<p>Each Thing makes it\u2019s own labels for all the others.
And it doesn\u2019t forward based on IP, it forwards based on label.</p>
<figure><img src="${"https://i.imgur.com/S5OZkPy.png"}"></figure>
<p>Label Switch Routers (LSR) - They live only within the MPLS service provider and do not connect to any networks.</p>
<p><strong>Metro Ethernet</strong></p>
<p>Office locations in a Metro Area Network.</p>
<p>Metro Etherent Provider.
It uses a traditional Ethernet connection. As high as 400 GB per second.</p>
<p>It could be: </p>
<ul class="${"list"}"><li>pure ethernet. </li>
<li>Ethernet over SDH (Synchronous Digital Hierarchy) - a high-speed WAN tech that uses fiber optic cabling.</li>
<li>Ethernet over MPLS</li>
<li>Ethernet over DWDM - optical WAN tech isolating customers traffic through lambda lights.</li></ul>
<h3 id="${"questions"}"><a href="${"#questions"}">QUESTIONS</a></h3>
<p>A T1 is a dedicated leased line that offers a speed of 1.544 Mbps. A T3 is a dedicated leased line that offers a speed of 44.736 Mbps. </p>
<p>An E1 is similar to a T1 line, but is used in European countries. E1 lines offer a speed of 2.048 Mbps. An E3 is a dedicated leased line that offers a speed of 34.268 Mbps. </p>
<p>PPPoE (Point to Point Protocol over Ethernet) provides features such as authentication over Ethernet networks, which is useful for ISPs (Internet Service Providers). </p>
<p>PPP (Point to Point Protocol) provides the features that PPPoE uses, but only for serial links. </p>
<p>ATM (Asynchronous Transfer Mode) is a technology used by service providers to switch data using fixed cells of 53 bytes. </p>
<p>MPLS (Multi Protocol Label Switching) is a Service Provider technology used to switch data based on labels, instead of addresses.</p>
<p>Circuit Switched networks have a dedicated physical circuit with dedicated bandwidth. Fast Switching and Process switching are forms of packet and frame forwarding techniques done on infrastructure devices.</p>
<h2 id="${"module-6-connecting-networks-with-cables-and-connectors-125hr"}"><a href="${"#module-6-connecting-networks-with-cables-and-connectors-125hr"}">Module 6: Connecting Networks with Cables and connectors (1.25hr)</a></h2>
<h3 id="${"cables"}"><a href="${"#cables"}">Cables</a></h3>
<p><strong>Copper Cables - Coax</strong></p>
<p>It\u2019s braiding to avoid the EMI (electromagnetic Interface).</p>
<figure><img src="${"https://i.imgur.com/aMr1SfH.png"}"></figure>
<p>Coaxial (Coax) Cables have a few - Ohms.
Inpedance - A circuit\u2019s oppposition to traffic flow (in ohms), which can have resistive, capacitive and/or inductive components.</p>
<p>Think of the name -
Coaxial means \u2014 Two conductors at the same central point (axis)</p>
<p>Coax isn\u2019t used much anymore.</p>
<p>New one is Twinaxial Cable. </p>
<ul class="${"list"}"><li>Has 2 inner Conductors</li>
<li>Most commonly used in Data Center. (at 40Gbps or 100 GBps)</li>
<li>Limit to 7 meters</li></ul>
<p><strong>Copper Cables - Twisted Pair Cable</strong></p>
<p>Unshiedled Twisted Pair (UTP)
Shielded Twisted Pair (STP) Usually with aluminum.
Plenum-Rated - Has insulation that won\u2019t release toxic stuff.</p>
<p>Categories of Twisted Pair cable</p>
<figure><img src="${"https://i.imgur.com/zGykVdt.png"}"></figure>
<p><strong>Fiber Cables</strong>
Fiber Optics is immune to EMI (electronic mode.)</p>
<figure><img src="${"https://i.imgur.com/7IxzvdP.png"}"></figure>
<ul class="${"list"}"><li>the light refracts, causing the straws to be 2x size.</li>
<li>The inner tube (Core) is the data.</li>
<li>The outer tube (Cladding) is the padding. </li></ul>
<figure><img src="${"https://i.imgur.com/rf5Id6s.png"}"></figure>
<p>Multimode Fiber - </p>
<ul class="${"list"}"><li>The red bouncing is slower</li>
<li>The green bouncing is fast
But the data you receive, it\u2019s dysync and in error.
This is called Multimode Delay Distortion.
When bits using one path of light (a mode) passing oup other bits using a different path of light. </li></ul>
<p>Single-mode Fiber -
It\u2019s not bouncing. There\u2019s only 1 reliable path. </p>
<h3 id="${"connectors"}"><a href="${"#connectors"}">Connectors</a></h3>
<p><strong>Copper Connectors - RJ-11 &amp; RJ-45</strong></p>
<figure><img src="${"https://i.imgur.com/jKX5bsb.png"}"></figure>
<p>RJ-45 - mostly for ethernets. </p>
<figure><img src="${"https://i.imgur.com/M5UzwRT.png"}"></figure>
<p>D comes from the shape.</p>
<p>Used to be serial ports and mouse. Now modems.</p>
<figure><img src="${"https://i.imgur.com/6UBLsFa.png"}"></figure>
<p>F-Type is for cables.</p>
<p>BNC - Looks like a bayonet neil consolents.
No longer used.</p>
<figure><img src="${"https://i.imgur.com/Gg4Sq3i.jpg"}"></figure>
<p>There\u2019s 2 bodies that manage the controls.</p>
<p>American National Standards Institute (ANSI)
Telecommuncications Industry Association (TIA)</p>
<p>T548B is the current standard. </p>
<figure><img src="${"https://i.imgur.com/8eOiUIK.png"}"></figure>
<p>Computer (The Media Dependent Interface - MDI)
Pin 1 &amp; 2 is transmission.
Pin 3 and 6 is receiving.</p>
<p>Switch (Called the Media Dependent Interface Crossover - MDI-X) sets is the other side.
Pin 1 &amp; 2 is recieing.
Pin 3 and 6 is transmissiing.</p>
<p>There\u2019s a feature called Auto-MDI-X, to negotiate which pins to pins. </p>
<figure><img src="${"https://i.imgur.com/YRfLkET.png"}"></figure>
<p>WHY ONLY 4 PINS?
Notice that we were using only 4 pins.
You can use splitting, to use the other 4 pins! </p>
<figure><img src="${"https://i.imgur.com/Ed7CmQ4.png"}"></figure>
<p>But this fucks up on higher speeds.
Notice 1000BASE-T uses all 8 wires.</p>
<p><strong>Fiber connectors</strong></p>
<figure><img src="${"https://i.imgur.com/pmYHGyU.png"}"></figure>
<p>SC connector - Subscriber, Standard, Square connector. Typically used for with Multi Mode Fiber.</p>
<p>LC connector - A luncent connector, little connector. Typically used for Single Mode Fiber.</p>
<p>MTRJ - This one has TWO fiber strands. Does not have a bayonet End.
The others have only fiber strand (and ST uses two connectors)</p>
<figure><img src="${"https://i.imgur.com/52ECtbL.png"}"></figure>
<p>UPC - Ultra Physical Contact </p>
<p>So when two fibers connect (UPC), there\u2019s a little bit of a reflection happening (notice the arrows?) goes back in the other direction. It might actually damage the transfer.</p>
<figure><img src="${"https://i.imgur.com/JTjJN5D.png"}"></figure>
<h3 id="${"terms"}"><a href="${"#terms"}">Terms</a></h3>
<p><strong>Media Converters</strong></p>
<p>The equipment to attach all type of connectors\u2026 The media Converter.</p>
<ul class="${"list"}"><li>Convert a single-mode Fiber to Ethernet.</li>
<li>Or Multimode Fiber to Ethernet (Campus to Internet)</li>
<li>Fiber to Coaxial</li>
<li>Single-Mode to Fiber to Multimode Fiber </li></ul>
<p><strong>Transcievers</strong></p>
<p>To connect a ethernet switch</p>
<p>Use Transciver into the switch, for wahtever media type of what we need.
GNIC (Gibabit Interface converter (GBIC)) 1GB
SFP (Small Form-Factor Pluggable (SFP)) Transciever (In a datacenter) 1GB
SFP+ - Does 10GB  -
QUAD SFP - 4 GB transfer.
QUAD SFP+ - This will give us a 40GB transeiver.</p>
<figure><img src="${"https://i.imgur.com/hxj22Pa.png"}"></figure>
<figure><img src="${"https://i.imgur.com/w7STOkt.png"}"></figure>
<p><strong>Termination Points - Punch-down Blocks</strong></p>
<p>66 Block - LEGACY - uses Cat3. Some Cat 5e.
You have things on the left and right.
You put a jumper int he middle two rows.</p>
<p>Usually, there\u2019s a hole in the cieling of a wiring closets carrying wires to another hole closets.
Lots of twisted pairs. Not Cat6 wires.
But a Riser cable. (usually 25, or 100 pairs)
Easier to drop 1 riser cable, versus 100+ cat6 wires.
Then you can put the Riser cables onto that 66 block.</p>
<figure><img src="${"https://i.imgur.com/Ldzmk1H.png"}"></figure>
<p>We don\u2019t use 66 blcoks because there\u2019s a lot of cross talk.</p>
<p>110 Block - Most common. Uses Cat6a.</p>
<p>And a punch Down tool, to use 66 or 110 Block.
The metal cuts through the installation to make electrical contact with the wire. </p>
<figure><img src="${"https://i.imgur.com/dFAKRkG.png"}"></figure>
<p>You can then connect a rj-45 bit to a wire, and plug it in through here.
That lets you cross connect and know what office goes to where. </p>
<figure><img src="${"https://i.imgur.com/5Czzc3P.png"}"></figure>
<p>BIX (Building Industry Cross-Connect):
Typically Cat5e
GigaBIX exceeds Cat 6 specs.</p>
<figure><img src="${"https://i.imgur.com/9raoHn0.png"}"></figure>
<p>Fiber runs to different floors, and into the Fiber Distribution Panel. </p>
<p>On a WAN, a circuit to you \u2014
The responsibility is now on you.
Demarcation Point (Dmarc) and Smart Jack</p>
<p>When a network maintence responsibility passes from a WAN Provider to the customer.</p>
<figure><img src="${"https://i.imgur.com/NGJCK6K.png"}"></figure>
<h3 id="${"more-stuff"}"><a href="${"#more-stuff"}">More stuff</a></h3>
<p><strong>Cabling Tools</strong>
Crimper, cuts a wire to add a RJ45 Standard. (ethernet looking guy)</p>
<figure><img src="${"https://i.imgur.com/z48kBJD.png"}"></figure>
<p>Punch Down Tool - to hit the blades of the 60 block or the 110 blocks.</p>
<figure><img src="${"https://i.imgur.com/wjoyPL1.png"}"></figure>
<p>BERT Tester - Bit error rate test.
Check to see 1 and 0s match the patterns that we recieve on a heavy load, and rate of the error.
Very expensive.</p>
<figure><img src="${"https://i.imgur.com/YrrCWjd.png"}"></figure>
<figure><img src="${"https://i.imgur.com/mnaBW4e.png"}"></figure>
<figure><img src="${"https://i.imgur.com/fplg9cy.png"}"></figure>
<p>Multimeter - Check AC/DC, check zero resistence to see if the wire is broken.</p>
<p>Bandwidth Speed Tester (like speedtest.net)</p>
<p>Wire Map Tester - Like the cable tester, to see if the right wires are showing the right wire.</p>
<p>Cable Tap - Allow you to \u2018tap\u2019 into pick up things. Maybe to use to check if things are flowing.</p>
<p>Fusion Splicer -
To split two wires together, or merge fiber optics.
Melts the two strands together. </p>
<p>Snips/Cutters - To cut a wire. To remove the Cat6, to attach a RF-45.</p>
<p>Cable Stripper - to strip the cable. </p>
<p>Port Scanner - to check ports. </p>
<p>Iperf - one is a client and one is a server and test the throughput between two devices.</p>
<p>Spectrum Analyzer - </p>
<ul class="${"list"}"><li>Check that the wavelengths are working.  </li>
<li>used to measure frequency in relation to an input signal.</li>
<li>it can also be used in wireless networks to track interference problems</li></ul>
<figure><img src="${"https://i.imgur.com/IzgzdBE.png"}"></figure>
<p>You should describe the general reason for each tools. </p>
<p><strong>Ethernet STandards</strong></p>
<p>You should need to know the ethernet standards.
Like what is Cat5\u2019s max speed?</p>
<figure><img src="${"https://i.imgur.com/HrfVA6m.png"}"></figure>
<figure><img src="${"https://i.imgur.com/Jtd9cxQ.png"}"></figure>
<p>MMF - Multimode fiber
SMF - Single Mode Fiber </p>
<p>Multiplexing - Lambda </p>
<p>Coarse Wavelength Division Multiplexing (CWDM): </p>
<ul class="${"list"}"><li>Supports a max of 8 channels (or 18 channels over short distance), </li>
<li>separated by 20nm. </li>
<li>Max distance over 80km. </li>
<li>No amplifiers.</li>
<li>Much more inexpensive.</li></ul>
<p>Dense Wavelength Division Multiplexing (DWDM):</p>
<ul class="${"list"}"><li>Support max of 80 channels </li>
<li>Separated by 0.20nm. </li>
<li>Max distance is 3000 km. </li>
<li>Support amplifiers. </li>
<li>Much more expensive.</li></ul>
<p>Bidirectional Wavelength Division Multiplexing (WDM):</p>
<ul class="${"list"}"><li>Let\u2019s a single fiber optic stand transfer and receive. (The other two two separate channels)</li>
<li>This educes fiber cost, at the expensve of fewer channels.
If you went with Bidirectional WDM, using DWDM \u2014 it\u2019ll turn 80 channels into 40 channels. </li></ul>
<p><strong>TEST</strong>
Category 8 twisted pair cable can support speeds as high as 25 Gbps or 40 Gbps, with a distance limitation of 30 \u2013 36 meters.</p>
<p>Plenum should be used when running an Ethernet cable through AC (Air Conditioning) or HVAC (Heating Ventilation and Cooling) systems, . Plenum cable has a jacket that has characteristics which can stop smoke and stop/slow flames if they were to occur on the cable. When normal PVC (Polyvinyl Chloride) cable burns, it releases a toxin. MMF and SMF cables are types of fiber-optic cable.</p>
<p>The color coding for the TIA/EIA 568-B standard is </p>
<ul class="${"list"}"><li>Orange/White, </li>
<li>Orange, </li>
<li>Green/White, </li>
<li>Blue, </li>
<li>Blue/White, </li>
<li>Green, </li>
<li>Brown/White, </li>
<li>Brown. </li></ul>
<p>To remember, think of the T568B Standard is from Mexico, where the filter is orange, and we start with orange.
While the A is Fallout America, which has a green filter.</p>
<p>The color coding for the TIA/EIA 568-A standard is: </p>
<ul class="${"list"}"><li><p>Green/White, </p></li>
<li><p>Green, </p></li>
<li><p>Orange/White, </p></li>
<li><p>Blue, </p></li>
<li><p>Blue/White, </p></li>
<li><p>Orange, </p></li>
<li><p>Brown/White, </p></li>
<li><p>Brown.</p>
<p>A TDR (Time Domain Reflectometer) is used to certify and troubleshoot cables.</p>
<p>A continuity tester is used to determine if an electrical path exists between two end points.</p></li></ul>
<p>Joe, a network technician, needs to connect to a router so he can set up SSH for remote administration. He is going to do this through the use of a serial cable. He will use a Connecting to an infrastructure device through a console usually requires one end having an RJ-45 connector and the other having a DB-9 connector.</p>
<p>DB25 - they look like old-fashion serial extension printer cords. 25 pins.
DB-9 - they\u2019re smaller with 9 pins. D shaped.
D-SUB</p>
<p>Which type of connector is usually found on the end of an RG-59 cable?
These cables are used to carry TV signals, and you\u2019d use a An F-Type connector is typically used to terminate an RG-59 cable.  They aren\u2019t used anymore.
F-type connectors are the spinny guys. called F-type because they\u2019re fucking annoying to tighten up.</p>
<p>A SFP (Small Form Factor Pluggable) has largely replaced a GBIC (Gigabit Interface Converter) largely due to size.
So in Fiber, GBIC -&gt; are fucking massive. the SFP (smaller form Pluggable). </p>
<p>A router does intelligent packet forwarding based on destination IP address.</p>
<p>A hub, everyone is yelling.
A switch is like a room that has a messenger delivering the messages.
A router lets you talk to rooms somewhere else.</p>
<p>A demarcation point (Demarc) is the handoff where the service provider\u2019s network ends and the customer\u2019s network begins. </p>
<h2 id="${"module-7-ethernet-switches15hr"}"><a href="${"#module-7-ethernet-switches15hr"}">Module 7: Ethernet Switches(1.5hr)</a></h2>
<p><strong>MAC Addresses</strong>
48-bits, in hex, burned into the chip.</p>
<p>The first 24 - is the vendor code (OUI)
The last 24 - Nic Specific (Whatever the vendor wants)</p>
<ol class="${"list"}"><li>So you typically send a IP request.</li>
<li>The ARP protocol then sends back the MAC address.</li>
<li>The MAC address is then connected to directly.</li></ol>
<figure><img src="${"https://i.imgur.com/gjZ8WEb.png"}"></figure>
<p><strong>Ethernet Switch Frame Forwarding</strong></p>
<p>Laptop 1 sends a message to Switch, and then it FLOODS to the other devices.
The Printer says, \u201CYeah that\u2019s me.\u201D
Now Switch knows both Mac address.</p>
<figure><img src="${"https://i.imgur.com/TS3Ms3G.png"}"></figure>
<p>What a Ethernet Frame looks like</p>
<p>18-bytes Header:
7 \u2014 Preamble - 7 byte
1 \u2014 SFD - Start Frame Delimited - 1 bytes
6 \u2014 Destination - 48 bits, that\u2019s 6-bytes
6 \u2014 Address Mac - 48 bits, that\u2019s 6-bytes
2 \u2014 Type - 2 bytes. Ipv4 or IpV6.</p>
<p>DATA: It has 1500 Bytes max. MTC</p>
<p>4 \u2014 Frame check Sequence (FCS) - 4-bytes</p>
<p>Layer 2 MTU could be 1500 + 18. </p>
<figure><img src="${"https://i.imgur.com/ULKMHCE.png"}"></figure>
<p><strong>Virtual Lans</strong></p>
<p>VLAN Theory</p>
<p>A VLAN (Virtual Local Area Network) is a layer 2 broadcast domain that provides logical isolation. VLANs can span across multiple switches through trunks. With that being said, since VLANs provide layer 2 isolation, and have the ability to span multiple switches, they can be used to assign devices a subnet based on job function.</p>
<p>We dedicate space ports on the VLAN.</p>
<p>These VLANs cannot talk to each other.
Laptop cannot talk to another laptop. </p>
<p>To make this work, you need a Router, and the Trunk Switch.</p>
<p>Using a Layer 2 Switch.</p>
<figure><img src="${"https://i.imgur.com/8BkbYPt.png"}"></figure>
<p>Using an example: Laptop 1 talking to Laptop 2. </p>
<ol class="${"list"}"><li>Laptop 1 talks to VLAN 10. </li>
<li>Laptop 1\u2019s data move to the Trunk.</li>
<li>The Trunk move it to the router.</li>
<li>The router moves it to VLAN 20.</li>
<li>Laptop 1\u2019s datanow goes to Laptop 2. </li></ol>
<p>A Layer 3 Switch, can do routing internally, without a trunk!</p>
<p>Multilayer Switch (MLS) -
A multilayer switch (MLS) is a switch that can make forwarding decisions on more than just L2 addresses. Typically multilayer switches can also perform routing functions without the use of a dedicated router. </p>
<p><strong>Trunking Theory</strong></p>
<figure><img src="${"https://i.imgur.com/QyaMDrX.png"}"></figure>
<p>BAD IDEA:
So you want your Sales PC to talk to your Sales Server.
Bad idea is to hook your 10 Sales PC to your10 Sales Server ports.
It doesn\u2019t scale well.</p>
<p>BETTER IDEA:
Use a IEE 802.1Q Trunk. You can remember that by Q is a queen, who is the root weapon in chess matches.
Now you can communicate from using that same Trunk port.</p>
<p>QUESTION: How to determine which computer to return the data to?
Easy - it Adds four tag bytes to each frame. (Except in Native VLAN)
1500 + 18 bytes header + 4 bytes. </p>
<p>If the switch supports IEEE 802.1Q, and it sees a 1524-byte frame, it sees it as a \u2018baby giant\u2019. That\u2019s LITERALLY THE NAME.</p>
<p>Native VLAN: the one that is not leaves it untagged.
The switches need to have matching Native VLAN (default to 1)</p>
<p><strong>Voice VLANs</strong>
TODO: Might have to watch another video about this.</p>
<p>A voice VLAN allows an IP phone that is daisy chained to an attached PC to mark voice frames with a higher Class of Service (CoS) marking than data frames sent by the attached PC. That allows both voice and data frames to flow over the same connection into a single switch port, while distinguishing between the voice and data frames.</p>
<figure><img src="${"https://i.imgur.com/8TmphOV.png"}"></figure>
<p>for security reasons, you want to separate voice to it\u2019s own thing.</p>
<p>TYPE 1 - Single VLAN Access Port</p>
<ul class="${"list"}"><li>It\u2019s a daisy chain connection. </li>
<li>Access Port. </li>
<li>One VLAN.</li>
<li>Good for software-based 3rd party IP Phones like Jabber. </li>
<li>Identify the voice traffic. </li>
<li>Allows IP phone to mark an IEEE 802.1p marking. </li></ul>
<p>Class of Serice - CoS - A layer 2 quality of Service marking over a trunk. Range of 0 - 7, where voice frames are set to a value of 5. Add those 4 extra bytes.
IEEE 802.1p - similar to a coS Marketing, sent over a non-trunking port. Four BYtes added to a Layer 2 frame, with three bits in those four bytes used as a priority marking. 12 bites int he vLAN set to all zeros. </p>
<p>There\u2019s no VLAN identification. </p>
<p>TYPE 2 - Multi-VLAN Access Port</p>
<ul class="${"list"}"><li>Access port.</li>
<li>Let\u2019s you have a VLAN on two ports. Only if you promise that it carries Voice Traffic.</li>
<li>The Cisco IP Port knows you\u2019re using it. It Cisco IP Phone learn it\u2019s VLAN via CDP protocol.</li>
<li>Does not work with LLDP-Med</li>
<li>Looks like dot1Q trunk frames. </li></ul>
<p>Cisco Discovery Portocol (CDP) - Proprietary Layer 2 discovery protocol
Link Layer Discovery Protocol (LLDP) - An industry standard Layer 2 discovery protocol</p>
<p>Link Layer Discovery Protocl - Media Endpoint discovery (LLDP-MED) - An extenstion of LLDP, designed to work between network endpoints (IP phones) and infrastructure devices (Ethernet Switches).</p>
<p>You don\u2019t get separation.</p>
<p>TYPE 3 - Trunk Port</p>
<p>Trank point carries </p>
<ul class="${"list"}"><li>Multi VLANs. </li>
<li>Compatable with both CDP and LLDP-MED</li>
<li>They are dot1Q trunk frames.</li>
<li>They are untagged.</li>
<li>Remove unneede VLANs should be pruned. </li></ul>
<p><strong>Etherent Port Flow Control</strong></p>
<p>How to deal with a overflow of traffic?
Switch 2 can tell switch 1, send them a <code>pause</code> frame.</p>
<ul class="${"list"}"><li>Pause Transmission for a period of time. </li>
<li>Sent to a reserved multicast address that is not forwarded by Ethernet Switches.</li>
<li>The unit measurement is called a quanta, which equals 512 bit times.</li>
<li>Bit Time = 1 / NIC speed</li></ul>
<p>Example - Gigbit Ethernet NIC has a 1 nanosecond bit time.
It will pause for 512 nanoseconds.</p>
<p>This is a known as a Pause Time.</p>
<p>In IEEE 802.3x (1997)
CAVEAT: All CoS values were subject to the same amount of delay.
(Like Voice can be marked with a CoS value of 5)</p>
<p>In IEEE 802.1Qbb (2010)
UPDATE: Each CoS value is assigned a different time to pause.
So priority ones get through faster.</p>
<p><strong>Power over Ethernet(PoE)</strong></p>
<figure><img src="${"https://i.imgur.com/rl1992v.png"}"></figure>
<p>Power can flow over ethernet.
Makes the installation cleaner.</p>
<p>Three Components: </p>
<ul class="${"list"}"><li>PSE - Power Source Equipment</li>
<li>PD - Powered Device, like phone or camera.</li>
<li>Ethernet Cable </li></ul>
<p>Cisco Inline Power (7.7 Watts)
IEEE 802.3af (15.4 Watts)
IEEE 802.3at (30 wats)
IEEE 802.3bt (100 Watss)</p>
<h3 id="${"spanning-tree-protocol-stp"}"><a href="${"#spanning-tree-protocol-stp"}">Spanning Tree Protocol (STP)</a></h3>
<p><strong>What is it</strong>
Spanning Tree Protocol (STP) is a protocol used to detect and prevent layer 2 loops through the use of BPDUs (Bridge Protocol Data Units). This protocol does this by blocking redundant paths. </p>
<figure><img src="${"https://i.imgur.com/f8p9ORy.png"}"></figure>
<p>Layer 2 switch (mac addresses)
Frames can go on forever, that creates a broadcast storm.</p>
<p>Using a Spanning Tree Protocol on Layer 2, to avoid looping.
That will avoid broadcast storms. The loop can bring your network down. </p>
<p>Layer 3 Router has a TTL field to kill loops.</p>
<p><strong>Before \u2014 Bridges</strong></p>
<figure><img src="${"https://i.imgur.com/S3xQtFv.png"}"></figure>
<p>IEEE 802.1D</p>
<figure><img src="${"https://i.imgur.com/FIwPtVK.png"}"></figure>
<p><strong>STP Port States</strong></p>
<p>What is the central root bridge.</p>
<p>The Four Questions to determine - who is the central root bridge?</p>
<ol class="${"list"}"><li>Who is the root bridge? (Everything stems from the rout)</li>
<li>What are the root ports? </li>
<li>What are the designated port. One port needs </li>
<li>WHat are the blocking (non-designated) Ports? (That\u2019s left)</li></ol>
<figure><img src="${"https://i.imgur.com/5afA8IY.png"}"></figure>
<blockquote><ol class="${"list"}"><li>Who is the root bridge? (Everything stems from the rout)</li></ol></blockquote>
<p>That can be deteremined by the Bridge ID.</p>
<p>So for this, they all have the same priority. <code>32768</code>
Which means we have to look at the MAC Address: <code>1111.1111.1111</code></p>
<p>SW1 is the Root Bridge. </p>
<blockquote><ol start="${"2"}" class="${"list"}"><li>What are the root ports? </li></ol></blockquote>
<p>This is determiend by \u201CCost\u201D.
A table is often used.</p>
<figure><img src="${"https://i.imgur.com/xMrkx9X.png"}"></figure>
<figure><img src="${"https://i.imgur.com/ysloQB2.png"}"></figure>
<p>PORT SPEED --- STP Port Cost
10 Mbps --- 2,000,000
100 Mbps --- 200,000
1 Gbps --- 20,000
10 Gbps --- 2,000</p>
<blockquote><ol start="${"3"}" class="${"list"}"><li>What are the designated port.
<img src="${"https://i.imgur.com/xGnx6dd.png"}"></li></ol></blockquote>
<blockquote><ol start="${"4"}" class="${"list"}"><li>WHat are the blocking (non-designated) Ports? (That\u2019s left)</li></ol></blockquote>
<p><strong>STP Example</strong></p>
<figure><img src="${"https://i.imgur.com/TgYMWsP.png"}"></figure>
<blockquote><ol class="${"list"}"><li>Who is the root bridge? (Everything stems from the rout)</li></ol></blockquote>
<p>So the root is either Switch A or Switch B because of the priority.
Because of that tie, we look at the mac address.</p>
<p>Switch A has a lower MAC address.</p>
<blockquote><ol start="${"2"}" class="${"list"}"><li>What are the root ports? </li></ol></blockquote>
<p>The root bridge does not get a Root Port.</p>
<p>So you go through each device to determine it\u2019s RP (root Port).</p>
<figure><img src="${"https://i.imgur.com/RSA5Qyc.png"}"></figure>
<p>Starting with Switch B:
Te 1/0/1 - It\u2019s a 10 Gbps link, which costs 2.
Gig 1/0/7 - It connects to switch C (4), which then goes to switch A (4). Total cost is 4+4
Gig 1/0/5 - It connects to Switch D (4), and then D to A (4). Total cost is 4+4.</p>
<p>Switch B Root Port is Te 1/0/1</p>
<p>Now with Switch D:
Gig 1/0/2 - it connectss to B (4), and then using the <code>te 1/0/1</code>, to go to Switch A. (2). 4+2
Gig 1/0/1 - it goes directly to switch A (4). Total 4.</p>
<p>Switch D \u2014&gt; Root Port is Gig 1/0/1</p>
<p>Finally Switch C:
gig 1/0/2 - It connects to switch B (4),and then using the <code>te 1/0/1</code>, to go to Switch A. (2). 4+2
gig 1/0/11 - It connects directly to switch A. (4)
gig 1/0/10 - It connects directly to switch A. (4)</p>
<p>There is a tie.
Tie breaker 1 - Do the math on the other end of the Switch.
Tie Breaker 2 - Choose the link connected to the lowest port ID on the FAR END of the link.</p>
<p>So gig 1/0/10 goes to SWITCH A\u2019s gig 1/0/4
And gig 1/0/11 goes to SWITCH A\u2019s gig 1/0/3. </p>
<p>Switch C \u2014&gt; Root Port is Gig 1/0/11</p>
<blockquote><ol start="${"3"}" class="${"list"}"><li>What are the designated port.</li>
<li>WHat are the blocking (non-designated) Ports? (That\u2019s left)
<img src="${"https://i.imgur.com/LYVIKfE.png"}"></li></ol></blockquote>
<p>So Switch A:
It uses all the ports to become designated ports, ones that are connected.</p>
<p>Switch B:
Switch <code>B &lt;-&gt; C</code>, B is faster because of the <code>te 1/0/1</code>. So Gig 1/0/7 is the Desginated port.
Switch <code>B &lt;-&gt; D</code>, B is faster because of the <code>te 1/0/1</code>. So Gig 1/0/5 is the Desginated port.</p>
<p>Switch C:
All remaining ports get Blocked.</p>
<p>Switch D:
All remaining ports get Blocked.</p>
<p>This creates a loop free topology, and a backup path.</p>
<p><strong>STP Convergence Times</strong></p>
<figure><img src="${"https://i.imgur.com/6K8nCwz.png"}"></figure>
<p>Blocking (20 sec)
Listening (15 second)
Learning (15 sec)</p>
<p>Adds up to 50 seconds of delay.
Then switching to Forwarding.</p>
<figure><img src="${"https://i.imgur.com/2xInYEt.png"}"></figure>
<p><strong>STP Variants</strong></p>
<p>Common Spanning Tree (CST):</p>
<ul class="${"list"}"><li>Used by the IEEE 802.1D standard</li>
<li>Every VLAN topology will be using the same version of Common Spanning Tree. (CST)</li></ul>
<p>PVST+:</p>
<ul class="${"list"}"><li>Per-VLAN spanning Tree (PVST)</li>
<li>Each VLAN runs its own instance of STP</li>
<li>Maybe for VLAN, better to have different Switches. </li>
<li>Uses Cisco\u2019s propertiy stuff. Versus Dot1.q Encapsulation type. </li></ul>
<figure><img src="${"https://i.imgur.com/DkU2Ljk.png"}"></figure>
<p>MSTP: </p>
<ul class="${"list"}"><li>Multiple Spanning Trees Protocol (MSTP)</li>
<li>IEEE 802.1s</li>
<li>Have multiple roots. </li></ul>
<p>Instance 1, VLANS 1 to 4, go to switch A.
Instance 2, VLANS 5 to 8, go to Switch B.</p>
<p>RSTP - Rapid Standing Tree Procotol </p>
<ul class="${"list"}"><li>Typically converges between a few milliseconds about 6 seconds.</li>
<li>Sends TCN, a tpology conversion notification</li>
<li>IEEE 802.1w </li></ul>
<p>CISCO uses Rapid PVST- their property STP implenmentation, with it\u2019s own instance of RSTP.
But overlaying using RSTP standard.</p>
<p><strong>RSTP Terms</strong>
RSTP Port Roles </p>
<figure><img src="${"https://i.imgur.com/6fixoz7.png"}"></figure>
<p>Alternate (BLK) - Backup (Block)
On a hub, it\u2019s Backup.</p>
<figure><img src="${"https://i.imgur.com/0HLnOun.png"}"></figure>
<figure><img src="${"https://i.imgur.com/aWWJ9lZ.png"}"></figure>
<figure><img src="${"https://i.imgur.com/EFpCtqN.png"}"></figure>
<ol class="${"list"}"><li>Switch Root Ports</li>
<li>Switch block ports</li>
<li>Propose to neighbors</li>
<li>Switch 2 swaps from a Disgnated Port to a Root Port.</li>
<li>It sends teh agreement, and the switch 1 Block port becomes a Designated Port.
6\u2026 onwards, it sends a porposal to the next neighbor.</li></ol>
<h3 id="${"link-aggregation"}"><a href="${"#link-aggregation"}">Link Aggregation</a></h3>
<figure><img src="${"https://i.imgur.com/yFyj7Dc.png"}"></figure>
<p>Bundle multiple physical links on together.
In drawing, it\u2019s used as a circle. </p>
<p>can do 2, 4, and even 8 links.</p>
<p>Provides load-balancing.
Creates redundant links.</p>
<p>If you want to turn it on: </p>
<ul class="${"list"}"><li>PAgP: Port Aggregation Protocl (Cisco propertariy)</li>
<li>LACP: Link Aggregation Control Protocol (Generic brand)</li></ul>
<p><strong>PAgP Channel</strong></p>
<figure><img src="${"https://i.imgur.com/Aa0uKod.png"}"></figure>
<p>Here\u2019s the 3 settings:
If both says On, they they will form a ether cahnnel.</p>
<p>Port Mirroring</p>
<figure><img src="${"https://i.imgur.com/pbn91eY.png"}"></figure>
<p>It\u2019s the same, but different names. </p>
<p>It has the option of redundancy.</p>
<p><strong>Link Aggregation Load-balancing:</strong></p>
<p>There\u2019s Load balancing algorithms: </p>
<figure><img src="${"https://i.imgur.com/XsvWsgx.png"}"></figure>
<p>It pays attention to the desination MAC ADDRESS\u2019 Last Hex digit.</p>
<p>So Switch A:
It will send data based on: </p>
<ul class="${"list"}"><li>00</li>
<li>01</li>
<li>10</li>
<li>11 </li></ul>
<p>The Switch B\u2019s servers\u2026 lax hex digit all ends in <code>01</code>.</p>
<blockquote><p>We\u2019re going to perform an exclusive or operation on each bit. That\u2019s a boolean operation and exclusive or says if we\u2019re comparing two digits and they\u2019re the same, the result is zero.</p></blockquote>
<blockquote><p>If we\u2019re comparing two digits and they\u2019re different, in other words, they\u2019re exclusively something else exclusive or if they\u2019re different, we get a binary one. So if the last digit in my PC Mac address happened to be a one and the last digit in the servers Mac address happened to be a zero, that would give me an exclusive or result of one.</p></blockquote>
<blockquote><p>A one and a zero are different.
If both were one, that\u2019s zero.
If both were zero, that would also result in a zero.
We get a zero.</p></blockquote>
<blockquote><p>When the two bits match, we only get a one when they\u2019re different. But by doing that, we\u2019re adding some randomness to the selection of the link that we\u2019re using.</p></blockquote>
<p><strong>Port Mirroring:</strong>
Sniffing software, how does it work by watching this Switch.</p>
<p>You can find the port mirroring setting, and have have the Sniffer Port.</p>
<figure><img src="${"https://i.imgur.com/ToGS2EA.png"}"></figure>
<p><strong>Distributed Switching</strong>
Typical settup for a Three-Tier Architecture \u2014 </p>
<figure><img src="${"https://i.imgur.com/iqAkvCo.png"}"></figure>
<p>Access Layer - Closet Switches</p>
<p>Distribution Layer - A room where it takes all that data and distributes it.
if you lose a distribution layer instance, you\u2019ll still fine.</p>
<p>Core Layer - Like in a large campus environmetn with multiple building, the Core Layer. Could be the layer to go to the Itnternet. It\u2019s concerned with speed.</p>
<p>Internet can also be on distribution layer. No hard and fast rule.</p>
<figure><img src="${"https://i.imgur.com/tn7WfXb.png"}"></figure>
<figure><img src="${"https://i.imgur.com/CikznQH.png"}"></figure>
<p>This is for smaller places. It collapse the distirbution and core layer.</p>
<p><strong>Data Centers - Leaf Spine Design</strong></p>
<p>Nodes connecting into (TOR - top of rack Switch) Leaf Switches.</p>
<p>Spine Switches. Switch jumps to Spine Switch, then back to another switch.</p>
<figure><img src="${"https://i.imgur.com/aDwr6Xs.png"}"></figure>
<h3 id="${"test"}"><a href="${"#test"}">TEST</a></h3>
<p>A normal switch can only make forwarding decisions based on L2 addresses, not L3.</p>
<p>An NGFW (Next Generation Firewall) is a type of firewall that does packet inspection on more information than just the application being used. This firewall can make its decisions based on information found deeper in the I</p>
<p>An air gap is a network that is physically and logically isolated from unsecured networks, such as the internet.</p>
<p>Port Mirroring also referred to as SPAN (Switchport Analyzer) allows a switch to copy frames sent/received on one port to be sent out a different port for traffic monitoring. A protocol analyzer is used to interpret network traffic originating from a port or another source of traffic.</p>
<h2 id="${"module-8-wireless-networks-75hr"}"><a href="${"#module-8-wireless-networks-75hr"}">Module 8: Wireless Networks (.75hr)</a></h2>
<div><figure><img src="${"/media/comptia-blogpost/m8-attenna-types-1.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m8-attenna-types-2.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m8-attenna-types-3.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m8-attenna-types-4.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m8-attenna-types-5.png"}"></figure></div>
<figure><img src="${"/media/comptia-blogpost/m8-autonomous-vs-lightweight-aps.png"}"></figure>
<div><figure><img src="${"/media/comptia-blogpost/m8-channel-bonding-1.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m8-channel-bonding-2.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m8-extender.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m8-infrastructure.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m8-mu-mimo.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m8-non-overlapping-5gh.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m8-non-overlapping.png"}"></figure></div>
<div><figure><img src="${"/media/comptia-blogpost/m8-ofdma-2.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m8-ofdma.png"}"></figure></div>
<div><figure><img src="${"/media/comptia-blogpost/m8-wifi-dsss.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m8-wifi-fdm.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m8-wifi-ortho.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m8-wifi-qam.png"}"></figure></div>
<figure><img src="${"/media/comptia-blogpost/m8-wifi-standards.png"}"></figure>
<h2 id="${"module-9-addressing-networks-with-ipv4-1hr"}"><a href="${"#module-9-addressing-networks-with-ipv4-1hr"}">Module 9: Addressing Networks with IPv4 (1hr)</a></h2>
<div><figure><img src="${"/media/comptia-blogpost/m9-apipa.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m9-ipv4-pert2.png"}"></figure></div>
<figure><img src="${"/media/comptia-blogpost/m9-ipv4-unicast.png"}"></figure>
<figure><img src="${"/media/comptia-blogpost/m9-ipv4.png"}"></figure>
<div><figure><img src="${"/media/comptia-blogpost/m9-subnetting-2.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m9-subnetting-3.png"}"></figure></div>
<div><figure><img src="${"/media/comptia-blogpost/m9-subnetting.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m9-subnetting-calc.png"}"></figure></div>
<div><figure><img src="${"/media/comptia-blogpost/m9-wifi-2.4ghz-channels.png"}"></figure><figure><img src="${"/media/comptia-blogpost/m9-wifi-5ghz-channels.png"}"></figure></div>
<p><strong>Subnetting Practice Exercise</strong>
QUESTION 1:
172.20.0.0/16</p>
<p>Use subnet mask that uses 47 subnets.
What subnet mask should you use?</p>
<blockquote><p>Your company has been assigned <code>172.20.0.0/16</code> network for use at one of it\u2019s sites. You need to use a subnet mask that will accommodate 47 subnets while simultanously accomodating the maximum number of hosts per subnet. What subnet mask will you use?</p></blockquote>
<p>QUESTION 1\u2019s ANSWER:</p>
<p>If you just need to allocate X subnets, you add Class + borrowed bits.</p>
<p>Step 1: Figure out how many borrow bits.
You need 47 subnets. And 6 borrowed bits is 64 subnets.
0011 1111 == 6 borrowed bits.</p>
<p>Step 2: Figure out the Class.
The first octet is <code>172</code>, so it\u2019s a Class B address. </p>
<ul class="${"list"}"><li>Class B as 16 sixteen bits, </li>
<li>plus your 6 borrowed bits</li>
<li>So it\u2019s a 22-bit subnet mask. </li></ul>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">TESTING:
But what if you did it the other way.
32 - 6 = 26

26-bits of 1s
1111-1111.1111-1111.1111-1111.1100-0000

128 + 64
255.255.255.192</code>`}<!-- HTML_TAG_END --></pre>
<p>Step 3: Convert it to super binary.
Now, convert the 22-bit subnet mask to a 32-bit binary code.
Or, twenty-two <code>1s</code>. And ten <code>0s</code></p>
<p>1111-1111.1111-1111.1111-1100.0000-0000</p>
<p>Step 4: Return it back to oclets.
Finally, convert to octlets.
255.255.252.0</p>
<p>The answer is 255.255.252.0</p>
<p>QUESTION 2:
172.20.0.0/16 </p>
<blockquote><p>Your company has been assigned <code>172.20.0.0/16</code> network for use at one of it\u2019s sites. You need to calc a subnet mask that will accommodate 100 hosts per subnet, while maximizing the number of available subnets. What subnet mask will you use?</p></blockquote>
<p>use subnet mask that uses 100 subnets per subnet.</p>
<p>QUESTION 2\u2019s ANSWER:</p>
<figure><img src="${"https://i.imgur.com/LyiPxdF.png"}"></figure>
<p>Step 1: Host Bits (aka like Borrowed Bits)
7-bits = 128 (minus 2)</p>
<p>Step 2: Subtrack 32-bits
32-bits - 7 bits equals 25 subnet mask bits.
Or /25</p>
<p>Step 3: Converting it to super Binary</p>
<p>1111-1111.1111-1111.1111-1111.1000-0000</p>
<p>Step 4: Convert it back to octets.
255.255.255.128</p>
<p>The answer is: 255.255.255.128</p>
<p>QUESTION 3:</p>
<blockquote><p>You wish to apply a 26-bit subnet - 192.168.0.0/24 network address space. What are the subnets, and what are the usable address ranges in each subnet?</p></blockquote>
<p>Step 1: Get the subnet mask</p>
<p>1111-1111.1111-1111.1111-1111.1100-0000</p>
<p>Step 2: Get the interesting octet
(It\u2019s the last octet to contain a binary 1.)</p>
<p>MASK: 255.255.255.192</p>
<p>Step 3: The block size.
256 - 192 \u2014 block size is 64</p>
<p>Step 4: </p>
<div><figure><img src="${"https://i.imgur.com/eJumYfP.png"}"></figure><figure><img src="${"https://i.imgur.com/gqN7lf1.png"}"></figure></div>
<p><strong>Calculating Usable Ranges of IPv4 Addresses</strong></p>
<p>IPv4 - </p>
<p>Interesting oclet - (The last octet to contain in the subnet mask)</p>
<figure><img src="${"https://i.imgur.com/oKtqyNa.png"}"></figure>
<p>Block Size (the number we count by in the interesting octet)
Block Size = 256 - Subnet\u2019s Interesting Octet
Block Size (1) = 256 - 255</p>
<figure><img src="${"https://i.imgur.com/9a2qD1a.png"}"></figure>
<figure><img src="${"https://i.imgur.com/3l8V0vL.png"}"></figure>
<p><strong>TEST:</strong></p>
<p>TEST: What is the difference between hosts &amp; subnets in subnet mask IP.</p>
<p>An IPv4 address contains 2 components: an IP address and a subnet mask. A subnet mask is used with an IP address to differentiate between the network and host portions of an address. A subnet mask is also used to define what addresses can be used within a given range.</p>
<p>The Engineering department requires 100 hosts, The Sales department requires 16 hosts, and the Finance department requires 8 hosts. Following the order, which subnet masks should he best use?</p>
<ul class="${"list"}"><li>The engineering department requires 100 hosts which can best be accommodated with a /25 mask, which provides 126 hosts. </li>
<li>The proper mask for the sales department should be a /27, which provides up to 30 hosts. </li>
<li>Although a /28 might seem correct, it isn\u2019t as this subnet mask provides 14 usable hosts (2 addresses taken up by a Network ID and broadcast). The sales department should use a /28 as it provides 14 hosts. A /29 only provides 6 usable hosts.</li></ul>
<p>A subnet mask that gives you 16 subnets and 14 hosts is a /28- 11111111.11111111.11111111.11110000. Given that this is a class C address, the classful mask for this network would be a /24, and a /28 takes up 4 additional bits from the host portion providing (2^4=16 subnets). With 4 bits left over, this provides 14 hosts (2^4-2=14). 2 addresses are taken up by the Network ID and Broadcast address.</p>
<p>With the 10.25.25.0 network being in the class A range, it can be further subnetted to have networks with 4094 hosts. 2^12-2= 4094. So in this case, we must take up 12 bits from the host portion. 32 bits- 12 host bits= 20 bits. This leaves us with 20 bits for the network portion of the address and 12 bits for the host portion.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">NOTE: this math is wrong. It&#39;s 12 bits to get 4096. 
4096 - 13 bits
2048 - 12 bits
1024 - 11 bits
512 - 10 bits
256 - 9 bits // supposed to be 8 bits

ACTUAL CALCULATION: 
128 - 7 bit
64 - 6 bit 
32 - 5 bit 
16 - 4 bit
8 - 3 bit
4 - 2 bit
2 - 1 bit
1 - 0 bits</code>`}<!-- HTML_TAG_END --></pre>
<p>NOTE: Memorize this
10.25.103.254 \u2014 </p>`;
    }
  })}`;
});
export { Comptia_networks_part_1_svelte as default, metadata };
