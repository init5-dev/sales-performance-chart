// Import necessary modules from dependencies
import dotenv from 'dotenv'
import process from "process"
import { MongoClient, ServerApiVersion } from 'mongodb'

// Load environment variables from a .env file
dotenv.config()

// Extract MongoDB username and password from environment variables
const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD

// Construct MongoDB connection URI with username and password
const URI = `mongodb+srv://${username}:${password}@salesdb.xcpwkzp.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with specified options, including setting the Stable API version
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1, // Set the Stable API version
    strict: true,
    deprecationErrors: true,
  }
});

// Initialize variable to hold the connection
let conn;

// Try to establish a connection to MongoDB
try {
  conn = await client.connect(); // Connect to the MongoDB server
  await client.db("admin").command({ ping: 1 }); // Ping the server to check the connection
  console.log("Connected to MongoDB database!");
} catch (e) {
  console.error(e); // Log an error if connection fails
}

// Access the "sales_db" database from the established connection
const db = conn.db("sales_db");

// Export the connected MongoDB database for use in other parts of the application
export default db;
