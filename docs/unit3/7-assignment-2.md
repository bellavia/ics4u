# Assignment 2

**Previous:** [← Exercise 7: Objects](7-exercise-objects.md)

This assignment covers Lessons 4–7. Create a new file for each
question as noted below, inside your `unit-3` folder.

!!! note "Submission"
    Make sure your teacher has been invited to this Replit project.
    Add `export {};` to the end of each file that doesn't already start
    with an `import`.

## Question 1: Concepts

*Knowledge — 5 marks | Communication — 1 mark*

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

## Question 5: Student Records

*Thinking — 2 marks | Application — 7 marks | Communication — 1 mark*

Create a new file named `u3-a2-5.ts`. Create an `interface` named
`Student` with the properties `id` (number), `name` (string) and `marks`
(an array of numbers). Store at least four `Student` objects in an
array, then write functions to do each of the following:

- `average(student)` — returns the average of that student's marks
  (0 if they have no marks)
- `addMark(student, mark)` — adds a mark to the student, but only if it
  is between 0 and 100. Return `true` if it was added and `false`
  otherwise.
- `findStudent(students, id)` — returns the matching student, or
  `undefined` if there is none
- `ranking(students)` — returns a **new** array of the students sorted
  from highest to lowest average. The original array must **not** be
  changed.

Your program should then:

1. Ask the user for a student id and a mark, and add the mark (telling
   the user if the id was not found or the mark was invalid).
2. Output the ranking, one student per line.
3. Save all of the students to a file named `students.json` using
   `JSON.stringify(students, null, 2)`.

**Sample input & output:**
```
Student id: 2
New mark: 91

Added!

1. Grace - 94.50
2. Linus - 89.00
3. Ada - 82.33
4. Alan - 70.00
```

!!! note "Hint"
    Remember that spreading an array, `[...students]`, makes a copy
    that you can safely sort.

---

*This is the final assignment for this unit.*
