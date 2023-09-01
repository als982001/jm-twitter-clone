// types/globals.d.ts

// Node.js 환경에서의 global 객체 확장
declare namespace NodeJS {
  interface Global {
    _mongo: Promise<MongoClient> | undefined;
  }
}

// 클라이언트 환경에서의 global 객체 확장
interface Window {
  _mongo: Promise<MongoClient> | undefined;
}
