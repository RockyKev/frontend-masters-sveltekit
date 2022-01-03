---
title: DRAFT Week Seven - Deep JS
created: 2020-12-01T00:00:00
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