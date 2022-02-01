---
title:  Week Twelve - Typescript
created: 2022-01-29T00:00:00
summary: TypeScript Fundamentals, v3
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

Mike North
https://frontendmasters.com/courses/typescript-v3/introduction/
https://www.typescript-training.com/course/fundamentals-v3


https://www.typescriptlang.org/

The repo: 
https://github.com/mike-north/ts-fundamentals-v3


## Introduction

You'll have a well formed mental model of it.

Why it's awesome:

1. IT allows the code author, to leave more of your intent "on the page"

```js
function add(a, b, c = 0) {
	return a + b + c;
}
```

```js
function add(a: number, b:number0: number {
	add a + b;
}
add(3, "4")

```

2. Remove some kinds of errors from runtime to compile time. 
* Values that are potentially abset (null or undefined)
* Incomplete refactorng
* Breakage around internal code contracts (an argument becomes required)

3. Foundations or a code authoring experience. 

It autofills thing.

Typescript course: 
https://www.typescript-training.com/course/fundamentals-v3


Why to use TypeScript 

```
////////////////////////////////
// JavaScript, not TypeScript //
////////////////////////////////
class Car {
  constructor(make, model, year) {
    this.make = make
    this.model = model
          
(property) Car.model: any
    this.year = year
  }
}

let sedan = new Car("Honda", "Accord", 2017)
sedan.activateTurnSignal("left") // not safe!
new Car(2017, "Honda", "Accord") // not safe!
```

So the two `not safe` errors won't be discovered UNTIL you run your code. 

Where if you wire it up correctly in Typescript, it shows you the error immediately. 
![](https://i.imgur.com/W0TSVAy.png)




## Setup 
https://www.typescript-training.com/course/fundamentals-v3/02-hello-typescript/

Declaration files. 


> It's just sort of a semi colon at the end of the arguments list, right? So you can think of this almost like the types that were stripped away from our source code.

> So you start with TypeScript, which is code that runs and types, and then your compiler almost separates those out. So you get a js file that runs and you get these dts files, which contain only the type information. Why is this good? Well, it lets people who are just using JavaScript who aren't writing TypeScript.

> They can compile those js files and just call it a day. And people who are writing TypeScript, they can kind of reassemble that together and have the JavaScript that runs and the types that describe the constraints. So this is what will allow you to remain compatible with users who depend on your code regardless of whether they themselves are authoring TypeScript.

Typescript can infer variables. 
https://www.typescript-training.com/course/fundamentals-v3/03-variables-and-values/

```
// if Typescript refers it
let age = 6;

// Typescript will yell at you becuse you started this with a number. 
age = "not a number";
```

When you use const, it hardlines it. 


The use of `any`. 

It's a way to make it just work. But it doesn't use it. 
Any is dangerous!

It can be anything. It compromises the well-typed code. 
It can hold, and it can masquarade/present itself as anything. 

We'll cover more in Top & Botom Typess, in Types & Values)

## Type Categories

### Explicit Return Types 
```js 
function add(a: number, b: number): number {}
```


![](https://i.imgur.com/mo8ImkN.png)

So this is going to blow up Typescript. 
It demands that your param is a number. 

![](https://i.imgur.com/3RGwijf.png)
by adding `number` as the return value... the error now moves away from the function calls, and into the declaration, which is realy what is broken. 

TODO:
Test-driven development VS Type-driven development

```
// the shape of the object you want
{
	make: "Toyota",
	model: "Corolla',
	year: 1994
}

// to make it a Typescript variable 
let car = {
	make: string,
	model: string,
	year: number
}


// to harden the function 
function printCar(car: {
  make: string
  model: string
  year: number
}) {
  console.log(`${car.make} ${car.model} (${car.year})`)
}

```



### Using Typeguards:

notice that `chargeVoltage?` has a quesiton mark? It's an OR - so it's checking if the thing exists or not. 
```
function printCar(car: {
  make: string
  model: string
  year: number
  chargeVoltage?: number
}) {
  let str = `${car.make} ${car.model} (${car.year})`
  car.chargeVoltage
           
(property) chargeVoltage?: number | undefined
  if (typeof car.chargeVoltage !== "undefined")
    str += `// ${car.chargeVoltage}v`
                          
(property) chargeVoltage?: number
  console.log(str)
}
```

It's a optional product. 

```
// works
  chargeVoltage?: number
  
// doesn't work
  chargeVoltage: number | undefined
```

### Excess Property Checking: 
```
function printCar(car: {
  make: string
  model: string
  year: number
  chargeVoltage?: number
}) {
  // implementation removed for simplicity
}

printCar({
  make: "Tesla",
  model: "Model 3",
  year: 2020,
  chargeVoltage: 220,
  color: "RED", // <0------ EXTRA PROPERTY
})
```

Method 1: add it as a optional
```
  color?: string
```

Method 2: Move the param from a literal Object to it's own object. 

```
function printCar(car: {
  make: string
  model: string
  year: number
  chargeVoltage?: number
}) {
  // implementation removed for simplicity
}

const myCar = {
  make: "Tesla",
  model: "Model 3",
  year: 2020,
  chargeVoltage: 220,
  color: "RED", // <0------ EXTRA PROPERTY
}

printCar(myCar)
```

Why does this work?

Because the original execution: 
The only way to access that color data is within the function.
It gets thrown out, and TypeScript yells at you.

But in the version where we're storing it in a variable: 
You can access that color data by doing `myCar.color`. 
The function is NOT the primary method of getting data. 
And TypeScript is okay with that. 



### Index Signature - like dictionaries 

So something like this: 
```
const phones = {
  home: { country: "+1", area: "211", number: "652-4515" },
  work: { country: "+1", area: "670", number: "752-5856" },
  fax: { country: "+1", area: "322", number: "525-4357" },
}
```

To safeguard it: 
```
const phones: {
  [k: string]: {
	country: string,
	area: string,
	number: string
  }
} = {} 

```

### Array Types 

`const fileExtensions = ["js", "ts"]`

So if you're doing a Tuple 

> Sometimes we may want to work with a multi-element, ordered data structure, where position of each item has some special meaning or convention. This kind of structure is often called a tuple.

Like a mix array of string and numbers. 

```
let myCar = [2002, "Toyota", "Corolla"]
```

Typescript may infer it being -- : 
1. `[2002, "Toyota", "Corolla"]` should be assumed to be a mixed array of numbers and strings
2. `[2002, "Toyota", "Corolla"]` should be assumed to be a tuple of fixed length (3)

So you need to explicitly define that. 
```
let myCar: [number, string, string] = [
  2002,
  "Toyota",
  "Corolla",
]

// ERROR
myCar = ["Honda", 2017, "Accord"]

// ERROR
myCar = [2017, "Honda", "Accord", "Sedan"]

```

EDGECASE  - As of TypeScript 4.2
```
// this will cause an error on assignment
const numPair: [number, number] = [4, 5, 6]

// but messing with it down the line will not cause an error
const numPair: [number, number] = [4, 5]
numPair.push(6) // [4, 5, 6]
numPair.pop() // [4, 5]
numPair.pop() // [4]
numPair.pop() // []
```

### Structural vs Nominal Types 

**What is Type checking?**
Is the thing I'm making data, is it the shape I want it to be. 

`x = y`  // Is it equivlent to what x holds. 

`() => x` // is it returning it 

TypeScript Type system is static. 

> Java, C#, C++ all fit into this category. Keep in mind that inferrence can still occur in static type systems — TypeScript, Scala, and Haskell all have some form of static type checking.

Other Languages: 
> Dynamic type systems perform their “type equivalence” evaluation at runtime. JavaScript, Python, Ruby, Perl and PHP fall into this category.


**Nominal vs Structural**

Typescript is `Structural`

`Nominal` is all about the name. 

This is java below: 
```java 
public class Car {
  String make;
  String model;
  int make;
}
public class CarChecker {
  // takes a `Car` argument, returns a `String`
  public static String printCar(Car car) {  }
}
Car myCar = new Car();
// TYPE CHECKING
// -------------
// Is `myCar` type-equivalent to
//     what `checkCar` wants as an argument?
CarChecker.checkCar(myCar);

```

All TypeScript (which is `structural`) cares about the shape.

**Duck Typing**

It's another way of saying, "Dyanamic Typing"

> And this gets its name from the duck test, which means if it looks like a duck, swims like a duck, quacks like a duck, it's probably a duck.

> [00:07:58]
And this is kind of another way of saying dynamic typing, where we kinda attempt to go ahead and use something, and if it works out, okay, and if it doesn't, we'll throw an error at runtime. That's how JavaScript works. You can think of it as having similarities to structural typing.

> [00:08:21]
In that, you just care about having what you need, right? You don't care about who created it. It's similar to structural typing in that way, but it's also dynamic typing, in that there is no type information at build time to evaluate. So all of these errors are popping up at runtime.


**Strong vs Weak Types**

There's no agreed upon technical definitions. 

Instead, go with:
strong `->` static  
weak `->` dynamic 

### Union Types 
NOTES - this is hard. 

![](https://i.imgur.com/xp5ynPb.png)

It can be described using the Pipe operator. 

OR, or AND -- 

> In the same diagram above, if we wanted fruits that are also sour (Fruit AND Sour) we’d end up only getting { Lemon, Lime, Grapefruit }.


```
"success" | "error"
```
It can only be one or the other. 


The more advance method is to do this: 
```
const outcome: ["error", Error] | ["success", {
    name: string;
    email: string;
}]
```

If `error`, then return the error function. 
if `success`, then go through the rest of the stuff. 

Also known as a 'tagged' union type. 

[The code](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABMANjADgYTjMAKASgC5EAiACwFMBDAEwGdTEAfMqamFRxAbwChEiGMER4AstSjkAdACdqYWnAC2hRAD5EABmkBWAolmUoIWUgo0GpAYeOnz7Toz4BfPn1CRYCRMuoBPACNKAHFjAFV6SlkASTBgOEIiG1YAbVJo2ThZUgAaRABRWSzZAF0UxHT6EAgISnpGfJ5EMGplShJ6KFlcAHMAbkRKP05O7r7EF1LeG2FRVAxsXDUAXjWyKjpGA35BQSMTM0qbPbJq2vrGk73m1vaSUjEYAGtKRAA5bKk8oZGUB+UL0oAAFKAAPNroFCUaQQFRMFy5a7lQQuIZcN67PYHezHU6CDLFbJ5a6CMCUADuhSJsjwpAAKlREHDcIgUApaJRaIgfPSAIIxAAyAGVEEQ6QQkacUZNXO44WAujyQFA4e1ECtfAFgmEoJFonEEoQ+AB6E34gB6AH4gA)

**Discriminated Unions**

So 
```
const outcome = maybeGetUserInfo(); 

if (outcome[0] === "error") {
  // In this branch of your code, second is an Error
  outcome
    
} else {
  // In this branch of your code, second is the user info
  outcome
    }
```

So you can write a bunch of code like -- 
```
outcome[0] === "error" // fire errors 
outcome[0] === "waiting" // fire waiting function 
outcome[0] === "standby" // fire standby function 
```

### Aliases
https://www.typescript-training.com/course/fundamentals-v3/07-interfaces-and-type-aliases/

`{ name: string, email: string }` becomes complicated after a while. You'll have to change a lot of code. 

So you're creating a alias in a separate file, then bringing it in to define the shape. 

```
// @filename: types.ts
// Needs to be UpperCase. 
export type UserContactInfo = {
  name: string
  email: string
}


// @filename: utilities.ts
import { UserContactInfo } from "./types"
               
function printContactInfo(info: UserContactInfo) {
  console.log(info) // info // UserContactInfo 
               
  console.log(info.email) // email string
                    
}
```

FOR EXAMPLE: 
```js
// @filename: original.ts
/**
 * ORIGINAL version
 */
export function maybeGetUserInfo():
  | ["error", Error]
  | ["success", { name: string; email: string }] {
  // implementation is the same in both examples
  if (Math.random() > 0.5) {
    return [
      "success",
      { name: "Mike North", email: "mike@example.com" },
    ]
  } else {
    return [
      "error",
      new Error("The coin landed on TAILS :("),
    ]
  }
}


/**
 * CLEANED UP version
 */


// @filename: with-aliases.ts
type UserInfoOutcomeError = ["error", Error]
type UserInfoOutcomeSuccess = [
  "success",
  { name: string; email: string }
]
type UserInfoOutcome =
  | UserInfoOutcomeError
  | UserInfoOutcomeSuccess


export function maybeGetUserInfo(): UserInfoOutcome {
  // implementation is the same in both examples
  if (Math.random() > 0.5) {
    return [
      "success",
      { name: "Mike North", email: "mike@example.com" },
    ]
  } else {
    return [
      "error",
      new Error("The coin landed on TAILS :("),
    ]
  }
}

```

### Interfaces 

They can only be used to describe `object types`. 


For Javascript Classes: 
Typescript calls `extends` a heritage clause. 

> and that they are used to describe ancestry in an object oriented hierarchy of some sort. Extends is used to describe inheritance between like things. Implements is used to describe inheritance between unlike things.

![](https://i.imgur.com/6iOkD8Q.png)
This is saying, the Dog is missing the `eat` method. 

You can hit some weird stuff. And just recommend using `implements`.. 


### Alias Vs Interface 
Choosing if you should use `type`

1. If you need to define something other than an object type (e.g., use of the `|` union type operator), you must use a type alias

2. If you need to define a type to use with the `implements` heritage term, it’s best to use an interface

3. If you need to allow consumers of your types to augment them, you must use an interface.

### Exercise 

https://www.typescript-training.com/course/fundamentals-v3/08-exercise-json-types/

that exercise is really good because it helps you think through how that data is shaped, as well as going into recursive stuff. 


RESEARCH: 
Failure-driven development 

NOTES: 
tuple as a concept is used a LOT in typescript. 



## Functions 

https://www.typescript-training.com/course/fundamentals-v3/09-functions/

`void` return type means the function doesn't return anything.
> The return value of a void function is intended to be ignored

Void should only return as a function return type. 

```
// will break 
function invokeInFourSeconds(callback: () => undefined) {
  setTimeout(callback, 4000)
}

// this will work
function invokeInFiveSeconds(callback: () => void) {
  setTimeout(callback, 5000)
}

```

### Construct Signatures 

[Function overload](https://www.typescript-training.com/course/fundamentals-v3/09-functions/#function-overloads)

```ts
function handleMainEvent(
  elem: HTMLFormElement,
  handler: FormSubmitHandler
)
function handleMainEvent(
  elem: HTMLIFrameElement,
  handler: MessageHandler
)
function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
) {}
```

So this is saying, if you get a `HTMLFormElement`, then it ties with `FormSubmitHandler`. 

If you get `HTMLIFrameElement`, then it ties with `MessageHandler`. 

The wires won't get crossed. 


### `this` types and Best Practices. 

### Best Practices 

Explicit return types 

### Classes & Access Modifier Keywords 

public = allowed 
private = nobody can see this 
protected = 

(kinda like a access modifier, is `readonly`. It's like const/frozen array). 

this is really about encapsulation, not security. 
It's more of a 'fancy linter'. Using a debugger can show that data. 

```
////////////////////////////////
// JavaScript, not TypeScript //
////////////////////////////////
class Car {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }
}


////////////////////////////////
// TypeScript //
////////////////////////////////
class Car {
	public make: string 
	public model: string 
	public year: number 
	protected vinNumber = generateVinNumber()
	protected doorLockCode = generateDoorLockCode()
	 
	 
	 constructor(make: string, model: string, year: number) {
		this.make = make
		this.model = model
		this.year = year
	}
	
	//
	protected unlockAllDoors() {
		unlockCar(this, this.doorLockCode);
	}
}

```

A cleaner way to do this: 

```
// BEFORE
class Car {
  make: string
  model: string
  year: number
  constructor(make: string, model: string, year: number) {
    this.make = make
    this.model = model
    this.year = year
  }
}


// AFTER 
class Car {
  constructor(
    public make: string,
    public model: string,
    public year: number
  ) {}
}

```




## Types & Values 
https://www.typescript-training.com/course/fundamentals-v3/11-top-and-bottom-types/


### Top Types 

It's about set theory. 


`any` and `unknown`


```
const x: boolean // true or false 
const y: number // any number in JS. 5, 6, 7. 

let a: 5 | 6 | 7 // anything in { 5, 6, 7 }

let b: null // anything in { null } 

let c: {
	favoriteFruit?: "pineapple" // the choices are pineapple or undefined. 
}
```

So TOP TYPES: `any` and `unknown`
`any` can be anything in Javascript. 

When to use `any`... `console.log`

```
console.log(window, Promise, setTimeout, "foo"`
```

The difference between `any` or `unknown`

> Values with an unknown type cannot be used without first applying a type guard


It's as flexibility as `any`
but it has extra responsibility for the person who uses it. You do need to do a `type guard`.


**Practical uses*
Top types comes in handy very often. 
When converting from JS -> TS... it's good to use `any` for work-in-progress or don't know what the type. Like fetch requests. 


### Bottom Types 
REF: https://www.typescript-training.com/course/fundamentals-v3/11-top-and-bottom-types/#bottom-type-never

Describe that can hold NO possible value. 
`never` == `⊥`

This is useful for exhaustive conditionals. Like, if it's not X, or Y, then it's neither! And you NEED that to have a exhaustive conditional. 

```ts 

// The exhaustive conditional
if (myVehicle instanceof Truck) {
  myVehicle.tow() // Truck

} else if (myVehicle instanceof Car) {
  myVehicle.drive() // Car

} else {
  // NEITHER! 
  const neverValue: never = myVehicle
}

```

imagine if you have a 1000 JS files. 
And you have a declaration file for your object.

And someone changes this: 
```
// before 
let myVehicle: Vehicle = Truck | Car 


// after 
let myVehicle: Vehicle = Truck | Car | Boat
```

Now all of your conditionals with `never` are broken. Which is GOOD! You need that when doing exhaustive conditionals. 

Now, one of three things will happen in that final else block

* We will have handled every case before reaching it, and thus we will never enter the final else block
* We will catch upstream code changes that need to be handled in this conditional at compile time (e.g., adding the Boat case)
* If somehow an unexpected value “slip through” and is not caught until we actually run the code, we will get a meaningful error message

Languages like `rust` demands that all conditionals are exhausted. 

### Type Guards & Narrowing 

https://www.typescript-training.com/course/fundamentals-v3/12-type-guards/

**Default Javascript Type guards**

```
let value:
  | Date
  | null
  | undefined
  | "pineapple"
  | [number]
  | { dateRange: [Date, Date] }

```
This is too much. But this is fine if you're using type guard. 

But you can use JS stuff together: 

```
// Truthy/falsy check
else if (!value) {
  value
   
let value: undefined
}
// Some built-in functions
else if (Array.isArray(value)) {
  value
   
let value: [number]
}
```

**User Defined Typeguards**

This is where you want to check like, is it correctly the shape of the object you want. 

```
interface CarLike {
  make: string
  model: string
  year: number
}

let maybeCar: unknown

// the guard
if (
  maybeCar &&
  typeof maybeCar === "object" &&
  "make" in maybeCar &&
  typeof maybeCar["make"] === "string" &&
  "model" in maybeCar &&
  typeof maybeCar["model"] === "string" &&
  "year" in maybeCar &&
  typeof maybeCar["year"] === "number"
) {
  maybeCar
}

```

Look at that guard. It's CRAZY!. It's so many checks. 
1. Is it null or undefined 
2. Is it a object 
3. Is the values matching strings & numbers 

![](https://i.imgur.com/NGlXdJf.png)

> So the type car is only as good as your alignment between the actual checking logic that you implement and the claim you make, about what that logic means means in terms of the type, of what's passed in.

> [00:08:16]
If your logic here is flawed, you're gonna run into big problems, because type scripts got to do exactly what you say. Right now I'm saying everything's carlike. And so -19 apparently has a property called year on it, TypeScript doing what I'm telling it to do. So just be really careful about these.

> [00:08:40]
These are again, I said this before I want to say one more time. These type guards are the glue between compile time validation and runtime behavior, you got to make sure that your compile time validation and your runtime behavior match up. And if they don't, you're gonna be lying to yourself here, right?

### Nullish Values 
https://www.typescript-training.com/course/fundamentals-v3/13-nullish-values/


`null` means there's a value, but it means nothing. 

`undefined` means the value is not available yet. 

`void` for function returns should be ignored. 


```js
const userInfo = {
  name: "Mike",
  email: "mike@example.com",
  secondaryEmail: null, // user has no secondary email
}

const formInProgress = {
  createdAt: new Date(),
  data: new FormData(),
  completedAt: undefined, // it's not here yet. 
}

// for void, things like console errors 
```


## Generic 
https://www.typescript-training.com/course/fundamentals-v3/14-generics/


Types declared in other types. 

It's pretty abstract. 

so WHY?: 

It would be nice to transform data from one type of object into another. 
```
// What we have
const phoneList = [
  { customerId: "0001", areaCode: "321", num: "123-4566" },
  { customerId: "0002", areaCode: "174", num: "142-3626" },
  { customerId: "0003", areaCode: "192", num: "012-7190" },
  { customerId: "0005", areaCode: "402", num: "652-5782" },
  { customerId: "0004", areaCode: "301", num: "184-8501" },
]

// What we want 
const phoneDict = {
  "0001": {
    customerId: "0001",
    areaCode: "321",
    num: "123-4566",
  },
  "0002": {
    customerId: "0002",
    areaCode: "174",
    num: "142-3626",
  },
  /*... and so on */
}

```

We need to produce a "key" for each object. 

`<T>` is a Type Parameter T 

```
// before 
function mapDict(...args: any[]): any {}

function mapDict<T>(...args: any[]): any {}
```

**Generics tl;dr**

tbh i'm not following him at all. This is pretty abstract. 

i don't really get it.


Let's read it outload 
```
// Array.prototype.map, but for Dict

// BEFORE 
function mapDict(...args: any[]): any {}


// AFTER 

function mapDict<T, U>(
	input Dict<T>, 
	mappingCb: (arg: T) => U
	): Dict<U> {
		return {}
	}


```

1. declare that its' a type Parameter 
2. We did `T, U` because U comes after T. 
3. We are taking the input, and the callback, and want the return value to be a Dict. 




### Generic Scopes & Restraints 


https://www.typescript-training.com/course/fundamentals-v3/16-type-param-scopes-and-constraints/








