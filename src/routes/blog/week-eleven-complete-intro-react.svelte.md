---
title: Week Eleven - React
created: 2022-01-27T00:00:00
summary: Complete Intro to React
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>


## No Frills React

Dan Abramov 

SLIDES: https://btholt.github.io/complete-intro-to-react-v6/pure-react

REPO: https://github.com/btholt/complete-intro-to-react-v6

In VS code, you can `html.5` in a html file to scaffold the page automatically.

The goal of this course. Before we go into the tools, let's go into the details. So how `create-react-app` works.


When importing react scripts:
You need both `react` and `react-dom`.

> You need both packages because react requires two packages to render. React is like the high level API all react works relatively the same way. And then react DOM is actually the underlying line library that interacts with the DOM right? I'm sure many of you have heard of React Native, right? So React Native uses both React and React Native, that's why you need both of those.

![](https://i.imgur.com/gz6ZDJh.png)

> I guess the story for that people wanna know is there's internals that React has and the React team previously had directly used those. So Facebook.com was using private APIs, and so they made this thing here that they said, do not use it or you will be fired at Facebook.

SLIDES: https://btholt.github.io/complete-intro-to-react-v6/components

```js
const App = () => {
  return React.createElement(
    "div",
    {}, 
    React.createElement("h1", { id: "logo" }, "Adopt Me!")
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
```

This is the default React instance. 

In JSX, it's actually required to capitalize your component names. 


`React.createElement(ELEMENT NAME, ELEMENT ATTRIBUTES/PROPS, DATA)`

```js
// const Pet = () => {
//   return 
//     React.createElement("div", {}, [
//       React.createElement("h2", {}, "Luna"),
//       React.createElement("h3", {}, "Dog"),
//       React.createElement("h3", {}, "Havanese"),
//     ])
// }

const Pet = (props) => {
  return 
    React.createElement("div", {}, [
      React.createElement("h2", {}, props.name),
      React.createElement("h3", {}, props.animal),
      React.createElement("h3", {}, props.breed),
    ])
}


const App = () => {
  return React.createElement(
    "div",
    {}, 
    React.createElement("h1", { id: "logo" }, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese" }),
    React.createElement(Pet, {name: "Pepper", animal: "Bird", breed: "Cockatiel" }),
    React.createElement(Pet, { name: "Sudo", animal: "Dog", breed: "Terrier"})
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
```

## JavaScript Tools

### PRETTIER

To add Prettier:

1. `npm i -D prettier`

2. create `.prettierrc`  file

```js
// .prettierrc
// just a empty object
{}
```

3. Update your scripts
```js

"scripts": {
  "format": "prettier --write \"src/**/*.{js,jsx}\""
}
```

If you want prettier to work within a project, you'll have to install it there. Not use VScode's default.

VS Code way - get the extention then change the prettier settings.

### ESLINT

1. `npm install -D eslint@7.18.0 eslint-config-prettier@8.1.0`

You'll also need to add these: 
`npm install -D eslint-plugin-import@2.22.1 eslint-plugin-jsx-a11y@6.4.1 eslint-plugin-react@7.22.0`

And finally here: 
`npm install -D eslint-plugin-react-hooks@4.2.0`
  

2. create a `eslintrc.json`

```js
// .eslintrc.json
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",    
    "prettier", // has to go last
  ],
  "rules": {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0
  },
  "plugins": ["react", "import", "jsx-ally"],
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

3. Add a script
```js
"scripts": {
  "format": "prettier --write \"src/**/*.{js,jsx}\""
  "lint": "eslint \"src/**/*.{js,jsx}\" --quiet"  
}
```

4. If you got a errors from the linter, put this on top of your react files

```js
/* global React ReactDOM */
```

### NPM 
`package-lock.json` is to share libs with a project and ensure it's exactly the same with everyone.


So remember that devDependencies are only for things your project needs.
Where dependencies are built into the project.

### Parcel
Bundler for Javascript, like Webpack.

Parcel is kinda smart and can do a lot of defaults. 

`npm install -D parcel@1.12.3`

```js
"scripts": {
  "format": "prettier --write \"src/**/*.{js,jsx}\""
  "lint": "eslint \"src/**/*.{js,jsx}\" --quiet",
  "build": "parcel src/index.html"  
}
```

It just knows to dig through index.html and get everything.

It even comes with hot module reload.

### Babel 

TIL - the diff between compile vs translation
> One of my favorite tools again being an infrastructure is Babel. I just like it. Probably a glutton for punishment, I suppose. But it's a transpiler tool. It takes code that looks one way and it makes it look a different way. And that's really the some of the store it's not a compiler, right?.

> You're not taking like a C++ source code and compiling it to a binary. That's compilation translation is, I have a set of source code and I'm making it just different source code. So, Babel is already working for us underneath the hood. One of the things that it does for us, you can write things in es 2021, and it'll transpile Harder for you to IES 2015.


1. `npm install -D @babel/core@7.12.16 @babel/preset-react@7.12.13`

2. `.babelrc`

```js
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ],
  "browserslist": [
    // " > 25%", 
    // "IE11",
    "last 2 Chrome versions", // you can also do last 2 Firefox versions
  ]
}
```

TIL: 
https://browserslist.dev/?q=bGFzdCA0IHZlcnNpb25z


3. You shouldn't ship your map stuff to production.

## Core React Concepts

### JSX

```js
// JS version
const Pet = (props) => {
  return 
    React.createElement("div", {}, [
      React.createElement("h2", {}, props.name),
      React.createElement("h3", {}, props.animal),
      React.createElement("h3", {}, props.breed),
    ])
}


// JSX version
const Pet = () => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>      
    </div>

  )
}

```

### Hooks


SLIDES: https://btholt.github.io/complete-intro-to-react-v6/hooks

```js
import { useState } from "react";


const ANIMALS = ["bird", "cat", "dog", "fish", "horse"];

// SearchParams.js
const SearchParams = () => {

  // this won't work. It's always rendering this, without a onChange.
  // const location = "Seattle, WA";

  // instead, switch to hooks
    const locationTuple = useState("Seattle, WA");
    const location = locationTuple[0]
    const setLocation = locationTuple[1]

    // Destructured
    const [ location, setLocation ] = useState("Seattle, WA");
    const [ animal, setAnimal ] = useState("");


  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location 
                  <input id="location" 
                    onChange={ e => setLocation(e.target.value) } 
                    value={location.toUppercase()} placeholder="Location" />
        </label>


        <label htmlFor="animal">
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlue={e => setAnimal(e.target.value)}          
            >

            { ANIMALS.map(animal => {
                return (
                  <option value={animal} key={animal}>
                    {animal}
                  </option>
                )
            }) 
            }


          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  )
}
```

![](https://i.imgur.com/fvF9tQT.png)

Never ever do this.
Never put hooks inside of conditionals like ifs, or for loops.

It's called hooks because the 


![](https://i.imgur.com/XCZ3jqP.png)
Say you wanted to get all of `setAnimal`. 
`Ctrl+D` will highlight the next one, so you can type both. 

### useEffect & Fetching API data

https://btholt.github.io/complete-intro-to-react-v6/useeffect

```js
import { useState, useEffect } from "react";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "fish", "horse"];

// SearchParams.js
const SearchParams = () => {

    // Destructured
    const [ location, setLocation ] = useState("Seattle, WA");
    const [ animal, setAnimal ] = useState("");
    const [pets, setPets] = useState([]);


  // if you didn't add the [], it'll run every single render. By adding a [], which is once. 
  // Or you can do [animal], if animal changes.
  useEffect( () => {
      requestPets();
  }, [])


  // 
  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?=${animal}&location=${location}&breed=${breed}`
    )

    const json = await res.json();

    // once json exists, it'll then pass it to setPets, which updates the state.
    setPets(json.pets);
  }


  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location 
                  <input id="location" 
                    onChange={ e => setLocation(e.target.value) } 
                    value={location.toUppercase()} placeholder="Location" />
        </label>


        <label htmlFor="animal">
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlue={e => setAnimal(e.target.value)}          
            >

            { ANIMALS.map(animal => {
                return (
                  <option value={animal} key={animal}>
                    {animal}
                  </option>
                )
            }) 
            }

          </select>
        </label>

        <button>Submit</button>
      </form>


{
  pets.map(pet => {

    return (
        <Pet
        name={pet.name}
        animal={pet.breed}>
    )
  })

  
}

    </div>
  )
}
```

If you use `setTimeout` in `useEffect`, you should also clean up.

![](https://i.imgur.com/O5nX5Wk.png)

### Custom Hook

Say before you make a API call, you want to check if the data already exists. 
If it does, then it returns it.

There's no specialness that happens. 

You shouldn't actually make a custom hook too frequently. 
But this becomes a black box. And it might be better to be search params.

```js
import { useState, useEffect } from "react";

export default function useBreedList(animal) {
	const [ breedList, setBreedList ] = useState([]); // default empty	
	const [ status, setStatus ] = useState('unloaded'); // enum state


	// this will run every time the animal changes. 
	useEffect( () => {
	
		if (!animal) {
			setBreedList([]);
		} else if (localCache[animal]) {
			setBreedList(localCache[animal]);
		} else {
			requestBreedList();
		}
	
	
		async function requestBreedList() {

			// reset breedlist 
			setBreedList([]);
			
			setStatus('loading');
			
			const res = await fetch(
				`http://pets-v2.dev-apis.com/breeds?animal=${animal}`
			)
			
			const json = await res.json();
			localCache[animal] = json.breeds || [];
		
			setBreedList(localCache[animal]);
			setStatus('loaded');
		}
	
	}, [animal])

	return [ breedlist, status];
}

```


Handling User Input
Event Handler: https://reactjs.org/docs/events.html#supported-events

Animation, touch events, copy events, UI events

```html
<form onSubmit={ (e) => {
		e.preventDefault()
		requestPets()
	}} >
```

for example, if you add a cut..
![](https://i.imgur.com/IVjvUnk.png)

It "looks" like a native DOM event? Well no, it's a React Event. 


Using React's ternaries: 
![](https://i.imgur.com/J9VOJ1c.png)

The `key` is keeping track of react changes.
React does not allow you to create a prop called `key`


ADD TO TIL:
**Don't be clever with your props!**

```
// BAD
<Pet {...pet} key={pet.id}>


// GOOD
<Pet
	animal={pet.animal}
	key={pet.id}
	name={pet.name}
	breed={pet.breed}
	images={pet.images}
/>

```

> [00:08:36] And let me tell you from deep experience with this problem, it makes us so much harder to read later. Because I'll come back here is like what the hell is pep getting? I don't know, right you become unable to understand. How the parent is interacting with the child by reading the code.


> So this is exactly what I'm talking about is like the waters become very murky of what's going where and are we getting the right things in the right locations. So I wanted to show you because you're never really going to run into this because this looks so nice and so easy to type. But just don't do it believe me, having worked on a code base that did this a lot. It was incredibly frustrating to work with. Just stick to this, I know it's verbose and takes so many keystrokes in my fingers are so tired and please help me, but don't just, don't do it.


### Dev Environment

`NODE_ENV=development`

ADD TO TIL:
Slack was shipping development mode for years, and saw a massive speed boost. 

RESEARCH: https://twitter.com/pankowecki/status/892294002040594434
https://news.ycombinator.com/item?id=14899482

Higher Order Component in React 
in the sense that it itself doesn't do anything, but it offers functionality to its children components.

## React Capabilities

React Router V3 -> V4 -> V5 is WILDLY different. 
But each new version is very powerful.


### Class Components

Hook vs class components
class has lifecycle hooks 

```js
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

// const Details = () => {
//	return <h2>hi lololol omg </h2>
// } 

class Details extends Component {
	constructor() {
		super(); // has to do it. Calls the Component Constructor
		
		this.state = { loading: true }
	}

	// it's kinda like useEffect 
	// fetch all the data 
	async componentDidMount() {
		const res = await fetch(	`http://pets-v2.dev-apis.com/pets?id={this.props.match.params.id}`
		)
	
		const json = await res.json();

		// this merges with your state
		// it ONLY overrides what you have. So it won't change things. 
		this.setState({
			loading: false,
			name: json.pets[0].name, 
			breed: json.pets[0].breed,
			// .. other stuff
	
		});
		
		// Or you can merge two objects together
		this.setState(
			Object.Assign(
			{
				loading: false,
			}, json.pets[0]		
			)		
		)
	
	}

	render() {
	
		if (this.state.loading) {
			return <h2> Loading...</h2>;
	
		}

		// let's destructure the API 
		const { animal, breed, city, state, description, name } = this.state;

		return (
		
		<div className="details">

			<div>
				<h1>{name}</h1>
				<h2>{`${animal} - ${breed]....}</h2>
		
		</div>		
		)
	}
}

export default withRouter(Details);

```

### Class Properties

Follow this: 
https://btholt.github.io/complete-intro-to-react-v6/class-properties


Configure your babel configs for this: 

`npm i -D @babel/plugin-proposal-class-properties@7.13.0 @babel/preset-env@7.13.5 @babel/eslint-parser@7.13.4`


a quick way to clean out all of your cache. 
`rm -rf .cache dist`


ADD TO TIL
By adding a + in front of a variable, it will coercion it into a number. 

![](https://i.imgur.com/PHEGAHc.png)


## Special Case React Tools

### Errors

So you can only do error boundries in React Component Classes.

For example: 
If you fail grabbing an API, you can 
1. do a error component that sends it to your error tracking tool.

2. You can have it redirect back to your main page. 

More info here: https://btholt.github.io/complete-intro-to-react-v6/error-boundaries


### Context

> So here we go. What is context? Context is like state, but instead of being confined to a component, it's global to your application. It's application-level state. This is dangerous. Avoid using context until you have to use it. One of React's primary benefit is it makes the flow of data obvious by being explicit. This can make it cumbersome at times but it's worth it because your code stays legible and understandable. Things like context obscure it.

> Context (mostly) replaces Redux. Well, typically. It fills the same need as Redux. I really can't see why you would need to use both. Use one or the other.

notes: https://btholt.github.io/complete-intro-to-react-v6/context


### Portals, Refs

Portals have to show in front of you. 

In your root `html` file.

```html
<div id="modal"></div>
<div id="root"></div>
```

Now modal can live ABOVE your file.

![](https://i.imgur.com/fbB1FZz.png)

