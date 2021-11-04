---
title: Week One - CSS Grids and Flexbox
created: 2021-10-29T00:00:00
summary: CSS Grids and Flexbox for Responsive Web Design
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

Course: https://frontendmasters.com/courses/css-grids-flexbox
Instructor: Jen Kramer

## Floats
After float, you must clear

Using the psuedo after table hack.

```css
.row::after {
  content: "";
  display: table;
  clear: both;
}
```

Floats requires you to use "magic math", like 97% instead of 100%.
margin 4%, you'll have to do all this weird math.


## Flexbox
made in 2009
2012 was when it became flex.

If you use a lot of col-class, you can do this

```css
[class*="col-"] {
  margin-left: 1px;
}
```

## Flexbox Grid

Her exercises are assuming 96% total width, so she's using magic math of 16% gutters and a leftover 4%.

DON'T DO THAT. 
WTF.
Stop with the magic numbers.

There's `gap`. 

## Responsive Images

Image sizes:
* Server-side - load big image. Not ideal.
* Server-side - manage multiple version, show based on need. Like WordPress! Good!
* Client-side - manage multiple version, load images with hide/display. Not ideal, since all images will be downloaded.
* Client-side - Javascript library, Good!

Modern responsive design using `<picture>` tag.

```html
<!-- media is like media query -->
<picture>
  <source srcset="img/peace-pie-original.jpg" media="(min-width: 1200px)">
  <source srcset="img/peace-pie-original.jpg" media="(min-width: 1200px)">
  <img src="img/peace-pie-150.jpg" alt="a rainbow colored pie">  
</picture>

<!-- img is where you place the mobile, alt tag, and fallback -->
```


## CSS Grid


**Support**
`@support` tag
If the browser supports the new feature, use it. 
That's IF the browser even has the `@support` tag, but that was like 2 years ago. 

```css
@supports (display: grid) {
  div {
    display: grid;
  }
}
```
https://developer.mozilla.org/en-US/docs/Web/CSS/@supports


**Grid Properties**

fr - fragments

```css
.myClass {
  grid-template-columns: [col1] 40px [col2] 3fr;
  grid-template-rows: 50% 25vh auto;
}
```