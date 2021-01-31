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

- Write tests in JavaScript with Jest
- Distinguish between the Jest `toBe` and `toEqual` matchers
- Declare variables in JavaScript with `let` and `const`
- Write a function with a function expression in JavaScript
- Write an `if`/`else` statement in JavaScript
- Write a `for` loop in JavaScript
- Write an arrow function in JavaScript

## Exercise 0: Running and interpreting Jest tests

> 🎯 **Success criterion:** you are able to run the tests for this project locally and see the output in your terminal.

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

You'll see most tests are failing. We'll be making them pass in this exercise!
