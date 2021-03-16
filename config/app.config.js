
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tanzilahuda:<hudasiddiqua99>@cluster0.56vsv.mongodb.net/mongoDB1?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});






