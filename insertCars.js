var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/book';
var insertDocument = function(db, callback) {
   db.collection('auto').insertOne( {
      "omistaja" : "Kemin vauhtiveikot",
      "merkki" : "Ford Mustang",
      "vuosi" : "1975",
      "tyyppi" : "henk.auto",
      "color" : "musta",
      "varuste" : "karvanopat"
   }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the auto collection.");
    callback();
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});
