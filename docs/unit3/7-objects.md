# Lesson 7: Objects

**Previous:** [← Exercise 6: Two-Dimensional Arrays](6-exercise-two-dimensional-arrays.md)

So far we have stored information in **variables** (one value) and
**arrays** (a list of values). But real data usually describes a
*thing* with several different pieces of information: a user has a
name, an email and an age; a product has a name, a price and a
quantity. An **object** groups these related values together under one
name.

Objects are everywhere in real programming. Data from websites and
apps (APIs), settings files, database records and game characters all
arrive as objects. In this lesson we will work with one of the most
common: a **user** record.

## Creating an Object

An object is written with braces `{ }`, containing **properties**.
Each property is a **key** (its name), a colon, and a **value**,
separated by commas:

```typescript
let user = {
  id: 101,
  name: "Ada Lovelace",
  email: "ada@example.com",
  age: 17,
  isActive: true,
};

console.log(user);
```

**Output:**
```
{
  id: 101,
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  age: 17,
  isActive: true
}
```

(Node prints objects with single quotes. That is just how it displays
them.) Each property can have a different type. Here we have numbers,
strings and a boolean in the same object.

### Describing an Object's Shape with an `interface`

Just like variables, we can tell TypeScript what type of object we
expect. An **interface** describes which properties an object must
have, and their types:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

let user: User = {
  id: 101,
  name: "Ada Lovelace",
  email: "ada@example.com",
  age: 17,
  isActive: true,
};
```

Now TypeScript will warn us if we forget a property, misspell one, or
give it the wrong type. Interfaces are one of the best reasons to use
TypeScript, because they catch mistakes before the program runs.

!!! note "Note"
    Interfaces only exist while you write the code. They disappear when
    the program runs, so they never slow your program down.

## Reading Properties

There are two ways to read a property. The most common is **dot
notation**:

```typescript
console.log(user.name);
console.log(user.age + 1);
```

**Output:**
```
Ada Lovelace
18
```

The second is **bracket notation**, which uses a string for the key.
It is useful when the key is stored in a variable:

```typescript
let key: keyof User = "email";

console.log(user["name"]);
console.log(user[key]);
```

**Output:**
```
Ada Lovelace
ada@example.com
```

!!! note "Note"
    The type `keyof User` means "one of the property names of `User`".
    It lets TypeScript check that the key you stored in the variable
    really exists on the object.

## Editing an Object

Objects are **editable**. We can **change** a property by assigning a
new value to it:

```typescript
user.age = 18;
user.email = "ada.l@example.com";

console.log(user.age);
console.log(user.email);
```

**Output:**
```
18
ada.l@example.com
```

!!! warning "`const` and objects"
    If an object is declared with `const`, you can still **edit its
    properties**. `const` only stops you from pointing the variable at
    a **different** object. This surprises many beginners:

    ```typescript
    const settings = { volume: 5 };

    settings.volume = 8;   // allowed
    // settings = { volume: 1 };   // error: cannot reassign a const
    ```

### Adding and Deleting Properties

Some properties are **optional**: a user might or might not have a
phone number. In an interface, an optional property is marked with a
`?`:

```typescript
interface Contact {
  name: string;
  phone?: string;
}

let contact: Contact = { name: "Linus" };

console.log(contact.phone);

contact.phone = "905-555-0100";
console.log(contact.phone);

delete contact.phone;
console.log(contact.phone);
```

**Output:**
```
undefined
905-555-0100
undefined
```

Reading a property that does not exist gives `undefined` (not an
error). The `delete` keyword removes a property completely.

## Objects Inside Objects

A property's value can itself be an object or an array. This is called
**nesting**, and it is how most real data looks:

```typescript
let account = {
  username: "ada",
  address: {
    city: "Hamilton",
    province: "ON",
  },
  roles: ["student", "admin"],
};

console.log(account.address.city);
console.log(account.roles[1]);
console.log(account.roles.length);

account.address.city = "Toronto";
account.roles.push("tester");

console.log(account.address.city);
console.log(account.roles);
```

**Output:**
```
Hamilton
admin
2
Toronto
[ 'student', 'admin', 'tester' ]
```

Notice how we chain the dots and indexes to dig down:
`account.address.city`, then `account.roles[1]`.

## Looping Through an Object

To see every property of an object, use `Object.keys()` (a list of the
keys) or `Object.entries()` (a list of key and value pairs):

```typescript
let car = { make: "Honda", model: "Civic", year: 2020 };

console.log(Object.keys(car));

for (let [key, value] of Object.entries(car)) {
  console.log(key + ": " + value);
}
```

**Output:**
```
[ 'make', 'model', 'year' ]
make: Honda
model: Civic
year: 2020
```

## Arrays of Objects

A very common pattern is an **array of objects**, such as a list of
users. Everything you learned about arrays still works: loops,
`.push()`, `.filter()`, `.find()`, and `.map()`.

```typescript
interface User {
  id: number;
  name: string;
  age: number;
}

let users: User[] = [
  { id: 1, name: "Ada", age: 17 },
  { id: 2, name: "Linus", age: 16 },
  { id: 3, name: "Grace", age: 18 },
];

users.push({ id: 4, name: "Alan", age: 17 });

for (let u of users) {
  console.log(u.id + ". " + u.name + " (" + u.age + ")");
}

let found = users.find((u) => u.id === 3);
console.log(found?.name);

let adults = users.filter((u) => u.age >= 18);
console.log(adults.length);

let names = users.map((u) => u.name);
console.log(names);
```

**Output:**
```
1. Ada (17)
2. Linus (16)
3. Grace (18)
4. Alan (17)
Grace
1
[ 'Ada', 'Linus', 'Grace', 'Alan' ]
```

`.find()` returns the **first matching object**, or `undefined` if
there is no match. The `?.` after `found` (called **optional
chaining**) safely reads `.name` only if `found` exists, instead of
crashing.

## Copying Objects

This is the most important (and trickiest) idea in this lesson. When
you assign an object to another variable, you do **not** get a copy. You
get a second name for the **same** object:

```typescript
let a = { score: 10 };
let b = a;

b.score = 99;

console.log(a.score);
```

**Output:**
```
99
```

Both `a` and `b` point to the same object, so changing one changes the
other. To make a real (shallow) copy, use the **spread operator**
`...`:

```typescript
let a = { score: 10 };
let b = { ...a };

b.score = 99;

console.log(a.score);
console.log(b.score);
```

**Output:**
```
10
99
```

The spread operator copies every property into a brand-new object. You
can even change values while copying:

```typescript
let original = { name: "Ada", age: 17 };
let older = { ...original, age: 18 };

console.log(original.age);
console.log(older.age);
```

**Output:**
```
17
18
```

!!! warning "Shallow copy"
    Spread only copies the **top level**. If an object contains another
    object or array, the copy and the original still **share** it. We
    will not go deeper than this for now.

## JSON: Objects as Text

Programs send objects over the internet and save them in files as
text. The most common format is **JSON** (JavaScript Object Notation),
which looks almost like the objects we have been writing. Two built-in
functions convert between the two:

- `JSON.stringify(object)` turns an object into a JSON **string**
- `JSON.parse(text)` turns a JSON string back into an **object**

```typescript
let user = { id: 101, name: "Ada", isActive: true };

let text: string = JSON.stringify(user);
console.log(text);

let copy = JSON.parse(text);
console.log(copy.name);
```

**Output:**
```
{"id":101,"name":"Ada","isActive":true}
Ada
```

Remember reading a file in the last unit? A JSON file is read with
`fs.readFileSync()` and then passed to `JSON.parse()`, and you get
objects back, ready to use. To write one, use
`JSON.stringify(user, null, 2)`, where the `2` adds indentation so the
file is readable.

!!! abstract "Keywords"
    - **Object** — a group of related values stored under one name
    - **Property** — one key and value pair inside an object
    - **Key** — the name of a property
    - **Dot notation** — `user.name`
    - **Bracket notation** — `user["name"]`
    - **Interface** — describes the properties and types an object
      should have
    - **Optional property** — a property that may be missing (`?`)
    - **`delete`** — removes a property from an object
    - **Nested object** — an object stored inside another object
    - **Array of objects** — a list where every element is an object
    - **Spread operator `...`** — copies an object's properties into a
      new object
    - **Optional chaining `?.`** — reads a property only if the object
      exists
    - **JSON** — a text format for storing and sending objects

---

**Next:** [Exercise 7: Objects →](7-exercise-objects.md)
