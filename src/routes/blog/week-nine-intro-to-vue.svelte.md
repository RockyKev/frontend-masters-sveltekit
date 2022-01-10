---
title: Week Nine - Intro to Vue
created: 2022-01-02T00:00:00
summary: Introduction to Vue 3
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

Intro to Vue.js 
Sarah Drasner
https://github.com/sdras/intro-to-vue


## Intro
VanillaJS vs Vue

> The other thing about it that I really like is we're holding a state. Unlike in olden days where the DOM would hold the state and you're kind of always pinging the DOM like, hey, what's going on?

> Did you change this? Hey, what's going on? Did this update? We're holding a state instead. And we're telling the DOM what to do with that. So we really have better finite control over what's going on with the state of our application and where that is getting added to.

> It's also reactive. We're gonna go into this whole section about what reactivity means and why that's different in Vue 3. But what you need to know for now is reactivity is really helpful because a lot of premises and reactivity is responding to changes. And that's what a lot of application development is.


## Directives, Modifiers & Data Rendering


v-model - two-way binding

v-if/v-else - mounting is expensive. So showing/hiding, rather than re-mounting is a option.

v-bind - 

v-for - 

```
(value, key, index) in jokes :key="value"
```

v-once & v-pre - 

v-pre is like `<pre>`, in that it doesn't render vue itself. THat's useful for documentation. 

v-on - binding to events.

v-html & v-text -

v-html renders html. 
v-text is like mustashe templates, in case you have a use-case where you can't use mustashes. Mustashe templates render them faster though, so use that. 

**v-model Modifiers**

v-model.trim will strip any leading & trailing whitespace from bound string

v-model.number - change strings to number 

v-model.lazy - waits for data after the user finishes. 

When i'm using .lazy, i use it with form validation. Anything which deals with a lot of data. Because it's annoying to fill out a form and constantly get validation over and over again as you're typing.


**event modifiers**

@mousemove.stop - compare to e.stopPropagation()

@mousemove.prevent - this is e.preventDefault()

@submit.prevent - will no longer reload the page on submit

@click.once - click event fire once
@click.native - so you can listen to native events


EXERCISE:

https://codepen.io/sdras/pen/685454ccb793ad59193a369c58b8747b

```
    <input v-model.number="num2" type="number" />
```
TIL: You can force type. Take a look -> v-model.number 



## Methods, Computed Properties & Watchers

Codepen - Rainbow mouse 
https://codepen.io/sdras/pen/75205908c2189487ca91f9b49c1c978a

> I get really frustrated with JavaScript and I wanna scream, this is bullshit, but I keep forgetting what this refers to.

Codepen - Vue Form 

https://codepen.io/sdras/pen/1e3443b570d2bf072d87ac96cb150f3f


Codepen - Sorting Table Data 
https://codepen.io/sdras/pen/d53df955e0918d9437424cf5eee82fe8

Reminder - this is bound to the component. so you should not use a arrow function in methods. 

### Computed Property vs Methods 

![](https://i.imgur.com/9AqZLeU.png)

Codepen - Computed Properties in place of that array
https://codepen.io/sdras/pen/eb5416266e86fdd45195c3974c7898f6

codepen - Filtering blog post Exercise Solution 
https://codepen.io/sdras/pen/9405ba833415572d34ec7c3ba13b1608

Filters were dropped, because you can do everything with computed properties. 

Codepen - Filter Version 
https://codepen.io/sdras/pen/1b9e273a1d27f64a99b94d8754a3b693

Codepen - Computed Properties 
https://codepen.io/sdras/pen/21f82be7b6afe10d89738db184bafb89

```js
// Filters Version 
new Vue({
  el: '#app',
  data() {
    return {
      customer1total: 35.43    
    }
  },
  filters: {
    tip20(value) {
      return (value*.2).toFixed(2)
    },
  }
});


// Computed Properties Version 
const App = {
  data() {
    return {
      customer1total: 35.43    
    }
  },
  computed: {
    tip20() {
      return (this.customer1total*.2).toFixed(2)
    },
  }
}

```

### Reactivity & Proxies 
Sarah explains that reactive programming is programming with asynchronous data streams, adds that a stream is a sequence of ongoing events ordered in time that offer some hooks with which to observe it, and walks through the various steps that Vue 3 goes through to make an object reactive. Proxies, which are objects that encase other objects or functions that allow engineers to intercept it, are also explored in this section.

Most of what we're doing with application development is reacting to state changes.

> So what is reactive? We've heard reactive programming and people talk about reactive programming a lot lately and sometimes people think, well reactive programming is RXJs. And they're not wrong. RxJs is reactive programming. But reactive programming is a type of programming it's a large umbrella and RxJs is one library that uses reactive premises.

WHAT IS REACTIVE?
Reactive programming is programming with asynchronous data streams.

A stream is a sequence of ongoing events ordered in time that offer some hooks with which to observe it.

Andre Staltz' post - https://gist.github.com/staltz/868e7e9bc2a7b8c1f754

When we use reactive premises for building applications, this means it's very easy to update state in reaction to events.

HOW DOES VUE 3 DO REACTIVITY?
* Detect when there’s a change in one of the values
* Track the function that changes it
* Trigger the function so it can update the final value


Proxies - 
> (Detect)... Because proxies are already doing that for us automatically. We can 'track' the function that changes it using track and we can 'trigger' a function that updates the final value in trigger.


![](https://i.imgur.com/ndEUOkc.png)

![](https://i.imgur.com/3qQQodx.png)

```js

//the data that's being used
const dinner = {} 

// What happens to the data.
// this sets a get/set 
const handler = {} 

const proxy = new Proxy(dinner, handler)
```

Codepen - Proxy explainer in Codepen (sweet animations)
https://codepen.io/team/Vue/pen/wvgqyJK



**Set(), Map() & WeakMap()**

Set()

Map() is a series of key & values, similar to object 
remember explicit ordering 
Like Set(), which is only uniques 


Weakmap()

The main two things -- one can be garbage collected. 

Why does this matter? 
Because this is what Vue is doing under the hood. 


### Watchers 

Codepen - Watchers
https://codepen.io/sdras/pen/2f082def935abf0dab372893f0efac1d

```js 
const App = {
  data() {
    return {
      counter: 0
    }
  },
  watch: {
    counter() {
      console.log('The counter has changed!')
    }
	watchedProperty(newValue, oldValue) {
      console.log(`It was ${oldValue}, now it's ${newValue}`)
    }
  }
}
```

Codepen - Punk Beers 
(It watches for scroll and when it reaches the bottom, it gets more data.)

https://codepen.io/sdras/pen/dRqZOy

Instead of building the new one: 
https://github.com/tangbc/vue-virtual-scroll-list

built by Vue Core Team . 

**Codepen - Graph with SVG** 
https://codepen.io/sdras/pen/OWZRZL
Transitioning state with watchers

The graph is built with Vue! (not a JS lib)



Watchers only watch one property. 
But it's flexible that you can set it to watch your one property, and then change another property.

That's can be a side-effect, where you change things that someone else doesn't know about it. 

> And so there are kind of purists in this area who will say don't do something like that because you're now changing something that you didn't know that you are changing. So that is something to watch out for, to watch out for. What I would recommend is that you're always encapsulating thing and methods and calling them so that it's a little bit more explicit and not doing everything directly in the watcher in order to kind of change things around.

> But it's a little bit different from a computer property in that sense, that computer properties are really like giving you another view from that one piece. Watchers allow you to affect multiple pieces.












## Components and Props

Templates
* You can also use render functions (https://vuejs.org/v2/guide/render-function.html)
* You can also use JSX

Each component has it's own isolated scope. 

If you don't, it retains the scope for all instances of that component.

camelCasing converts to kebab-case. 

Codepen - Comment app - 
https://codepen.io/sdras/pen/422d5ce1f61d93ca253e06132b83c598

'dumb' components - components that are only used to render things. It's only responsible is to show pretty shit. It might even capture events. But it passes that data back to it. 

Codepen - Wine Label maker - SLOTs
https://codepen.io/sdras/pen/BpjQzE
Review this? It's really good. 
`<component :is="selected">`


Codepen - Tabs with Keep Alive

with `keep-alive`
https://codepen.io/sdras/pen/bd394c76a0aa9e44abc37e3d061aef1b

```js
<!-- Inactive components will be cached! -->
<keep-alive>
<component :is="currentTabComponent"></component>
</keep-alive>
```

## App Development

Benefits of a CLI

* Build processes
* Lots of features
* Libraries


### Lifecycle hooks 

![](https://i.imgur.com/0AMKEVu.png)

created - great place to call APIs
mounted - great place to work on DOM operations
activated - associated for keep-alive

renderTracked - (new! v3) - when vDOM is rerendered, good for debugging
renderTriggered - (new! v3) - similar, but tells you what triggered the rerendering

Codepen - Lifecycle hooks example
https://codepen.io/sdras/pen/28d3a5b277ada8f9d1b0b34a2d73831c


Lifecycle hook image for V2 https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram


### Nuxt 

* Automatic Code Splitting
* Server-side rendering /STatic/Jamstack/SPA
* Powerful Routing System with Asynchronous Data
* Lighthouse scores out of the gate
* Automatic dynamic routes
* Transplitation
* Hot reloading 
* Pre-procesing: SASS, LESS
* Write vue files 

In nuxt.config.js 

You can add all these globals, like your `<head>`, type of mode, font imports. 

### Rendering in Nuxt 

When vue takes up anything that is dynamic, it's called hydration when it re-hydrates the data.

> Stephanie Walter did this great pen that shows, CSS transitions versus CSS animations, and what CSS transitions do is they interpolate two states, you go from one state to another state, but you're not allowed to create loops or other processes in between them.

> In terms of CSS animations, we have the ability to access keyframes. So keyframes can gives us the ability to go from one state to another, just like transitions does, but it also has a lot more power, so we're able to do loops, we're able to put many different things, at different points in time.

![](https://i.imgur.com/YIVcIRO.png)


The transition component: 
https://v3.vuejs.org/guide/transitions-enterleave.html

animate.css
https://animate.style/



## Animations

Codepen - the difference between transitions and animations 
https://codepen.io/stephaniewalter/pen/xxVgReM

The Transition Component: 

> The transition component is really good for coordinating entrances and exits, of a component that has a conditional statement. So if you wrap that transition component, it's not a component that's mounting and unmounting, it won't really work. For anything else, any other thing, we can hook into our CSS and JavaScript the regular way.


![](https://i.imgur.com/qdmVlbw.png)
`transform-origin: 50% 50%` to get pure center.


**Animating with CSS Classes**

codepen: https://codepen.io/sdras/pen/GRZyVQL

```js
enter-active-class="toasty"
leave-active-class="bounceOut"
.toasty {
  toasty 1s ease both;
}
```

Still `<transition />` component, but

(Simplest example)

Can also hook into CSS animation libraries this way

```html
  <transition
    name="ballmove"
    enter-active-class="bouncein"
    leave-active-class="rollout">
```

Without using `<transition />`
```html
  <div :class="{ shake: noActivated }">
    <button @click="noActivated = true">Click me</button>
    <span v-if="noActivated">Oh no!</span>
  </div>

```

Codepen: Flip cards Animation: 
https://codepen.io/team/Vue/pen/76e344bf057bd58b5936bba260b787a8

```
<transition name="flip" mode="out-in">
  <slot v-if="!isShowing"></slot>
  <img v-else src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo14.jpeg" />
</transition>
```

Example: https://slides.com/sdrasner/intro-to-vue-3-5?token=YXhIwtpW#/26


**Animating with Javascript hooks**

Codepen: https://codepen.io/sdras/pen/vYGVbxy

Using the `beforeEnter()` hook gives people a heads up that she is making a animation. 

BASIC EXAMPLE: 
```html  
 <!-- basic version --> 
 <transition 
  @enter="enterEl"
  @leave="leaveEl"
  :css="false">
 <!-- put element here-->
 </transition>
```

```js
methods: {
   enterEl(el, done) {
     //entrance animation
     done();
  },
  leaveEl(el, done) {
    //exit animation
    done();
  },
}
```


COMPLEX EXAMPLE:
```html 
<transition 
  @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter"
  @enter-cancelled="enterCancelled"

  @before-leave="beforeLeave"
  @leave="leave"
  @after-leave="afterLeave"
  @leave-cancelled="leaveCancelled"
  :css="false">
 
 </transition>
```

```js 
 methods: {
    beforeEnter(el) {
      gsap.set(el, {
        transformPerspective: 600,
        perspective: 300,
        transformStyle: "preserve-3d",
        autoAlpha: 1
      });
    },
    enter(el, done) {
      ...
      gsap.add("drop");
      for (var i = 0; i < wordCount; i++) {
        tl.from(split.words[i], {
          duration: 1.5,
          z: Math.floor(Math.random() * (1 + 150 - -150) + -150),
          ease: 'bounce'
        }, "drop+=0." + (i/ 0.5));
       ...
    }
  }
```

This fucking animation is so great: 
https://github.com/sdras/page-transitions-travelapp




## Composition API & Custom Directives

Slides: https://slides.com/sdrasner/intro-to-vue-3-6?token=yidUZcRL#/9



Why we moved to Composition API. 

Timeline of Evan You's "Why"?
https://www.youtube.com/watch?v=Vp5ANvd88x0

> Before we move on into that, I do wanna mention that Evan has a keynote about some of the key differences that he kind of goes through in this keynote, for all of the things that happened when he was kind of going from Vue 2 to Vue 3. And at one point we wrote everything in classes.

> At one point we were thinking about moving in a direction and then we changed gears, and he reflects on all of those changes and what occurred. So you can see a timeline of all of those events. So, if you're interested in some of those changes and what made things go into that, especially things like how RFC review process worked, he goes into a lot of detail.

> One of the things I wanted to share with you is that this took 2years, it's a whole rewrite, Vue 2 to Vue 3, even though the surface API is the same. There was 37 RFCs, [LAUGH] 2,000 commits, and a tremendous amount of work in sub-projects too. So this is just in the new repo, and then there's also new versions of other projects as well.

### What is Composition API trying to solve?

It's a common situation: you have two components that are pretty similar, they share the same basic functionality, but there's enough that's different about each of them that you come to a crossroads: do I split this component into two different components? Or do I keep one component, but create enough variance with props that I can alter each one?

![](https://i.imgur.com/B4qlm07.png)

This was a Vue solution with Functional Programming.

It's called the composition API because we compose with it. 

> Composition API allows you to encapsulate one piece of functionality so that you can use it in different components throughout the application.

> If written correctly, they are pure- they don't modify or change things outside of the function's scope, so you will reliably always receive the same value with the same inputs on multiple executions.

Codepen versions --  https://codepen.io/sdras/pen/ed762c954ff67f56c47de955b754805c

```html
<div id="app">
  <h3>Do you like tacos?</h3>
  <input type="radio" id="yes" value="yes" v-model="tacos">
  <label for="no"> yes</label>
  <br>
  <input type="radio" id="no" value="no" v-model="tacos">
  <label for="no"> no</label>

  <br>
  <div v-if="tacos">
	<p v-if="tacos === 'yes'" class="thumbs">👍</p>
	<p v-else>you're a monster</p>
  </div>
</div>

<script>
const App = {
  data() {
    return {
      tacos: ''
    }
  }
}

Vue.createApp(App).mount('#app')
</script>

```

Vue 3 with Composition API: 
https://codepen.io/sdras/pen/45492786305a158d50f5264867959343


```js
<div id="app">
  <h3>Do you like tacos?</h3>
  <input type="radio" id="yes" value="yes" v-model="tacos">
  <label for="no"> yes</label>
  <br>
  <input type="radio" id="no" value="no" v-model="tacos">
  <label for="no"> no</label>

  <br>
    <p v-if="tacos === 'yes'" class="thumbs">👍</p>
    <p v-else-if="tacos === 'no'">you're a monster</p>
  </div>
</div>

<script>
const { ref } = Vue;

const App = {
  setup() {
    const tacos = ref('');

    return {
      tacos
    };
  }
};

Vue.createApp(App).mount('#app');
</script>
```


### Comparison of Options API vs Composition API
Sandbox 
https://codesandbox.io/s/simple-options-api-importing-composition-api-yfhpv?from-embed


The new script Setup & Composition Resources
```
<script setup>
  const state = reactive({
    count: 0
  })

  onMounted(() => {
    console.log(state.count)
  })

  return {
    state
  }
</script>

```

Links: 
https://v3.vuejs.org/guide/composition-api-introduction.html

Usecases - https://github.com/antfu/vueuse


## Vuex

LAST PAGE: https://frontendmasters.com/courses/vue-3/vuex/

https://slides.com/sdrasner/intro-to-vue-3-7?token=YvT8ZUzV#/1/0/3


What is it: 
* It's a centralized store for sharing data and logic, and even shared methods, or async. You can think about it a little bit like it's the brains of the application. 
* It's really good for unidirectional data flow. So we're not throwing things up and down and around.
* We have all of that state in one place. Remember, we talked a little bit before about making sure that we're not changing things in multiple spots, and we know who truly owns the state of something. 


Origin: 
It's built off of the concept of Redux, a lot of the kind of flux application architecture.
So flux application architecture came first. Then Redux worked off of that. And then Vue worked off of Redux, and kind of simplified the API just a little bit, so it's similar to Redux. You could still use Redux, if you like. But Vuex is really what I recommend for Vue applications.

Why: 
> So why? In a complex single page application, passing state between many different components, and especially deeply nested, or sibling components can get complicated very quickly. Having one centralized place to access your data can help you stay organized. Before when we were doing those amid examples, you could see that were passing things down, passing things back up.

> But what if you're in the state where you have to pass it up two times, or you have to pass it down two times, or if you have to pass it up and back down? Or what if there's something that many, many components need to know about all at the same time?

> So having all of that in one place, and then giving it to the components as they need, it makes a lot of sense. It keeps everything really organized. And that can be really, really helpful for working with applications. When would you use it? Sometimes people just say you just know.

**When to use it?** 

1 - When you have multiple instances of children/siblings communicating
2 - When you want to see the entire satte organized in one place.

**When not to use it:*

1 - You have, like I just mentioned, multiple pieces of people kind of talking around the application. I would still use emit for examples like a select that I need to use over and over again, because I wanna keep that select kind of state encapsulated, even if I want the parent component of the select to know about something.

2 - I don't necessarily wanna hold that in the store, because, again, I don't want it to be brittle.

3 - If you put too much things into the store, it becomes too much.

**Keywords:** 
* `State` is what you might expect: the state of the application. Similar to how we use data in the components.

(read)
this.$store.state.nameofthing

* `Getters` will make values able to show statically in our templates. In other words, getters can read the value, but not mutate the state.

(read)
this.$store.getters.nameofthing

* `Mutations` will allow us to update the state, but they will always be synchronous. Mutations are the only way to change data in the state in the store.

(write)
this.$store.commit.nameofthing

* `Actions` will allow us to update the state, asynchronously, but will use an existing mutation. This can be very helpful if you need to perform a few different mutations at once in a particular order, or reach out to a server.

(write)
this.$store.dispatch.nameofthing

store pattern:
v-store 
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
```

v-store 2 (nuxt)
```js
export const state = () => ({
  value: 'myvalue'
})

export const getters = {
  getterValue: state => {
    return state.value
  }
}

export const mutations = {
  updateValue: (state, payload) => {
    state.value = payload
  }
}

export const actions = {
  updateActionValue({ commit }) {
    commit('updateValue', payload)
  }
}

// abstract example: 
Basic Abstract Example

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  //showing things, not mutating state
  getters: {
    tripleCounter: state => {
      return state.counter * 3;
    }
  },
  //mutating the state
  //mutations are always synchronous
  mutations: {
    //showing passed with payload, represented as num
    increment: (state, num) => {
      state.counter += num;
    }
  }, 
  //commits the mutation, it's asynchronous
  actions: {
    // showing passed with payload, represented as asynchNum (an object)
    asyncIncrement: ({ commit }, asyncNum) => {
      setTimeout(() => {
        //the asyncNum objects could also just be static amounts
        commit('increment', asyncNum.by);
      }, asyncNum.duration);
    }
  }
});

```

In main.js
```js
import Vue from 'vue';
import App from './App.vue';

import { store } from './store/index';

new Vue({
  el: '#app',
  store: store,
  template: '<App/>',
  components: { App }
});
```

getting all the state from the store: 
```js
// you can use a spread operator, useful when you have to work with a lot of state/getters/mutations/actions:

import { mapState } from 'vuex';

export default {
  // ...
  computed: {
    ...mapState([
      // map this.count to this.$store.state.count
      'count', 
      'posts',
      'items'
    ])
  }
}

```

A vuex store example:
https://github.com/sdras/ecommerce-netlify/blob/main/store/index.js



RANDOM NOTES: 

Tip 1 - key
:key needs to be unique to the entire dom. 


Tip 2 - keycode
TIL: keycodes for keyboard stuff is being depreciated. 
https://v3.vuejs.org/guide/migration/keycode-modifiers.html#_3-x-syntax

The actual notes: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode


tip 3 - hsl 
hsl, hue is a big circle and great for color generation. 
```
backgroundColor: `hsl(${x}, 80%, 50%)` 
```

tip 4 - Vue is now tree-shaking. 
Say if you're not using animation, then it gets removed. 
Compared to Vue2, which compiles it regardless. 


tip 5 - animation 
PROTIP: It's the opposite with animation: ease-out is better for easing in. ease-in is better for easing out.


tip 6 - animations with margin is bad. 
Use translate, which is hardware accelleration. 
