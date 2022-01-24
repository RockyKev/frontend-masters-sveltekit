---
title: Week Ten - Vuex
created: 2022-01-10T00:00:00
summary: Introduction to Vue 3
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

Divya Tagtachian

REPO: https://github.com/shortdiv/frontend-masters-vuex

https://frontendmasters.com/courses/vuex/introduction/

SLIDES:
Vuex 1: Introduction to State Management
https://slides.com/shortdiv/vuex-1

Vuex 2: Vuex; The Good Parts—State, Getters, Actions, Mutations
https://slides.com/shortdiv/vuex-2

Vuex 3: Getting Vuex State into SFCs
https://slides.com/shortdiv/vuex-3

Vuex 4: Composing Vuex Actions
https://slides.com/shortdiv/vuex-4

Vuex 5: Vuex Modules
https://slides.com/shortdiv/vuex-5

Vuex 6: Vuex Plugins
https://slides.com/shortdiv/vuex-6

Vuex 7: Vuex + Vue Router
https://slides.com/shortdiv/vuex-7

Fundamentals of Vuex
Vuex + Vue (SFCs)
Vuex + Vue Router
Composing Vuex
Vuex Modules
Vuex Plugins
Normalizing State

![](https://i.imgur.com/983sTeQ.png)


What is Vuex?

Centralized data store for shared data, logic, and methods, with rules ensuring that the state can only be mutated in a predictable fashion.

![](https://i.imgur.com/cLgbUyC.png)

State - Single source of truth for store state
Actions - Similar to mutations, but it commits mutations
Mutations - The only way to change store state
Getters - Computer derived state based on store state

> [00:01:32]
> And so, the action is what? Is how the application decides or how the store decides what to do with that particular event. This is also a way back in APIs, can come in handy. It's where you're essentially calling to a database, or reading from a data base. And that's what happens within actions itself.


Codepen: 
https://codepen.io/shortdiv/pen/zYGoVwe

Moving state to Vuex

![](https://i.imgur.com/hIcrOsU.png)

![](https://i.imgur.com/FvqJtFp.png)


## State & Getters

Responsibilities & Statement management system

State - centralize state exist

Actions - Make db calls, fetch APIs
Async

mutation - where state is mutated
It's strictly sync. 

getters - And then, getters is sort of this sense of checking over the state or updating how the state renders on the front end. Getter is cached if nothing changed. It doesn't change.

Components never change the state directly. Only the store. 

Async: 
![](https://i.imgur.com/13UyJvL.png)


![](https://i.imgur.com/pNEx3LH.png)


It's the name of the mutation, and a payload. 

You want to know if something is async for the frontend. The user might click multiple times. 


![](https://i.imgur.com/0P8ymnf.png)
So in action: 

Notice - in Line 23 - It sets the state in the frontend.
Then it does the line 26 commit - to pass the data.
Finally, it turns off the loading. 


![](https://i.imgur.com/owo1Hpo.png)
For my getter, it's checking if it's below a certain threshold. And if it's lower than that, it shows that flag.

![](https://i.imgur.com/n7W2ePU.png)
My getter -- isSupplyLow is a true/false question.



## Store

Repo: https://github.com/shortdiv/vuex-sfc
`npm i`

The idea is to move the store out of the component and into the store.
https://github.com/shortdiv/vuex-sfc/blob/step-0/src/components/VendingMachineAdmin.vue



![](https://i.imgur.com/rl0XkNk.png)
There's actually 4 methods available.

commit
getter 
state
dispatch


## Helpers & Actions
![](https://i.imgur.com/bE4epir.png)
You can destructure it.

It's grabbing the commit. 

Destructuring context
https://github.com/shortdiv/vuex-sfc/blob/step-1/src/store/index.js


You have helpers like:

```js
import {
	mapState,
	mapActions, 
	mapGetters,
	mapMutations
} from "vuex"
```
