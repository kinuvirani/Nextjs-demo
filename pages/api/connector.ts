import { MongoClient } from 'mongodb';

let cachedDb;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
//   console.log('process.env.MONGODB_URI==', process.env.MONGODB_URI)
  const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  cachedDb = client;
  return await client.connect();
}