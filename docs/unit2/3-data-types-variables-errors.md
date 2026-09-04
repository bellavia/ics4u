# Lesson 3: Data Types, Variables, & Errors (Review)

**Previous:** [← Exercise 2: Hello World & Output](2-exercise-hello-world-output.md)

Let's review TypeScript's basic data types, variables, and the kinds of
errors you'll run into while coding.

## Review: TypeScript's Basic Data Types

Recall TypeScript has just three basic data types:

| Data Type | Holds |
|-----------|-------|
| `number` | Any numeric value — whole numbers and decimals alike |
| `string` | Text, written in quotes |
| `boolean` | Only `true` or `false` |

Here are a few examples output together:

```typescript
console.log("Hello World\nHow are you?");
console.log("\nLovely day!");
console.log("\n" + 5 + " plus " + 5 + " equals " + 5 + 5);
console.log("\n" + 5 + " plus " + 5 + " equals " + (5 + 5));
console.log("\n" + 3.2 + " divided by " + 2.1 + " equals " + 3.2 / 2.1);
console.log("\nBoolean value 'true' equals " + true);
console.log("\nBoolean value 'false' equals " + false);
```

**Output:**
```
Hello World
How are you?

Lovely day!

5 plus 5 equals 55

5 plus 5 equals 10

3.2 divided by 2.1 equals 1.5238095238095237

Boolean value 'true' equals true

Boolean value 'false' equals false
```

!!! note "BEDMAS still applies"
    Notice `5 + 5` embedded in a string without brackets outputs `55`,
    not `10` — the first `+` in the statement joins strings, so
    everything after is treated as more string-joining, not
    calculation. Wrapping it in brackets, `(5 + 5)`, forces it to
    calculate first, per BEDMAS.

!!! note "Booleans output lowercase"
    Notice `true` and `false` output in lowercase in TypeScript. (Some
    other languages, like C#, capitalize these as `True`/`False` when
    output — TypeScript does not.)

## Review: Variables

Recall that literal values can be stored in variables using `let` or
`const`:

```typescript
let x: number = 2;
let y: number = 3.4;
let myString: string = "Hello World!";
let myBool: boolean = false;

console.log(myString + "\n" + x + " multiplied by " + y + " equals " + x * y);
console.log("\nmyBool = " + myBool);
```

**Output:**
```
Hello World!
2 multiplied by 3.4 equals 6.8

myBool = false
```

Recall the default values for each type when you don't have an initial
value ready:

```typescript
let x: number = 0;
let myString: string = "";
let myBool: boolean = false;
```

## Review: Variable Naming

Variable names can use letters, digits, and underscores, but:

- Can't contain **spaces**
- Can't **start with a digit**
- Can't be a **keyword** (like `let`)

Use **camelCase** for multi-word variable names (`myFirstNumber`, not
`my_first_number` or `MyFirstNumber`).

## Review: Comments

```typescript
// a simple calculation
let x: number = 5 + 3;
console.log(x);
```

Block comments (`/* ... */`) comment out multiple lines at once.

## Review: Build Errors, Syntax Errors, & Runtime Errors

Recall the three categories of errors:

- **Syntax errors** — a mistake in how your code is written (like a
  missing semicolon), usually flagged directly in your editor
- **Compile errors** — found by `npx tsc` before your program ever
  runs, often caused by a syntax error
- **Runtime errors** — happen while your program is actually running
  (for example, a crash partway through)

!!! abstract "Keywords"
    - **`number` / `string` / `boolean`** — TypeScript's three basic
      data types
    - **camelCase** — the naming style used for multi-word variables
    - **Syntax error / Compile error / Runtime error** — the three
      categories of errors you'll encounter

---

**Next:** [Exercise 3: Data Types, Variables, & Errors →](3-exercise-data-types-variables-errors.md)
