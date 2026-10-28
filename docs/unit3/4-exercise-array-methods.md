# Exercise 4: Array Methods

**Previous:** [← Lesson 4: Array Methods](4-array-methods.md)

!!! note "Reminder"
    Put `export {};` at the end of each file, and set up `prompt-sync`
    in any file that needs user input.

## Question 1

Create a new file named `u3-e4-1.ts`. Start with this array:

```typescript
let todo: string[] = ["email", "lunch", "meeting"];
```

Using only array methods (no loops), do each of the following, and
`console.log()` the array after each step:

1. Add `"call"` to the end
2. Add `"coffee"` to the front
3. Remove the first element
4. Remove the last element
5. Insert `"gym"` and `"nap"` between `"lunch"` and `"meeting"`

## Question 2

Create a new file named `u3-e4-2.ts`. Ask the user for a sentence.
Split it into an array of words and output:

1. The number of words
2. The first word and the last word
3. The words in reverse order, joined into one sentence

```
Enter a sentence: the quick brown fox
Words: 4
First: the, Last: fox
Reversed: fox brown quick the
```

## Question 3

Create a new file named `u3-e4-3.ts`. Create an array of 6 numbers of
your choice. Output the numbers sorted from **smallest to largest**,
then from **largest to smallest**. The original array must **not** be
changed — output it at the end to prove it.

## Question 4

Create a new file named `u3-e4-4.ts`. Create an array of 5 fruit
names. Ask the user to enter a fruit. Output whether it is in the
array and, if so, its position (counting from 1). Then **remove** it
from the array and output the remaining fruits.

## Question 5

Create a new file named `u3-e4-5.ts`. Ask the user for a word. Using
`split()`, `reverse()`, and `join()` (and no loops), determine whether
the word is a **palindrome** — a word that reads the same forwards and
backwards (like `level` or `racecar`).

## Question 6: Challenge

Create a new file named `u3-e4-6.ts`. Ask the user for a list of
numbers separated by spaces (for example, `4 8 15 16 23 42`). Using
`split()` to turn the line into an array of strings, convert each
element to a number **in a loop**, then output the **median** — the
middle value once the numbers are sorted. If there is an even number of
values, the median is the average of the two middle values.

---

**Next:** [Lesson 5: Arrays & Functions →](5-arrays-and-functions.md)
