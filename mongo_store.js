var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/ramdb";
module.exports = {
    createUser ({ username, password }) {
      console.log(`Add user ${username} with password ${password}`)
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ramdb");
        var user = {username, password};
        dbo.collection("users").insertOne(user, function(err, res) {
            if (err) throw err;
            console.log("1 user inserted");
            db.close();
        });
      });
      return Promise.resolve()
    }
  }