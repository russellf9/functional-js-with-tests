# Functional JS with tests

## Introduction

This repository if for developers who are newbies to functional programming and want learn systematically by doing.

We can explore some basic functional aspects of ES6, take a quick look at the Lodash library and move to looking at Currying.

This is were I believe the functional paradigm gets really interesting, and finally we can focus on using Ramda which provides in my opinion the best way to implement FP within modern JS applications.

## Tech Stack

* JavasScript ES6
* Atom
* Testing - [jest](https://facebook.github.io/jest/)
    * Jest is a JavaScript testing framework by Facebook, it can be run very easily using npm and also is the perfect choice for testing React.
* API/data - Using [randomuser.me](https://randomuser.me)


## Installation

```

git clone https://github.com/russellf9/functional-js-with-tests.git

cd functional-js-with-tests

npm install

# To run the tests

npm test


```

### Running tests

Within Jest a really handy way of running just one test at a time is to add `only` before the test description.

```
test.only('Should have ten counties, the last will be `west yorkshire`', () => {
  const counties = people.map(location).map(county).sort();
  expect(counties.length).toEqual(10);
  expect(counties[9]).toEqual('west yorkshire');
});

```
Which should result in:

```
PASS  ./app.test.js
 Person API
   ✓ Should have ten counties, the last will be `west yorkshire`
   ○ skipped 16 tests

Test Suites: 1 passed, 1 total
Tests:       16 skipped, 1 passed, 17 total
Snapshots:   0 total
Time:        2.52s
Ran all test suites.
```



## Aims of functional programming

1. Write readable code
2. Write succinct code
3. Create composable functions
4. fun!


## The history of Functional Languages

[Functional programming](https://en.wikipedia.org/wiki/Functional_programming)

Functional Programming has been popular in academia,
* LISP
* Haskell
* Python

JavaScript has some very good parts which allow us to use (with the addition of Ramda) it as a concise fully featured FP language.

## The Principals of Functional Programming

* [Higher-order functions](https://en.wikipedia.org/wiki/Higher-order_function) are functions that can either take other functions as arguments or return them as results.

* [Pure functions](https://en.wikipedia.org/wiki/Pure_function) (or expressions) have no side effects
    1. The function always evaluates the same result value given the same argument value(s).
    2. Evaluation of the result does not cause any semantically observable side effect or output, such as mutation of mutable objects

* Recursion - I haven't used any recursion here, but a good example would be where a function searches the DOM tree for a leaf node with a certain id.

* [Referential transparency](https://en.wikipedia.org/wiki/Referential_transparency)
    * An expression is said to be referentially transparent if it can be replaced with its corresponding value without changing the program's behaviour.

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

For a very simple example to see the flipped arguments, say we wanted to look at the number of cheap items in a shopping trolly we could do the following:

```
const items = data.items;
const isCheap = x => { return x.price < 5 };

const es6CheapItems = items.filter(isCheap);
const ramdaCheapItems = R.filter(isCheap, items);
```

The two functions will return the same result, the difference being that in Ramda the data is always the last parameter.

See: [Tacit Ramda](https://medium.com/@bobiblazeski/tacit-ramda-c914775ff4b1) for a good introduction.

## Links

* [mostly-adequate-guide](https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/) This is the original resource I followed, providing a great grounding in FP theory and practice.
* [Medium](https://medium.com) is generally a very good source for expert programming articles.
* [Functional Components with React stateless functions and Ramda](https://medium.com/@mirkomariani/functional-components-with-react-stateless-functions-and-ramda-e83e54fcd86b)
  - A cool example with Ramda and JSX
* [Data pipelines with Ramda](https://medium.com/@hayavuk/data-pipelines-with-ramda-7fe886d88f5f)
  - Some good explanation of Currying and use cases for Ramda.
* [Handle JavaScript data structures with map/reduce](https://codeburst.io/writing-javascript-with-map-reduce-980602ff2f2f)
    * Good examples of using ES6 features
* [Javascript: Save time by avoiding re-writing these common functions
](https://startupsventurecapital.com/javascript-save-time-by-avoiding-re-writing-these-common-functions-266835c0bf68)
* [lodash/wiki/FP-Guide](https://github.com/lodash/lodash/wiki/FP-Guide)
    * _"...an instance of lodash with its methods wrapped to produce immutable auto-curried iteratee-first data-last methods."_
* [ramda docs](http://ramdajs.com/docs/#)
* [Ramda Wiki](ramda/ramda)
 [ramda/wiki/Cookbook](https://github.com/ramda/ramda/wiki/Cookbook)
* [Functional Redux Reducers with Ramda](https://alligator.io/react/functional-redux-reducers-with-ramda/)
* [pratical ramda](https://macwright.org/2015/08/27/practical-ramda.html)

## Videos

* [Hey Underscore, You're Doing It Wrong!](https://www.youtube.com/watch?v=m3svKOdZijA)
* [Understanding Ramda by Writing It](https://www.youtube.com/watch?v=2k2KvNBIbYQ)
* [Refactor a Promise Chain to Function Composition using Ramda](https://www.youtube.com/watch?v=saHK4HrPzKE)
   * A really cool way to refactor the handling of an async call using Ramda.
