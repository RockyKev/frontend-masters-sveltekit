---
title: Week Four - Intro to Serverless
created: 2021-11-22T00:00:00
summary:  Modern Search Engine Optimization (SEO)
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

## Serverless Functions

Install netlify @ v2.58.0
`npm i -g netlify-cli@latest`

Then `ntl dev`

Why? It's the easiest serverless thing. (Also he works there lol)

Why are we using netlify instead of the base installation?
Because serverless functions don't run in the frontend.
They run in their own separate app.

### Boop
in netlify.toml
```
[build]
  command = "npm run build"
  publish = "_site"
  functions = "functions" // this tells netlify to check for a `functions` folder.
```
We are not writing in toml.


in functions/boop.js
```js
// servless functions how to deal with incoming requests.
// and you do that with a handler

exports.handler = async () => {
    return {
        statusCode: 200,
        body: 'Boop!',
    }
}
```

Then to get it to run.
http://localhost:8888/.netlify/functions/boop


### Movies
```js
// data/movies.json
{ 
  ... // 
}

// functions/movies.js
const movies = require('../data/movies.json');

exports.handler = async() => {
    return {
        statusCode: 200,
        body: JSON.stringify(movies),
        // body: movies,
    }
}
```

Then to see it: 
http://localhost:8888/.netlify/functions/movies

### Parameters

netlify functions/aws uses event (event.queryStringParameters)
 azure/google functions... the syntax might be different


How to grab a query string
echo? text="Hello!"

``` js
// functions/echo.js

// http://localhost:8888/.netlify/functions/echo?text=Hello!&one=1&two=2
// { text: 'Hello!', one: '1', two: '2' 
exports.handler = async (event) => {
    console.log(event.queryStringParameters);
    const { text } = event.queryStringParameters;

    return {
        statusCode: 200,
        body: `You said: ${text}`
    }

}
```

A movie lookup:
```js
const movies = require('../data/movies.json');

// destructure the event element
exports.handler = async ({ queryStringParameters }) => {


    // http://localhost:8888/.netlify/functions/movie-by-id?id=tt2975590
    // should give us Batman v. Booperman

    const { id } = queryStringParameters;
    const movie = movies.find( (m) => m.id === id); 

    if (!movie) {
        return {
            statusCode: 404,
            body: 'Not Found'
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify(movie)  
    }
}
```


## API Data

### Setting up a API Secret
THis is allowing us to make a api call somewhere else on OMDb API. 
Register for a API key. It's free.

How to get a secret key from javascript
1. inspect the JS Super secret key. 
2. If you make a api call that's serverless, you can't see the headers data? 
The serverless function cannot be seen. So it's not exposed.


HEADS UP: 
```js
// this is wrong
.then((response) => {
    response.json()
})

// this is right
.then((response) => response.json())

.then((response) => {
    return response.json()
})

```

The code: 
```js
const { URL } = require("url"); // node-specific api
const fetch = require("node-fetch");

const movies = require("../data/movies.json");

exports.handler = async () => {
  const api = new URL("https://www.omdbapi.com/");

  // add secret API key to the query string
  api.searchParams.set("apikey", process.env.OMDB_API_KEY);

  // we make a call to ALL movies, and then wait for everything to come in with the Promise.all.
  // REF: https://www.learnwithjason.dev/blog/keep-async-await-from-blocking-execution/
  // if we awaited at the `return fetch()`, it would be movie, wait for call... movie wait for call. Will take longer.
  // by putting the promise at the beginning, it executes in parallel.

  const promises = movies.map((movie) => {

    // use the movie's IMDB ID to look up the details
    api.searchParams.set("i", movie.id);

    return fetch(api)
      .then((response) => response.json())
      .then((data) => {

        const scores = data.Ratings;

        return {
          ...movie,
          scores,
        };
      });
  });

  const moviesWithRatings = await Promise.all(promises);

  return {
    statusCode: 200,
    body: JSON.stringify(moviesWithRatings),
  };
};

```

Complete working code with a basic working API, a third party pull, and JSON data inside the project.

https://github.com/RockyKev/fe-masters-intro-serverless/tree/589701be51ea998c52011ae03e25433626d64b08

## Database & Auth

Now we're going into databases. It' mashed into the API Data section for some reason.

### Setting up a Quick Database with Hasura

1. You're using Hasura to create a database
2. Heroku to do serverless or something i dunno>

NOTE: The setup is significantly different from what Jason is doing.


In Hasura - just create a new project
![](https://i.imgur.com/dcBLNZL.png)

Then connect it through here:
![](https://i.imgur.com/3liWG1j.png)


### Hasura - Fetching Data
Now to add it into your app and call the data...
Add a quick set of data and check out the GraphiQL.
![](https://i.imgur.com/83yJxLB.png)

```js
// functions/util/hasura.js

// this can be set up for both get/post
const fetch = require('node-fetch');

async function query({ query, variables = {} }) {


    const result = await fetch(process.env.HASURA_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET
        },
        body: JSON.stringify( { query, variables }),    
    })
    .then( (response) => response.json());

    // TODO: in a production app, check if the query is correct and formed. Show helpful info. 
    // results.errors

    return result.data;
}

// named exports
exports.query = query;
```

Then in your movies.js, update it:

```js

// movies.js
const { URL } = require("url"); // node-specific api
const fetch = require("node-fetch");
const { query } = require("./util/hasura");

// const movies = require("../data/movies.json");

exports.handler = async () => {
  const api = new URL("https://www.omdbapi.com/");

  // a GraphQL query
  const { movies } = await query({
    query: `
        query {
            movies {
                id
                poster
                tagline
                title
            }
        }      
    `,
  });

  api.searchParams.set("apikey", process.env.OMDB_API_KEY);

  const promises = movies.map((movie) => {
    api.searchParams.set("i", movie.id);

    return fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const scores = data.Ratings;

        return {
          ...movie,
          scores,
        };
      });
  });

  const moviesWithRatings = await Promise.all(promises);

  return {
    statusCode: 200,
    body: JSON.stringify(moviesWithRatings),
  };
};
```

### Hasura - Posting Data through GraphiQL

![](https://i.imgur.com/xbSFk91.png)

![](https://i.imgur.com/7qTbq3Y.png)

### Posting data from the admin.html page

So when you visit `http://localhost:56237/admin`

```html
<h1>Add a New Movie</h1>

<div class="message"></div>

<form id="add-movie">
  <label for="id">IMDb Movie ID <input type="text" id="id" name="id" /></label>
  <label for="title">Title <input type="text" id="title" name="title" /></label>
  <label for="tagline"
    >Tagline <input type="text" id="tagline" name="tagline"
  /></label>
  <label for="poster"
    >Poster <input type="text" id="poster" name="poster"
  /></label>
  <button type="submit">Add New Movie</button>
</form>


<script>

async function handleSubmit(event) {
  event.preventDefault();

  // TODO: FormData API?
  const data = new FormData(event.target);

  // serverless function
  const result = await fetch('/.netlify/functions/add-movie', {
    method: 'POST',
    body: JSON.stringify({
      id: data.get('id'),
      title: data.get('title'),
      tagline: data.get('tagline'),
      poster: data.get('poster'),
    })
  }).then( (response)  => {
      // TODO: if something goes wrong, print the error code.
      // but we want to show a 401 if you're not logged in.
      document.querySelector('.message').innerText = `Response: ${response.status}`

    })
}

document.querySelector('#add-movie').addEventListener('submit', handleSubmit)

</script>
```
> I have created a submission to our serverless function and we're gonna call it with POST instead of get. And when we call it with POST, that means that it's not going in as query string parameters.

> [00:04:10]
> And there's a reason for that. I don't want the data in the body to show up in a server log somewhere, right? We don't want the URL to be called this like, add-movie query string, title, tagline, etc. We want it to be just a call to add-movie and then the body gets sent as a POST body object, which then we'll grab out once we're done.

This calls the serverless function `add-movie`.
Let's build that out now.

```js
// const { query } = require('./util/hasura')

exports.handler = async (event) => {

    // console.log(event);
    // when you submit, you get something like  body: '{"id":"id","title":"title","tagline":"tagline","poster":"poster"}',
    // So JSON.parse it to make it a nice data object
    const { id, title, tagline, poster } = JSON.parse(event.body);

    // just so it doesn't time out
    return {
        statusCode: 200,
        body: 'wip'
    }
}
```


### Adding data to the database

![](https://i.imgur.com/WzRJ5A3.png)

```js

// functions/add-movie.js

const { query } = require("./util/hasura");

exports.handler = async (event) => {

    console.log(event);

    const { id, title, tagline, poster } = JSON.parse(event.body);


    const result = await query({
        // the String! is a GraphQL 'required' query.
        query: `
            mutation ($poster: String!, $tagline: String!, $title: String!, $id: String!) {
                insert_movies_one(object: {poster: $poster, tagline: $tagline, title: $title, id: $id}) {
                id
                }
            }        
        `,
        variables: { id, title, tagline, poster }
    })
    


    // just so it doesn't time out
    return {
        statusCode: 200,
        body: JSON.stringify(result)
    }
}

```

### Access Control
This locks the ability to visit /admin/ page and edited. It's not gated.

1. We'll be using netlify identify

`ntl init`

2. you'll create a new project and hook it all up with netlify.

3. You now need to hook up your env. files in the netlify app.

4. After doing so, you then need to trigger another deploy. 

5. Finally, switch over to Netlify Identity to turn it on.

![](https://i.imgur.com/4nHUNko.png)

6. We'll also use the Netlify widget to handle all this.

[https://github.com/netlify/netlify-identity-widget](https://github.com/netlify/netlify-identity-widget)

7. Then you grab the widget code and put it all in the page.


```html
// login.html
  
  <div data-netlify-identity-button>Login</div>

  <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>    
```

8. Finally we create an account, and it'll exist on the Netlify side.

![](https://i.imgur.com/BQlrOtz.png)
![](https://i.imgur.com/6lgozqd.png)


And you can use the `console.log(netlifyIdentity.currentUser()) (via this: https://github.com/netlify/netlify-identity-widget)
![](https://i.imgur.com/ewE5tFL.png)


Now to handle login and logout

In the admin panel, where you can add new data.
It'll redirect you to the login page if you're not logged in.
```html
<!-- // admin.html -->
<a href="#logout" class="logout">Log Out</a>

<script>
function handleIdentityEvent(user) {

  // if you are a user, then keep you here
  if (user && user.token) {
    return
  }

  // otherwise redirect you
  window.location.pathname = '/login/';
}

window.netlifyIdentity.on('init', handleIdentityEvent);
window.netlifyIdentity.on('logout', handleIdentityEvent);

document.querySelector('.logout').addEventListener('click', (event) => {

  event.preventDefault();
  window.netlifyIdentity.logout();

})
</script>
```

In the login page, where you login via netlify.
If you are logged in, it'll redirect you to the admin page.

```html
<script>
  function handleLogin(user) {
    if (!user || !user.token) {
      return;
    }

    // if we get here, it means someone is logged in
    window.location.pathname = "/admin/";
  }

  window.netlifyIdentity.on("init", handleLogin);
  window.netlifyIdentity.on("login", handleLogin);
</script>
```

NOTE: If the redirect stuff is broken on local, it's because your local site isn't linked with your netlify.
This only works once you "log in" already, as Netlify Identify is a Netlify.com thing.

### Avoiding malicious users

> [00:00:00]
> Have somebody was being mischievous, they could figure out what our serverless function was. And then they could just skip this UI altogether, and they could just post to that serverless function, which we don't want. We wanna control access all the way, and so what we're gonna do is we're gonna modify our admin a little bit.

```js


// admin.html
async function handleSubmit(event) {
  event.preventDefault();

    // we are now getting a JWT token here
    // then in the serverless function, pass it in the headers
  const { access_token } = window.netlifyIdentity.currentUser().token;

  // TODO: FormData API?
  const data = new FormData(event.target);

  // serverless function
  const result = await fetch('/.netlify/functions/add-movie', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${access_token}`
    },
    body: JSON.stringify({
      id: data.get('id'),
      title: data.get('title'),
      tagline: data.get('tagline'),
      poster: data.get('poster'),
    })

```

Add to TIL:
How to parse a JWT: https://jwt.io/

Grab that bearer token. 
![](https://i.imgur.com/71JYAfx.png)

Netlify handles it for you using the `context` param.

We now update the serverless function.
```js

// add-movie.js

const { query } = require("./util/hasura");

exports.handler = async (event, context) => {

    const { id, title, tagline, poster } = JSON.parse(event.body);
    const { user } = context.clientContext;

    const isLoggedIn = user && user.app_metadata;
    const roles = user.app_metadata.roles || [];

    if (!isLoggedIn || !roles.includes('admin')) {
        return {
            statusCode: 401,
            body: 'Unauthorized'
        }
    }

    const result = await query({
        // the String! is a GraphQL 'required' query.
        query: `
            mutation ($poster: String!, $tagline: String!, $title: String!, $id: String!) {
                insert_movies_one(object: {poster: $poster, tagline: $tagline, title: $title, id: $id}) {
                id
                }
            }        
        `,
        variables: { id, title, tagline, poster }
    })
    

    // just so it doesn't time out
    return {
        statusCode: 200,
        body: JSON.stringify(result)
    }
}

```

## Use Cases & Q&A

ADD TO TIL
`killall node` - a sure fire way to kill everything.


Good user cases:

1.  Contact Us and Newsletter is managed by serverless functions.

Jason does: https://github.com/jlengstorf/jason.af/blob/main/functions/subscribe.js

2. Reactions and interactions: 
The add to like post, or count visitors?
https://www.joshwcomeau.com/css/introducing-shadow-palette-generator/


3. Parallel Processing:
tl;dr: say your gatsby site takes a lot of processes.
You can use a bunch of serverless functions (running many many machines at once) to create this end goal.
https://www.npmjs.com/package/gatsby-parallel-runner

4. Add listeners on Twitch
https://github.com/learnwithjason/learnwithjason.dev/tree/main/functions

5. Starbucks uses their shopcart as a sererless function. 

6. Stripe Subscriptions
https://github.com/stripe-samples/netlify-stripe-subscriptions/blob/main/functions/identity-signup.js

https://www.netlify.com/blog/2020/07/13/manage-subscriptions-and-protect-content-with-stripe/


7. Crawl the web