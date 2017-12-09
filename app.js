const helper = require('./helper');
const fetch = require('node-fetch');

const stringify = x => { console.log(JSON.stringify(x, null, 2))}



const URL = 'https://randomuser.me/api/?results=10&nat=gb&seed=foobar-99'

const fetchPeopleData = () => {
  return fetch(URL)
    .then(response => response.json())
    .then(json => { return json.results } )
}


fetchPeopleData()





module.exports =  {
  fetchPeopleData: fetchPeopleData,
  stringify: stringify
}
