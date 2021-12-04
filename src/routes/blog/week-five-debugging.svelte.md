---
title: Week Five - Debugging
created: 2020-12-04T00:00:00
summary: Javascript Debugging and Fixing Common JavaScript Errors
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

## Debugging Javascript

Github: https://github.com/toddhgardner/getRANTR


Random shit:

```js

'💩'.length // 2 because it's unicode counting

0.1 + 0.2 // JS floating point operations have issues with overflow rounding percision

new Date(2016, 5, 31); // 2016 July 1 -- this is saying June 31st, which doesn't exist... which overflows to July 1.

new Array(0, 1, Array(2)); // [0, 1, [undefined, undefined]]

[10, 5, 1].sort(); // [1, 10, 5] because it treats it as strings
```



## How to fix Bugs

A generic tool:
Identify, Isolate, Resolve, Prevent.

**Identity:**

**Isolate:**

**Resolve:**


**Prevent:** 
Regression Tests



## Design for Debuggability

