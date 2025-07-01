import mongoose from "mongoose";

const UserMongoSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  createdAt: Date,
  updatedAt: Date,
});

export const UserMongoModel = mongoose.model("User", UserMongoSchema);
