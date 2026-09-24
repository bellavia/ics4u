# Exercise 7: Input-Output Files & Algorithms

**Previous:** [← Input-Output Files & Algorithms](7-files-algorithms.md)

!!! note "Many ways to attempt these"
    Your creativity is important!

## Question 1

Create a new file named `u1-e07-1.ts`. Create the following input file
(`input.txt`):

```
3
223486
78
65
81
45
224876
91
95
87
98
224779
34
55
78
60
```

The first line indicates how many student records follow. Each record
after that is 5 lines: the student's ID number, then 4 class marks.

Using a `for` loop, write a program that reads each record, calculates
each student's average, and outputs each student's ID and average to
an output file (`output.txt`). For example:

```
223486
67.25
224876
92.75
224779
56.75
```

!!! note "Hint"
    Since the first line tells you how many records there are, use
    that to control how many times your `for` loop runs.

!!! note "BONUS"
    Calculate and output the overall student average at the end of the
    output file too.

## Question 2 — [THINK]

Create a new file named `u1-e07-2.ts`. Rewrite the program above so the
input file is comma-delimited (`input.csv`), like this:

```
3
223486,78,65,81,45
224876,91,95,87,98
224779,34,55,78,60
```

!!! warning "No `.split()` for this question"
    Even though `.split(",")` would handle this easily, the point of
    this exercise is practicing with substrings — use `.indexOf()` and
    `.substring()` to separate each value in a record instead.

## Question 3

Create a new file named `u1-e07-3.ts`. Without using any built-in
string functions (except `.length`, `.toLowerCase()`, or
`.toUpperCase()`), write a program that asks the user for a string and
counts how many times the same letter appears **side by side**. For
example:

```
"Hello ICS, what a magnificent school SJB is!"
```

This contains `'Hello'` (the letter `'l'` appears side by side) and
`'school'` (the letter `'o'` appears side by side) — 2 side-by-side
letter pairs total.

!!! note "Hint"
    Create an extra variable that holds the previous letter as you
    loop through the string.

## Question 4

Create a new file named `u1-e07-4.ts`. Without using any built-in
string functions (except `.length`, `.toLowerCase()`, or
`.toUpperCase()`), ask the user for a string and output it with all
vowels removed. For example:

```
Enter a string: Hello there world
String with no vowels: Hll thr wrld
```

!!! note "Hint"
    On each iteration of your loop, append only the characters you
    want to keep onto a new string.

---

**Next:** [Assignment 2 →](7-assignment-2.md)
