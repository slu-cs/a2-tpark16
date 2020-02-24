// Define a plan for a collection

const mongoose = require('mongoose');

// Schema for a collection of Voters
const Voters = new mongoose.Schema({
  firstName: String,
  lastName: String,
  zipCode: Number,
  history: String
});


// Spped up queries on all fields
Voters.index({firstName: 1});
Voters.index({lastName: 1});
Voters.index({zipCode: 1});
Voters.index({history: 1});

module.exports = mongoose.model('Voters', Voters);
