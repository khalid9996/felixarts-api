import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();

export const dbConnect = () => {
  const connect = () => {
    mongoose
      .connect(`${process.env.MONGO_URI}`)
      .then(() => {
        console.log("Successfully connected to database");
      })
      .catch((error) => {
        console.log(process.env.MONGO_URI);
        console.log(`Error connecting to database ${error}`);
        return process.exit(1);
      });
  };
  connect();
  mongoose.connection.on("disconnected", connect);
};
