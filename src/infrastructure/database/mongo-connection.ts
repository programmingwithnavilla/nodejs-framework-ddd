import mongoose from "mongoose";

export const connectMongo = async () => {
  await mongoose.connect("mongodb://localhost:27017/your_db");
  console.log("✅ MongoDB connected");
};
