const mongoose = require("mongoose");
// require("dotenv").config();

const mongoDBURI =
  process.env.NODE_ENV === "development"
    ? "mongodb://localhost:27017//users"
    : "mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@password-reset-flow.jhcfx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=password-reset-flow";

const connectDB = async () => {
  try {
    // Connect to MongoDB Atlas using the connection string in .env
    await mongoose.connect(mongoDBURI);
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit with failure if the connection fails
  }
};

module.exports = {
  connectDB
}