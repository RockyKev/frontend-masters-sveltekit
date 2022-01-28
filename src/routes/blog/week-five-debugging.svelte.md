---
title: Week Five - Debugging
created: 2021-12-04T00:00:00
summary: Javascript Debugging and Fixing Common JavaScript Errors
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

## Debugging Javascript

Github: https://github.com/toddhgardner/getRANTR


Random trivia:

```js

'💩'.length // 2 because it's unicode counting

0.1 + 0.2 // JS floating point operations have issues with overflow rounding percision

new Date(2016, 5, 31); // 2016 July 1 -- this is saying June 31st, which doesn't exist... which overflows to July 1.

new Array(0, 1, Array(2)); // [0, 1, [undefined, undefined]]

[10, 5, 1].sort(); // [1, 10, 5] because it treats it as strings
```

part 2

```js

Math.max() // -Infinity

(function foo(a, b) {}).length // 2 -- it actually calls Function.prototype.length which returns the num of arguments.

+"42"; // 42 -- because the + is not preceded by a string, it stays a string. 

'💩' - '💩' // NaN - '💩' does not have a corresponding number

!!"" // false

1 / 0 // Infinity

```

Very few things in JS throw through a `<Error>`

Something to be aware:

This is applicable to completely vanilla JS or jQuery. 
There's a bit of different debugging done with frameworks. 



## How to fix Bugs

A generic tool:
Identify, Isolate, Resolve, Prevent.

**Identity:**

**Isolate:**

**Resolve:**


**Prevent:** 
Regression Tests


### Can't delete a tweet

GOAL: The issue is that when the user clicks the delete button, it doesn't actually fire the JS code correctly.

**Issue 1: There's no console.log error.**

He notices that the button redirects. 

console.log -> press gear -> Preserve log 

He now notices that there's a uncaught error, and it automatically redirects. 

Because it's `<button>` in a form, which automatically submits a get/post request. 

**Issue 2: How to stop the redirect**

He found the element's event handler, then opened up where it was located in JS.

He added this in the file.

`evt.preventDefault()`


**Issue 3: It's still not fixed**

He was losing the context of `this`. 
His initial fix was a old fashion ES5 method.

`this.model.destroy()`

```js
onDelete: function() {
  setTimeout(function() {
    this.model.destroy();
    this.remove();
  }.bind)
}
```


### Text stays in the text field

1. He finds the onChange event. 

He discovers that the data is saved on localStorage.

2. In the code, he says that there's a conditional that adds that localStorage.

![](https://i.imgur.com/HBNwLeD.png)

The solution is to instead just check if that variable type is a string.
`if (typeof text === 'string')`


### Server giving a 400 bad request

The error he discovered was that the message being submitted must have a length greater than 0. 


### A single User has 2124 errors

His solution: return the error back to the user.

## More Advanced Bug Tracking


### Unexpected High Memory Usage
SKIP: Fifth Bug

Yikes, I think this is really outdated.

Note: his screenshot is using a old version of Chrome Profiles.


### Network/Proxy Bug

The issue: 
It's making a call to another JS file that the user blocked with adblocker.

We shouldn't stop the user just because it.

This is fixed by wrapping the call to check if it exists, THEN fire it.
```js
if (window.analytics) {
  analytics.trackUser();
}
```

But what about say Javascript?
```js

if (!window.$) {
  console.error('jQuery failed to load');
  document.body.innerHTML = "<h1>Well that didn't work are you in a elevator?</h1><p>Reach out to help@site.com</p>";
}

```


## Design for Debuggability

![](https://i.imgur.com/ash4oJX.png)

jQuery builds a lot of abstraction to make it easier for the end user.
But it makes it complicated.

There's a lot of complication under the hood. 

It's a see-saw.

### Rule of 3

Refactoring: Improving the Design for

The first time you run into a problem, solve it.
The second time, just copy it.
The third time, then you make that consideration.

### Adding a secret debug mode

`site.com?debug`

