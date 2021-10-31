---
title: Week One - Web Dev V2
created: 2021-10-25T00:00:00
summary: All the notes about Web Dev V2
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

Course: 

## Using Ajax and Node.js

Brian Holt's method of using a Javascript Library:

1. Grab library via CDN
2. steal code, 
3. bastardize it.


```javascript
const popmotion = require('popmotion') // CommonJS - the old way
//  require("./useless") <-- commonjs

use import x from y // ES modules - more improved way
```

HOT TIP: In VSCode, hover over the required(), and click on the lightbulb will "fix" everything for you, using import.


You can use `-y` to say yes to all. 

```bash
$ npm init -y (yes to all)
$ npm info [package] // gives you info on what it is in the terminal
```

## Learning Git

**Links**

[SourceTree](https://www.sourcetreeapp.com/)
Git GUI.

[explainshell.com](https://explainshell.com/)
It's like a documentation for bash shell commands 

You can also do this: `$ man ls - for manual of ls`

[ohshitgit](https://ohshitgit.com/)
If you f' up, here's some recipes.
Personally, I feel like it's better to stick with a GUI.


[For your repo](https://choosealicense.com/)
Let's you choose what type of license. Work with a community, make it simple, share about improvements, MUST be open source, etc.

First, attach a LICENSE file in your repo.
Then, pick a license that aligns with you.

You have legal support to do things.
NONCOMMERCIAL - if you steal it, i can bring legal. 
Very few use GNU (copyleft).


**How to make a file:**

```
echo "<h1>title</h1>" > index.html <--- means to make a file
```

**How to exit vim**


1) vi html

2) i insert mode

3) esc --- goes to command mode

4) colon q --- not so fast

5) colon w --- save

6) colon wq --- fast and save




## Using Node.js

Using Express: https://btholt.github.io/intro-to-web-dev-v2/node

```js
const express = require("express");
const path = require("path");

const complements = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");
```


req = request
res = response
you have to res.end to end the server call
express framework to build a quick api
http is a low-level thing.
express wrap it with support stuff
