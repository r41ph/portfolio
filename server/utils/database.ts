import "dotenv/config";
import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

let _db;

export const mongoConnect = (callback) => {
  MongoClient.connect(
    // eslint-disable-next-line prettier/prettier
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

export const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};
