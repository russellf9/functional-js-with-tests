const _ = require('lodash');
const R = require('ramda');
const moment = require('moment');

const isFemale = (x) => { return x.gender === 'female'}
const isMale = (x) => { return _.negate(isFemale) }
const trace = (x) => { return console.log(x) }
const curriedTrace = R.curry((tag, x) => {
  console.log(tag, x);
  return x;
});
// Person name functions
const getName = (x) => { return x.name };
const getFullName = (x) => {
  const name = getName(x)
  return name ? `${_.capitalize(name.title)} ${_.capitalize(name.first)} ${_.capitalize(name.last)}` : 'Error'
}

const getAge = (person) => {
  return moment().diff(moment(person.dob), 'years')
}



const getNameWithId = (name) => { return { id: _.uniqueId(), fullName: name }}

const location = (x) => { return x.location }
const county = (location) => {  return location.state }

const northIrishCounties = ['county fermanagh']
const isInNorthernIsland = (x) => { return northIrishCounties.includes(x) }

const welshCounties = ['gwynedd county', 'powys'];
const isInWales = (person) => { return welshCounties.includes(person.location.state)}

const isEven = (x) => { return x % 2 === 0; };

const byId = (x) => { return x ? Number(x.id) : null };

// can be replaced by _.sample()
const getRandomItem = (collection) => {
  const index = _.random(0, collection.length - 1);
  return collection[index];
}


// creates an Array of random items from the supplied Array
const createRandomGroup = (num, collection) => {
  const group = [];
  _.times(num, (collection) => {
    group.push(_.sample(collection))
  });
  return group;
}

const isPensioner = (person) => {
  const spaMale = 65;
  const spaFemale = 60;

  const isFemalePensioner = (person) => { return isFemale(person) && _.gte(getAge(person), spaFemale)}
  const isMalePensioner = (person) => { return isMale(person) && _.gte(getAge(person), spaMale)}

  return isFemalePensioner(person) || isMalePensioner(person);
}

module.exports =  {
  byId: byId,
  county: county,
  createRandomGroup: createRandomGroup,
  curriedTrace: curriedTrace,
  getAge: getAge,
  getFullName: getFullName,
  getName: getName,
  getNameWithId: getNameWithId,
  getRandomItem: getRandomItem,
  isEven: isEven,
  isMale: isMale,
  isFemale: isFemale,
  isInNorthernIsland: isInNorthernIsland,
  isInWales: isInWales,
  isPensioner: isPensioner,
  location: location,
  trace: trace
}
