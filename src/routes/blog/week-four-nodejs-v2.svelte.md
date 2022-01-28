---
title: Week Four - Intro to NodeJS
created: 2021-11-17T00:00:00
summary:  Introduction to Node.js, V2
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>


https://frontendmasters.com/courses/node-js-v2/

Scott Moss

# Introduction to Node.js, V2

https://intro-to-nodejs-v2-site.vercel.app/lesson/00-welcome

**Use-cases**

* API's and servers
* Databases (there's some DBs build in node)
* CLIs
* Building Tools
* Automations
* Basic Scripting
* GPU shopping bots

OS-level language.

There's no browser or visual rendered.

Browser website is just one big string, and you can test it.

Node - long controversal history
had split to become IO.js 

what things they can bring into node.
when new global JS features, node has to decide.
Like they wont bring in browser-specific features.


Node vs deno
Like Node.js, written in typescripts.
takes best packages of node so it's built in. Like testing, building.



## Basic Components

**Globals**

```js
console.log(global) // showing the window


__dirname // current directory

__filename

console.log(process) // a swiss army knife. Obj about the program. 
                    // everything where the env variables are stored, even the computer

// modules
"exports"
"module"
"require"

```

**Modules**
Modules are reusable chunks. 
It encapuslates each file in it's own closure.


Now there's two modules. `js` & `mjs`


**COMMONJS** 
```js
// index.js
const action = () => {
    console.log("Hello there");
}

module.exports = action 


// app.js
const action = require('./index')
action()


// in node cli
// node app.js
// $ Hello There
```

```js
// index.mjs
// creates a named export
export const action = () => {
    console.log("Hello there");
}


// app.mjs
import { action } from './index.mjs';

action()

// in node cli
// node app.js
// $ Hello There
```

**File System**

```js

// index.mjs
import fs from "fs"
console.log(fs)

// result
 appendFile: [Function: appendFile],
  appendFileSync: [Function: appendFileSync],
  access: [Function: access],
  accessSync: [Function: accessSync],
  chown: [Function: chown],
  chownSync: [Function: chownSync],
  chmod: [Function: chmod],
  chmodSync: [Function: chmodSync],
  close: [Function: close],
  closeSync: [Function: closeSync],
  copyFile: [Function: copyFile],
  copyFileSync: [Function: copyFileSync],
```

notice that there's a sync version of it.
Because everything in node is async, the alternative is async.

```js
// index.mjs
import fs from "fs/promises"
console.log(fs)
```
This is the promise version. 



__dirname -- you don't actually have access this to in mjs


BUFFER
PS G:\Development\frontend-masters-temp\node-js-v2> node index.mjs
`<Buffer 3c 21 44 4f 43 54 59 50 45 20 68 74 6d 6c 3e 0d 0a 3c 68 74 6d 6c 20 6c 61 6e 67 3d 22 65 6e 22 3e 0d 0a 3c 68 65 61 64 3e 0d 0a 20 20 3c 6d 65 74 61 ... 220 more bytes>`

It's better to stream a file than load the whole file into memory.

HOW DOES ASYNC WORK IN JAVASCRIPT
readFile & writeFile are async functions.
If you don't wait for readFile to work... it'll fail on the next stage.
You can also 


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>{title}</h1>
  <p>{body}</p>
</body>
</html>
```

```js
import { readFile, writeFile } from "fs/promises"

// 1 - read the file & we need to wait for it to response

// the commonJS method
// but we don't have access to __dirname in moduleJS
// const template = await readFile(__dirname, "/template.html")

// the module js version 
// readFile takes the data, and the encoding.
let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')

console.log(template) // creates it in buffer format if there's no encoding.
// console.log(template.toString()) // turns it into html format


// 2 - what data should we replace


const data = {
    title: "Learn Node.js",
    body: "This is the final HTML"
}

for (const [key, value] of Object.entries(data)) {
    template = template.replace(`{${key}}`, value)
}


await writeFile(new URL('index.html', import.meta.url), template)
```


**Error Handling**

VIA: https://intro-to-nodejs-v2-site.vercel.app/lesson/07-error-handling

You prob don't want your app to crash and burn when there's an error.
Like, if your API is set up and takes an error, it shouldn't kill your app.

When a exception is thrown in Node.js, the current process will exit with a code of 1. 
This effectively errors out and stops your programing completely. You can manually do this with:

`process.exit(1)` 
Don't do this. It's a system level. 


```js
import {readFile} from "fs"

// This is the callback way. 
// Add a error callback, otherwise return the data.
readFile(new URL('app.mj', import.meta.url), 'utf-8', (err, data) => {
    if (err) {
        console.log("im in the readFile")

        // handle the error
        console.error(err)

        // if you want it to crash, throw err
        throw err
    } else {
        // return the data

    }
})


// This is with promises
// No need for callback
import {readFile as readFilePromises} from "fs/promises"

try {
    console.log("im in the readFilePromises")
    const result = await readFilePromises(new URL('app.mj', import.meta.url), 'utf-8')
} catch (e) {
    console.error(e)
    // if you want it to crash, throw err
    // throw err
}
```

Global way - this is if you don't have access to the code directly.

```js

process.on('uncaughtException', cb)
```



**Errors and Async Q&A**

ERROR Vs EXCEPTION
An error can CAUSE an exception.

If you 'throw' the error, it can raise an exception.
The error alone is just an object.


Exceptions are like the highest level.
If you get an error, you can speak to the manager.
Versus an error is just complaining in the first place.

AWAIT 
Is await blocking the thread? 
So why aren't we using synchronous?

Await is giving the illusion of blocking the code.
What's actually happen, it actually becomes a generator.
It's a async for-loop. Like putting your code into a callback. It's the same functionality.
Async/Await was to solve a visual problem.

Promises (or Callbacks), already solve the functional problem - I want this code to run after thsi code.

Promise is supposed to make it look nicer.

Frontend never had the problem with promises. You didn't make 20 API calls and 20 event handler calls nestled into each otehr.
But then backend did. It was when backend interacted with a bunch of different apis and had to wait for other APIs to be ready and they saw all these crazy async patterns.
promises were somewhat to keep something flat.

But the `.then` was still not flat enough, so that's why async/await is still doing.

CAN YOU MOVE ON DURING AN AWAIT?
No. 
Because the next line won't execute until the read line comes back with a result or throws an error.
```js
  const result = await readFilePromises(new URL('app.mj', import.meta.url), 'utf-8')
```
It won't even be read/scene. it's like a callback.

It won't even be read and wanting to be seen. Because it's the equivalent of putting it in a callback. It just won't happen. So no you cannot continue to process something that defeats the purpose of the await. If you want to continue processing something while something else is happening in the background, then you won't use async await you will use a callback or you use dot then.


## Packages

`npm install --help`

**Creating a local Packages & npm**

A package is just a bunch of modules put together to make it work.

Node Package Manager (NPM) is bundled with node.

https://intro-to-nodejs-v2-site.vercel.app/lesson/08-packages

To create your first package:

1. `npm init`

package name: it's what it'll be called on npm. Must be unique.
entry point: what file to start at.
test command: 

2. 


**How to find and install packages**

NPM -> search -> Mongo DB

Things I look for:

1. Make sure it's relatively updated.
2. See the sourcecode 
3. Try to see if this was a active project

Remember that packages have packages. 
dependencies. in `node_modules`




**Using npm packages**


If you're installing things and you need to read the source code in node_modules, you might be better off finding another package.

NPM VS YARN

Npm was in a state of not being updated. It didn't have packagelock.json

Yarn was better. 
Soon after, npm does the same thing as yarn now if not better.

So remember you can do shit like this:
```js
import _ from "lodash"

console.log(_)
```

```
// in the terminal

$ node index.mjs
```

The difference in import

```js
import { app } from "./app.js"

import _ from "lodash"
```
The `./` means that it's a local file.
The lack of that means it's a node_module lib.


WHAT IS NPX

npm install is global
You can install things global.
`npm install -g yarn`


Sometimes there are some global CLIs, some global tools that you don't want to install. 
But you need some functionality out of them for there is a one off thing. 
Maybe it's a scaffolding tool. 
Maybe it's a deployment tool, but it's just something you don't really wanna keep around, but you do need to run it right quick.

`npx yarn add lodash`

That is saying for npx to tell yarn to install lodash for me.

It runs that specific tool without actually installing yarn.

DEPENECENIES VS DEV DEPENVCIES
The difference --
how and when it's installed.
We'll go there in test section.


**Running npm Scripts**

If it gets complicated, move the npm script into a js file.


## CLI
https://intro-to-nodejs-v2-site.vercel.app/lesson/09-clis

any command that runs in the terminal is a CLI.

This allows you to run it from the CLI
```reddit.mjs
#! /usr/bin/env node 
```

As it tells the terminal what environment it's running from. 

Add a `bin` to your package.json

> So in this case, because this is a CLI and this application is not meant to be consumed by an import. I wouldn't expect you to npm install my CLI, and then import it into your app, unless I explicitly said hey you can also use this CLI programmatically, by importing it.

> Most of the time, that's just extra work for developers, so they don't always do that, so it's usually just only consumed by a CLI. So in that case, this main field probably just gets ignored, right? This main field is only for when someone's importing, or requiring your application, whereas in this case, it's a CLI and we don't plan on having programmatic access.

> So you could think of this as like the main field when it comes to the CLI and not this so you can kind of ignore that, so I just wanted to clear that up. So now we have the bin here and then the last thing we need to do is, we need to install our own CLI on our computer.

If it sees that bin command, it'll do that.

npm is going to create a symlink.

`npm uninstall -g` can often fix a lot of problems.


CLI STUFF
`console.log(process.argv)`

```js
PS G:\Development\frontend-masters-temp\node-js-v2\reddit-cli> node reddit.mjs
[
  'C:\\Program Files\\nodejs\\node.exe',
  'G:\\Development\\frontend-masters-temp\\node-js-v2\\reddit-cli\\reddit.mjs'
]
```

```
PS G:\Development\frontend-masters-temp\node-js-v2\reddit-cli> node reddit.mjs hello --print     
[
  'C:\\Program Files\\nodejs\\node.exe',
  'G:\\Development\\frontend-masters-temp\\node-js-v2\\reddit-cli\\reddit.mjs',
  'hello',
  '--print'
]

```


This piece of code is a CLI to get a random post from reddit with the reddit api
https://www.reddit.com/.json

```js
reddit.mjs

#! /usr/bin/env node 

import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'


console.log("hey im in the reddit cli")

// this puts arguments (flags) that you can get.
const {argv} = yargs(process.argv)

// https://www.reddit.com/.json
const url = 'https://www.reddit.com/.json'

// fetch doesn't return the data. It returns the response.
const res = await fetch(url)
const data = await res.json();

const children = data.data.children
const randomPost = children[Math.floor(Math.random() * children.length)]
const link = `https://reddit.com${randomPost.data.permalink}`
const subreddit = `${randomPost.data.subreddit_name_prefixed}`

if (argv.print) {
    console.log(`
        title: ${randomPost.data.title},
        link: ${link},
        subreddit: ${subreddit}
    `)
} else {
    open(link)
}

// console.log(data);



```

```js


const o = {
  u: {
    l: { course: 'node.js', a: { b: {}}}
  }
}

// how to avoid [object object]
console.log(JSON.stringify(o, null, 2))
```


## Servers

https://intro-to-nodejs-v2-site.vercel.app/lesson/10-servers

Node.js has access to OS level functionality.

> Node.js has access to OS level functionality, like networking tools. This allows us to build very capable servers. Mixed with the fact that Node.js is single threaded and runs an even loop for async tasks, Node.js is widely used for API's that need to respond fast and don't require heavy CPU intensive work.


Using the hard way: 
> Node.js ships with the http module. This module is an abstraction around OS level networking tools. For Node.js, the http module would be considered "low level". Let's create a simple server.

`http` is "low level". You might say that nothing in node is low-level. But this is pretty low-level for node.
You also shouldn't use `http` since it's very low-level.


Servers --> it handles a request, and then gives a response.
Like a server in a restaurant.

```js
const server = http.createServer((req, res) => {
  // code
})
```

CLI FRAMEWORKS
commander https://github.com/tj/commander.js/
heroku cli
oclif - https://blog.heroku.com/open-cli-framework


WHEN TO USE NODE
> So I've had some experience with that. And actually, the first language that I ever learned was Ruby that I learned Python. And then I did learn Java, but not for servers, but for android so I don't really have any server experience there other than my current job now which does use a lot of Java.

> Yes, I would say, I would always choose node high-level when I don't have any, high CPU intensive tasks. So things like arithmetic, A.I ,machine learning. Yes, you can do it a node absolutely. But it wasn't meant for that. And if you tried to do that it's like trying to squeeze a size 15 shoe in a size 15 foot in a size 10 shoe is just it's gonna hurt.

> But you could probably do it. So you better off using node for things like I need a JSON API, I need to query your database and they send back some data, that's it. It's a crud API, that's all that I'm doing. It's not doing crazy stuff. That's what you would use node for, cuz it's able to handle a lot of requests out of the box without any tweaking.

> That's what it was built for. So if you're going for more request per second, and you're going for the low CPU intensive tasks, and JavaScript, node is a really good choice. In fact, the thing is you don't really need to unless you're a billion dollar company where a fraction of performance could cost you hundreds of thousands if not millions of dollars.

WHAT IS MIDDLEWARE?
> You can think of middleware as like a little piece of functionality that sits in between what you eventually wanna do with the request and when it came in. It's like a pipe of plugins that can manipulate the request, it can inspect the request, it can do whatever it wants to the request before it eventually sends it to another middleware or, in this case the controller.

> It's like you have a sandwich, one side of the bread would be the client, the other side of the bread would, no, one side of the bread would be the incoming request and other side of bread would be the response. And then somewhere in the middle is the middleware.

> Like all the stuff that's in the middle, and then the piece of meat is the controller, right? So the middleware is like all the toppings that just adds all the extra stuff to whatever meat or veggie patty you got going on there, that's middleware. So body-parser and morgan are those two.


You should never release a production thing without logging.



When you push data to a express server, the data is just staying in memory. 
If you restart the server, it kills the data. 
You'd need to write it somewhere in the future. (DB, json, etc?)

## Testing

One of the more common nodejs things is unit testing and end-to-end testing.


SUPER LOW LEVEL:
```js

// mylib.js
export const add = (num1, num2) => num1 + num2

// mylib.spec.js
import { add } from './myLib.mjs'
import assert from 'assert'

console.log(`
    add() 
    Should add two numbers
`)

// we are assuming that it 1 + 2 will equal to 4, which is incorrect.
try {
    assert.strictEqual(add(1,2), 4)
    console.log("SUCCESS");
} catch (e) {
    console.log("FAIL");
    console.error(e)
}

```

```bash
PS \testing> node lib.spec.mjs

    add()
    Should add two numbers

FAIL
AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

3 !== 4

    at file:///G:/Development/frontend-masters-temp/node-js-v2/testing/lib.spec.mjs:10:12
    at ModuleJob.run (internal/modules/esm/module_job.js:152:23)
    at async Loader.import (internal/modules/esm/loader.js:166:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5) {
  generatedMessage: true,
  code: 'ERR_ASSERTION',
  actual: 3,
  expected: 4,
  operator: 'strictEqual'
}
```


JEST: 
THis is all piggybacking off of Jasmine, and grabbing more from Mocha.



## Deployment

https://intro-to-nodejs-v2-site.vercel.app/lesson/12-deployment

This is to publish a npm package.

1. create an account


2. `npm publish`


How it looks https://www.npmjs.com/package/scott-reddit-cli


Heroku - it's built on top of AWS but made a lot easier.


## Wrapup

> [00:01:53]
Something that I like to do is I like to take a small chunk of time, whether it's 60 minutes or 90 minutes. Especially in Node and like pick a technology that I'm just not familiar with in Node, whether it's like streams, WebSockets, HTTPS, a different database. And I'm like, all right, 60 minutes, build the smallest thing you can make with this.

> [00:02:14]
Whether it's following a HelloWorld tutorial on the documentation website, or watching a video. I try to build the smallest thing that I can and I try to do that multiple times. And usually within a week, I really understand that technology to the point where I'm comfortable talking about it, and it's no longer foreign to me.

> [00:02:29]
And I might not be great at it, but I'm no longer foreign. And that's kinda how I develop my knowledge, and that's kinda how I move through things. And then when I come across it in the real world, and I use it at work, that's when I develop a deep knowledge for it.

> [00:02:41]
So that's just some of the tips that I wanted to pass on to you and I don't know if that'll work or not, but that's just how I do things. Other than that, I can leave you with some really cool JavaScript projects or NodeJS projects that I think are really cool.


**When to Upgrade NPM packages?**

Only upgrade when you need it. 
`npm update [packagename]`

Like major updates, there might be a lot of refactors to get there.


