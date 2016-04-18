var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';
// Install mongodb:
// npm install mongodb
// Create Package.json:
// npm init
// Initialize git:
// git init
// Start manually first the server 
// 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});
