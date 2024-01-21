import { addManufacturer } from "../controller/addManufacturer.mjs";
import express from "express";
import { getAllManufacturer } from "../controller/getAllManufacturer.mjs";

class SkinProductRoutes {
  router;

  constructor() {
    this.router = express.Router();
  }

  routes() {
    this.router.post("/add/manufacturer", addManufacturer);
    this.router.get("/manufacturers", getAllManufacturer);

    return this.router;
  }
}
export const skinProductRoutes = new SkinProductRoutes();
