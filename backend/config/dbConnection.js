const mongoose = require("mongoose");

const localUri = process.env.LOCAL_CONNECTION_STRING;

// Connect to local MongoDB only
const connectDb = async () => {
  try {
    await mongoose.connect(localUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Local MongoDB connected");
  } catch (error) {
    console.error(" Local MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
