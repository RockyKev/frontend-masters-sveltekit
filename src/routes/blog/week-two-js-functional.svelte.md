---
title: Week Two - JavaScript Functional 
created: 2021-11-02T00:00:00
summary: JavaScript From Fundamentals to Functional JS, v2
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

## Intro - JavaScript: From Fundamentals to Functional JS


The differences: 
OOP is about the noun.
Functional programming is about the verb. 

For example: 
OOP building a house, doors, windows. 
Functional programming building a house, opening and closing.

TODO: Search: 
Observable streams(?) -- this? 
think of lambda and ramda underscope

## Objects

**Primitive vs Non-primitives**
Primitive values get passed by value (Number, String, Boolean, Undefined, Null and Symbol). 

Non-primitive values get passed by reference. (Objects such as functions and arrays are referred to as non-primitive values)
Non-primitive values return the copy instead of return the original, because of reference/value.


**Dot Notation versus Brackets**

We use the . notation (obj.name). 
Reminder that ob keys are always always strings

dots vs brackets

![](https://i.imgur.com/H87frS2.png)

**Object Jawns**
array is just a special type of object.
it has properties
it is indexed -- numeric indices
can loop and do all sorts of things

Reminder that object keys are always always strings!
Also that you should use strings for keys. 
But you can do some crazy shit like this:

```javascript
const x = {}; // remember that const 
x[2 + 2] = "words" // which gives you x: {"4": "words"}

x[function(){ return "stack"}()] = "other" // IFFEE x: {"stack": "other Words"}
```


this is acceptable. 
```javascript

// ES5
const dataES5 = { 
  name: "dave", 
  speak: function() { console.log("speak"} 
}

// ES6
const dataES6 = { 
  name: "dave", 
  speak() { console.log("speak"} 
}
```

**Method Versus Property**
property -> x.length
method -> x.pop(1) // see how it has ()






## List Transformations

nothing. No notes taking.

## .forEach() Function

.forEach -- this is really good, where she breaks down the _.each function 

Recreating the each function from Underscore [Each function](https://underscorejs.org/#each)

```javascript
const _ = {};

_.each = function(list, callback) {

  // if array
  if (Array.isArray(list)) {

    // loop through the array
    for (var i = 0; i < list.length; i++) {
      // run the callback with each item
      callback(list[i], i, list)
    }

  } else {

    // else if object
    for (var key in list) {
      callback(list[key], key, list)
    }

  }
}


// TO TEST:
// remember that`callback` is a function that you bring in.
_each(['johnny', 'steve', 'doggo'], function(name, i, list) {
  if (list[i + 1]) {
    console.log(`${name} is younger than ${list[i + 1]}`)
  } else {
    console.log(`${name} is older than ${list[i + 1]}`)
  }
})

```

_. will always respond with a object

## .map() Function


Very often the docs is running the code they are promoting,
most libs have the lib live on their own site, so you can open up console.log and test it.
`$[h1]`




Another hot tip: Test if the result of a function by wrapping it:

```javascript
const weapons = ['candlestick', 'knife', 'lead pipe']

const makeBroken = function(item) {
  return `broken ${item}`;
}

// What is the result type of map?
Array.isArray[_.map(weapons, makeBroken)] // true
```

## .filter() Function
.filter
how to create a filter function yourself
https://i.imgur.com/EFB0e9w.png

```javascript

const _ = {};

_.filter = function(arr, cb) {
  
  // create a new array
  const storage = [];

  // loop through the array
  for (let i = 0; i < arr.length; i++) {

    // check if cb is true
    // if true, push into array
    if (cb(arr[i], i, arr) === true) {
      storage.push(arr[i]);
    }
    
  }

  return storage;  

}
```

## Functions in-depth

COOL TIP: 

`$` is a value in jquery. it has methods, like `$().hide()`.


**Side Effect**
A side effect is anything that reaches beyond the initial function and changes something outside. like `console.log`

For example: Anything modifying the DOM is creating a side effect. 

**Functions are objects**
functions are objects. so this is totally legal. 
```js

const theFunction = statement => console.log(statement);

theFunction.thing = "i'm just data"

theFunction('output to console.log')
theFunction.thing; // i'm just data

```

**Arguments**

```js
// Using arguments 

// Array-like object
const constructArr = function() {

  const fakeArr = Array.prototype.slice.call(arguments); // arguments is a JS THING
  const realArr = Array.from(arguments); // arguments is a JS THING

  console.log(arguments); // will spit out the arguments passed
  console.log("array.isArray(arguments)", Array.isArray(arguments)) // false
  console.log("array.isArray(fakeArr)", Array.isArray(fakeArr))   // true
  console.log("array.isArray(realArr)", Array.isArray(realArr))   // true
  
  fakeArr.push('the billards room?');
  return fakeArr.join(' ');

};

constructArr('was', 'it', 'in');
```

## Scopes

no comments

## Callbacks

**higher order functions:**
Take a function as a input or returns a function

An example of passing arguments:
```javascript
const ifElse = (state, functionIfTrue, functionIfFalse, ...args) => {

  console.log(args) // ['yep', 'hi', 'bye']
  return state ? functionIfTrue(...args) : functionIfFalse(...args)
}

ifElse(true, fn1, fn2, 'yep', 'hi', 'bye');
```

An example of callback:
```javascript
const increment = n => n + 1
const square = n => n * n

const doMath = function(n, func) => func(n)
// same as const doMath = function(n, func) => { return func(n) }

doMath(5, square);
doMath(4, increment);
```

Recreating Reduce
```js
const reduce = function(list, cb, initial) {
  let memo = initial; // 2

  for (let i = 0; list.length; i++) { // i === 1
    if (i === 0 && memo === undefined) {
      memo = list[0]
    } else {
      memo = cb(list[i], memo) // 3 + 2
    }  
  }

  return memo;
}

reduce([2, 3, 5], (v, sum) => v + sum)

```


## Functional Utilities

**Currying**
Break a argument pack by number of arguments. 

```js
var abc = function(a, b, c) {
  return [a, b, c];
}

var curried = _.curry(abc);

curried(1)(2)(3) // => [1, 2, 3]
curried(1, 2)(3) // => [1, 2, 3]
```

**Composing**
Take two functions and combine them. 
It fires the result of one into the result of the other. 

```js
const consider = (name) => {
  return `I think it could be... ${name}`;
}

const exclaim = (statement) => {
  return `${statement.toUpperCase()}!`;
}

const blame = _.compose(consider, exclaim);

blame('you');

// the result is:
// I think it could be... YOU!

```

## Advanced Scope: Closure

An example of closure - step by step

```js

const myAlert = () => {
  const x = "Help! I think i found a clue!";
  let count = 0;
  const alerter = () => {
    alert(`${x} CLUE #${++count}`);
  };

  return alerter;
}

const funcAlert = myAlert();
const funcAlert2 = myAlert();

funcAlert; // if you called it like this
// result: () => {
//     alert(`${x}${++count}`);
//   }

funcAlert();  // called like this
// result: POPUP: HELP! I think i found a clue! CLUE #1
// in other words, it's calling "alerter" with your "()"

funcAlert()();  // called like this
// result: it will fire the first alerter(). But then, it'll try to fire again as undefined.
// funcAlert(...) is not a function

// finally - count keeps getting incremented!

```

Some advance stuff: 
```js
// all this is doing is counting the name + weapon, then return true/false 
const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  }

}

// invoking
const didGreenDoItWithA = newClue('Green'); // this is the 'name' argument

didGreenDoItWithA('iron mallet'); // this is passed as the 'weapon' argument
```