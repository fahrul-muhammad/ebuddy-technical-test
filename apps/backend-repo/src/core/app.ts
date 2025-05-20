import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import userRoutes from "../routes/userRoutes";

dotenv.config();

const app: any = express();

app.use(express.json());
app.use(cors({ origin: true }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.set("etag", false);
app.use(userRoutes);

export default app;
