// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI;
// const options = {};

// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error('Please add your Mongo URI to .env.local');
// }

// if (process.env.NODE_ENV === 'development') {  //later to be changed into  production 
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;
    import mongoose from "mongoose";
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
      );
    }

    let cached = global.mongoose;

    if (!cached) {
      cached = global.mongoose = { conn: null, promise: null };
    }

    async function dbConnect() {
      if (cached.conn) {
        return cached.conn;
      }

      if (!cached.promise) {
        const opts = {
          bufferCommands: false,
        };

        cached.promise = mongoose
          .connect(MONGODB_URI, opts)
          .then((mongoose) => {
            return mongoose;
          });
      }
      cached.conn = await cached.promise;
      return cached.conn;
    }

    export default dbConnect;