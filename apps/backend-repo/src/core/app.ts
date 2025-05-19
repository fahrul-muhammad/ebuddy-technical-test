import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import userRoutes from "../routes/userRoutes";

dotenv.config();

const app: any = express();
const PORT = 5001;

app.use(express.json());
app.use(cors({ origin: true }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.set("etag", false);
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

export default app;
