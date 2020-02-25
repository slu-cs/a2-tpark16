# A2
CS332 Assignment #2

Citations: https://mongoosejs.com/docs/api/query.html
          https://mongoosejs.com/docs/queries.html

Timing issue:
  - Saving can begin before the voter list is complete.
  - See create.js for a suggested fix.
  
Query issue:
  - The number of voters in GE16 is coming out too low. It's finding the voters who ONLY voted in GE16. For this query to do what you intended, your history string would have to be an array of strings instead.
