
import dotenv from 'dotenv'
import process from "process"
import { MongoClient, ServerApiVersion } from 'mongodb'

dotenv.config()

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD

const URI = `mongodb+srv://${username}:${password}@salesdb.xcpwkzp.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Establish connection

let conn;

try {
  conn = await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (e) {
  console.error(e);
}

const db = conn.db("sales_db");
console.log(db)

export default db;
