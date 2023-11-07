require("dotenv").config();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://dev:${process.env.MONGODB_PASSWORD}@cluster0.quhdn9j.mongodb.net/portfolio?retryWrites=true&w=majority`
  )
    .then((result) => {
      _db = result.db();
      callback(result);
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
