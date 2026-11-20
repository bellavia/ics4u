# Exercise 7: Objects

**Previous:** [← Lesson 7: Objects](7-objects.md)

!!! note "Reminder"
    Put `export {};` at the end of each file that doesn't already start
    with an `import`.

## Question 1

Create a new file named `u3-e7-1.ts`. Create an `interface` named
`Product` with the properties `id` (number), `name` (string), `price`
(number) and `inStock` (boolean). Create a `Product` object, output its
name and price, then give it a 10% discount, set `inStock` to `false`,
and output the whole object with `JSON.stringify(product, null, 2)`.

## Question 2

Create a new file named `u3-e7-2.ts`. Create an array of **at least
five** `Product` objects (reuse your interface). Output the **names of
the products that are in stock** (use `.filter()` and `.map()`), then
find the product whose id the user types in (use `.find()`) and output
its name, or "Not found".

## Question 3

Create a new file named `u3-e7-3.ts`. Create a `User` object with a
nested `address` object (street, city) and a `hobbies` array. Make a
**copy** with the spread operator, change the copy's name and
`address.city`, and output both users with `JSON.stringify`. In a
comment at the top, explain whether the original's `address.city`
changed, and why.

## Question 4 — [THINK]

Create a new file named `u3-e7-4.ts`. Save an array of at least three
user objects to `users.json` with `fs.writeFileSync()`. Read it back
with `fs.readFileSync()` and `JSON.parse()`, add one more user, and
write the updated list back to the file.

---

**Next:** [Assignment 2 →](7-assignment-2.md)
