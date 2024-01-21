import mongoose from "mongoose";

const manufacturerSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  // Add other fields as needed
});

export const Manufacturer = mongoose.model("Manufacturer", manufacturerSchema);
