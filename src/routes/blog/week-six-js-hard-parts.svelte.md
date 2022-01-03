---
title: Week Six - Javascript The Hard Parts
created: 2021-12-05T00:00:00
summary: JavaScript The Hard Parts, v2
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>


https://frontendmasters.com/courses/javascript-hard-parts-v2/
Will Sentance


## Javascript Intro

> [00:01:04]
Now, I also argue that not only does it make you a great senior engineer, in fact, here's my claim. Junior engineer takes any feature they're given to build. And if they've seen technology or maybe the solution before, they can solve it. Mid-level engineer takes any feature they're given to build.

> [00:01:20]
And even if they've not seen the technology or solution before, they can figure it out because they've learned how to learn, they're problem solving strong. A senior engineer is somebody who can take any given feature, and not only just figure out for themselves, but enable the rest of their team to figure it out.

>[00:01:37]
Because they have technical communication, the ability to explain what their code is doing to somebody else in their team, in a clear and cordial manner. But I'd also say even for junior mid-level developers, technical communication is gonna make your own mindset clearer. So the purpose of Hard Parts is gonna differ depending maybe on your background in JavaScript.

> [00:01:59]
If you're someone who's a mid-senior developer, you've seen many of these principles before, maybe you've come from a computer science background. Then think of especially the earlier parts of JavaScript, the Hard Parts, as more about building up your technical communication. The ability for you to verbally work through exactly what's happening on the blackboard here, verbally talk through your JavaScript and your code with clarity and precision.



### Thread of Execution
When Javascript code runs, it:

1. Goes through line-by-line The thread of execution
2. Saves data like strings and arrays in memory

Identifier - a fancy label that computers give to data

We can only do one Thread of Execution once!

It weaves in, and weaves out.


### Functions

Function saves a process.

### Call Stack

It keeps track of what functions is running.

Whatever is at the top of the call is currently running.


As soon as you run Javascript, 
global() is added to the bottom.
Things get added to the stack, and JS handles it.
But when it's finish, it goes back to global().

![](https://i.imgur.com/6803OJz.png)

### Pair Programming:

> What makes pair programming so powerful: 
They can't get off, they can't do it their way they have to take my explanation and implement it and if they're not understanding my explanation, that's all in me. I can't say, hey, actually, let me just show you how to do it, I've got to be able to verbalize with such clarity and precision intuitive style, that my partner can actually turn it into real code.

> That is remarkable, it's gonna refine my technical communication beyond measure. Why pair programming is so important as a team doing these industry reviews with, you know, engineering managers and folks in industry for our curriculum. This new curriculum is what makes us do it, but whatever they make us review the new curriculum, because it's government agency that we're doing it with.

-----

The two types of people and Pair programming: 

> One is the researcher and one is the Stack Overflower, both are avoiding what it really is to be an engineer, which I'll tell you in a second.

> The "researcher" avoids what it is to be an engineer, which is to be able to hit a whole block and somehow resolve through it, that is all it is to be an engineer, how do we actually do that? I should have figured out, here's how we do it, here's how we actually resolve hitting a whole block we go through the code. It's hitting a block and assuming the code, and then console logging essential using some other debugging tool, the data as you go through, line by line. And we spend the following three days reading every last thing about the new keyword, and about all aspects of the prototype chain, and wonderful. And yet we don't write a single line of code, we avoid the block.

> The other approach is to grab snippets of code to fix a bug from Stack Overflow "The Stack Overflower".
> And when that one when we plug it in, doesn't work, take that snippet plus the bit we added. Put it in the Stack Overflow, and say, how do these bits, stick together? 

Why Pair programming is important: 
> Neither is effective in its own isolation, both are necessary to being an engineer, you've done this in the first year of your careers, both of these.

### The state

it's just memory at the current time.

## Functions & Callbacks


### Higher Order Functions

```js
function squareNum(num) {
  return num * num;
}
```
So this is using `num` as a param that we can fill in.
A TBD.

What if it weren't just the data that we could leave TBD in our function that isn't a string, object, etc. What if we could also leave inside a function to be TBD? 

And when we run the function, fill that functionality in? That would make our functions super reusable, super general. 


```js
function copyArrayAndMultiplyBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {

    for (let i = 0; i < array.length; i++) {
      output.push(array[i] * 2);
    }

    return output;
  }
}

const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);

// you'll have to recreate this if:
// function copyArrayAndAdd3
// function copyArrayAndDivideBy4
```


Higher order Functions to the rescue!
```js
function copyArrayAndManipulate(array, instructions) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    for (let i = 0; i < array.length; i++) {
      // now we're just pushing the function!
      output.push(instructions(array[i]));
    }

    return output;
  }
}

function multiplyBy2(input) { return input * 2}
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
```

How do we bottle up a javascript it?

Any function tha takes a function is a **Higher Order Function**
The function we insert is considered the **Callback function**

Keeps it more dry. Because the code is profoundly more reusable. 

Declarative Programming - I declare what I want to happen!


## Closures

Benefit: 
* Esoteric of Javascript concepts
* We can achieve pro-level functions like `once` and `memoize`
* Many JS design patterns include the mdule pattern use closure
* Build iterators, handle partial application and maintain state in a async world

What is Closure

What if it had a memory of what happened before?

It starts with us `returning a function from another function`


```js

function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }

  return multiplyBy2;
}

const generateFunc = createFunction();
const result = generateFunc(3);
```

So what's happening?
![](https://i.imgur.com/C9DuMAk.png)


1. generateFunc's value is the return statement, which is `multiplyBy2`.
2. Now we're at the `result` variable.
3. That variable gets the value of `multiplyBy2(3)`

Javascript is a 'do the line, the move on'. It does not think about the labels of things after it's finished.
So `result` has NO relation to createFunction()! 

All that matters is that `result` GAVE YOU THE RESULT of `createFunction()`, which is `multiplyBy2`

A KEY ISSUE: DEVS DISTRACT THEMSELVES WITH THE LABEL. 
Javascript does not do that under the hood. 
We're doing it with or eyes. 

> Is gonna turn out people. That, saving a function, declaring storing a function inside the execution. Context of running another functions of saving inside its local memory inside another function. When that function gets returned out, it gets the most powerful property bonus feature of JavaScript that we can ask for.

```js
function outer() {

  let counter = 0;
  function incrementCounter() {
    counter ++;
  }

  incrementCounter();

}

```


![](https://i.imgur.com/CjQqYuN.png)


What does `myNewFunc()` have?


If you run it, it runs `counter++`.

Functions return their outputs. That's kinda their thing.

So where does the variable counter come from?

Well, if you check the outer scope, or the global scope, there is no counter variable.

### The backpack concept: 
Functions actually return their `local scope, and their result`. 

So sequence of events:

1. It checks the local scope.
2. Then it checks the backpack.
3. Finally it checks the Global Memory. 

If it exists in the function 'store', the permenant storage, the "backpack", then it incremenets it there!

It's located in 

[[]] means hidden data. 

[[scope]] -- it pulls this `backpack`. It's still attached when you pull the function.


### Caveats
You can only mess with 

You can't access myNewFunc().scope.counter... that's illegal - doesn't work.
The only way to access is to write a function that messes with it.

It's private data!
It's presistent data.


### What they call it

The backpack -- which is inaccurate. Because they call the function, variable... whole thing something else.

Devs call it: 
Variable environment
Closed Over Variable Environement. (Cove)
Function's closure. 


Scope is the data that i have access to me right now.

![](https://i.imgur.com/JM9xxmm.png)


Sequence of events:
`const anotherFunction = outer()`

1. anotherFunction gets the results of the `incrementCounter()`
2. That result is `counter++`
3. It then gets the `local scope` of that function as well, getting shoved into [[scope]]
4. 

### Use-cases

`once` -> set a lookup so that if the function once
useful for say, a video game where you complete it, try to run the funciton again... nah dude.

`memorization`

If you have a 100^, it'll give you a massive calculation.
Well, why do this hard calculation multiple times?
Just store the data in the backpack!

Module pattern:
Data that exists in the 



## Async Functions

![](https://i.imgur.com/ilx63E5.png)

### Web API

So web apis are things that aren't native to javascript.
Javascript console is not a real thing. Nor is fetch. nor is setTimeout.


So why is the sequence of events like this?
THe question is... why is this the case?
![](https://i.imgur.com/rpvh0Qa.png)

Assume the waitfor1sec() is a expensive 1-sec add a billion items to an array.

1. the `waitfor1sec()` function fires
2. The `console.log` fires
3. THEN the set timeout?

Because how it gets added on the call stack.

First, it setsTimeout(), putting a callback to come back once it's finished.
But we have to keep going while we're waiting. So we add the `waitfor1sec()` function.
The console.log fires.
The setTimeout() callback has been waiting very eagerly, but we can't get to it until we run everything else! Because it gets added to the Callstack Queue.

Because that's how Javascript is made.

Javascript MUST run every single line of code in the call stack.
When that is completely finished, then it checks the Callstack Queue.

That's the event loop.


### Promises

![](https://i.imgur.com/qS16ejW.png)

Future data.
fetch is a very very powerful command. 
It:
1. goes out into the internet to grab data.
2. It creates a empty object.
3. It watches that object.
4. When data is finally returned, it fills that object.
5. If the object is filled, it then lets you know.
6. using `.then(randoFunction)`, you can then pass a function into that array that gets manipulated.
7. The thens manipulate that data even more!

That object looks something like this:

```
{
    header: ...
    response: null,
    specialFunctions: [...whateverThenFunctionsYouAdd],
    onRejection: ... (for try/catch errors)
}
```

And once that response hits... it hits.


### Async code

So by default... Javascript goes up and down. Read it, execute, move on.

Well, if you have a function that needs to wait... TOO BAD. We're moving on without you.



### Fetch, promises, more queues!

So if you have a `fetch` and a `setTimeout`, and a `waitfor300ms()` function.

![](https://i.imgur.com/Wh13Pnp.png)

1. Code goes up and down. 
2. It goes and setTimeout().
3. setTimeout() goes to live in the browser task as it's going to do that.

4. It goes out and `fetch`

    * In the middle of that, SetTimeOut is finished! So it goes into the Event Queue.

5. `fetch` is finished! That also goes into a queue. (But not the event queue, we're coming to it)

6. It continues to read the code and output console.log.

The Event loop realizes that the event stack is empty now!
So it'll dig into... the queue! (queues really!)

7. Hey, fetch actually put the data in the `microtask queue`. 
While the setTimeout() put it in the `event queue`
WTF?

8. Well, microtasks have priority! So there it goes!

### The event stack and the two queues

1. Event stack

Anything that is ready to execute goes on the stack.

2. Microtask Queue

Anything resolved with promises. 
The Event Loop will check this place FIRST. So, if you make a promise that keeps adding new microtasks queues, 
in node, you can "starve" the `event queue`. 

It'll keep executing the microtask queue, because new things keep getting added.

3. Event Queue

Anything with callbacks. 


## Classes and what the new keyword does under the hood

### Factory Function

So a factory function creates objects.

something like

```js
function makeNewMage(name) { // ... };

const JakeTheMage = makeNewMage('Jake')
const SarahtheMage = makeNewMage('Sarah')

```

NOTE: He covers this whole hour in Javascript OOP the hard parts. 
