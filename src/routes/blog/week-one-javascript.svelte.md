---
title: Week One - Getting Started with JavaScript, v2
created: 2021-10-27T00:00:00
summary: Getting Started with JavaScript, v2. The Three Pillars of JS 
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

Course: Week One - Getting Started with JavaScript, v2
Instructor: Kyle Simpson
## Programming Primer
The Three Pillars of JS in Kyle Simpson's class are: 

Types & Coercion - How to convert from one to another, checking quality, primatives

Scope - How data stays within the same space

this & prototypes - Aligning 

## Types & Coercion

**isNan**
Something to be aware:
"greeting" is NaN but this is not true "greeting".isNaN

**Coercion** 

When you string + number. 

Javascript tries to automagically identify the type based on the first variable.

```
100 + 100 = 200
"100" + 100 = 100100 because first is string
```

For example: 
* It only does numeric math when the first variable is a number.
* It'll add the strings together when the first variable is a string

It's a regrettable choice.

**Double-equals vs triple-equals**


``` javascript

// this
if ((workshop1.topic === null || workshop1.topic === undefined) &&
   (workshop2.topic === null || workshop2.topic === undefined)) { 
  // ... 
}

// is the same
if ((workshop1.topic == null) && (workshop2.topic == null)) { 
  // ... 
}

```



## Scope

The differences: 
`undefined` - variable that's been declared but no value given
`undeclared` - never been made

**Reducing Scope - The old way:**
IFEE is a good way to declare a value that you don't want to change. 

```javascript
var teacher = "kyle";

( function anotherTeacher() {
  var teacher = "suzy";
  console.log(teacher); // Suzy
})()

  console.log(teacher); // kyle
```
you can't change teacher, so it's like a harden value. 

**Reducing Scope - Today, let/const:**

You know, let/const.


**Scoping within closure:**

```javascript

function ask(question) {
  return function holdYourQuestion() {
    console.log(question)
  }
}

var myQuestion = ask("What is closure?");

myQuestion(); // What is Closure?
```

Think of it like a backpack. It saves the data inside of it.


## this & prototypes

All objects have a prototype chain

```javascript
// Let's create an object o from function F with its own properties a and b:

let F = function () {
   this.a = 1;
   this.b = 2;
}

// making a copy of F()'s values.
let o = new F(); // {a: 1, b: 2}

// add properties in F function's prototype
F.prototype.b = 3;
F.prototype.c = 4;

// see how o doesn't get affected.

console.log(o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
