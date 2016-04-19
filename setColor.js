var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/book';

// Löydetyt tapaukset järjestetään vuosiluvun mukaan nousevasti.
var updateOwners = function(db, callback) {
   db.collection('auto').updateOne({"merkki": /audi/i}, {"vuosi": "1989"},
   {
      $set: { "color": "punainen" }
   }, function(err, results) {
      console.log(results);
      callback();
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  updateOwners(db, function() {
      db.close();
  });
});
