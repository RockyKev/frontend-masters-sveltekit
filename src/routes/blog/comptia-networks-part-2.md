---
title: CompTIA Networks Part 2
created: 2022-03-18T00:00:00
summary: CompTia Networks Course
coverImageUrl: /media/comptia-blogpost/
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>


## CompTIA Networks+
https://www.udemy.com/course/comptia-network-plus-video-training/


## Module 10: Addressing Networks with IPv6 (1hr)

**Decimal to Hexidecmial**
* IPv6 is written in hexidecimal notation.

* A hex digit is represented by four binary bits (a nibble)

7 == 0101
9 == 1001
F == 1111

* A hex value is often prepended with 0x


QUESTION 1: Convert 241 from decimal to Hex.

STEP 1 - Figure out whole number and remainder:
241 / 16 = 15`.0625`
`.0625` * 16 = 1

Whole: 15 
Remainder: 1

STEP 2:  Divide the whole number by 16

If it's above 16, you repeat the process.
Divide, then get the remainder.

Since it's below 16, it's already a letter.
F1

STEP 3: THe solution is:
F1 

or with the prepend --
0xF1


QUESTION 2: Convert 198 from decimal to Hex.

198 / 16 = 12.375

WHOLE: 12
REMAINDER: 6

0xC6

QUESTION 3: Write hexadecimal number of `0x2F` in binary

2 =  2 = 0010
F = 15 = 1111

0x2F == 0010-1111

QUESTION 3: Write hexadecimal number of `0xBC` in binary

B = 11 = 1011
C = 12 = 1100

0xBC == 1011-1100

### IPv6 address
![](https://i.imgur.com/uvtPZyw.png)

128-bit
Prefix + host 

* 32 hexadecimal numbers
* 8 "quartlets" of 4 hexadecimal digits separated by a colon
* 128-bits total in length
* No broadcasts
* No fragmentation (MTU discovery preformed for each session)

**Shortening an Ipv6 Address**

START: 
23A0:201A:00b2:0000:0000:0000:0400:0001/64

So /64 is saying, it's the prefix bit. (The network)

Two rules:
* Omit leading zeroes in a quartet
* Represent consecutive quartets containing all zeros with a double colin. (Only once per address)

END: 
23A0:201A:b2::400:1/64

QUESTION: 
2000:0000:0000:0000:1234:0000:0000:000B/64

2000::1234:0:0:B/64

![](https://i.imgur.com/yikE57I.png)


### IPv6 Global Unicast, Multicast, Solicited-Node multicast


**Unicast**
![](https://i.imgur.com/oiUMnPs.png)

PC #1 - 2001::1
PC #2 - 2001::2

We know this is a global Unicast because of the first 3 bits.
If it has 001 as it's first three bits, then it's a Global Unicast.

2000::/3
Does the first digit HAVE to be a 2? No.
2001, 3001, etc. 


**Multicast**

We don't assign a multicast to a computer, it's usually from a server.

What is a Rendevous Point (RP) address?
![](https://i.imgur.com/XjQLHoQ.png) 

Scope Example: 
1. Interface-local scope
2. Link-local scope -->
4. Admin-Local Scope
5. Site-local Scope
8 Organization-Local Scope
E. Global Scope

REMEMBER THIS:
 FF02::1 - All nodes in the link-local scope.   
 FF02::2 - All routers in the link-local scope. 

![](https://i.imgur.com/QE2UwOE.png)

**Solicitated-Node Multicast**

![](https://i.imgur.com/s5CQflP.png)

3000::1 & 3000:2

This is a replacement for IPv4 ARP, a broadcast protocol.


### IPv6 Link Local, Unique Local


**Link Local**
![](https://i.imgur.com/N7pa7i8.png)
This can only work on a link Local address

`FE80::/10` (the first 10 bits represent link local)

* Address start with FE80::/10
* Can only communicate on one network segment
* Similar to IPv4 APIPA address
* Can be automatically or stastically assigned. 


**Unique Local**
It's routable in your company, but not on the internet.

![](https://i.imgur.com/ldCvDCr.png)

`FD00::2`

* Starts with FC00::/7
* Not routable to the public Internet
* Similar to IPv4 private address
* If the L bit is set to a 1

### IPv6 Loopback, Unspecified

**Loopback**
![](https://i.imgur.com/mjquq3f.png)

`::1` - the localhost, similar to 127.0.0.1

**Unspecified**

![](https://i.imgur.com/xHrrYTm.png)
All 128-bits are 0s!

* Written as `::`

* Used for a client's source address when sending a neighbor solicitation message

* Used for the client's source address when sending a Router Solicitation message.

DAD - Duplicate Address Detection. 
It sends out a message, and hopes it doesn't get a response back. If it does, then the thing is being used.


**EUI-64 Address**

If it's not assigned, it'll automatically determine itself by:

Ask the router (here's the prefix and length in the network address)

EUI-64, Extended Unique Indentifier 

* Uses the MAC address of an interface to create a 64-bit interface ID
CHALLENGE: Mac is only 48-bit longs

![](https://i.imgur.com/G5aLXlk.png)

EXAMPLE:
R1's Gig 0/1 interface has a MAC address of `0015:2BE4.9B60` 

This is the process -- it makes no meaning.

STEP 1: Split the 48-bit MAC address in the middle. 

STEP 2: Insert FF.FE in the middle

STEP 3: Change the format to use the colon delimiter

STEP 4: Conver the first 2 hex digits to binary

STEP 5: flip the 7th bit

STEP 6: Convert the first eight digits back into hexadecimal

**Autoconfiguration - Stateful DHCPv6**

A DHCPv6 Server can be asked to give it.
IPv6 uses ICMPv6 to provide address resolution instead of ARP.

Stateful -> getting it directly from the DHCPv6. comes from server.

Stateless -> it gets prefix/length from a hop. Then get the EUI-64 approach based on the mac address.


RS (Router Solicitation) and (RA) Router Advertisement are used for automatic prefix assignment. 

**IPv6 Traffic Flows**

unicast - one to one
multicast - one to many (starts with FF)
broadcast - one to every (doesn't have this)

Anycast - one to 'nearest'. 

![](https://i.imgur.com/K3wSgwz.png)


**Dual Stack**

How to have ipv4 and ipv6 to work together?

![](https://i.imgur.com/3NbAz54.png)


It's called a Dual Stack configuration. 
It'll use the client's IPv4 to communicate to Server 1.
And IPv6 to communicate with Server 2.

**Tunneling IPv6 through IPv4 Network**

Question: 
You have 2 (green) sections that support ipV6.
But you have a middleware that only supports Ipv4. 

SOLUTION:
Tunnel where it takes the IPv6 packet over IPv6 packet.

* RFC 2893: IPv6 Transition Mechanisms

Two types of Tunnels: 
* Configured: More configuration.
* Dynamic: But it's less secure.


TEST:

SLAAC (Stateless Address Autoconfiguration) is used to provide Prefix information through the use of IPv6 NDP (Neighbor Discovery Protocol).

A GUA (Global Unicast Address) is the IPv6 equivalent of an IPv4 Public address. These addresses are both meant to be routed on the internet. 

A site-local address is similar to an IPv4 private address.

FF00::/8 is the prefix for the multicast address range in IPv6.
FD00::/8 is the IPv6 Site-Local prefix range. 
FE80::/10 is the link-local address range for IPv6.
2000::/3 is the Global Unicast Address (GUA) prefix range for IPv6.

[NEED RESEARCH] What is site-local vs link-local?


## Module 11: Explaining IP Routing (1hr)

### IP Routing in a nutshell

![](https://i.imgur.com/S8C1AZR.png)

What the laptop already knows:
* The laptop has a MAC address: AAAA.AAAA.AAAA
* It wants to get to the Server MAC Address: BBBB.BBBB.BBBB
* It's Source IP: 192.168.1.1
* It's destination IP: 192.168.2.2
* It's default gateway: 192.168.1.1

STEP 1: 
The Hop: 
First, the laptop will need to know the MAC address of `192.168.1.1` (the default gateway)
it will send a ARP address... and get the mac address and put it in it's table.

Name : IP Address | Mac address
Default Gateway: 192.168.1.1 | 1111.1111.1111

STEP 2: 
The router 1 (default gateway) looks into it's own Table to see if it has `192.168.2.0/24` in it's table. And it does! It says to go talk to Router 2.

![](https://i.imgur.com/MPDR9gE.png)

But if it doesn't know, it does the same thing. 

Sends an ARP address out.

Router 1 sends a ARP address out. It goes through the switch of `10.1.1.0/24`, which has all the subnets.
And it gets a response back from Router 2.

Name : IP Address | Mac address
Router 2: 10.1.1.2 | 3333.3333.3333

STEP 3: 
Now Router 2 is looking into it's own table to see if it has `192.168.2.0/24` in the table. And it does!
It says that it's directly connected, and now need to get the MAC address!

![](https://i.imgur.com/P2BCVUQ.png)

So it sends a MAC Address to add that table: 

Name : IP Address | Mac address
Router 2: 192.168.2.2 | BBBB.BBBB.BBBB

You need to know the MAC address to get to all the other hops.

**Dynamic Routing**

Dynamic Routing Protocol - the cost/distance to get to the destination.

**Static and Default Routers**

![](https://i.imgur.com/dBkWmrq.png)

Static Routing: 
* Administratively Added routes
* Very believable (AD = 1)
* Specificy a next hop to reach a network

It's the one that contains the fewest number of hops. 

A default route: 

![](https://i.imgur.com/QzzlZ5a.png)
You use it if you don't want to maintain a large Routing Table.

Rather than manage it in a HQ table

If you don't have the table, go talk to the HQ.

0.0.0.0 - 

### Routing Protocols

Ways to approach, usually it's default. Or static. 

But for most places, it's Dynamic! Using one of these routing protocols.

What to consider:
* Scalability

RIP: If it's 15 router hops away, it won't be work.
BGP: Great for the internet.

* Vendor Interoperability

EIGRP: Cisco real

* Familiarity:

EIGRP:

* Convergence - If a route fail, if a backup path exist... how long does it take?
RIP a few mins.
BGP like 10 minutes.
OPSF/EIGRP might take a couple seconds.

Who do we believe? 
Administrative Distance - the Believability of a routing distance.

![](https://i.imgur.com/Pys45cv.png)

If it's directly connected to that specific router, it's 0. 
If it's static, then someone put it there, and it's assume by 1 (by default).

Connected: 0
Static: 1
EIGRP: 90
OSPF: 110
RIP: 120

Why isn't BGP there? Because you won't really use it.

**Autonomous Systems: IGP(interior Gateway Protocol) vs EGPs (Exterior Gateway Protoclls):**
Autonomous System - A network under a single admin control, such as your company or a Internet Service Provider.

![](https://i.imgur.com/QjA7pid.png)

All ISP/Companies get their own AS number. 

So think of AS as like, the manager. 
Managers use EGP to talk to each other. But to talk to the workers, they use IGP. 

IGP (interior Gateway Protocol) When you're running a routing system inside your company.
EGP (Exterior Gateway Protocol) Communicates with other autonomous systems

EGP uses BGP, which is how the internet works.


**Routing Protocol Comparison**

![](https://i.imgur.com/IRF2avK.png)

The test uses `Hybrid` instead of `Path-Vector`.

RIP: Distance-Vector | it uses hop counts to reach a destination. 
OSPF: Link-State | it has a table of everything, and knows how to get there.
EIGRP: Distance-Vector | It counts a metric, to determine the next hop.
BGP: Path-Vector (Or Hybrid Protocol) | Considers path attributes. 

Hop Count: A metric used by Rip to measure the numbers of routers to cross to reach a destination network.
Dijkstra Algorithm: Used by OSPF. Assigns costs to links and calcs the shortest path between two points in a network. Also used in GPS, and smart cars. 


**RIP (IGP system)**

WHAT IS IT:
RIP: Routing by Rumor. One router tells anotherr router which router.

It uses Hop Counts to determine distance. It's a `Distance-Vector`.
1-15 - it's fine.
16 hops - unreachable. 

If there's a update to the table router, it lets everyone know immediately. 


![](https://i.imgur.com/8OXxKSR.png)
Split Horizon - 
Prevernts a routing protocol from sending an advertisment out of the interview on which it was received.
tldr: If I receive a Hop count from one router, don't send it back to that same router.
What can happen is that they both keep sending hop numbers back and forth, and create a time-out.

Poison Reverse - 
If Router 3 sees that a Interface is down, it sends a advertisement to others that it's 16.


TYPES OF VERSIONS:

![](https://i.imgur.com/cmdbrrr.png)

RIPv1: 
* super old. Legacy. 
* It sends broadcasts, to everything. Routers, PCs, printers... every 30 seconds. 
* No VLSM Support (tl;dr - subnet masks can't be found. 10.1.1.0/24, can't be seen.)
* Only IPv4.

VLSM (Variable Length Subnet Mask) Support - The ability of a routing protocol to advertise a network with a non-default subnet mask.

RIPv2:
* Multicasts (224.0.0.9) -- still sends out every 30 seconds
* Supports VLSM Support
* Authentication - so stranger can't just enter a router and get data. 
* Only IPv4

RIPng:
* Multicasts (FF02::9)
* IPv6


**OSPF  (IGP system)**

Not covered -- IS-IS. 

OSPF is like puzzle pieces. 
Differnt routers know different pieces. are connected to different routers.

* Open Standard
* Establishes adjacenties with routers
* Sends Link state Advertisements (LS) to other routers
* Constructs a Link State Database from received LSAs
* Runs the Dijkstra Shortest Path first (SPF) algorithm to deteremint the shortest path to a network.
* Attempts to inject the best path for each network into a router's IP routing table. 
  But just because OSPF says so, it might not be believeable. Maybe EIGRP has a recommendation. It will win, because it has a more believable Administrative Distance than OSPF.

**OSPF Terms:**
* hello: A protocol used to discover OSPF neighbors and confirms reachablility to other neighbors. (also used in the election of a designated Router)
* Link state Advertisements (LSA): Info a router sends and recieves about network reachability. (used to construct that LS database). NOT A PACKET.
* Link State Update (LSU): A packet that carries LSAs.
* Link state Request (LSR): Used by the router to request specific LSA info from a neighbor.
* Link State Acknowledgment (LSAck): Used by a router to confirm it received a LSU.

So a router notices a missing piece of the puzzle, and makes a LSR to it's friend.
That friend needs to send a LSAck back!

**OSPF - What are neighbors VS Adjacencies:**

Hello: `224.0.0.5` OR `FF02::5`

Neighbors -> people who live near you. You can say hi.
Adjacencies -> Neighbors, but also you trust/like, share info with.

![](https://i.imgur.com/D0QPBOT.png)

Neighbors are routers that:
* Reside on the same network link
* Exchange Hello Messages

Adjacencies are routers that:
* Are neighbors
* Have exchanged Link State Updates (LSU) and Database Description (DD) Packets

Why not have everyone be a Adjacencies? 
It doesn't scale well!

For 6 routers, you need 15 adjencies. It gets crazier with more.
![](https://i.imgur.com/Oct4Xn2.png)

To Scale better: 
![](https://i.imgur.com/9WNd0XL.png)
So everyone else is a neighbor. 
But everyone's Adjacencies are the DR (Designated Routers), and BDR (Backup Designated Router).


**OSPF Areas**
![](https://i.imgur.com/PU343Kd.png)

It's better to organize things into separate areas, faster.
Each area can do the calculation (Dijkstra Algorithm) within the area.

How does Area 1 know the table data for Area 0? 
It sues Area Border Routers (ABR) to do that.
Not a map, just a list. Don't need to run the Dijkstra Algorithm on it. 

QUESTION: When to start adding areas?
Original: If you have more than 50 routers, break it into other areas. 
These days, it's not that big of a issue now. 

A better idea is to organize it like:
datacenter routes in one area. 
And enterprise routes in a different area.

QUESTION: Multi-Area OSPF and Area 0?
You are required to have a Area 0. 
Multi-Area OSPF networks Area 0 is called a Backbone Area (Just a name. 0 or 0.0.0.0 -- not a IP Address)

QUESTION: OSPF Cost?

![](https://i.imgur.com/eKKgOye.png)
In RIP, it was hops.

It makes it based on the COST of the link. 
Cost = Reference Bandwidth / Interface Bandwidth

The default reference bandwdith is 100 Mbps

So
R1 -> R2 -> R3 = 1 + 1 + 1 = 3
R1 to R2 is 100Mbps 


**EIGRP  (IGP system)**

Enchanced Interior Gateway Routing Protocol (EIGRP)
* fast convergence (link failure is very fast.)
* Scalable (RIP has a 15 hop limit)
* Can be configured to use Load Balancing over unequal cost links
* Classless (VLSM Support - versus RIPv1)
* Communicates via Multicast (224.0.0.10 or FF02::A)
* Used to be Cisco-proprietary.

Very little implementation on non-cisco stuff.

How to determine Metric Calculation:

![](https://i.imgur.com/RUiJmcW.png)

Bandwidth
Delay
Reliability (255 / 255 = 100% reliable)
Load (255)
Maximum Transmission Unit (MTU) -- last to use.

If you ignore all the crazy math, the only things that matter is Bandwidth and Delay, since most of htose values zero out. 

Big Dogs Really Like MTU.
But by default, all that matters is Bandwidth and Delay.

EIGRP Path Selection:
![](https://i.imgur.com/gxxlG0l.png)

You are that `10.1.1.0/24`, and you want to get to R3. 

Reported Distance - To get there. 

Feasible Distance - EIGRP's metric to a network, includes the Reported DIstance (RD) from a next-hop router, and the distance to get to that next-hop router.

Through R1, it's 1000 + 10000. So FD is 11000.

Through R2 - it's 1000 + 5000. So FD is 6000.

It'll choose the successor route. 
But if the route fails, it can fall back to Feasible Successor.

The Feasible Condition: 

![](https://i.imgur.com/UoGXROJ.png)

It's trying to avoid a situation where you lose a important node.
In this chart, to get from (right side) `10.1.1.0/24` to R1.
R2's path is 16,000 FD.

In order to decide the `Feasible Successor`, it MUST BE LOWER than the FD path (16,000)
So R3's reported route is 11,000.
While R4's reported route is 18,000.

R4 cannot do it. Why? We are seeing this from a topology. The Server does not. 
In our heads, it should work. But they're looking at pure math.
But if R2 fails, and R3 fails... then R4 will still get it.

**BGP (EGP system)**

![](https://i.imgur.com/xRWnaKm.png)

BGP is what talks to Automonmous Systems (AS).

BGP is now over 9000! (Networks)


* It's to talk from Companies and ISPs.
* They can form neighborships.
* It must be configured explicity. It's direct, static.
* TCP Session is seasblished between neighbors.
* Advertises Address Prefix and Length (Called Network Layer reachability information (NLRI))
* It doesn't use math. It advertises a collection of Path attributes used for path selection.

* it's considered a Path Vector Routing Protocol (Hybrid)

BGP Path Attributes:

Tie Breakers. 

We Love Oranges As Oranges Mean Pure Refreshment
* Weight
* Local Preference
* Originate
* AS Path Length
* Origin Type
* Multi-Exit Discriminator (MED)
* Paths
* Router ID


**Subinterfaces**

Sub-interfaces - It's interfaces on a physical switch. 

![](https://i.imgur.com/4br7PeJ.png)

How does Sales Computer talks to Engineering Server?
Using a trunk. 
Data flows to the trunk, into the router, out of the trunk, and to the right VLAN.

![](https://i.imgur.com/D7CGkdJ.png)

You can separate within the trunk, using the sub-interfaces.


TEST: 
The default gateway’s main purpose is to connect networks, route between them (InterVLAN routing), and possibly provide internet connectivity. This device is usually a multilayer switch or a router.

RIP - Distance-Vector - each hop is a distance.
OSPF - Link-state - think internet. Each linked page to get to another link page. WIkipedia game.
EIGRP - Distance-Vector. Just RIP but 
BGP - Path-Vector, or Hybrid - 

EIGRP is an Advanced Distance Vector routing protocol that uses the metric, Distance, which is based on a calculation of Bandwidth and Delay.

The ARP (Address Resolution Protocol) table is used to store temporary MAC address to IP address mappings, which is vital for the IPv4 routing process. 

The MAC address table only contains MAC address to port mappings. 

 The routing table contains subnets and information on how to reach those given subnets.


## Module 12: Streaming Voice and Video (1hr)

**Voice over IP**

Using existing digital network to turn audio data to 1s and 0s, and sending it over the RTC protocol.

BEFORE:
![](https://i.imgur.com/RtPHac2.png)

You would use:
Phone -> PBX -> Tieline -> Public Switch Telephone Network -> PBX -> phone

You might have a separate network that transfered video!

Now you can do this:
![](https://i.imgur.com/YvVheGO.png)

Router -> IP WAN -> Router
Using a RTP

And the following Ports:
* FXS Port: Foreign Exchange Station
* FXO Port; Foreign Exchange Office
* E&M Port: Ear and Mouth (Earth and Magneto)


QUESTION: How to take a analog waveform and move it to digital?
You know how movies run at 24 frames a second? It's just 24 pictures to simulate movement.

Take a audio sample frequency, and and rebuild the waveform!

![](https://i.imgur.com/g6ic9TG.png)
The more samples you take, the more clear it is, but the higher the bandwidth.

Nyquist Theorem - Harry Nyquist, a waveform can be sampled and adequately reproduced from those samples if the number of samples taken per second is at least 2x the highest frequency (in HZ) being sampled. 

At 4000Hz over a analog phone.
So for the internet, we need 8000Hz samples per second. 

PAM (Pulse Amplitute Modulation) - Analog approach to encoding a signale based on the aplitude of samples taken.
PCM (Pulse Code Modulation) - Digital approach to encoding a signal, where a numeric value is assigned to a PAM sample based on the amplitute of that sample.

![](https://i.imgur.com/RnT1nTl.png)

Quantization Noise - Background Noise in PCM due to rounding erros that occur when assigning a numeric value to sample amplitudes. 

![](https://i.imgur.com/Gn4Cr3q.png)

Instead of a linear axis, focus on logrithmic scale on lower volumes.
So like higher noise will drown out anyways. But lower noise, needs much more steps. 

And you can organize that with bit samples

![](https://i.imgur.com/NzxCVzc.png)

8-bit samples. 64kb per second. 

And we use a Codecs to do that.

![](https://i.imgur.com/aRRF43e.png)


**Video over IP**

Terms to know:
Frames Per Second
Refresh Rate - represents the time it shows the image. It's usually 2x the frame. 
Interlaced Video - 1080i (means interlaced.) Where half is updated (see image below) at a time.
Progressive Video - 1080p - It paints the whole screen.
Pixels 
Apect Ratio - 4:3. Currently, it's 16:9. 1080x1920 
Compression Standards - MPEG-1, MPEG-2, MPEG-4, H.264

![](https://i.imgur.com/R4QxXM2.png)
An example of the Refresh rate of a Interlaced Video. Half of it is being updated.
It takes 2 refresh cycles to fully refresh it.

**Unified Communications Network**

Voice, video, Instant messages, See if someone is available...
It's called a Unified Communications Network.

![](https://i.imgur.com/6KD6k1w.png)

Call Agent - A unified communication component that handles tasks such as call processing. Like a PBX replacement. (A analog phone's component)

Voice Messaging System - Handles voice mail

Instant Messaging and Presence System - Text msg and someone's availability

Unified Border Element (Aka Session Border Controller) - interconnects independent VOIP calls



**QoS (Quality of Service) Fundamentals**

It's managing unfairness.
![](https://i.imgur.com/28QLjeh.png)

In the Speed mIsmatch:
In this, the IP Lan is sending data at a Fast E rate, but it's moving at a slow GiG to the switch.

In the Aggregation Point:
A gig comes to SW2, but it's trying to receive three gig data to three different servers. Bottleneck.


Periodic Congestion - like when things lag when you're backing up, or if everyone logs in at the same time.

Thee categories of QoS:
![](https://i.imgur.com/OvVJqYx.png)

Best effort: uses FIFO
DiffServ: A collection of QoS mechanisms that classify traffic types and assign diff policies.
IntServ: A QoS SMechanism that allows an application to reerve bandwidth for that application, using RSVP


Common QoS Mechanism: 

1. Identify the classification & marking. 
The next switch/router can figure out what else to do it. Think of Delta, where they're ranking you on the ticket. First class, sky priority, coach...

2. Queuing Mechanism. 
We separate the cache into different buckets, based on different types. Like VoIP should go first. Or best effort. Often Queueing Congestion Management.

3. Congestion Avoidance. 
If a queue starts to overflow...
3-way handshake. SYN, SYN-ACK, ACK. 
We do more and more of those 3-way handshakes and push the time a bit farther.

TCP Slow Start. Reduce the window size.
TCP Synchronization. Occurs when all TCP flows simultaneously go into TCP Slow start due to a queue overflow.

WRed - Weighted Random Early Detection - Is when Spock sacificed him to save the many. 
RED - Random Early Detection - Introduces the possibility of packet discard, regardless of markings, at specific queue depth.

4. Policing and Shaping 
Traffic Conditioners
A category of QoS mechanisms (including Policing and Shaping) that limits bandwidth for a class of traffic.

Don't beat the speed limit. No bandwidth for you if you violate the speed limit, like the Soup Nazi. No soup for you, come back in the week.

5. Link Efficiency

Think of a triple tracker trailor (3 trailers). And you're behind it.
The 3-trailer truck starts going through, and finally it's your turn. 

LFI - Link Fragmentation and Interleaving (LFI)
A QoS mechanism that fragments large packets and interleaves smaller packets with the fragments. 

With LFI, it turns the 3-trailer truck into three trucks.


**12.5 QoS Markings and dropping traffic**

![](https://i.imgur.com/Di0G2dn.png)
QoS marking -- IEEE 802.1Q Frames
A layer 2 or Layer 3 is a Class of Service.

Layer 2 CoS marketing doesn't cross a router. 
So you make it a layer 3 marking.

![](https://i.imgur.com/rd4epmP.png)

There's 2 modes: 
IP Precedence. (3 bits)
DSCP (6 bits)

We have this ToS byte, and use the first 3 bits for the IP Precedence. 
Like if I use VOIP, which is pretty important... i want to mark it with a 5. (101)
If we use the DSCP, which is 6-bits.

PHB - Per-hop behavior.
ITF said, making numbers up is stupid. Here's values that are important.

Differentiated Services Code Points (DSCP)
![](https://i.imgur.com/HgT79BS.png)

In the binary Values, we're only looking at the first three bytes. (101) is 5. And five works backward compatability mode!

Well what about probability of dropping?
DSCP Assured Forwarding (AF) Values

![](https://i.imgur.com/Wyc5oOc.png)
So the first 3 digits is the priority. 
Then that next 3 digits is to determine that they have a high drop probability.

Random Early Detection (RED)
Once we reach that Minimum Thereshold... as it gets deeper and we're hitting Maximum Threshold, we start dropping.
![](https://i.imgur.com/gJNdSSx.png)

And if it's using DSCP Assured Forwarding (AF), then we can set different drop percentages.
![](https://i.imgur.com/1tNjM7W.png)

**QoS Traffic Shaping and Policing**

Traffic Conditioners determine shaping and policing traffic;

Shaping:
* Delays excess traffic rather than dropping it. Puts it in the buffer, then sends you n the way.
* Used on slower speed interfaces.
* uses Bits

Policing:
* Dropping traffic rather than delaying.
* Used on higher speed interfaces. 
* Tells you to come back later.
* Uses Bytes.

Token Bucket:
![](https://i.imgur.com/2M5sURu.png)
CIR -- 
Shaping uses Bits/ policing uses bytes. 

Example of shaping:
![](https://i.imgur.com/lPLJiwa.png)
How do we send less than the line rate --

FORMULA:
CIR = Bc/Tc

CIR (Committed Information Rate) = Average speed over the prior of a second.
at 10 mbps, you gotta send 10 mb per second.

Bc (committed Bursts) = number of bits (for shaping) or bytes (for policing) that are deposited in the token bucket during a timing interval.

Tc (timing Interval) = the interval at which tokens are deposited in the token bucket

Person example: It's like if you're driving at 120mph to get somewhere in 30 minutes. The police officer says, "Speed limit is 60mph.' And you're like, I'm still under the limit because i'm traveling at exactly 60mph, since im doing that for 30 minutes.

The image is the same. It's sending at the line rate... 

TEST:
QoS settings are set in what’s known as the ToS (Type of Service) Byte in an IPv4 packet (Traffic Class in IPv6).


## Module 13: Virtualizing Network Devices (.75hr)

BEFORE: 
You used to buy 3 different servers. 

TODAY:
![](https://i.imgur.com/0BSEQGM.png)

You can have 1 physical server, with three virtual servers.
Connect it a single network interface card into the Switch.
And the software, how to virtualize...
It's called a Hypervisor. Create, start, stop, monitor multiple virtual machines.

Type-1 Hypervisor -- Native/barmetal. Directly runs on the server's hardware.
Type-2 HyperVisor -- Runs in a traditional operating system. VirtualBox...


A type 1 hypervisor (bare-metal hypervisor), on the other hand, is installed directly on top.
A Type 2 hypervisor, or a hosted hypervisor, is a software application that is installed on top of an existing operating system to be able to create virtual machines.

A machine that a hypervisor is running on is known as a host, and the virtual machine is known as a guest. 

How does it work?
In software: 
![](https://i.imgur.com/fjUNqXr.png)
You create a: 
Virtual NIC: Somewhere associated with a unique MAC address, which can be used as a VM to send/recieve packets.
Virtual Switch: Have it manage virtual nics and connect to a Physical NIC.

You can even virtual routers too.

In Physical servers, you can also get separate Physical Ports for each virtual nic.

You can do Cloud Providers.
Virtual Providers. 
You can install a Virtual Firewall, with Virtual Load Balances. 


**Virtual Router Redundancy Protocl (VRRP)**
A virtual IP address is an address assigned to an application that doesn’t physically exist. Some devices that leverage a Virtual IP address are load balancers and First Hop Redundancy protocols (FHRPs), such as HSRP and VRRP.

![](https://i.imgur.com/lWmOWNc.png)
IP: 10.1.1.100
Default Gateway: 10.1.1.1

If you're using R1 (master) to connect to the internet, and it fails... you want to switch to R2 (Backup).

What can you do is switch to a Virtual Router. 
Virtual Router has a MAC address attached to R1.

Backup is sending a advertisement every second.
And if Master falls apart, Virtual Router switches to the Backup.

From the perspective of the PC, it doesn't change. It's invisible. 

VRRP:
* Standard, using First-Hop Redundancy Protocol
* Defined RFC 3786
* Called Master and Backup Routers (active and Standby)
* MAC ADDRESS: 0000.5e00.01XX
* Preempt Enable by default
* Default Master Advertisement Interval: 1sec
* Default Master Down Interval: 3 * Master_Ad_Interval + [(256 - VRRP Priority)/256]
* Multicast Address: 224.0.0.18
* Can use Interface IP Address as Virtual IP Address

First-Hop Redundancy Protocol (FHRP) - Protocl that allows a backup router to take over if a client's default  router goes down. 

Pre-emption: If R1 is the master, and it comes back up, in order to take the master role agian, it needs to have preemption roll. Cisco - has it disabled. VRRP - has preemption by default.


**Storage Area Network (SAN) Technologies**

![](https://i.imgur.com/Ahcvszi.png)
Direct-Attached Storage (DAS) - storage

server 1 can't talk to Server 2's harddrive.

Block-level storage - storing/retrieving data on a block of bytes or bits, as opposed to storing an retrieving an entire file.

File-level storage - slash slash file name bytes. It's transfering files one a time.

SCSI - Scuzzy (Small Computer Systme interface) - A collection of standards defining a method of data transfer to directly attached devices (Hard drives)

![](https://i.imgur.com/W6ZmiNk.png)
Network-Attached Storage (NAS)

This is is using Files. 


![](https://i.imgur.com/tmGiqEu.png)
Fibre Channel (FC) Storage

This is connected to the Ethernet Switch and a Fiber Channel Switch
Using a Host Bus Adapter (HBA).
Creates block level storage.

![](https://i.imgur.com/b6rAerA.png)
Fibre Channel over Ethernet (FCoE)
Has the FCoE Switch to create block level storage.
This is a very expensive solution.

![](https://i.imgur.com/Rq00uFt.png)
Internet Small Computer System Interface (iSCSI)

iSCuzzy (ISCSI) - 

It doesn't look like a server storage.



![](https://i.imgur.com/CCLujoG.png)
Using InfiniBand for SANs

We like Fibre Storage because block storage is so much more efficient.
And Ethernet because it's readily available. 

Another tech is InfiniBand. 
Competiting tech over Fiber channel of Ethernet.
Instead -- Fiber channel over InfiniBand. 

Might be a data center, super computer, or in a network.

Speed is 40Gbps 
connects to a IB Switch, that connects to storage area. 


**Cloud technologies**

XaaS (ANything as Service)

Types of Cloud Services
* Public 
* Private
* Hybrid
* Community

Typical Cloud Services
* Infrastructure as a service
* Software as a service
* Platform as a Service (A dev environment. Like 3 linux servers)
* Network as a Service (Making VPNs, or bandwidth on demand)
* Desktop as a Service (Subscriptions to a desktop, maintained by a small biz.)

Elastic Provisioning - pay for waht you use. 

**Accessing Cloud Services**

![](https://i.imgur.com/HvvXSEV.png)
How to protect data in transit? 

WLAN or using a VPN

Or how about moving with multiple Cloud Providers?

![](https://i.imgur.com/01y8NL1.png)
Use a Intercloud Exchange.

You can then switch between multiple cloud providers.



**Infrastructure as Code (IaC)**

It's a config file.

1. provision infrastructure files
2. configre existing infrastructure.
3. Deploy and manage applications

HashiCorp Terraform 
Puppet
Chef
Ansible for IAc

YAML (YAML ain't markup language)

Ansible does not need a agent. 

**Multi-tenancy**

![](https://i.imgur.com/ZKL9DxL.png)

Tenants share services. Water, electric...
but Tenant 1 cannot go to tenant 2's house.

![](https://i.imgur.com/x25fqa2.png)
So you can have isolation, but sharing resources below it.
Like VM1 can share


TESTING:
A SAN (Storage Area Network) is a network where there is access to high-speed block storage, seen in places such as Data Centers. With a SAN, the storage appears as if it were directly connected to a host. 

A Network Attached Storage (NAS) is a server that provides access to file storage through a Local Area Network (LAN).

Platform as a Service (PaaS) is a cloud solution for developers that allows them to develop their programs without having the test equipment physically on premise. 

Infrastructure as a Service (IaaS) is a cloud solution used for outsourcing infrastructure devices such as servers and routers.
## Module 14: Securing a Network (2.5hr)

### General Security

Goals for security:

* Confidentiality (You can encrypt it. and use a key to unlock it)
* Integrity (ensure files is modified in transit. Like sending money and not someone stealing)
* Availability (Someone doesn't DoS)

Confidentiality 
* Firewall sits on the edge of the network. Stateful inspection. 
* Access Control List (ACL), permits/denies specific destinations. You can block telnet. Only use SSL.
* Encryption. 

**Encryption**
Symmetric Encryption. Source and destination has a shared secret key. Like USB flash drive, or through the phone. 

DES - Data Encryption Standard - Mid-1970s. Uses 56-bit key. Weak.
3DES - Triple Data Encryption Standard. Uses three, for 168 bits. More secure. But depends on implementation. Still not using as much.
AES - Advance Encryption STandard - AES-128, AES-192, AES-256. Algorithm in modern networks.




Asymmetric Encryption. 
Rivest, Shamir, and Adleman (RSA)

![](https://i.imgur.com/D27Drg0.png)

So the client talks to internet to go to Amazon
Internet has a Certificate Authority
Certificate Authority proves it's the right spot, and you are sent to Amazon.

Certificate Authority (CA) - trusted third-party that can sign keys. digital certs.

Amazon gets a X.509 v3 Digital Certificate from say, Verisign.
They get a Public key, and a private key. 

This exchange was Asymmetric:
![](https://i.imgur.com/tYrslnH.png)

1. client wants a secure connection
2. Server sends a digital certificate. (which contains Amazon's public key)
3. Client authenticates the certificates with the CA's public key.  (using the Certificate Authority)
4. Client Generates a string and encrypts it with amazon.com's public key. 
5. Client sends encrupted string to amazon.com
6. Amazon.com decrypts the string with it's private key (a session key, only lasts a session)

So now that you got this figured out, you can switch to Symmetric encryption!


**Integrity**

Hashing Algorithm. Fingerprint of the data.
MD5 (message Digest 5) - 128-bit MD5 Hash digest. 
SHA-1 - similar to MD5. But uses 160-bit hash digest.

What happens when a malicious actor takes a file and modifies it with virus, then runs the hashing algorithm? You'll still get the malicious file, and it correctly hashes!

HMAC - Hash-based message authentication Code (HMAC) - Uses a shared secret key, in conjunction with a hashing algorithm, to create a hash digest.

**Availbility**

The five nines. 99.999 Percent Uptime.
Which is 5 minutes of downtime per year. 


Sample threats:
* Improperly formmated data
* DoS attack - Denial of service attack
* DDoS attack - Coordinated DoS attack (Distributed Denial - multiple)

Prevention:
* OS patches
* IDS, IPS, and firewall appliances

IDS - Intrusion detection System. THis one clones data and analyzes it, then sends rules to firewall.
IPS - Intrusion prevention system. This one goes through traffic flows. stops traffice before it gets to the system.

**Exploit vs Vulnerability**

Vulnerability: A flaw in a secure system. Like weak password, or forgot something.

Exploit: Taking advantage of a vulnerability

Zero-day attack - new exploit that just been discovered and not patch.

![](https://i.imgur.com/1gJavok.png)
Common Vulnerabilities and Exploits (CVS)

MITRE Corporation

### Types of Attacks

**Denial of Service Attacks**
![](https://i.imgur.com/XRITy30.png)
The victim is trying to deal with such a volumn of requests, it consumes resources and can't perform it's intended function. 

**DDoS attacks**
![](https://i.imgur.com/l22X2fI.png)

**DoS & DDoS attacks**
You can do a SYN Flood: Initiates multiple TCP 3-way handshakes, but never complete.
SYN, SYN-ACK... but never follow up.

UDP Flood: Sends a large volumn of UDP segments, since UDP is connectionless, the victim cannot verify the sender's IP address.

HTTP Flood: Targets the web services on a server by sending a stream of HTTP instructions (GET/POST)

DNS Reflected: Attacker spoof's the IP address of the victim and sends a large number of DNS queries.

Spoofed Source IP = 192.0.2.123
using the ping 198.51.100.255, which is a broadcast. then fires a message on the broadcast.

**On-Path Attacks**
METHOD 1: Man-in-the-middle attack

![](https://i.imgur.com/5uuXeQG.png)
Malicious user injects themselves between the communication flow between systems, enabling them to incept to manipulate that flow's traffic.

Examples:
* MAC Flooding: Attacker floods switch with so many fake MAC address, filling up to capcity. then the Switch acts like a HUB, which just sends out on all ports.
* ARP Poisoning: Claims that attacker's MAc address is the victim's default gateway
* Rogue DHCP: Attacker's DHCP server tells the victim that the IP address of the default gateway is the attacker's IP address.

MAC Flooding Attack:
![](https://i.imgur.com/e1q3Hcg.png)
Attacker floods switch with so many mac addresses, it fills the switch's MAC address table to capacity.
Macof - MAC Overflow 

`sudo macof -i eth0`

10 seconds or less. 
TO FIX: Require it so that only a limited number of MAC addresses that can be learned off a single switchboard.

METHOD 2: ARP Poisoning

Unsollicitated ARP replies are sent to the victim, claiming the attacker's MAC address it eh AMC address of hte victim's default gateway.

![](https://i.imgur.com/mq3fNON.png)

Computer 1 asks "WHat's the MAC address to `10.1.1.1`?
Computer 1 learns it's AAAA.AAAA.AAAA.

![](https://i.imgur.com/6F4fHej.png)
The attacker plugs into the same switch. But it sends another ARP reply.
It says "Actually it's BBBB.BBBB.BBBB"

TO FIX: depends. It can check the setting.

METHOD 3: DHCP Spoofing

![](https://i.imgur.com/lKv0TJg.png)
D - Discover
O - Offer
R - Reply
A - Acknowledge

A DHCP Client reaches to the subnet/switch, and tries to discover.
A rogue DHCP Server sends an offer FIRST before the Corporate DHCP server.

DHCP Client will then point to the attacker's default gateway.

TO FIX: Depends. Cisco has DHCP Snooping. It assigns trusted/untrusted ports. DHCP offer method can only comes from a specific port.

**VLAN Hopping Attack**

Where a hacker in one VLAN accesses a computer in another VLAN. 
You're supposed to go through a Switch for that.

METHOD 1: Switch Spoofing
![](https://i.imgur.com/1gZFS8s.png)
Attacker pretends to be an ethernet switch (using something like Yersinia) set up a trunk carrying traffic for all VLANs

Attacker sends a DTP Frame to the switch, and calls itself a 'trunk'.

![](https://i.imgur.com/zT3T67f.png)

Then when it's time to attack, the trunk switches to say it's actually VLAN 5 frame.

METHOD 2: Double Tagging: 
![](https://i.imgur.com/vd9u8rR.png)
Attacker adds two VLAN tags to a frame, the outer tag is a turnuk's Native VLAN, and the inner tag is the target VLAN.

They're in the native VLAN, and the switches rip out each VLAN bit.

It's a unidirectional attack. Like a DoS.

**Social Engineering Attacks**

Phishing Attack - where they say, 'login is broken. please login."

Tailgating - piggybacking - an attacker walks behind someone that has legitment access.

Shoulder Surfing - looking over someone's shoulder to see the credit card at a ATM. Use privacy filter.

**Other Common Attacks**

Insider Threat - Malicious user. Fix by having logging.

Logic bomb - Code that performs some action based on an event.

Rogue Access point - Wireless access poinjt installed on a network without proper authorization

Evil Twin - ABC network. They might call it as ABC net2. 

War driving - Drive around a geographical area in an attempt to find wi-fi hotspets that can be accessed. If they're doing something bad, they can find this weak address and use that.

Malware - infect/harm a host.

DNS Poison - Send false advertisement. If you go to amazon.com, but it sends you to 123amazon.com. Or a rogue DHCP server. 

Randomware - Wannacry. Encrypt data on the hard drive. And you had to pay for it.

Spoofing - Pretend to be a differnt MAC or IP address. That lets them flood traffic, or use the IP address to visit a specific area spot.

deauthentication Frame - Deauthenticate a spoofed IP address, off a Wireless AP. well, they can set up a evil twin attack.

Brute Force - Dictionary attack. Start brute force attack.

### Common Defense Strategies

Change Default credentials. 

Avoid Common passwords.

Upgrade Firmware.

Patch and Update.

Perform file Hashing.

Disable Unnessary Services. Don't need wifi, turn it off.

use Secure Protocols. 

Generate New security keys. 

Disable Unused Ports. 
like Telnet.

Also Device Ports, like on switches.

**Mitigating Network Threats**

Signature Management - keep attack signatures current on devices, such as IDS and IPS sensors

Device Hardening - Apply a collection of best practice procedures to secure network devices (disabling unnessary sevices on a device)

Change the Native VLAN - Configre a trunk's untagged VLAN to a non-default value, to prevent unconfigured swithc ports from automatically beloning to the native VLAN.

Define Privileged User Accounts - Define accounts. 

File Integrity Monitoring 

Role Separation 

Set up a Honeypot - a host that's just to lure the attacker. individual system. A honeynet is a bunch more virtual stuff.

Pen Tester - a thirdparty who sees what they can do.

![](https://i.imgur.com/wk7RbPQ.png)
Network segemnt in a diffeent zone. DMZ zone is for public.

Defense in Depth: multiple layers of security. Not just a firewall, but like lots of security protectors.

Zero Trust - don't automatically give them everything access. No permission until authetnication.

Least privilege -

**EAP Authentication**
Extensible Authentication Protocol (EAP) Autentication

A Authentication Server sends a authenticator (which is really just sends a session key) to all the servers.

![](https://i.imgur.com/y0zeDBS.png)
Extensible Authentication Protocol - Transport Layer Security - EAP-TLS

* One of hte original auth methods specificed by the IEE 802.1X standard
* Authenticates end users and RADIUS servers via a Message Auth Code derived from digital certs of the end users & RADIUS servers
* Requires a Cert Authority (CA)
* Allows clients to login using creds stored in a Microsoft Ative Directory Database


Extensible Authentication Protocol (EAP) Autehntication via Secure Tunneling (EAP-FAST)
1 - Client usesa a Protected Access Credential (PAC) to request access to the network
2 - Consists of two or three phases
* Phase 0 (optional): Clients PAC is dynamically configured
* Phase 1: Client and the AAA server uses the PAC to establish a TLS tunnel
* Phase 2: Client sends user info across the tunnel

PEAP - Protected Extensible Authentication Protocol ()
Developeed by Ciscco, Microsoft, and RSA
Goal of protecting auehtnciation transaction by using a TLS connection

Two main types of PEAP implementation: 
* Version 0 (EAP-MSCHAPv2) - Mcirisoft Challenge - widely supported by Microsoft Active Deictory
* PEAPv1/EAP-GTC (Generic Token card) - uses generic databases (LDAP and OTP) for authentication

**Authetinication Servers**

AAA Server, Kerberos System, or Single Sign On.


AAA Server
Authentication: Who are you?
Authorization: What are you allowed to do?
Accounting: What did you do?

![](https://i.imgur.com/PdRH8Ir.png)

RADIUS server has more accounting feature. And is more frequent.


Kerberos System (Kerberos and Cerberus) -- 
This one is hard!

![](https://i.imgur.com/DI1y8LV.png)

To make this work -- Client wants to talk to the File Server.
* Client wants to communicate, by sending a 1-way hash of the key.
* There's a KDC (Auth Server and Ticket Granting Server)
* The Auth service takes key, checks it and then hands it over to the Ticket Granting Server with a Encrypted Ticket.
* The Client takes the Encryupted Ticket to the Ticket Granting Server, with a ticket & session Key. 
* The Ticket Granting Server, and gives you a key to the File Server.
* Finally, a communication to the File Server.


Single Sign-On:
![](https://i.imgur.com/8lslTsc.png)

Everything goes to a LDAP Server.
LADP - A protocl ued to send info between central repo of user data (directory server) and a variety of systems which users need to authenticate.

LADP example - Microsoft Active Diectory

**User Authentication Methods**

* Multi-factor or two-factor authentication

- What the user knows. (Password)
- What the user has. (Dongle, USB)
- What a user IS. ()
- WHERE a user is. (Geofrencing)
- What a user DOES (drawing a pattern)

* IEEE 802.1x 

![](https://i.imgur.com/UjDMCGP.png)

- Here's a key to get 
Authenticator and a supplicant. 

* Network Access Control
Posture Validation - REquirements to the login process (like you need a specific anti-virus software version in order to join the ntework)

* MAC Filtering

Your home laptop doesn't automatically connect to work. But it's easy to spoof it.

* Captive Portal.

Connect through a login screen.


**Physical Security**

What if someone just walks off with the equipment? Take a laptop?
Security:

1. Motion detector
2. Asset Tracking Gear. They have RFID chips that ring when you go through a door.
3. Video Surveillance
4. Tamper Detection

Prevention:

Badges that logs you.
Biometrics. 
Employee training. Tailgating behind someone.
Access Control Vestibule (two doors, one door locks. Aka mantrap.)
Locks (doors, racks, cabinets)
Smart Lockers (like disaster recovery. Need auth.)

Equipment Disposal: 
Throw it away by --

Factory Reset
Sanitize Device. (Darik's Boot and Nuke (DBAN))


**Network Forensics**

It's when you do detective work.

Like using a Laptop running wireshark in a Switch (with port mirroring enabled)
Computer forensics. 


Detect suspicious activity
Incident Investigation

Categories of Forensics: 
Capture all traffic  - need lots of hard drive
Stop, look, listen - a tool that watches things.

TPCdump and wireframe.
Any requests through the the firewall would be logged into the server.

**Securing STP**
STP - Spanning Tree Protocol

![](https://i.imgur.com/RIwkK5B.png)

You don't want a malicious person to become the Root Bridge. 

![](https://i.imgur.com/EErJUdD.png)
To stop them, have a BPDU Guard. 

Yo can have a feature turned on called PortFast - it allows a port to be configured to connect to a end-station. 

So SW4 becomesa BPDU Guard, and stays on the outside. And it also promises to only do a very specific thing.  When SW5 connets to them and tries to send them BPDU, it goes into error-disabled mode.


Root Guard:
![](https://i.imgur.com/5EENnoB.png)
Some malicious actor set up SW3 to have a lower priority. 

SW3 is sending a Superior BPDU. 

Root guard feature -- 
The infrastrutre is set up so you should never see a Superior BPDU.


**IPv6 Router Advertisement (RA) Guard**

![](https://i.imgur.com/CXOqvFv.png)
SLAAC - (Stateless address auto-configuration)
Lets a client dynamically get it's IPv6 address using EUI-64-address and Router Advertisement.

R1 sends a multicast to all computers.

THREAT:
* Convince a client that the attacker is the default router
* Send incorrect SLAAC info to client. 

RA Guard:
![](https://i.imgur.com/5z0CvVA.png)

It's a policy that checks the RA against the policy. So malicious attacker has to know that too.


**Securing DHCP**

DHCP Server is awesome -- Allows new device that auto-assigned IP Address, submask, gateway.

What if someone sets up their own DHCP, that gives their own DNS, that looks likea Facebook Login page?

DHCP Client wants to connect to the network.

The rogue DHCP server sends it's data first. 

How to protect against yourself? 

![](https://i.imgur.com/9UnHnjn.png)
You can set up DHCP Snooping.

Surgically set up a trusted port, and everything else is untrusted.

A real situation:
Network conference, people brought their own hardware. And DHCP servers were conflicting with others.
So to fix, they had to hardcode/define trusted port manually.


**IoT Security Concerns**

Many IoT devices were not designed with security in mind.
Like, conneting to cameras online.
Many users leave default passwords.

Mirai Malware Example -- scanned devices with default passwords. Infected IoT devices. Became a botneck.

Then attacked a DNS Server (DNS provider).
Twitter was offline that day.

SOlutions:

place IoT devices on their own VLAN. 
Have it on their own guest network.




**Cloud Security**

![](https://i.imgur.com/daGKb8w.png)
The responsibility of security is to the Cloud Provider.
To access that cloud...

User TLS tunnel to Internet, to Cloud Provider.
Encrypted tunnel.

Another method is a building with a VPN, into the cloud, then VPN it into the Cloud Provider.

Another fast method is a Private WAN, that's connected to a dedicated Server.

Another extra layer of security:

CASB -- Cloud Access Security Broker.
Sites between users & cloud resources
Monitors traffic and sends alerts.


**IT Risk Management**

Being proactive on Security. 

Five step model:

1. identify Attack targets (like computers, or building access)
2. Rank data (social security numbers, or just content)
3. Determine Risk LEvel (Risk level = Probability of Breach * Financial Impact of Breach)
4. Set Risk Tolerances
5. Monitor


Threat terms on test:

Vulnerability - is a weakness
Threat - is something someone develops to exploit that weakness.
Posture Assessment - Check things like the version of their anti-virus or whateve.r
Penetration Testing - Looks for vulnerabilities
Process and Vendor Assessments - look at their weaknessses.


TEST:
Router Advertisement (RA) Guard is a Ethernet switch security feature that can prevent an attacker from sending RA messages into the attacker’s switch port. If the attacker were successful, they might convince a client that the attacker’s computer was the victim’s default gateway. Or, when an IPv6 endpoint was generating their IP address via SLAAC, they could receiving incorrect information about their network segment by the malicious RA messages.

The identification phase is where you identify yourself, such as with a username. The Authentication phase is where you prove your identity using, for example, a password. The Authorization phase defines what access you have to a given system. The accounting phase keeps track of what you accessed and when you accessed a system or data.

RADIUS (Remote Authentication Dial-in User Service) is an open standard that many devices can use to authenticate into a network. RADIUS works well with 802.1X and EAP (Extensible Authentication Protocol), which are protocols used for authenticating into wireless networks.

TACACS+ (Terminal Access Controller Access Control System Plus) works on the basis of the AAA framework to provide Authentication, granular Authorization, and accounting features. Like RADIUS, but offers granulaor cauth features.

Wireless encryption standards
WEP
WEP2

WPA - uses TKIP
WPA2 uses CCMP

Protocols
TKIP (Temporal Key Integrity Protocol) was created to quickly solve the security problems that arose with WEP. Although TKIP did solve some problems, there were still numerous problems that still existed
CCMP (Counter Mode Cipher Block Chaining Message Authentication Code Protocol) was created. This protocol is based on AES and is used to remedy the weaknesses of WEP with TKIP.


A DDOS (Distributed Denial of Service) amplification attack is an attack triggered by a botnet formed by computers infected with malware. When a C&C (Command and Control) sends a message to the botnet, the computers initiate a request to a server with a spoofed source IP address. Afterward, the server responds to the spoofed address thus turning a multitude of small requests into a large payload. This attack can be done with DNS (Domain Name System) or NTP (Network Time Protocol) servers. DNS poisoning involves manipulating packets containing DNS information, typically for malicious purposes.

Dynamic ARP Inspection (DAI) is used to inspect an ARP to make sure it is legitimate. VLANs, Port Security, and ACLs can’t prevent ARP poisoning. ARP (Address Resolution Protocol) is a Data Link protocol used to dynamically map an IP address to a MAC address, which is vital for the IP routing process. ARP poisoning leverages the fact that ARP doesn’t have any built-in security mechanism, and with that, ARP poisoning involves giving false information when an ARP request is made.

Kerberos is an authentication protocol that leverages the use of tickets to authenticate network devices over unsecured networks. Kerberos is largely used in places where hosts need access to servers.

ACLs (Access Control Lists) are used to match certain qualities in traffic, such as IP addresses to then perform a configured action, such as dropping a packet. 
* ACLs can be used for security functions. With ACLs, entries are processed in a logical order, and once an entry is matched, no further matching is done. 
* ACLs also contain an implicit deny by default, meaning that if the traffic isn’t permitted, it will be dropped by default. 
* There is no `implicit permit`. It's all about saying NO.
* ACLs can be used to prevent communication between users in the accounting VLAN and marketing VLAN. 

802.1X is a standard that defines port-based access control for LANs or WLANs. 802.1X defines three parties: Supplicant, Authenticator, and Authentication Server. The supplicant provides authentication credentials, and this is typically a host. An Authenticator provides communication between the supplicant and authentication server. This device can be an AP (Access Point) or Switch. Finally, the Authentication server is a server that receives and responds to request to an authenticator, allowing or denying connection requests. 


## Module 15: Monitoring and Analyzing Networks (.5hr)

**Device Monitoring Tools**

SIEM - Security Information and Event management (collection of hardware/software of services back to a single spot to examine stuff)

example: Syslog
If an event occurs, send that to a syslog.
Interface Statistics. 
CPu and Memory Statistics

Monitoring Processes

* Have someone actually do the Log Reviewing.
* Port Scan and Velnerability Scan
* Patch Management (Microsoft has something like Patch Tuesday.)
* Compare with Baseline Data. 
* Packet Analysis
* Netflow collector

Using a Syslog cisco tool:
![](https://i.imgur.com/neztmrA.png)

There's different versions of notifications/severity. 

**SNMP**

SNMP Manager 
![](https://i.imgur.com/Ma4kkK9.png)

SNMP Agent  - on each device is a MIB, which contains a OID.

If a certain event happens, then it lets the SNMP Manager know.

It's a two-way event:
The agent sends a 'trap notification'. 
The SNMP sends a query/response.

SNMP Security Options:

Version 1: used to be just read, and read/write strings. Community Strings (password)
Version 2c: Nobody actually used the new security. Community Strings. Multiple vendors would use the same string. 
Version 3: Encryption, Integrity checking, and Authentication Services.

**Remote Access Methods**

![](https://i.imgur.com/KbZHgkc.png)
Different ways to do remote access. 

SITUATION: Client1 wants to talk to the server.

Method 1: Uses a site-to-site VPN.
Method 2: Client-to-Site VPN (remote access VPN)

You can use a Internet Protocl Security (IPsec)

Web browsers have security built in itL SSL/TLS (tls is the next level of SSL)
* Another version of TSL, which is Datagram Transport Layer Security
* HTTP & HTTPS

SITUATION 2: How can Client1 control a computer on SW2. 

They can use a Remote Desktop Protocl (RDP)
or Virtual network Computing (VNC)

SITUATION 3: File transfers

FTP. 
FTPS. -- older version. This is using ssh.
SFTP. -- SSL
TFTP. -- not secure. 

SITUATION 3: Out of band network.

PTSN - using a modem. 

Telnet or ssh to talk to a router. 


**Environemnt Monitoring**

A device to monitor equipment room.

Environmental monitor - using a sms text 

Power. Have a UPS -- uninterrupt power supply. It has a finite life. 

**Wireless Network Monitoring**
![](https://i.imgur.com/CARfqdh.png)

Wireless Survey Sofware - which puts a heatmap/physical map to see it's radius.

for 2.4ghz - 1, 6, 11 to avoid overlap.

Wireless Analyzer Software - 
![](https://i.imgur.com/2GQ2pE7.png)


TEST:
Syslog is a protocol that is used for message logging. Syslog, when configured, sends traps or notifications about network devices. Traps can contain information such as an interface state change or a message about a server’s CPU reaching high utilization.

 SNMP (Simple Network Management Protocol) sends taps and baselines on network devices. Baselines give information about overall system health.

 SIEM (Security Information and Event Management) software is used to combine security information and event management software into a single package, providing real-time statistics of security alerts viewable from a single pane of glass. Think like... semen.


SNMP (Simple Network Management Protocol) is a protocol used to remotely manage network devices and also is used to send statistics about a device through the use of traps. Devices using SNMP have a MIB (Management Information Base) which are composed of OIDs (Object Identifiers), which are objects that correspond to a specific variable, which is then used to provide statistical information about something like an interface. 

NMS (Network Management System) is used to probe information from SNMP agents (Devices that contain a MIB)
## Module 16: Examing Best Practices for Network Admin (1hr)

**Safety Procedures**

1. Remove power. 
2. Properly grounded.

Use a wrist-strap with a resistor, so power moves somewhere else.

Heavy equiupment on the bottom for foundation. Secure racks to ground/wall. 

Fire Supression using chemicals/gasses (NOT WATER!)

Heating/ventilation, systems.

**Wiring Management**

![](https://i.imgur.com/Ehc0bQe.png)

IDF - Intermedia Distrbution Frame (wireing closet)
MDF - main distribution frame (wiring frame to a core place.)

Fiber Optic cable if it bends too much, can bend the light cable. You need a min distance.

Plenum Cabling - cabling with outer insulator that is fire retardant and minimizes release of dangerous fumes in like small walls/air fumes.

Spaghetti wiring - wires tangled together.

Label both ends of the cable. to avoid chaos.
Use cable management system (separate power and regular cables, otherwise there's interference.)



**Power Management**
SPS - Standby Power Supply. It's cheaper, but it takes a few seconds to power it.

Generator - this gets the generator kicks on to give some power. With gasoline, it powers the server without building power.

UPS - uninterruptible Power Supply. It only has a tiny battery.

PDU - Power distribution units in a data center.
![](https://i.imgur.com/5QIgvzt.png)

So there's two different outlets. And PDU is a distrbutor, like a separate electric company.

**Rack Management**

19-inch rack. Router/switches, you can buy stuff that have a 2-post rack. It's find for lightweight.

Servers, you want a 4-post rack.

Server rails, which has locks.

Ventillation: 
![](https://i.imgur.com/oNriF5z.png)

create cold Aisles, hot aisles. 

**Change Control/Change Management**

A system to track changes/new issues.

Team members should be aware of each other's changes.

STORY:
They filled out a change control form, swapped out of the switches... email was dead.
Was those events related? Discovered that it's not related. When the email system change... someone in a California swapped a hardware and didn't include a change control form.

**High Availability**

The five nines of availability.
99.999%
That's 5 minutes of downtime.

Higher cost -- 
* Redundant compoennts, powers
* UPS/Generator
* provide multiple routers/gateways
* FHRP (First-hop redundant Protocols)

Fault-tolerance - the ability to continue oepration if one of it's components fail. 

Having more ISP, increase throughput. 
If a ISP goes down, switch ISP2.

![](https://i.imgur.com/fmm4Del.png)
NIC Teaming - where a server has has multiple links in switch.

Load balancing. 

**Cloud High Availability**

Cloud Provider can also use a Virtual Firewall, and redundant Virtual Machines.

The four tiers of a data-center:

Tier 1: 99.671% availability - roughly 28 hours of downtime.
Tier 2: 99.741% availability - 22 hours of downtime -- lots of power
Tier 3: 99.982 avaialbility - 1hour 
Tier 4: 99.995% availability - 5 minutes. 

**Active-active vs active-passive**

![](https://i.imgur.com/bw1wXIy.png)

Active-Active Conncetion - You can use both links for data

Active-Passive connection - one goes on standby.


Active-Passive THINGS: 
TYPE 1: Hot standby Router Protocl (HSPRP) -

![](https://i.imgur.com/p565vO5.png)
First-hop redundancy Protocl (FHRP) - Cisco-specific thing.

DIFFERENT NAME: Active and Standby router. It sends Hello.

If the first hop fails, then it jumps to the next one.
here's your IP address, and default Gateway. 
It's a virtual router. default Gateway (10.1.1.1) is a virtual router, and it's using either R1 or R2.

TYPE 2: Virtual Router Redundancy Protocl (VRRP)

![](https://i.imgur.com/ilMSQqs.png)

The difference, Router 1 and the Virtual Router has the same IP addresses.

DIFFERENT NAME: This uses Master and Backup. It sends Advertisement. 

Active-Active THINGS:

TYPE 1: Gateway Load Balancing Protocl (GLBP)
![](https://i.imgur.com/csCmegR.png)
Cisco-secific:

AVG - Active Virtual Gateway - Responses to ARP queries asking for the MAC address of a default gateway
AVF - active virtual forwarders

Active Virtual Gateway gives different answers, load balancing ones. 
When PC1 does a ARP, it says 1111.1111.1111
When PC2 does a ARP, it says 2222.2222.2222

**Diaster Recovery**

Disaster recovery 

Enterprise Data Center -> backup stora

Types of backup:

Full: all data
differential: only changes since the last one.
Incremental backup: Only changes since the last full/diff/incremental change.
Snapshots: back up entire sever, including state information.

Diaster Recovery Sites:

Enterprise Data center

Alterative sites:

Cold site - has power, HVAC, floor space. There's no equipment here. It's just available.

Warm site - power, hvac, floor space, and server hardware. It's ready if there's problems.

Hot site - Power, hvac, floor space, service hardware, and it synchronize data. Cost more money.

SLA - Service level agreement. Promise to your users about how long a system will be down in an event of a disaster.

Recovery Time Objective (RTO) - max time a system will be offline.
Recovery Point Objective - max amount of time it'll last back up.

Mean Times Between failure - average time before it fails.
Mean Time to Repair - avg time before you have ot repair a failed product.

**Standards, policies, and rules**
USE ACRONYMS

Privileged User Agreement - what access a user has. 

Password Policy - min requirement for passwords.

On-boarding/off-boarding procedures - when people join and leave.

Licensing restrictions - how a license can be used.

International Export Controls - restrict exporting software to another company, because of specific encryption standard)

Data Loss Prevention - a policy to not release private info

Remote Access Policies - methods remote uses can accessing a company's internal network/

Incident Response Policies - identifies what happens when there's a incident. steps to follow.

BYOB Policy - using your own device.

AUP - Acceptable Use Policy. Like, you can't use a data cloud to store your baby pics. Or can't use facebook.

NDA - Non-disclosure agreement.

System Life Cycle - different phases of a hardware's existence. Plan, purchase, install. maintain, dispose.

Safety Procedures and Policies - guidelines for conduct, to maintain a safe working place.

**Documentation**

Privileged User Agreement - What permissions people have?

Memorandum of Understanding - Not a legal document, documents to ensure that they can see everyone's undersatnd.

**Site Survey**
![](https://i.imgur.com/DKRcM0Z.png)

**TESTING:**
Topology diagrams are used to display the logical or physical interconnections of devices within a network or networks. Rack diagrams might display what servers reside on which rack and operating system information. Inventory management documents are used to keep track of assets within a company.

MDF/IDF (Main Distribution Facility/ Intermediate Distribution Facility) documentation is used to keep track of the physical interconnections of networks.

Baseline documentation is used to keep track of a system’s performance based on its stock configuration. Information in this document is then compared to the performance of a device after a modification. 

NIC teaming is a technology used to logically combine Network Interface Cards (NICs) to make them appear as one or more logical interfaces. This technology provides fast performance and fault tolerance. 

Port channeling isn’t a server exclusive technology and only combines links.


Rack Diagrams provide information about devices on racks, such as servers, as well as operating system, power, and configuration information. Inventory management documents are used to keep track of inventory or assets (things worth of value to a company).


MTTR (Mean Time To Repair) is a document that states how long it will take a certain device to repair or fix.

MTBF (Mean Time Between  Failures) is a document used to give information on the lifespan of a device. MTBR doesn’t exist.

## Module 17: Troubleshooting Networking (1.25hr)

**7-step methodology**

1. Identify the problem
2. Establish a theory of probable cause (consider the OSI Model and work your way down.)
3. Test the theory to determine the cause
4. Establish a plan of action, and identify potential effects
5. Implement the solution, or escalete if nessessary
6. Verify Full System functinality, and implement preventative measures
7. Document Findings, Actions, and Outcomes

[TODO] THink of mnemomic

**CLI Troubleshooting**

Commands you should know. 
==Linux==
ssh - To connect to a router
man - manual page
arp - learn the arp cache. 
`nslookup [uri]` - resolve IP address of a domain address. Does DNS lookup.
`dig` - query a DNS (Domain Name System) server. gives you aliases and shit.
host - like dig, but who handles mail, AAA, etc.

ifconfig - gives more info like ipconfig. Physical address, Lease, DHCP.
ping - check availability - verify basic network reachability that relies on ICMP (Internet Control Message Protocol) messages.
`iptable` - set up firewall rules on host
sudo - super user do
`tcpdump` - requires sudo. analyze what packets are going through a computer's NIC (Network Interface Card).
`nmap` - it tells which ports are available. is an open source tool that can be used to scan for computer’s IP addresses and can even gather more information than that.

`traceroute`

==windows specific==
nbtstat - 
`netstat` -  displays active connections a computer has to a network or to the internet.
`nslookup` - 
`ipconfig` -  ipconfig is used to display TCP/IP information on a Windows host, as well as Domain Name and DNS server information
ipconfig /release to release from the default gateway

`ping` - check availability

route print - to see all Routing table
tracert - see reachability & hops of a desintation. Like  like traceroute.
`pathping` - it's ping AND tracert. 

`arp -a` - To display the ARP (Address Resolution Protocol) table on a Windows host, t


**Network Application Commands**

Cisco IOS Router

Commands: 
`show config` - shows status NVRAM. The bootup one.

`show running-config` - show commands that you may have changed.
`show startup-config` - like show config

`running-config star` (`copy run star`) - copies running config to startup config

`show ip route`
 
`show ipv4 route`
`show ipv6 route`

`show ip int brief` show the interfaces, IP addresses, 

`show interface {interface_id}` - show a specific interface and stats.
It'll show you that the hardware is up, and the protocol is up. That's `up-up` mode.
Its in Full Duplix, and how many packets/bytes. 
Full duplex - which means it sends & recieves at the same time.
Cyclic Redundancy Check - see if the checksum value is the same as we calculate. Else, it'll show errors.
giant

![](https://i.imgur.com/YPnzJMN.png)

Giant is that if there's any errors. Giant is greater than 1580 bytes. 
Jumbo frames can be 9000 bytes! And also if there's a Frame Check sequence error.

The opposite errro types is a runt. Where it's less than 64-bytes. 
Any encapsulation errors. 

`debug ospf hello` displays Cisco hello stuff. 
`undebug all`

**Device Metrics and Sensors**

Commands to test temperature memory CPU sensors

How to find it from a Cisco catalyst switch

`show env temperature`

`show processes memory` 

![](https://i.imgur.com/g6NIYUF.png)

`show processes cpu`

**Environmental Metrics and Sensors**

What about data centers

Like temperature, humidity, power, and water.
We can use sensors like 
SNMP Manager, with agents and MIB.

It fires a SNMP Trap. 

* Temperature and Humidity Sensor. 
* Uniterruptible Power Supply (UPS) 
* Water Level Sensor (like in basement... flooding. Even shows depth.)

**Common LAN issues**

Attenuation - it's when the cable/signal is weakened from time.

Latency - degrade quality. 150ms for voice.

Jitter - if a voip packet, data, then voip packet... will create jitter.

Crosstalk - if two electric fields happen to cross. It's why we have twist cables.

Electromagnetic Interference (EMI) - like electric spike from a microwave. Fiber optics doesn't have to deal with that.

Open/Short - when there's a break on cable. 

Incorrect Pin-out
Incorrect cable Type
Bad port
Damaged Cables 
Bent Pins
Bottleneck - 
VLAN Mismatch - 
Network Connection LED Status Indicator

Transceiver Mismatch - 
TX/RX Reverse - like 2PCs, need a crosswire.

Duplex/Speed mismatch  - full duplex/half duplex.

**Common Wireless Network Issues**

Reflection - radio waves moving into a weird way.
Refraction - radio wave going through watercolor or cinderblock Refraction is the bending of an RF frequency if it's passed through a different medium. 

Absorption is a property in which signal can get lost by an undesired source absorbing the signal.
Attenuation is a natural property that occurs as a reduction of signal when the distance from the source increases. This property applies to wireless signals from an AP, especially if not configured properly, or if there is something blocking the signal.

EIRP - effective isotropic radiative power - how much signal power is sent from the access point's antenna
incorrect antenna type - 
interference - microwave
incorrect antenna placement - like coverage area in the parking lot. You don't want that. 

channel overlap - Or channels conflict. like 1, 6, 1...
Association time - DHCP - access point isn't working right.
Captive Portal Issues - DNS was hardcoded and it fucked up.
AP Disassociation - session/idle timeout.

Overcapcity - where too many clients on a Access Point.
Distance Limitations - where radio power isn't working.

Wrong SSID
Wrong Passphase
Security Type mismatch - like TKIP when it's supposed to be WEP
Power Levels
Signal to noise ratio - the bigger ratio, the better.

**Common Network Service Issues**

Name Resolution - DNS server was not doing it's job. Ping DNS server... and see if that's the case.
ping 8.8.8.8 and if that works... then you can go out to the internet.

Wrong Default Gateway IP - 
Wrong Subnet Mask - which bits talk to network portion, and which one to host portion.
Overlapping IP address - 
Overlapping Mac address - this can fuck up the mac table. Instability, frames will not be delivered. You can statically configure it with malicious intent.

Non expired IP address. 
Rogue DHCP - use DHCP snooping to solve.

Untrusted SSL Certificate - a Secure Sockets Layer. Which contains a trusted-third party, a CA, like Docusign. Running a local host with a self-signed certificate. So you need to make a exception.

Wrong time - The device reading the time... NTP. 

Exhausted DHCP scope  - maybe we're out of dhcp pool. A church that handed a class C network with 200 IPs available. All those devices exhausted the scope, and people weren't able to connect to the public wifi. Had to switch to a /24 subnet, to a /16 subnet. 

Blocked ports. 

Incorrect Firewall Settings or Incorrect ACL settings - need to know the exact ports
Service not responding - restart a service.

Hardware Issue 

**General Networking Issues**

Device Misconfiguration - is the settings correct.
Missing Routes - routers not talking to you correct

Routing loop - When a packet goes through a router, it still has a TTL, which will disappear. Versus a switch, which doesn't trigger a TTL.

Interface - Giants or runts?

Baselines - what's error rates of stats of things.

Collision - when mostly with hubs, which collides data. Can still happen in a wireless network.
Pre-wifi version 6.

Broadcast storm - loops through Switches. You can fix with STP - spanning tree protocol setup.

Multicast FLooding - flooding can impact network performaance. use PEM sparce-mode. 

Asymmetrical Routing - if routing goes through 1, but data is returned to another

DNS issue - you can check the DNS server

NTP issues - certs expiring because time is goofy

BYOB issues - BYOB policies.

License issues - trial version ends. 

**TEST:**
Attenuation is a natural property that occurs as a reduction of signal when the distance from the source increase. When there is a gradual reduction in signal strength with an increased distance from a source, it's because of Attenuation.

 sh arp is used on a Cisco device to display the ARP table.

The commands used to verify TCP/IP information on hosts are ifconfig (for Unix and Linux hosts) and ipconfig (for Windows hosts)

For wireless:
* Variance in Delay is known as Jitter which is measured in Milliseconds. 
* Delay is the amount of time it takes for a packet to travel from one point to the next measured in milliseconds. 
* Latency describes the amount of time a delay takes. 
* Absorption is a property in which signal can get lost by an undesired source absorbing the signal. 
* Loss is a reduction in attenuation as it spreads through a space.

> A technician was tasked with configuring computers to automatically receive their IP address information instead of using static addressing. When the technician carried out the migration, he noticed that many computers got an address in the 169.254.0.0/16 range instead of in the 10.1.1.0/24 range. During the previous day, all the computers were working properly. Which of the following could have caused this issue?

Since the technician noticed that the computers did have proper IP addresses the previous day and now don’t suggest there may be a problem with DHCP. Not to mention that an address in the 169.254.0.0/16 range suggests APIPA addresses are being used. Automatic Private IP Addressing (APIPA) addresses suggests that a host can’t find a DHCP server, and thus assigns itself an address in the 169.254.0.0/16 range in hopes of it can be able to communicate to hosts within the broadcast domain.

> You are designing a wireless network so that a technician can go out and configure the access points. At the moment, you are choosing an SSID for the network. You choose to use the SSID ‘Enterprise network’ on one AP and ‘enterprise network’ on another AP. All the other settings are configured to be the same. When you verify if the wireless network is functional, you notice once you reach some distance from the first access point corresponding to the ‘Enterprise network’ SSID, your signal drops. Which of the following most likely caused the issue?

Based on the description, it can be seen that the SSIDs (Service Set Identifiers)configured on the respective access points are different, which is causing the signal to not be spread, thus causing the host to lose connectivity. Wrong antenna types and interference might cause a similar issue, but based on the description, it is seen that there are two different SSIDs, which is the real issue. Configuring the same SSID on the access points wouldn’t cause this problem to happen.

> You have been tasked to move your organization’s IP addresses from static to DHCP assigned addresses. The only consideration is some hosts will still require static addressing. Later, you discover a host that got its IP address assigned by DHCP can’t communicate on the network. Which of the following could have caused this issue?

Given this situation, if a host received a duplicate address, it won’t be able to communicate in the network. The solution in this case would be to give up the leased address on the host and possibly look at addresses you could exclude on the DHCP server. If the default gateway was incorrect, the host could still communicate within the subnet. A DNS server being down wouldn’t affect network communication in this case. A computer can’t have a duplicate MAC address unless explicitly you explicitly configure one. Also, there is rarely a need, if ever, to change a computer’s NIC (Network Interface


> Which of the following might happen to a host that can’t reach the DHCP server after the specified lease time?

If a host can’t contact a DHCP (Dynamic Host Configuration Protocol) server, 2 things will happen: 1. The host will assign itself an APIPA (Automatic Private IP Address) and 2. The host won’t be able to communicate with hosts outside of the subnet because the host won’t have a default gateway set as default gateway information is given up once the lease is passed. ARP (Address Resolution Protocol) is a Data Link protocol used to dynamically map an IP address to a MAC address. ARP doesn’t provide automatic address assignment.


## Module 18: Prepping or CompTIA Network+ Exam 


THREE THINGS TO DO:
1. Get objectives --
2. Schedule study time. 
3. Get your hands dirty. 

![](https://i.imgur.com/KvC1A3M.png)

The URL: https://comptiacdn.azureedge.net/webcontent/docs/default-source/exam-objectives/comptia-network-n10-008-exam-objectives-(5-0).pdf?sfvrsn=8d00a1d7_2


EXAMPLE: Plan your schedule time -- 
Like 8 hours per week.
1 hr/day - M-F 
3 hrs on Saturday.
15 hours of hands-on


Getting hands dirty:
* Use non-prod computer
* Buying a home lab
* Hands-on Lab simulation -- bit.ly/netplussim


**Exam Day**
1. arrive early
2. determine your required pace (like 90 questions, that means 90 minutes.)
3. Begin with confidence. 



## Module 19: Wrapup

















