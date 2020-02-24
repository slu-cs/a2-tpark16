
const mongoose = require('mongoose');
const connect = require('./db');
const Voters = require('./schema');

connect(); // To the database

// queries
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
    console.log('The number of registered voters live in the Canton zip code 13617: ', results[0].length);
    console.log('The full names of all of the registered voters whose first-name is STARR: ', results[1].map(v => v.firstName + ' ' + v.lastName));
    console.log('Number of people voted in the 2016 general election (GE16): ', results[2]);
    console.log('The last-name that comes in last in the county in alphabetical order:  ', results[3].map(v => v.lastName));
    console.log('The number of zip codes that the county contains: ', results[4].length);
    mongoose.connection.close();
  }).catch(error => console.error(error.stack));
