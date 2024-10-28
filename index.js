const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./db"); // Adjust the path if necessary
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());



// Routes
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, process.env.HOSTNAME ,() => {
  console.log("http://localhost:3000")
  console.log(`Server started`);
  connectDB;

});


