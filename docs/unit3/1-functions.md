# Lesson 1: Functions

**Previous:** [← Assignment 2](../unit2/7-assignment-2.md)

Until now you've been *using* functions that other people wrote, like
`console.log()` and `Number()`. In this unit you'll learn to write your
own — and then learn **arrays**, which let you store many values under
one name. Together, these two ideas are the foundation of almost every
real program.

## Setting Up This Unit's Folder

Just like in the last unit, create a new folder for this unit's work:

```bash
mkdir unit-3
cd unit-3
```

## Why Write Functions?

Imagine you need to calculate the area of a rectangle in five different
places in your program. You could copy and paste the same calculation
five times — but if you later find a mistake, you'd have to fix it in
five places. A **function** lets you write the code **once**, give it a
name, and **call** it whenever you need it.

Functions make programs:

- **shorter** — no repeated code
- **easier to fix** — change it in one place
- **easier to read** — a good name tells you what the code does
- **easier to test** — you can check one small piece at a time

## Declaring and Calling a Function

```typescript
function greet(): void {
  console.log("Hello!");
}

greet();
greet();
```

**Output:**
```
Hello!
Hello!
```

Breaking it down:

- `function` — the keyword that starts a function **declaration**
- `greet` — the function's **name**
- `()` — the parentheses hold the **parameters** (none here)
- `: void` — the **return type** (`void` means "returns nothing")
- `{ ... }` — the **body**: the code that runs when the function is
  called

Declaring a function does **not** run it. The code only runs when you
**call** the function by writing its name followed by parentheses.

## Parameters

Most functions need some information to do their job. **Parameters**
are variables listed in the parentheses that receive values when the
function is called:

```typescript
function greetUser(userName: string): void {
  console.log("Hello, " + userName + "!");
}

greetUser("Ada");
greetUser("Linus");
```

**Output:**
```
Hello, Ada!
Hello, Linus!
```

A function can have more than one parameter, separated by commas.
Every parameter needs a **type**:

```typescript
function rectangleArea(width: number, height: number): void {
  console.log("Area: " + width * height);
}

rectangleArea(4, 5);
```

**Output:**
```
Area: 20
```

!!! note "Parameter vs. argument"
    A **parameter** is the variable in the function's declaration
    (`width`, `height`). An **argument** is the actual value you pass
    in when calling it (`4`, `5`). The arguments are matched to the
    parameters **in order**.

## Return Values

So far our functions *display* something. More often, you want a
function to **calculate** a value and hand it back so the rest of your
program can use it. The `return` statement does exactly that:

```typescript
function add(a: number, b: number): number {
  return a + b;
}

let total: number = add(3, 4);
console.log(total);
console.log(add(10, 20) * 2);
```

**Output:**
```
7
60
```

The return type after the parentheses (`: number`) says what kind of
value comes back. The call `add(3, 4)` is *replaced by* the value it
returns, so you can store it in a variable or use it inside a larger
expression.

As soon as a `return` statement runs, the function **ends
immediately** — any code after it in the function is skipped.

A function can return any type, including `string` and `boolean`:

```typescript
function isAdult(age: number): boolean {
  return age >= 18;
}

console.log(isAdult(20));
console.log(isAdult(15));
```

**Output:**
```
true
false
```

!!! warning "`return` is not the same as `console.log()`"
    `console.log()` only **shows** a value on the screen — the program
    can't use it afterwards. `return` **hands the value back** to
    whatever called the function.

    ```typescript
    function showDouble(x: number): void {
      console.log(x * 2);
    }

    function getDouble(x: number): number {
      return x * 2;
    }

    let result: number = getDouble(5) + 1;
    console.log(result);
    ```

    **Output:**
    ```
    11
    ```

    Writing `showDouble(5) + 1` would be an error, because
    `showDouble` returns `void` — there is no value to add to.

## Functions That Call Other Functions

A function can call another function. This lets you build complicated
behaviour out of small, simple pieces:

```typescript
function square(x: number): number {
  return x * x;
}

function hypotenuse(a: number, b: number): number {
  return Math.sqrt(square(a) + square(b));
}

console.log(hypotenuse(3, 4));
```

**Output:**
```
5
```

## Keeping Function Names Separate Between Files

!!! warning "Function names can clash between files"
    As you saw in the last unit, a TypeScript file with no `import` or
    `export` is treated as a global script, so **every such file shares
    one set of names**. If two of your files both declare
    `function average(...)`, you'll get the error *"Duplicate
    function implementation"* — and variables named `name` or `length`
    clash with names that already exist in the browser's built-in
    code.

    The fix is to add this line to the end of any file that declares
    functions or top-level variables:

    ```typescript
    export {};
    ```

    This turns the file into a **module** with its own private scope.
    Files that already start with `import promptSync from "prompt-sync";`
    are already modules and don't need it.

!!! abstract "Keywords"
    - **Function** — a named block of code that can be reused by
      calling it
    - **Call** — running a function by writing its name followed by
      parentheses
    - **Parameter** — a variable in a function's declaration that
      receives a value
    - **Argument** — the actual value passed to a function when it is
      called
    - **Return value** — the value a function hands back to the code
      that called it
    - **`return`** — statement that ends a function and sends back a
      value
    - **`void`** — the return type of a function that returns nothing
    - **Function body** — the code between a function's curly braces

---

**Next:** [Exercise 1: Functions →](1-exercise-functions.md)
