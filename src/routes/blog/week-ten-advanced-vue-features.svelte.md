---
title: Week Ten - Advanced Vue
created: 2022-01-10T00:00:00
summary: Advanced Vue.js Features from the Ground Up
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

Vue.js Features from the Ground Up

COURSE: https://frontendmasters.com/courses/advanced-vue/introduction/
Evan You

SLIDES: https://docs.google.com/presentation/d/1TgDx4DN8YqfdndYWMovBcQVPWyKLTNcbo1YS8XlLo9o/edit

## React 

What does reactivity mean? 
How changing state reflects changing in the DOM. 

We have 2 variables: 

How do we keep variable A and variable B stay together?

```
a = 2
b = a * 10
```


```
onStateChanged() => {
	view = render(state)
})
```

> [00:03:53] And that function is called a set state. Set state simply takes the new state, and replaces the old state, and then calls update function again. Right and if you've used React you will find this extremely familiar because React forces you to trigger on state changes of your setState.

> [00:04:12] And this is essentially what React is all about. Not all about but this is in a nutshell how React works, right? So we've noticed something different in the view context or in the angular context that we can, in fact, directly manipulate the state without having to call set state.


Task: 
Create Getters & Setters 


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

WTF? 
`enumerable` ?

Yikes, this is so over my head: 

So what I gathered from it...

1. You create a function that has getters and setters. 
2. Then you create an observer, to watch for changes. 

## Writing Plugins

`Vue.use(plugin)`


A plugin is something that just takes Vue, and does something with the Vue itself.

Mixin is a global API that applies to every instance. 

It's a better idea to wrap global mixins in a plugin interface. 

Another common use-case is the $options property. 

What's the value of a plugin?

![](https://i.imgur.com/RhPvGhX.png)

`rules` is not a real method in vue. 

But to call it, you'll have to write 

```js 
created() {
	if (this.$options.rules) {
		// we can do something 
	}
}
```


But you'll have to do that with every single component.

Instead, it'll be better do to this:

```js
const myPlugin = Vue => {
	Vue.mixin( {
		created() {
			if (this.$options.rules) {
				// we can do something 
			}
		}
	})

}



```

## Render Functions 

>> Evan You: So we talked about reactivity in the first section, and now we're talking about random functions, and random functions are essentially the other half of the puzzle that completes the whole reactivity rendering system in view itself. And in case you don't know render functions, view templates are in fact compiled into render functions under the hood.

![](https://i.imgur.com/m90J4sd.png)

This is how Vue works under the hood. 

1. Your jsx compiles into JS code. 
2. It returns that JS code, creating a virtual dom behind the scene.
3. While generating a actual dom. 

When things start getting 'reactive', that's the virtual dom moving around.

![](https://i.imgur.com/DeSIXBc.png)

So this is how it moves so fast. 
Virtual dom compares diffs from old virtual dom.
then reapplies it. We apply the minimal amount of changes. 


ACTUAL DOM
`document.createELement('div')`

VIRTUAL DOM
`vm.$createElement('div')`


A real div node is very heavy, with lots of features behind it.

When we say, "Touching th dom is slower."

![](https://i.imgur.com/klLV4Vo.png)

It literally looks like a object. 

Creating a 1000 cheap virtual dom elements is way faster. 

> Virtual DOM:
> (Essentially) A lightweight JavaScript data format to represent what the actual DOM should look like at a given point in time

If we, say, use inner HTML to update our app, we're essentially throwing away all the previous DOM nodes, real DOM nodes, regenerating all the real DOM nodes again. So this cost is much much more expensive than, say, just generating a new virtual DOM snapshot. And inner HTML also has a problem.

The Virtual DOM isn't just because it's faster, but because 

>  But a common misunderstanding is virtual DOM is what makes a lot of these frameworks fast. It does not. Virtual DOM is just a way to get around the limitations of the original DOM so that it enables this paradigm of declaratively composing what you want the DOM to look like.

> Virtual DOM:
> Decouples rendering logic from the actual DOM - enables rendering capabilities in non-browser environments, e.g. server-side and native mobile rendering.


For all these JS frameworks -- 
> It doesn't need to ever touch the DOM. And in fact, if we abstract out these eventual connecting points, API's that touch the DOM and then sort of redirect them to other places.

> We can create the same app running virtually in any environment that supports JavaScript, but it doesn't necessarily have to touch the DOM. Instead, it can talk to a native rendering engine, for example, iOS or Android. Or on the server side, we can turn the virtual DOM into strings or a string finder.

![](https://i.imgur.com/z6RvzgH.png)

**JSX vs Templates**

In Evan's opinion - they're the same thing. 
People compare the two. 

```js
export default {
	render (h) {
		return h('div', {}, [...]);
	}
}
```

We start with template API as the default.
But you can drop down to the Render Function API if you want. 

Hyper Script is a script that creates HyperText, which is HTML.

Which is by convention, we shorten it to `h`. (As seen in the example above) 

![](https://i.imgur.com/x7ZJbZQ.png)

1. Creating a div with some inner text. 

2. Creating a div with a class on it, then inner text. 

3. This is a div, with some children element, and some other stuff. 

`h` can also directly render a component. 

WTF:
Functional components versus stateful components?

**Stateful Components (normal components)**
Stateful components are 

**Functional Components**
Functional components don't hold any state of their own. So it's kind of expended in line which makes it extremely cheap because there's no overhead of creating a backing instance, holding all these data properties in place and everything

Use case are when you have a lot of leaf nodes (a list), but inside they have don't much need for state -- presentational components. or example, you're just rendering a button, or just rendering a static avatar or something.

If you have these presentational components which simply takes some data, takes some props in and renders some output depending on their props then this seems a perfect candidate for functional components.

And if these components are repeated in many places in your app, turning them into functional ones should boost the performance of an app. 



![](https://i.imgur.com/Vgp1tG1.png)

this render function creates the following: 

```html
<div>
	<h1>0</h1>
	<h2>1</h2>	
	<h3>2</h3>
</div>
```


The goal is to create a div that a dynamic component. 


**Higher Order Components**

A react thing. But let's go into it.


```
// Dynamic Component 

Vue.component('example', {
	props; ['ok'], 
	render(h) {
		return this.ok ? h(Foo) : h(Bar)
	}
})

// Higher Order Components 
function withAvatarURL (InnerComponent) {
	// you can create a cache so it's not always fetching here

	return {
		props: ['username'],
		data () {
			return { url: `http://via.placeholder.com/200x200` }
		},
		created() {
			fetchURL(this.username, url => {
				this.url = url
			})
		},
		render (h) {
			return h(Avatar, {
				props: {
					src: this.url,
				}
			}
		}
	}
}

```
Provides a higher level of reusability. Easier to test, since there's no business logic. If you use a conditional Mixin, you're testing it twice.
 

> [00:05:26] So this is good, because it shows that it is a good encapsulation mechanism. The only interface we're using to talk between the parent and the child is view props. Because the way we communicate is so constrained. This make ensures that change in the inter implementation of this enhancer doesn't affect other parts in your code.

> [00:05:49] This is critical, if you have a large team, a large project. And you want to make sure when you are changing things, you're not stepping on other people's toes, not accidentally breaking other things. The trick to that is, make sure this piece of code, finding contracts with other parts of the code base, is minimal.


## State Management

State management didn't exist until Facebook and Flex. 

**Why Vuex?**

> [00:06:26] For example, you grab some data from the backend API, and your page A needs that data, your page B also needs that data. And even worse, there could be two different components nested in very different, deeply nested component trees, but they still need to access the same piece of data.

> [00:06:46] So the question becomes unclear which component should own the data, right, and eventually, you realize neither of them should own the data. The data should be hoisted out to be managed in a centralized place if the data is meant to be shared by multiple components across your app.

**Difference between mutation and actions**

**Mutation**
* Must be synchron. Because devtools! 
* mutation is what changes the code. mutations' focus is just on dealing just with the state.
*  you know there's the time travel feature and we have snapshots of your state whenever a mutation happens. If you want to take snapshots then it is critical that the mutations be synchronous because you can compare the before and after immediately after the function is called
* If a mutation can contain arbitrary asynchronous operations, then after you call the mutation you don't really know how long you have to wait until your state has actually changed.

**Actions: **
* Async
* Also inside actions you can do a lot of things like calling to external APIs, whereas your 

## Routing

hash API vs 
HTML History API? 

> So, we all know that in the browser there are two ways to do routing you can use a hash or you can use the HTML5 History API. HTML5 History API is better in the sense, it supports pop state and you get better looking URLs but it requires some sort of server configuration, so that when you directly visit a deep link, the server still renders the same static HTML page for your client-side router to pick up.


## Form Validation 

Two schools of thought. 
Markup-based - Vee-validate
This is about declaring your rules inside the markup.

Model-based -- Vuelidate 
This is about declaring your rules inside of Javascript.

![](https://i.imgur.com/WrEKKXt.png)

You can also set up an array of functions in JS land. 
`validate: compose(greaterThan(5), allCaps())`

You can set up watches


In `beforeCreate()`
The reactivity system hasn't been initialized.

> Evan You: So how do we implement that?
> Evan You: Let's go back to the master branch and try to implement that. So remember for any plugin, we should have an install method which takes Vue as the argument.
> Evan You: And, let's think about what we need to do for this plug-in.

> [00:06:05] We need to be able to process this custom validation's object. So, that means we need to have a global mixing that injects the created hook into every component. And then we check if (this.$options.validations), this is where we need to do work, right?
> Evan You: So some of the, let's see if we actually should use the created hook, right?

> [00:06:42]
> There's really, so some of you might start to think you can set up watchers in the created hook. Each of the properties run through the validations, and then set the data onto the $v right, that works. That could, indeed, work. But that feels very imperative. Is there a more declarative way to think about this?

> [00:07:08]
> The fact is, there is. So, let's look at this $v thing. What should it be? Should it be just an object on the instance that we can mutate? Or could it just be some declarative mapping from our current form state? So if we take that approach, let's actually mix it in as a computed property, right?


![](https://i.imgur.com/ikUdCqI.png)

You can do something like this to test if the value even exists:

```
Object.keys(rules || {}).forEach(key => { // ... }

```


## Internationalization 

vue-i18n -- It comes with performance cost. 

```
<h1> {{ $t('welcome-message']}</h1>
<button @click="changeLanguage('en')">English</button>
```

So this is not very performant since it has to run through the entire app to switch content, and can do it over again. You don't have to save all the JSON in one spot.


An alternative is to instead have multiple apps and just do it at compile time.
Essentially - 2+ versions with different languages, set at differnt URLs?

If performance gain is needed, do it.

![](https://i.imgur.com/MPEXSgt.png)

Then wire it up using prototypical inheritance (Evan's recommended): 

```
const i18nPlugin = {
	install (Vue, locales) {
		Vue.prototype.$t = function(id) {
			return locales[this.$root.lang][id]
		}	
	}
}

```

```
this.$root.lang // this starts the reactivity process 
```

(Or you can do the mixin way)
There's no performance issue because it doesn't have to wire it up.


## Wrapping up Advanced Vue.JS

Web Components? 

angular 2.04 uses web components, and the other falls back.

interop - what does that mean?


The Future: 
> Evan You: Upcoming? One of the things we are gonna do is, the next big thing in you is probably a rewrite a build that only runs on latest modern browsers. Currently we have a lot of code that's dealing with legacy browsers, IE9 or stuff. Which sort of [COUGH] [INAUDIBLE] Library itself and places a lot of restrictions, because we cannot use any of the latest ES features.

> And it's kind of a pain, because when you know ESS set on map would be better suited for this case, but you cannot use it, so you have to [INAUDIBLE] Yourself, or use a less capable alternative in the library. So, I am pretty looking forward to the day where IE is just completely dead, so that I can drop everything about them.

> And then we'll rewrite the reactivity system using ES 2015 proxies, which will be able to get rid of some of the gotchas we currently have in Vue, for example, adding new properties. I'm gonna have to call vue.set if you were using properties, and you can also directly assign to indices into arrays without having to use Vue set again and you can delete properties.

> And observation will be lazy by default, so there will be a lot of benefits if we are able to sort of both drop a lot of weight, and also improve the current system even more.

