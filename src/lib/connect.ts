import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

export function ConnectDB() {
  if (!MONGODB_URL) {
    throw new Error("please define the mongodb MONGODB_URL in the env");
  }

  mongoose.connect(MONGODB_URL || "");
}
