# Exercise 5: Arrays & Functions

**Previous:** [← Lesson 5: Arrays & Functions](5-arrays-and-functions.md)

!!! note "Reminder"
    Put `export {};` at the end of each file. Your functions should
    **return** values rather than print them, unless a question says
    otherwise.

## Question 1

Create a new file named `u3-e5-1.ts`. Write three functions, each
taking an array of numbers: `total`, `largest`, and `smallest`. Test
them with the array `[14, 9, 31, 2, 27, 18]` and output each result.

## Question 2

Create a new file named `u3-e5-2.ts`. Write a function called
`countAbove` that takes an array of numbers and a limit, and returns
how many elements are **greater than** the limit. Test it:

```
countAbove([5, 12, 8, 20, 15], 10)  →  3
```

## Question 3

Create a new file named `u3-e5-3.ts`. Write a function called
`reversed` that takes an array of numbers and **returns a new array**
with the elements in reverse order. Do **not** use the built-in
`reverse()` method, and the original array must not be changed —
output both arrays to prove it.

## Question 4

Create a new file named `u3-e5-4.ts`. Write a function called
`removeNegatives` that takes an array of numbers and returns a new
array with all the negative numbers removed. First write it using a
loop, then write a second version called `removeNegatives2` using
`filter()`. Show that both give the same result for
`[4, -2, 7, -9, 0, 3]`.

## Question 5

Create a new file named `u3-e5-5.ts`. Write two functions:

- `doubleAll(nums)` — **changes the array it is given** so every
  element is doubled, and returns nothing
- `doubled(nums)` — returns a **new** array with every element
  doubled, leaving the original alone (use `map()`)

Call each one on its own copy of `[1, 2, 3]` and output the arrays
before and after. In a comment, explain which version is safer to use
and why.

## Question 6

Create a new file named `u3-e5-6.ts`. Write a function called
`minMax` that takes an array of numbers and returns an array containing
the smallest and largest values. Ask the user for 5 numbers, call your
function, and output the result.

## Question 7: Challenge

Create a new file named `u3-e5-7.ts`. Write a function called
`uniqueValues` that takes an array of numbers and returns a **new
array with the duplicates removed**, keeping the first occurrence of
each value in its original order:

```
uniqueValues([4, 2, 4, 7, 2, 9])  →  [ 4, 2, 7, 9 ]
```

---

**Next:** [Lesson 6: Two-Dimensional Arrays →](6-two-dimensional-arrays.md)
