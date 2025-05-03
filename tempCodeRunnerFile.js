const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const petRoutes = require("./routes/petRoutes");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection
const uri =
  "mongodb+srv://hashinithilinikaav:8RdAFztPBDbjLziY@petadoption.djx2rzi.mongodb.net/?retryWrites=true&w=majority&appName=petAdoption";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  }catch (error) {
    console.error("MongoDB connection error:", error);
  }finally {
    await client.close();
  }
}
run().catch(console.dir);

// Routes
app.use("/api", petRoutes);

module.exports = app;
