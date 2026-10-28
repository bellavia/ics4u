# Exercise 1: Functions

**Previous:** [← Lesson 1: Functions](1-functions.md)

**Due Date:** Friday, October 30th, 2026

!!! note "Reminder"
    Put `export {};` at the end of each file (see the end of the last
    lesson), and set up `prompt-sync` in any file that needs user input.

## Question 1

Create a new file named `u3-e1-1.ts`. Write a function called `cube`
that takes a number and **returns** that number cubed. Then call it
three times with different arguments, outputting each result.

```
cube(2) = 8
cube(5) = 125
cube(-3) = -27
```

## Question 2

Create a new file named `u3-e1-2.ts`. Write a function called
`average` that takes two numbers and **returns** their average. Ask
the user for two numbers, call your function, and output the result to
2 decimal places.

## Question 3

Create a new file named `u3-e1-3.ts`. Write a function called `isEven`
that takes a whole number and **returns** `true` if it is even and
`false` otherwise. Ask the user for a number and output a message
using the result of your function.

!!! note "Hint"
    Use the modulus operator (`%`). Your function should contain **no**
    `console.log()` — only the code that asks the user and displays
    the message should output anything.

## Question 4

Create a new file named `u3-e1-4.ts`. Write a function called
`celsiusToFahrenheit` that takes a temperature in °C and returns the
temperature in °F (`F = C × 9/5 + 32`). Write a second function called
`fahrenheitToCelsius` that does the reverse. Ask the user for a
temperature and which direction to convert, then output the result.

## Question 5

Create a new file named `u3-e1-5.ts`. Write a function called
`largerOf` that takes two numbers and returns the larger one. Then
write a second function called `largestOfThree` that takes **three**
numbers and returns the largest — it must work by **calling
`largerOf`**, not by repeating the comparison logic.

## Question 6

Create a new file named `u3-e1-6.ts`. Write a function called `banner`
that takes a string and a whole number, and **returns** a new string
containing the text repeated that many times, separated by dashes.
Output the result of `banner("Go", 3)`:

```
Go-Go-Go
```

!!! note "Hint"
    Build the result string with a loop, and be careful not to add a
    dash after the last copy.

---

**Next:** [Lesson 2: Functions in Depth →](2-functions-in-depth.md)
