# Functional JS with tests

## Introduction

This if for developers who are newbies to functional programming and want learn systematically by doing.

## Aims of functional programming

1 Write readable code
2 Write succinct code
3 Create composable functions
4 fun!


## Tech Stack

* JavasScript ES6
* Atom Text Edit
* Testing - [jest](https://facebook.github.io/jest/)
  Jest is a JavaScript testing framework by Facebook, it can be run very easily using npm and also is the perfect choice for testing React.

* API/data - Using [randomuser.me](https://randomuser.me
Using a seed we can generate the same set of users

I'm using https://randomuser.me/api/?results=10&nat=gb&seed=foobar-99
Which will get 10 results of British Nationals



## The history of Functional Languages

[Functional programming](https://en.wikipedia.org/wiki/Functional_programming)
* LISP
* Haskell
* Python

## The Principals of Functional Programming

* [Higher-order functions](https://en.wikipedia.org/wiki/Higher-order_function) are functions that can either take other functions as arguments or return them as results.

* [Pure functions](https://en.wikipedia.org/wiki/Pure_function) (or expressions) have no side effects

1. The function always evaluates the same result value given the same argument value(s).
2. Evaluation of the result does not cause any semantically observable side effect or output, such as mutation of mutable objects

* Recursion

* [Referential transparency](https://en.wikipedia.org/wiki/Referential_transparency)

An expression is said to be referentially transparent if it can be replaced with its corresponding value without changing the program's behaviour.

Imperative v Functional Programming

Functional programming is very different from imperative programming. The most significant differences stem from the fact that functional programming avoids side effects, which are used in imperative programming to implement state and I/O.

Pure functional programming completely prevents side-effects and provides referential transparency.

## JavaScript Built-in functions

JavaScript has a set of functions (on Array), `filter`, `map` and `reduce` which JS developers should be familiar with.

These methods can be used in a functional way in that they return new collections rather than mutating existing ones.

ES6 adds more useful methods like `contains`, and `find`.

Although in this repo/project I'm mainly focusing on functional libraries which add extra methods which allow JavaScript to be behave like a fully function language.

## [Underscore](http://underscorejs.org/)


## [Lodash](https://lodash.com/docs/4.17.4)

Although there is some overlap with ES6 which makes some of the Lodash functions possibly redundant it has the advantage of the function names are generally consistent across Js and other functional languages and js.

Also, systematically Lodash functions are Pure in that they return a new data rather than mutating the supplied argument.

(Also [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide))

Utility functions

* capitalize
* random

Set Theory
* union
* intersection

Sorting
* sortBy

* uniq
* partition


other
* _.omit
* _.max


## Curry partial functions

Lodash provides a Curry functions

Curried Function -
"A function that will return a new function until it receives all it's arguments".

With [Ramda](http://ramdajs.com/) all functions are curried

## Ramda

https://medium.com/@bobiblazeski/tacit-ramda-c914775ff4b1


Ramda arguments are flipped and its functions are partially applied by default.


## Installation

run

```$ node app```


to run tests

```$ npm test```

----


Lenses
TODO
[functional-lenses](https://medium.com/@dtipson/functional-lenses-d1aba9e52254)

react
https://medium.com/@mirkomariani/functional-components-with-react-stateless-functions-and-ramda-e83e54fcd86b

Links

* Good examples of using ES6 features - [Handle JavaScript data structures with map/reduce](https://codeburst.io/writing-javascript-with-map-reduce-980602ff2f2f)
* [](https://startupsventurecapital.com/javascript-save-time-by-avoiding-re-writing-these-common-functions-266835c0bf68)

* [lodash/wiki/FP-Guide](https://github.com/lodash/lodash/wiki/FP-Guide)
* [ramda docs](http://ramdajs.com/docs/#)
* [ramda/wiki/Cookbook](https://github.com/ramda/ramda/wiki/Cookbook)
* [Functional Redux Reducers with Ramda](https://alligator.io/react/functional-redux-reducers-with-ramda/)
* [pratical ramda](https://macwright.org/2015/08/27/practical-ramda.html)


videos

[Hey Underscore, You're Doing It Wrong!](https://www.youtube.com/watch?v=m3svKOdZijA)

[Understanding Ramda by Writing It](https://www.youtube.com/watch?v=2k2KvNBIbYQ)
