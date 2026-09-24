# Hello World & Output (Review)

**Previous:** [← Assignment 2](../unit1/4-assignment-2.md)

Let's review `console.log()` — the output statement you've already
been using since Unit 1 — and look at a few details worth reinforcing.

## Review: `console.log()`

```typescript
console.log("Hello, World!");
```

**Output:**
```
Hello, World!
```

Recall that this line is called a **statement**, ending with a
semicolon (`;`). `console.log()` is a **built-in function** — it has a
**name** and a set of parentheses, and whatever you place inside the
parentheses is a **parameter**.

## Review: Escape Characters

Escape characters let you include things like newlines or tabs inside
a string:

```typescript
console.log("Hello, World!\nHow are you?");
```

**Output:**
```
Hello, World!
How are you?
```

| Escape Sequence | Meaning |
|------------------|---------|
| `\n` | newline |
| `\t` | horizontal tab |
| `\"` | double quote |
| `\\` | backslash |

## Review: `console.log()` vs. `process.stdout.write()`

Recall that `console.log()` always moves to a new line afterward.
`process.stdout.write()` outputs text **without** automatically
starting a new line — useful when you want to build up one line of
output across multiple statements:

```typescript
process.stdout.write("Have yourself");
process.stdout.write(" a great and wonderful");
console.log(" day!");
console.log("Goodbye!");
```

**Output:**
```
Have yourself a great and wonderful day!
Goodbye!
```

!!! note "Remember to convert non-strings"
    `process.stdout.write()` only accepts strings. If you want to
    output a number this way, wrap it with `String(...)` first — for
    example, `process.stdout.write(String(5 + 5))`.

!!! abstract "Keywords"
    - **Statement** — a single instruction in your program, ending
      with a semicolon
    - **Built-in function** — a function already provided by the
      language
    - **Escape character** — a special sequence (like `\n`) used
      inside a string

---

**Next:** [Exercise 1: Hello World & Output →](1-exercise-hello-world-output.md)
