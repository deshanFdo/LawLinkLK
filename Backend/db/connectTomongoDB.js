// backend/db/connectTomongoDB.js
import { connect } from "mongoose";

const connectTomongoDB = async () => {
  try {
    await connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectTomongoDB;