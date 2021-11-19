---
title: Week Four - Intro to API
created: 2021-11-18T00:00:00
summary:  Modern Search Engine Optimization (SEO)
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

Slides: https://slides.com/scotups/api-design-in-node-with-express-v3/
Repo: https://github.com/FrontendMasters/api-design-node-v3
MongoDB hosting: https://mlab.com/
MondoDB in Memory: https://www.npmjs.com/package/mongodb-memory-server

## Introduction

API is: Application programming interface
They mean REST API. It's the verb.
Usually a server on some remote machine that dictates how another application can interact with with some data
Basic data operations like, Create, Read, Update, Destroy (CRUD)


**Node:**
Build for high concurrent APIs that are not CPU intensive

Node.js is Javascript, async and event driven.
SIngle threaded (can optimize)

When kept async, Node can handle a high amount of concurrent request.

Not design for CPU Intensive work (data crunching, ML, big math)

**Express**
It's the standard API framework for Node.js

Handles sockets, route matching, error handling, and more.

Open source.

## Express

Standard action verbs.
GET, POST, UPDATE, DELETE

```js
app.get('/', (req, res) => {
  res.send({ message: "hello"})
})
```

Insomnia API is a Postman alternative.

**Middleware**
Middleware is a lsit of functions that execute, in order, before your controllers.

It's in the middle of the request & response.

* Allow you to execute functions on an incoming request with guaranteed order.
* Great for authenticating, transforming the request, tracking, error handling.
* Middleware can also respond to request like a controller would, but that is not their intent.

```js
// middleware is 'the next'. 
app.get('/data', (req, res, next) => {
  console.log("logging")
})

```

## Data Modeling

## Controllers & Models

## Auth