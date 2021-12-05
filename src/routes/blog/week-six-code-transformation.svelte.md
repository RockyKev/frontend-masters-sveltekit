---
title: Week Six - Code Transformation with ASTs
created: 2021-12-05T00:00:00
summary: Javascript Code Transformation and Linting with ASTs
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

## What is it

Abstract Syntax Trees. 

> An AST is the result of parsing code. For JavaScript, an AST is a JavaScript object containing a tree representation of your source. Before we use it, we have to create it. Depending on the code we are parsing, we choose the appropriate parser.

Honestly, it would be easier to read this to get a better picture:
https://www.digitalocean.com/community/tutorials/js-traversing-ast

And Kent C. Dodd's course is more when you're ready to get your hands dirty with making some AST rules.


Github: https://github.com/kentcdodds/asts-workshop
Slides: https://frontendmasters.com/courses/linting-asts/examples-of-abstract-syntax-trees/

```
git clone https://github.com/kentcdodds/asts-workshop.git
cd asts-workshop
yarn run setup --silent
node scripts/autofill-feedback-email.js YOUR_EMAIL@DOMAIN.COM
git commit -am "ready to go"
```


## Abstract Syntax Trees

If you're using Babel: 

It's how we use ESNext -> BABEL -> ES Now

```js
import { add } from 'lodash/fp'

```

Codemods better than find/replace

There's a bunch of codemods  (react-codemod, jest-codemod, etc)

Check out this visual Javascript AST Visualizer

![](https://resources.jointjs.com/demos/javascript-ast)
https://resources.jointjs.com/demos/javascript-ast


Another tool:
https://astexplorer.net/

![](https://i.imgur.com/rjstvCE.png)


AST doesn't run code. It just analyses it. 

## ESlint Plugin and AST

> ESLint is really good at identifying patterns that are not the kind of patterns you want in your code base, and that includes stylistic issues, but also actual logical problems or domain specific things.

So to do a linting example:


![](https://i.imgur.com/h9eTahx.png)

1. You write a valid and a invalid version.

2. This has a `meta` for generating docs. And a it has a `creator`

3. The final arrow is the AST explorer.

![](https://i.imgur.com/xJsMJca.png)

So to work with this description: 
`dissallow If Statements without blocks`

In the yellow, it's checking the nodes, and navigates through each block that fits. 
If there's another if statement, it moves to that node. 


![](https://i.imgur.com/B6AZUML.png)
It's a good idea to `console.log(node)` directly in the AST explorer.
Because it gives you that data.

Things has a `consequent` and in the block statement.

The `create` method returns a `context.report()
so you can return a message.

AST are just javascript objects.

Essentially, you're opening up the object in console.log, and finding the patterns of the (invalid) versus (valid) things, and writing the code to match it.



### Things to consider
Overall, it's just Javascript. You're writing a javascript function to check things, and it returns some true/false.
It's just traversing the nodes and turning things into objects so it can check.

Performance doesn't matter in this context.

He had to pass all the results to `consoleUsages` array, because he had to wait for:

1. The entire tree to be traversed so the parent is connected to the child node.

### Rocky's specific notes in this section.

* He's writing it very much like jQuery-ish, where it's slicing the object as much as he can until he gets the object's key/value that he wants, and then checks for that. 

* He constantly creates helpers for himself. He finds a opportunity to shorten a 3-4 lines into a function, he will.

More plugin links:
https://eslint.org/docs/developer-guide/working-with-plugins

## Babel Plugin an AST


> This module contains methods for building ASTs manually and for checking the types of AST nodes.

Check out Babel Types: https://babeljs.io/docs/en/babel-types

So Babel's have a lot of methods. So things like replacing the strings.

### Rocky's specific notes about this section

This is just like the other one. 

Babel builds it's ast by doing `start: 32 end: 44` so you check between the two. 

## Codemods and AST

https://github.com/codemod-js/codemod

Codemods are often domain-specific -- 

Use-cases:

* This tool changed from version 1 to version 2 and all the apis changed. So now you have to do all these fixes.
* You want to do something better than a find/replace

The use-case they used is jQuery to Javascript.


https://github.com/codemod-js/codemod

> Codemods are intended to change the source code so that you can migrate away from an old API, or something like that, old testing framework, whatever. And they're super duper cool. And because it uses babel, or because we can use Babel to do this, you pretty much know every thing you need to know about building this, it's just taking the time getting used to the APIs and that kinda thing.

> [00:02:49]
> And what happens is for each file in the source directory, it will run your plug-in on it and take the output of that and save it to the file, and so where Babel plug-ins are generally for compile time. They don't actually finish the source, they just change what you're shipping.

> [00:03:12]
> Codemods are intended to change the source code so that you can migrate away from an old API, or something like that, old testing framework, whatever. And they're super duper cool. And because it uses babel, or because we can use Babel to do this, you pretty much know every thing you need to know about building this, it's just taking the time getting used to the APIs and that kinda thing.

### Rocky's specific notes about this section




