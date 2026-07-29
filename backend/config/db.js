import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/reactjs-food-delivery-app");

    console.log("DB Connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};