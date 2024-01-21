import express from "express";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import compression from "compression";
import http from "http";
import { dbConnect } from "./setupDB.mjs";
import { CustomRouter } from "./routes.mjs";

const SERVER_PORT = 5000;

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.use(compression());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(hpp());
app.use(helmet());

////////////////////////

app.get("/", (req, res) => {
  res.status(200).json({ message: "working" });
});

CustomRouter(app);

////////////////////////

app.all("*", (req, res) => {
  res.status(404).json({ message: `${req.originalUrl} not found` });
});

export const httpServer = new http.Server(app);

// httpServer.listen(SERVER_PORT, () => {
dbConnect();
//   console.log(`SERVER RUNNING ON PORT ${SERVER_PORT}`);
// });
