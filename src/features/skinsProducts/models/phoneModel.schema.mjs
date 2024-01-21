import mongoose from "mongoose";

const phoneModelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  manufacturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Manufacturer",
    required: true,
  },
  // Add other fields as needed
});

export const PhoneModel = mongoose.model("PhoneModel", phoneModelSchema);
