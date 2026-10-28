# Exercise 7: Objects

**Previous:** [← Lesson 7: Objects](7-objects.md)

!!! note "Reminder"
    Put `export {};` at the end of each file that doesn't already start
    with an `import`.

## Question 1

Create a new file named `u3-e7-1.ts`. Create an `interface` named
`Product` with the properties `id` (number), `name` (string), `price`
(number) and `inStock` (boolean). Then:

1. Create a `Product` object for a product of your choice.
2. Output its name and price.
3. Change its price (a 10% discount) and set `inStock` to `false`.
4. Output the whole object with `JSON.stringify(product, null, 2)`.

## Question 2

Create a new file named `u3-e7-2.ts`. Create an array of **at least
five** `Product` objects (reuse your interface from Question 1). Write
code that:

1. Outputs every product as `name - $price`, one per line.
2. Outputs the **names of the products that are in stock** (use
   `.filter()` and `.map()`).
3. Finds the product with an id the user types in (use `.find()`) and
   outputs its name, or "Not found" if there is no match.
4. Outputs the total value of all products that are in stock.

## Question 3

Create a new file named `u3-e7-3.ts`. Create a `User` object that has a
nested `address` object (street, city) and a `hobbies` array.

1. Make a **copy** of the user with the spread operator, then change
   the copy's name and its `address.city`.
2. Output both users with `JSON.stringify`.
3. **Think:** did the original user's `address.city` change as well?
   Explain why in a comment at the top of your file.

## Question 4 — [THINK]

Create a new file named `u3-e7-4.ts`. Write a program that stores an
array of at least three user objects in a **JSON file** called
`users.json` using `fs.writeFileSync()`. Then read the file back with
`fs.readFileSync()`, convert it with `JSON.parse()`, add one more user,
and write the updated list back to the file.

---

**Next:** [Assignment 2 →](7-assignment-2.md)
