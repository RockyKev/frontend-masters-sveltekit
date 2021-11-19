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

Think of a response as a `return `

**Matching route requests**

You'll often use exact matching, or param matching.

```js
// regex
app.get('/^user/', (req, res) => {
  res.send({ message: "hello"})
})

// glob
app.get('/user/*', (req, res) => {
  res.send({ message: "hello"})
})

// param
app.get('/user/:id', (req, res) => {
  res.send({ message: "hello"})
})

```

**POST vs PUT**
Post is creating something new.
Put is 'putting' in new information.


**Route Order**

```js
app.get('/', (req, res) => {
  res.send({ data: 1 })
})

app.get('/', (req, res) => {
  res.send({ data: 2 }) // this will be the result.
})

```

**Router and Sub Routes**

`const router = express.router()`

Why would you use a router?
if you different authentication strategy. 

[00:04:32]
>> Speaker 2: So why would you use router over app.get?
>> Scott Moss: The reason you would use router is if you just didn't wanna put everything in the same file, honestly. Or if you had, if some part of your API had its own set of rules that you wanted to isolate just for that part of the API, then you would make another router for it.

[00:04:56]
For instance, let's say you had an API that serves static assets that also serves json, it served this proprietary machine learning thing. And the json one had a different authentication strategy than a machine learning one did, right? So if you added the authentication strategy as middleware to the route, it'll lock the whole API down.

[00:05:17]
That's not what you want, you need different authentication strategies for different things. So you would make another router for this part of your API, for the json, and register it's authentication strategy on it's middleware and then the machine learning one would have it's authentication strategy on it's middleware, and they don't conflict with each other.


**Router Verb Methods**

Instead of creating all the get, post, put, delete...

```js
app.get('/', (req, res) => {
  res.send({ data: 1 })
})

app.put('/', (req, res) => {
  //
})

app.delete('/', (req, res) => {
  //
})

```

you can use router.

```js

routes.router('/cat/:id')
  .get()
  .put()
  .delete()

```


**item.router.js**

```js

// item.router.js
import { Router } from 'express'

const controller = (req, res) => {
  res.send ( { message: 'hello' })
}

const router = Router()

router.route('/')
  .get(controller)
  .post(controller)

// /api/item/:id
router
  .route('/:id')
  .put(controller)
  .delete(controller)
  .get(controller)

export default router

// server.js
import itemRouter from './resources/item.item.router'

app.use('/api/item', itemRouter)

```

## Data Modeling

Mongoose for schema.
The model is what things should look like.

```js
const userSchema = new mongoose.Schema(
  {
    email: String,
    name: String
  }
)
```



## Controllers & Models

tldr: Controllers are just middleware but with the intent on returning some data.

Middleware and controllers are the same.

But Controllers can be anything - like third party library, or Stripe data.

They are going to return some data.

* Controllers handle what a Route + Verb combo can access from the DB

* Think of them as the final middleware in the stack for a request. Their is no intent to proceed to another middleware function after a controller (like a return)

* Controllers implement the logic that interacts with our DB models

* Can generalize controllers to work for many models because we're going with a REST approach which requires CRUD actions on resources


**Generalizing CRUD Design Overview**

You're better off creating 
Create One
Get One
Get Many
Update One
Delete One

C - model.create(), new model() // 
R - model.find(), model.findOne(), model.findById() // get one, get many
U - model.update(), model.findByIdAndUpdate(), model.findOneAndUpdate()
D - model.remove(), model.findByIdAndUpdate(), model.findOneAndRemove()

## Auth

tldr; You can never truly protect an API, but requiring authentication makes it a bit safer



Your API - will never be entirely safe, but make it hard for them


> There's nothing, cuz your vulnerability are gonna be your users. So either way, your application is just gonna be hacked by somebody if it wants to be. So there really isn't a safe way, but you can just make it harder for them, and that's what authentication is gonna do. 

> So authentication is controlling if an incoming request can proceed or not, that's basically it.

> [00:01:32]
Can this request go forward and do what it's trying to do? That's authentication at its finest. At least in the context of what we're gonna be doing. Authorization is controlling if an authenticated request has the correct permissions to access a resource. So after you even authenticate it, we need to see if you're authorized to do what you're asking to do.

> [00:01:52]
Are you authorized to delete work spaces, are you authorized to change their credit card information, although you are authenticated? So that's the difference. So that's like you're using like some type of roles or something like that. That's like authorization. Identification is basically, who is this requester? What user is it, what application is it?

> [00:02:13]
I need to identify what, who this request is. So, those are the three different things when people, when I hear people say about authentication, they're really talking about all three of those. They're just summarizing it with the word Auth. So, that's basically what it is. What we're going to be doing is, yeah, basically all three of them.

The THREE: 
Authentication - is controlling if an incoming request can proceed or not

Authorization - is controlling if an authenticated request has the correct permissions to access a resource

Identification -  is determining who the requester is


**JWT authentication**

So JWT authentication. They're basically tokens passed to every single request to check on the auth server.

> So if you compare it to something like sessions and cookies on the server, right, that's a traditional authentication mechanism where, on the server, the server keeps track of sessions stored somewhere.

> [00:00:20]
You have some session state where it's in redis, in memory. Somewhere you're keeping track of sessions of a user that's interacted with the database and that's how you know they are authenticated or not. When they're not, you get rid of that session. They had to create a new session.

> [00:00:34]
So that's like a stateful authentication method. JWT is the quite opposite. It's stateless. The server doesn't keep track of anything. It has no idea what's happening. They're not keeping track of who's asking for anything. All the server does is create a token and gives it to an authenticated requestor.

> [00:00:51]
And from that point on, the requestor has to send that token on every single request. It's stateless. It doesn't remember what happened last time. You have to send it every single time, and then it checks every single time to see if you're authenticated. So a JWT authentication is basically a bearer token strategy that allows the API to be stateless with user auth.

They call it a bearer token strategy.

The API will take the token, and verify it to then return a payload.

## Wrapup

hapi is a framework like express.

