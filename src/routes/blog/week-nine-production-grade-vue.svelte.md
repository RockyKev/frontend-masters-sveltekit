---
title: Week Nine - Production Grade Vue
created: 2022-01-05T00:00:00
summary: Production-Grade Vue (Part 1)
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>


Ben Hong
Netlify
https://frontendmasters.com/courses/production-vue/


## Best Practices

SFC - single file components
The (template, script, styles) pattern.

JAVASCRIPT
**Javascript vs TypeScripts**
* Most issues are not from type violations.
* Typescript does inherently guarentee type safely. It requires discipline
* Full type safety in a codebase can affect productivity.
* Most applications can do better testing strategys and code reviews

* You can also add codebase with JSDoc comments. 


If Vue.js 2, not worth it.

If Vue.js 3, and interested... go for it!

Why export default 
versus
export default NAMED



HTML
html should exist in `template` or render function.


The render block
Rarely used.

```js

export default { 
    render(createElement) {
        return createElement('h1', 'Hello Frontend Masters!');
    }
}

// import mode
// hyper script
// it's another name for createElement
import { h } from 'vue'

export default { 
    render(h) {
        return createElement('h1', 'Hello Frontend Masters!');
    }
}
```

This is helpful to create dynamically. 
But it's better to just use template, because there's a whole list of other API to create bindings.


HTML STUFF
Merging bind statements
![](https://i.imgur.com/V9q9slj.png)
![](https://i.imgur.com/IyrXlnG.png)
![](https://i.imgur.com/dGgQVxY.png)
![](https://i.imgur.com/8Xa8lNZ.png)

Of course, the more you abstract it, the harder it is to know what's being passed. 

CSS

Instead of using scoped...

you can use the module.

This creates completely scoped components. 

Another bonus is CSS Module Exports.

![](https://i.imgur.com/AHGDx1U.png)
![](https://i.imgur.com/gnRkKIR.png)

```html

<template>
<p :class="$style.red">
This should be red
</p>
</template>


<style>


</style>
```

CSS module is done at the compile level. 

Ben prefers to put ternaries in the `<script>` portion.

![](https://i.imgur.com/Klpz2HI.png)


EXERCISE:
The Dynamic heading issue and how to solve it. 

```js
export default {
    props: {
        level: {
            type: String, 
            default: '1'
        }
    },
    render() {
        return h(`h${this.level)`, `Hello it works!`)
    }

```

TIL - Render function
https://v3.vuejs.org/guide/render-function.html

## CLI

The CLI has a UI that lets you:

1. analyze the project deeper
2. Know about dependencies and optimize
3. Even kill things. 

It also lets you create ES module version, and a legacy module. WOW!

![](https://i.imgur.com/MoDwiIG.png)

With CLI, you can also add a bunch of libraries. Say you need TypeScript, you also need to get all the configurations and files are in the right place. Like the shim file.

Valid Alternatives to Vue CLI

Micro-frontends is kinda overkill. 
Legacy migration. 
Server-side rendering.


Question: Vite
Stick with webpack because production apps need stability, and webpack has years of packages that are stable. 

Vite has a lot of features that can handle things. FOr new projects, it's fine.

QUESTION: Can you extend CLI?

It's open source so yes. 


## Component 

Naming Conventions

1) Avoid single name components
Header, Button, Container

We want to avoid collision with HTML5 spec. Vue wants to 

filter pipe in Vue2 was depreciated because HTML5 was thinking about using it. 

Naming Components - 
![](https://i.imgur.com/CflGpVy.png)

If the `the` element is weird and you're seeing it too frequently, that's a sign that you may want to generic things some more.

![](https://i.imgur.com/Rp46OrP.png)
This lets you signal to other developers that this functionality is related to the other elements. 


![](https://i.imgur.com/BOl9oD9.png)

Premature Optimization is the root of all evil. 

PRINCIPLE:
Data Driven Refactor
SIgns you need more components
* When your components are hard to understand
* You feel a fragment of a component could use its own state
* Hard to describe what the component is actually responsible for. 

How to find reusable components

1. Look for v-for loops

2. Look for large components

3. Look for simular visual designs

4. Look for repeating interface fragments

5. Look for muptiple/mixed responsibilities

6. Look for complicated data paths. 


If you follow too hard on Presentational VS stateful components, it can lead you into knots.

### File Structure

![](https://i.imgur.com/QGzyvXi.png)
Tie the unit testing with your file structure.
Organize components in a flat structure.

Instead of saying Page/Header.vue
Change it to PageHeader.vue

A hybrid level - using page level components. 

For Global imports that use the same thing:
Chris Fritz
https://www.youtube.com/watch?v=7lpemgMhi0k

Vue global component registration - import all files in directory, taken from Chris Fritz's talk
https://gist.github.com/lnufnu/ad72070b2855b7be082c685a4a1b4d5d

Enterprise level:
https://github.com/bencodezen/vue-enterprise-boilerplate

### Component Props
Scaling with Arrays is problematic.
![](https://i.imgur.com/hWM3uQd.png)


no need to have 'required' if you have a default. It's redundant.


![](https://i.imgur.com/yUNU8Hn.png)
Prop validator -- only accept 'home' and 'about'. 

### Prop complexity with Slot 

Problems
* New requirements increase complexity
* If the component has too many multiple responsibilities and conditionals
* It becomes low flexibility and hard to maintain

FOR EXAMPLE:

A button -- What if: 

1. Optional image in front
2. Optional image in back
3. Optional text in the center
4. Optional Loading animation
5. Optional front/back can be loaders too.

Rather than overload it with props --
use slots.

![](https://i.imgur.com/KteFeGV.png)

Look at the top right. 
Just inject the element you want, instead of passsing data through props over and over. 

### Dynamically Switching Components

```
<component :is="">
```

![](https://i.imgur.com/wh4upp0.png)

1. It only loads the component it needs.
2. This is literally how routerView works.

PROS:
* Extremely powerful/flexible
* Can accept props
* Can accept async components
* Can change into different components

CONS:
* Be careful with prop handling.

Benefits - since you bind a object as a prop, you can then tap into it.


### Vendor Components

![](https://i.imgur.com/6ZjeDX5.png)

When using Vendor-specific components, it'll be a nightmare to refactor, especially if you're swapping to material design or another font family.

Recommended to wrap it with your own component.

![](https://i.imgur.com/WDOm4OE.png)

Now you can add a simple if statement to switch without hundreds of lines of fixes.


### Transparent Component Wrapper

![](https://i.imgur.com/sTbVw1K.png)

Vue assigns things to the top-level element.

So those click events are happening on `div`. 
Instead switch it.

### Mixins

Sharing functionality with different components.

People always reach for Mixins first.

![](https://i.imgur.com/O35xgbo.png)
Some even use it as a factory function.

PROBLEMS WITH MIXINS:
* Possible Name Clashes
* Can't share template fragments
* Gets harder to track where things are coming from. Harder to debug because where is it coming from?

PROS:
* Easy to use
* Good for refactoring


### Provide/Inject API
https://vuejs.org/v2/api/#provide-inject


Lightweight data store. 

Say your doing a parent-child prop relationship. 

If you do a great-great-great-grandparent relationship, it gets real messy with dependency.

![](https://i.imgur.com/QUqxCxX.png)

PROS:
* Easily share data and methods with descendants
* Helps avoid unnessary props
* Components can choose which properties to inject
* Can be used to provide default props and data

CONS: 
There are some reactivity caveats when it comes to usage in Vue 2
* Create a tight relationship between two components that's not immediatelly apparent
* There is ambiguity where it's coming from where. 

They are useful for advance plugin/component libraries. Not good for generic application code.

Tightly coupling component names have a better alternative.
