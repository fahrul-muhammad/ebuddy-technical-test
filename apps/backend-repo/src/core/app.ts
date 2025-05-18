import express from "express";
import userRoutes from "../routes/userRoutes";

const app = express();
const PORT = 2020;

app.use(express.json());
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
