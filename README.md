---
module: fundamentals

level: 1

methods:
  - team
  - pair
  - solo

tags:
  - wip
---

# Xmas Tree

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

This project is about writing your first JavaScript functions, using a previously referenced [Xmas Tree](https://www.codewars.com/kata/577c349edf78c178a1000108) kata as inspiration.

## Learning Outcomes

- Skip Jest tests with `.skip`
- Distinguish between the Jest `toBe` and `toEqual` matchers
- Declare variables in JavaScript with `let` and `const`
- Write a function with a function expression in JavaScript
- Write an `if`/`else` statement in JavaScript
- Write a `for` loop in JavaScript
- Write an arrow function in JavaScript

## Exercise 0: Running and interpreting Jest tests

> 🎯 **Success criterion:** you are able to run the tests for this project locally and see the output (failing tests report) in your terminal.

This repository contains a JavaScript project with tests (but mostly empty main code).

To start with, we'll clone the repository and run the existing tests to check the existing state of the code.

Let's clone the repository:

```bash
cd ~/Developer/Academy # or wherever you're storing Academy repos
git clone https://github.com/WeAreAcademy/mark-fundamentals-proj--js-xmas-tree.git
```

In order to run the code or its tests, we'll need to install all project dependencies:

```bash
cd mark-fundamentals-proj--js-xmas-tree
yarn
```

and we can now run tests:

```bash
yarn test
```

You'll see a lot of terminal output, including the following:

```bash
Tests: 5 failed, 5 total
```

We'll make these tests pass in this project!

## Exercise 1: Skipping Jest tests

> 🎯 **Success criterion:** you run the tests and see that 4 tests are skipped (with 1 running and failing).

Having a lot of tests is helpful - it gives us confidence in the code that we write (or have written), and a structure to guide us in solving the problem at hand.

But tests can sometimes be unhelpful, too:

- Paralysis: "Oh, there's so much to do, I don't know where to start!"
- Noise: "I want to focus on _this_ test first but I keep having to look through these other tests that I _know_ will be failing"

Luckily, the Jest testing library gives us a nice way to skip tests and come back to them later.

Go to the first test and add a `.skip` after the `test`, so it looks like this:

```js
test.skip("findLineWidth finds the line width from a foliage height", () => {
  ... // <-- this is commonly used to signify "omitted detail" in code snippets
});
```

Now, run the tests. This time, the terminal output should include:

```bash
Tests: 4 failed, 1 skipped, 5 total
```

This shows us that Jest is ignoring the 1 test that we added a `.skip` to.

Go ahead and **add `.skip` to all of the tests _apart from for `makeTreeTrunk`_** (which we'll be looking at in the next exercise).

Now, when you run the tests, you should see:

```bash
Tests: 1 failed, 4 skipped, 5 total
```
