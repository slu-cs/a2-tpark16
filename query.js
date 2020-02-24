
const mongoose = require('mongoose');
const connect = require('./db');
const Voters = require('./schema');

connect(); // To the database

const query = [
  Voters.find()
];

// query.exec(function(error, voters) {
//   if (error) console.error(error.stack);
//   console.log(voters);
// });

// Run the queries in parallel
Promise.all(queries)
  .then(function(results) {
    console.log('Names in order: ', results[0].map(p => p.name));
    mongoose.connection.close();
  }).catch(error => console.error(error.stack));
