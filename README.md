# Functional JS with tests

## Introduction

This if for developers who are newbies to functional programming and want learn systematically by doing.

## Installation

```

git clone https://github.com/russellf9/functional-js-with-tests.git

cd functional-js-with-tests

npm install

# To run the tests

npm test


```
## Aims of functional programming

1. Write readable code
2. Write succinct code
3. Create composable functions
4. fun!


## Tech Stack

* JavasScript ES6
* Atom
* Testing - [jest](https://facebook.github.io/jest/)
  Jest is a JavaScript testing framework by Facebook, it can be run very easily using npm and also is the perfect choice for testing React.
* API/data - Using [randomuser.me](https://randomuser.me)


## The history of Functional Languages

[Functional programming](https://en.wikipedia.org/wiki/Functional_programming)

Functional Programming has been popular in academia,
* LISP
* Haskell
* Python

## The Principals of Functional Programming

* [Higher-order functions](https://en.wikipedia.org/wiki/Higher-order_function) are functions that can either take other functions as arguments or return them as results.

* [Pure functions](https://en.wikipedia.org/wiki/Pure_function) (or expressions) have no side effects

1. The function always evaluates the same result value given the same argument value(s).
2. Evaluation of the result does not cause any semantically observable side effect or output, such as mutation of mutable objects

* Recursion -

* [Referential transparency](https://en.wikipedia.org/wiki/Referential_transparency)

An expression is said to be referentially transparent if it can be replaced with its corresponding value without changing the program's behaviour.

## Imperative v Functional Programming

Functional programming is very different from imperative programming. The most significant differences stem from the fact that functional programming avoids side effects, which are used in imperative programming to implement state and I/O.

Pure functional programming completely prevents side-effects and provides referential transparency.

## JavaScript Built-in functions

JavaScript has a set of functions (on Array), `filter`, `map` and `reduce` which JS developers should be familiar with.

These methods can be used in a functional way in that they return new collections rather than mutating existing ones.

ES6 adds more useful methods like `contains`, and `find`.

Although in this repo/project I'm mainly focusing on functional libraries which add extra methods which allow JavaScript to be behave like a fully function language.

## [Underscore](http://underscorejs.org/)

Underscore has been implemented in the AngularJS app.

## [Lodash](https://lodash.com/docs/4.17.4)

I'm using Lodash here as it has more features than Underscore and I had issues importing it.

Although there is some overlap with ES6 which makes some of the Lodash functions possibly redundant it has the advantage of the function names are generally consistent across functional languages and has a host of well documented features.

All Lodash functions are Pure in that they return a new data rather than mutating the supplied argument.

(Also [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide))


## Curry or Partial Functions

**Definition**

Curried Function -
"A function that will return a new function until it receives all it's arguments".

This is where Functional Programming gets really interesting, although Lodash provides a Curry function with with [Ramda](http://ramdajs.com/) all functions are curried.


## Ramda

Ramda arguments are flipped and its functions are partially applied by default.

See: [Tacit Ramda](https://medium.com/@bobiblazeski/tacit-ramda-c914775ff4b1) for a good introduction.


### Links

* [mostly-adequate-guide-old](https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/) This is the original resource I followed, providing a great grounding in FP theory and practice.
* [Medium](https://medium.com) is a very good source for expert programming articles.
* [react](https://medium.com/@mirkomariani/functional-components-with-react-stateless-functions-and-ramda-e83e54fcd86b)
* [Handle JavaScript data structures with map/reduce](https://codeburst.io/writing-javascript-with-map-reduce-980602ff2f2f) - Good examples of using ES6 features
* [Javascript: Save time by avoiding re-writing these common functions
](https://startupsventurecapital.com/javascript-save-time-by-avoiding-re-writing-these-common-functions-266835c0bf68)

* [lodash/wiki/FP-Guide](https://github.com/lodash/lodash/wiki/FP-Guide)
* [ramda docs](http://ramdajs.com/docs/#)
 [ramda/wiki/Cookbook](https://github.com/ramda/ramda/wiki/Cookbook)
* [Functional Redux Reducers with Ramda](https://alligator.io/react/functional-redux-reducers-with-ramda/)
* [pratical ramda](https://macwright.org/2015/08/27/practical-ramda.html)


### Videos

* [Hey Underscore, You're Doing It Wrong!](https://www.youtube.com/watch?v=m3svKOdZijA)
* [Understanding Ramda by Writing It](https://www.youtube.com/watch?v=2k2KvNBIbYQ)
