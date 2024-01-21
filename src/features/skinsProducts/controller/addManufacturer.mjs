import { Manufacturer } from "../models/manufacturer.schema.mjs";
// Create a new manufacturer
export const addManufacturer = async (req, res) => {
  try {
    const { name } = req.body;

    // Check if the manufacturer with the same name already exists
    const existingManufacturer = await Manufacturer.findOne({ name });

    if (existingManufacturer) {
      return res
        .status(400)
        .json({ error: "Manufacturer with this name already exists" });
    }

    // Create a new manufacturer
    const newManufacturer = new Manufacturer({ name });
    await newManufacturer.save();

    res.status(201).json(newManufacturer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
