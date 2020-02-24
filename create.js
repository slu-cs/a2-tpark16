// Syntax for console and file input

const readline = require('readline');
const fs = require('fs');
const mongoose = require('mongoose');
const csvParser = require('csv-parser');
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
    var line2 = line.split(/,/);
    console.log(line2);
  });

  // End the program when the file closes
  file.on('close', function() {
    process.exit(0);
  });
});
