var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
var getzip = '10075'

var zipMissing = function(yz) {
    console.log('Missing zipcode', yz);
}

var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find( { "address.zipcode": getzip } );
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
  findRestaurants(db, function() {
      db.close();
  });
});
