var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
var getzip = '10076'

var zipMissing = function(yzip) {
    console.log('Missing zipcode', yzip);
}

var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find( { "address.zipcode": getzip } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         zipMissing(getzip); callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findRestaurants(db, function() {
      db.close();
  });
});
