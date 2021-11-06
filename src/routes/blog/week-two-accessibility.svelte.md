---
title: Week Two - Accessibility
created: 2021-11-06T00:00:00
summary: Website Accessibility, v2
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>


## What is it

The curb cut effect.

 The Curb-Cut Effect, in its essence, asserts that an investment in one group can cascade out and up and be a substantial investment in the broader well-being of a nation -- one whose policies and practices create an equitable economy, a healthy community of opportunity, and just society.

## screen readers

**Web Content Accessibility Guidelines (WCAG)**
This is what companies have to meet. 

WCAG specifies three different conformance levels they are:
* A (lowest)
* AA (mid range)
* and AAA (highest)
 
WebAIM is trying to distill it in human ways. 

## accessible html

**Pictures**
You don't need "picture of" or "image of". Rule of thumb is explain the image to a blind person if they were in the room.

You can also put a empty alt text so your image skips over. It's decorative.

**Turn on screen reader**
Option ctrl U // Voice over
links/headings/


Labels do everything you can do. 
Aria-label is for everything else.

```
The label tag can only works with "labelable" elements. Those include:

<button>
<input>
<keygen>
<meter>
<output>
<progress>
<select>
<textarea>
If you ever need to label an element not on that list, use aria-label instead.
```

**Make direct screen reader only statements.**

Sometimes you'll want to communicate with a screen reader directly! One cool example is announcing to screen reader users that you offer accessibility features! In that case you can make some HTML and wrap it in a visually hidden class.

For example on twitter: (all made up)
```html

<p class="visuallyhidden">
    Hi we have a set of custom hotkeys for visual-impared people.
  </p>

<style>
  .visuallyhidden {
    position: absolute;
    left: 0;
    top: -500px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
</style>       
```

**Buttons**

This is a shitty button by the way. 
Don't make buttons with div.

1. We start with a div

`<div onclick="alert('hello')">Click me!</div>`
        
2. We could give it an ARIA role - (more on ARIA later)
This will let screen readers know the element can be clicked.

`<div role="button" onclick="alert('hello')">Click me!</div>`
        
3. We could give it a tabindex
This will allow keyboard only users to tab to it.

`<div tabindex="0" role="button" onclick="alert('hello')">Click me!</div>`

4. Don't forget about keyboard only users!

`<div tabindex="0" role="button" onclick="alert('hello')" onkeyup="alert('hello')">Click me!</div>`
        
5. Don't forget about screen reader users either!

`<div aria-label="Alert the word hello" tabindex="0" role="button" onclick="alert('hello')" onkeyup="alert('hello')">Click me!</div>`
        
## aria

w3 spec (like javascript) which are accessibility helpers. Add specifically for accessibility. A role attribute.

The ARIA spec provides us with great tools for labelling and describing any element we want. They are:

aria-label
aria-labelledby
aria-describedby

**What is the difference between labelledby and describedby?**
A label provides essential information about an object, while a description provides extended information that the user might need.

**If you make your own custom checkbox**

use the `role`
https://www.w3.org/TR/html-aria/#aria-table

```html
<div role="checkbox"></div>
```

```html
<div id="percent-loaded" role="progressbar" aria-valuenow="75"
     aria-valuemin="0" aria-valuemax="100">
</div>
```

**targetting**

CSS Selectors
```css
  .dropdown[aria-expanded="false"] .icon::after {
    content: '▶';
  }
  .dropdown[aria-expanded="true"] .icon::after {
    content: '▼';
  }

```

**live regions**

Add to TIL:
If you had dynamic content that changes, and you want the screen reader to re-read things if it changes.

`<div aria-live="assertive">Waiting for a ride</div>`

One of my favorite APIs, the value that you pass in to aria-live is a politeness setting. You can pass in:

assertive - will interrupt whatever it's doing to announce.
polite - will announce the live region update when it next idles.
off - will not read the update.

## focus management

Things you can steal:
**1: Keyboard Shortcuts**

Keyboard shortcuts are another curb cut example. Sites like Twitter and Facebook offer keyboard shortcuts for almost any action which are great for both keyboard only users and and power users!
![](https://i.imgur.com/dxx44Zv.png)

**2: skip links**

Press Tab shows this feature
![](https://i.imgur.com/lfVyM4a.png)

Press tab and a special command hits up
Skip links
Skip links help users skip over large headers and navigation and jump right into the "main" content of your site. When a user hits tab for the first time, a button will appear and offer users to jump right to the main section.

**Shift tabbing**
tab = go forward
shift-tab = go back

**Tab index**
You can add the tabindex attribute to any element like this:

`<div tabindex="0">I'm focusable</div>`

`negative`: value means that the element should be focusable, but should not be reachable via sequential keyboard navigation;

`0`:  means that the element should be focusable and reachable via sequential keyboard navigation

`a positive value` means should be focusable and reachable via sequential keyboard navigation; 
If several elements share the same tabindex, their relative order follows their relative position in the document.

**get the active element in JS**

Sometimes, especially on single page applications, it's helpful to store the currently focused element before a page transition so you can return to it later.

```js
    // A modal is about to be opened
          // Store the current news item
          const currentItem = document.activeElement;
          // Open the modal
          // On modal close, refocus on the news item they had open
          currentItem.focus()
        
      
```

**Tab Trapping**
Locks all the accessibility if you're in a modal. 

Grabs first element and last element within the modale.

Then with the key down event in JS, have it switch focus on first or last. 


## visual considerations

System level APIS
Using the new `prefer` api

For example: of they can get seizures.

```html
   <div class="animation">animated box</div>
        
      
<style>
        
.animation {
  animation: pulse 1s linear infinite both;
}

@media (prefers-reduced-motion) {
  .animation {
    animation-name: dissolve;
  }
}

</style>
```

Or preer color scheme:

```html
<div class="wrapper">
        ...
      </div>
    
<style>
  @media (prefers-color-scheme: dark) {
    .wrapper {
      background: black;
    }
  }

  @media (prefers-color-scheme: light) {
    .wrapper {
      background: white;
    }
  }

</style>        
```
1. Check their cache to see if they're using light or dark already taggled
2. Check their system 


## tooling

Use linters
eslint-plugin-vuejs-accessiblility

Use design systems like
Adobe's react spectrum
google material design

chrome extension

axe dev tools
https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US

