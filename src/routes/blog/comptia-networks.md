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