const helper = require('./helper');
const fetch = require('node-fetch');

const stringify = x => { console.log(JSON.stringify(x, null, 2))}


const getURL = (num) => { return  `https://randomuser.me/api/?results=${num}&nat=gb&seed=foobar-99`}

const fetchPeopleData = (num = 10) => {
  return fetch(getURL(num))
    .then(response => response.json())
    .then(json => { return json.results } )
}

fetchPeopleData()

const singlePersonUrl = 'https://randomuser.me/api/?results=1&nat=gb&seed=foobar-98';
const getSinglePerson = () => {
  return fetch(singlePersonUrl)
  .then(response => response.json())
  .then(json => { return json.results } )
}


module.exports =  {
  fetchPeopleData: fetchPeopleData,
  stringify: stringify,
  getSinglePerson: getSinglePerson
}
