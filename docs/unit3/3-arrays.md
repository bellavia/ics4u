# Lesson 3: Arrays

**Previous:** [← Exercise 2: Functions in Depth](2-exercise-functions-in-depth.md)

Imagine writing a program that stores the marks of 30 students. You
could create 30 separate variables — `mark1`, `mark2`, `mark3`... — but
that would be painful to write, and impossible to loop through. An
**array** solves this: it stores **many values under one name**.

## Creating an Array

An array is a list of values inside square brackets, separated by
commas. The type is written as the element type followed by `[]`:

```typescript
let marks: number[] = [88, 92, 75, 64, 97];
let fruits: string[] = ["apple", "orange", "banana"];
```

An array that starts out **empty** is written with empty brackets:

```typescript
let names: string[] = [];
```

All the elements of an array must be the **same type** — a `number[]`
can't contain strings.

## Accessing Elements

Each element has a position called an **index**, and indexes start at
**0**, not 1 (just like the characters in a string):

| Index | 0 | 1 | 2 | 3 | 4 |
|-------|----|----|----|----|----|
| Value | 88 | 92 | 75 | 64 | 97 |

Use the index in square brackets to read or change an element:

```typescript
let marks: number[] = [88, 92, 75, 64, 97];

console.log(marks[0]);
console.log(marks[4]);

marks[2] = 80;
console.log(marks[2]);
```

**Output:**
```
88
97
80
```

The `.length` property tells you how many elements are in the array.
Since indexes start at 0, the **last** index is always
`length - 1`:

```typescript
console.log(marks.length);
console.log(marks[marks.length - 1]);
```

**Output:**
```
5
97
```

You can print a whole array at once:

```typescript
console.log(marks);
```

**Output:**
```
[ 88, 92, 80, 64, 97 ]
```

!!! warning "Going past the end of an array"
    Asking for an index that doesn't exist gives `undefined`, not an
    error — for example, `marks[10]` is `undefined`. TypeScript won't
    warn you about this, so always make sure your index is between `0`
    and `length - 1`.

## Adding to an Array

The `.push()` method adds a new element to the **end** of an array,
making it one longer:

```typescript
let names: string[] = [];

names.push("Ada");
names.push("Linus");
names.push("Grace");

console.log(names);
console.log(names.length);
```

**Output:**
```
[ 'Ada', 'Linus', 'Grace' ]
3
```

## Looping Through an Array

Arrays and loops go hand in hand. A `for` loop whose counter is the
**index** visits every element:

```typescript
let marks: number[] = [88, 92, 80, 64, 97];

for (let i = 0; i < marks.length; i++) {
  console.log("Mark " + (i + 1) + ": " + marks[i]);
}
```

**Output:**
```
Mark 1: 88
Mark 2: 92
Mark 3: 80
Mark 4: 64
Mark 5: 97
```

When you only need the **values** and not the index, a `for...of`
loop is shorter:

```typescript
for (const mark of marks) {
  console.log(mark);
}
```

On each pass, `mark` holds the next element of `marks`. Use the
index-based `for` loop when you need to know the **position** of an
element, or when you want to change the elements.

## Common Array Patterns

Most array problems are variations of a few patterns. Each one uses a
loop and a variable that *accumulates* a result.

**Total and average:**

```typescript
let total: number = 0;

for (const mark of marks) {
  total += mark;
}

console.log("Average: " + total / marks.length);
```

**Output:**
```
Average: 84.2
```

**Largest value** — start by assuming the first element is the
largest, then look for anything bigger:

```typescript
let highest: number = marks[0];

for (let i = 1; i < marks.length; i++) {
  if (marks[i] > highest) {
    highest = marks[i];
  }
}

console.log("Highest: " + highest);
```

**Output:**
```
Highest: 97
```

**Counting** how many elements meet a condition:

```typescript
let passes: number = 0;

for (const mark of marks) {
  if (mark >= 70) {
    passes++;
  }
}

console.log(passes + " marks are 70 or higher");
```

**Output:**
```
4 marks are 70 or higher
```

**Building an array** in a loop — for example, five dice rolls:

```typescript
let rolls: number[] = [];

for (let i = 0; i < 5; i++) {
  rolls.push(Math.floor(Math.random() * 6) + 1);
}

console.log(rolls);
```

**Example output** (yours will differ, since the numbers are random):
```
[ 3, 6, 1, 1, 4 ]
```

!!! note "`const` arrays can still change"
    If you declare an array with `const`, you can't point the name at a
    *different* array, but you **can** still change what's inside it:

    ```typescript
    const days: string[] = ["Mon", "Tue"];
    days[0] = "Monday";
    days.push("Wed");
    ```

    That's why `for (const mark of marks)` works — `mark` is a new
    constant on every pass of the loop.

!!! abstract "Keywords"
    - **Array** — a variable that stores many values of the same type
      in an ordered list
    - **Element** — one value stored in an array
    - **Index** — an element's position in an array, starting at 0
    - **`.length`** — the number of elements in an array
    - **`.push()`** — adds an element to the end of an array
    - **`for...of` loop** — a loop that visits each element of an
      array in turn

---

**Next:** [Exercise 3: Arrays →](3-exercise-arrays.md)
