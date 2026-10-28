# Assignment 2

**Previous:** [← Exercise 6: Two-Dimensional Arrays](6-exercise-two-dimensional-arrays.md)

This assignment covers Lessons 4–6. Create a new file for each
question as noted below, inside your `unit-3` folder.

!!! note "Submission"
    Make sure your teacher has been invited to this Replit project.
    Add `export {};` to the end of each file that doesn't already start
    with an `import`.

## Question 1: Concepts

*Knowledge — 4 marks | Communication — 1 mark*

Create a new file named `u3-a2-1.ts`. Answer each of the following in
a comment at the top of the file, in your own words:

**a)** Why does `[10, 9, 100, 1].sort()` give `[1, 10, 100, 9]`? How do
you fix it?

**b)** What is a **mutating** method? Name two array methods that
mutate the array and two that don't.

**c)** Explain what happens when you write `let b = a;` where `a` is
an array. Is `b` a copy? How would you make a real copy?

**d)** For a 2D array called `seats`, write the code to read the value
in the 3rd row and 2nd column, and the code that gives the number of
rows and the number of columns.

## Question 2: Playlist Manager

*Thinking — 2 marks | Application — 7 marks | Communication — 1 mark*

Create a new file named `u3-a2-2.ts`. Write a program that manages a
playlist stored in an array of strings. Repeatedly show this menu until
the user chooses to quit:

```
1. Add a song
2. Remove a song
3. Show playlist
4. Show playlist in alphabetical order
5. Quit
```

Requirements:

- Each menu choice must be handled by its **own function**, which
  receives the playlist array as a parameter
- Removing a song asks for its title, and tells the user if it isn't in
  the playlist
- Option 4 must **not** change the order of the real playlist
- Don't allow the same song to be added twice
- The menu choice must be validated

## Question 3: File Statistics

*Thinking — 2 marks | Application — 7 marks | Communication — 1 mark*

Create a new file named `u3-a2-3.ts`. Create a file named `numbers.txt`
with one number per line:

```
5
3
8
3
9
5
3
```

Write functions that each take an array of numbers and return a result:

- `mean(nums)` — the average
- `median(nums)` — the middle value when sorted (average of the two
  middle values if there is an even number of values). The array you
  are given must **not** be changed.
- `mode(nums)` — the value that appears most often (if there's a tie,
  return the smallest of the tied values)
- `range(nums)` — the largest value minus the smallest

Read the numbers from the file, then output all four statistics (the
mean to 2 decimal places).

```
Mean: 5.14
Median: 5
Mode: 3
Range: 6
```

!!! note "Hint"
    Your program should work for **any** file in this format, so test
    it with other lists — including one with an even number of values.

## Question 4: Tic-Tac-Toe

*Thinking — 2 marks | Application — 7 marks | Communication — 1 mark*

Create a new file named `u3-a2-4.ts`. Write a two-player tic-tac-toe
game using a 3×3 `string[][]` board. Players `X` and `O` take turns
entering a row and a column (1–3). Your program must:

- Display the board after every move
- Reject moves that are off the board or on an occupied square
- Stop and announce the winner as soon as someone has three in a row
  (across, down, or diagonally), or announce a tie if the board fills
  up with no winner
- Use at least **three functions** (for example: displaying the board,
  checking for a winner, and getting a valid move)

---

*This is the final assignment for this unit.*
