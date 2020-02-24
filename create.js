// Syntax for console and file input

const readline = require('readline');
const fs = require('fs');
const mongoose = require('mongoose');
const connect = require('./db');
const Voters = require('./schema');

connect(); // To the database

// Console configuration
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Console input
user.question('Filename: ', function(filename) {


  // File configuration
  const file = readline.createInterface({
    input: fs.createReadStream(filename)
  });

  // Asynchronous line-by-line input
  file.on('line', function(line) {
    var splited_line = line.split(/,/);
    const value = new Voters({
      firstName: splited_line[0],
      lastName: splited_line[1],
      zipCode: splited_line[2],
      history: splited_line[3]
    });
  });

  console.log(value);

  mongoose.connection.dropDatabase()
    .then(() => value.save())
    .then(() => mongoose.connection.close())
    .then(() => console.log('Database is ready.'))
    .catch(error => console.error(error.stack));

  // End the program when the file closes
  file.on('close', function() {
    process.exit(0);
  });
});
