---
title: Week Five - JS Object Oriented
created: 2021-11-27T00:00:00
summary: The Hard Parts of Object Oriented JavaScript
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

## Intro

Slides: https://static.frontendmasters.com/resources/2018-10-03-javascript-hard-parts-oop/javascript-hard-parts-oop.pdf

OOJ is a way to organize our code as it gets more complex, so it's not procedure.

It's about combining things into a 'package'. Put all the scores.

The goal of OOJ object oriented javascript is can we find a way to bundle up all of our functions the same way.


Execution Context - what does it mean?
![](https://i.imgur.com/wSU6ZTu.png)

## Object Creation

This is the best way to organize code.

```js
const user1 = {
  name: "Phil",
  score: 4, 
  increment: function() {
    user1.score++;
  }
};
```


```js
const user = Object.create(null) // user = {}
```


Generate objects using a function

The issue with this: But hard to add features we're gonna see, and fundamentally untenable in terms of whether it's going to be performant in terms of memory.

Using this: 
user1000 will also have the `increment: function() { ... }` copied.

That's 1000 versions of the same function. 
Not at all memory performant.

```js
function userCreator(name, score) {
  const newUser = {};

  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  };

  return newUser;
}

const user1 = userCreator("Phil", 4);
const user2 = userCreator("Julia", 5);

user1.increment();
```


Thread of execution
Execution context 

What makes this untenable is that the functionality is IDENTICAL. `newUser.increment()` is it's own instance.
It's creating it's own version of it.

What we want is a 'global' space where it can find `increment()`

## Prototype & New

It's better to store one a single item. 

Use it on the prototype chain!
![](https://i.imgur.com/paVyhxt.png)

The goal of Object Oriented Javascript is:
can we bundle up the relevant functionality and relevant data that applies to it?

Not go out and find it in another file somewhere in the ether. That it's bundled up in the code.



BEFORE
```js
function userCreator(name, score) {
  const newUser = {};

  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  };

  return newUser;
}

const user1 = userCreator("Phil", 4);
const user2 = userCreator("Julia", 5);

user1.increment();
```


NOTE: This will answer one of the popular senior dev question -- how does the `new` keyword work


AFTER
```js
function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function() { this.score++; },
  login: function() { console.log("You're logged in"); }
};

const user1 = userCreator("Phil", 4);
const user2 = userCreator("Julia", 5);
user1.increment();

```

`user.increment()` is a hidden properties of objects is `__proto__` dunderstore (double understore) --

It goes to the hidden reference. It's making a link, a reference, to the prototype. It bonds up.
It does NOT store it in the object. It's referencing.

To run `user.increment()`:

1. Javascript starts by looking for `increment()`
2. It will see an error, which then moves into the `__proto__`
3. It sees it's in there, and grabs that and uses it.

This is Javascript's prototypal nature.

This is the underlining feature of Object Oriented Javascript.

NOTE: 
This is it. 
Everything else is using the above, but cleaner. 
This is Javascript under the hood. 

![](https://i.imgur.com/C1yM0a3.png)


Other languages do this for us. 

JS engineers said, "Well give you a tool for that".
Javascript gives us a `new` keyword to make it.

We just hand-creating the 'bond'. 

### New & this keyword

This keyword:
![](https://i.imgur.com/jg6kyyw.png)
first, it creates a `this`. It's whatever is the lefthand side of the dot.


```js
const user1 = new userCreator("phil", 4);
```

The `new` keyword will automatically get a bond with the new functions.

Is there some place we can put those `userFunctionStore` functions?




### functions are both objects & functions

```js
function multiplyBy2(num) {
  return num*2;
}

multiplyBy2.stored = 5;
multiplyBy2(3) // 6


multiplyBy2.stored; // 5
multiplyBy2.prototype; // {}
```

They become function-object combos.

It's a very rare case you'll use a function and all of it's object bits.
But you will in Object Oriented Javascript.

The function gains prototype because...
![](https://i.imgur.com/guWpR6n.png)

So we can put functions inside the `function--object`, and put it inside the function's `prototype`. 

### The new Keyword & How to Share functions with prototype

![](https://i.imgur.com/AKL8qif.png)

BEFORE: This was our changes to create a shared function box
```js
function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function() { this.score++; },
  login: function() { console.log("You're logged in"); }
};

const user1 = userCreator("Phil", 4);
const user2 = userCreator("Julia", 5);
user1.increment();
```

AFTER
```js
// it can also be UserCreator. It's just a regular function no magic.
function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.increment = function() {
  this.score++;
}

userCreator.prototype.login = function() {
  console.log("login");
}

const user1 = new UserCreator("Eva", 9);

user1.increment();
```

What does the new keyword do?

1. Create a this: `{}`
2. bonds the `__proto__` bond with the main function.
3. returns the value 

With the `new` keyword, it'll automatically add the bits of code automatically.

`user1 = new UserCreator("Eva", 9)`

The `new` keyword creates this extra link.
And that `__prototype__` is pointing to the `UserCreator.prototype.increment()`

```js
this: {
  __proto__: {}
}
```

This then gives it a fancy name called 'Classes'.

### Review of New

Devs need to let others know that we have to use a `new` keyword in a function. 

```js

function UserCreator(){ //... }
const user1 = new UserCreator();
```

If you fail to use the `new` keyword, then it doesn't create a `this` correctly and fails. 
So devs help each other out by using Capital camelcase.

`this` is known as a implicit parameters.
```js
this.score++; // similar to user1.score++

// if you're on user20, it'll be user20.score++
```

The simple rule of `this`, it will refer to the `this` object INSIDE the function/object/etc.

Sequence of events:

```js
const user1 = new UserCreator();
user1.increment();
```

1. we're looking for the global of `user1`

2. we then look for the `increment()` function inside

`user1.increment()` is known as a implicit parameters.

3. Since user1 doesn't have a increment() function, it'll then...

4. Move up to the userCreator function-object, and check if increment() exists there.

5. It successfully finds an `increment()`


A bad thing to say, "Look into the prototype".
Prototype is not a magic word. __proto__ IS a more accurate term.
A user can rename `prototype` to something else. It's not accurate.



### A Gotcha bug in OOP

```js
// it can also be UserCreator. It's just a regular function no magic.
function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.increment = function() {
  function add1() {
    this.score++;
  }

  // const add1 = function() { this.score++}
  add1()
}

userCreator.prototype.login = function() {
  console.log("login");
}

const user1 = new UserCreator("Eva", 9);

user1.increment();

```

Look at `this.score++`, which is on `add1()`

What actually happens is:
```js
userCreator.prototype.increment = function() {
  function add1() {
    // This is NOT pointing to the object.
    // It's pointing to user1.add1() - user1 is not this. 
    // this is some random ass window!
    // it'll return N/A
    this.score++;
  }

  // const add1 = function() { this.score++}
  add1()
}
```

How they hacked it?
Some weird shit like -- using a `that`.

```js
user1: {
  this.user1
  add1: [f]
  that: this
}
```

The easier way is to use arrow functions!

### Arrow functions

Arrow functions will point `this` to where the function was saved.

```js
userCreator.prototype.increment = function() {
  const add1 = () => { this.score++; }
  add1()
}
```

This is a new best practice. Not the `that: this` process.


Performance - 
Lexical status scoping: lexical means `position on the page`. So it gets destroyed after being called.
`add1()` gets destroyed right after it's finished.


## Class keyword

![](https://i.imgur.com/mmGoH7K.png)

Syntatic sugar
```js
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function() {
  this.score++;
}

UserCreator.prototype.login = function() {
  console.log("login")
}

const user1 = new UserCreator("Eva", 9);

user1.increment();
```

This is exactly the same thing. Nothing has changed.
```js
class UserCreator {
  constructor (name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }

  login() {
    console.log("login");
  }
}

const user1 = new UserCreator("Eva", 9);

user1.increment();
```

![](https://i.imgur.com/mGI5SSb.png)

1. Yellow parts - declare the variables
2. Blue parts - add the 'stored functions' so you can use it.
3. The white part - make a instance of that class.

Classical programming do not put functions inside the `prototype` space.

QUESTION:
What happens when I want to build 'paid' users?
They get new functions that are different from regular users.

I can use the rest of the `users` stuff.

This is called "Subclassing"

## Default Prototype Chain

```js

const obj = {
  num: 3
}

obj.num // 3
obj.hasOwnProperty("num"); // Where does this method `hasOwnProperty` come from?

Object.prototype; // { hasOwnProperty: FUNCTION }
```

In other words... we're 'cloning' Object, that has all these other sweet functions inside it's `prototype`. 

![](https://i.imgur.com/didwhVG.png)

So what happens if you use 

`multiplyBy2.increase()`?

1. It looks in the `multiplyBy2` function list. Doesn't exist.

2. It then moves into the `function` and their own `prototypes`. Nothing.

```js
function: 
  call, bind, apply, __proto__
```

3. It now moves even higher to Object's prototypes...
```
Object: 
  hasOwnProperty, __proto__
```

4. Doesn't exist either!

Now we're showing `null`. 

WARNING:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto

`Object.prototype.__proto__`

no longer recommended.

> Warning: While Object.prototype.__proto__ is supported today in most browsers, its existence and exact behavior has only been standardized in the ECMAScript 2015 specification as a legacy feature to ensure compatibility for web browsers. For better support, use Object.getPrototypeOf() instead.


## Things you should be able to answer at some point

* I know what a variable is
* I created a function before
* I've added a CSS style before
* I have implemented a sort algorithm (bubble, merge, etc)
* I can add a method to an object's prototype
* I understand the event loop in JavaScript
* I understand callback functions
* I've implemented `filter` from scratch
* I can handle collisions in hash tables


## Subclassing with Factory Functions

https://static.frontendmasters.com/resources/2018-10-03-javascript-hard-parts-oop/javascript-hard-parts-oop.pdf
SLIDE 41:
![](https://i.imgur.com/U797B3H.png)

tldr: 
You can split user into moderator & paid user.
THey have different functions.
But they share functions too!


Inherit in JS is inaccurate, since it's not inheriting

In JS: it's searching up the prototype chain.
but in the spirit of inheritance, it's correct. It's being able to 'get this data'. Or the right to look it up



### Creating a Subclass with Factory Functions

![](https://i.imgur.com/rEI8KCQ.png)

solution 2 is known as a factory function. It produces.

```js
// This method, you MUST return it since it has to create the object.
// This is the factory function
function userCreator(name, score) {
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
} 


const userFunctions = {
  sayName: function() {
    console.log("I'm " + this.name) 
  },
  increment: function() {
    this.score++;
  }
}

const user1 = userCreator("Phil", 5);
user1.sayName(); // "I am Phil". This is grabbed from the userFunctions!


// Now we're creating the 2 different versions!
// We want a very specific TYPE of user.
function paidUserCreator(paidName, paidScore, accountBalance) {
  // create a instance of the userCreator!
  const newPaidUser = userCreator(paidName, paidScore);

  // has all the user stuff, plus a BONUS property!
  Object.setPrototypeOf(newPaidUser, paidUserFunction);
  newPaidUser.accountBalance = accountBalance;
  return newPaidUser;
}

const paidUserFunctions = {
  increaseBalance: function() {
    this.accountBalance++;
  }
}

Object.setPrototypeOf(paidUserFunctions, userFunctions);
const paidUser1 = paidUserCreator("Allyssa", 8, 25);
paidUser1.increaseBalance();
paidUser1.sayName(); // I am Allyssa
```

Sequence of Events:
`Object.setPrototypeOf(newPaidUser, paidUserFunction)`

1. `paidUser1.increaseBalance();` first looks for local function `increaseBalance()`;

2. Not there. So it's look in `paidUserFunctions()`

3. BINGO! Had it not existed there, it would have checked `userCreator()`, and then `userFunctions()`;

Senior dev question: 
Tell me how subclasses work under the hood?

It's all about digging up the prototype chain.

### Call() and Apply()

This is the way you should really do it...

We're creating a `userCreator()` functions. 


```js
const obj = {
  num: 3, 
  increment: function() { this.num ++; }
};

const otherObj = {
  num: 10
};

obj.increment(); // obj.num now 4
obj.increment.call(otherObj); // otherObj.num now 11
```
Sequence of events:

```js
obj.increment.call(otherObj); // otherObj.num now 11
```

1. Loading the memory. We're starting from right to left.

2. We get `otherObj`

3. We see there's a `call()`.

functions have a `prototype`, that has `call()`. So it's not a mystery where it's coming from.
functions create a `this: {}` behind the scenes. 
The `call()` function changes what this is pointed to.

4. We move over and we see that `obj.increment` is a reference of `this.num++`. 

5. `call()` says `this` is actually `otherObj`. So it's really saying:

`otherObj.num++`


ADD TO TIL:
And if passes params to it if there's anything past the comma

```
  userCreator.call(this, paidName, paidScore);
  // userCreator.apply(this, [paidName, paidScore])

```
apply is the array version of it

```js
// obj
const obj = {
  num: 3, 
  increment: function(param1, param2, param3...) { 
    //... 
  }
}

obj.increment.call('otherObj', param1, param2, param3)



```

## Subclassing with New and Call

Solution 3 is similar to how React implements it before ES6!


REMINDER: functions are actually function-object combo.

```js
function userCreator(name, score) {
  this.name = name;
  this.score = score
}

userCreator.prototype.sayName = function() {
  console.log("I'm " + this.name);
}

userCreator.prototype.increment = function() {
  this.score++;
}

const user1 = new UserCreator("Phil", 5);
const user2 = new UserCreator("Tim", 8);

user1.sayName();


// now we're on the Paid User side
// when you create 'new', it returns for free!
function paidUserCreator( paidName, paidScore, accountBalance) {
  userCreator.call(this, paidName, paidScore);
  // userCreator.apply(this, [paidName, paidScore])
  this.accountBalance = accountBalance;
}

paidUserCreator.prototype = Object.create(userCreator.prototype);

paidUserCreator.prototype.increaseBalance = function() {
  this.accountBalance++;
}

const paidUser1 = new paidUserCreator("Allysa", 8, 25);

paidUser1.increaseBalance();
paidUser1.sayName(); // I'm Allyssa
```
![](https://i.imgur.com/ztZKFvX.png)


What's happening in `paidUserCreator()`?

Normally, `paidUserCreator()` is a function + Object combo.

In the Object is a nice, blank `__proto__`. 
But --since we did the `call()` function - we are binding `paidUserCreator()` to it's parent.

We are replacing `paidUserCreator()`'s `__proto__` with the `userCreator`'s `__proto__`, all because of that call() function.

The hard part: 
when we do `userCreator.call(this)`

`this: {}` -- instead of being set to the auto-created object, it'll throw the the object inside the this.

![](https://i.imgur.com/n2cjDpP.png)

You can pass any object into that `.call()` or `.apply()`.


## Subclassing with class, extends, and super

Now to explain how React works! (The ES6 versions)

The final approach of Object Orient "Pretend" style.

We'll figure out how extend() and super() works under the hood

```js

// lefthand side
class userCreator{
  constructor (name, score) {
    this.name = name;
    this.score = score;
  }

  sayName() {
    console.log("I am " + this.name)
  }

  increment() {
    this.score++;
  }
}

const user1 = new userCreator("Phil", 4);
const user2 = new userCreator("Tim", 4);

user1.sayName();

// right side
class paidUserCreator extends userCreator {
  constructor(paidName, paidScore, accountBalance) {
    super(paidName, paidScore);
    this.accountBalance = accountBalance;
  }

  increaseBalance() {
    this.accountBalance++;
  }

  const paidUser1 = new paidUserCreator("Alyssa", 8, 25);

  paidUser1.increaseBalance();

  paidUser1.sayName();
}

```

### What's happening when we create with new

```js
const user1 = new userCreator("Phil", 4);
```

1. the new key word means new things happen
2. It first creates a `this: {}` 
3. Inside of `this: {}`, it points the `constructor` data, and links to the `prototype` set of functions in the original class (or function!) 
4. Finally it returns the object.

It becomes this:
```js
this: {
  name: "Phil",
  score: 4,
  -----
  __proto__: [sayName & increment]
}
```

### What's happening with extend?

Extends helps us make that bond with the `prototype` functions.

Also, before... we used a `.call()` to create it.

```js
function paidUserCreator( paidName, paidScore, accountBalance) {
  userCreator.call(this, paidName, paidScore);
  // userCreator.apply(this, [paidName, paidScore])
  this.accountBalance = accountBalance;
}
```

`super()` does it for us now! 
It actually gets born into the original function. 
There's no side effects in the other way. That was a JS-team implicit thing.

think of it like `super(x, y)` is set to `new userCreator(x, y)`

```js
paidUser1 = new paidUserCreator("Allyssa", 8, 25);
```

1. it passes the `super( paidName, paidScore)` to the userCreator function and returns it into the `this`
2. inside the `super()`, it creates a new execution function...
3. It then sets the __proto__ to `paidUserCreator`

```js

paidUser1.increaseBalance();
```

1. It first checks itself for increaseBalance()
2. It wouldn't be there, because otherwise we're duplicating it everywhere.
3. It's instead, it's on `paidUserCreator()`'s prototype chain


```js
paidUser1.sayName();
```

1. It checks itself. Not there.
2. It goes up the `paidUserCreator()`. Not there.
3. It now goes up even higher, to `userCreator()`







