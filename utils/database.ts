import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  try {
    if (isConnected) {
      console.log("Already connected to mongodb.");
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: "expense-tracker",
    });
    isConnected = true;
  } catch (error) {
    console.log("Error connecting to MongoDB!", error);
  }
};
