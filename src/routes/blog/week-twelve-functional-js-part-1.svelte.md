---
title: Week Twelve - Functional JS Part 1
created: 2022-01-31T00:00:00
summary: Functional JavaScript First Steps (Part 1)
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

Anjana Vakil 

https://observablehq.com/collection/@anjana/functional-javascript-first-steps

https://frontendmasters.com/courses/functional-first-steps/introduction/


## What is functional programming

![](https://i.imgur.com/V17RpWd.png)

> [00:01:30]
So you might have heard about some functional languages like Haskell or Clojure. Maybe some other ones, like for the front-end, there's Elm. There's some languages that support multiple types of programming including functional, and let's say object oriented like F Sharp or Scala. And then there is JavaScript, which probably does not usually get described as a functional language, but is actually really wonderful for learning the basics of functional programming in my opinion.

It's not a coding style. It's a paradigm. A way of thinking.

Other Paradigms: 

Imperative
* follow my command
* do this then that

Declarative
* this is what I want.
* Do whatever your want

Object oriented 
* Keep state to yourself
* send/recieve messages


> [00:04:01]
But in object-oriented programming, we use concepts like encapsulation, where we have objects that keep internal values to themselves, and they can change those values. Which when we have values changing over time, we have something called state which we're gonna talk about several times today. And then those objects since they're encapsulated, they keep that to themselves, but they can talk to each other through messages that they pass by, for example, calling methods on other objects in the program.

> [00:04:31]
So you have a kind of this message passing lifestyle where the world of the program is made up of these little kind of cellular objects that are little encapsulated units, and they behave by interacting with each other through messages. If you're curious about how that all works, I have a talk you can find on YouTube.

It's one TYPE of Declarative programming. 

It boils down to one thing. 
PURE FUNCTIONS. 
Input in. 
Output out. 

TODO: READ THIS: 
https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming

And check out 
https://www.recurse.com/about

TO WATCH: 
https://www.youtube.com/watch?v=TbP2B1ijWr8


### Impure vs Pure
![](https://i.imgur.com/A1mUBIb.png)

Issues with the impure: 

1. `name` is declared outside
2. there's no return value. 
3. It's using `console.log`, which is updating the OUTSIDE world. 

The big asterisk with functional programming! 
How do you do anything? You can't update your profile, you can't change your password. 

The pure function DOESN'T DO anything!

When we're doing functional programming, it's about the computational programming. 

It's about pushing the data OUTSIDE. The inside is totally pure. 

### Why?

**Why Functional Programming**
You create code that's much more predictable. 
Safer. Dependable. 
Easier to test/debug. 

You don't have to run the entire program to load, scaffold, just to test. 

For writing data transformations in a high-stakes environment, functional programming is great for that.

**Why Functional Javascript**

* Because object-oriented JS is tricky
Prototypes & inheritance is a wild world. 

* It's an established community 


QUESTION: Lines of code for a function? 
The tendency in functional programming is that programs tend to be smaller. But it's more about focusing on having pure functions and no side effects. 

### Side Effects

Do EVERYTHING with functions. 
What is my input? 
What is my output? 

That's it. 
The output should be deterministic. 
It means input & output will always be exactly the same every time it runs. Deterministic. 


"What should my program run? `-->` That's imperative. 

![](https://i.imgur.com/qB0UkcU.png)

Look at these side effects: 
![](https://i.imgur.com/7Q6cEMW.png)

Compared to Functional Programming: 
![](https://i.imgur.com/RFZcucy.png)

In FP, it's about creating a NEW thing. 
It's a common strategy. The old one is still the same. 

In Functional Programming, we call them `ary`: 

unary - takes one param 
binary - Two argument function

### Exercise: 
https://observablehq.com/@anjana/exercise-pure-functions?collection=@anjana/functional-javascript-first-steps

QUESTION: 
> "Are all asynchronous functions impure by definition because you're returning a promise that later needs to be resolved."

> [00:12:31]
I think anything you're doing asynchronously is non deterministic because if it was deterministic, then you wouldn't need to return a promise in the first place. Is that correct or am I.
>> Interesting question are all asynchronous operations in JavaScript impure. Because we need to wait for those promises to resolve.

> [00:12:51]
What about a case of a really long running calculation that perhaps if I have some kind of like distributed system and part of one of my processors is doing a long calculation and I'm waiting for that to come back. Well, it depends again on like that calculation and what it's doing.

> [00:13:12]
So I, this is an interesting one and asynchronicity in JavaScript always opens up cans of worms. And again, JavaScript itself is not necessarily the way JavaScript runs is not necessarily like the most pure functional environment. However the operation that we're doing asynchronously, it might not be an impure operation.



## Staying out of the loop with Recursion

![](https://i.imgur.com/FFZ2poX.png)

And how it helps us avoid a more imperative style of looping through iteration.

`looping` is stateful. It's imperative. 

`self-referential` loops is stateless, and functional. 

Base case: It's the thing to help you exit the loop. 

recursive case: this brings you back into the loop. 


```js
// Iteration:
function sum (numbers) {
  let total = 0;
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

sum([0,1,2,3,4]); // 10
```

```js
// Recursion:
function sum (numbers) {
  if (numbers.length === 1) {
    // base case
	// this is to avoid the infinite loop 
    return numbers[0];
  } else {
    // recursive case
	// this deletes the last number
    return numbers[0] + sum(numbers.slice(1));
  }
}

sum([0,1,2,3,4]); // 10
```

Keep this in mind:
* It's a style. You can choose between the iterative version vs the recursion version depending on your team/experience.
* There is no right or wrong. 

Exercise: https://observablehq.com/@anjana/staying-out-of-the-loop-with-recursion?collection=@anjana/functional-javascript-first-steps

Factorial and fibonacci's solution is similar to the MATH method of doing it! The wikipedia math is the solution!


In Functional programming: 
It's strongly typed! It's really restrictive, like only positive numbers. Or a very specific object shape. You'll see a types - typescript, to have a guarantee of that object. 

Performance consideration: 
![](https://i.imgur.com/ciA52l0.png)

`iterativeFibbonacci()`

`recusiveFibbonacci()`
Recursion is much slower. 
It's calling multiple times to each other. The callstack is overflowed. 

One solution to get into is memoization. Hashing the results of fibonacci. 

Too much recursion error: 
The local host has a finite resources. You keep adding frames to the stack. you can switch to a tailcall optimization.  

TO WATCH: Tail call Optimization
https://www.youtube.com/watch?v=-PX0BV9hGZY

Firefox doesn't have tail call optimization. 
Safari DOES take it. 
Node & V8 did implement it. 
When you do tail call optimization, it messes with the call stack. V8 never implemented fully. 
