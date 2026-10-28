# Lesson 5: Arrays & Functions

**Previous:** [← Exercise 4: Array Methods](4-exercise-array-methods.md)

Functions and arrays are even more powerful together. In this lesson
you'll pass arrays **into** functions, get arrays **back out** of
functions, and learn a handful of array methods that take a *function*
as an argument.

## Passing an Array to a Function

Declare the parameter with an array type, just like any other type:

```typescript
function sum(nums: number[]): number {
  let total: number = 0;
  for (const n of nums) {
    total += n;
  }
  return total;
}

function average(nums: number[]): number {
  return sum(nums) / nums.length;
}

let marks: number[] = [88, 92, 75, 64, 97];
console.log(sum(marks));
console.log(average(marks));
```

**Output:**
```
416
83.2
```

Because `sum` and `average` work on **any** array of numbers, you can
reuse them again and again. Notice that `average` calls `sum`, just
like functions calling functions in Lesson 1.

!!! warning "Watch out for empty arrays"
    `average([])` calculates `0 / 0`, which is `NaN`. If an empty array
    is possible, check `nums.length` first.

## Returning an Array

A function can also *build and return* a new array:

```typescript
function evensOnly(nums: number[]): number[] {
  let result: number[] = [];
  for (const n of nums) {
    if (n % 2 === 0) {
      result.push(n);
    }
  }
  return result;
}

console.log(evensOnly([1, 2, 3, 4, 5, 6]));
```

**Output:**
```
[ 2, 4, 6 ]
```

A function can only `return` **one** value, but that value can be an
array — which is a handy way to return several results at once:

```typescript
function minMax(nums: number[]): number[] {
  let smallest: number = nums[0];
  let largest: number = nums[0];

  for (const n of nums) {
    if (n < smallest) {
      smallest = n;
    }
    if (n > largest) {
      largest = n;
    }
  }

  return [smallest, largest];
}

let result: number[] = minMax([14, 9, 31, 2, 27]);
console.log("Smallest: " + result[0]);
console.log("Largest: " + result[1]);
```

**Output:**
```
Smallest: 2
Largest: 31
```

## Arrays Are Passed by Reference

In Lesson 2 you learned that a function receives a **copy** of a
number, string, or boolean. Arrays work differently. When you pass an
array to a function, the function receives **access to the same
array** — not a copy. Changes made inside the function are visible
outside:

```typescript
function addBonus(marks: number[]): void {
  for (let i = 0; i < marks.length; i++) {
    marks[i] = marks[i] + 5;
  }
}

let scores: number[] = [60, 70, 80];
addBonus(scores);
console.log(scores);
```

**Output:**
```
[ 65, 75, 85 ]
```

The same thing happens when you assign one array variable to another.
Both names refer to the **same** array:

```typescript
let original: number[] = [1, 2, 3];
let alias: number[] = original;
let copy: number[] = original.slice();

alias[0] = 99;

console.log(original);
console.log(copy);
```

**Output:**
```
[ 99, 2, 3 ]
[ 1, 2, 3 ]
```

`alias` is just a second name for the same array, so changing it
changed `original` too. `slice()` made a genuine **copy**, which is
unaffected. If a function shouldn't change the array it's given, have
it **build and return a new array** (like `evensOnly` above) instead of
modifying the parameter.

## Methods That Take a Function

Several array methods take a **function as an argument** (called a
**callback**) and call it for you. The callback is usually written as
an **arrow function**: `(parameter) => result`.

```typescript
let marks: number[] = [88, 92, 75, 64, 97];
```

**`forEach`** — do something with each element:

```typescript
marks.forEach((m) => console.log("Mark: " + m));
```

**`map`** — build a **new** array by transforming every element:

```typescript
let curved: number[] = marks.map((m) => m + 5);
console.log(curved);
```

**Output:**
```
[ 93, 97, 80, 69, 102 ]
```

**`filter`** — build a **new** array of only the elements for which
the callback returns `true`:

```typescript
let strong: number[] = marks.filter((m) => m >= 80);
console.log(strong);
```

**Output:**
```
[ 88, 92, 97 ]
```

**`reduce`** — combine all the elements into a **single** value. The
callback receives the running result so far and the next element, and
the second argument (`0` here) is the starting value:

```typescript
let total: number = marks.reduce((sum, m) => sum + m, 0);
console.log(total);
```

**Output:**
```
416
```

`map`, `filter`, and `reduce` don't change the original array — they
return something new. They do the same jobs as the loop patterns from
Lesson 3, in a single line. Either style is fine; use whichever you
find clearer.

!!! abstract "Keywords"
    - **Pass by reference** — passing an array gives the function
      access to the *same* array, not a copy
    - **Callback** — a function passed as an argument to another
      function
    - **Arrow function** — a short way to write a function:
      `(x) => x + 1`
    - **`forEach()`** — runs a callback on each element
    - **`map()`** — creates a new array by transforming each element
    - **`filter()`** — creates a new array of the elements that pass a
      test
    - **`reduce()`** — combines all elements into one value

---

**Next:** [Exercise 5: Arrays & Functions →](5-exercise-arrays-and-functions.md)
