---
title: Week Five - JS Testing
created: 2021-12-03T00:00:00
summary: JavaScript Testing Practices and Principles
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

## Intro to Testing

SLIDES: https://slides.com/kentcdodds/testing-principles#/1

Goals:
1. Explain the fundamentals
2. Writing tests
3. Test

Will avoid the tech-specific stuff


Repo:
git clone https://github.com/kentcdodds/testing-workshop.git
cd testing-workshop
npm run setup --silent


### Typechecking
(TypeScript) - You can remove a whole set of bug categories with static typing.
ESLint is supposed to catch bugs.
Prettier is supposed to clean up things. 

![](https://i.imgur.com/Mgy8xh8.png)


### Unit tests
![](https://i.imgur.com/yzO0Vmi.png)

### Integration Testing
![](https://i.imgur.com/8wIwNAc.png)

### End to end testing
Pull it up and make it as close to you as possible


### Quick example of a test

This is the most fundamental example of a test!

```js
// this is purposely written wrong.
const sum = (a, b) => a - b

const result = sum(3, 7)
const expected = 10

if (result !== expected) {
  throw new Error(
    `the result of ${result} is not equal to the expected of ${expected}`
  )
}

```

When you see testing libraries do this:

```js
test('subtract subtracts numbers', ()=> {
  const result = subtract(7,3);
  const expected = 4
  expect(result).toBe(expected)
})
```

It really looks like this:

```js
function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`x ${title}`);
    console.error(error)
  }
}
```


### Creating a test factory

![](https://i.imgur.com/I4fQZxf.png)

PRO:
Easier to add to the test.

CON:
You have the title contain the specific data.


How Jest finds test files:
a folder name `__tests__` 

![](https://i.imgur.com/BS6heu4.png)

Method 1: separate the `test` folder and the `src` folder
Method 2: Inside the `src` folder, are your tests.


### Where to put tests?

"Place files as close to where they're relevant as possible."

### Code Coverage?

IT creates a coverage directory (called Istabul)

It's often a management mandate to create a 100% code coverage.
Which is a HUGE diminish returns.
That last 10% is always hard to maintain and not worth it.

![](https://i.imgur.com/d52r2Ro.png)

The code coverage doesn't also give us confidence.
It's more of a indicator of "What code has coverage".


It's not telling you what you need to do, what's important. It's just covering surface level.
https://docs.cypress.io/guides/tooling/code-coverage#Full-stack-code-coverage

You're better off to:
"Test software the way your user uses your software"





## Unit testing

A long time ago, it used to be 'one assertion per test'. 
A testing framework allows you to add a bunch of assertions and group them together, because it'll show you which one failed.

![](https://i.imgur.com/8OHVJZ6.png)

So an example of testing login:

Your tests should resemble how the user uses it.

```js
// from a separate file
function isPasswordAllowed(password) {
  return password.length > 6 && /\d/.test(password) && /\D/.test(password)
}


// main test file
import {isPasswordAllowed} from 'file';

test('isPasswordAllowed only allows some passwords', () => {
  expect(isPasswordAllowed('')).toBe(false)
  expect(isPasswordAllowed('fffffffffff')).toBe(false)
  expect(isPasswordAllowed('999999999')).toBe(false)
  expect(isPasswordAllowed('asdfj.@sdfkj')).toBe(true)

})

```



## Mocks

It means "to fake something".

```js
const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')

expect(winner).toBe('Kent C Dodds')
```

He had to hack the `thumbwar` function a bit to make it work.

> What is mock testing?
> Mocking means creating a fake version of an external or internal service that can stand in for the real one, helping your tests run more quickly and more reliably. When your implementation interacts with an object’s properties, rather than its function or behavior, a mock can be used.
https://circleci.com/blog/how-to-test-software-part-i-mocking-stubbing-and-contract-testing/

ROCKY NOTES: This isn't very good at all.
Not the chapter, but this method of testing and using Jest.

For example - each test is mutating things and leaving side effects that can affect other tests.
So he's having to write 'functions' to clean up a test after it's finished, which is... a problem with the testing software, not the code.
Cypress isolates each test without having to clean it up.


Another key note: 
Kent even literally says he avoids this style of testing (mock testing) because it's not similar to what the end user is doing.


## Testing Practices

Reminder on promises:
await/async

Functions that need to wait for a response:
```js
async function theFunction() { ... }

//then to call the function
await theFunction();
```

Something I like that's he's doing is creating a placeholder request/response and shapes it.

```js
function setup() {
  const req: {
    body: {}
  }
  const res = {}

  // a bunch of object assign stuff

}
```

"I like testing where i can slice the unit as much of the dependencies as I can to make as pure as possible so I have a lot of confidence when I test."

### Test Driven Development

![](https://i.imgur.com/u72cndq.png)

Red -> Green -> Refactor.

1. You write some code in your code to fail.
2. Then fix your source code to pass. 
3. Then update either your src/test.

TDD has a great place with pure functions. 
You can create a list of this is allowed, this is allowed... and just keep growing your list.
If I was writing a utility library, then TDD is great.

Where it doesn't work very well, it's trickier... is UI. 
If you're not certain what things look like... you can't write test code to make it look like that.

### Readme Driven Development
I (Kent) use RDD -- 
Readme Driven Development. Where I write the documentation of how I expect to work, then match it with the code.



## Integration Testing

The difference between in Integration and unit testing is limited:
Integration doesn't use mocking.
It starts up a server, and hits the server itself.

