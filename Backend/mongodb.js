const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('DB connected');
  } catch (error) {
    console.error('Failed to connect', error);
    process.exit(1);
  }
};

module.exports = connectDB;