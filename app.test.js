const app = require('./app');
const asyncFetch = require('./async-fetch')
const stringify = app.stringify;



let people;

beforeAll(async () => {
  people = await app.fetchPeopleData();
});

describe('Person API', async () => {

  test('Should return 10 people', async () => {

    expect(people.length).toEqual(10);

  });
});
