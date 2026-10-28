# Exercise 3: Arrays

**Previous:** [← Lesson 3: Arrays](3-arrays.md)

!!! note "Reminder"
    Put `export {};` at the end of each file, and set up `prompt-sync`
    in any file that needs user input.

## Question 1

Create a new file named `u3-e3-1.ts`. Create an array containing the
numbers `12, 7, 25, 3, 18`. Using a loop, output each number on its own
line with its index, then output the **sum** and **average** of the
numbers.

```
Index 0: 12
Index 1: 7
...
Sum: 65
Average: 13
```

## Question 2

Create a new file named `u3-e3-2.ts`. Ask the user for **5 names** and
store them in an array. Then output the names in **reverse order**,
one per line.

## Question 3

Create a new file named `u3-e3-3.ts`. Create an array containing
`14, 9, 31, 2, 27, 18, 5, 22`. Find the **largest** and **smallest**
values, and output each one along with the **index** where it was
found:

```
Largest: 31 at index 2
Smallest: 2 at index 3
```

## Question 4

Create a new file named `u3-e3-4.ts`. Using the same array as Question
3, calculate the average, then output **how many** elements are above
average and list them.

## Question 5

Create a new file named `u3-e3-5.ts`. Fill an array with **10 random
whole numbers between 1 and 100**. Output the whole array, then output
only the **even** numbers, and the **sum** of the even numbers.

!!! note "Hint"
    `Math.floor(Math.random() * 100) + 1` gives a random whole number
    from 1 to 100.

## Question 6: Challenge

Create a new file named `u3-e3-6.ts`. Keep asking the user for numbers
until they enter `-1`, storing each number (but **not** the `-1`) in an
array. Then output:

1. How many numbers were entered
2. The numbers in the order they were entered, separated by commas
3. Every number that was **larger than the number entered just before
   it**

---

**Next:** [Assignment 1 →](3-assignment-1.md)
