---
title: CompTIA Networks
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



## Module 1: Intro (1hr) - DONE

![](/media/comptia-blogpost/m1-headers-1.png)
![](/media/comptia-blogpost/m1-headers-2.png)
![](/media/comptia-blogpost/m1-headers-3.png)
![](/media/comptia-blogpost/m1-headers-4.png)


To remember the OSI Stack: 
![](/media/comptia-blogpost/m1-osi-model-pizza.png)

Breaking Bad:
"Please do not throw sausage pizza"

Physical
Datalink
Network
Transfer
Sessions
Presentation
Application


![](/media/comptia-blogpost/m1-osi-model-data.png)

And this is:
Bacon for Poor souls

Bits
Frames
Packets
Segments

![](/media/comptia-blogpost/m1-ports-and-protocols-1.png)

![](/media/comptia-blogpost/m1-ports-and-protocols-2.png)

![](/media/comptia-blogpost/m1-ports-and-protocols-3.png)


## Module 2: Network Pieces and Parts (1hr)


**Hubs and Switches**
![](/media/comptia-blogpost/m2-switch.png)

![](/media/comptia-blogpost/m2-hub.png)

Hubs were dumb. They did not know where things are. All it was doing was taking packets.

If laptop 1 and laptop 2 was trying to send a packet out at the exact time, the hub would warn them and they both would set a random timer to send it again, hopefully avoiding collision

The Switch became the next gen, and it started to focus more of sorting data

Empty table. But if you were sending something to a Mac address, say printer at CCCC, the switch would flood that message until someone received it. Then it'll note both addresses in their table.

**Routers**
![](/media/comptia-blogpost/m2-router.png)

Router focuses on just knowing it's neighbor.

How does it know the internet? It used 0.0.0.0 and that's a default routing.


**Collision vs Broadcast Domains**
![](/media/comptia-blogpost/m2-collision-vs-broadcast-domains-1.png)
![](/media/comptia-blogpost/m2-collision-vs-broadcast-domains-2.png)
![](/media/comptia-blogpost/m2-collision-vs-broadcast-domains-3.png)
![](/media/comptia-blogpost/m2-collision-vs-broadcast-domains-4.png)

Collision domains are old networks where packet colliding can hsppen

Broadcast domain are where networks call out to identify their Mac addresses with each other

How does it work with routers? Routers ignore broadcasts and create subdivides

Remember network 1 2 and 3? They can broadcast inside each other


**IDS/IPS, and DMZ**

![](/media/comptia-blogpost/m2-intrusion1.png)
![](/media/comptia-blogpost/m2-intrusion2.png)

![](/media/comptia-blogpost/m2-dmz.png)

Intrusion Detection System - lives inside

Intrusion Prevention System - lives on the wire

Firewall

IDS - a packet goes through firewall, and then goes to the multilayer switch and splits traffic between ids sensor and client.
The ids sensor notices something fishy and hardens the firewall.
The client is still attacked dwihr a single packet.

Ips is in line and detects ahead. He could ha w also included a firewall pic.

Lastly, the way firewalls work is, if a computer is going out to the internet, the firewall bundles all the details so when that packet returns, the filewall knows it was intensional. It knows who asked for it, and where to bring it.

**Proxy Servers, VPN, Advanced Filtering**

![](/media/comptia-blogpost/m2-proxy.png)
![](/media/comptia-blogpost/m2-advance-filtering.png)
![](/media/comptia-blogpost/m2-vpn.png)

New firewalls can now look at massive datasets to block malicious packets, if they match a specific footprint. Remember that packets are encrypted. And prior tech used to unpack and decrypt, which was slow

Vpn connector is useful for remote workers. It's main job is to handle all the vpn connections, as opposed to a server

Proxy server isn't used much because of high speed internet. Prior, say at a university... Proxy server would fetch yahoomcom for one student. And when another student wanted to see yahoo as well, it just goes into the proxy cache. It's great for low bandwidth stuff.


QUESTIONS:
Which of the following devices operate at layer 2 of the OSI model?

Bridges and Switches both operate on the data link layer. Both devices also do intelligent frame forwarding, meaning they do frame forwarding based on destination MAC addresses. Hubs operate on the physical layer. Routers operate on the network layer and make forwarding decisions based on destination IP addresses.


## Module 3: Topologies (1hr)

**Star Topology**

CONS - the single star if fail will die.

**Mesh Topology**

Full Mesh - everything is connected.
PRO: 
* Optimial Path

CON: 
* More expensive

Partial Mesh - we strategeically put links between traffic
PRO: 
CON
* Suboptimal


**Ring Topology**
LEGACY: 
So the prior method usiong CDMA, to avoid collision.

Token Ring -- goes in a circle sending a token.
The token takes the data, and moves through the system. 

FDDI - it uses counter-rotating, two rings.

[ADD PICTURE0]

MAU -- it becomes a star.

**Bus Topology**
LEGACY:

CSMA/CD -- Carrier-sense multiple access with collision detection

It listens to the same bus.
If there's a spike in the voltage, it will wait.
uses a random back off timer. 

If you thow a point a connection in the middle - it becomes a star.

**Point-to-Point Topology**


Router connects to router 
Typically a Layer 2 protocol
Could be physical point-to-point (P2P)
Could be a logical point-to-point counter.



**Client-Server, Peer-to-Peer** 

Client Server: 
![](https://i.imgur.com/rlWKWzd.png)

If PC1 wants to talk to PC3. 
It's when clients access a server to access resources.


Peer-to-Peer Network:

![](https://i.imgur.com/T9fTiuO.png)

Just let PC4 share the data.
Just let PC1 share the printer.

Cons is that there's no overwatch.



**LAN, WAN, MAN, CAN, PAN, WLAN, SD-WAN**

TODO: Memorize all those words. 

### LAN - Local Area Network

In an office. 
* Fairly High speed
* Centrally Located. Not spanning more than one building.


### WAN - Wide Area Network

Two geographical locations. Like HQ, and in another building, BR1.
Usually a Lightning bolt. If it's dotted, it's "On-demand". 

* Typically slower than LANs
* Geographically Dispersed Sites
* Sites Connect to Service Provider

A replacement is a VPN. It just sends to the cloud.

### MAN - Metropolitan Area Network

Example: Chicago

John Hancock Center
Willis Tower
Tribute Tower
Chicago Board of Trade

* Limited Availbility -- since it's usually in metros.
* Very High Speed
* Redeundant 

![](https://i.imgur.com/TqomcMt.png)

How to avoid clashing customers?
LAMBDA. 
Different customers have different lambda. They use a different light. 

### CAN - Campus

Can be university, or even tech companies. 

![](https://i.imgur.com/K3ymz7f.png)

Done with conduit systems, or a central place.

* Very High Speed
* Nearby Buildings
* Easy to add redundancy (So there's no single point of failure)

### PAN - Personal

Smallest. Connects TWO devices.

* Wireless controller 
* Remote.
* Smart phone -> Speaker

Infrared or Bluetooth.

### WLAN - Wireless LAN

![](https://i.imgur.com/q85y78W.png)

Communicates wave through a Access Point.
The Access point talks to a switch.
Using radiowaves.


* Adds Flexibility and mobility for connections

CONCERN: 
Radiowave collision.
Switch channels. 


### SD-WAN - Software-Defined WAN 

![](https://i.imgur.com/y0wMNn0.png)
MPLS, MetroEthernet...

Connect remote sites back to a central site using various WAN technologies.

Predictable performance and security

ISSUES:
* Traffic backhauling might be required

Modern SD-WAN Connections

![](https://i.imgur.com/oNRc0PD.png)


Applications are migrating to the cloud, to provide security.
provide seucrity, QoS, and forwarding


You have the Physical Infrasture -- everything is a wire. It's called a 'Underlay Network'. 
But the SD-WAN Controller, it's a Virtual Infrastructure. It's called the 'overlay network'. 

Here's how SD-WAN controller --

* it decouples from the router. 
* Can use a wide variety of technology
* The forwarding decisions is made by the SD-WAN Controller.
* Can provide configs to provide consistent QoS, Security, and predicable contorller. 



### Industrial Control Systems and SCADA
SCADA
Supervisory
Control
And
Dada
Acquisition 

For example - a pond... we want to monitor it.

![](https://i.imgur.com/wXDUrDc.png)

CONTROL 1: We need a water level sensor, to check Temperature, water level, and a control system. 
CONTROL 2: We'll need  water pump to pump water.

RTU: To manage the controls. 
SCADA Master: That's managing all the RTU.

So a situation where it rains. 
The water sensor notices it, and tells the RTU. The RTU switches on the pump. 
The RTU then let's the SCADA Master know.




## Module 4: Understanding Networks (1.5hr)


ATM (Asynchronous Transfer Mode) is a technology used by service providers to switch data using fixed cells of 53 bytes. 

MPLS (MultiProtocol Label Switching) is a Service Provider technology used to switch 
data based on labels, instead of addresses. 

Frame Relay is a layer 2 protocol that specifies the framing and structure of Frame Relay frames on the perspective WAN (Wide Area Network) network. 

PPP (Point to Point Protocol) is a layer 2 encapsulation protocol that provides features such as authentication and compression, typically used on WAN (Wide Area Network) links.

### VPNS


Remove Access VPN

![](https://i.imgur.com/jnwzfp6.png)

Let's you share private stuff over the internet.

What about when you want to share a local print job? You don't need that overhead.
So you can use a Split Tunnel, which keeps local traffic flowing over the VPN.
(Versus Full Tunnel)


Site-to-Site VPN

![](https://i.imgur.com/mo7qEmH.png)


VPN Concentrator, let the router deal with the data encryption and etc.

VPN uses GRE tunnels -> IPSec tunnels to transfer data.

### VPN Protocols

**GRE Tunnel**
Generic Routing Encapsulation

![](https://i.imgur.com/FbdKqzz.png)

1. It does not provide security
2. Can encapsulate nearly any type daa.

**IP Security (IPSec)**

![](https://i.imgur.com/gUfw0TY.png)

1. Provides
Encyprtion, hashing, Digital Signatures, Applies serial numbers to packets (So sniffers can't recreate it)

2. Can encapsulate unicast IP Packets

3. Two modes
  Transport Mode: Use packets original header
  Tunnel mode: Encapsulates entire packet

4. Authentication and Encryption
  - Authentication Header: Authenticates an entire IP packet
  - Encapsulating Security Protocol (ESP): Can autheneticate an IP packet (not including the IP Header), and can perform encryption.

5. Setup Steps
  Step 1 - Establish an Internet Key Exchange (IKE) Phase 1 tunnel (aka internet security association and key management protocol (ISAKMP))
  Step 2: Establish IKE Phase 2 Tunnel. 


**GRE over Ipsec, a best of both worldd**

![](https://i.imgur.com/l2Ls0ND.png)

1. Take the GRE tunnel, and encapsulates that traffic type into GRE packets. 
2. Since IPsec only takes unicast IP packets, GRE packets will work. So IPsec converts it and sends it over.


### Dynamic Multipoint VPN 

![](https://i.imgur.com/dvPfYTl.png)

HUB: HQ
SPOKE: Branch A, B, and C

BEFORE: If Branch A wants to connect to Branch C, it'll have to talk back to HQ. 


![](https://i.imgur.com/i3MCknl.png)

NOW: With Dynamic Multipoint VPN. 
It uses Multipoint GRE (mGRE): 
and Next Hope Resolution Protocol (NHRP): Used to discover the IP address of the device at the far end of a tunnel.



BUT -- how does Branch A talk to Branch B and even set up that Dynamic Tunnel?

It maintains a database:
![](https://i.imgur.com/UvV4sF7.png)

It'll say, you want to reach 10.0.0.2 at their real IP -- over the public internet.

NHRP Query - 
"What's the Physical IP address of IP Address 10.0.0.2" to the hub.
It's your message.


DHCP
SDN


### Web Services & Voice Services

**Web services**
![](https://i.imgur.com/vdiUvJx.png)

Ephemeral port number for the source. Like 56000+

The source IP: 
Destination IP:
Source Port
Destination Port: 

**Voice Services**

![](https://i.imgur.com/2RUcdNp.png)

Before to connect phones -- they used to own a PBX (private branch exchange)

PBX is like a phone version of a switch.
EXAMPLE: 
* 6000 phones, you don't connect it to the Phone Company. 
* You can connect them to each other, and only 200 phones are actually outbound. 
* And if it was in another building, it'll go over something called 'a tieline'.

TODAY, what if you use PBX but with routers?
![](https://i.imgur.com/9eQPjvy.png)



What about IP Based Phones?
![](https://i.imgur.com/622zktO.png)

The PBX replacement is 'the Call Agent.

SIP - session Initiative Protocol. 
That's the data type for voip.

1. So x3800 wants to talk to x1012.
2. The Call agent will figure out all the code, and then moves that message config to x1012. 
3. x1012 accepts and then a direct communication will occur. Call Agent doesn't need to do anything any more.

RTP - Real-time transport protocol (RTP)

A transport layer protocol that carries voice/video media.


### DHCP

Dynamic Host Configuration Protocol (DHCP) theory

![](https://i.imgur.com/n8d7HbE.png)

Computer talks to switch, that connects to a DHCP Server.

4-step process:
DORA - 
D - Discover -- it's a broadcast. (Anyone there?)
O - Offer. It's unicast. (Here's my IP address.)
R - Request. It's a broadcast. (Can I have a IP Address?)
A - Acknowledgement. It's a unicast. (Sure can!)

The computer is at 0.0.0.0, before a IP address is sent.
Well, the DHCP Server is actually talking directly to the MAC Address.


NOTE: Router stops broadcast --
So Laptop A cannot talk to Laptop B. 
To avoid that, the router becomes a DHCP Relay/IP Helper. 
That allows it.

![](https://i.imgur.com/lqELsuM.png)

DHCP Features:
* MAC reservations. (like keep the printer to always assign X address)
* Pools (aka Scopes) (different pool for diff subnets, like 192.168.100, 172.16.1.100)
* IP Exclusions (Don't include these IPs)
* Scope Options 
  ( Like give the Default gateway, DNS server, or change the TTL, or Option 150.)
* Lease Time
  If it will expire in 8 days... to renew
  T1 = ask on 1/2 of lease time (4 days)
  T2 = ask again on 7/8 lease time. (7 days0)


![](https://i.imgur.com/OX83DNJ.png)

### DNS

![](https://i.imgur.com/ncquOd7.png)

![](https://i.imgur.com/nIIQGuG.png)
1. Your computer wants something, so it sends `website.com` to the internet.
2. DNS server takes that, and sends back to your computer the ip address.
3. Your computer then pings that ip address.


DNS Terms:

Authoerative Name Server - 
Where it will forward requests. 
Like .com will forward it to the right data spot.

DNS Zone Transfer - 
When you send your DNS Zone updatse from a priamry to a secondary.

Reverse Lookup - 
When you query a DNS server for a domain name with a specific address.
So it takes `www.website.com` and returns IP address.

Internal DNS - 
Like one for only internal offices and workplace.

External DNS 
This is for the intenret.

VPN - How someone on the internet to connect to the internal.
Like working from home.


DNS Record Types:
![](https://i.imgur.com/Hywfwji.png)

A -- Address
AAAAA - IpV6 address
CNAME - another name for that record. Alias.
MX - mail service account.
PTR - Like a CNAME. Used when performing Reverse Lookout.
SOA - Start of Authority - A informational record.
TXT - To contain descriptive human text. Now it sends attrs/values.
SRV - A record to point to other specific services. Like more generic MX record.
NS - Tells a DNS zone to use specific name servers, for security reasons.

### NAT Theory

The most common method for ipv4.:

How do you connect to other computers locally?
What IP Address do they get?

RFC1918 --
This specifies private IPv4 Address spaces. Stuff you can routed within an org but not on public internet. 
PRIVATE: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16

Can route them just fine in the network.

![](https://i.imgur.com/LjWYyUM.png)
NAT-Enabled Router. 

![](https://i.imgur.com/xEgZ9M5.png)

NAT-enabled router changes the source IP and makes a special IP to the internet.

They have a table

Inside local
outside local
inside global
outside local

![](https://i.imgur.com/j26IbU0.png)

This ALSO ASSUMES that the internet service provider is giving you a POOL of addresses. Which it doesn't!

Inside means... you can access.
Inside Local -- It's IP addresses you can access from your computer directly.
Inside Global -- It's the source IP, which again, you can access! 

Outside Global - It means that it's completely outside of our network.

Outside Local - Rarely will see this.

QUESTION:
How does this work int his sitaution?
Your own home network. 1 IP address. But you also have a bunch of devices.

A variant of NAT - 
Port Address Translation (PAT) Theory

You have to share the IP, but different port numbers.

Client 1 pings that server, but uses a very specific IP. 
![](https://i.imgur.com/BPs1V2y.png)

Port Forwarding/Port Mapping -- It's PAT in reverse!
![](https://i.imgur.com/aE07MR7.png)

Computer wants to talk to another computer. 
The Port Mapping Router sents it to the SSH Server.
The SSH Server takes that number, and sends it to the correct port.

### NTP

Network Time Protocol (NTP) Theory

Why do techies need accurate time?
* Logging errors.
* Digital certificates to exchange private data. Have experation dates.
* IP phones. 

Atomic clock C-133 elements, which vibrates 9mil times. That's 1-second. 

So we want a router, that points to that Atomic Cloud.

NTP is as easy as 123. 
Port 123. 
Statum number... measure the beliebability of a time source.

So Router talking to Internet Atomic Clock -- Stratum = 1
A SW1 talking to Router -- Statum = 2.

It allows that info to propogate.
BUT, if the place is a statum grater than 16, then it refuses it.

### SDN

BEFORE: 
It was time consuming to spin up a network real fast. 
Like after a major football game, traffic will flood. So you set up a bunch of networks.
But you can't just CLI into each one manually.

NOW:
Virtual Machines, set up load balancing.

SDN - three planes.
Management Plane - In charge of access that router/switch. Like running SSL, but to your virtual machine that duplicates the commands. 


Control Plane - In charge of figuring out protocol types.
Populating the router to make forwarding decisions.

Data Plane - It's just figuring out data. 

SDN Controller talks to the Management Plane with an API.
![](https://i.imgur.com/xHY3uVV.png)

We call those devices... Southbound Interfaces. (SBI)

This is called a Centralized Control Plane. 
Using OpenFlow.

We use Applications to communicate the SDN Controller, using
Northbound Interfaces. (NBI)

north of the SDN Controller is like... application, your program.
south of the SDN controller is like... the devices themselves.




![](https://i.imgur.com/l5IK5jv.png)

### IOT

Camera that talks to Phone. Microwave that talks to watch.
Lightbulb.

Drivers:
* Thanks to High speed internet widly available
* Wi-Fi in the devices
* Smart phones 


Sample Applications
* Predictive maintence (your car telling your phone that it needs aire)
* Self-optimization production (if factory 1 fails, it tells factory 2.)
* Automated inventory management (The monitor tells corona how much is left on the keg. If low, it tells corona to send another one)
* Home automation
* Health monitoring - 

Supporting Technology
* Z-Wave - like honeywell, using a mesh topology. Using 900 mhz band (not 2.4ghz)
* Zigbee - not compatbie. Faster. Competitor to Z-wave.
* ANT/ANT+ - heartrate monitor
* Bluetooth - Lowpower transfer. Speakers to phone,.
* NFC - Near-field communication using your credit card
* IR - Infrared (IR), direct line of sight. 
* RFID - Radio frequency, using iPhone tags.
* IEEE 802.11 - wifi standard.


### SIP Trunks

PSTN - Old phone world
ITSP - to connect us to phones around the world. Using a SIP Gateway. 

BEFORE: 
You have 200 phones that you pay the phone company to create a wire for.

AFTER: 
You have 200 phones that are controlled by a Call Agent, that sends it through a SIP Gateawy, that goes to the ITSP Internet.

![](https://i.imgur.com/TX7clxg.png)
SIP Trunks - It's the negotiation level.

1. Starts the negotiation, using SIP.
2. then RTP deals with the actual call.


## Module 5: Selecting WAN Technologies (1hr)

**Cellular** 

```
Smart Phone -> Cell Tower -> Service Provider's Ground Station -> Internet
```

1G - Analog Voice
2G - Digital voice and added support for GSM, and CDMA
25G - Packet Switching
2.75G (EDGE) - Increase Data rates
3G - Better data rates, UMTS and CDMA2000
4G - 100 Mps download at least
4G LTS - 20 Mbps-100 MBps
5G - Higher speed, lower latecy. Like for Cars.
  mmWave - light posts or traffic. 
  Sub-6GHz - uses 


**Satellite** 
![](https://i.imgur.com/qe4tvMH.png)

VSAT - 
Very Small Aperture Terminal (VSAT)
Wan Tech that uses small satellite dishes connected to a network and supports 2-way communication. 

(Not like Sat TV, which is single direction.)

* Usually the dish is less than 3 meters. 
Great for remote locations. Or a oil rig. Or a ship that uses some VSAT technology. 

* 12 Mbps to 10 Mbps.

* Date experiences more delays. Thousands of miles to travel to up, then down back to the ground. And weather conditions. 

**Cable**

Cable Modem. 

![](https://i.imgur.com/5vNHtX3.png)

Hybrid Fiber-coax (HFC) Distribution Network: 
A cable companies infrastructure for both. 

Data-Over-Cable-Service Interface Specification (DOCSIS): 
A set of standards specificying the diff feq ranges in a cable TV Network.

Cable Modem termination SYstem (CMTS)

Max download/upload speed. 

**PPP**

Point-to-point protocol Features - It's a Layer 2 Protocol.

1. Authentication  -- CHAP vs PAP:
PAP (Password Authentication Protocol) - Sends login credentials across network. (Cleartext)
CHAP (Challegne Handshake Authen Protocol) - Encrypted version. 

2. Compression - A feature. 

3. Detect Errors and Correct them.
He's not a big fan of this feature. 
If it detects it and uses a copy. 

4. Multiple Links

MLP - Bundles Multiple phyiscal links into a single logical link, which improves throughput. 


**PPPoE**

![](https://i.imgur.com/hPilXWR.png)
Layer 2 protocol (Datalink)

It's ability to do authentication. Using PAP vs CHAP. 

We can use PPPoE -- Over Ethernet. 

DSL is data over the phone line. 


1. Your DSL modem wants to connect to the internet.
2. The (DSLAM) - DSL Access Multiplexer needs to confirm you have access.
3. It needs to take user/pass data to auth server.
4. It uses a PPPoE to get that, to send to the Auth Server.

**DSL**

DSL is data over the phone line. 

ADSL - means asymetric. Higher and data. 18,000 feet.
Symmetric DSL - same upload/download.  12,000 feet.
Very High DSL - 4000 feet.

DSLAM - 18000 feet between modem and DSLAM.
To fix that, they use Load Coils, installed every 18,000 feet.


**MPLS**

Ethernet Switching is considered a Layer 2 technology.
Layer 2 mac address.

Routers make decision at Layer 3. 
More like IP addresses. 

![](https://i.imgur.com/CxLoeP9.png)

MPLS isn't really a layer 2 or a layer 3. Contains layer information.
ANd goes between both headers.

it makes a forwarding based on Labels, in a `sham` header.
It doesn't need to use lower-powered routers to make decisions based on labels, versus the massive amounts of IP addresses. The restriction is no longer (as routers are faster.)
Good case - you can also use VPN and others.


![](https://i.imgur.com/X50hjpJ.png)

Each Thing makes it's own labels for all the others.
And it doesn't forward based on IP, it forwards based on label.

![](https://i.imgur.com/S5OZkPy.png)
Customer Edge Routers (CER) sit on the Location itself.
Provider Edge Routers (PER)

Label Switch Routers (LSR) - They live only within the MPLS service provider and do not connect to any networks.

**Metro Ethernet**

Office locations in a Metro Area Network.

Metro Etherent Provider.
It uses a traditional Ethernet connection. As high as 400 GB per second.

It could be: 
* pure ethernet. 
* Ethernet over SDH (Synchronous Digital Hierarchy) - a high-speed WAN tech that uses fiber optic cabling.
* Ethernet over MPLS
* Ethernet over DWDM - optical WAN tech isolating customers traffic through lambda lights.


### QUESTIONS

A T1 is a dedicated leased line that offers a speed of 1.544 Mbps. A T3 is a dedicated leased line that offers a speed of 44.736 Mbps. 

An E1 is similar to a T1 line, but is used in European countries. E1 lines offer a speed of 2.048 Mbps. An E3 is a dedicated leased line that offers a speed of 34.268 Mbps. 

PPPoE (Point to Point Protocol over Ethernet) provides features such as authentication over Ethernet networks, which is useful for ISPs (Internet Service Providers). 

PPP (Point to Point Protocol) provides the features that PPPoE uses, but only for serial links. 

ATM (Asynchronous Transfer Mode) is a technology used by service providers to switch data using fixed cells of 53 bytes. 
 
MPLS (Multi Protocol Label Switching) is a Service Provider technology used to switch data based on labels, instead of addresses.

Circuit Switched networks have a dedicated physical circuit with dedicated bandwidth. Fast Switching and Process switching are forms of packet and frame forwarding techniques done on infrastructure devices.

## Module 6: Connecting Networks with Cables and connectors (1.25hr)

### Cables

**Copper Cables - Coax**

It's braiding to avoid the EMI (electromagnetic Interface).

![](https://i.imgur.com/aMr1SfH.png)

Coaxial (Coax) Cables have a few - Ohms.
Inpedance - A circuit's oppposition to traffic flow (in ohms), which can have resistive, capacitive and/or inductive components.

Think of the name - 
Coaxial means -- Two conductors at the same central point (axis)

Coax isn't used much anymore.

New one is Twinaxial Cable. 
* Has 2 inner Conductors
* Most commonly used in Data Center. (at 40Gbps or 100 GBps)
* Limit to 7 meters

**Copper Cables - Twisted Pair Cable**

Unshiedled Twisted Pair (UTP)
Shielded Twisted Pair (STP) Usually with aluminum.
Plenum-Rated - Has insulation that won't release toxic stuff.

Categories of Twisted Pair cable

![](https://i.imgur.com/zGykVdt.png)
Category - common Use - Distance Limits
Cat 3 - 10BASE-T and 100BASE-T4 - 100m
Cat 5 - 100BASE-TX and 1000BASE-T - 100m
Cat 5e - same - same - but better electric defense
Cat 6 - 1000BASE-T, 5GBASE-T, and 10GBASE-T - 55m for 10GBASE-T
...

**Fiber Cables**
Fiber Optics is immune to EMI (electronic mode.)

![](https://i.imgur.com/7IxzvdP.png)
Light travels a bit slower than air in water. 
Notice in the picture:
  * the light refracts, causing the straws to be 2x size.
  * The inner tube (Core) is the data.
  * The outer tube (Cladding) is the padding. 

![](https://i.imgur.com/rf5Id6s.png)
2kilos of distance.

Multimode Fiber - 
* The red bouncing is slower
* The green bouncing is fast
But the data you receive, it's dysync and in error.
This is called Multimode Delay Distortion. 
When bits using one path of light (a mode) passing oup other bits using a different path of light. 

Single-mode Fiber - 
It's not bouncing. There's only 1 reliable path. 

### Connectors 

**Copper Connectors - RJ-11 & RJ-45**

![](https://i.imgur.com/jKX5bsb.png)
RJ-11 - it's more for phone. 6 slots.
  Can be RJ-14 as well. Terms use interchangable. 

RJ-45 - mostly for ethernets. 

![](https://i.imgur.com/M5UzwRT.png)
DB-9 & DB-25

D comes from the shape.

Used to be serial ports and mouse. Now modems.

![](https://i.imgur.com/6UBLsFa.png)
F-Type and BNC Connector. 

F-Type is for cables.

BNC - Looks like a bayonet neil consolents. 
No longer used.


**Copper Connectors - RJ-45 ... T568 Standards**
![](https://i.imgur.com/Gg4Sq3i.jpg)

There's 2 bodies that manage the controls.

American National Standards Institute (ANSI)
Telecommuncications Industry Association (TIA)

T548B is the current standard. 

STRIAGHT-THROUGH CABLE: 
![](https://i.imgur.com/8eOiUIK.png)
Let's say you're talking from computer to Switch.

Computer (The Media Dependent Interface - MDI)
Pin 1 & 2 is transmission.
Pin 3 and 6 is receiving.

Switch (Called the Media Dependent Interface Crossover - MDI-X) sets is the other side.
Pin 1 & 2 is recieing.
Pin 3 and 6 is transmissiing.

There's a feature called Auto-MDI-X, to negotiate which pins to pins. 

CROSSOVER CABLE: 
To connect two multiple computers, 
the pins are switched. 
To connect two devices of the same type together, such as two switches or two routers. 
![](https://i.imgur.com/YRfLkET.png)


WHY ONLY 4 PINS?
Notice that we were using only 4 pins. 
You can use splitting, to use the other 4 pins! 

![](https://i.imgur.com/Ed7CmQ4.png)

But this fucks up on higher speeds. 
Notice 1000BASE-T uses all 8 wires.



**Fiber connectors**

![](https://i.imgur.com/pmYHGyU.png)
ST connector - Straight Tip, or a Bayonet Connector.
The fiber is actually in that white tip.
Two connects, one for receiving and one for transitioning.

SC connector - Subscriber, Standard, Square connector. Typically used for with Multi Mode Fiber.

LC connector - A luncent connector, little connector. Typically used for Single Mode Fiber.


MTRJ - This one has TWO fiber strands. Does not have a bayonet End.
The others have only fiber strand (and ST uses two connectors)

Acronyms
![](https://i.imgur.com/52ECtbL.png)

UPC - Ultra Physical Contact 

So when two fibers connect (UPC), there's a little bit of a reflection happening (notice the arrows?) goes back in the other direction. It might actually damage the transfer.

![](https://i.imgur.com/JTjJN5D.png)
Angled Physical Contact (APC)
8-degree Angle
When it gets transfered, when it hits that inner point (APC), the reflection bounces to the cladding.
It will reduce the damage.

### Terms
**Media Converters**

The equipment to attach all type of connectors... The media Converter.

* Convert a single-mode Fiber to Ethernet.
* Or Multimode Fiber to Ethernet (Campus to Internet)
* Fiber to Coaxial
* Single-Mode to Fiber to Multimode Fiber 

**Transcievers**

To connect a ethernet switch

Use Transciver into the switch, for wahtever media type of what we need.
GNIC (Gibabit Interface converter (GBIC)) 1GB
SFP (Small Form-Factor Pluggable (SFP)) Transciever (In a datacenter) 1GB
SFP+ - Does 10GB  -
QUAD SFP - 4 GB transfer. 
QUAD SFP+ - This will give us a 40GB transeiver.

![](https://i.imgur.com/hxj22Pa.png)
This is a full-duplex Transeiver. 

![](https://i.imgur.com/w7STOkt.png)
Bidirectional Transceiver (BiDI Transciever) Will cost more.
This uses a single line, and a different light for transmission and receiving.  


**Termination Points - Punch-down Blocks**

66 Block - LEGACY - uses Cat3. Some Cat 5e.
You have things on the left and right.
You put a jumper int he middle two rows.

Usually, there's a hole in the cieling of a wiring closets carrying wires to another hole closets.
Lots of twisted pairs. Not Cat6 wires.
But a Riser cable. (usually 25, or 100 pairs)
Easier to drop 1 riser cable, versus 100+ cat6 wires.
Then you can put the Riser cables onto that 66 block.

![](https://i.imgur.com/Ldzmk1H.png)
Then there's cablse left and right. 

We don't use 66 blcoks because there's a lot of cross talk.

110 Block - Most common. Uses Cat6a.

And a punch Down tool, to use 66 or 110 Block.
The metal cuts through the installation to make electrical contact with the wire. 

Or a patch panel, which is a cleaner way to do it.
![](https://i.imgur.com/dFAKRkG.png)

You can then connect a rj-45 bit to a wire, and plug it in through here.
That lets you cross connect and know what office goes to where. 


ADDITIONAL: 
![](https://i.imgur.com/5Czzc3P.png)
Krone - German word for cornw
Alternative to 110 block.
Can support stranged conductors, in addition to solid conducters.


BIX (Building Industry Cross-Connect): 
Typically Cat5e 
GigaBIX exceeds Cat 6 specs.


**Termination Points - Fiber Distribution Panel**
For Fiber: 
You can't use a punch down tool on glass...
![](https://i.imgur.com/9raoHn0.png)

Fiber runs to different floors, and into the Fiber Distribution Panel. 


On a WAN, a circuit to you -- 
The responsibility is now on you.
Demarcation Point (Dmarc) and Smart Jack

When a network maintence responsibility passes from a WAN Provider to the customer.

![](https://i.imgur.com/NGJCK6K.png)
The Smart Jack - a device (commonly what they give you, the endpoint)

### More stuff

**Cabling Tools**
Crimper, cuts a wire to add a RJ45 Standard. (ethernet looking guy)

![](https://i.imgur.com/z48kBJD.png)
Cable Tester, see if all pings are going correctly. verify the integrity

Punch Down Tool - to hit the blades of the 60 block or the 110 blocks.

![](https://i.imgur.com/wjoyPL1.png)
OTDR - For fiber optic cables. Senda light down the cable to see where a loss/issue is.

BERT Tester - Bit error rate test. 
Check to see 1 and 0s match the patterns that we recieve on a heavy load, and rate of the error.
Very expensive.

![](https://i.imgur.com/YrrCWjd.png)
Light Meter - For fiber optic.
Put a light meter, attach the light to see what the strength is.
Possible reason for loss of light is that there's a limit to how much you can spin it. If it's too bend, the cladding will block data. Degrats signall.

![](https://i.imgur.com/mnaBW4e.png)
Tone Generator, or Toner Probe - Fox and Hound. 
For when you have hundreds of wires and you want to figure it out where it is.
Fox on a wire. Hound test to see which cable closet wire it's in.
A toner probe (signal tracer) is useful in locating a single ethernet cable within bundles of cabling or determining where a device is physically connected to.

![](https://i.imgur.com/fplg9cy.png)
Loopback Adapter - if you get a light back, then the wire is good.
Marco has been receiving tickets from technicians stating a switch has failed ports. You decide to inspect the switch and need a tool to quickly inspect the integrity of the port. A loopback plug is used to verify the integrity of a port. In this case, a switch's port

Multimeter - Check AC/DC, check zero resistence to see if the wire is broken.

Bandwidth Speed Tester (like speedtest.net)

Wire Map Tester - Like the cable tester, to see if the right wires are showing the right wire.

Cable Tap - Allow you to 'tap' into pick up things. Maybe to use to check if things are flowing.

Fusion Splicer - 
To split two wires together, or merge fiber optics. 
Melts the two strands together. 

Snips/Cutters - To cut a wire. To remove the Cat6, to attach a RF-45.

Cable Stripper - to strip the cable. 

Port Scanner - to check ports. 

Iperf - one is a client and one is a server and test the throughput between two devices.

Spectrum Analyzer - 
* Check that the wavelengths are working.  
* used to measure frequency in relation to an input signal.
* it can also be used in wireless networks to track interference problems

![](https://i.imgur.com/IzgzdBE.png)

You should describe the general reason for each tools. 

**Ethernet STandards**

You should need to know the ethernet standards. 
Like what is Cat5's max speed?

Copper Cabling:
![](https://i.imgur.com/HrfVA6m.png)

Fiber Optic Cabling: 
![](https://i.imgur.com/Jtd9cxQ.png)

MMF - Multimode fiber
SMF - Single Mode Fiber 

Multiplexing - Lambda 

Coarse Wavelength Division Multiplexing (CWDM): 
* Supports a max of 8 channels (or 18 channels over short distance), 
* separated by 20nm. 
* Max distance over 80km. 
* No amplifiers.
* Much more inexpensive.

Dense Wavelength Division Multiplexing (DWDM):
* Support max of 80 channels 
* Separated by 0.20nm. 
* Max distance is 3000 km. 
* Support amplifiers. 
* Much more expensive.

Bidirectional Wavelength Division Multiplexing (WDM):
* Let's a single fiber optic stand transfer and receive. (The other two two separate channels)
* This educes fiber cost, at the expensve of fewer channels. 
If you went with Bidirectional WDM, using DWDM -- it'll turn 80 channels into 40 channels. 


**TEST**
Category 8 twisted pair cable can support speeds as high as 25 Gbps or 40 Gbps, with a distance limitation of 30 – 36 meters.

Plenum should be used when running an Ethernet cable through AC (Air Conditioning) or HVAC (Heating Ventilation and Cooling) systems, . Plenum cable has a jacket that has characteristics which can stop smoke and stop/slow flames if they were to occur on the cable. When normal PVC (Polyvinyl Chloride) cable burns, it releases a toxin. MMF and SMF cables are types of fiber-optic cable.

The color coding for the TIA/EIA 568-B standard is 
  * Orange/White, 
  * Orange, 
  * Green/White, 
  * Blue, 
  * Blue/White, 
  * Green, 
  * Brown/White, 
  * Brown. 
  
To remember, think of the T568B Standard is from Mexico, where the filter is orange, and we start with orange. 
While the A is Fallout America, which has a green filter.

The color coding for the TIA/EIA 568-A standard is: 
* Green/White, 
* Green, 
* Orange/White, 
* Blue, 
* Blue/White, 
* Orange, 
* Brown/White, 
* Brown.

 A TDR (Time Domain Reflectometer) is used to certify and troubleshoot cables.

 A continuity tester is used to determine if an electrical path exists between two end points.

Joe, a network technician, needs to connect to a router so he can set up SSH for remote administration. He is going to do this through the use of a serial cable. He will use a Connecting to an infrastructure device through a console usually requires one end having an RJ-45 connector and the other having a DB-9 connector.

DB25 - they look like old-fashion serial extension printer cords. 25 pins.
DB-9 - they're smaller with 9 pins. D shaped.
D-SUB

Which type of connector is usually found on the end of an RG-59 cable?
These cables are used to carry TV signals, and you'd use a An F-Type connector is typically used to terminate an RG-59 cable.  They aren't used anymore.
F-type connectors are the spinny guys. called F-type because they're fucking annoying to tighten up.

A SFP (Small Form Factor Pluggable) has largely replaced a GBIC (Gigabit Interface Converter) largely due to size.
So in Fiber, GBIC -> are fucking massive. the SFP (smaller form Pluggable). 

A router does intelligent packet forwarding based on destination IP address.

A hub, everyone is yelling.
A switch is like a room that has a messenger delivering the messages.
A router lets you talk to rooms somewhere else.

A demarcation point (Demarc) is the handoff where the service provider’s network ends and the customer’s network begins. 



## Module 7: Ethernet Switches(1.5hr)




## Module 8: Wireless Networks (.75hr)



## Module 9: Addressing Networks with IPv4 (1hr)


