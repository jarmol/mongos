var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/book';

// Löydetyt tapaukset järjestetään vuosiluvun mukaan nousevasti.
var findCars = function(db, callback) {
   var cursor =db.collection('auto').find().sort({"vuosi": 1});
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findCars(db, function() {
      db.close();
  });
});
