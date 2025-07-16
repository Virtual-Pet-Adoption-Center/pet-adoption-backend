const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const petRoutes = require("./routes/petRoutes");
const app = express();
const cors = require('cors');

// Middleware
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());


// MongoDB connection
const uri =
  "mongodb+srv://hashinithilinikaav:8RdAFztPBDbjLziY@petadoption.djx2rzi.mongodb.net/?retryWrites=true&w=majority&appName=petAdoption";

mongoose.connect(uri)
  .then(() => console.log("You successfully connected to MongoDB!"))
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });

  app.use('/uploads', express.static('uploads')); // serve files statically


// Routes
app.use("/api", petRoutes);

module.exports = app;
