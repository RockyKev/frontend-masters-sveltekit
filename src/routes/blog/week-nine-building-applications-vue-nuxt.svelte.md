---
title: Week Nine - Building Apps with Vue & Nuxt
created: 2022-01-03T00:00:00
summary: Building Applications with Vue & Nuxt
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

Source: https://frontendmasters.com/courses/vue-nuxt-apps/introduction/
Sarah Drasner 

## Introduction 

* I like games because there's a lot of state management in games. 
* Then a food ordering application. 
	* Slots 
	* Dynamic Pages
	* Car logic
	* Validation 

* Composition API

Link to resource: 
https://github.com/sdras/building-web-apps-with-vue


SLIDES: https://slides.com/sdrasner/building-vue-apps-3-foodapp?token=DiquCMbB


VSCODE Snippets: https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets

TODO: How to read API.  https://www.netlify.com/guides/creating-an-api-with-aws-lambda-dynamodb-and-api-gateway/api-gateway/

Working with SVG Graphics in Vue:

![](https://i.imgur.com/guhYfyI.png)

She made a single svg in Photoshop. 
She labeled them correctly, put them into folders...
Then she exported it as a SVG. 
That puts them into IDs. 
Then she can target them directly.

The other option is she's just puting the SVG directly into a Vue Component.

## Quiz Game App

SLIDES: https://slides.com/sdrasner/vueapps2?token=oePuyn8o

Repo: https://github.com/sdras/building-web-apps-with-vue/tree/main/game-problem

You might have to `npm i node-sass sass-loader`

```js 

state: {
	uiState: 'start',
	// ...

}
```

I like writing strings in `uiState` instead of booleans because you can then manage your state with a specific 'state', rather than a bunch of booleans checking it. 

Things she did: 
1. She put the data directly into the Vuex store. 
2. In the computed properties, she's using `mapState[]` to bring data from the store/index.js` 

She creates a GamestateStart.vue, which changes based on the uiState. 

`gsap` Greensock is stable with every browser. Using transform is different for every browser. 

```js
<script>
import gsap from "gsap";
import { mapState } from "vuex";


export default {

	computed: {
		...mapState(["score"]);
	},
	watch: {
		score(newValue, oldValue) {
			gsap.to('#needle', {
				duration: 0.3, 
				rotation: newValue, 
				transformOrigin: "50% 100%" // she changed it to 50% 87%		
		})
	}
}

// She also adjust the size of the score to fudge the numbers. // https://github.com/sdras/building-web-apps-with-vue/blob/main/game-solution/src/store/index.js#L61
</script>
```

`Math.sign(state.score)` to safely convert a number into a -1 or +1. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign


Fisher-Yates is the shuffle that lodash does. 
More info: https://bost.ocks.org/mike/shuffle/
Her snippet: https://github.com/sdras/building-web-apps-with-vue/blob/main/game-solution/src/App.vue#L153

In a SVG: 
Think of `defs`, think of them as a staging area. 

masking vs clipping:
https://css-tricks.com/masking-vs-clipping-use/

Look at this amazing code: 
codepen - xray skeleeton: 
https://codepen.io/noeldelgado/pen/ByxQjL



## The Food App 

### Building a Food App with Nuxt

The project: nuxtfoodapp.netlify.app

Nuxt - 
it's a meta-framework

* Excellent performance
	* Tree shaking
* Automatic generated Dynamic Routes 
* Automatic Routing
* SSR / Jamstack / SPA rendering 
* Elegant defaults & great organization 

Nuxt comes with the vuex store by default. 


Folder structure: 
Layout - We can put it in this layouts default, and then it will persist on every page. And that's really nice because we can also create different types of layouts as we work middle ware is, you're gonna see in a second, we're gonna make pages by simply putting a view file in a pages directory.

Hero generator: 
https://hero-generator.netlify.app/


Middleware - 
[00:05:31]
So in middle ware, you have access to those routes, and that's where you can apply some logic. So middle ware is a great place to do things like auth. Middle ware is a great place to do things like tell the store about the route changing or something like that.

[00:05:45]
That would be done in middleware. And I mentioned this about the pages directory, we have an index page. And we have this kind of defaults container. You see this logo being brought in, just like we did with the view CLI and we are able to have this kind of defaults, but what's really nice about it Is that we have, a base index file and all of a sudden we have a page.

plugin - it's like mounting in the main JS folder. 

static - any static files. 

in nuxt.config.js: 
head, global css, plugins
https://nuxtjs.org/docs/directory-structure/nuxt-config/


### Vuex Store 

Actions. Actions can't change the state, actions can commit mutations that change the state. But actions are good for asynchronous logic.

Mutations are the only thing that can change the state. So in our game application, they're synchronous.

So in this case, what we're going to do is we're going to use an action to do that kind of async stuff, and that action will call a commit in the mutation.


### How to make a API: 
https://www.netlify.com/guides/creating-an-api-with-aws-lambda-dynamodb-and-api-gateway/api-gateway/

The endpoint: 
https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants
  
There's a api key and you also need to set up stuff
```js
try {

	// check if the data is already there or not
	if (state.fooddata.length) return

	await fetch(URLHERE, {
	headers: {
		'Content-Type' : 'application/json', 
		'x-api-key' : process.env.AWS_API_KEY
		}
	})
		.then(response => response.json())
		.then(data => {
		console.log(data);
	
	} catch {
		// errors here
	}

```

For local vs server: 

she created a `getfood.server.js` in the plugins folder. 
So she can get the API code. 


NOTES: 
for props arrays - 
YOU MUST return an return value. 
```
type: Array, 
default: () => ["tacos", "pizza", "dim sum"]
```
  



## Filtering Data & Adding Dynamic Pages 

Performance thoughts 

Using a for loop to filter, rather than `filter`. 






## Vuex 


### Getters
[00:05:14]
But don't overuse getters. In other words, if one component Is just thinking about itself. You don't necessarily have to put it in the store in as a getter in order to do so. The reason why I caution against that is for big enterprise apps at scale. What can happen is people are using that Vuex Store not just a place to keep the centralized state data.

[00:05:37]
They're also using it as a self documenting place to understand the brains of the application. So if you put tons of getter information in that store. You're causing people to kind of look through a ton of information to understand what's going on for the application for the whole, for that full application.

[00:05:56]
It doesn't matter too much with a small application, but you'll start to see this that Vuex enterprise apps at scale that we need to kind of keep the Vuex Store a little bit more modularized. And Divya has a great course that shows how to use Vuex modules and goes into more depth there as well.

## Forms & Composition API

SLIDES: https://slides.com/sdrasner/building-vue-apps-4-compositionapi?token=IAnBmcyn

## Validation 

It gives you a few things to check and hide things.

Vue validate blog: https://css-tricks.com/form-validation-in-under-an-hour-with-vuelidate/


## Migration to V3 Composition API 

It's about reuable components or logic 
to remove mixins 
It's about encapsulation

Clear what's being exported. Within mixins, it's not clear what is given. 



inspired by React Hooks

https://v3.vuejs.org/guide/migration/introduction.html

Also library of recipes 
https://vueuse.org/


TIPS: 
Reducer - https://css-tricks.com/understanding-the-almighty-reducer/




