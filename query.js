const Voters = require('./schema');

const query = Voters.find();
query.exec(function(error, voters) {
  if (error) console.error(error.stack);
  console.log(voters);

// Promise.all(queries)
//   .then(function(results) {
//     console.log(results[0]);
//   }).catch(error => console.error(error.stack));
