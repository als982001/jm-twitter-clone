/*
import { MongoClient, MongoClientOptions } from "mongodb";
import { ConnectOptions } from "mongoose";
const url =
  "mongodb+srv://als982001:rnlcksgdk18@cluster0.cysggjr.mongodb.net/?retryWrites=true&w=majority";
// const options: MongoClientOptions & ConnectOptions = { useNewUrlParser: true };
const options = { useNewUrlParser: true } as MongoClientOptions &
  ConnectOptions;

let connectDB: Promise<MongoClient>;

declare global {
  namespace NodeJS {
    interface Global {
      _mongo: Promise<MongoClient> | undefined;
    }
  }
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };
*/
