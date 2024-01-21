import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();

export const dbConnect = () => {
  const connect = () => {
    mongoose
      .connect(`${process.env.DATABASE_URL}`)
      .then(() => {
        console.log("Successfully connected to database");
      })
      .catch((error) => {
        console.log(process.env.DATABASE_URL);
        console.log(`Error connecting to database ${error}`);
        return process.exit(1);
      });
  };
  connect();
  mongoose.connection.on("disconnected", connect);
};
