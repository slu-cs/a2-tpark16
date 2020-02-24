const Voters = require('./schema');

const quries = [

  Voters.find();
]

Promise.all(queries)
  .then(function(results) {
    console.log(results[0]);
  }).catch(error => console.error(error.stack));
