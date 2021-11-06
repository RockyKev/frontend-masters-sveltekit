---
title: Week Three - Intro to Dev Tools
created: 2021-11-08T00:00:00
summary: Introduction to Dev Tools, v3
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

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

## Network Tab

You can dump JS memory sessions in there.

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


## Network Performance