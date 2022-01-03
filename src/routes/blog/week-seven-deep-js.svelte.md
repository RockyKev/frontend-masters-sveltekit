---
title: Week Seven - Deep JS
created: 2021-12-12T00:00:00
summary: Deep JavaScript Foundations, v3 
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

Hey It's Kyle Simpson!

Slides: https://static.frontendmasters.com/resources/2019-03-07-deep-javascript-v2/deep-js-foundations-v2.pdf


## Introduction

```js
/* It started with this question */
x++;
++x;

// It's supposed to be the same as this, correct?
x = x + 1;


/* The funky catch-all */

// What actually happens 

var x = "5"; 
x = x + 1; // "51"

var y = "5";
y++;  // 5
y;    // 6


```

> [00:05:20]
We blame the language. JavaScript clearly must have been designed poorly because this happened. 

> [00:05:56]
If you ask a room of C++ developers, have you ever read any part of the specification for C++? Most hands will go up, same for Java. But if I ask that same question, and I do, all over the world I ask this question almost every time, how many of you have read any part of the JavaScript spec?

> [00:06:12]
And I hardly ever get any hands. And I think part of what I'm getting at here is that many developers in the JavaScript community seem to think that JavaScript with its low barrier to entry, should be so automatically understandable, so intuitive, that if it's not immediately intuitive, therefore it was poorly designed.

> [00:06:53]
And then when we get bitten by it we shift the blame to someone else. Instead of most developers in other communities saying, well, the fault is my own. I didn't understand it enough, okay? So here, when I experienced it coming back as the number 5 instead of the string 5, I didn't say, stupid JavaScript, how could you be so poorly designed?

> [00:07:30]
I actually had this argument recently where somebody said, I don't know, the JavaScript engine is the source of authority. No, it isn't. The specification is the source of authority. And if you're wondering why does something do it, why am I seeing this behavior? Why does it seem weird or mysterious or black box or buggy or whatever?

tl;dr: Have you ever read any part of the JS specification? 


![](https://i.imgur.com/F7qjORD.png)

The 3 pillars to describe -- 

* Types

Primitive Types, Abstract Operations, Coercion, Equality, TypeScript, flow, etc.

* Scope

Nested Scope, hoisting, Closures, and Modules

* Objects (oriented)

Different from OOP, which is about the class-oriented.

this, class{}, Prototypes, OO vs OLOO

## Types

"In JavaScript, everything is an object."

> >> Kyle Simpson: There is a reason for this statement, but this statement is a misconception, this is false. And that's a joke, by the way. [LAUGH] because false is not an object. False is an example of one of those values that is not an object. The reason behind why people say everything is an object, is because most of the values in JavaScript can behave as objects.

The Primitive Types: 
* undefined
* string
* number
* boolean
* object
* Symbol

> [00:04:04]
There is also add it recently a few years back in years six, a lesser none type but the primitives of types on the less call simple, symbols don't get use to often a lot of white for JavaScript that use basically you create suto private keys on objects. Not really private, but kinda obscure.

> [00:04:23]
So you don't see those used a lot, more probably used in frameworks than you're gonna see in your general JavaScript code, but it is a primitive type nonetheless. 

### Kyle Simpson's 'subtypes'

* undeclared
* null

* function?
> Kyle Simpson: And what about functions though? JavaScript didn't even list out function. If you look closely in that previous list, it didn't list out function and yet we know intuitively, that values which are functions have a very specific behavior, that is different from values that are numbers for say for example, so isn't it a type.

```js
v = function() {};

typeof v; // "function"

```

* array?

> Arrays, we use this all the time, and it seems like they definitely have a specific behavior.

> They're numerically indexed, and they have a length property that automatically updates. And they have various methods to them. So, are they a type? Again, the best way to think about them, the best mental model I've come up with is that it's a subtype of the object type. It's a special kinda object with this numeric indexing.


* bigint

![](https://i.imgur.com/Hq8lgU5.png)

You can determine what the primitive with the keyword `typeof`


Historical record: 

If you wanted to remove a value, use undefined.
If you wanted to remove a object, use null.
```js
var number = undefined;
var theObject = null

typeof theObject; // object?!
```

This is historical. Goofy stuff that's a bug. 

### Temporal Dead Zone (TDZ)

![](https://i.imgur.com/xF7NcbP.png)

And undefined means there's definitely a variable, and at the moment, it has no value.

But there's another concept of emptiness in the language that was introduced with, essentially, ES6. And the best way to describe this is uninitialized. Another way of referring to this particular condition that a variable can be in is called the TDZ, the temporal dead zone. We're gonna get much more into this in our next unit of discussion when we talk about scopes.

### NaN, is Not a Number

```js
myCatsAge = Number("n/a"); // NaN

myCatsAge === myCatsAge; // false!!! WOAH
undefined === undefined; // true

Number.isNan(myCatsAge); // true
Number.isNan("words"); // false
```

NaN is a thing that doesn't equal itself.

![](https://i.imgur.com/0VgIfod.png)
0 in math represents 'nothing', it's not a placeholder. It's important in math.

### Negative 0

`(-0)`

It's a real thing.

Good usecase -- 
Kyle built an app and wanted the car to continue pointing in the same spot, instead of the default.

So when the car was not moving, it would go to `-0`. 
`0` would go to default.

### When to use new

![](https://i.imgur.com/zuSZWEa.png)



## Coercion

toPrimitive(hints)

https://262.ecma-international.org/9.0/#sec-abstract-operations

https://262.ecma-international.org/9.0/#sec-toprimitive


toString

toNumber

toBoolean
It uses a lookup table! It's either on or not.


### Cases of Cohecision

```js
var numStudents = 16;

// this is coercison
console.log(`There are ${numStudents} students.`); // There are 16 students

// this is explicit

// 'join' forces things to become strings. Don't do this.
console.log(`There are ${[numStudents].join('')} students.`); // There are 16 students

// A function on a primitive? wtf?
console.log(`There are ${numStudents.toString()} students.`); // There are 16 students

// A clearer way 
console.log(`There are ${String(numStudents)} students.`); // There are 16 students

```


> [00:09:45]
Except what happens when it's NaN.
Kyle Simpson: Okay, there's all kinds of corner cases in all of these coercions. So if you're in the habit of using some of these and not using others, I mean I hate to call this out but it sort of hypocritical to say, I used this form or magic but I don't like that form of magic.

> [00:10:06]
I don't know if we should use the magic at all, I think we should learn it, use it, and then it's not magical at all. Once you learn it, you're doing something intentional, and you're communicating your intent to other people. That does not mean that implicitness is always bad.







## Philosophy of Coercion

![](https://i.imgur.com/vN0RHLG.png)


[00:00:40]
I make the claim that a quality JavaScript program is going to have to embrace coercion. You have to make sure that the types involved in every operation are clear. And by the way that means that you shouldn't be designing all these polymorphic functions that can take any sort of value and do 15 different things based upon the value.

[00:01:00]
You're asking for coercion problems when you do that and then papering over them, but I used the triple, I used the triple equals. Why not just design a function that only takes numbers and then make another function that only takes strings? Or make a function that takes numbers and strings, and it's very clear it can only be those two types, and I know what corner cases I have to worry about between numbers and strings.

[00:01:23]
We can choose to be more obvious about how we manage our types, how much we overload, how polymorphic we make our code. We can opt in to more problems or opt out of problems as a result.

![](https://i.imgur.com/BK1LDNo.png)


> What I'm actually saying is that your code is a form of communication, and there is an effective way to communicate that understands and uses the tool well. If you ask the reader of a code to understand something about the tool so that they can understand that line of code, that is an investment on their part.

> Yeah, the junior devs gonna need to learn some stuff, but that's what happens in every job and in every industry, you have to learn some stuff. You don't see an architect saying, well we're not gonna design that building well cuz we've got an intern on the job. You teach the intern how to build the building well.

### Kyle Rant!!

![](https://i.imgur.com/2g1xB14.png)

Kyle believes this is wrong.
Who decides what is working and what is dangerous?


Kyle's take: 
![](https://i.imgur.com/movePjO.png)



Cohesion test:
```js

function isValidName(name) {
	if (
		typeof name == "string" &&
		name.trim().length >= 3
	) {
		return true;
	}

	return false;
}

function hoursAttended(attended,length) {
	if (
		typeof attended == "string" &&
		attended.trim() != ""
	) {
		attended = Number(attended);
	}
	if (
		typeof length == "string" &&
		length.trim() != ""
	) {
		length = Number(length);
	}
	if (
		typeof attended == "number" &&
		typeof length == "number" &&
		attended <= length &&
		attended >= 0 &&
		length >= 0 &&
		Number.isInteger(attended) &&
		Number.isInteger(length)
	) {
		return true;
	}

	return false;
}


// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);

```

## Equality 


KYLE RANT!

He really spends an hour complaining about (===) and (==)

A HOUR.


## Scope and Types

Difference between Typescript and Flow
https://github.com/niieani/typescript-vs-flowtype


## Scope and Typing

### Static Typing



## Scope

How does Javascript go, "Your Line 10 variable is undefined"

The 4 stages of compiling.


In bash, if there's an error in line 4, lines 1, 2, & 3 runs.

Javascript is a compile language.
The computer compiles the code before running. 

Some say something like Java, it compiles, then it runs. 

Javascript does it too. It interpret's the code, then fires it to the Javascript Engine.

### Compile & Run

Javascript is a TWO-PASS system.

1. Compile Time (Processing or Parsing)
2. Run time (Executing)

THe first pass: 
It doesn't ACTUALLY create it. 
It's actually 'planning the idea' of creating it. 
It creates a 'treasure map'. 

The second pass:
When it runs!
That's where things get assigned.
So now it follows the treasure map, and does it.



```js

function otherClass() { // ... }

otherClass();
```

Remember, functions don't really exist. They exist 'symbolically.'


A bad part of Javascript

**Dynamic Global Variables** 

If you declare a variable without declaring it... it automatically creates a auto-global.

**NOTE: This does not work in strict mode**

NEVER EVER auto-create them.
```js
var teacher = "Kyle";

function otherClass() {
    teacher = "Suzy";
    topic = "React"; // automatically made and thrown in global 

}
```


Type Error: It means that the type is wrong. Like passing a object into a string the wrong way.

Ref error: I cannot find the variable! There was no reference!

Strict mode is not always on. If you're compiling, it always uses Strict Mode.


### Diff between undefined vs undeclared

undefined -- It doesn't have a value yet.

undeclared -- Never been formally declared.


### Arrow functions


KYLE'S OPINION
(Named) Function Declaration 

is better than

Named Function Expression

is better than 

Anonymous Function Expression


```js
// function declarion
function getId(id) { // ... }

// named function expression
const studentId = function getId(id) { // ... }


// anon function express
const studentId = (id) => studentBody.filter(id)
```

### Scope and Function Expressions

### Advanced Scope

**Lexical scope**

Almost every language with compilers use lexical scope. Bash is not lexical scope.

It's figured out in author time. When you're writing it. 

It's not figured out in run time.

** Dynamic Scope**

It does NOT exist in Javascript!

```js

function ask(question) {
    console.log(teacher, question); // will get teacher from otherAsk();
}

function otherAsk() {
    var teacher = "Suzy";
}
```

The Principle of Least Privilege (least exposure)

1. Keep everything private. Sets up a defensive posture.

2. Reduces surface area. Hide it, and you prevent them from access it.

3. You protect yourself from future refactoring. If you use it, my changes will break your code. 

**IIFE Pattern** & **Block Scoping**

It runs because `()()`

```js
// IIFE
( function sayTeacher(teacher) {
    console.log(teacher)
})("suzy");

// Blocks Scope
// It's only a block scope with let/const
{
    let teacher = "Suzy";
    console.log(teacher);
}

```

KYLE'S HOT TAKE: `var` has a place.

He believes `let` should only be used in a few lines of the function.

Where `var` represents a function's variable. 

You can create a 'symantic signal'. 

**Block scoping**

Kyle's idea: 

If using a variable for a few lines, use a block statement.

![](https://i.imgur.com/w3xvKeH.png)

**const problem**

Kyle's take: 

```js

const teachers = ['kyle', 'suzy'];
teachers[1] = "brian"; // ALLOWED

```

Kyle only uses const only for primitives. Like strings, booleans, numbers. 



**Hoisting**

It's not actually a real thing. It does not move things. It's a metaphor. 

Kyle's take -- 

It's because people don't want to think about the two-pass process. 

**TDZ**

```js
teacher = 'Kyle';

const teacher = "Suzy";
```

So right now, `teacher` is in the dead zone. 

Assignment is a run-time thing. (Stage 2)


### Closure

[00:00:46]

> Doug Crawford, has had a lot of really great things that he's done for our industry and a lot of things that he said.

> And when he says something brilliant, he deserves credit for it. Years ago, he had a conference talk that he was giving about computer science things that have been created over the course of the history of computer science. And he was making a point that, essentially, all great ideas take a whole generation of programmers before they get implemented, before they become popular.

> And he gave a variety of examples. And when he went to explain why that phenomenon exists, it was sort of a tongue in cheek kind of response or explanation, which is kind of half-true and half-funny. He said, well, the reason why it takes a full generation is because we're so stubborn.

> We're stuck in our ways. So we have to wait around for all of the current generation to die or retire llll before the new great idea picks up. [LAUGH] Again, it's like half-true and half-funny.

> But he went on to say we know that closure must be truly great cuz it took two full generations to catch on.

It's so powerful that every modern language has closure.

Closure is: 
1. It's when it's able to remember it's access it's lexical scope. 
2. Even when it's executed outside that lexical scope.


Closure -- it's "closed over" the function. 

Closure doesn't 'close over' a value. 
It closes over a variable. 

It takes the snapshot of the variable. 
It "closes over" the variable. 

It's preserving access to variables. 

### Module Pattern

It requires lexical scope.
And Closure. 

It's a functions and data and putting them into a object.

The module pattern requires a `encapsulation`. Which is a fancy word of hiding data. The idea of visibility. It's public and private data. 

To have a module, you have to hide data. 


So take take the same idea

```js

// Not a module pattern
const workshop = {
    teacher: "Kyle", 
    ask(question) {
        console.log(this.teacher, question);
    },
}l

// Classic Module pattern
const workshop = (function Module(teacher) {
    var publicAPI = { ask, };
    function ask(question) {
        console.log(this.teacher, question);
    }

    return publicAPI;

})("Kyle");



// factory function Module Pattern
function WorkshopModule(teacher) {
    var publicAPI = { ask };
    
    function ask(question) {
        console.log(this.teacher, question);
    }

    return publicAPI;
}

var workshop = WorkshopModule("Kyle"):

// ES6 Modules
 

// THE ACTION
workshop.ask("It's a module, right?"); // Kyle It's a module, right?

```

We can also create a factory function.


### Modules

![](https://i.imgur.com/GBfj3wH.png)

Top: Newer ES6 module
Bottom: old school way. 


### Objects

**this**

Whatever the target is.

**Implicit and explicit binding**
using `workshop.ask.bind(workshop)`

bind does a hardcoded linkage. 

Isn't is better to just write a module and use closure?


**new keyword** 

The third way to call a function.

It's to invoke and create a whole new functioning object.

FOUR THINGS IT DOES:
1. Creates a brand new empty object
2. Links that object to another object. (Link?)
3. Invokes the function with `this` set to the new object.
4. Then if it doesn't return an object, assume return of this.


**Default Binding**

The fallback, default to the global. 

**CLasses**

Super

> [00:02:11]
As a matter of fact, the class system also now has a super keyword in it, which allows you to do relative polymorphism. 

> If you have a child class that defines a method of the same name as a parent class, so called shadowing. If you have one that defines the same method name in a child as in the parent.

> You can refer to the parent from the child by saying super dot, like you see on line 12.



Classes and Prototypes

The Lexical module system which we had for 20 years. Instead, people want to use the class system like other languages.


> The entire class system is built upon this idea that your methods don't exist on your instances, they exist on your prototypes and guess what happens when you say this.ask and you assign it a function? It's no longer on the prototype anymore, it's on your instance.

> [00:05:43]
So every single time you instantiate a function, you're getting a whole separate copy of all those functions added to every single instance.


### Prototypes

> You might remember in our discussion of this keyword that I said that new in front of a function call is a constructor call. That is not the same thing as saying there's a constructor, it is to simply say that that is basically for lack of a better term when you use new in front of a function call it's constructing an object to be used for this binding of that function call.

> So that's where objects come from. They come via new from these constructor calls. And it is often said that in that process of constructing these new objects that it's making that object based on the constructor's prototype.

A "constructor call" makes an object 'based-on' it's own prototype. It's making a 'copy' of the prototype. 

In most langauges, classes are just a blueprint. Kyle's son is a blueprint of him, a copy of him. 

Changing a window in the blueprint does not magically affect the building.

Javascript DOES NOT MAKE A COPY. It makes a LINK to it's own prototype. 

 
 Prototype system:
 
 
 [[prototype]]
 ![](https://i.imgur.com/h0YpbrW.png)
 
 So that ask function is NOT copied to the object. It goes up the prototype chain, to the original instance.
 
 

Dunder Prototype
__prototype__

> Speaker 2: What happens when you set dunder proto?

> Kyle Simpson: Good question. It is not very common for you to use the Dunder Proto as a setter. It is technically both a getter and a setter. It is almost always used just to reference it. And I would say generally speaking, it's sort of an anti-pattern to rewire the prototype chain of an object.

> [00:02:54]
But as of ES6, dunder proto is officially also something that can set the proto linkage from one object to a different object. So if you have an object A that's linked over here and then later you decide, I want that object prototype linked over here, you can use dunder proto as a setter to change it.


Classical Vs Prototypal Inheritance

CLassical Classes

When you're instantiating, you're copying.

Prototypal Classes

Things are LINKED to, not copying.

Javascript's Behavior Delegation (Not inheritance)


**OLOO Pattern**

Objects Linked to Other Objects

Lua and Javascript.

Delegation-oriented design --

Stop thinking of parent/child relationships, and think about peer to peer. 

![](https://i.imgur.com/cyq1xUH.png)


