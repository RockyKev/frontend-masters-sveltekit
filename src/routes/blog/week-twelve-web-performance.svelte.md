---
title: Week Twelve - Web Performance
created: 2022-01-28T00:00:00
summary: Web Performance Fundamentals
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

![](https://i.imgur.com/MktPSlV.png)

Todd Gardner
@toddHGardner
https://frontendmasters.com/courses/web-perf/introduction/

He manages TrackJS and RequestMetrics


## Elements of Performance

### Do a feeler test
![](https://i.imgur.com/Z1NyPoS.png)


GOOGLE SHEET WITH EXERCISE: https://docs.google.com/spreadsheets/d/10QlmdN4A1mtJFc2fLACjVftN2SOjsDuwgZ35slFKwG4/edit#gid=828938081

![](https://i.imgur.com/78n6B6L.png)

### Psychology of waiting

1. People want to start
2. Bored waiting feels slower
3. Anxious waits feel slower
4. Unexplained waits feel slower
5. Uncertain waits feel slower
6. People will wait for value

### Web Vitals

The old way: Page Load
![](https://i.imgur.com/jey5GWK.png)

Page load metric lost it's value because people were gaming the system.
A div would load a white screen, then Javascript builds it, and then a couple seconds later it ACTUALLY loads.

![](https://i.imgur.com/en3Z9ia.png)

Web vitals become the next thing.

### First Contentful Paint (FCP)
The time until the user sees an indication that the page is loading.

### Largest Contentful Paint (LCP)
THe time is when the largest amount of content comes in. This is a proxy of when the user thinks the page is mostly there. 

![](https://i.imgur.com/vMBkGIW.png)

### Cumulative Layout Shift (CLS)

This pushes content out of the way, because content is shifting.
![](https://i.imgur.com/CzhwFoD.png)

This check on the lifetime of the page! 
The movement distance and impact of page elements during the entire lifetime of the document the user sees. 

* DONT MOVE STUFF

SPAs were penalized the most by this, because if the react app is deploying and doing all sorts of movements. 

### First Input Delay (FID)

![](https://i.imgur.com/lbrNx4v.png)

This is about the browser, not the user.

If an article is loaded, and you went to click on it... there's a delay? It's the time that the browser is still rendering & executing your JS.

The browser time delay between the user's first click and execution of application code.

First Contentful Paint FCP - Response quick
Largest Contentful Paint LCP - Get to the point
Cumulative Layout Shift CLS - Dont move stuff
First Input Delay FID - dont load too much

### Lighthouse

Rules of thumb: 
1. Devtools - detach lighthouse.
2. Throttle it by a mobile device.

Things to know:
Relative to YOUR machine, network
The chrome window size
Chrome application priority


Because it renders the browser size itself. If you shrink it, it will give you a different performance stat.
Make sure chrome is in the foreground, because if it's in the background, it'll defer things. 

Exercise: https://docs.google.com/spreadsheets/d/10QlmdN4A1mtJFc2fLACjVftN2SOjsDuwgZ35slFKwG4/edit#gid=492748406


Extensitions matter too, because they inject code to the page. 
Remember that 100px will obviously render way faster. 

Lab data is what lighthouse gives you - your local computer, or a server. 
Crux data is what real users on the internet are getting.

## Metrics

This is about interpreting data. 
And it's kinda "meh". Like, it's more about the marketing side. 

### Intepreting data

Data is a bit skewed. 
The score is determined by chrome-based browsers. (Chrome & Edge)
![](https://i.imgur.com/g6W4Oll.png)

Safari doesn't report. Firefox doesn't report. 

![](https://i.imgur.com/A07cLJk.png)


P50% of users -->  is the median.
P75% of users --> is what google looks at
P95% of users --> this is like phones in mongolia. It's often lobbed off. We don't think about that. 

![](https://i.imgur.com/Q4sq0kO.png)

So looking at this -- there's kinda a problem here. Because within the P75 - you notice there's a weird bump around that 75% mark.


## Performance

Compare with other site. 
https://www.lightest.app/

![](https://i.imgur.com/qGajCIz.png)


The project folder: https://github.com/toddhgardner/perf-training-website
It's a node project, with a single HTML file. 
It's not that optimized. 

We need to capture real field data. 

`window.performance`
https://developer.mozilla.org/en-US/docs/Web/API/performance_property

Questions:
* How long did it download this image
* How long did it take to run this event. 


You can run this in the console in Devtools. 
That's how you get the raw data.
```js
performance.getEntries()
performance.getEntriesByType()
performance.getEntriesByName()
```

![](https://i.imgur.com/o3N14eD.png)
This is a lot of things to parse, and hard to understand.


This parses into this! (kinda like in the network tab!)
![](https://i.imgur.com/mty93Q1.png)


```js
new PerformanceObserver(
	(entryList) => {
		var entries = entryList.getEntries();
	}).observe(opts);
```

Performance timing is one type of entry
Performance observer is a different type of entry 

Check out this: 
https://github.com/toddhgardner/perf-training-website/blob/main/public/assets/js/util/perf.js

Google has a version that's official! But this code is what's under the hood. 

![](https://i.imgur.com/mCxRTRH.png)

## Optimizing Metrics 

### Improve FCP Practice

The time until the user sees an indication. 

METHOD 1: Improve the server 
* Size it correctly
* Minimize the processing on your sizer. 
* Network bandwidth.

METHOD 2: Small documents
* Your content size. 
Can you deliver smaller versions. 
HTML -> 80-100kb is kinda big. 
Image -> Can you make it smaller? 

GZIP or brotli? 

METHOD 3: Short Transmission
* Reduce delivery hops. 

![](https://i.imgur.com/qEJGhsp.png)

Wher we can place the hops. 
For example: East Coast server takes 200-300ms to deliver to West coast. 

CDN it to make it a bit easier. It can be 50ms. Pop it at a specific spot so they connect there faster. 


### Largest Contentful Paint 
The time until the user sees most of the page (or believes it's almost read)

![](https://i.imgur.com/QMXI0js.png)

Your HTML is loaded, and identify what chained elements to bring out. 

So the space between FCP and LCP is what is loading.


METHOD 1: Defer resources until later

FOR JAVASCRIPT: 
When you add a `async` to your script. Do it later. It'll download, BUT will still execute. If the script finishes downloading, it'll still block your cache because it's being fired. 

Instead -- 
Move scripts to bottom (footer)...
When you add a `defer` to your script. Do it later. It'll download, AND it won't execute until it's go time. If the script finishes downloading, it'll wait until the event is ready to go. 


METHOD 2: Optimize Images
FOR IMAGES: 
Check out the Lazyloader code:  https://github.com/toddhgardner/perf-training-website/blob/main/public/assets/js/util/lazyloader.js

In your html -- you can add:
```
<img src="picture-1200.jpg" loading="lazy">
```

`loading="lazy"`. That will defer the image for much later. Except, it doesn't work with safari/ios. 

It can also lazyload anything.
```
<iframe src="" data-src=""...>
```
It'll load when you reach that spot, by moving `data-src` into `src`. 

Lazyloader: https://github.com/toddhgardner/perf-training-website/blob/main/public/assets/js/util/lazyloader.js


Adding Responsive image: 

![](https://i.imgur.com/dXhjvmG.png)

using `src` & `srcset`

Using Optimizing Images: 
https://tinypng.com/

imageOptimizer webpack: 
The code - 
https://github.com/toddhgardner/perf-training-website/blob/main/tools/imageOptimizer.js

What's neat is that he named them with `image.min.jpg`

```html
<img src="button.png"
	data-srcset="button-600.min.png 600w, 
	button-900.min.png 900w,
	"
	sizes="(max-width: 600px) 600w,
	(max-width: 900px) 900w,
	"

```

![](https://i.imgur.com/XgubDcX.png)


METHOD 3: Reduce request overhead

Implement http/2: 

Pros: fast
Pros: reuse connections 
Cons: server setup & compatibility
Cons: No SSL 

So it won't work on local.

```
cache-control: max-age=600
expires: Weds, 20 Jan 2021
etag: "55230-230123badsb"
```

Check your server config, and see if you can turn on caching. 
![](https://i.imgur.com/ypA1yOg.png)


Preloading: 
`rel="preconnect"` tag. 
That will allow us to get that google font asap.


```
<link rel="preconnect" 
	href="https://fonts.gstatic.com">
```



`rel="preload"` tag. 
Say you have a depenency that needs the item, and you need it earlier/faster. (For example, icons.css)

```
<link rel="preconnect" 
	href="/icons.css">
```

![](https://i.imgur.com/X7vYbRp.png)

He's preconnecting gstatic fonts 
He also preconnecting his chat program. 
He then preloaded all the css elements. 



### Cumulative Layout shift 

It's the movement distance and impact of page elements during the ENTIRE LIFETIME of the document the user sees. 

LCP -> "Hey I'm ready"

It's saying "keep this empty space here". 

The browser is remembering the aspect-ratio for that image. 

How to fix it: 
The design choice of moving it to the bottom of the page.

CSS - And then:: 
```
position: relative;
```

### First Input Delay 

the browser time delay between the user's first click and the execution of application code. 

Don't load too much. 

If you are having this problem, then you are pushing WAAAY too much Javascript. 

[00:00:00]
>> Before we get started on part three, I wanna give an opportunity for us to talk about some questions. There was a great question in chat just before we left about whether or not the first input delay is different than another metric called time to interactivity. Time to interactivity is another metric that you'll see in the Google lighthouse report.

[00:00:20]
But it's not usually considered one of the core web vitals. It's not something that Google is gonna rank you on. They're different things. Time to interactivity is a milestone that happens sometime after largest contentful paint. And it's the milestone at which your document is all kind of built together and Google thinks it is fully ready to accept user input.

[00:00:43]
Whereas first input delay is that from the time when the user actually interacts with your site, until when your code is able to respond to an event, that delay is first input delay. The first is a milestone in the loading process. It's something else taking consider between first contentful paint, largest contentful paint, time to interactive.

[00:01:10]
Whereas first input delay is more measuring whether or not you're loading too much stuff. But it's a good question. So the question from zoom was not fully understanding what the performance and, was it the Performance tab or the Network tab?


## PLanning

Check his slides -- 
https://docs.google.com/presentation/d/13p5x-QtqlJDluu1-hMILmWrsnSmg87G-DC2aqoKzwxc/edit#slide=id.gb774a1a237_0_396

This program is super sweet: 
https://www.performancebudget.io/

Setting your goals: 
How can you be 20% faster than your competitor?


### Marketing about third-party pixel service

You need data to convince marketing. 

![](https://i.imgur.com/KMx9l3S.png)

They care about costs, revenue, price. 

Did things go down? Now you can talk about it. 
Sometimes, speed is down but revenue is up. Maybe that's okay. You can't over-perform everything. 


























