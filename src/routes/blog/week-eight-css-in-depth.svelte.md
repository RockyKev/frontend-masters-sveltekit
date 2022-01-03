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

tfooter - it's where you put something like calculations. Such as all the calories in an ice cream list.

Captions - specifies the title of the table. 


## Grid

## Background & Borders

## Gradience

## Transforms

## Transitions

## Animations

## Other Features

