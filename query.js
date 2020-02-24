
const mongoose = require('mongoose');
const connect = require('./db');
const Voters = require('./schema');

connect(); // To the database

const query = [
    Voters.find().where('zipCode').equals(13617),
    Voters.find().where('firstName').equals("STARR"),
    Voters.where('history').in('GE16').count(),
    Voters.find().sort("-lastName").limit(1),
    Voters.distinct('zipCode')
];

// Run the queries in parallel
Promise.all(query)
  .then(function(results) {
    console.log('The number of registered voters that live in zip code 13617: ', results[0]);
    console.log('The full names of all of the registered voters whose first-name is STARR: ', results[1].map(v => v.firstName + ' ' + v.lastName));
    console.log('Number of people who voted in the GE 2016: ', results[2]);
    console.log('The last-name that comes in last in the county in alphabetical order:  ', results[3].map(v => v.lastName));
    console.log('The number of zip codes that the county contains: ', results[4].length);
    mongoose.connection.close();
  }).catch(error => console.error(error.stack));
