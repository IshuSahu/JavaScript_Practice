// const mongoose = require("mongoose");
// require('dotenv').config();

// const connectDB = async () => {
//     try {
//         const connect = await mongoose.connect(process.env.CONNECTION_STRING);
//         console.log("Database connection established:", connect.connection.host, connect.connection.name);
//     } catch (err) {
//         console.log("Error connecting to the database:", err.message);
//         process.exit(1);
//     }
// };


// module.exports = connectDB;


const mongoose = require("mongoose");
require('dotenv').config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.LOCAL_STRINGDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
