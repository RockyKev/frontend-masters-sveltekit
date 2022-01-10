---
title: Week Ten - Production Grade Vue
created: 2022-01-08T00:00:00
summary: Production-Grade Vue (Part 2)
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

Ben Hong
Netlify
https://frontendmasters.com/courses/production-vue/

## Composition API
There's a Vue 2 Plugin for this as well. 

The key problem Composition API is solving is reducing the cons that Mixins and Provide/Inject API does.

Currently: 
Object API
Composition API


```js
<template>
    <div class="hello">
    <h1>{{ currentCount }}</h1>
<!--    <h2>Current Count 2: {{ currentCount2 }}</h2> -->

        <h2>Current Count 2: {{ state.currentCount2 }}</h2>
        
        <h2>Current Count 3: {{ currentCount3 }}</h2>
    <button @click="incrementCount">Click</button>
    </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";

export default {
    name: "HelloWorld",
    props: {
        msg: String
    }
    // OPTIONS API
    data: () => ({
        currentCount: 0
    }),
    methods: {
        incrementCount() {
            this.currentCount++;
        }
    },

    // COMPOSITION API - PART 1 
    // Note: similar to data, but not reactive.
    setup() {
        // declare it
        const currentCount2 = 12
        
        // return it
        return { 
            currentCount2
        }
    },
    // COMPOSITION API - PART 2
    // Note: similar to data, but not reactive.
    setup() {
        // declare it
        const state = reactive({
            currentCount2: 12        
        })

        // if you declare it outside, you need ref
        
        const currentCount3 = ref(8);

        const incrementCount2 = () => {
            state.currentCount2++;
        }
        
         const incrementCount3 = () => {
            currentCount2.value++;
        }
        
        // return it
        return {
            // notice it's not ...state
            // toRefs(state),
            state,
            incrementCount2, 
            currentCount3
        }    
    
}
</script>

```

The idea is that it starts to act closer to Javascript.


QUESTION: Should I use ref or reactive?
Use reactive as it's closer to Options API as a mental model. 

### Composition Modules

`composeables` is a common use. 

But it's a bad term. 
Composable, is just utility funcitons.
It's like calling Lodash 'doubles', the doubles folder. 


You can instead move the data to a separate file, imported int othe setup.

```js
export default userCounterMethod = () => {

    // declare it
    const state = reactive({
    currentCount2: 12        
    })

    // if you declare it outside, you need ref

    const currentCount3 = ref(8);

    const incrementCount2 = () => {
    state.currentCount2++;
    }

    const incrementCount3 = () => {
    currentCount2.value++;
    }

    // return it
    return {
    // notice it's not ...state
    // toRefs(state),
    state,
    incrementCount2, 
    currentCount3
    }    
}
```

You have a explicit path to this method. 
It's crystal clear where things are coming from, over mixins & provide/inject.

Let's you pull out what you want, and expose it. 
It's more clearer to read.



QUESTIONS:
In composition API:
1. What is a ref? (reactive reference)
2. What is reactive?


## State Management

Vuex Best practices

What data should go into Vuex?

* Data shared between components that might not be in direct parent-child relation
* Data taht you want to keep between router views
** route params are more important thought

What to avoid putting in

* User Interface Variables
    * isDrowntownOpen, isInputFocused, isModalVisible
    
* Forms data
* Validation Results
* Single records from teh API

QUESTION: Do I always need a getter to return a simple fragment of a state?

No. 

![](https://i.imgur.com/a8HOpvc.png)

Treat it like a computered property.
If you need to share derived vuex state between components, make a getter.


PROTIP: (debatable)
Avoid calling mutations directly in components.

Seems like using excess boilerplate to use actions to mutate.

> [00:07:29] And so what this means is you can just call your actions and then basically programmatic, like the algorithm will know which things you're trying to mutate in the state.

> I would recommend sticking with actions in this particular case. Because the moment you have an actual mutation linked together, it's like the provide inject example. You've created a fixed relationship where if in the future like over here in shopping list, we change either I don't know call it the mutation and how it works.

> [00:02:02] This can actually break what's going on over here. Whereas if you have an action you still need to update if things renamed and things. But you allow sort of a better, sort of a more declarative way of saying what you wanna do and then the implementation details can be taken care of later.

> [00:02:17] As opposed to doing the mutation directly from module to module. So, hopefully that helps answer your question. [LAUGH] So the statement made in the chat is that they enjoy the declarative nature or the more explicit nature of using this dot store, dot state, or dot dispatch, in order to be very explicit as far as what you're accessing rather than conflicting it with the component namespace, right?

> [00:02:43] So in this regard, it's related to the first question regarding weather map state or accessing the disk dollar store makes more sense. And so this is a perfect example of I think it's important to define what makes the most sense for your team long term. And so you're right if you feel that over time either the the local data instance is started getting muddled up with the map functions.


Question - Multiple mutations per Action

> [00:05:32] So the other question we have here is regarding whether. A single action should only commit one mutation. Or I think the other one was whether a mutation should update multiple pieces of state. So I'm gonna answer this formula question, if I'm wrong, please, please clarify for me. So when it comes to actions, there really is no call it best practice, for how many mutations you should be committing.

> [00:05:57] After all, especially when you have things as complex as fetching an API and then breaking it out. A lot of times there are multiple things you're committing, because the API might give you one large response. Then you want to chunk out into different modules or different methods. There are definite reasons to commit more than once in an action and there's absolutely nothing wrong with that.

> [00:06:16] As far as mutating state, this is a more nuanced question, because the idea here is that, do you want a single mutation to update multiple pieces of state versus one? And so I think this is, call it a gut feeling. Unfortunately with this one, in the sense that think of it data-driven refactoring from.

> [00:06:36] I would probably start with atomic pieces only because atomic pieces can be composed into action. And so unless you're really sure about the architecture of this one mutation should update three pieces of state. And this is always the case and it should never change. Then there's an argument to impacting multiple pieces of state with a single mutation.


PROTIP: 
Use built-in map helpers 

![](https://i.imgur.com/dPj5PHf.png)



BEST PRACTICES:
Always use namespace modules. 


DISCUSSION:
With the Composition API, do we even need Vuex?

Vuex still has a lot of help with debugging. Time travel, seeing where things break.

Composition API is great for sharing data. It does alleviate a lot.


### Routing

![](https://i.imgur.com/kSUFRi1.png)


## Testing

Pareto Principle - 80/20 rule. 
20% effort -> 80% results.

Jest is he standard for component testing.
Cypress is working on component testing.

Testing library is recommended by the Vue Testing team. (testing-library.com)

Vue Test Utils is useful at the lower level testing. 

BEST PRACTICES
1. Don't test that vue works. Test that things are showing what is expecting.
2. Primarily stick with shallow rendering. So instead of testing a collection of components, test the most shallowest level. 
    * A common component can break many tests.

3. Build unit tests into generators

Unit tests aren't the best 20% to focus on.

The man goals of the core business test:
#1. Can the user login?
#2. Can the user pay us?

If any of those tests break, then it's super critical.

If I take out one feature -- that super critical level, will it work?

End-to-end testing
Cypress, TestCafe

Best Practice E2E Testing
1. Don't maintain state between tests

    "In test 1, grab a token."
    "In test 2, use that token to do something else."
    
    That will break down a chain.

    Achieve one thing without breaking anything else.

2. Don't select elements with classes. It's fragile beacuse classes change. A popular solution is `data-test='thing'`

Another idea, using user intent. A submit button, or a link. 





REACH OUT TO FE_MASTERS
https://frontendmasters.com/courses/production-vue/testing-libraries/
https://i.imgur.com/avGnCb2.png



## Code Maintenance

> [00:00:40] Because as we know, as I mentioned earlier, I've worked on teams where like the contractors are working on the other side of the world. And so this makes timezone overlap like near impossible. And so if you can imagine if someone writes something in a way that breaks convention, and they're allowed to, and then that enters the code base, but then they're the only ones who know understand or how to fix it.

> [00:01:00] This means now you're gonna basically lose a whole day of development over like these bugs. 


### Why are "best practices" important

What we want at the end of the day?

* faster dev
* Fewer bugs
* More opportunity 

Think of it as 'chosen conventions'.

### What makes a convention Good?

Two primary factors: 

1. They enable devs to write great code with a low barrier of entry
2. They are easy to refactor and/or abandon

Generators and automate shit

https://github.com/bencodezen/vue-enterprise-boilerplate/tree/main/generators/new

Implementation
STAGE 1 - Pre-commit - 
 -- add testing to the pre-commit
STAGE 2 - Pull request
 -- 

STAGE 3 - commiting code - linting
 -- 


Look into ESLint A11y plugin



I hate that Production-Grade Vue.js
Vue or not, I think this is -- 
Code Maintenance section is really good. 

Check out this:
creates a live style guide
https://vue-styleguidist.github.io/

Another is storybook vue





