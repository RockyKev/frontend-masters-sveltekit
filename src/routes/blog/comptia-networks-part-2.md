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




### Common Defense Strategies


## Module 15: Monitoring and Analyzing Networks (.5hr)



## Module 16: Examing Best Practices for Network Admin (1hr)



## Module 17: Troubleshooting Networking (1.25hr)



## Module 18: Prepping or CompTIA Network+ Exam 



## Module 19: Wrapup