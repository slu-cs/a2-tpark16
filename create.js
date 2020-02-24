// Syntax for console and file input

const readline = require('readline');
const fs = require('fs');
const mongoose = require('mongoose');
const Voters = require('./schema');

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
    })

  });


  // End the program when the file closes
  file.on('close', function() {
    process.exit(0);
  });
});
