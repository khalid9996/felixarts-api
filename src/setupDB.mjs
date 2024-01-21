import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import { httpServer } from "./server.mjs";

configDotenv();
const SERVER_PORT = 5000;

export const dbConnect = () => {
  const connect = () => {
    mongoose
      .connect(`${process.env.MONGO_URI}`)
      .then(() => {
        console.log("Successfully connected to database");
        httpServer.listen(SERVER_PORT, () => {
          console.log(`SERVER RUNNING ON PORT ${SERVER_PORT}`);
        });
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
