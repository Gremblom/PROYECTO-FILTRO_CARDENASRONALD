import dotenv from "dotenv";
import {MongoClient} from "mongodb";

dotenv.config();

const url = process.env.MONGOURI;
const client = new MongoClient(url);

const dbName = 'Kario';

async function main() {
  // Use connect method to connect to the server
  await client.connect();

  const db = client.db(dbName);

  return db;
}

export default main;