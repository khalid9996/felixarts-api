import { Manufacturer } from "../models/manufacturer.schema.mjs";

// Get all manufacturers
export const getAllManufacturer = async (req, res) => {
  try {
    const manufacturers = await Manufacturer.find();
    res.json(manufacturers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
