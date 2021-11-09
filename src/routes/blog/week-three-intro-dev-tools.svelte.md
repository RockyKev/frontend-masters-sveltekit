---
title: Week Three - Intro to Dev Tools
created: 2021-11-6T00:00:00
summary: Introduction to Dev Tools, v3
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

https://github.com/jkup/mastering-chrome-devtools


## Elements tab

**Scroll Into View**
Clicking on the arrow will jump straight into it.
![](https://i.imgur.com/lck2C4c.png)


**Using the Break on:** 
Imagine if the JS changes something, how do you debug it?
Right-click element, and select "Break On" -> Test to see what subtree modification/attribute mod/node removal.
![](https://i.imgur.com/HmYRXjP.png)


**Event listener**
Select element and you can see event listeners

**shift click on color**
color: #00000; // shift click will switch it to another type like hgb or whatever

## Memory Tab

You can dump JS memory sessions in there.

## Performance Tab

If there's a red line, it means it's dropped a frame.


## Network Tab

**6 resources gathered rule**
Six simutanous requests
As of right now, we can get 6 resources at a time.
If you have 20 images, it'll get the first 6, then move down.

Of course things are picked up by priority.

**priority column**
You can sort it by what is coming up. 
HTML CSS are vital things. Then after page load is JS.

Override it by moving things to the head.
Preload/defer images.


## Sources tab

Creates a workspace so you can 'save' the browser state. 

Doesnt work well with JS frontends.

**Debugging**
You can set it to break only on specific URLs when you're fetching data.

![](https://i.imgur.com/cmREdC1.png)


**Scope** 
You can see scope
![](https://i.imgur.com/sRAj1H2.png)

**Hide scripts you don't need**
Say you're using Vue and don't need Vue's libs to show when you're debugging.
![](https://i.imgur.com/2EOa6YZ.png)


**Testing your Android directly with Chrome**



## Network Tab


## Random things to read:

The cost of Javascript
https://medium.com/reloading/javascript-start-up-performance-69200f43b201
![](https://miro.medium.com/max/2000/1*GuWInZljjvtDpdeT6O0emA.png)


**Testing the speed of a node application**

Because node is just a wrapper behind the V8 engine.
`node --inspect server/server.js`
![](https://i.imgur.com/CuEB6qx.png)


**Speed testing performance**
To test how fast something is in different parts of the world

```js
performance.mark("Start");

for (let i = 0; i < 100000000; i++) {
  // do nothing
}

performance.mark("End");

performance.measure("Frontend Masters Chrome Devtools", "Start", "End");

performance.getEntriesByType("measure");

const resources = performance.getEntriesByType("resource");
const paints = performance.getEntriesByType("paint");
const navigations = performance.getEntriesByType("navigation");
```

Then go to the performance Tab and you can actually see the performance numbers.

The performance api is what devtools is using. 

**Rail Philosophy**

Response
Animation
Idle
Load

**What can slow down a website**

Backend: 
* Database
* Server itself
* Network
* Compression (gzip and brotli)

Front End:
* Large bundle
* Too many files
* Images or JS not async
* big images
* Unused JS/CSS
* CSS in Document Body
* Not using browser caching

**Optimizing JS**
Chrome always tells you that there's JS that's being unused. But you never know if it's something else will trigger it.
It's better to use bundlers.

**Paint reflashing**
![](https://i.imgur.com/T20vn0m.png)