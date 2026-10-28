# Lesson 4: Array Methods

**Previous:** [← Assignment 1](3-assignment-1.md)

In the last lesson you used `.length` and `.push()`. Arrays come with
many more built-in **methods** — functions attached to an array that
you call with a dot. Knowing them saves you from writing a lot of
loops by hand.

## Adding and Removing Elements

| Method | What it does |
|--------|--------------|
| `push(x)` | adds `x` to the **end** |
| `pop()` | removes the **last** element and returns it |
| `unshift(x)` | adds `x` to the **front** |
| `shift()` | removes the **first** element and returns it |

```typescript
let fruits: string[] = ["apple", "orange", "banana"];

fruits.push("kiwi");
console.log(fruits);

let last: string | undefined = fruits.pop();
console.log(last);

fruits.unshift("mango");
console.log(fruits);

let first: string | undefined = fruits.shift();
console.log(first);
console.log(fruits);
```

**Output:**
```
[ 'apple', 'orange', 'banana', 'kiwi' ]
kiwi
[ 'mango', 'apple', 'orange', 'banana' ]
mango
[ 'apple', 'orange', 'banana' ]
```

!!! note "Why `string | undefined`?"
    If you call `pop()` or `shift()` on an **empty** array there's
    nothing to remove, so the result is `undefined`. TypeScript
    reminds you of this possibility by typing the result as
    `string | undefined` ("a string, or undefined").

## Searching

`indexOf()` returns the index of the **first** match, or `-1` if the
value isn't found. `includes()` just answers `true` or `false`:

```typescript
let fruits: string[] = ["apple", "orange", "banana"];

console.log(fruits.indexOf("orange"));
console.log(fruits.indexOf("kiwi"));
console.log(fruits.includes("banana"));
console.log(fruits.includes("kiwi"));
```

**Output:**
```
1
-1
true
false
```

## Arrays and Strings: `join()` and `split()`

`join()` combines all the elements into one string, with whatever
separator you give it between them. `split()` does the reverse — it
breaks a **string** into an array wherever the separator appears
(you used this in the file-reading lesson to split a file into lines):

```typescript
let fruits: string[] = ["apple", "orange", "banana"];
console.log(fruits.join(", "));

let colours: string[] = "red,green,blue".split(",");
console.log(colours);
console.log(colours.length);

let letters: string[] = "hello".split("");
console.log(letters);
```

**Output:**
```
apple, orange, banana
[ 'red', 'green', 'blue' ]
3
[ 'h', 'e', 'l', 'l', 'o' ]
```

## Copying Part of an Array: `slice()`

`slice(start, end)` returns a **new** array containing the elements
from index `start` up to (but **not including**) index `end`. The
original array is not changed:

```typescript
let letters: string[] = ["a", "b", "c", "d", "e"];

console.log(letters.slice(1, 4));
console.log(letters.slice(2));
console.log(letters);
```

**Output:**
```
[ 'b', 'c', 'd' ]
[ 'c', 'd', 'e' ]
[ 'a', 'b', 'c', 'd', 'e' ]
```

Leaving out `end` slices all the way to the end of the array.
Calling `slice()` with **no** arguments makes a complete **copy** of the
array.

## Removing or Inserting in the Middle: `splice()`

`splice(start, deleteCount, ...itemsToInsert)` changes the array **in
place**. It removes `deleteCount` elements starting at `start`, and
optionally inserts new ones in their place:

```typescript
let letters: string[] = ["a", "b", "c", "d", "e"];

letters.splice(1, 2);
console.log(letters);

letters.splice(1, 0, "X", "Y");
console.log(letters);
```

**Output:**
```
[ 'a', 'd', 'e' ]
[ 'a', 'X', 'Y', 'd', 'e' ]
```

The first call removes 2 elements starting at index 1 (`b` and `c`).
The second call removes **0** elements at index 1, but inserts `X` and
`Y` there.

## Reversing and Joining Arrays

`reverse()` reverses an array **in place**. `concat()` returns a new
array made of two arrays joined together:

```typescript
let nums: number[] = [1, 2, 3];
let more: number[] = [4, 5];

console.log(nums.concat(more));

nums.reverse();
console.log(nums);
```

**Output:**
```
[ 1, 2, 3, 4, 5 ]
[ 3, 2, 1 ]
```

## Sorting

`sort()` arranges the elements in order, changing the array **in
place**. For strings it works as you'd expect:

```typescript
let names: string[] = ["Linus", "Ada", "Grace"];
names.sort();
console.log(names);
```

**Output:**
```
[ 'Ada', 'Grace', 'Linus' ]
```

!!! warning "`sort()` on numbers gives surprising results"
    By default, `sort()` converts everything to **text** and sorts it
    alphabetically — so `100` comes before `9`, because `"1"` comes
    before `"9"`:

    ```typescript
    let nums: number[] = [10, 9, 100, 1];
    nums.sort();
    console.log(nums);
    ```

    **Output:**
    ```
    [ 1, 10, 100, 9 ]
    ```

To sort numbers **by value**, pass `sort()` a **compare function**. It
receives two elements, `a` and `b`, and returns a **negative** number
if `a` should come first, a **positive** number if `b` should come
first, or `0` if they're equal. Subtracting the two numbers does
exactly that:

```typescript
let nums: number[] = [10, 9, 100, 1];

nums.sort((a, b) => a - b);
console.log(nums);

nums.sort((a, b) => b - a);
console.log(nums);
```

**Output:**
```
[ 1, 9, 10, 100 ]
[ 100, 10, 9, 1 ]
```

`(a, b) => a - b` is called an **arrow function** — a short way of
writing a small function with no name. For now, just remember these two
patterns: `a - b` sorts **ascending**, and `b - a` sorts
**descending**.

## Methods That Change the Array vs. Methods That Don't

Some methods **change** the original array (called **mutating**
methods), while others leave it alone and return a **new** value:

| Changes the original array | Leaves the original alone |
|----------------------------|---------------------------|
| `push`, `pop`, `shift`, `unshift` | `slice`, `concat` |
| `splice`, `reverse`, `sort` | `indexOf`, `includes`, `join` |

If you want to sort or reverse an array **without** losing the
original order, make a copy first:

```typescript
let marks: number[] = [88, 92, 75, 64, 97];

let sorted: number[] = marks.slice();
sorted.sort((a, b) => a - b);

console.log(marks);
console.log(sorted);
```

**Output:**
```
[ 88, 92, 75, 64, 97 ]
[ 64, 75, 88, 92, 97 ]
```

!!! abstract "Keywords"
    - **Method** — a function attached to a value, called with a dot
      (like `fruits.push("kiwi")`)
    - **`pop()` / `shift()`** — remove and return the last / first
      element
    - **`unshift()`** — add an element to the front
    - **`indexOf()` / `includes()`** — search an array for a value
    - **`join()` / `split()`** — convert between arrays and strings
    - **`slice()`** — make a new array from part of an existing one
    - **`splice()`** — remove or insert elements in place
    - **`sort()`** — put elements in order (use a compare function for
      numbers)
    - **Mutating method** — a method that changes the original array

---

**Next:** [Exercise 4: Array Methods →](4-exercise-array-methods.md)
