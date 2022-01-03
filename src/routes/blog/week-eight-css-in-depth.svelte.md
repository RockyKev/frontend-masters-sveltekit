---
title: Week Eight - CSS In Depth
created: 2021-12-21T00:00:00
summary: CSS In-Depth, v2
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

CSS In-Depth, v2
Estelle Weyl
Slides: https://estelle.github.io/


Separation of Concerns

Content - HTML
Behavior - JS
Presentation - CSS

Prefixes is specifically for edge-cases. For example android devices that can't generate gradients, so they have their special way. 
## Selectors
All the selectors, ever (so far): 
https://estelle.github.io/selectors/selectors.html

![](https://i.imgur.com/ub0cqG1.png)

![](https://i.imgur.com/FDJX5dq.png)



```css
// E[attr^=val]
// Element E whose attribute attr starts with the value val.

a[href^=mailto] {background-image: url(emailicon.gif);}
a[href^=http]:after {content: " (" attr(href) ")";}

// E[attr$=val]
// Element E whose attribute attr ends in val . 

a[href$=pdf] {background-image: url(pdficon.gif);}
a[href$=pdf]:after {content: " (PDF)";}

// E[attr*=val]
// Element E whose attribute attr matches val anywhere within the attribute. Similar to E[attr~=val] above, except the val can be part of a word.

```


States
```
:default
:valid
:invalid

:required
:optional

:in-range
:out-of-range

:read-only
:read-write

:placeholder-shown

:user-invalid
```

Additional Pseudo-elements
Highlight Pseudo-elements:

::selection
::inactive-selection
::spelling-error
::grammar-error
Other Pseudo-elements:

::marker
::placeholder
::content


## Psuedo-elements 

last-child vs last-of-type


root, empty, and blank

**empty elements**

```
<E/>
<E></E>
<E><!-- this is a comment --></E>
<E title="this is an empty element"/>
```


**Drag and Drop targetting**

Drag and Drop Pseudo Classes
`:drop`
drop targets while the user is “dragging”.
Unfortunately, dropzone attribute is not yet supported
`:drop(active)`
current drop target for the drag operation.
`:drop(valid)`
drop target is valid for the object currently being dragged, like correct filetype.
`:drop(invalid)`
drop target is invalid for the object currently being dragged, i.e. doesn't except the filetype of object being dragged.
`:drop(valid active)`
matches active drop target if it’s valid




## Generated Content


Adding custom tags based on css selectors

![](https://i.imgur.com/b8dfYbx.png)


You can't use transform tools (like rotate) on a static element. 

You can put attribute content into the content tag!

```
a[href^=http]:hover {
   position: relative;
}
a[href^=http]:hover:after {
   content: attr(href);
   position: absolute;
   top: 1em;
   left: 0;
   background-color: black;
   color: white;
   padding: 3px 5px;
   line-height:1;
} 
```


Generated Content (like `after` content) is not accessibility. 




## Media query

Resolution Units
dpi: dots per inch (72, 96)
 
dpcm: dots per centimeter (1dpcm ≈ 2.54dpi)
 
dppx: dots per pixel
1dppx = 96dpi (default resolution of images)
Note: 0 is invalid.

For a mobile-optimized site, you want this:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

The only time you want to disable zoom or resizing is if it's a game.

MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag

## Supports
@supports is the way to apply a new CSS feature.

## Colors and Appearance


**Differences between opacity and transparency**
When you have opacity, it's actually the whole element that is becoming transparent. So here, the top one is opacity 1.

Here you still have the white, because only the color of the shadow, it should be shadow color. And the color of the text became transparent. But you still have the shadow on that text and you still have the background that is fully opaque. Here the text, the shadow, the background, all of it became transparent, because the opacity was set on the element.

And everything went to transparent. So that's the difference between AlphaTransparency and opacity. Which really doesn't make it that much of a difference in your life, until you get stuck on explaining to someone, basically. So AlphaTransparency tips, transparent shadows are awesome. 

**buttons**

Please don't use `spans` or `divs` as button. 
How do you tab to it? How do you keyboard focus to it? How do you deal with all the accessibility issues? Use `button`. 

## Flexbox

What are flex items:
* All non-absolute positioned child nodes
* generated content (psuedo elements like before & after)
* anonymous flex items => non-empty text nodes


What are NOT flex items:
1. ::first-line & ::first-letter
2. white space

What are kinda: 
1. absolute/fixed positioned items

Changes Properties:
1. `min-height/min-width` are switched to default auto. (instead of 0)
2. `visibility: collapse`
3. `margin:` Adjacent flex item margins do not collapse

Ignored Properties:
1. column-* properties
2. Float
3. Clear
4. Vertical-align

## Tables

thead - Place to put the title.
tfooter - it's where you put something like calculations. Such as all the calories in an ice cream list.

Captions - specifies the title of the table. 

if you add border to your tables - it adds a bit of spacing.
border-collapse - the default behavior is `seperate` of the cell borders. `collapse` will make it like Excel.
border-spacing - how much space between. 

You can hide shells

empty-cell: show | hide
it's similar to:

```css
td:empty, th:empty {
  visibility: none;
}
```

table-layout: auto | fixed (fixed renders faster)

vertical-align - in tables

## Grid

Flexbox (Oct 2009. Last call working draft is May 14, 2015)
Grid. (March 2017 fully released) 

`fr` is a relative unit - a fraction. 

It auto-assumes you want 1 fr per row.

The `tracklist` is the layout. 

```css
div {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
    /* grid-template-columns: <track-list> */
}
```

**gap**

`grid-column-gap` - gap between col
`grid-row-gap` - gap between rows
`grid-gap` - shorthand


**Naming**

Columns and rows are ordered starting with 1. 

```css
div {
    grid-template-columns: 1fr [start] repeat(3, 1fr) [mid] repeat(8, 1fr) [end];
    grid-area: 2 / start / 4 / mid;
}
```

**Difference between items/content**

```
// Containers ---> content
justify-content: 
align-content: 

It's aligning the whole row/column. 

// Containers ---> items
justify-items:
align-items: 

It's aligning each item within itself. Globally
```

What about itself?
```
// flex & grid items 
justify-self:
align-self:
```

## Background & Borders

background is shorthand.

It actually has
* background-repeat
* background-attachment
* background-position
* background-color

**background-clip:** 
border-box - The background extends to the outside edge of the border (but underneath the border in z-ordering).
padding-box - The background extends to the outside edge of the padding. No background is drawn beneath the border.
content-box - The background is painted within (clipped to) the content box.
text - The background is painted within (clipped to) the foreground text.

![](https://i.imgur.com/FIpPB2b.png)

**background-origin**
border-box - The background is positioned relative to the border box.
padding-box -  The background is positioned relative to the padding box.
content-box - The background is positioned relative to the content box.

![](https://i.imgur.com/WivA9HX.png)


## Gradient
https://estelle.github.io/CSS/gradients/index.html#slide2

![](https://i.imgur.com/6AXwBiK.png)

Color stops and Length units
```css
.slide {
  background-image:
    linear-gradient(
      red 0%,
      orange 20%,
      yellow 40%,
      green 60%,
      blue 80%,
      purple 100%
    )
}
```

![](https://i.imgur.com/iCLbP2S.png)

```css
.slide {
  background-image:
    linear-gradient(
      orange 20vh,
      yellow 40vh,
      green 60vh,
      blue 80vh
    )
}
```

![](https://i.imgur.com/4OljjBj.png)

```css
  .slide {
    background-image:
      conic-gradient(
        orange .20turn,
        yellow .40turn,
        green .60turn,
        blue .80turn
      )
  }
```

![](https://i.imgur.com/KuU0IuE.png)


```css
.slide {
  background-image:
    linear-gradient(
      red 20vh,
      orange 20vh,
      yellow 40vh,
      green 60vh,
      blue 80vh,
      purple 80vh
    )
}
```

![](https://i.imgur.com/enGQfcr.png)

```css
#conic11 {
  background-image:
    repeating-conic-gradient(
      magenta 0 4deg,
      orange 4deg 8deg
    );
}
```
![](https://i.imgur.com/Et7UYzu.png)



## Transforms & Transitions & Animations

![](https://i.imgur.com/WYSinJB.png)
![](https://i.imgur.com/EQVvK9G.png)
Typically anything with a number!

## Other Features

clip-path
shape-outside

You can stack clip-path/shape-outside to keep curving a shape.

You can also clip-path a URL. 


How to add a placeholder cursor in an input
```css
  li {line-height: 2; clear: both;}
  label {display: inline-block; width: 200px;}
  .shell span {color: pink;}
  li {font-family: helvetica; font-size: 0.93rem;}
```
![](https://i.imgur.com/ZYoJMKY.png)


