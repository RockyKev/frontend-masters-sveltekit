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




## Module 5: Selecting WAN Technologies (1hr)



## Module 6: Connecting Networks with Cables and connectors (1.25hr)



## Module 7: Ethernet Switches(1.5hr)



## Module 8: Wireless Networks (.75hr)



## Module 9: Addressing Networks with IPv4 (1hr)



## Module 10: Addressing Networks with IPv6 (1hr)




## Module 11: Explaining IP Routing (1hr)



## Module 12: Streaming Voice and Video (1hr)



## Module 13: Virtualizing Network Devices (.75hr)



## Module 14: Securing a Network (2.5hr)



## Module 15: Monitoring and Analyzing Networks (.5hr)



## Module 16: Examing Best Practices for Network Admin (1hr)



## Module 17: Troubleshooting Networking (1.25hr)



## Module 18: Prepping or CompTIA Network+ Exam 



## Module 19: Wrapup