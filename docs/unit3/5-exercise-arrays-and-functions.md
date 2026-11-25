# Exercise 5: Arrays & Functions

**Previous:** [← Lesson 5: Arrays & Functions](5-arrays-and-functions.md)

**Due Date:** Tuesday, November 24th, 2026

!!! note "Reminder"
    Put `export {};` at the end of each file. Your functions should
    **return** values rather than print them, unless a question says
    otherwise.

## Question 1

Create a new file named `u3-e5-1.ts`. Write three functions, each
taking an array of numbers: `total`, `largest`, and `smallest`. Test
them with `[14, 9, 31, 2, 27, 18]` and output each result.

## Question 2

Create a new file named `u3-e5-2.ts`. Write a function `countAbove`
that takes an array of numbers and a limit, and returns how many
elements are **greater than** the limit:

```
countAbove([5, 12, 8, 20, 15], 10)  →  3
```

## Question 3

Create a new file named `u3-e5-3.ts`. Write a function `reversed` that
**returns a new array** with the elements in reverse order. Do **not**
use the built-in `reverse()`, and do not change the original array
(output both to prove it).

## Question 4

Create a new file named `u3-e5-4.ts`. Write two functions:

- `doubleAll(nums)` — **changes the array it is given** so every
  element is doubled, and returns nothing
- `doubled(nums)` — returns a **new** array with every element doubled,
  leaving the original alone (use `map()`)

Call each on its own copy of `[1, 2, 3]` and output the arrays before
and after. In a comment, explain which version is safer and why.

---

**Next:** [Lesson 6: Two-Dimensional Arrays →](6-two-dimensional-arrays.md)
<!-- **Next:** Lesson 6: (available soon) -->
