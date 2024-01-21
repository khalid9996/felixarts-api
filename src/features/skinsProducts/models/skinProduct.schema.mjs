import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  phoneModel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PhoneModel",
    required: true,
  },
  // Add other fields as needed
});

export const Product = mongoose.model("Product", productSchema);
