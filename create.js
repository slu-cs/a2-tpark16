// Syntax for console and file input

const readline = require('readline');
const fs = require('fs');
const mongoose = require('mongoose');
const connect = require('./db');
const Voters = require('./schema');

connect(); // To the database

// make voter array so we can store data
let voter = [];

// File configuration
const file = readline.createInterface({
  input: fs.createReadStream('voters.csv')
});

// Asynchronous line-by-line input
file.on('line', function(line) {
  var splited_line = line.split(/,/);
  voter.push(new Voters({
    firstName: splited_line[0],
    lastName: splited_line[1],
    zipCode: splited_line[2],
    history: splited_line[3]
  }));
});

file.on('close', function() {
// reset the data
mongoose.connection.dropDatabase()
  .then(() => Promise.all(voter.map(voter => voter.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
});
