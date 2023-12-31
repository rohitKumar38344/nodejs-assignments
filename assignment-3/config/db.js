const mongoose = require("mongoose");

const connectTodDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully: ", conn.connection.host);
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};

module.exports = connectTodDB;
