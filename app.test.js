const _ = require('lodash');
const R = require('ramda');
const moment = require('moment');

const data = require('./data');
const app = require('./app');

const stringify = app.stringify;

// helper functions
const helper = require('./helper');
const trace = helper.trace;
const isFemale = helper.isFemale;
const getFullName = helper.getFullName;
const location = helper.location;
const county = helper.county;
const isInNorthernIsland = helper.isInNorthernIsland;
const isInWales = helper.isInWales;

let people;

let num = 10;

beforeAll(async () => {
  people = await app.fetchPeopleData(10);
});

describe('Person API', async () => {

  test('Should return 10 people', async () => {
    expect(people.length).toEqual(num);
  });

  // 1 Built in JavaScript functions
  // filter
  test('Should be 4 female people (using filter)', () => {
    const femalePeople = people.filter(isFemale);
    expect(femalePeople.length).toEqual(4);
  });


  // map
  test('Should be have a second person called `Miss Izzie Jenkins` (using map)', () => {
    const secondPersonName = 'Miss Izzie Jenkins';
    const names = people.map(getFullName)
    expect(names[1]).toEqual(secondPersonName);
    trace(names)
  });


  // chained map
    test.only('Should have ten counties, the last will be `west yorkshire` (using chained map functions)', () => {
      const counties = people.map(location).map(county).sort();
      expect(counties.length).toEqual(10);
      expect(counties[9]).toEqual('west yorkshire');
    });


  // using reduce
  test('Should have a shopping basket worth `19.36`', () => {
    const items = data.items;
    const costOfShopping = items.reduce((accumulator, currentValue, currentIndex, array) => {
      return accumulator + currentValue.price
    }, 0)
    expect(costOfShopping).toEqual(19.36)
  });


  // 2. ES6 Functions
  // Using some ES6 features (2015)
  // `find`
  test('Should have a Person kathy.chambers with a Mobile Number of `0799-226-657`', () => {
      const isKathyChambersEmail = (x) => { return x.email === 'kathy.chambers@example.com' }
      const kathyChambersMobile = people.find(isKathyChambersEmail).cell;
      expect(kathyChambersMobile).toEqual('0799-226-657');
  });

  // TODO - other new built in -`some()`


  // Using `async` within a Jest test
  // Adding an element to an array using Spread `...`
  test('Should have Eleven People when one person is added to the list of Persons ', async () => {
      const person = await app.getSinglePerson();
      const newPeople = [...people, person];

      expect(newPeople.length).toEqual(11);
  });


  // Using Rest to modify a Person
  // Also using Lodash head
  // And using async within the test
  test('Should be able to update a property using the Spread Operator ', async () => {
      const personArray = await app.getSinglePerson(); // is an array of one
      const person = _.head(personArray);
      //console.log('persons old mobile: ', person.cell);
      const updatedPerson = { ...person, cell: '0758-235-839' };
      // console.log('persons new mobile: ', updatedPerson.cell);
      expect(updatedPerson.cell).toEqual('0758-235-839');
  });


  // ===========================================================================

  // 3. Lodash

  // Using lodash
  // Also uses `sample()`, `times()
  // We could use ES6 Set to create a Unique collection
  test('Should be that a Union of random Sets contain no duplicate Members (Using Lodash)', () => {

    const peoplesNames = people
      .map(helper.getFullName)
      .map(helper.getNameWithId)

    // create some random groups and join them
    const groupOne = helper.createRandomGroup(5, peoplesNames);
    const groupTwo = helper.createRandomGroup(5, peoplesNames);
    const groupThree = helper.createRandomGroup(5, peoplesNames);


    const unionOne = _.union(groupOne, groupTwo, groupThree);

    const sortedPeople = _.sortBy(unionOne, [helper.byId]);
    const uniqPeople = _.uniq(sortedPeople);

    //console.log(sortedPeople)

    expect(sortedPeople.length).toEqual(uniqPeople.length);
  });


  // Note: 'partition' belongs to Ramda as well
  test('Should be 4 females and 6 males (Using Lodash `partition`)', () => {
    const partition = _.partition(people, helper.isFemale)
    const females = partition[0];
    const males = partition[1];
    expect(females.length).toEqual(4);
    expect(males.length).toEqual(6);
  });

  // using Lodash `gte`
  test('Should be two pensioners', () => {
    const pensioners = people
      .filter(helper.isPensioner);

    pensioners.forEach((person) => {
      const pensionText = helper.isPensioner(person) ? 'is a pensioner' : 'is not a pensioner'
      const txt = `${helper.getFullName(person)} - Age ${helper.getAge(person)} - ${pensionText}.\n`;
      console.log(txt)
    })

    expect(pensioners.length).toEqual(2);
  });

  // Curry
  // using Curried functions
  test('Should be able to evaluate the number of people with each salutation using Curried functions', () => {
    const names = people.map(helper.getFullName);

    // create a set of Curried functions
    const match = _.curry((what, str) => {
      return str.match(what)
    });

    const filter = _.curry((f, array) => {
      return array.filter(f);
    });

    const startsWithMr = match(/^\bMr\b/g);
    const peopleWithMr = filter(startsWithMr, names);

    const startsWithMiss = match(/^\bMiss\b/g);
    const peopleWithMiss = filter(startsWithMiss, names);

    const startsWithMrs = match(/^\bMrs\b/g);
    const peopleWithMrs = filter(startsWithMrs, names);

    const startsWithMs = match(/^\bMs\b/g);
    const peopleWithMs = filter(startsWithMs, names);

    expect(peopleWithMr.length).toEqual(6);
    expect(peopleWithMiss.length).toEqual(1);
    expect(peopleWithMrs.length).toEqual(1);
    expect(peopleWithMs.length).toEqual(2);
  });


  // Ramda
  // Uses Ramda, take
  test('Should be able to use a Ramda function to get the first five people (Using Ramda)', () => {

    const names = people.map(helper.getFullName);

    const takeNumber = n => R.take(n)
    const takeFive = takeNumber(5);
    const firstFivePeople = takeFive(names);

    expect(firstFivePeople.length).toEqual(5);
    expect(firstFivePeople[4]).toEqual('Mr Ricky Moreno');
  });

  // Uses Ramda, Moment, prop, head, reverse
  test('Should be able to use a Pontfree Ramda Compose Function to find that the age of the last Person is 35', () => {

    const getAge = (x) => {
      return moment().diff(moment(x), 'years')
    }

    const lastPersonsAge = R.compose(
      getAge,
      R.prop('dob'),
      R.head(),
      R.reverse(),
      // helper.curriedTrace('Before reverse')
    )
    expect(lastPersonsAge(people)).toEqual(35)
  });

  // Uses Ramda, sum, prop
  test('Should be a Shopping Basket worth `19.36`', () => {
    const costOfShopping = R.compose(
      R.sum,
      R.map(R.prop('price'))
    );
    expect(costOfShopping(data.items)).toEqual(19.36);
  });

  // Uses Ramda, converge, divide, sum, length
  test('The average price of an item in the shopping basket is `3.872`', () => {
    const average = R.converge(R.divide, [R.sum, R.length]);

    const averageCost = R.compose(
      average, // or we could use R.mean!
      //R.mean,
      R.map(R.prop('price'))
    );
    expect(averageCost(data.items)).toEqual(3.872);
  });

  // Uses Ramda map, compose and prop
  test('Should have a first Person with a surname of Chambers ', () => {
    const surnames = R.map(
        R.compose(
        helper.curriedTrace('After last: '), // will be each surname `chambers`, `jenkins`...
        R.prop('last'),
        R.prop('name')
      )
    );
    const peoplesSurnames = surnames(people);
    const firstPersonSurname = R.head(peoplesSurnames);

    expect(firstPersonSurname).toEqual('chambers');
  });
});
