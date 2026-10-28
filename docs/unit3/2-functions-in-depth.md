# Lesson 2: Functions in Depth

**Previous:** [← Exercise 1: Functions](1-exercise-functions.md)

Now that you can write and call functions, let's look at some details
that separate a function that *works* from one that is *well written*:
**scope**, **default parameters**, functions that **check input**, and
how to design good functions.

## Scope

Variables declared **inside** a function are **local** — they exist
only while the function is running, and the rest of your program
cannot see them:

```typescript
function showMessage(): void {
  let message: string = "I only exist inside the function";
  console.log(message);
}

showMessage();
```

**Output:**
```
I only exist inside the function
```

Trying to use `message` *outside* the function would cause an error:
`Cannot find name 'message'`. The region of a program where a variable
can be used is called its **scope**.

A variable declared **outside** every function is **global**, and can
be read from inside functions:

```typescript
let taxRate: number = 0.13;

function addTax(price: number): number {
  return price + price * taxRate;
}

console.log(addTax(100));
```

**Output:**
```
113
```

!!! note "Prefer parameters over global variables"
    Functions that depend on global variables are harder to reuse and
    test, because their result depends on something that isn't visible
    in the function's parentheses. When possible, pass the value in as
    a parameter instead (here: `addTax(price, taxRate)`).

### Shadowing

If a local variable has the **same name** as a global one, the local
one is used inside the function. The global variable is untouched:

```typescript
let x: number = 10;

function change(): void {
  let x: number = 99;
  console.log("inside: " + x);
}

change();
console.log("outside: " + x);
```

**Output:**
```
inside: 99
outside: 10
```

### Parameters Are Copies

When you pass a `number`, `string`, or `boolean` to a function, the
function receives a **copy**. Changing the parameter inside the
function does **not** change the original variable:

```typescript
function addOne(n: number): number {
  n = n + 1;
  return n;
}

let score: number = 5;
let newScore: number = addOne(score);

console.log(score);
console.log(newScore);
```

**Output:**
```
5
6
```

## Default Parameters

You can give a parameter a **default value**. If the caller leaves
that argument out, the default is used:

```typescript
function greetWith(userName: string, greeting: string = "Hello"): void {
  console.log(greeting + ", " + userName + "!");
}

greetWith("Ada");
greetWith("Ada", "Welcome");
```

**Output:**
```
Hello, Ada!
Welcome, Ada!
```

Parameters with defaults must come **after** the ones without.

## Functions That Check Input

Functions are a great way to wrap up code you'd otherwise copy and
paste — like the "keep asking until the input is valid" loop from the
last unit:

```typescript
function getNumber(message: string): number {
  while (true) {
    let input: number = Number(prompt(message));
    if (!isNaN(input)) {
      return input;
    }
    console.log("That wasn't a valid number — try again.");
  }
}

let age: number = getNumber("Enter your age: ");
let year: number = getNumber("Enter the current year: ");
console.log("You were born around " + (year - age));
```

Now every question in your program can safely ask for a number in a
single line. The `return` inside the loop ends both the loop **and** the
function as soon as the input is valid.

## Returning Early

A function can have several `return` statements. Returning early is a
clean way to handle different cases without deeply nested `if`
statements:

```typescript
function letterGrade(mark: number): string {
  if (mark >= 80) {
    return "A";
  }
  if (mark >= 70) {
    return "B";
  }
  if (mark >= 60) {
    return "C";
  }
  if (mark >= 50) {
    return "D";
  }
  return "F";
}

console.log(letterGrade(95));
console.log(letterGrade(72));
console.log(letterGrade(30));
```

**Output:**
```
A
B
F
```

!!! warning "Every path must return a value"
    If a function promises to return a `string`, **every** possible
    path through it must end in a `return`. If one doesn't, TypeScript
    reports *"Function lacks ending return statement"*.

## Writing Good Functions

- **One job.** A function called `getAverage` should calculate an
  average — not also ask the user for input and print a report.
- **A verb-based name.** `calculateTotal`, `isPrime`, `getNumber`.
- **Return, don't print.** Let the *caller* decide what to do with the
  result. A function that returns a value can be reused in many
  situations.
- **Test with known answers.** Call your function with inputs where you
  already know the right result, including unusual ones (`0`, negative
  numbers, an empty string):

```typescript
console.log(letterGrade(80) === "A");
console.log(letterGrade(79) === "B");
console.log(letterGrade(0) === "F");
```

**Output:**
```
true
true
true
```

!!! abstract "Keywords"
    - **Scope** — the part of a program where a variable can be used
    - **Local variable** — a variable declared inside a function
    - **Global variable** — a variable declared outside every function
    - **Shadowing** — a local variable hiding a global variable of the
      same name
    - **Default parameter** — a parameter value used when the caller
      doesn't supply one

---

**Next:** [Exercise 2: Functions in Depth →](2-exercise-functions-in-depth.md)
