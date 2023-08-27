import { MongoClient, MongoClientOptions } from "mongodb";
import { ConnectOptions } from "mongoose";
const url =
  "mongodb+srv://als982001:rnlcksgdk18@cluster0.cysggjr.mongodb.net/?retryWrites=true&w=majority";
const options: MongoClientOptions & ConnectOptions = { useNewUrlParser: true };

let connectDB: Promise<MongoClient>;

// TypeScript에서 global 객체에 속성을 추가할 때는 다음과 같은 방식으로 확장합니다.
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
